// Latihan SKD CPNS — logika tryout (client-side saja, tidak ada data yang dikirim ke server)
const PASS = { TWK: 65, TIU: 80, TKP: 166 };
const MAX = { TWK: 150, TIU: 175, TKP: 225 };
const LETTERS = ['A','B','C','D','E'];

const MODES = {
  full:   { title: 'Tryout Full — 110 soal', minutes: 100, pick: () => [...QUESTIONS] },
  twk:    { title: 'Latihan TWK — 30 soal', minutes: 25, pick: () => QUESTIONS.filter(q => q.section === 'TWK') },
  tiu:    { title: 'Latihan TIU — 35 soal', minutes: 35, pick: () => QUESTIONS.filter(q => q.section === 'TIU') },
  tkp:    { title: 'Latihan TKP — 45 soal', minutes: 40, pick: () => QUESTIONS.filter(q => q.section === 'TKP') },
  random: { title: 'Latihan Acak — 20 soal', minutes: 20, pick: () => shuffle([...QUESTIONS]).slice(0, 20) },
};
function shuffle(a){ for(let i=a.length-1;i>0;i--){ const j=Math.floor(Math.random()*(i+1)); [a[i],a[j]]=[a[j],a[i]]; } return a; }

let state = null; // {mode, questions, answers:{}, flags:Set, idx, secondsLeft, timerId}
let lastResult = null;

const $ = id => document.getElementById(id);
const show = id => { ['screen-home','screen-quiz','screen-result'].forEach(s => $(s).classList.toggle('hidden', s !== id)); };

function scoreOf(q, choice){
  if (choice === null || choice === undefined) return 0;
  if (q.section === 'TKP') return q.points[choice];
  return choice === q.answer ? 5 : 0;
}
function correctOf(q, choice){
  if (q.section === 'TKP') return choice !== null && choice !== undefined && q.points[choice] === 5;
  return choice === q.answer;
}

function startMode(modeKey){
  const mode = MODES[modeKey];
  state = { modeKey, mode, questions: mode.pick(), answers: {}, flags: new Set(), idx: 0, secondsLeft: mode.minutes * 60, timerId: null };
  $('quiz-title').textContent = mode.title;
  show('screen-quiz');
  renderGrid(); renderQuestion();
  clearInterval(state.timerId);
  state.timerId = setInterval(tick, 1000);
  updateTimer();
  window.scrollTo({top:0});
}
function tick(){
  if (!state) return;
  state.secondsLeft--;
  updateTimer();
  if (state.secondsLeft <= 0){ clearInterval(state.timerId); finish(true); }
}
function updateTimer(){
  const s = Math.max(0, state.secondsLeft);
  const m = Math.floor(s/60), r = s%60;
  const el = $('timer');
  el.textContent = String(m).padStart(2,'0') + ':' + String(r).padStart(2,'0');
  el.classList.toggle('low', s <= 300);
}
function renderGrid(){
  const g = $('q-grid'); g.innerHTML = '';
  state.questions.forEach((q, i) => {
    const b = document.createElement('button');
    b.textContent = i + 1;
    if (state.answers[i] !== undefined) b.classList.add('done');
    if (state.flags.has(i)) b.classList.add('flagged');
    if (i === state.idx) b.classList.add('current');
    b.onclick = () => { state.idx = i; renderQuestion(); renderGrid(); };
    g.appendChild(b);
  });
}
function renderQuestion(){
  const q = state.questions[state.idx];
  $('q-meta').textContent = `Soal ${state.idx+1} dari ${state.questions.length} • ${q.section}` + (q.section==='TKP' ? ' • skor jawaban 1–5' : ' • benar 5, salah 0');
  $('q-text').textContent = q.q;
  $('quiz-progress').textContent = `Dijawab: ${Object.keys(state.answers).length}/${state.questions.length} • Ditandai: ${state.flags.size}`;
  const box = $('q-options'); box.innerHTML = '';
  q.options.forEach((opt, i) => {
    const b = document.createElement('button');
    b.className = 'opt' + (state.answers[state.idx] === i ? ' selected' : '');
    b.innerHTML = `<b>${LETTERS[i]}.</b> ${escapeHtml(opt)}`;
    b.onclick = () => { state.answers[state.idx] = i; renderQuestion(); renderGrid(); };
    box.appendChild(b);
  });
  $('btn-prev').disabled = state.idx === 0;
  $('btn-next').textContent = state.idx === state.questions.length-1 ? 'Ke soal terakhir ✓' : 'Berikutnya →';
  $('btn-flag').textContent = state.flags.has(state.idx) ? '⚑ Sudah ditandai — klik untuk hapus' : '⚑ Tandai ragu-ragu';
}
function escapeHtml(s){ return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;'); }

function finish(timeUp){
  if (!state) return;
  clearInterval(state.timerId);
  const per = { TWK:{got:0,max:0,n:0}, TIU:{got:0,max:0,n:0}, TKP:{got:0,max:0,n:0} };
  let total = 0;
  state.questions.forEach((q, i) => {
    const s = scoreOf(q, state.answers[i]);
    per[q.section].got += s; per[q.section].n++;
    per[q.section].max += (q.section === 'TKP' ? 5 : 5);
    total += s;
  });
  const full = state.modeKey === 'full';
  const passed = ['TWK','TIU','TKP'].every(k => per[k].n === 0 || per[k].got >= PASS[k]);
  lastResult = { modeKey: state.modeKey, title: state.mode.title, per, total, passed, full, timeUp, answers: {...state.answers}, questions: state.questions };
  saveHistory(lastResult);
  renderResult(lastResult);
  show('screen-result');
  window.scrollTo({top:0});
  state = null;
}
function renderResult(r){
  $('result-title').textContent = r.title + (r.timeUp ? ' — waktu habis, otomatis dikumpulkan' : '');
  const row = (k) => r.per[k].n ? `<div class="score"><b>${r.per[k].got}</b>${k} (maks ${MAX[k]}, PG ${PASS[k]})<br><span class="${r.per[k].got>=PASS[k]?'pass':'fail'}">${r.per[k].got>=PASS[k]?'✓ LULUS':'✗ BELUM LULUS'}</span></div>` : '';
  $('result-summary').innerHTML = `
    <div class="scorebox">
      ${row('TWK')}${row('TIU')}${row('TKP')}
      <div class="score"><b>${r.total}</b>Total${r.full ? ' (maks 550, PG total 311)' : ''}<br>${r.full ? `<span class="${r.passed?'pass':'fail'}">${r.passed?'✓ LULUS SKD (semua bagian ≥ PG)':'✗ BELUM LULUS SKD'}</span>` : '<span class="hint">Mode latihan per bagian</span>'}</div>
    </div>
    <p class="hint">Catatan: di ujian asli, lolos SKD berarti TWK ≥ 65 <em>dan</em> TIU ≥ 80 <em>dan</em> TKP ≥ 166 sekaligus, lalu masuk peringkat 3× formasi.</p>`;
  renderReview('all');
}
function renderReview(filter){
  const r = lastResult; if (!r) return;
  const box = $('review'); box.innerHTML = '';
  r.questions.forEach((q, i) => {
    const choice = r.answers[i];
    const s = scoreOf(q, choice);
    const ok = correctOf(q, choice);
    if (filter === 'wrong' && ok) return;
    const div = document.createElement('div');
    div.className = 'review-item' + (ok ? '' : ' wrong');
    let ansHtml;
    if (q.section === 'TKP'){
      ansHtml = q.options.map((o, j) => `<div class="ans">${choice===j?'👉 ':''}<b>${LETTERS[j]} (${q.points[j]} poin)</b> — ${escapeHtml(o)}</div>`).join('');
    } else {
      ansHtml = q.options.map((o, j) => `<div class="ans">${choice===j?'👉 ':''}<b>${LETTERS[j]}</b> — ${escapeHtml(o)}${j===q.answer?' ✅ (kunci)':''}</div>`).join('');
    }
    div.innerHTML = `<p><strong>Soal ${i+1} • ${q.section}</strong> — skor kamu: <strong>${s}</strong>${choice===undefined?' (tidak dijawab)':''}</p>
      <p>${escapeHtml(q.q)}</p>${ansHtml}
      <p class="expl"><strong>Pembahasan:</strong> ${escapeHtml(q.explanation)}</p>`;
    box.appendChild(div);
  });
  if (!box.children.length) box.innerHTML = '<p>Semua jawabanmu sudah maksimal di mode ini. Mantap!</p>';
}

// Riwayat (localStorage)
function saveHistory(r){
  try {
    const h = JSON.parse(localStorage.getItem('cpns-history') || '[]');
    h.unshift({ date: new Date().toLocaleString('id-ID'), title: r.title, total: r.total, twk: r.per.TWK.got, tiu: r.per.TIU.got, tkp: r.per.TKP.got });
    localStorage.setItem('cpns-history', JSON.stringify(h.slice(0, 10)));
  } catch(e){}
  renderHistory();
}
function renderHistory(){
  const box = $('history');
  let h = [];
  try { h = JSON.parse(localStorage.getItem('cpns-history') || '[]'); } catch(e){}
  if (!h.length){ box.innerHTML = '<p class="hint">Belum ada tryout yang selesai.</p>'; return; }
  box.innerHTML = '<table class="pg"><tr><th>Tanggal</th><th>Mode</th><th>Total</th><th>TWK</th><th>TIU</th><th>TKP</th></tr>' +
    h.map(x => `<tr><td>${escapeHtml(x.date)}</td><td>${escapeHtml(x.title)}</td><td>${x.total}</td><td>${x.twk}</td><td>${x.tiu}</td><td>${x.tkp}</td></tr>`).join('') + '</table>';
}

// Events
document.querySelectorAll('.mode').forEach(b => b.addEventListener('click', () => {
  if (!confirm('Mulai ' + MODES[b.dataset.mode].title + '? Timer langsung jalan.')) return;
  startMode(b.dataset.mode);
}));
$('btn-prev').onclick = () => { if (state.idx > 0){ state.idx--; renderQuestion(); renderGrid(); } };
$('btn-next').onclick = () => { if (state.idx < state.questions.length-1){ state.idx++; renderQuestion(); renderGrid(); } };
$('btn-flag').onclick = () => { state.flags.has(state.idx) ? state.flags.delete(state.idx) : state.flags.add(state.idx); renderQuestion(); renderGrid(); };
$('btn-submit').onclick = () => {
  const un = state.questions.length - Object.keys(state.answers).length;
  if (un > 0 && !confirm(`Masih ada ${un} soal belum dijawab. Tetap kumpulkan?`)) return;
  if (!confirm('Kumpulkan jawaban dan lihat skor?')) return;
  finish(false);
};
$('btn-quit').onclick = () => { if (confirm('Batalkan tryout ini? Jawaban tidak tersimpan.')){ clearInterval(state.timerId); state = null; show('screen-home'); renderHistory(); } };
$('filter-all').onclick = () => renderReview('all');
$('filter-wrong').onclick = () => renderReview('wrong');
$('btn-retry').onclick = () => startMode(lastResult.modeKey);
$('btn-home').onclick = () => { show('screen-home'); renderHistory(); };
$('clear-history').onclick = () => { localStorage.removeItem('cpns-history'); renderHistory(); };
renderHistory();
