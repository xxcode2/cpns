/* Latihan SKD CPNS — bank 220 soal (Set A + Set B: TWK 60, TIU 70, TKP 90).
   Tiap tryout mengambil acak 110 soal (30 TWK + 35 TIU + 45 TKP) dan mengacak
   urutan soal serta posisi jawaban, seperti CAT asli.
   Soal latihan berpola sama seperti SKD tahun-tahun sebelumnya berdasarkan kisi-kisi resmi.
   BUKAN soal asli BKN — bank soal CAT BKN bersifat rahasia dan tidak dipublikasikan. */
var QUESTIONS = [
 {
  "answer": 0,
  "explanation": "Menghormati kebebasan beragama dan tidak memaksakan keyakinan adalah pengamalan sila ke-1, Ketuhanan Yang Maha Esa, yang juga dijamin Pasal 29 ayat (2) UUD 1945.",
  "id": 1,
  "options": [
   "Ketuhanan Yang Maha Esa",
   "Kemanusiaan yang adil dan beradab",
   "Persatuan Indonesia",
   "Kerakyatan yang dipimpin oleh hikmat kebijaksanaan dalam permusyawaratan/perwakilan",
   "Keadilan sosial bagi seluruh rakyat Indonesia"
  ],
  "q": "Seorang ASN menghormati rekan kerja yang berbeda agama, tidak memaksakan keyakinannya kepada orang lain, dan tetap bekerja sama dengan baik dalam tim. Sikap tersebut merupakan pengamalan Pancasila sila ke-…",
  "section": "TWK"
 },
 {
  "answer": 1,
  "explanation": "Menolong sesama tanpa diskriminasi dan menjunjung martabat manusia adalah pengamalan sila ke-2, Kemanusiaan yang adil dan beradab.",
  "id": 2,
  "options": [
   "Persatuan Indonesia",
   "Kemanusiaan yang adil dan beradab",
   "Ketuhanan Yang Maha Esa",
   "Keadilan sosial bagi seluruh rakyat Indonesia",
   "Kerakyatan yang dipimpin oleh hikmat kebijaksanaan dalam permusyawaratan/perwakilan"
  ],
  "q": "Ketika terjadi bencana banjir, seorang warga menolong korban tanpa membedakan suku, agama, atau asal daerah korban. Perilaku tersebut paling mencerminkan pengamalan Pancasila sila ke-…",
  "section": "TWK"
 },
 {
  "answer": 4,
  "explanation": "Gotong royong dan menolak perpecahan demi keutuhan bersama adalah pengamalan sila ke-3, Persatuan Indonesia.",
  "id": 3,
  "options": [
   "Kemanusiaan yang adil dan beradab",
   "Keadilan sosial bagi seluruh rakyat Indonesia",
   "Ketuhanan Yang Maha Esa",
   "Kerakyatan yang dipimpin oleh hikmat kebijaksanaan dalam permusyawaratan/perwakilan",
   "Persatuan Indonesia"
  ],
  "q": "Warga desa bergotong royong memperbaiki jembatan yang rusak dan menolak ajakan kelompok yang ingin memecah belah warga berdasarkan suku. Sikap warga tersebut merupakan pengamalan Pancasila sila ke-…",
  "section": "TWK"
 },
 {
  "answer": 3,
  "explanation": "Mengutamakan musyawarah untuk mufakat dan menghargai pendapat dalam pengambilan keputusan adalah pengamalan sila ke-4, Kerakyatan yang dipimpin oleh hikmat kebijaksanaan dalam permusyawaratan/perwakilan.",
  "id": 4,
  "options": [
   "Persatuan Indonesia",
   "Ketuhanan Yang Maha Esa",
   "Kemanusiaan yang adil dan beradab",
   "Kerakyatan yang dipimpin oleh hikmat kebijaksanaan dalam permusyawaratan/perwakilan",
   "Keadilan sosial bagi seluruh rakyat Indonesia"
  ],
  "q": "Dalam rapat kantor, pimpinan memberi kesempatan semua pegawai menyampaikan pendapat, termasuk pendapat yang berbeda, sebelum keputusan diambil bersama. Cara pengambilan keputusan ini mencerminkan Pancasila sila ke-…",
  "section": "TWK"
 },
 {
  "answer": 4,
  "explanation": "Pembagian bantuan yang adil, merata, dan tanpa pilih kasih adalah pengamalan sila ke-5, Keadilan sosial bagi seluruh rakyat Indonesia.",
  "id": 5,
  "options": [
   "Ketuhanan Yang Maha Esa",
   "Kemanusiaan yang adil dan beradab",
   "Persatuan Indonesia",
   "Kerakyatan yang dipimpin oleh hikmat kebijaksanaan dalam permusyawaratan/perwakilan",
   "Keadilan sosial bagi seluruh rakyat Indonesia"
  ],
  "q": "Seorang kepala desa membagikan bantuan sosial tepat sasaran kepada warga yang benar-benar membutuhkan, tanpa membedakan pendukung atau bukan pendukungnya dalam pemilihan. Sikap tersebut mencerminkan Pancasila sila ke-…",
  "section": "TWK"
 },
 {
  "answer": 3,
  "explanation": "Melayani tanpa diskriminasi karena menghormati martabat setiap manusia adalah pengamalan sila ke-2, Kemanusiaan yang adil dan beradab, dan sejalan dengan Pasal 27 ayat (1) UUD 1945 tentang persamaan kedudukan di dalam hukum dan pemerintahan.",
  "id": 6,
  "options": [
   "Persatuan Indonesia",
   "Ketuhanan Yang Maha Esa",
   "Keadilan sosial bagi seluruh rakyat Indonesia",
   "Kemanusiaan yang adil dan beradab",
   "Kerakyatan yang dipimpin oleh hikmat kebijaksanaan dalam permusyawaratan/perwakilan"
  ],
  "q": "Seorang petugas pelayanan publik melayani semua warga dengan ramah dan cepat, tanpa membedakan warga kaya dan warga miskin, serta tanpa meminta imbalan tambahan. Sikap tersebut paling mencerminkan Pancasila sila ke-…",
  "section": "TWK"
 },
 {
  "answer": 4,
  "explanation": "Pengambilan keputusan melalui musyawarah untuk mufakat adalah pengamalan sila ke-4, Kerakyatan yang dipimpin oleh hikmat kebijaksanaan dalam permusyawaratan/perwakilan.",
  "id": 7,
  "options": [
   "Ketuhanan Yang Maha Esa",
   "Persatuan Indonesia",
   "Kemanusiaan yang adil dan beradab",
   "Keadilan sosial bagi seluruh rakyat Indonesia",
   "Kerakyatan yang dipimpin oleh hikmat kebijaksanaan dalam permusyawaratan/perwakilan"
  ],
  "q": "Warga desa bermusyawarah untuk menentukan prioritas pembangunan jalan desa. Keputusan tidak diambil sepihak oleh kepala desa, melainkan disepakati bersama setelah mendengar semua usulan warga. Hal ini merupakan pengamalan Pancasila sila ke-…",
  "section": "TWK"
 },
 {
  "answer": 4,
  "explanation": "Menggunakan dana publik untuk kepentingan kelompok dan merugikan warga yang berhak bertentangan dengan sila ke-5, Keadilan sosial bagi seluruh rakyat Indonesia.",
  "id": 8,
  "options": [
   "Ketuhanan Yang Maha Esa",
   "Kemanusiaan yang adil dan beradab",
   "Persatuan Indonesia",
   "Kerakyatan yang dipimpin oleh hikmat kebijaksanaan dalam permusyawaratan/perwakilan",
   "Keadilan sosial bagi seluruh rakyat Indonesia"
  ],
  "q": "Seorang pejabat menggunakan dana bantuan untuk kepentingan kelompoknya sendiri, sehingga warga yang berhak justru tidak menerima bantuan. Perbuatan pejabat tersebut bertentangan dengan Pancasila sila ke-…",
  "section": "TWK"
 },
 {
  "answer": 0,
  "explanation": "Pasal 1 ayat (3) UUD 1945 menyatakan: Negara Indonesia adalah negara hukum, sehingga semua warga negara, termasuk pejabat, tunduk pada hukum.",
  "id": 9,
  "options": [
   "Pasal 1 ayat (3)",
   "Pasal 1 ayat (1)",
   "Pasal 27 ayat (2)",
   "Pasal 33 ayat (1)",
   "Pasal 36"
  ],
  "q": "Seorang pejabat yang terbukti melakukan korupsi tetap diproses secara hukum dan tidak kebal hukum karena jabatannya. Hal ini menunjukkan bahwa Indonesia adalah negara hukum, sebagaimana ditegaskan dalam UUD 1945 Pasal …",
  "section": "TWK"
 },
 {
  "answer": 1,
  "explanation": "Pasal 27 ayat (1) UUD 1945 menegaskan persamaan kedudukan semua warga negara di dalam hukum dan pemerintahan, tanpa membedakan status sosial atau ekonomi.",
  "id": 10,
  "options": [
   "Setiap warga negara berhak atas pekerjaan dan penghidupan yang layak",
   "Segala warga negara bersamaan kedudukannya di dalam hukum dan pemerintahan dan wajib menjunjung hukum dan pemerintahan itu dengan tidak ada kecualinya",
   "Negara menjamin kemerdekaan tiap-tiap penduduk untuk memeluk agamanya masing-masing",
   "Setiap warga negara berhak mendapat pendidikan",
   "Fakir miskin dan anak-anak terlantar dipelihara oleh negara"
  ],
  "q": "Seorang warga miskin yang menjadi saksi dalam suatu perkara berhak mendapatkan perlakuan yang sama di pengadilan seperti warga lainnya. Prinsip ini diatur dalam UUD 1945 Pasal 27 ayat (1) yang menyatakan bahwa …",
  "section": "TWK"
 },
 {
  "answer": 2,
  "explanation": "Pasal 29 ayat (2) UUD 1945 menyatakan negara menjamin kemerdekaan tiap-tiap penduduk untuk memeluk agamanya masing-masing dan untuk beribadat menurut agamanya dan kepercayaannya itu.",
  "id": 11,
  "options": [
   "Pasal 27 ayat (1)",
   "Pasal 28",
   "Pasal 29 ayat (2)",
   "Pasal 30 ayat (1)",
   "Pasal 31 ayat (1)"
  ],
  "q": "Pemerintah daerah tidak boleh melarang warga memeluk dan menjalankan ibadah sesuai agamanya, selama tidak mengganggu ketertiban umum. Jaminan ini diatur dalam UUD 1945 Pasal …",
  "section": "TWK"
 },
 {
  "answer": 2,
  "explanation": "Pasal 31 ayat (1) UUD 1945 menyatakan setiap warga negara berhak mendapat pendidikan, dan ayat (2) menyatakan setiap warga negara wajib mengikuti pendidikan dasar dan pemerintah wajib membiayainya.",
  "id": 12,
  "options": [
   "Pasal 27 ayat (3)",
   "Pasal 29 ayat (1)",
   "Pasal 31 ayat (1) dan ayat (2)",
   "Pasal 33 ayat (2)",
   "Pasal 34 ayat (2)"
  ],
  "q": "Pemerintah wajib membiayai pendidikan dasar bagi setiap warga negara, dan setiap warga negara berhak mendapat pendidikan. Ketentuan ini diatur dalam UUD 1945 Pasal …",
  "section": "TWK"
 },
 {
  "answer": 3,
  "explanation": "Pasal 33 ayat (3) UUD 1945 menyatakan bumi dan air dan kekayaan alam yang terkandung di dalamnya dikuasai oleh negara dan dipergunakan untuk sebesar-besar kemakmuran rakyat.",
  "id": 13,
  "options": [
   "Perekonomian disusun sebagai usaha bersama berdasar atas asas kekeluargaan",
   "Cabang-cabang produksi yang penting bagi negara dikuasai oleh negara",
   "Setiap warga negara berhak mendapat pendidikan",
   "Bumi dan air dan kekayaan alam yang terkandung di dalamnya dikuasai oleh negara dan dipergunakan untuk sebesar-besar kemakmuran rakyat",
   "Fakir miskin dan anak-anak terlantar dipelihara oleh negara"
  ],
  "q": "Pengelolaan tambang dan kekayaan alam harus dilakukan untuk sebesar-besar kemakmuran rakyat, bukan hanya untuk keuntungan sekelompok orang. Prinsip ini diatur dalam UUD 1945 Pasal 33 ayat (3) yang menyatakan bahwa …",
  "section": "TWK"
 },
 {
  "answer": 4,
  "explanation": "Pasal 34 ayat (1) UUD 1945 menyatakan fakir miskin dan anak-anak terlantar dipelihara oleh negara.",
  "id": 14,
  "options": [
   "Pasal 28 ayat (1)",
   "Pasal 30 ayat (2)",
   "Pasal 31 ayat (1)",
   "Pasal 33 ayat (1)",
   "Pasal 34 ayat (1)"
  ],
  "q": "Pemerintah memberikan bantuan dan perlindungan kepada fakir miskin serta anak-anak terlantar karena mereka tidak mampu memenuhi kebutuhan dasarnya sendiri. Kewajiban negara ini diatur dalam UUD 1945 Pasal …",
  "section": "TWK"
 },
 {
  "answer": 2,
  "explanation": "Pasal 24C ayat (1) UUD 1945 memberi wewenang kepada Mahkamah Konstitusi untuk menguji undang-undang terhadap Undang-Undang Dasar.",
  "id": 15,
  "options": [
   "Mahkamah Agung",
   "Badan Pemeriksa Keuangan",
   "Mahkamah Konstitusi",
   "Komisi Yudisial",
   "Dewan Perwakilan Daerah"
  ],
  "q": "Sebuah undang-undang diduga bertentangan dengan UUD 1945. Lembaga negara yang berwenang menguji undang-undang tersebut terhadap UUD 1945 adalah …",
  "section": "TWK"
 },
 {
  "answer": 2,
  "explanation": "UUD 1945 diamandemen sebanyak 4 kali, yaitu pada tahun 1999, 2000, 2001, dan 2002, antara lain mengubah sistem ketatanegaraan dan memperkuat hak asasi manusia.",
  "id": 16,
  "options": [
   "1 kali pada tahun 1999",
   "2 kali pada tahun 1999 dan 2000",
   "4 kali pada tahun 1999, 2000, 2001, dan 2002",
   "3 kali pada tahun 2000, 2001, dan 2002",
   "5 kali pada tahun 1999 sampai dengan 2003"
  ],
  "q": "UUD Negara Republik Indonesia Tahun 1945 telah mengalami perubahan (amandemen) sebanyak …",
  "section": "TWK"
 },
 {
  "answer": 3,
  "explanation": "Pasal 36A UUD 1945 menyatakan lambang negara ialah Garuda Pancasila dengan semboyan Bhinneka Tunggal Ika, yang berasal dari Kitab Sutasoma karya Mpu Tantular.",
  "id": 17,
  "options": [
   "Pasal 32 ayat (1)",
   "Pasal 36",
   "Pasal 35",
   "Pasal 36A",
   "Pasal 37 ayat (5)"
  ],
  "q": "Semboyan Bhinneka Tunggal Ika yang berarti berbeda-beda tetapi tetap satu jua berasal dari Kitab Sutasoma karya Mpu Tantular dan tercantum dalam UUD 1945 Pasal …",
  "section": "TWK"
 },
 {
  "answer": 0,
  "explanation": "Pasal 27 ayat (3) dan Pasal 30 ayat (1) UUD 1945 serta UU No. 23 Tahun 2019 tentang Pengelolaan Sumber Daya Nasional untuk Pertahanan Negara menegaskan setiap warga negara berhak dan wajib ikut serta dalam upaya pembelaan negara, termasuk melalui sikap sadar berbangsa, menaati hukum, dan menjaga ketertiban.",
  "id": 18,
  "options": [
   "Ikut menjaga keamanan lingkungan, menaati hukum, dan membayar pajak tepat waktu",
   "Menolak membayar pajak karena merasa tidak mendapat manfaat langsung",
   "Menyebarkan kabar yang belum jelas kebenarannya di media sosial",
   "Menolak mengikuti kegiatan gotong royong di lingkungan tempat tinggal",
   "Mengabaikan peraturan lalu lintas karena tidak ada petugas yang mengawasi"
  ],
  "q": "Bela negara tidak hanya dilakukan dengan mengangkat senjata. Bagi warga sipil, bentuk bela negara yang paling tepat dalam kehidupan sehari-hari adalah …",
  "section": "TWK"
 },
 {
  "answer": 1,
  "explanation": "Menolak gratifikasi meskipun tidak ada yang mengawasi adalah wujud integritas, yaitu kesesuaian antara ucapan dan perbuatan serta kejujuran, yang menjadi nilai dasar ASN dan pengamalan sila ke-2 Pancasila.",
  "id": 19,
  "options": [
   "Hedonisme",
   "Integritas",
   "Nepotisme",
   "Individualisme",
   "Apatisme"
  ],
  "q": "Seorang ASN menolak pemberian uang dari vendor pemenang tender, meskipun pemberian itu dilakukan diam-diam dan tidak ada yang mengetahui. Sikap ASN tersebut paling mencerminkan nilai …",
  "section": "TWK"
 },
 {
  "answer": 3,
  "explanation": "Pasal 37 ayat (5) UUD 1945 secara tegas menyatakan bentuk Negara Kesatuan Republik Indonesia tidak dapat dilakukan perubahan, sehingga NKRI bersifat final.",
  "id": 20,
  "options": [
   "Kedaulatan berada di tangan rakyat",
   "Negara Indonesia adalah negara hukum",
   "Bahasa negara ialah Bahasa Indonesia",
   "Bentuk Negara Kesatuan Republik Indonesia tidak dapat dilakukan perubahan",
   "Presiden memegang kekuasaan pemerintahan menurut Undang-Undang Dasar"
  ],
  "q": "Ada usulan untuk mengubah bentuk Negara Kesatuan Republik Indonesia menjadi negara federal. Usulan tersebut bertentangan dengan UUD 1945, karena Pasal 37 ayat (5) menyatakan bahwa …",
  "section": "TWK"
 },
 {
  "answer": 1,
  "explanation": "Menolak separatisme dan menjaga persatuan adalah wujud nasionalisme dan cinta tanah air dalam menjaga keutuhan NKRI, sejalan dengan sila ke-3 Pancasila, Persatuan Indonesia.",
  "id": 21,
  "options": [
   "Sikap separatisme yang harus dihindari",
   "Nasionalisme dan cinta tanah air dalam menjaga keutuhan NKRI",
   "Sikap apatis terhadap kondisi bangsa",
   "Primordialisme yang mengutamakan kelompok sendiri",
   "Eksklusivisme yang menutup diri dari kelompok lain"
  ],
  "q": "Seorang pemuda menolak ajakan kelompok yang ingin memisahkan daerahnya dari Indonesia dan justru mengajak teman-temannya menjaga persatuan serta menghormati perbedaan. Sikap pemuda tersebut mencerminkan …",
  "section": "TWK"
 },
 {
  "answer": 2,
  "explanation": "Menghormati perbedaan dan bekerja sama adalah wujud pengamalan Bhinneka Tunggal Ika dan sila ke-3 Pancasila, Persatuan Indonesia, serta sejalan dengan Pasal 28E UUD 1945 tentang kebebasan beragama dan berkeyakinan.",
  "id": 22,
  "options": [
   "Memaksakan tradisi kelompok sendiri kepada warga lain",
   "Menghindari warga yang berbeda suku dan agama",
   "Menghormati perbedaan, tidak menyebarkan ujaran kebencian, dan bekerja sama dalam kegiatan bersama",
   "Membatasi pergaulan hanya dengan warga yang seagama",
   "Menolak kegiatan bersama yang melibatkan warga berbeda keyakinan"
  ],
  "q": "Di sebuah lingkungan yang dihuni warga dari berbagai suku dan agama, sikap yang paling tepat untuk menjaga kerukunan adalah …",
  "section": "TWK"
 },
 {
  "answer": 0,
  "explanation": "Cinta tanah air diwujudkan dengan menggunakan produk dalam negeri, menjaga fasilitas umum, dan bangga berbahasa Indonesia, sebagai pengamalan sila ke-3 Pancasila, Persatuan Indonesia.",
  "id": 23,
  "options": [
   "Menggunakan produk dalam negeri, menjaga fasilitas umum, dan bangga menggunakan Bahasa Indonesia",
   "Lebih memilih produk luar negeri karena dianggap lebih bergengsi",
   "Merusak fasilitas umum karena merasa bukan miliknya",
   "Tidak peduli terhadap upacara bendera dan hari besar nasional",
   "Menyebarkan berita yang menjelek-jelekkan bangsa sendiri"
  ],
  "q": "Berikut ini yang paling mencerminkan rasa nasionalisme seorang warga dalam kehidupan sehari-hari adalah …",
  "section": "TWK"
 },
 {
  "answer": 0,
  "explanation": "Pada 1 Juni 1945, dalam sidang BPUPKI, Soekarno menyampaikan pidato yang mengusulkan Pancasila sebagai dasar negara, sehingga tanggal tersebut diperingati sebagai Hari Lahir Pancasila.",
  "id": 24,
  "options": [
   "Pidato Soekarno yang mengusulkan dasar negara Pancasila dalam sidang BPUPKI pada 1 Juni 1945",
   "Pembacaan Proklamasi Kemerdekaan pada 17 Agustus 1945",
   "Pengesahan UUD 1945 oleh PPKI pada 18 Agustus 1945",
   "Ikrar Sumpah Pemuda pada 28 Oktober 1928",
   "Pembentukan BPUPKI pada 29 April 1945"
  ],
  "q": "Hari Lahir Pancasila diperingati setiap tanggal 1 Juni. Peristiwa yang menjadi dasar penetapan tanggal tersebut adalah …",
  "section": "TWK"
 },
 {
  "answer": 1,
  "explanation": "BPUPKI dibentuk pada 29 April 1945, diketuai Dr. Radjiman Wedyodiningrat, untuk menyelidiki dan mempersiapkan kemerdekaan, termasuk membahas dasar negara dalam sidang 29 Mei-1 Juni 1945.",
  "id": 25,
  "options": [
   "Mengesahkan UUD 1945 dan memilih presiden serta wakil presiden pertama",
   "Menyiapkan dan membahas dasar negara serta hal-hal yang berkaitan dengan persiapan kemerdekaan Indonesia",
   "Menyusun dan mengikrarkan Sumpah Pemuda",
   "Memproklamasikan kemerdekaan Indonesia",
   "Membentuk Tentara Nasional Indonesia"
  ],
  "q": "Badan Penyelidik Usaha-Usaha Persiapan Kemerdekaan Indonesia (BPUPKI) dibentuk untuk …",
  "section": "TWK"
 },
 {
  "answer": 3,
  "explanation": "Sidang PPKI pada 18 Agustus 1945 mengesahkan UUD 1945 dan memilih Soekarno sebagai presiden serta Mohammad Hatta sebagai wakil presiden Republik Indonesia.",
  "id": 26,
  "options": [
   "Membacakan teks Proklamasi Kemerdekaan Indonesia",
   "Mengikrarkan Sumpah Pemuda",
   "Membentuk BPUPKI",
   "Mengesahkan UUD 1945 dan memilih Soekarno sebagai presiden dan Mohammad Hatta sebagai wakil presiden",
   "Merumuskan dasar negara Pancasila untuk pertama kali"
  ],
  "q": "Pada sidang tanggal 18 Agustus 1945, Panitia Persiapan Kemerdekaan Indonesia (PPKI) mengambil keputusan penting, yaitu …",
  "section": "TWK"
 },
 {
  "answer": 1,
  "explanation": "Ikrar Sumpah Pemuda 28 Oktober 1928 menegaskan satu tanah air, satu bangsa, dan satu bahasa persatuan, yaitu Bahasa Indonesia, sebagai tonggak persatuan nasional.",
  "id": 27,
  "options": [
   "Mendirikan BPUPKI dan PPKI",
   "Bertumpah darah yang satu, tanah air Indonesia; berbangsa yang satu, bangsa Indonesia; dan menjunjung bahasa persatuan, Bahasa Indonesia",
   "Memproklamasikan kemerdekaan Indonesia",
   "Mengesahkan UUD 1945",
   "Membentuk negara federal Indonesia"
  ],
  "q": "Sumpah Pemuda yang diikrarkan pada 28 Oktober 1928 berisi tekad para pemuda untuk …",
  "section": "TWK"
 },
 {
  "answer": 2,
  "explanation": "Proklamasi 17 Agustus 1945 menandai dinyatakannya kemerdekaan Indonesia dan berdirinya Negara Kesatuan Republik Indonesia, yang kemudian dilengkapi dengan pengesahan UUD 1945 pada 18 Agustus 1945.",
  "id": 28,
  "options": [
   "Berdirinya BPUPKI sebagai badan persiapan kemerdekaan",
   "Lahirnya Pancasila sebagai dasar negara",
   "Dinyatakannya kemerdekaan Indonesia dan berdirinya Negara Kesatuan Republik Indonesia",
   "Disahkannya UUD 1945",
   "Diikrarkannya Sumpah Pemuda"
  ],
  "q": "Proklamasi Kemerdekaan Indonesia dibacakan oleh Soekarno pada 17 Agustus 1945 di Jalan Pegangsaan Timur Nomor 56, Jakarta. Makna terpenting dari peristiwa tersebut adalah …",
  "section": "TWK"
 },
 {
  "answer": 3,
  "explanation": "Pasal 36 UUD 1945 menyatakan: Bahasa negara ialah Bahasa Indonesia.",
  "id": 29,
  "options": [
   "Pasal 32 ayat (1)",
   "Pasal 35",
   "Pasal 36A",
   "Pasal 36",
   "Pasal 37 ayat (5)"
  ],
  "q": "Kedudukan Bahasa Indonesia sebagai bahasa negara diatur dalam UUD 1945 Pasal …",
  "section": "TWK"
 },
 {
  "answer": 1,
  "explanation": "Bahasa Indonesia adalah bahasa persatuan yang diikrarkan dalam Sumpah Pemuda 1928 dan bahasa negara menurut Pasal 36 UUD 1945, sehingga wajib digunakan dalam urusan resmi dan pelayanan publik.",
  "id": 30,
  "options": [
   "Bahasa daerah yang hanya digunakan di daerah tertentu",
   "Bahasa persatuan dan bahasa negara sebagaimana diatur Pasal 36 UUD 1945 dan ditegaskan dalam Sumpah Pemuda 1928",
   "Bahasa asing yang digunakan untuk keperluan internasional saja",
   "Bahasa sehari-hari yang tidak terikat aturan resmi",
   "Bahasa yang boleh digantikan bahasa daerah dalam semua urusan resmi negara"
  ],
  "q": "Dalam memberikan pelayanan publik, seorang ASN wajib menggunakan Bahasa Indonesia yang baik dan benar. Hal ini sejalan dengan kedudukan Bahasa Indonesia sebagai …",
  "section": "TWK"
 },
 {
  "answer": 0,
  "explanation": "Inovatif berarti mampu menciptakan atau memperkenalkan hal baru. Sinonimnya yang paling tepat adalah kreatif dan memperkenalkan hal baru.",
  "id": 31,
  "options": [
   "Kreatif dan memperkenalkan hal baru",
   "Biasa dan tidak berubah",
   "Lambat dalam bekerja",
   "Kaku dan sulit berubah",
   "Sederhana dan kuno"
  ],
  "q": "Sinonim kata \"INOVATIF\" adalah ...",
  "section": "TIU"
 },
 {
  "answer": 2,
  "explanation": "Kredibel berarti dapat dipercaya atau terpercaya. Lawannya adalah meragukan / tidak dapat dipercaya.",
  "id": 32,
  "options": [
   "Meragukan",
   "Tidak dapat dipercaya",
   "Dapat dipercaya",
   "Tidak jelas",
   "Berbahaya"
  ],
  "q": "Sinonim kata \"KREDIBEL\" adalah ...",
  "section": "TIU"
 },
 {
  "answer": 1,
  "explanation": "Efisien berarti tepat guna, hemat waktu, tenaga, dan biaya. Jadi sinonimnya adalah berdaya guna dan hemat.",
  "id": 33,
  "options": [
   "Boros",
   "Berdaya guna dan hemat",
   "Lambat",
   "Berlebihan",
   "Tidak teratur"
  ],
  "q": "Sinonim kata \"EFISIEN\" adalah ...",
  "section": "TIU"
 },
 {
  "answer": 1,
  "explanation": "Pesimis berarti tidak yakin / berprasangka buruk terhadap hasil. Antonimnya adalah optimis, yaitu yakin dan berpengharapan baik.",
  "id": 34,
  "options": [
   "Putus asa",
   "Optimis",
   "Sedih",
   "Takut",
   "Pasrah"
  ],
  "q": "Antonim kata \"PESIMIS\" adalah ...",
  "section": "TIU"
 },
 {
  "answer": 1,
  "explanation": "Kaku berarti tidak lentur / sulit berubah. Antonimnya adalah fleksibel, yaitu lentur dan mudah menyesuaikan diri.",
  "id": 35,
  "options": [
   "Keras",
   "Fleksibel",
   "Tegang",
   "Dingin",
   "Kasar"
  ],
  "q": "Antonim kata \"KAKU\" adalah ...",
  "section": "TIU"
 },
 {
  "answer": 0,
  "explanation": "Abstrak berarti tidak berwujud / tidak nyata. Antonimnya adalah nyata / konkret, yaitu dapat dilihat dan diraba.",
  "id": 36,
  "options": [
   "Nyata / konkret",
   "Samar",
   "Tidak jelas",
   "Teoretis",
   "Gaib"
  ],
  "q": "Antonim kata \"ABSTRAK\" adalah ...",
  "section": "TIU"
 },
 {
  "answer": 1,
  "explanation": "Hubungannya adalah sebab-akibat / kebutuhan: makan dilakukan karena lapar, lampu dinyalakan karena gelap.",
  "id": 37,
  "options": [
   "Terang",
   "Gelap",
   "Listrik",
   "Menyala",
   "Panas"
  ],
  "q": "MAKAN : LAPAR = LAMPU : ...",
  "section": "TIU"
 },
 {
  "answer": 1,
  "explanation": "Hubungannya alat dan fungsinya: pena adalah alat untuk menulis, kuas adalah alat untuk melukis.",
  "id": 38,
  "options": [
   "Menggambar",
   "Melukis",
   "Mewarnai",
   "Menghapus",
   "Memotong"
  ],
  "q": "PENA : MENULIS = KUAS : ...",
  "section": "TIU"
 },
 {
  "answer": 0,
  "explanation": "Hubungannya profesi dan tugas utamanya: guru tugasnya mengajar, dokter tugasnya mengobati pasien.",
  "id": 39,
  "options": [
   "Mengobati",
   "Belajar",
   "Meneliti",
   "Menjual obat",
   "Membangun rumah"
  ],
  "q": "GURU : MENGAJAR = DOKTER : ...",
  "section": "TIU"
 },
 {
  "answer": 1,
  "explanation": "Hubungannya benda dan cara menggunakannya: buku dibaca, piano dimainkan.",
  "id": 40,
  "options": [
   "Mendengarkan",
   "Memainkan",
   "Menyanyi",
   "Menari",
   "Menulis"
  ],
  "q": "BUKU : MEMBACA = PIANO : ...",
  "section": "TIU"
 },
 {
  "answer": 2,
  "explanation": "Selisihnya: 6-2=4, 12-6=6, 20-12=8, 30-20=10. Selisih bertambah 2 setiap langkah, jadi selisih berikutnya 12. 30+12=42.",
  "id": 41,
  "options": [
   "36",
   "40",
   "42",
   "44",
   "48"
  ],
  "q": "2, 6, 12, 20, 30, ... Berapakah angka berikutnya?",
  "section": "TIU"
 },
 {
  "answer": 3,
  "explanation": "Setiap suku dikali 3: 3x3=9, 9x3=27, 27x3=81. Jadi suku berikutnya 81x3=243.",
  "id": 42,
  "options": [
   "162",
   "189",
   "216",
   "243",
   "324"
  ],
  "q": "3, 9, 27, 81, ... Berapakah angka berikutnya?",
  "section": "TIU"
 },
 {
  "answer": 2,
  "explanation": "Selisihnya: 100-90=10, 90-81=9, 81-73=8, 73-66=7. Pengurang berkurang 1 setiap langkah, jadi pengurang berikutnya 6. 66-6=60.",
  "id": 43,
  "options": [
   "58",
   "59",
   "60",
   "61",
   "62"
  ],
  "q": "100, 90, 81, 73, 66, ... Berapakah angka berikutnya?",
  "section": "TIU"
 },
 {
  "answer": 2,
  "explanation": "Polanya dikali 2 lalu ditambah 1: 5x2+1=11, 11x2+1=23, 23x2+1=47, 47x2+1=95. Jadi berikutnya 95x2+1=191.",
  "id": 44,
  "options": [
   "181",
   "185",
   "191",
   "197",
   "201"
  ],
  "q": "5, 11, 23, 47, 95, ... Berapakah angka berikutnya?",
  "section": "TIU"
 },
 {
  "answer": 3,
  "explanation": "Selisihnya: 1, 2, 4, 8, 16 — selisihnya berlipat 2. Selisih berikutnya 32. 33+32=65. (Pola lain: dikali 2 dikurangi 1: 2x2-1=3, 3x2-1=5, dan seterusnya.)",
  "id": 45,
  "options": [
   "49",
   "57",
   "61",
   "65",
   "69"
  ],
  "q": "2, 3, 5, 9, 17, 33, ... Berapakah angka berikutnya?",
  "section": "TIU"
 },
 {
  "answer": 2,
  "explanation": "60% dari 200 = 60/100 x 200 = 120 siswa.",
  "id": 46,
  "options": [
   "100 siswa",
   "110 siswa",
   "120 siswa",
   "130 siswa",
   "140 siswa"
  ],
  "q": "Dari 200 siswa, 60% hadir di sekolah. Berapa jumlah siswa yang hadir?",
  "section": "TIU"
 },
 {
  "answer": 2,
  "explanation": "Harga per kg = Rp50.000 : 5 = Rp10.000. Harga 8 kg = 8 x Rp10.000 = Rp80.000.",
  "id": 47,
  "options": [
   "Rp70.000,00",
   "Rp75.000,00",
   "Rp80.000,00",
   "Rp85.000,00",
   "Rp90.000,00"
  ],
  "q": "Harga 5 kg beras adalah Rp50.000,00. Berapa harga 8 kg beras yang sama?",
  "section": "TIU"
 },
 {
  "answer": 2,
  "explanation": "(x+y)^2 = x^2 + 2xy + y^2. Jadi 12^2 = x^2 + y^2 + 2x35, yaitu 144 = x^2 + y^2 + 70. Maka x^2 + y^2 = 144 - 70 = 74. (Cek: x=5, y=7, 25+49=74.)",
  "id": 48,
  "options": [
   "64",
   "70",
   "74",
   "79",
   "84"
  ],
  "q": "Jika diketahui x + y = 12 dan xy = 35, berapakah nilai x^2 + y^2?",
  "section": "TIU"
 },
 {
  "answer": 2,
  "explanation": "37,5% = 37,5/100 = 3/8. 3/8 x 80 = 240/8 = 30.",
  "id": 49,
  "options": [
   "25",
   "28",
   "30",
   "32",
   "35"
  ],
  "q": "Berapakah 37,5% dari 80?",
  "section": "TIU"
 },
 {
  "answer": 3,
  "explanation": "Jumlah bagian = 3+5 = 8 bagian. Satu bagian = Rp160.000 : 8 = Rp20.000. Uang Budi = 5 x Rp20.000 = Rp100.000.",
  "id": 50,
  "options": [
   "Rp60.000,00",
   "Rp80.000,00",
   "Rp90.000,00",
   "Rp100.000,00",
   "Rp120.000,00"
  ],
  "q": "Perbandingan uang Andi dan Budi adalah 3 : 5. Jumlah uang mereka Rp160.000,00. Berapa uang Budi?",
  "section": "TIU"
 },
 {
  "answer": 2,
  "explanation": "Total pekerjaan = 20 orang x 25 hari = 500 orang-hari. Untuk 20 hari dibutuhkan 500 : 20 = 25 pekerja. Tambahan = 25 - 20 = 5 orang.",
  "id": 51,
  "options": [
   "3 orang",
   "4 orang",
   "5 orang",
   "6 orang",
   "10 orang"
  ],
  "q": "Sebuah proyek pembangunan gedung dapat diselesaikan oleh 20 orang pekerja dalam waktu 25 hari. Jika proyek harus diselesaikan dalam waktu 20 hari, berapa tambahan pekerja yang diperlukan?",
  "section": "TIU"
 },
 {
  "answer": 2,
  "explanation": "Kecepatan gabungan = 1/4 + 1/6 = 3/12 + 2/12 = 5/12 kolam per jam. Waktu = 1 : 5/12 = 12/5 jam = 2,4 jam = 2 jam 24 menit.",
  "id": 52,
  "options": [
   "2 jam",
   "2 jam 12 menit",
   "2 jam 24 menit",
   "2 jam 30 menit",
   "3 jam"
  ],
  "q": "Pipa A dapat mengisi sebuah kolam hingga penuh dalam waktu 4 jam, sedangkan pipa B membutuhkan waktu 6 jam untuk mengisi kolam yang sama. Jika kedua pipa dibuka bersamaan, berapa lama waktu yang dibutuhkan untuk mengisi kolam hingga penuh?",
  "section": "TIU"
 },
 {
  "answer": 2,
  "explanation": "Harga jual total = 10 x Rp18.000 = Rp180.000. Untung = Rp180.000 - Rp150.000 = Rp30.000. Persentase untung = 30.000/150.000 x 100% = 20%.",
  "id": 53,
  "options": [
   "10%",
   "15%",
   "20%",
   "25%",
   "30%"
  ],
  "q": "Seorang pedagang membeli 10 kg apel seharga Rp150.000,00, lalu menjualnya dengan harga Rp18.000,00 per kg. Berapa persen keuntungan yang diperoleh pedagang tersebut?",
  "section": "TIU"
 },
 {
  "answer": 1,
  "explanation": "Budi termasuk dalam kelompok ASN, dan semua ASN adalah pegawai negeri, jadi Budi pasti pegawai negeri.",
  "id": 54,
  "options": [
   "Budi bukan pegawai negeri",
   "Budi adalah pegawai negeri",
   "Semua pegawai negeri adalah Budi",
   "Budi mungkin bukan ASN",
   "Tidak dapat disimpulkan"
  ],
  "q": "Semua ASN adalah pegawai negeri. Budi adalah ASN. Kesimpulan yang tepat adalah ...",
  "section": "TIU"
 },
 {
  "answer": 1,
  "explanation": "Andi termasuk dalam kelompok mahasiswa, dan semua mahasiswa harus mengikuti ujian, jadi Andi harus mengikuti ujian.",
  "id": 55,
  "options": [
   "Andi tidak harus mengikuti ujian",
   "Andi harus mengikuti ujian",
   "Semua yang mengikuti ujian adalah Andi",
   "Andi bukan mahasiswa",
   "Tidak dapat disimpulkan"
  ],
  "q": "Semua mahasiswa harus mengikuti ujian. Andi adalah mahasiswa. Kesimpulan yang tepat adalah ...",
  "section": "TIU"
 },
 {
  "answer": 0,
  "explanation": "Kucing termasuk mamalia, dan semua mamalia bernapas dengan paru-paru, jadi semua kucing pasti bernapas dengan paru-paru.",
  "id": 56,
  "options": [
   "Semua kucing bernapas dengan paru-paru",
   "Sebagian kucing tidak bernapas dengan paru-paru",
   "Tidak ada kucing yang bernapas dengan paru-paru",
   "Semua mamalia adalah kucing",
   "Tidak dapat disimpulkan"
  ],
  "q": "Semua kucing adalah mamalia. Semua mamalia bernapas dengan paru-paru. Kesimpulan yang tepat adalah ...",
  "section": "TIU"
 },
 {
  "answer": 1,
  "explanation": "Jika hujan maka jalanan basah. Jalanan tidak basah berarti syarat akibatnya tidak terjadi, jadi hari ini tidak hujan (modus tollens).",
  "id": 57,
  "options": [
   "Hari ini hujan",
   "Hari ini tidak hujan",
   "Jalanan basah karena hujan",
   "Tidak dapat disimpulkan",
   "Hari ini pasti hujan deras"
  ],
  "q": "Jika hari hujan, maka jalanan basah. Hari ini jalanan tidak basah. Kesimpulan yang tepat adalah ...",
  "section": "TIU"
 },
 {
  "answer": 2,
  "explanation": "Rajin adalah syarat cukup untuk lulus, bukan syarat perlu. Rina bisa lulus karena sebab lain, jadi dari Rina lulus saja tidak bisa disimpulkan ia pasti rajin.",
  "id": 58,
  "options": [
   "Rina pasti rajin",
   "Rina pasti tidak rajin",
   "Tidak dapat disimpulkan apakah Rina rajin",
   "Semua yang lulus pasti rajin",
   "Rina tidak mengikuti ujian"
  ],
  "q": "Semua siswa yang rajin akan lulus. Rina lulus. Kesimpulan yang tepat adalah ...",
  "section": "TIU"
 },
 {
  "answer": 1,
  "explanation": "Premis pertama menyatakan belajar menyebabkan lulus, dan Andi belajar, jadi Andi lulus (modus ponens).",
  "id": 59,
  "options": [
   "Andi tidak lulus",
   "Andi lulus",
   "Andi mungkin lulus",
   "Tidak dapat disimpulkan",
   "Andi tidak belajar"
  ],
  "q": "Jika Andi belajar, maka ia lulus. Andi belajar. Kesimpulan yang tepat adalah ...",
  "section": "TIU"
 },
 {
  "answer": 2,
  "explanation": "Kelompok peneliti hanya sebagian dari sarjana, dan tidak diketahui apakah bagian itu beririsan dengan dokter. Jadi tidak dapat dipastikan sebagian dokter adalah peneliti.",
  "id": 60,
  "options": [
   "Sebagian dokter pasti peneliti",
   "Semua dokter adalah peneliti",
   "Tidak dapat dipastikan sebagian dokter adalah peneliti",
   "Semua peneliti adalah dokter",
   "Sebagian peneliti adalah dokter"
  ],
  "q": "Semua dokter adalah sarjana. Sebagian sarjana adalah peneliti. Kesimpulan yang tepat adalah ...",
  "section": "TIU"
 },
 {
  "id": 61,
  "section": "TIU",
  "q": "Perhatikan deretan gambar berikut. Gambar berikutnya adalah ...",
  "figure": "<div class=\"fig-seq\"><svg viewBox=\"0 0 64 64\" width=\"64\" height=\"64\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"2\" y=\"2\" width=\"60\" height=\"60\" fill=\"#ffffff\" stroke=\"#1c2733\" stroke-width=\"2\"/><polygon points=\"32.0,12.0 49.3,42.0 14.7,42.0\" fill=\"#111111\"/></svg><svg viewBox=\"0 0 64 64\" width=\"64\" height=\"64\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"2\" y=\"2\" width=\"60\" height=\"60\" fill=\"#ffffff\" stroke=\"#1c2733\" stroke-width=\"2\"/><circle cx=\"32\" cy=\"32\" r=\"18\" fill=\"#111111\"/></svg><svg viewBox=\"0 0 64 64\" width=\"64\" height=\"64\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"2\" y=\"2\" width=\"60\" height=\"60\" fill=\"#ffffff\" stroke=\"#1c2733\" stroke-width=\"2\"/><rect x=\"14\" y=\"14\" width=\"36\" height=\"36\" fill=\"#111111\"/></svg><svg viewBox=\"0 0 64 64\" width=\"64\" height=\"64\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"2\" y=\"2\" width=\"60\" height=\"60\" fill=\"#ffffff\" stroke=\"#1c2733\" stroke-width=\"2\"/><polygon points=\"32.0,12.0 49.3,42.0 14.7,42.0\" fill=\"#111111\"/></svg><svg viewBox=\"0 0 64 64\" width=\"64\" height=\"64\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"2\" y=\"2\" width=\"60\" height=\"60\" fill=\"#ffffff\" stroke=\"#1c2733\" stroke-width=\"2\"/><circle cx=\"32\" cy=\"32\" r=\"18\" fill=\"#111111\"/></svg><svg viewBox=\"0 0 64 64\" width=\"64\" height=\"64\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"2\" y=\"2\" width=\"60\" height=\"60\" fill=\"#f1f5f9\" stroke=\"#1c2733\" stroke-width=\"2\"/><text x=\"32\" y=\"43\" text-anchor=\"middle\" font-size=\"30\" font-weight=\"bold\" fill=\"#0b3d91\">?</text></svg></div>",
  "options": [
   "Segitiga",
   "Lingkaran",
   "Persegi",
   "Belah ketupat",
   "Bintang"
  ],
  "optionFigures": [
   "<svg viewBox=\"0 0 64 64\" width=\"56\" height=\"56\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"2\" y=\"2\" width=\"60\" height=\"60\" fill=\"#ffffff\" stroke=\"#1c2733\" stroke-width=\"2\"/><polygon points=\"32.0,12.0 49.3,42.0 14.7,42.0\" fill=\"#111111\"/></svg>",
   "<svg viewBox=\"0 0 64 64\" width=\"56\" height=\"56\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"2\" y=\"2\" width=\"60\" height=\"60\" fill=\"#ffffff\" stroke=\"#1c2733\" stroke-width=\"2\"/><circle cx=\"32\" cy=\"32\" r=\"18\" fill=\"#111111\"/></svg>",
   "<svg viewBox=\"0 0 64 64\" width=\"56\" height=\"56\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"2\" y=\"2\" width=\"60\" height=\"60\" fill=\"#ffffff\" stroke=\"#1c2733\" stroke-width=\"2\"/><rect x=\"14\" y=\"14\" width=\"36\" height=\"36\" fill=\"#111111\"/></svg>",
   "<svg viewBox=\"0 0 64 64\" width=\"56\" height=\"56\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"2\" y=\"2\" width=\"60\" height=\"60\" fill=\"#ffffff\" stroke=\"#1c2733\" stroke-width=\"2\"/><polygon points=\"32.0,12.0 52.0,32.0 32.0,52.0 12.0,32.0\" fill=\"#111111\"/></svg>",
   "<svg viewBox=\"0 0 64 64\" width=\"56\" height=\"56\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"2\" y=\"2\" width=\"60\" height=\"60\" fill=\"#ffffff\" stroke=\"#1c2733\" stroke-width=\"2\"/><polygon points=\"32.0,11.0 37.0,25.1 52.0,25.5 40.1,34.6 44.3,49.0 32.0,40.5 19.7,49.0 23.9,34.6 12.0,25.5 27.0,25.1\" fill=\"#111111\"/></svg>"
  ],
  "answer": 2,
  "explanation": "Pola berulang 3 bentuk: segitiga - lingkaran - persegi, lalu kembali ke segitiga - lingkaran - persegi. Setelah segitiga, lingkaran, berikutnya adalah persegi."
 },
 {
  "id": 62,
  "section": "TIU",
  "q": "Perhatikan deretan gambar berikut. Gambar berikutnya adalah ...",
  "figure": "<div class=\"fig-seq\"><svg viewBox=\"0 0 64 64\" width=\"64\" height=\"64\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"2\" y=\"2\" width=\"60\" height=\"60\" fill=\"#ffffff\" stroke=\"#1c2733\" stroke-width=\"2\"/><circle cx=\"32\" cy=\"32\" r=\"6\" fill=\"#111111\"/></svg><svg viewBox=\"0 0 64 64\" width=\"64\" height=\"64\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"2\" y=\"2\" width=\"60\" height=\"60\" fill=\"#ffffff\" stroke=\"#1c2733\" stroke-width=\"2\"/><circle cx=\"22\" cy=\"32\" r=\"6\" fill=\"#111111\"/><circle cx=\"42\" cy=\"32\" r=\"6\" fill=\"#111111\"/></svg><svg viewBox=\"0 0 64 64\" width=\"64\" height=\"64\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"2\" y=\"2\" width=\"60\" height=\"60\" fill=\"#ffffff\" stroke=\"#1c2733\" stroke-width=\"2\"/><circle cx=\"20\" cy=\"22\" r=\"6\" fill=\"#111111\"/><circle cx=\"44\" cy=\"22\" r=\"6\" fill=\"#111111\"/><circle cx=\"32\" cy=\"44\" r=\"6\" fill=\"#111111\"/></svg><svg viewBox=\"0 0 64 64\" width=\"64\" height=\"64\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"2\" y=\"2\" width=\"60\" height=\"60\" fill=\"#ffffff\" stroke=\"#1c2733\" stroke-width=\"2\"/><circle cx=\"22\" cy=\"22\" r=\"6\" fill=\"#111111\"/><circle cx=\"42\" cy=\"22\" r=\"6\" fill=\"#111111\"/><circle cx=\"22\" cy=\"42\" r=\"6\" fill=\"#111111\"/><circle cx=\"42\" cy=\"42\" r=\"6\" fill=\"#111111\"/></svg><svg viewBox=\"0 0 64 64\" width=\"64\" height=\"64\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"2\" y=\"2\" width=\"60\" height=\"60\" fill=\"#f1f5f9\" stroke=\"#1c2733\" stroke-width=\"2\"/><text x=\"32\" y=\"43\" text-anchor=\"middle\" font-size=\"30\" font-weight=\"bold\" fill=\"#0b3d91\">?</text></svg></div>",
  "options": [
   "3 titik",
   "4 titik",
   "5 titik",
   "6 titik",
   "7 titik"
  ],
  "optionFigures": [
   "<svg viewBox=\"0 0 64 64\" width=\"56\" height=\"56\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"2\" y=\"2\" width=\"60\" height=\"60\" fill=\"#ffffff\" stroke=\"#1c2733\" stroke-width=\"2\"/><circle cx=\"20\" cy=\"22\" r=\"6\" fill=\"#111111\"/><circle cx=\"44\" cy=\"22\" r=\"6\" fill=\"#111111\"/><circle cx=\"32\" cy=\"44\" r=\"6\" fill=\"#111111\"/></svg>",
   "<svg viewBox=\"0 0 64 64\" width=\"56\" height=\"56\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"2\" y=\"2\" width=\"60\" height=\"60\" fill=\"#ffffff\" stroke=\"#1c2733\" stroke-width=\"2\"/><circle cx=\"22\" cy=\"22\" r=\"6\" fill=\"#111111\"/><circle cx=\"42\" cy=\"22\" r=\"6\" fill=\"#111111\"/><circle cx=\"22\" cy=\"42\" r=\"6\" fill=\"#111111\"/><circle cx=\"42\" cy=\"42\" r=\"6\" fill=\"#111111\"/></svg>",
   "<svg viewBox=\"0 0 64 64\" width=\"56\" height=\"56\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"2\" y=\"2\" width=\"60\" height=\"60\" fill=\"#ffffff\" stroke=\"#1c2733\" stroke-width=\"2\"/><circle cx=\"20\" cy=\"20\" r=\"6\" fill=\"#111111\"/><circle cx=\"44\" cy=\"20\" r=\"6\" fill=\"#111111\"/><circle cx=\"32\" cy=\"32\" r=\"6\" fill=\"#111111\"/><circle cx=\"20\" cy=\"44\" r=\"6\" fill=\"#111111\"/><circle cx=\"44\" cy=\"44\" r=\"6\" fill=\"#111111\"/></svg>",
   "<svg viewBox=\"0 0 64 64\" width=\"56\" height=\"56\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"2\" y=\"2\" width=\"60\" height=\"60\" fill=\"#ffffff\" stroke=\"#1c2733\" stroke-width=\"2\"/><circle cx=\"20\" cy=\"20\" r=\"6\" fill=\"#111111\"/><circle cx=\"44\" cy=\"20\" r=\"6\" fill=\"#111111\"/><circle cx=\"20\" cy=\"32\" r=\"6\" fill=\"#111111\"/><circle cx=\"44\" cy=\"32\" r=\"6\" fill=\"#111111\"/><circle cx=\"20\" cy=\"44\" r=\"6\" fill=\"#111111\"/><circle cx=\"44\" cy=\"44\" r=\"6\" fill=\"#111111\"/></svg>",
   "<svg viewBox=\"0 0 64 64\" width=\"56\" height=\"56\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"2\" y=\"2\" width=\"60\" height=\"60\" fill=\"#ffffff\" stroke=\"#1c2733\" stroke-width=\"2\"/><circle cx=\"20\" cy=\"18\" r=\"6\" fill=\"#111111\"/><circle cx=\"32\" cy=\"18\" r=\"6\" fill=\"#111111\"/><circle cx=\"44\" cy=\"18\" r=\"6\" fill=\"#111111\"/><circle cx=\"20\" cy=\"32\" r=\"6\" fill=\"#111111\"/><circle cx=\"44\" cy=\"32\" r=\"6\" fill=\"#111111\"/><circle cx=\"20\" cy=\"46\" r=\"6\" fill=\"#111111\"/><circle cx=\"44\" cy=\"46\" r=\"6\" fill=\"#111111\"/></svg>"
  ],
  "answer": 2,
  "explanation": "Jumlah titik bertambah 1 setiap langkah: 1, 2, 3, 4, jadi berikutnya 5 titik."
 },
 {
  "id": 63,
  "section": "TIU",
  "q": "Perhatikan deretan gambar berikut. Gambar berikutnya adalah ...",
  "figure": "<div class=\"fig-seq\"><svg viewBox=\"0 0 64 64\" width=\"64\" height=\"64\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"2\" y=\"2\" width=\"60\" height=\"60\" fill=\"#ffffff\" stroke=\"#1c2733\" stroke-width=\"2\"/><polygon points=\"32,10 44,30 36,30 36,54 28,54 28,30 20,30\" fill=\"#111111\"/></svg><svg viewBox=\"0 0 64 64\" width=\"64\" height=\"64\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"2\" y=\"2\" width=\"60\" height=\"60\" fill=\"#ffffff\" stroke=\"#1c2733\" stroke-width=\"2\"/><g transform=\"rotate(90 32 32)\"><polygon points=\"32,10 44,30 36,30 36,54 28,54 28,30 20,30\" fill=\"#111111\"/></g></svg><svg viewBox=\"0 0 64 64\" width=\"64\" height=\"64\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"2\" y=\"2\" width=\"60\" height=\"60\" fill=\"#ffffff\" stroke=\"#1c2733\" stroke-width=\"2\"/><g transform=\"rotate(180 32 32)\"><polygon points=\"32,10 44,30 36,30 36,54 28,54 28,30 20,30\" fill=\"#111111\"/></g></svg><svg viewBox=\"0 0 64 64\" width=\"64\" height=\"64\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"2\" y=\"2\" width=\"60\" height=\"60\" fill=\"#f1f5f9\" stroke=\"#1c2733\" stroke-width=\"2\"/><text x=\"32\" y=\"43\" text-anchor=\"middle\" font-size=\"30\" font-weight=\"bold\" fill=\"#0b3d91\">?</text></svg></div>",
  "options": [
   "Panah ke atas",
   "Panah ke kanan",
   "Panah ke bawah",
   "Panah ke kiri",
   "Panah ke kanan atas"
  ],
  "optionFigures": [
   "<svg viewBox=\"0 0 64 64\" width=\"56\" height=\"56\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"2\" y=\"2\" width=\"60\" height=\"60\" fill=\"#ffffff\" stroke=\"#1c2733\" stroke-width=\"2\"/><polygon points=\"32,10 44,30 36,30 36,54 28,54 28,30 20,30\" fill=\"#111111\"/></svg>",
   "<svg viewBox=\"0 0 64 64\" width=\"56\" height=\"56\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"2\" y=\"2\" width=\"60\" height=\"60\" fill=\"#ffffff\" stroke=\"#1c2733\" stroke-width=\"2\"/><g transform=\"rotate(90 32 32)\"><polygon points=\"32,10 44,30 36,30 36,54 28,54 28,30 20,30\" fill=\"#111111\"/></g></svg>",
   "<svg viewBox=\"0 0 64 64\" width=\"56\" height=\"56\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"2\" y=\"2\" width=\"60\" height=\"60\" fill=\"#ffffff\" stroke=\"#1c2733\" stroke-width=\"2\"/><g transform=\"rotate(180 32 32)\"><polygon points=\"32,10 44,30 36,30 36,54 28,54 28,30 20,30\" fill=\"#111111\"/></g></svg>",
   "<svg viewBox=\"0 0 64 64\" width=\"56\" height=\"56\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"2\" y=\"2\" width=\"60\" height=\"60\" fill=\"#ffffff\" stroke=\"#1c2733\" stroke-width=\"2\"/><g transform=\"rotate(270 32 32)\"><polygon points=\"32,10 44,30 36,30 36,54 28,54 28,30 20,30\" fill=\"#111111\"/></g></svg>",
   "<svg viewBox=\"0 0 64 64\" width=\"56\" height=\"56\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"2\" y=\"2\" width=\"60\" height=\"60\" fill=\"#ffffff\" stroke=\"#1c2733\" stroke-width=\"2\"/><g transform=\"rotate(45 32 32)\"><polygon points=\"32,10 44,30 36,30 36,54 28,54 28,30 20,30\" fill=\"#111111\"/></g></svg>"
  ],
  "answer": 3,
  "explanation": "Panah berputar 90 derajat searah jarum jam setiap langkah: atas menjadi kanan, kanan menjadi bawah, bawah menjadi kiri. Jadi berikutnya panah menunjuk ke kiri."
 },
 {
  "id": 64,
  "section": "TIU",
  "q": "Perhatikan deretan gambar berikut. Gambar berikutnya adalah ...",
  "figure": "<div class=\"fig-seq\"><svg viewBox=\"0 0 64 64\" width=\"64\" height=\"64\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"2\" y=\"2\" width=\"60\" height=\"60\" fill=\"#ffffff\" stroke=\"#1c2733\" stroke-width=\"2\"/><polygon points=\"32.0,12.0 49.3,42.0 14.7,42.0\" fill=\"#111111\"/></svg><svg viewBox=\"0 0 64 64\" width=\"64\" height=\"64\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"2\" y=\"2\" width=\"60\" height=\"60\" fill=\"#ffffff\" stroke=\"#1c2733\" stroke-width=\"2\"/><polygon points=\"32.0,12.0 52.0,32.0 32.0,52.0 12.0,32.0\" fill=\"#111111\"/></svg><svg viewBox=\"0 0 64 64\" width=\"64\" height=\"64\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"2\" y=\"2\" width=\"60\" height=\"60\" fill=\"#ffffff\" stroke=\"#1c2733\" stroke-width=\"2\"/><polygon points=\"32.0,12.0 51.0,25.8 43.8,48.2 20.2,48.2 13.0,25.8\" fill=\"#111111\"/></svg><svg viewBox=\"0 0 64 64\" width=\"64\" height=\"64\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"2\" y=\"2\" width=\"60\" height=\"60\" fill=\"#ffffff\" stroke=\"#1c2733\" stroke-width=\"2\"/><polygon points=\"32.0,12.0 49.3,22.0 49.3,42.0 32.0,52.0 14.7,42.0 14.7,22.0\" fill=\"#111111\"/></svg><svg viewBox=\"0 0 64 64\" width=\"64\" height=\"64\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"2\" y=\"2\" width=\"60\" height=\"60\" fill=\"#f1f5f9\" stroke=\"#1c2733\" stroke-width=\"2\"/><text x=\"32\" y=\"43\" text-anchor=\"middle\" font-size=\"30\" font-weight=\"bold\" fill=\"#0b3d91\">?</text></svg></div>",
  "options": [
   "Segitiga (3 sisi)",
   "Segilima (5 sisi)",
   "Segienam (6 sisi)",
   "Segitujuh (7 sisi)",
   "Segidelapan (8 sisi)"
  ],
  "optionFigures": [
   "<svg viewBox=\"0 0 64 64\" width=\"56\" height=\"56\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"2\" y=\"2\" width=\"60\" height=\"60\" fill=\"#ffffff\" stroke=\"#1c2733\" stroke-width=\"2\"/><polygon points=\"32.0,12.0 49.3,42.0 14.7,42.0\" fill=\"#111111\"/></svg>",
   "<svg viewBox=\"0 0 64 64\" width=\"56\" height=\"56\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"2\" y=\"2\" width=\"60\" height=\"60\" fill=\"#ffffff\" stroke=\"#1c2733\" stroke-width=\"2\"/><polygon points=\"32.0,12.0 51.0,25.8 43.8,48.2 20.2,48.2 13.0,25.8\" fill=\"#111111\"/></svg>",
   "<svg viewBox=\"0 0 64 64\" width=\"56\" height=\"56\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"2\" y=\"2\" width=\"60\" height=\"60\" fill=\"#ffffff\" stroke=\"#1c2733\" stroke-width=\"2\"/><polygon points=\"32.0,12.0 49.3,22.0 49.3,42.0 32.0,52.0 14.7,42.0 14.7,22.0\" fill=\"#111111\"/></svg>",
   "<svg viewBox=\"0 0 64 64\" width=\"56\" height=\"56\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"2\" y=\"2\" width=\"60\" height=\"60\" fill=\"#ffffff\" stroke=\"#1c2733\" stroke-width=\"2\"/><polygon points=\"32.0,12.0 47.6,19.5 51.5,36.5 40.7,50.0 23.3,50.0 12.5,36.5 16.4,19.5\" fill=\"#111111\"/></svg>",
   "<svg viewBox=\"0 0 64 64\" width=\"56\" height=\"56\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"2\" y=\"2\" width=\"60\" height=\"60\" fill=\"#ffffff\" stroke=\"#1c2733\" stroke-width=\"2\"/><polygon points=\"32.0,12.0 46.1,17.9 52.0,32.0 46.1,46.1 32.0,52.0 17.9,46.1 12.0,32.0 17.9,17.9\" fill=\"#111111\"/></svg>"
  ],
  "answer": 3,
  "explanation": "Jumlah sisi bertambah 1 setiap langkah: 3, 4, 5, 6, jadi berikutnya 7 sisi, yaitu segitujuh."
 },
 {
  "id": 65,
  "section": "TIU",
  "q": "Perhatikan deretan gambar berikut. Gambar berikutnya adalah ...",
  "figure": "<div class=\"fig-seq\"><svg viewBox=\"0 0 64 64\" width=\"64\" height=\"64\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"2\" y=\"2\" width=\"60\" height=\"60\" fill=\"#ffffff\" stroke=\"#1c2733\" stroke-width=\"2\"/><polygon points=\"32.0,11.0 37.0,25.1 52.0,25.5 40.1,34.6 44.3,49.0 32.0,40.5 19.7,49.0 23.9,34.6 12.0,25.5 27.0,25.1\" fill=\"#111111\"/></svg><svg viewBox=\"0 0 64 64\" width=\"64\" height=\"64\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"2\" y=\"2\" width=\"60\" height=\"60\" fill=\"#ffffff\" stroke=\"#1c2733\" stroke-width=\"2\"/><polygon points=\"32.0,11.0 37.0,25.1 52.0,25.5 40.1,34.6 44.3,49.0 32.0,40.5 19.7,49.0 23.9,34.6 12.0,25.5 27.0,25.1\" fill=\"#ffffff\" stroke=\"#111111\" stroke-width=\"2\"/></svg><svg viewBox=\"0 0 64 64\" width=\"64\" height=\"64\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"2\" y=\"2\" width=\"60\" height=\"60\" fill=\"#ffffff\" stroke=\"#1c2733\" stroke-width=\"2\"/><polygon points=\"32.0,11.0 37.0,25.1 52.0,25.5 40.1,34.6 44.3,49.0 32.0,40.5 19.7,49.0 23.9,34.6 12.0,25.5 27.0,25.1\" fill=\"#111111\"/></svg><svg viewBox=\"0 0 64 64\" width=\"64\" height=\"64\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"2\" y=\"2\" width=\"60\" height=\"60\" fill=\"#ffffff\" stroke=\"#1c2733\" stroke-width=\"2\"/><polygon points=\"32.0,11.0 37.0,25.1 52.0,25.5 40.1,34.6 44.3,49.0 32.0,40.5 19.7,49.0 23.9,34.6 12.0,25.5 27.0,25.1\" fill=\"#ffffff\" stroke=\"#111111\" stroke-width=\"2\"/></svg><svg viewBox=\"0 0 64 64\" width=\"64\" height=\"64\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"2\" y=\"2\" width=\"60\" height=\"60\" fill=\"#ffffff\" stroke=\"#1c2733\" stroke-width=\"2\"/><polygon points=\"32.0,11.0 37.0,25.1 52.0,25.5 40.1,34.6 44.3,49.0 32.0,40.5 19.7,49.0 23.9,34.6 12.0,25.5 27.0,25.1\" fill=\"#111111\"/></svg><svg viewBox=\"0 0 64 64\" width=\"64\" height=\"64\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"2\" y=\"2\" width=\"60\" height=\"60\" fill=\"#f1f5f9\" stroke=\"#1c2733\" stroke-width=\"2\"/><text x=\"32\" y=\"43\" text-anchor=\"middle\" font-size=\"30\" font-weight=\"bold\" fill=\"#0b3d91\">?</text></svg></div>",
  "options": [
   "Bintang penuh",
   "Bintang kosong",
   "Lingkaran",
   "Persegi",
   "Segitiga"
  ],
  "optionFigures": [
   "<svg viewBox=\"0 0 64 64\" width=\"56\" height=\"56\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"2\" y=\"2\" width=\"60\" height=\"60\" fill=\"#ffffff\" stroke=\"#1c2733\" stroke-width=\"2\"/><polygon points=\"32.0,11.0 37.0,25.1 52.0,25.5 40.1,34.6 44.3,49.0 32.0,40.5 19.7,49.0 23.9,34.6 12.0,25.5 27.0,25.1\" fill=\"#111111\"/></svg>",
   "<svg viewBox=\"0 0 64 64\" width=\"56\" height=\"56\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"2\" y=\"2\" width=\"60\" height=\"60\" fill=\"#ffffff\" stroke=\"#1c2733\" stroke-width=\"2\"/><polygon points=\"32.0,11.0 37.0,25.1 52.0,25.5 40.1,34.6 44.3,49.0 32.0,40.5 19.7,49.0 23.9,34.6 12.0,25.5 27.0,25.1\" fill=\"#ffffff\" stroke=\"#111111\" stroke-width=\"2\"/></svg>",
   "<svg viewBox=\"0 0 64 64\" width=\"56\" height=\"56\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"2\" y=\"2\" width=\"60\" height=\"60\" fill=\"#ffffff\" stroke=\"#1c2733\" stroke-width=\"2\"/><circle cx=\"32\" cy=\"32\" r=\"18\" fill=\"#111111\"/></svg>",
   "<svg viewBox=\"0 0 64 64\" width=\"56\" height=\"56\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"2\" y=\"2\" width=\"60\" height=\"60\" fill=\"#ffffff\" stroke=\"#1c2733\" stroke-width=\"2\"/><rect x=\"14\" y=\"14\" width=\"36\" height=\"36\" fill=\"#111111\"/></svg>",
   "<svg viewBox=\"0 0 64 64\" width=\"56\" height=\"56\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"2\" y=\"2\" width=\"60\" height=\"60\" fill=\"#ffffff\" stroke=\"#1c2733\" stroke-width=\"2\"/><polygon points=\"32.0,12.0 49.3,42.0 14.7,42.0\" fill=\"#111111\"/></svg>"
  ],
  "answer": 1,
  "explanation": "Pola bergantian: bintang penuh, bintang kosong, bintang penuh, bintang kosong, bintang penuh, jadi berikutnya bintang kosong."
 },
 {
  "category": "Pelayanan Publik",
  "explanation": "Opsi 5 poin paling ideal: tenang, empati, cek fakta di sistem, beri penjelasan jujur dan solusi konkret. Opsi 4 poin masih menjelaskan tapi melempar tanggung jawab. Mengabaikan warga (1 poin) adalah pelayanan terburuk.",
  "id": 66,
  "options": [
   "Tetap tenang, mendengarkan keluhannya, mengecek status berkasnya di sistem, lalu menjelaskan proses dan perkiraan waktunya dengan sopan serta menawarkan solusi sementara, misalnya surat keterangan pengganti.",
   "Meminta warga itu tenang dan menyuruhnya menunggu giliran seperti warga lain tanpa mengecek berkasnya.",
   "Meminta warga itu datang lagi besok karena hari ini antrean sudah terlalu panjang.",
   "Menjelaskan bahwa keterlambatan bukan kesalahan Anda dan memintanya komplain ke atasan Anda.",
   "Mengabaikannya dan melanjutkan melayani warga berikutnya agar antrean cepat berkurang."
  ],
  "points": [
   5,
   3,
   2,
   4,
   1
  ],
  "q": "Skenario: Seorang warga datang dengan marah karena KTP-nya sudah 2 minggu belum jadi, padahal ia butuh segera untuk melamar pekerjaan. Antrean di loket sedang sangat panjang dan warga itu mulai meninggikan suara. Apa yang paling tepat Anda lakukan?",
  "section": "TKP"
 },
 {
  "category": "Pelayanan Publik",
  "explanation": "Opsi 5 poin paling ideal: pelayanan ramah dan proaktif kepada kelompok rentan, membantu sampai paham. Membantu tanpa penjelasan (4 poin) masih baik tapi kurang memberdayakan. Menyuruh menunggu tanpa kepastian (1 poin) tidak melayani.",
  "id": 67,
  "options": [
   "Menyuruhnya pulang dan datang lagi bersama anaknya yang bisa membantu mengisi formulir.",
   "Membantunya mengisi formulir dengan sabar, menjelaskan setiap syarat dengan bahasa sederhana, dan memastikan ia memahami langkah selanjutnya.",
   "Mengisi formulirnya dengan cepat tanpa penjelasan agar antrean tidak tertahan.",
   "Memberinya brosur syarat dan memintanya membaca sendiri di ruang tunggu.",
   "Memintanya menunggu sampai ada petugas lain yang senggang untuk membantunya."
  ],
  "points": [
   2,
   5,
   4,
   3,
   1
  ],
  "q": "Skenario: Seorang warga lanjut usia datang sendirian mengurus surat domisili. Ia tidak paham syarat-syaratnya, tulisannya sulit dibaca, dan ia tampak bingung dengan formulir yang harus diisi. Apa yang paling tepat Anda lakukan?",
  "section": "TKP"
 },
 {
  "category": "Pelayanan Publik",
  "explanation": "Opsi 5 poin paling ideal: mendahulukan kebutuhan mendesak warga yang berkasnya lengkap, rela melayani sedikit melewati jam. Menerima berkas tapi menunda pengambilan (4 poin) masih membantu sebagian. Menolak mentah-mentah (1 poin) bertentangan dengan orientasi pelayanan.",
  "id": 68,
  "options": [
   "Menolaknya karena loket hampir tutup dan memintanya datang besok pagi.",
   "Melayaninya sampai selesai meskipun melewati jam tutup, karena berkas lengkap dan kebutuhannya mendesak.",
   "Melayaninya hanya jika ia mau menunggu sampai semua petugas selesai beres-beres.",
   "Menerima berkasnya tapi memintanya mengambil suratnya besok pagi.",
   "Menyuruhnya mengurus secara online saja, padahal ia sudah datang langsung."
  ],
  "points": [
   1,
   5,
   3,
   4,
   2
  ],
  "q": "Skenario: Pukul 15.50, sepuluh menit sebelum loket tutup, seorang warga datang tergesa-gesa karena suratnya dibutuhkan untuk pendaftaran sekolah anaknya yang ditutup hari itu juga. Berkasnya lengkap. Apa yang paling tepat Anda lakukan?",
  "section": "TKP"
 },
 {
  "category": "Pelayanan Publik",
  "explanation": "Opsi 5 poin paling ideal: jujur mengakui kekurangan, transparan soal perbaikan, dan menyelesaikan akar masalah dengan warga. Klarifikasi tanpa pengakuan (4 poin) kurang jujur. Membalas defensif (1 poin) memperburuk citra instansi.",
  "id": 69,
  "options": [
   "Membalas komentar itu dengan nada membela diri dan menyalahkan warga yang mengunggah.",
   "Mengusulkan tanggapan resmi yang mengakui keterlambatan, menjelaskan penyebab dan langkah perbaikan, lalu menghubungi warga tersebut untuk menyelesaikan masalahnya secara langsung.",
   "Mendiamkan saja karena nanti juga reda sendiri.",
   "Meminta admin media sosial menghapus unggahan tersebut.",
   "Membuat klarifikasi singkat bahwa pelayanan sudah sesuai prosedur tanpa mengakui ada keterlambatan."
  ],
  "points": [
   1,
   5,
   2,
   3,
   4
  ],
  "q": "Skenario: Sebuah keluhan tentang pelayanan di kantor Anda viral di media sosial. Isinya sebagian benar — memang ada keterlambatan — tetapi sebagian dilebih-lebihkan. Atasan meminta Anda ikut menangani. Apa yang paling tepat Anda lakukan?",
  "section": "TKP"
 },
 {
  "category": "Pelayanan Publik",
  "explanation": "Opsi 5 poin paling ideal: proaktif mendatangi warga, memberi layanan setara, plus mengusulkan perbaikan sistemik. Membantu naik seadanya (4 poin) masih peduli tapi berisiko. Berharap orang lain membantu (1 poin) adalah penghindaran.",
  "id": 70,
  "options": [
   "Memintanya menunggu di bawah sampai lift diperbaiki, tanpa kepastian waktu.",
   "Turun menemuinya, melayani berkasnya di lantai bawah, dan mengusulkan ke atasan agar layanan untuk penyandang disabilitas selalu tersedia di lantai dasar.",
   "Memintanya naik dengan bantuan petugas keamanan seadanya.",
   "Menyuruh keluarganya yang menguruskan, bukan dirinya sendiri.",
   "Melanjutkan pekerjaan di loket dan berharap ada petugas lain yang membantunya."
  ],
  "points": [
   2,
   5,
   4,
   3,
   1
  ],
  "q": "Skenario: Seorang warga pengguna kursi roda datang mengurus dokumen. Loket pelayanan berada di lantai dua dan lift sedang rusak. Ia tampak kesulitan menaiki tangga. Apa yang paling tepat Anda lakukan?",
  "section": "TKP"
 },
 {
  "category": "Pelayanan Publik",
  "explanation": "Opsi 5 poin paling ideal: transparan, ada solusi antrean yang adil, dan koordinasi perbaikan. Meminta menunggu tanpa kepastian (4 poin) pasif. Menutup loket (1 poin) menghentikan pelayanan sama sekali.",
  "id": 71,
  "options": [
   "Menyuruh semua warga mendaftar ulang secara manual tanpa penjelasan.",
   "Menjelaskan gangguan sistem dengan jujur, membuat daftar antrean manual berdasarkan bukti pendaftaran online warga, berkoordinasi dengan tim IT, dan melayani sesuai urutan bukti tersebut.",
   "Melanjutkan melayani siapa saja yang datang duluan di loket, tanpa memedulikan antrean online.",
   "Menutup loket sementara sampai sistem kembali normal.",
   "Meminta warga menunggu di luar tanpa memberi kepastian kapan sistem pulih."
  ],
  "points": [
   3,
   5,
   2,
   1,
   4
  ],
  "q": "Skenario: Sistem antrean online kantor Anda error sejak pagi. Banyak warga sudah mendaftar online tetapi namanya tidak muncul di sistem, sehingga antrean manual menjadi kacau dan warga mulai protes. Apa yang paling tepat Anda lakukan?",
  "section": "TKP"
 },
 {
  "category": "Pelayanan Publik",
  "explanation": "Opsi 5 poin paling ideal: mengakui kesalahan instansi, minta maaf, beri solusi agar warga tidak dirugikan dua kali. Melempar ke petugas lain (4 poin) kurang bertanggung jawab. Menerima berkas tidak lengkap (1 poin) melanggar aturan.",
  "id": 72,
  "options": [
   "Tetap menolak dan menyalahkan petugas sebelumnya di depan warga.",
   "Meminta maaf atas kelalaian tersebut, menjelaskan dokumen yang kurang dengan jelas, memberi daftar periksa tertulis, dan membantunya agar bisa melengkapi secepatnya tanpa harus mengulang dari awal.",
   "Menolaknya dan memintanya mengurus ulang dari awal sesuai prosedur.",
   "Menerima berkas yang kurang itu demi menenangkan warga, padahal tidak sesuai aturan.",
   "Memintanya bertanya ke petugas sebelumnya yang menangani berkasnya."
  ],
  "points": [
   2,
   5,
   3,
   1,
   4
  ],
  "q": "Skenario: Berkas permohonan izin usaha seorang warga Anda tolak karena ada satu dokumen yang kurang. Warga itu kecewa dan bertanya kenapa tidak diberitahu dari awal. Ternyata memang petugas sebelumnya lupa menyampaikan syarat itu. Apa yang paling tepat Anda lakukan?",
  "section": "TKP"
 },
 {
  "category": "Pelayanan Publik",
  "explanation": "Opsi 5 poin paling ideal: tetap pada aturan tapi aktif membantu mencari jalan keluar yang sah, memanfaatkan layanan digital. Sekadar memberi nomor telepon (4 poin) kurang proaktif. Menerima tanpa syarat (2 poin) melanggar prosedur.",
  "id": 73,
  "options": [
   "Menolaknya dan menyuruhnya pulang mengambil surat pengantar.",
   "Menjelaskan syarat dengan sopan, membantunya menghubungi daerah asal untuk meminta surat pengantar dikirim secara digital, dan menjelaskan alternatif lain yang bisa ditempuh hari itu juga.",
   "Menerima permohonannya tanpa surat pengantar agar ia tidak kecewa.",
   "Memintanya datang lagi minggu depan setelah melengkapi syarat.",
   "Memberinya nomor telepon daerah asal dan menyuruhnya mengurus sendiri."
  ],
  "points": [
   1,
   5,
   2,
   3,
   4
  ],
  "q": "Skenario: Seorang warga dari luar daerah datang mengurus surat pindah domisili, tetapi ia tidak membawa surat pengantar dari daerah asal karena mengira bisa diurus langsung di sini. Ia sudah menempuh perjalanan jauh dan kebutuhannya mendesak. Apa yang paling tepat Anda lakukan?",
  "section": "TKP"
 },
 {
  "category": "Integritas & Anti-Gratifikasi",
  "explanation": "Opsi 5 poin paling ideal: menolak tegas dan melaporkan — integritas ASN bukan hanya tidak ikut, tapi mencegah pelanggaran berlanjut. Menolak tapi diam (4 poin) masih baik, tapi membiarkan pelanggaran. Menerima (1 poin) adalah korupsi.",
  "id": 74,
  "options": [
   "Menerima tawaran itu karena semua rekan lain juga melakukannya.",
   "Menolak dengan tegas, tidak ikut dalam pengadaan yang tidak wajar itu, dan melaporkan tawaran tersebut melalui kanal yang berlaku di instansi Anda.",
   "Menolak ikut, tetapi diam saja dan tidak melaporkan karena tidak mau bermusuhan dengan rekan.",
   "Meminta waktu berpikir dan menanyakan berapa besar bagiannya dulu.",
   "Menolak secara halus sambil tetap menjaga hubungan baik, tanpa melaporkan."
  ],
  "points": [
   1,
   5,
   4,
   2,
   3
  ],
  "q": "Skenario: Seorang rekan kerja mengajak Anda bekerja sama dalam proyek pengadaan. Ia berkata Anda akan mendapat bagian dari selisih harga jika mau menyetujui vendor tertentu, dan semua itu tidak akan ketahuan. Apa yang paling tepat Anda lakukan?",
  "section": "TKP"
 },
 {
  "category": "Integritas & Anti-Gratifikasi",
  "explanation": "Opsi 5 poin paling ideal: menolak, mengembalikan, dan melaporkan sesuai aturan gratifikasi — gratifikasi dari pihak berkepentingan tidak bisa diterima dengan alasan budaya. Berjanji tetap objektif (4 poin) tetap melanggar aturan. Menyimpan setelah menolak (1 poin) tidak jujur.",
  "id": 75,
  "options": [
   "Menerimanya karena itu hadiah hari raya yang wajar dan tidak memengaruhi keputusan tender.",
   "Menolak dan mengembalikan parsel itu, serta mencatat dan melaporkannya sesuai aturan gratifikasi di instansi Anda.",
   "Menerimanya lalu membagikannya ke rekan kerja agar tidak terlihat menerima sendiri.",
   "Menolaknya secara lisan tetapi tetap menyimpan parsel itu di rumah.",
   "Menerimanya, tetapi berjanji pada diri sendiri akan tetap objektif dalam tender."
  ],
  "points": [
   2,
   5,
   3,
   1,
   4
  ],
  "q": "Skenario: Seorang vendor yang perusahaannya sedang mengajukan tender mengirimkan parsel mahal dan kartu ucapan ke rumah Anda menjelang hari raya. Ia mengatakan itu hanya tanda terima kasih, tidak ada maksud apa-apa. Apa yang paling tepat Anda lakukan?",
  "section": "TKP"
 },
 {
  "category": "Integritas & Anti-Gratifikasi",
  "explanation": "Opsi 5 poin paling ideal: menolak manipulasi data, berani menyampaikan risiko, dan menawarkan solusi yang benar. Menolak tanpa solusi (4 poin) masih berintegritas tapi kurang konstruktif. Mengikuti perintah (1 poin) melanggar integritas dan hukum.",
  "id": 76,
  "options": [
   "Mengikuti perintah atasan karena itu perintah pimpinan.",
   "Menolak mengubah laporan, menjelaskan risikonya, dan mengusulkan perbaikan yang benar: melaporkan angka sebenarnya beserta penjelasan dan rencana tindak lanjutnya.",
   "Mengubah sebagian angka saja agar tidak terlalu jauh dari yang sebenarnya.",
   "Mengubah laporan tetapi menyimpan salinan aslinya untuk berjaga-jaga.",
   "Menolak mengubah, tetapi tidak mengusulkan solusi apa pun."
  ],
  "points": [
   1,
   5,
   2,
   3,
   4
  ],
  "q": "Skenario: Atasan Anda meminta Anda mengubah angka dalam laporan anggaran agar terlihat lebih kecil dari realisasi sebenarnya, dengan alasan agar instansi tidak mendapat teguran. Ia menjamin tidak akan ada yang memeriksa secara detail. Apa yang paling tepat Anda lakukan?",
  "section": "TKP"
 },
 {
  "category": "Integritas & Anti-Gratifikasi",
  "explanation": "Opsi 5 poin paling ideal: menolak tegas dengan alasan hukum yang jelas. Menolak sambil menawarkan data publik (4 poin) masih membantu secara sah. Menolak tanpa penjelasan (3 poin) kurang tegas. Memberikan data (1 poin) adalah pelanggaran berat.",
  "id": 77,
  "options": [
   "Memberikannya karena ia teman dekat dan berjanji merahasiakan.",
   "Memberikan sebagian data yang menurut Anda tidak terlalu sensitif.",
   "Menolak dengan tegas, menjelaskan bahwa data tersebut rahasia dan dilindungi undang-undang, serta tidak akan membocorkannya dalam bentuk apa pun.",
   "Menolak, tetapi menawarkan untuk membantunya mencari data yang memang bersifat publik.",
   "Menolak secara halus tanpa penjelasan agar teman Anda tidak tersinggung."
  ],
  "points": [
   1,
   2,
   5,
   4,
   3
  ],
  "q": "Skenario: Seorang teman dekat meminta Anda membocorkan data warga yang bersifat rahasia dari sistem kantor untuk kepentingan bisnisnya. Ia berjanji akan merahasiakannya dan memberi Anda imbalan. Apa yang paling tepat Anda lakukan?",
  "section": "TKP"
 },
 {
  "category": "Integritas & Anti-Gratifikasi",
  "explanation": "Opsi 5 poin paling ideal: menolak pemalsuan dokumen dan mendorong kejujuran. Menolak tapi diam (4 poin) masih baik. Menyuruh orang lain melakukannya (1 poin) tetap terlibat dalam pelanggaran.",
  "id": 78,
  "options": [
   "Menandatanganinya karena hanya sekali dan ia teman satu tim.",
   "Menolak dengan sopan, menjelaskan bahwa daftar hadir adalah dokumen resmi, dan menyarankan ia melapor jujur kepada atasan tentang keterlambatannya.",
   "Menandatanganinya tetapi mengingatkannya agar tidak mengulanginya.",
   "Menolak menandatangani, tetapi tidak mengatakan apa-apa kepada siapa pun.",
   "Meminta rekan lain yang menandatanganinya agar Anda tidak terlibat."
  ],
  "points": [
   2,
   5,
   3,
   4,
   1
  ],
  "q": "Skenario: Rekan kerja Anda meminta Anda menandatangani daftar hadir untuknya karena ia terlambat, padahal ia belum datang ke kantor. Ia bilang ini sudah biasa dilakukan dan hanya sekali ini. Apa yang paling tepat Anda lakukan?",
  "section": "TKP"
 },
 {
  "category": "Integritas & Anti-Gratifikasi",
  "explanation": "Opsi 5 poin paling ideal: jujur dan transparan melalui prosedur resmi, justru saat tidak ada yang mengawasi — itulah ujian integritas. Memasukkan ke kotak amal tanpa catatan (4 poin) niatnya baik tapi tidak akuntabel. Mengambilnya (1 poin) adalah pelanggaran.",
  "id": 79,
  "options": [
   "Menyimpannya untuk diri sendiri karena tidak ada yang tahu.",
   "Menyimpannya dulu, dan jika tidak ada yang menanyakan dalam seminggu, baru dipakai.",
   "Melaporkan kelebihan itu kepada bendahara dan mencatatnya sesuai prosedur, meskipun tidak ada yang mengetahuinya.",
   "Membagikannya kepada rekan kerja agar tidak terlihat mengambil sendiri.",
   "Memasukkannya ke kotak amal kantor tanpa mencatatnya."
  ],
  "points": [
   1,
   2,
   5,
   3,
   4
  ],
  "q": "Skenario: Saat menutup kas layanan, Anda menemukan kelebihan uang Rp200.000 yang tidak tercatat di pembukuan. Tidak ada yang tahu dan tidak ada kamera di ruangan itu. Apa yang paling tepat Anda lakukan?",
  "section": "TKP"
 },
 {
  "category": "Integritas & Anti-Gratifikasi",
  "explanation": "Opsi 5 poin paling ideal: menolak suap, mengembalikan, menjelaskan prosedur, dan tetap melayani secara adil. Memproses lebih dulu sebagai ganti (4 poin) masih tidak adil bagi warga lain. Menerima (1 poin) adalah pungli.",
  "id": 80,
  "options": [
   "Menerimanya karena nilainya kecil dan memang sudah menjadi kebiasaan.",
   "Menolak dengan sopan, mengembalikan uang itu, menjelaskan bahwa layanan dipercepat tidak memerlukan biaya tambahan, dan memproses berkasnya sesuai antrean dan prosedur.",
   "Menerimanya tetapi tetap memproses sesuai prosedur agar tidak merasa bersalah.",
   "Menolak uangnya, tetapi memproses berkasnya lebih dulu dari antrean sebagai ganti.",
   "Mengabaikan uang itu dan membiarkannya tertinggal di berkas."
  ],
  "points": [
   1,
   5,
   2,
   4,
   3
  ],
  "q": "Skenario: Seorang warga diam-diam menyelipkan uang di dalam berkasnya agar pengurusan izinnya dipercepat. Ia berbisik bahwa ini sudah biasa dan semua petugas juga menerima. Apa yang paling tepat Anda lakukan?",
  "section": "TKP"
 },
 {
  "category": "Kerjasama Tim & Komunikasi",
  "explanation": "Opsi 5 poin paling ideal: proaktif mengambil sebagian beban, berkoordinasi dengan tim, dan menyampaikan kendala ke atasan agar solusi terstruktur. Membantu sebagian tanpa koordinasi (4 poin) kurang efektif. Membiarkan deadline gagal (1 poin) mengorbankan tim.",
  "id": 81,
  "options": [
   "Membiarkannya, karena itu tugasnya dan Anda sudah menyelesaikan bagian Anda.",
   "Mengambil alih sebagian tugasnya, berkoordinasi dengan anggota tim lain untuk membagi pekerjaan, dan menyampaikan kondisi ini ke atasan agar deadline tetap tercapai.",
   "Mengambil alih semua tugasnya sendirian tanpa memberi tahu siapa pun.",
   "Mengirim pesan bahwa Anda hanya bisa membantu sebagian dan tidak bisa menjamin hasilnya.",
   "Mengusulkan ke atasan agar deadline diundur tanpa usaha menyelesaikan terlebih dahulu."
  ],
  "points": [
   1,
   5,
   3,
   4,
   2
  ],
  "q": "Skenario: Seorang anggota tim Anda tiba-tiba sakit saat proyek besar mendekati deadline. Sebagian besar pekerjaannya belum selesai, padahal bagian itu penting untuk presentasi besok. Apa yang paling tepat Anda lakukan?",
  "section": "TKP"
 },
 {
  "category": "Kerjasama Tim & Komunikasi",
  "explanation": "Opsi 5 poin paling ideal: menyampaikan pendapat dengan bukti, mendengarkan, dan mencari jalan tengah berdasarkan tujuan bersama. Mengalah demi damai (4 poin) menghindari konflik tapi mengorbankan kualitas. Memaksakan pendapat (1 poin) merusak kerjasama.",
  "id": 82,
  "options": [
   "Memaksakan pendapat Anda karena Anda yakin paling benar.",
   "Menyampaikan pendapat Anda dengan data dan alasan yang jelas, mendengarkan argumen rekan, dan mengusulkan jalan tengah yang mengutamakan tujuan tim.",
   "Mengalah saja demi menjaga suasana rapat tetap rukun, meskipun Anda yakin pendapat itu kurang tepat.",
   "Diam saja agar tidak terlihat menentang rekan yang lebih senior.",
   "Mengajukan pendapat Anda ke atasan secara pribadi setelah rapat, tanpa membahasnya di depan tim."
  ],
  "points": [
   1,
   5,
   4,
   2,
   3
  ],
  "q": "Skenario: Dalam rapat tim, Anda berbeda pendapat dengan rekan kerja tentang cara menyelesaikan sebuah program. Pendapatnya menurut Anda kurang efektif, tetapi ia bersikeras. Suasana rapat mulai tegang. Apa yang paling tepat Anda lakukan?",
  "section": "TKP"
 },
 {
  "category": "Kerjasama Tim & Komunikasi",
  "explanation": "Opsi 5 poin paling ideal: membimbing dengan sabar dan menunjukkan cara yang benar, karena tim yang kuat dibangun bersama. Menyerahkan ke atasan (4 poin) masih bertanggung jawab tapi kurang peduli. Membiarkannya tertinggal (1 poin) merusak tim.",
  "id": 83,
  "options": [
   "Membiarkannya belajar sendiri agar ia mandiri, meskipun pekerjaannya tertunda.",
   "Mengajarinya dengan sabar, menunjukkan cara kerja yang benar, dan membagi tugas sesuai kemampuannya sambil tetap memantau hasilnya.",
   "Mengerjakan tugasnya sendiri agar pekerjaan cepat selesai.",
   "Melaporkan ke atasan bahwa ia tidak kompeten dan meminta ia dipindahkan.",
   "Mengabaikannya dan berharap ia akan bertanya sendiri jika butuh bantuan."
  ],
  "points": [
   2,
   5,
   3,
   4,
   1
  ],
  "q": "Skenario: Seorang rekan baru di tim Anda sering melakukan kesalahan dan bekerja sangat lambat karena belum memahami sistem kerja di kantor. Akibatnya, pekerjaan tim sering tertunda. Apa yang paling tepat Anda lakukan?",
  "section": "TKP"
 },
 {
  "category": "Kerjasama Tim & Komunikasi",
  "explanation": "Opsi 5 poin paling ideal: fasilitasi dialog antar-divisi, cari solusi bersama, dan naikkan isu secara konstruktif bila perlu. Menyelesaikan sendiri (4 poin) tidak menyelesaikan akar masalah. Menyalahkan divisi lain (1 poin) memperburuk konflik.",
  "id": 84,
  "options": [
   "Menyalahkan divisi lain di depan atasan karena mereka yang menyebabkan keterlambatan.",
   "Mengajak perwakilan kedua divisi berdiskusi untuk memetakan masalahnya, mencari solusi bersama, dan menyepakati pembagian tanggung jawab yang jelas.",
   "Menyelesaikan masalahnya sendiri tanpa melibatkan divisi lain agar cepat selesai.",
   "Membiarkan konflik itu berlanjut karena bukan tanggung jawab Anda.",
   "Meminta atasan menyelesaikan konflik itu tanpa Anda ikut terlibat."
  ],
  "points": [
   1,
   5,
   4,
   2,
   3
  ],
  "q": "Skenario: Terjadi konflik antara divisi Anda dan divisi lain karena masing-masing merasa pekerjaannya yang paling penting. Akibatnya, sebuah program bersama tertunda dan kedua divisi saling menyalahkan. Apa yang paling tepat Anda lakukan?",
  "section": "TKP"
 },
 {
  "category": "Kerjasama Tim & Komunikasi",
  "explanation": "Opsi 5 poin paling ideal: komunikasi terbuka dan empatik, cari akar masalahnya, beri kesempatan memperbaiki, dan tegaskan dampaknya ke tim. Langsung lapor atasan (4 poin) masih prosedural tapi melewatkan pembinaan. Mengambil alih diam-diam (1 poin) membiarkan masalah berulang.",
  "id": 85,
  "options": [
   "Mengambil alih tugasnya diam-diam agar pekerjaan selesai.",
   "Mengajaknya bicara secara pribadi, menanyakan kendalanya, mengingatkannya tentang dampaknya pada tim, dan menyepakati rencana perbaikan bersama.",
   "Langsung melaporkannya ke atasan agar ia mendapat teguran.",
   "Mengabaikannya karena bukan urusan Anda.",
   "Menyindirnya di grup kerja agar ia sadar diri."
  ],
  "points": [
   2,
   5,
   4,
   3,
   1
  ],
  "q": "Skenario: Salah satu anggota tim Anda hampir tidak pernah berkontribusi dalam proyek, tetapi namanya tetap tercantum sebagai anggota. Rekan lain mulai mengeluh dan semangat tim menurun. Apa yang paling tepat Anda lakukan?",
  "section": "TKP"
 },
 {
  "category": "Kerjasama Tim & Komunikasi",
  "explanation": "Opsi 5 poin paling ideal: klarifikasi terbuka, akui bila ada salah paham, dan sepakati cara komunikasi ke depan. Membiarkan berlalu (4 poin) pasif. Membalas dengan sindiran (1 poin) memperkeruh suasana.",
  "id": 86,
  "options": [
   "Membalasnya dengan nada yang sama agar ia tahu Anda juga tersinggung.",
   "Mengajaknya berbicara secara pribadi, mengklarifikasi maksud pesan itu dengan tenang, dan menyepakati cara berkomunikasi yang lebih jelas di kemudian hari.",
   "Membiarkan saja karena nanti juga ia akan lupa.",
   "Mengadukan sikapnya kepada atasan tanpa berbicara dengannya terlebih dahulu.",
   "Membalas pesan itu di grup agar semua orang tahu Anda tidak salah."
  ],
  "points": [
   1,
   5,
   3,
   4,
   2
  ],
  "q": "Skenario: Seorang rekan kerja mengirim pesan di grup kerja dengan nada yang Anda rasa menyindir pekerjaan Anda. Beberapa rekan lain ikut menanggapinya dan suasana grup menjadi tidak nyaman. Apa yang paling tepat Anda lakukan?",
  "section": "TKP"
 },
 {
  "category": "Adaptasi & Teknologi Baru",
  "explanation": "Opsi 5 poin paling ideal: belajar aktif, mencatat, dan membantu rekan lain — perubahan teknologi dihadapi dengan belajar, bukan mengeluh. Belajar sendiri secara bertahap (4 poin) masih baik. Menolak memakai sistem baru (1 poin) menghambat instansi.",
  "id": 87,
  "options": [
   "Menolak menggunakan sistem baru dan tetap memakai cara lama karena lebih nyaman.",
   "Meminta atasan menunda penggunaan sistem baru sampai semua orang siap.",
   "Mempelajari sistem baru dengan sungguh-sungguh, mengikuti pelatihan, mencatat langkah-langkahnya, dan membantu rekan yang kesulitan.",
   "Menggunakan sistem baru hanya ketika atasan mengawasi, selebihnya memakai cara lama.",
   "Mengeluh kepada rekan bahwa sistem baru itu menyulitkan dan meminta kembali ke sistem lama."
  ],
  "points": [
   1,
   2,
   5,
   3,
   4
  ],
  "q": "Skenario: Kantor Anda mengganti sistem administrasi lama dengan aplikasi digital baru. Anda belum terbiasa dan sering melakukan kesalahan input, sementara semua pekerjaan kini wajib melalui aplikasi itu. Apa yang paling tepat Anda lakukan?",
  "section": "TKP"
 },
 {
  "category": "Adaptasi & Teknologi Baru",
  "explanation": "Opsi 5 poin paling ideal: tetap melayani warga dengan cara darurat yang terdokumentasi, lalu laporkan masalahnya agar diperbaiki. Meminta warga menunggu tanpa batas (4 poin) pasif. Menolak melayani (1 poin) menghentikan pelayanan.",
  "id": 88,
  "options": [
   "Menolak melayani warga sampai aplikasi kembali normal.",
   "Melayani warga dengan pencatatan manual sementara yang rapi dan terdokumentasi, menginformasikan kepada warga bahwa datanya akan diinput ulang, lalu segera melaporkan gangguan itu ke tim IT.",
   "Meminta warga menunggu tanpa kepastian sampai aplikasi pulih.",
   "Mencoba memperbaiki aplikasi sendiri dengan mengutak-atik pengaturannya.",
   "Melayani warga tanpa mencatat apa pun, dengan janji akan diingat nanti."
  ],
  "points": [
   1,
   5,
   4,
   3,
   2
  ],
  "q": "Skenario: Aplikasi layanan digital yang Anda gunakan tiba-tiba error di tengah jam pelayanan. Warga sudah antre dan data mereka tidak bisa diinput. Atasan Anda sedang tidak di tempat. Apa yang paling tepat Anda lakukan?",
  "section": "TKP"
 },
 {
  "category": "Adaptasi & Teknologi Baru",
  "explanation": "Opsi 5 poin paling ideal: membimbing warga dengan sabar sampai ia bisa mandiri memakai layanan digital. Mengisi sendiri tanpa menjelaskan (4 poin) cepat tapi tidak memberdayakan. Menyuruh pulang (1 poin) menolak perubahan.",
  "id": 89,
  "options": [
   "Menyuruhnya pulang dan datang lagi setelah belajar memakai aplikasi.",
   "Membimbingnya langkah demi langkah memakai layanan digital, menjelaskan dengan sabar, dan memastikan ia bisa menggunakannya sendiri lain kali.",
   "Mengisi dan mengurus semuanya sendiri tanpa menjelaskan, agar cepat selesai.",
   "Memintanya mengurus secara manual saja karena lebih mudah bagi Anda.",
   "Memberinya panduan tertulis dan menyuruhnya mencoba sendiri di rumah."
  ],
  "points": [
   1,
   5,
   4,
   2,
   3
  ],
  "q": "Skenario: Seorang warga yang sudah lanjut usia kesulitan menggunakan layanan online yang kini menjadi cara utama mengurus dokumen. Ia datang ke kantor dan meminta bantuan Anda. Apa yang paling tepat Anda lakukan?",
  "section": "TKP"
 },
 {
  "category": "Adaptasi & Teknologi Baru",
  "explanation": "Opsi 5 poin paling ideal: pahami dulu alasannya, ikuti SOP baru, dan beri masukan lewat jalur resmi bila ada kekurangan. Mengikuti tanpa memahami (4 poin) patuh tapi tidak kritis. Menolak (1 poin) menghambat perubahan.",
  "id": 90,
  "options": [
   "Menolak mengikuti SOP baru karena cara lama sudah terbukti berhasil.",
   "Mengikuti SOP baru sambil mempelajari alasannya, menjalankannya dengan konsisten, dan menyampaikan masukan perbaikan melalui jalur yang resmi jika ada yang kurang efektif.",
   "Mengikuti SOP baru hanya saat ada pengawasan, selebihnya memakai cara lama.",
   "Mengeluh kepada rekan dan mengajak mereka tetap memakai cara lama.",
   "Mengikuti SOP baru tanpa memahami isinya, asalkan tidak ditegur."
  ],
  "points": [
   1,
   5,
   3,
   2,
   4
  ],
  "q": "Skenario: Instansi Anda menetapkan SOP baru yang mengubah alur kerja yang sudah Anda jalani bertahun-tahun. Awalnya Anda merasa cara baru ini lebih ribet dan memperlambat pekerjaan. Apa yang paling tepat Anda lakukan?",
  "section": "TKP"
 },
 {
  "category": "Adaptasi & Teknologi Baru",
  "explanation": "Opsi 5 poin paling ideal: manfaatkan teknologi untuk efisiensi, tetap jaga keamanan data, dan bagikan pengetahuan ke tim. Memakai tapi menyembunyikan (4 poin) kurang berbagi. Menolak total (1 poin) tertinggal.",
  "id": 91,
  "options": [
   "Menolak menggunakannya karena takut data bocor, dan tetap bekerja manual.",
   "Menggunakannya setelah mempelajari fitur dan aturan keamanannya, memanfaatkannya untuk mempercepat pekerjaan, dan membagikan cara penggunaannya kepada rekan kerja.",
   "Menggunakannya hanya untuk pekerjaan yang mudah, selebihnya tetap manual.",
   "Menggunakannya tanpa membaca aturan keamanannya, asalkan pekerjaan cepat selesai.",
   "Menggunakannya tetapi tidak memberi tahu siapa pun agar tidak dimintai tolong."
  ],
  "points": [
   1,
   5,
   3,
   2,
   4
  ],
  "q": "Skenario: Kantor Anda mulai memakai alat bantu digital baru untuk menyusun laporan dan mengolah data. Atasan mendorong semua pegawai memakainya, tetapi Anda belum paham cara kerjanya dan khawatir salah. Apa yang paling tepat Anda lakukan?",
  "section": "TKP"
 },
 {
  "category": "Kerja Mandiri & Orientasi Hasil",
  "explanation": "Opsi 5 poin paling ideal: tetap bekerja dengan standar yang sama tanpa pengawasan, karena integritas diuji saat tidak dilihat. Bekerja seadanya (4 poin) menurunkan kualitas. Menunda sampai atasan kembali (1 poin) tidak mandiri.",
  "id": 92,
  "options": [
   "Menunda pekerjaan sampai atasan kembali agar tidak salah langkah.",
   "Bekerja seperti biasa dengan standar yang sama, menyelesaikan tugas tepat waktu, dan mendokumentasikan hasilnya untuk dilaporkan saat atasan kembali.",
   "Bekerja seadanya karena tidak ada yang mengawasi.",
   "Mengerjakan hanya tugas yang mudah, yang sulit ditunda.",
   "Meminta rekan lain mengawasi Anda agar Anda tetap disiplin."
  ],
  "points": [
   2,
   5,
   3,
   4,
   1
  ],
  "q": "Skenario: Atasan Anda dinas luar selama seminggu dan tidak ada yang mengawasi pekerjaan Anda secara langsung. Ada beberapa tugas penting yang harus selesai minggu itu juga. Apa yang paling tepat Anda lakukan?",
  "section": "TKP"
 },
 {
  "category": "Kerja Mandiri & Orientasi Hasil",
  "explanation": "Opsi 5 poin paling ideal: susun prioritas, fokus pada hasil yang berdampak, dan komunikasikan kendala ke atasan. Mengerjakan semuanya setengah-setengah (4 poin) kurang efektif. Menunggu bantuan (1 poin) pasif.",
  "id": 93,
  "options": [
   "Menunggu bantuan tambahan sebelum mulai bekerja.",
   "Menyusun prioritas berdasarkan urgensi dan dampak, mengerjakan yang paling penting terlebih dahulu dengan sumber daya yang ada, dan menyampaikan kendala serta progresnya kepada atasan.",
   "Mengerjakan semua tugas sekaligus secara terburu-buru agar semuanya terlihat berjalan.",
   "Mengerjakan tugas yang paling mudah dulu agar cepat terlihat selesai.",
   "Menolak sebagian tugas karena sumber dayanya tidak memadai."
  ],
  "points": [
   1,
   5,
   4,
   3,
   2
  ],
  "q": "Skenario: Anda diberi target pekerjaan yang tinggi, tetapi sumber daya dan waktu yang tersedia sangat terbatas. Atasan tetap berharap target itu tercapai. Apa yang paling tepat Anda lakukan?",
  "section": "TKP"
 },
 {
  "category": "Kerja Mandiri & Orientasi Hasil",
  "explanation": "Opsi 5 poin paling ideal: tenang, menilai urgensi, kerjakan yang paling berdampak, dan komunikasikan bila tidak semua bisa selesai. Panik dan mengerjakan acak (4 poin) tidak terarah. Menolak tugas (1 poin) tidak bertanggung jawab.",
  "id": 94,
  "options": [
   "Menolak tugas itu karena waktunya tidak masuk akal.",
   "Menerima tugas itu, menilai mana yang paling mendesak, mengerjakannya dengan fokus, dan mengomunikasikan kepada atasan bagian mana yang bisa diselesaikan hari itu dan yang perlu dilanjutkan besok.",
   "Menerima tugas itu lalu mengerjakannya dengan panik tanpa prioritas.",
   "Menerima tugas itu tetapi meminta rekan lain mengerjakannya.",
   "Menerima tugas itu dan mengerjakannya asal selesai, tanpa memperhatikan kualitas."
  ],
  "points": [
   1,
   5,
   3,
   2,
   4
  ],
  "q": "Skenario: Menjelang akhir jam kerja, atasan tiba-tiba memberikan tugas mendesak yang harus selesai malam itu juga untuk rapat esok pagi. Anda sudah lelah dan ada urusan keluarga yang menunggu. Apa yang paling tepat Anda lakukan?",
  "section": "TKP"
 },
 {
  "category": "Kerja Mandiri & Orientasi Hasil",
  "explanation": "Opsi 5 poin paling ideal: buat daftar prioritas, selesaikan satu per satu, dan komunikasikan bila ada yang perlu dijadwal ulang. Mengerjakan yang paling mudah dulu (4 poin) terlihat produktif tapi tidak strategis. Membiarkan menumpuk (1 poin) mengabaikan tanggung jawab.",
  "id": 95,
  "options": [
   "Mengerjakan tugas yang paling mudah dulu agar jumlah tugas yang selesai terlihat banyak.",
   "Membuat daftar prioritas berdasarkan deadline dan dampak, menyelesaikan satu per satu secara tuntas, dan memberi tahu atasan jika ada tugas yang perlu dijadwalkan ulang.",
   "Mengerjakan semua tugas secara bersamaan agar tidak ada yang tertinggal.",
   "Meminta semua tugas itu dipindahkan ke rekan lain.",
   "Membiarkan tugas itu menumpuk sampai atasan menegur Anda."
  ],
  "points": [
   4,
   5,
   3,
   2,
   1
  ],
  "q": "Skenario: Anda memiliki lima tugas yang semuanya harus selesai minggu ini, dengan deadline yang berbeda-beda. Beberapa tugas saling berkaitan dan membutuhkan data dari divisi lain. Apa yang paling tepat Anda lakukan?",
  "section": "TKP"
 },
 {
  "category": "Kerja Mandiri & Orientasi Hasil",
  "explanation": "Opsi 5 poin paling ideal: terima kritik dengan lapang, evaluasi diri, dan perbaiki hasil kerja secara konkret. Membela diri (4 poin) kurang terbuka. Menyalahkan pemberi kritik (1 poin) menolak belajar.",
  "id": 96,
  "options": [
   "Membela diri dan menjelaskan bahwa kritik itu tidak adil.",
   "Menyalahkan rekan yang memberikan data, karena data itulah yang membuat hasil kerja Anda dikritik.",
   "Menerima kritik itu dengan terbuka, mengevaluasi bagian mana yang perlu diperbaiki, dan memperbaiki hasil kerja Anda berdasarkan masukan tersebut.",
   "Menerima kritik itu tetapi tidak mengubah apa pun, karena Anda yakin cara Anda sudah benar.",
   "Mengabaikan kritik itu dan menganggap pemberi kritik tidak memahami pekerjaan Anda."
  ],
  "points": [
   3,
   1,
   5,
   4,
   2
  ],
  "q": "Skenario: Hasil kerja Anda dikritik dalam evaluasi karena ada beberapa data yang tidak akurat. Kritik itu disampaikan di depan tim dan Anda merasa malu. Apa yang paling tepat Anda lakukan?",
  "section": "TKP"
 },
 {
  "category": "Profesionalisme & Disiplin",
  "explanation": "Opsi 5 poin paling ideal: jujur, minta maaf, beri tahu atasan, dan buat rencana agar tidak terulang — disiplin dimulai dari mengakui kesalahan. Mengarang alasan (4 poin) tidak jujur. Datang terlambat berulang tanpa izin (1 poin) melanggar disiplin.",
  "id": 97,
  "options": [
   "Mengarang alasan agar terlihat seperti keadaan darurat.",
   "Datang terlambat lagi keesokan harinya tanpa pemberitahuan, karena sudah telanjur terlambat hari ini.",
   "Menghubungi atasan untuk memberi kabar, meminta maaf, menjelaskan keadaan sebenarnya, dan mengatur agar pekerjaan Anda tetap berjalan serta tidak terulang.",
   "Meminta rekan menutupi ketidakhadiran Anda dan mengatakan Anda sudah datang.",
   "Diam saja dan berharap tidak ada yang menyadari keterlambatan Anda."
  ],
  "points": [
   3,
   1,
   5,
   4,
   2
  ],
  "q": "Skenario: Anda terlambat datang ke kantor karena kendaraan Anda mogok di jalan. Pagi itu Anda dijadwalkan memimpin pelayanan di loket dan warga sudah menunggu. Apa yang paling tepat Anda lakukan?",
  "section": "TKP"
 },
 {
  "category": "Profesionalisme & Disiplin",
  "explanation": "Opsi 5 poin paling ideal: prioritaskan kualitas dan komunikasikan kebutuhan waktu secara jujur ke atasan. Mengorbankan kualitas demi deadline (4 poin) merugikan jangka panjang. Menunda tanpa kabar (1 poin) tidak profesional.",
  "id": 98,
  "options": [
   "Mengirimkan laporan itu apa adanya demi memenuhi deadline, meskipun Anda tahu ada kesalahan.",
   "Menyelesaikan laporan sebaik mungkin dalam waktu yang ada, menyampaikan kepada atasan bagian yang perlu dicek ulang, dan mengusulkan waktu tambahan yang realistis untuk memperbaikinya.",
   "Menunda pengiriman laporan tanpa memberi kabar kepada atasan.",
   "Meminta rekan lain menyelesaikan laporan itu untuk Anda.",
   "Mengirimkan laporan lama yang sudah pernah dibuat, dengan sedikit perubahan."
  ],
  "points": [
   3,
   5,
   1,
   2,
   4
  ],
  "q": "Skenario: Anda harus menyerahkan laporan penting hari ini, tetapi Anda menemukan ada beberapa data yang masih perlu diverifikasi. Jika menunggu verifikasi, Anda akan melewati deadline. Apa yang paling tepat Anda lakukan?",
  "section": "TKP"
 },
 {
  "category": "Profesionalisme & Disiplin",
  "explanation": "Opsi 5 poin paling ideal: tetap fokus pada tugas, selesaikan urusan pribadi di luar jam kerja. Menyelesaikan cepat lalu main HP (4 poin) masih mengabaikan tugas. Menggunakan jam kerja untuk urusan pribadi (1 poin) melanggar disiplin.",
  "id": 99,
  "options": [
   "Menggunakan jam kerja untuk menyelesaikan urusan pribadi itu, karena menurut Anda tidak akan ketahuan.",
   "Menyelesaikan urusan pribadi itu dengan cepat di sela-sela pekerjaan, lalu kembali bekerja.",
   "Menunda urusan pribadi sampai jam istirahat atau setelah jam kerja, dan tetap fokus menyelesaikan tugas kantor.",
   "Mengerjakan tugas kantor sambil mengurus urusan pribadi secara bersamaan.",
   "Meminta izin pulang lebih awal tanpa alasan yang jelas."
  ],
  "points": [
   1,
   3,
   5,
   4,
   2
  ],
  "q": "Skenario: Di tengah jam kerja, Anda teringat ada urusan pribadi yang belum selesai dan harus segera diurus melalui telepon. Pekerjaan Anda sedang menumpuk dan ada warga yang menunggu dilayani. Apa yang paling tepat Anda lakukan?",
  "section": "TKP"
 },
 {
  "category": "Profesionalisme & Disiplin",
  "explanation": "Opsi 5 poin paling ideal: hadir di rapat penting, komunikasikan dengan atasan tentang agenda lain, dan cari pengganti bila perlu. Menghadiri keduanya setengah-setengah (4 poin) kurang optimal. Memilih yang santai (1 poin) tidak profesional.",
  "id": 100,
  "options": [
   "Menghadiri acara yang lebih santai karena Anda sudah berjanji kepada panitianya.",
   "Menghadiri rapat penting itu, mengomunikasikan kepada atasan tentang agenda lain yang bertabrakan, dan memastikan agenda lain tetap terwakili atau dijadwalkan ulang.",
   "Menghadiri keduanya secara bergantian, sehingga tidak ada yang benar-benar Anda ikuti dengan penuh.",
   "Meminta rekan menggantikan Anda di rapat penting tanpa memberi penjelasan.",
   "Tidak menghadiri keduanya dan berharap tidak ada yang menanyakan."
  ],
  "points": [
   1,
   5,
   4,
   3,
   2
  ],
  "q": "Skenario: Anda diundang menghadiri dua agenda di waktu yang sama: rapat penting dengan atasan dan acara seremonial yang sudah Anda janjikan kehadirannya. Keduanya sama-sama penting bagi Anda. Apa yang paling tepat Anda lakukan?",
  "section": "TKP"
 },
 {
  "category": "Profesionalisme & Disiplin",
  "explanation": "Opsi 5 poin paling ideal: jaga kerahasiaan dokumen, simpan sesuai prosedur, dan tolak permintaan yang melanggar aturan. Membiarkan dokumen tergeletak (4 poin) lalai. Memberikan salinan (1 poin) pelanggaran berat.",
  "id": 101,
  "options": [
   "Memberikan salinannya karena ia rekan satu kantor dan pasti tidak akan menyalahgunakannya.",
   "Membiarkan dokumen itu tergeletak di meja Anda saat Anda pergi, karena Anda akan segera kembali.",
   "Menyimpan dokumen itu di tempat yang aman sesuai prosedur, tidak membagikannya kepada pihak yang tidak berwenang, dan menjelaskan aturan kerahasiaannya kepada rekan yang meminta.",
   "Membacakan isi dokumen itu secara lisan saja, tanpa memberikan salinannya.",
   "Menyimpan dokumen itu di laci meja Anda tanpa menguncinya."
  ],
  "points": [
   1,
   2,
   5,
   4,
   3
  ],
  "q": "Skenario: Anda sedang menangani dokumen yang bersifat rahasia. Seorang rekan kerja yang tidak berwenang meminta salinannya dengan alasan ingin mempelajari. Dokumen itu tidak boleh disebarluaskan. Apa yang paling tepat Anda lakukan?",
  "section": "TKP"
 },
 {
  "category": "Sosial Budaya & Toleransi",
  "explanation": "Opsi 5 poin paling ideal: hormati keyakinan warga, tetap beri layanan setara, dan atur jadwal tanpa mengorbankan hak siapa pun. Meminta warga menyesuaikan (4 poin) kurang toleran. Menolak melayani (1 poin) diskriminatif.",
  "id": 102,
  "options": [
   "Menolak melayaninya karena Anda sedang beribadah.",
   "Mengatur jadwal pelayanan agar ia tetap dilayani dengan baik tanpa mengganggu ibadah Anda, misalnya dengan meminta rekan menggantikan sementara atau melayaninya setelah ibadah selesai.",
   "Meminta warga itu menyesuaikan dengan jadwal ibadah Anda dan datang lain waktu.",
   "Melayaninya sambil tetap beribadah secara bersamaan.",
   "Menyuruhnya menunggu tanpa penjelasan sampai Anda selesai."
  ],
  "points": [
   1,
   5,
   4,
   2,
   3
  ],
  "q": "Skenario: Seorang warga yang berbeda keyakinan dengan Anda datang meminta layanan tepat saat Anda hendak beribadah. Ia sudah menempuh perjalanan jauh dan hanya bisa datang hari itu. Apa yang paling tepat Anda lakukan?",
  "section": "TKP"
 },
 {
  "category": "Sosial Budaya & Toleransi",
  "explanation": "Opsi 5 poin paling ideal: hargai perbedaan, pelajari kebiasaannya, dan jadikan keragaman sebagai kekuatan tim. Menghindari interaksi (4 poin) pasif. Mengejek kebiasaannya (1 poin) intoleran.",
  "id": 103,
  "options": [
   "Mengejek kebiasaannya di depan rekan lain agar ia menyesuaikan diri.",
   "Menghindari berinteraksi dengannya karena merasa tidak nyaman.",
   "Menghormati kebiasaan dan latar belakangnya, mempelajarinya dengan terbuka, dan bekerja sama dengannya secara profesional seperti rekan lainnya.",
   "Memintanya menyesuaikan diri sepenuhnya dengan kebiasaan mayoritas di kantor.",
   "Bersikap biasa saja, tetapi diam-diam menghindar saat harus bekerja sama dengannya."
  ],
  "points": [
   1,
   2,
   5,
   4,
   3
  ],
  "q": "Skenario: Seorang rekan kerja baru berasal dari daerah dan budaya yang berbeda dengan Anda. Cara bicaranya, kebiasaannya, dan makanannya berbeda, dan beberapa rekan mulai mengomentari hal itu. Apa yang paling tepat Anda lakukan?",
  "section": "TKP"
 },
 {
  "category": "Sosial Budaya & Toleransi",
  "explanation": "Opsi 5 poin paling ideal: dengarkan tokoh adat dengan hormat, libatkan mereka dalam perencanaan, dan cari jalan tengah yang menghormati adat sekaligus tujuan program. Memaksakan program (4 poin) tidak peka budaya. Membatalkan tanpa diskusi (1 poin) menyerah terlalu cepat.",
  "id": 104,
  "options": [
   "Memaksakan program itu berjalan karena sudah ada anggaran dan jadwalnya.",
   "Membatalkan program itu begitu saja tanpa berdiskusi dengan siapa pun.",
   "Mendengarkan keberatan tokoh adat dengan hormat, melibatkan mereka dalam merencanakan ulang program, dan mencari cara agar program tetap berjalan tanpa melanggar adat setempat.",
   "Mengabaikan keberatan itu karena adat tidak tertulis dalam aturan resmi.",
   "Meminta atasan menyelesaikan masalah itu tanpa Anda ikut terlibat."
  ],
  "points": [
   3,
   1,
   5,
   4,
   2
  ],
  "q": "Skenario: Sebuah program pemerintah di desa Anda ditolak oleh tokoh adat karena dianggap bertentangan dengan tradisi setempat. Padahal program itu bermanfaat bagi masyarakat dan sudah direncanakan jauh-jauh hari. Apa yang paling tepat Anda lakukan?",
  "section": "TKP"
 },
 {
  "category": "Sosial Budaya & Toleransi",
  "explanation": "Opsi 5 poin paling ideal: berusaha memahami dan menjelaskan dengan bahasa yang mudah dipahami warga, menggunakan penerjemah bila perlu. Memaksa warga memahami bahasa Anda (4 poin) tidak peka. Menolak melayani (1 poin) diskriminatif.",
  "id": 105,
  "options": [
   "Menolak melayaninya karena ia tidak bisa berbahasa Indonesia.",
   "Berusaha memahami maksudnya dengan sabar, menjelaskan dengan bahasa sederhana dan gestur yang jelas, serta meminta bantuan rekan yang memahami bahasa daerahnya jika diperlukan.",
   "Memaksanya berbicara dalam bahasa Indonesia agar Anda tidak kesulitan.",
   "Melayaninya seadanya tanpa memastikan ia memahami penjelasan Anda.",
   "Memintanya datang bersama anaknya yang bisa berbahasa Indonesia."
  ],
  "points": [
   1,
   5,
   3,
   4,
   2
  ],
  "q": "Skenario: Seorang warga lanjut usia dari daerah terpencil datang mengurus dokumen. Ia hanya bisa berbahasa daerah dan tidak memahami bahasa Indonesia dengan baik. Ia tampak bingung dengan penjelasan Anda. Apa yang paling tepat Anda lakukan?",
  "section": "TKP"
 },
 {
  "category": "Sosial Budaya & Toleransi",
  "explanation": "Opsi 5 poin paling ideal: menghormati perayaan rekan, tetap profesional, dan ikut menjaga suasana inklusif. Mengabaikan (4 poin) netral tapi dingin. Memprotes perayaan (1 poin) intoleran.",
  "id": 106,
  "options": [
   "Memprotes karena perayaan itu mengganggu jam kerja.",
   "Mengabaikannya sama sekali dan bekerja seperti biasa tanpa menyapa.",
   "Mengucapkan selamat dengan tulus, menghormati perayaannya, dan tetap bekerja secara profesional bersama rekan tersebut.",
   "Menghindari rekan itu selama ia merayakan hari rayanya.",
   "Mengucapkan selamat, tetapi mengeluh kepada rekan lain bahwa perayaan itu berlebihan."
  ],
  "points": [
   1,
   3,
   5,
   4,
   2
  ],
  "q": "Skenario: Seorang rekan kerja Anda merayakan hari besar keagamaannya yang berbeda dengan keyakinan Anda. Ia mengundang rekan-rekan untuk ikut merayakan secara sederhana di kantor. Apa yang paling tepat Anda lakukan?",
  "section": "TKP"
 },
 {
  "category": "Inisiatif & Belajar",
  "explanation": "Opsi 5 poin paling ideal: manfaatkan kesempatan belajar, susun rencana, dan bagikan ilmunya ke tim — belajar adalah investasi ASN. Mengikuti tapi tidak berbagi (4 poin) masih baik. Menolak karena sibuk (1 poin) menolak berkembang.",
  "id": 107,
  "options": [
   "Menolaknya karena Anda sudah sibuk dan merasa tidak butuh pelatihan itu.",
   "Mengikuti pelatihan itu, mencatat hal-hal penting, dan membagikan pengetahuan yang Anda dapat kepada rekan kerja setelah pelatihan selesai.",
   "Mengikuti pelatihan itu tetapi hanya untuk memenuhi absensi, tanpa benar-benar memperhatikan materinya.",
   "Mengikuti pelatihan itu, tetapi tidak membagikan apa pun kepada rekan kerja.",
   "Mendaftar pelatihan itu, tetapi tidak hadir karena ada pekerjaan lain."
  ],
  "points": [
   1,
   5,
   3,
   4,
   2
  ],
  "q": "Skenario: Instansi Anda menawarkan pelatihan gratis tentang manajemen pelayanan publik yang relevan dengan pekerjaan Anda. Pelatihan itu diadakan di luar jam kerja dan Anda sudah lelah setelah seharian bekerja. Apa yang paling tepat Anda lakukan?",
  "section": "TKP"
 },
 {
  "category": "Inisiatif & Belajar",
  "explanation": "Opsi 5 poin paling ideal: uji coba, dokumentasikan, dan ajukan ke atasan dengan bukti — inisiatif yang terukur. Langsung ubah tanpa izin (4 poin) berisiko. Menyimpan ide sendiri (1 poin) tidak berkontribusi.",
  "id": 108,
  "options": [
   "Menyimpan ide itu untuk diri sendiri karena takut ditolak.",
   "Mengubah cara kerja itu secara diam-diam tanpa memberi tahu siapa pun.",
   "Menguji coba cara baru itu dalam skala kecil, mendokumentasikan hasilnya, dan mengajukan usulan perbaikan kepada atasan beserta bukti efisiensinya.",
   "Langsung mengubah cara kerja tim tanpa persetujuan atasan.",
   "Menceritakan ide itu kepada rekan, tetapi tidak pernah menindaklanjutinya."
  ],
  "points": [
   1,
   3,
   5,
   4,
   2
  ],
  "q": "Skenario: Anda menemukan cara kerja yang lebih efisien untuk mengurus berkas warga, yang bisa memangkas waktu pelayanan dari 3 hari menjadi 1 hari. Namun cara itu belum pernah dicoba dan berbeda dari prosedur yang selama ini dipakai. Apa yang paling tepat Anda lakukan?",
  "section": "TKP"
 },
 {
  "category": "Inisiatif & Belajar",
  "explanation": "Opsi 5 poin paling ideal: sampaikan temuan dengan bukti dan usulan perbaikan, bukan sekadar kritik. Membiarkan kesalahan berlanjut (4 poin) pasif. Mengubah prosedur sendiri (1 poin) melanggar wewenang.",
  "id": 109,
  "options": [
   "Mengubah prosedur itu sendiri tanpa memberi tahu siapa pun.",
   "Membiarkan saja karena prosedur itu sudah lama dipakai dan bukan tugas Anda memperbaikinya.",
   "Menyampaikan temuan Anda kepada atasan dengan bukti dan data, serta mengusulkan perbaikan prosedur agar tidak merugikan warga dan instansi.",
   "Menceritakan kesalahan itu kepada rekan, tetapi tidak melaporkannya ke atasan.",
   "Mengabaikannya karena Anda khawatir dianggap mencari-cari kesalahan orang lain."
  ],
  "points": [
   2,
   3,
   5,
   4,
   1
  ],
  "q": "Skenario: Anda menyadari ada langkah dalam prosedur lama di kantor Anda yang sering menyebabkan berkas warga tertunda tanpa alasan yang jelas. Beberapa rekan sudah terbiasa dengan prosedur itu dan tidak mempermasalahkannya. Apa yang paling tepat Anda lakukan?",
  "section": "TKP"
 },
 {
  "category": "Inisiatif & Belajar",
  "explanation": "Opsi 5 poin paling ideal: belajar di luar jam kerja secara konsisten dan terapkan ilmunya di pekerjaan — pengembangan diri berkelanjutan. Belajar hanya saat ditegur (4 poin) reaktif. Tidak belajar karena sibuk (1 poin) stagnan.",
  "id": 110,
  "options": [
   "Tidak belajar karena Anda sudah sibuk dengan pekerjaan sehari-hari.",
   "Mempelajari keterampilan itu secara mandiri di luar jam kerja, lalu menerapkannya dalam pekerjaan Anda dan membantu rekan yang membutuhkannya.",
   "Mempelajari keterampilan itu hanya ketika atasan menegur Anda.",
   "Mempelajari keterampilan itu, tetapi tidak pernah menerapkannya dalam pekerjaan.",
   "Meminta rekan lain mempelajari keterampilan itu untuk Anda."
  ],
  "points": [
   1,
   5,
   3,
   4,
   2
  ],
  "q": "Skenario: Anda menyadari keterampilan analisis data semakin dibutuhkan dalam pekerjaan Anda, tetapi Anda belum menguasainya. Ada banyak materi belajar gratis yang bisa diakses, tetapi Anda harus meluangkan waktu di luar jam kerja untuk mempelajarinya. Apa yang paling tepat Anda lakukan?",
  "section": "TKP"
 },
 {
  "answer": 0,
  "explanation": "Memberi ruang beribadah dan menghormati keyakinan orang lain adalah pengamalan sila ke-1, Ketuhanan Yang Maha Esa, yang dijamin Pasal 29 ayat (2) UUD 1945.",
  "id": 201,
  "options": [
   "Ketuhanan Yang Maha Esa",
   "Kemanusiaan yang adil dan beradab",
   "Persatuan Indonesia",
   "Kerakyatan yang dipimpin oleh hikmat kebijaksanaan dalam permusyawaratan/perwakilan",
   "Keadilan sosial bagi seluruh rakyat Indonesia"
  ],
  "q": "Seorang ASN mengatur jadwal rapat agar tidak berbenturan dengan waktu ibadah rekan-rekannya yang berbeda agama, dan ia tidak pernah mengolok-olok keyakinan orang lain. Sikap tersebut merupakan pengamalan Pancasila sila ke-…",
  "section": "TWK"
 },
 {
  "answer": 3,
  "explanation": "Membantu sesama dengan tulus dan menghormati martabat manusia tanpa membeda-bedakan adalah pengamalan sila ke-2, Kemanusiaan yang adil dan beradab.",
  "id": 202,
  "options": [
   "Persatuan Indonesia",
   "Keadilan sosial bagi seluruh rakyat Indonesia",
   "Ketuhanan Yang Maha Esa",
   "Kemanusiaan yang adil dan beradab",
   "Kerakyatan yang dipimpin oleh hikmat kebijaksanaan dalam permusyawaratan/perwakilan"
  ],
  "q": "Seorang ASN di loket pelayanan membantu seorang penyandang disabilitas mengisi formulir dengan sabar, tanpa memintanya membayar jasa tambahan. Sikap tersebut paling mencerminkan Pancasila sila ke-…",
  "section": "TWK"
 },
 {
  "answer": 1,
  "explanation": "Menolak provokasi yang memecah belah dan menjaga persatuan adalah pengamalan sila ke-3, Persatuan Indonesia.",
  "id": 203,
  "options": [
   "Kemanusiaan yang adil dan beradab",
   "Persatuan Indonesia",
   "Ketuhanan Yang Maha Esa",
   "Keadilan sosial bagi seluruh rakyat Indonesia",
   "Kerakyatan yang dipimpin oleh hikmat kebijaksanaan dalam permusyawaratan/perwakilan"
  ],
  "q": "Ketika beredar kabar bohong di media sosial yang bertujuan mengadu domba antar-suku, seorang pelajar memilih tidak menyebarkannya dan mengajak teman-temannya memeriksa kebenaran kabar tersebut. Sikap pelajar itu mencerminkan Pancasila sila ke-…",
  "section": "TWK"
 },
 {
  "answer": 4,
  "explanation": "Menghormati dan melaksanakan keputusan yang diambil melalui musyawarah untuk mufakat adalah pengamalan sila ke-4, Kerakyatan yang dipimpin oleh hikmat kebijaksanaan dalam permusyawaratan/perwakilan.",
  "id": 204,
  "options": [
   "Ketuhanan Yang Maha Esa",
   "Persatuan Indonesia",
   "Kemanusiaan yang adil dan beradab",
   "Keadilan sosial bagi seluruh rakyat Indonesia",
   "Kerakyatan yang dipimpin oleh hikmat kebijaksanaan dalam permusyawaratan/perwakilan"
  ],
  "q": "Hasil musyawarah warga memutuskan lokasi pos ronda dipindah ke ujung desa, padahal ketua RT sebenarnya lebih setuju lokasi lama. Ketua RT tetap melaksanakan keputusan musyawarah tersebut. Sikap ketua RT mencerminkan Pancasila sila ke-…",
  "section": "TWK"
 },
 {
  "answer": 2,
  "explanation": "Memberikan kesempatan yang adil dan merata kepada seluruh warga, terutama yang membutuhkan, adalah pengamalan sila ke-5, Keadilan sosial bagi seluruh rakyat Indonesia.",
  "id": 205,
  "options": [
   "Ketuhanan Yang Maha Esa",
   "Kemanusiaan yang adil dan beradab",
   "Keadilan sosial bagi seluruh rakyat Indonesia",
   "Persatuan Indonesia",
   "Kerakyatan yang dipimpin oleh hikmat kebijaksanaan dalam permusyawaratan/perwakilan"
  ],
  "q": "Pemerintah daerah memberikan beasiswa kepada siswa berprestasi dari keluarga tidak mampu tanpa membedakan suku, agama, atau latar belakang orang tuanya. Kebijakan tersebut mencerminkan Pancasila sila ke-…",
  "section": "TWK"
 },
 {
  "answer": 0,
  "explanation": "Nepotisme dalam promosi jabatan mengingkari keadilan dan pemerataan kesempatan bagi seluruh rakyat, sehingga bertentangan dengan sila ke-5, Keadilan sosial bagi seluruh rakyat Indonesia.",
  "id": 206,
  "options": [
   "Keadilan sosial bagi seluruh rakyat Indonesia",
   "Ketuhanan Yang Maha Esa",
   "Persatuan Indonesia",
   "Kemanusiaan yang adil dan beradab",
   "Kerakyatan yang dipimpin oleh hikmat kebijaksanaan dalam permusyawaratan/perwakilan"
  ],
  "q": "Seorang kepala dinas hanya mempromosikan pegawai yang masih kerabatnya, meskipun ada pegawai lain yang kinerjanya jauh lebih baik. Praktik nepotisme tersebut bertentangan dengan Pancasila sila ke-…",
  "section": "TWK"
 },
 {
  "answer": 1,
  "explanation": "Menjaga privasi dan martabat setiap manusia adalah pengamalan sila ke-2, Kemanusiaan yang adil dan beradab.",
  "id": 207,
  "options": [
   "Persatuan Indonesia",
   "Kemanusiaan yang adil dan beradab",
   "Ketuhanan Yang Maha Esa",
   "Keadilan sosial bagi seluruh rakyat Indonesia",
   "Kerakyatan yang dipimpin oleh hikmat kebijaksanaan dalam permusyawaratan/perwakilan"
  ],
  "q": "Seorang ASN menolak permintaan atasannya untuk menyebarkan data pribadi warga yang ia kelola, karena hal itu melanggar privasi dan martabat warga tersebut. Sikap ASN itu paling mencerminkan Pancasila sila ke-…",
  "section": "TWK"
 },
 {
  "answer": 3,
  "explanation": "Kerja sama lintas suku dan saling membantu demi kepentingan bersama adalah pengamalan sila ke-3, Persatuan Indonesia.",
  "id": 208,
  "options": [
   "Ketuhanan Yang Maha Esa",
   "Kemanusiaan yang adil dan beradab",
   "Keadilan sosial bagi seluruh rakyat Indonesia",
   "Persatuan Indonesia",
   "Kerakyatan yang dipimpin oleh hikmat kebijaksanaan dalam permusyawaratan/perwakilan"
  ],
  "q": "Sekelompok warga dari suku yang berbeda bekerja sama membersihkan sungai di kampung mereka dan saling membantu saat salah satu warga terkena musibah, tanpa mempersoalkan asal-usul masing-masing. Sikap tersebut merupakan pengamalan Pancasila sila ke-…",
  "section": "TWK"
 },
 {
  "answer": 2,
  "explanation": "Pasal 27 ayat (2) UUD 1945 menyatakan: Tiap-tiap warga negara berhak atas pekerjaan dan penghidupan yang layak bagi kemanusiaan.",
  "id": 209,
  "options": [
   "Pasal 27 ayat (1)",
   "Pasal 28A",
   "Pasal 27 ayat (2)",
   "Pasal 29 ayat (1)",
   "Pasal 31 ayat (2)"
  ],
  "q": "Pemerintah membuka program pelatihan kerja gratis bagi warga yang menganggur agar mereka memperoleh pekerjaan dan penghidupan yang layak. Hak warga atas pekerjaan dan penghidupan yang layak dijamin dalam UUD 1945 Pasal …",
  "section": "TWK"
 },
 {
  "answer": 4,
  "explanation": "Pasal 28D ayat (1) UUD 1945 menyatakan setiap orang berhak atas pengakuan, jaminan, perlindungan, dan kepastian hukum yang adil serta perlakuan yang sama di hadapan hukum.",
  "id": 210,
  "options": [
   "Pasal 27 ayat (3)",
   "Pasal 28C ayat (1)",
   "Pasal 29 ayat (2)",
   "Pasal 30 ayat (1)",
   "Pasal 28D ayat (1)"
  ],
  "q": "Seorang warga yang menjadi korban penipuan menuntut agar perkaranya diproses secara adil dan transparan, tanpa ada perlakuan istimewa bagi pihak yang berkuasa. Hak atas kepastian hukum yang adil dan perlakuan yang sama di hadapan hukum dijamin dalam UUD 1945 Pasal …",
  "section": "TWK"
 },
 {
  "answer": 1,
  "explanation": "Pasal 30 ayat (2) UUD 1945 menyatakan usaha pertahanan dan keamanan negara dilaksanakan melalui sistem pertahanan dan keamanan rakyat semesta (Sishankamrata).",
  "id": 211,
  "options": [
   "Pasal 27 ayat (3)",
   "Pasal 30 ayat (2)",
   "Pasal 28H ayat (1)",
   "Pasal 33 ayat (3)",
   "Pasal 31 ayat (1)"
  ],
  "q": "Pertahanan dan keamanan negara dilaksanakan melalui sistem pertahanan dan keamanan rakyat semesta, dengan TNI dan Polri sebagai kekuatan utama dan rakyat sebagai kekuatan pendukung. Sistem ini diatur dalam UUD 1945 Pasal …",
  "section": "TWK"
 },
 {
  "answer": 0,
  "explanation": "Menurut Pasal 20A ayat (1) UUD 1945, DPR memiliki fungsi legislasi, anggaran, dan pengawasan. Membahas dan menyetujui APBN adalah fungsi anggaran.",
  "id": 212,
  "options": [
   "Anggaran",
   "Legislasi",
   "Pengawasan",
   "Yudikatif",
   "Eksekutif"
  ],
  "q": "DPR membahas dan menyetujui Anggaran Pendapatan dan Belanja Negara (APBN) yang diajukan pemerintah. Kegiatan DPR tersebut merupakan pelaksanaan fungsi …",
  "section": "TWK"
 },
 {
  "answer": 3,
  "explanation": "Pasal 23E ayat (1) UUD 1945 menyatakan bahwa untuk memeriksa pengelolaan dan tanggung jawab tentang keuangan negara diadakan satu Badan Pemeriksa Keuangan yang bebas dan mandiri.",
  "id": 213,
  "options": [
   "Mahkamah Agung",
   "Komisi Yudisial",
   "Mahkamah Konstitusi",
   "Badan Pemeriksa Keuangan",
   "Dewan Perwakilan Daerah"
  ],
  "q": "Setiap tahun, sebuah lembaga negara yang bebas dan mandiri memeriksa pengelolaan dan tanggung jawab keuangan negara, lalu melaporkan hasil pemeriksaannya kepada DPR. Lembaga yang dimaksud adalah …",
  "section": "TWK"
 },
 {
  "answer": 2,
  "explanation": "Pasal 3 ayat (1) UUD 1945 menyatakan Majelis Permusyawaratan Rakyat berwenang mengubah dan menetapkan Undang-Undang Dasar.",
  "id": 214,
  "options": [
   "Dewan Perwakilan Rakyat",
   "Dewan Perwakilan Daerah",
   "Majelis Permusyawaratan Rakyat",
   "Mahkamah Konstitusi",
   "Presiden"
  ],
  "q": "Sebuah lembaga negara berwenang mengubah dan menetapkan Undang-Undang Dasar. Lembaga tersebut adalah …",
  "section": "TWK"
 },
 {
  "answer": 1,
  "explanation": "Pasal 18 ayat (1) UUD 1945 menyatakan Negara Kesatuan Republik Indonesia dibagi atas daerah-daerah provinsi, dan daerah provinsi dibagi atas kabupaten dan kota yang masing-masing mempunyai pemerintahan daerah.",
  "id": 215,
  "options": [
   "Pasal 1 ayat (1)",
   "Pasal 18 ayat (1)",
   "Pasal 18B ayat (1)",
   "Pasal 19 ayat (1)",
   "Pasal 22 ayat (1)"
  ],
  "q": "Provinsi, kabupaten, dan kota masing-masing mempunyai pemerintahan daerah yang mengatur urusan pemerintahan sendiri sesuai dengan asas otonomi. Ketentuan pembagian wilayah dan pemerintahan daerah ini diatur dalam UUD 1945 Pasal …",
  "section": "TWK"
 },
 {
  "answer": 4,
  "explanation": "Pasal 22E ayat (1) UUD 1945 menyatakan pemilihan umum dilaksanakan secara langsung, umum, bebas, rahasia, jujur, dan adil setiap lima tahun sekali.",
  "id": 216,
  "options": [
   "Pasal 22 ayat (1)",
   "Pasal 22C ayat (1)",
   "Pasal 22D ayat (1)",
   "Pasal 6A ayat (1)",
   "Pasal 22E ayat (1)"
  ],
  "q": "Pemilihan umum dilaksanakan setiap lima tahun sekali secara langsung, umum, bebas, rahasia, jujur, dan adil untuk memilih anggota DPR, DPD, presiden dan wakil presiden, serta DPRD. Ketentuan ini diatur dalam UUD 1945 Pasal …",
  "section": "TWK"
 },
 {
  "answer": 0,
  "explanation": "UU No. 23 Tahun 2019 tentang Pengelolaan Sumber Daya Nasional untuk Pertahanan Negara menyebutkan pengabdian sesuai dengan profesi sebagai salah satu wujud bela negara, selain pendidikan kewarganegaraan dan pelatihan dasar kemiliteran.",
  "id": 217,
  "options": [
   "Bela negara",
   "Wajib militer",
   "Tugas tambahan ASN",
   "Program transmigrasi",
   "Kerja bakti"
  ],
  "q": "Seorang dokter ASN bersedia ditugaskan di daerah terpencil yang kekurangan tenaga medis, karena ia memandang pengabdiannya sebagai bentuk bela negara sesuai profesinya. Menurut UU No. 23 Tahun 2019, pengabdian sesuai profesi merupakan salah satu bentuk …",
  "section": "TWK"
 },
 {
  "answer": 3,
  "explanation": "Mengembalikan uang yang bukan haknya meskipun tidak ada yang mengawasi adalah wujud integritas, yaitu kejujuran dan kesesuaian antara ucapan dan perbuatan, yang menjadi nilai dasar ASN.",
  "id": 218,
  "options": [
   "Loyalitas buta",
   "Hedonisme",
   "Pragmatisme",
   "Integritas",
   "Apatisme"
  ],
  "q": "Seorang bendahara menemukan kelebihan uang kas di kantornya. Meskipun tidak ada yang mengetahui, ia segera melaporkan dan mengembalikan kelebihan tersebut. Sikap bendahara itu paling mencerminkan nilai …",
  "section": "TWK"
 },
 {
  "answer": 2,
  "explanation": "Menghargai dan merayakan keberagaman sebagai kekayaan bersama adalah pengamalan Bhinneka Tunggal Ika, berbeda-beda tetapi tetap satu jua, sejalan dengan sila ke-3 Pancasila.",
  "id": 219,
  "options": [
   "Primordialisme",
   "Eksklusivisme",
   "Bhinneka Tunggal Ika",
   "Separatisme",
   "Individualisme"
  ],
  "q": "Sebuah sekolah mengadakan perayaan hari besar keagamaan secara bergiliran, sehingga siswa dari semua agama dapat mengenal dan menghormati tradisi satu sama lain. Kegiatan tersebut merupakan pengamalan …",
  "section": "TWK"
 },
 {
  "answer": 1,
  "explanation": "Menjaga kedaulatan wilayah dan bangga menunjukkan identitas bangsa adalah wujud nasionalisme dan cinta tanah air dalam menjaga keutuhan NKRI.",
  "id": 220,
  "options": [
   "Apatisme terhadap negara",
   "Nasionalisme dan cinta tanah air dalam menjaga kedaulatan NKRI",
   "Sikap separatisme",
   "Primordialisme kedaerahan",
   "Eksklusivisme kelompok"
  ],
  "q": "Seorang nelayan di wilayah perbatasan selalu mengibarkan bendera Merah Putih di perahunya dan melaporkan kapal asing yang mencuri ikan di perairan Indonesia kepada aparat. Sikap nelayan tersebut mencerminkan …",
  "section": "TWK"
 },
 {
  "answer": 4,
  "explanation": "Penyebaran paham yang bertentangan dengan Pancasila, ujaran kebencian, dan hoaks pemecah belah termasuk ancaman nonmiliter terhadap persatuan dan keutuhan NKRI, sedangkan agresi, blokade, invasi, dan serangan bersenjata adalah ancaman militer.",
  "id": 221,
  "options": [
   "Agresi militer dari negara lain",
   "Blokade terhadap pelabuhan Indonesia",
   "Invasi pasukan asing ke wilayah perbatasan",
   "Serangan bersenjata oleh kelompok separatis",
   "Penyebaran paham yang bertentangan dengan Pancasila dan upaya memecah belah persatuan"
  ],
  "q": "Berikut ini yang termasuk ancaman nonmiliter terhadap keutuhan NKRI adalah …",
  "section": "TWK"
 },
 {
  "answer": 0,
  "explanation": "Empat pilar kebangsaan adalah Pancasila, UUD 1945, NKRI, dan Bhinneka Tunggal Ika. Ketetapan MPR bukan bagian dari empat pilar tersebut.",
  "id": 222,
  "options": [
   "Ketetapan MPR",
   "Pancasila",
   "UUD Negara Republik Indonesia Tahun 1945",
   "Negara Kesatuan Republik Indonesia",
   "Bhinneka Tunggal Ika"
  ],
  "q": "Empat pilar kebangsaan Indonesia terdiri atas Pancasila, UUD 1945, NKRI, dan Bhinneka Tunggal Ika. Berikut ini yang BUKAN termasuk empat pilar kebangsaan adalah …",
  "section": "TWK"
 },
 {
  "answer": 2,
  "explanation": "UU No. 23 Tahun 2019 tentang Pengelolaan Sumber Daya Nasional untuk Pertahanan Negara mengatur komponen cadangan, termasuk pelatihan dasar kemiliteran bagi warga negara yang menjadi komponen cadangan.",
  "id": 223,
  "options": [
   "UU No. 20 Tahun 2003 tentang Sistem Pendidikan Nasional",
   "UU No. 39 Tahun 1999 tentang Hak Asasi Manusia",
   "UU No. 23 Tahun 2019 tentang Pengelolaan Sumber Daya Nasional untuk Pertahanan Negara",
   "UU No. 2 Tahun 2002 tentang Kepolisian Negara Republik Indonesia",
   "UU No. 34 Tahun 2004 tentang Tentara Nasional Indonesia"
  ],
  "q": "Seorang warga mengikuti pelatihan dasar kemiliteran secara sukarela dan terdaftar sebagai komponen cadangan pertahanan negara. Keikutsertaan warga sebagai komponen cadangan diatur dalam …",
  "section": "TWK"
 },
 {
  "answer": 1,
  "explanation": "Piagam Jakarta dirumuskan oleh Panitia Sembilan pada 22 Juni 1945 dan memuat rumusan dasar negara yang kemudian menjadi dasar Pembukaan UUD 1945.",
  "id": 224,
  "options": [
   "Teks Proklamasi",
   "Piagam Jakarta",
   "Maklumat 3 November 1945",
   "Dekrit Presiden 5 Juli 1959",
   "Piagam Madinah"
  ],
  "q": "Pada 22 Juni 1945, Panitia Sembilan merumuskan sebuah naskah yang memuat rumusan dasar negara dan menjadi cikal bakal Pembukaan UUD 1945. Naskah tersebut dikenal dengan nama …",
  "section": "TWK"
 },
 {
  "answer": 3,
  "explanation": "Mohammad Yamin menyampaikan usul lima asas dasar negara pada 29 Mei 1945 dalam sidang BPUPKI, sebelum Soekarno menyampaikan pidato Pancasila pada 1 Juni 1945.",
  "id": 225,
  "options": [
   "Soekarno",
   "Mohammad Hatta",
   "Ki Bagus Hadikusumo",
   "Mohammad Yamin",
   "Soepomo"
  ],
  "q": "Dalam sidang BPUPKI pada 29 Mei 1945, seorang tokoh mengusulkan lima asas dasar negara, yaitu peri kebangsaan, peri kemanusiaan, peri ketuhanan, peri kerakyatan, dan kesejahteraan rakyat. Tokoh tersebut adalah …",
  "section": "TWK"
 },
 {
  "answer": 0,
  "explanation": "Peristiwa Rengasdengklok terjadi pada 16 Agustus 1945, ketika golongan muda membawa Soekarno-Hatta ke Rengasdengklok, Karawang, agar proklamasi kemerdekaan segera dilaksanakan.",
  "id": 226,
  "options": [
   "Rengasdengklok",
   "Bandung Lautan Api",
   "Pertempuran Surabaya",
   "Serangan Umum 1 Maret",
   "Perundingan Linggarjati"
  ],
  "q": "Pada 16 Agustus 1945, para pemuda membawa Soekarno dan Mohammad Hatta ke sebuah tempat di Karawang untuk mendesak agar kemerdekaan segera diproklamasikan. Peristiwa tersebut dikenal sebagai peristiwa …",
  "section": "TWK"
 },
 {
  "answer": 4,
  "explanation": "Pertempuran Surabaya 10 November 1945 diperingati sebagai Hari Pahlawan, untuk mengenang perjuangan para pejuang yang gugur mempertahankan kemerdekaan.",
  "id": 227,
  "options": [
   "Hari Kemerdekaan",
   "Hari Kesaktian Pancasila",
   "Hari Kebangkitan Nasional",
   "Hari Sumpah Pemuda",
   "Hari Pahlawan"
  ],
  "q": "Pertempuran besar melawan pasukan Sekutu di Surabaya pada 10 November 1945, yang dipicu semangat perlawanan yang dikobarkan Bung Tomo, diperingati setiap tahun sebagai …",
  "section": "TWK"
 },
 {
  "answer": 2,
  "explanation": "Hasil Konferensi Meja Bundar (23 Agustus-2 November 1949) adalah pengakuan kedaulatan Indonesia oleh Belanda, yang berlaku sejak 27 Desember 1949.",
  "id": 228,
  "options": [
   "17 Agustus 1945",
   "18 Agustus 1945",
   "27 Desember 1949",
   "20 Mei 1908",
   "28 Oktober 1928"
  ],
  "q": "Melalui Konferensi Meja Bundar di Den Haag pada 1949, Belanda akhirnya mengakui kedaulatan Indonesia. Pengakuan kedaulatan tersebut berlaku sejak tanggal …",
  "section": "TWK"
 },
 {
  "answer": 1,
  "explanation": "Pasal 32 ayat (1) UUD 1945 menyatakan: Negara memajukan kebudayaan nasional Indonesia di tengah peradaban dunia dengan menjamin kebebasan masyarakat dalam memelihara dan mengembangkan nilai-nilai budayanya.",
  "id": 229,
  "options": [
   "Pasal 31 ayat (1)",
   "Pasal 32 ayat (1)",
   "Pasal 33 ayat (1)",
   "Pasal 34 ayat (1)",
   "Pasal 35"
  ],
  "q": "Negara wajib memajukan kebudayaan nasional Indonesia di tengah peradaban dunia dengan menjamin kebebasan masyarakat dalam memelihara dan mengembangkan nilai-nilai budayanya. Kewajiban ini diatur dalam UUD 1945 Pasal …",
  "section": "TWK"
 },
 {
  "answer": 3,
  "explanation": "UU No. 24 Tahun 2009 menegaskan Bahasa Indonesia berfungsi antara lain sebagai bahasa resmi kenegaraan, bahasa pengantar dalam pendidikan nasional, dan alat pemersatu bangsa dari berbagai suku, agama, dan golongan.",
  "id": 230,
  "options": [
   "Bahasa sehari-hari yang tidak terikat aturan resmi",
   "Bahasa daerah yang hanya berlaku di satu provinsi",
   "Bahasa asing untuk keperluan perdagangan internasional",
   "Alat pemersatu berbagai suku bangsa dari beragam latar belakang",
   "Bahasa yang hanya digunakan dalam upacara kenegaraan"
  ],
  "q": "Menurut UU No. 24 Tahun 2009 tentang Bendera, Bahasa, dan Lambang Negara, serta Lagu Kebangsaan, salah satu fungsi Bahasa Indonesia adalah sebagai …",
  "section": "TWK"
 },
 {
  "id": 231,
  "section": "TIU",
  "q": "Sinonim kata \"AKURAT\" adalah ...",
  "options": [
   "Ceroboh",
   "Kasar",
   "Tepat dan benar",
   "Lambat",
   "Berlebihan"
  ],
  "answer": 2,
  "explanation": "Akurat berarti tepat dan benar, tidak meleset dari sasaran atau kenyataan."
 },
 {
  "id": 232,
  "section": "TIU",
  "q": "Sinonim kata \"DERMAWAN\" adalah ...",
  "options": [
   "Pelit",
   "Suka memberi dan murah hati",
   "Hemat",
   "Rakus",
   "Malas"
  ],
  "answer": 1,
  "explanation": "Dermawan berarti suka memberi dan murah hati kepada orang lain."
 },
 {
  "id": 233,
  "section": "TIU",
  "q": "Sinonim kata \"GIGIH\" adalah ...",
  "options": [
   "Mudah menyerah",
   "Lemah",
   "Malas",
   "Tekun dan pantang menyerah",
   "Ceroboh"
  ],
  "answer": 3,
  "explanation": "Gigih berarti tekun, ulet, dan pantang menyerah dalam berusaha."
 },
 {
  "id": 234,
  "section": "TIU",
  "q": "Antonim kata \"HEMAT\" adalah ...",
  "options": [
   "Irit",
   "Cermat",
   "Boros",
   "Rajin",
   "Pelit"
  ],
  "answer": 2,
  "explanation": "Lawan kata hemat (menggunakan secukupnya) adalah boros (menggunakan berlebihan)."
 },
 {
  "id": 235,
  "section": "TIU",
  "q": "Antonim kata \"SETIA\" adalah ...",
  "options": [
   "Loyal",
   "Taat",
   "Jujur",
   "Khianat / berkhianat",
   "Patuh"
  ],
  "answer": 3,
  "explanation": "Lawan kata setia (tetap berpegang teguh) adalah khianat (berkhianat / tidak setia)."
 },
 {
  "id": 236,
  "section": "TIU",
  "q": "Antonim kata \"TERANG\" adalah ...",
  "options": [
   "Jelas",
   "Gelap",
   "Bersih",
   "Cerah",
   "Terik"
  ],
  "answer": 1,
  "explanation": "Lawan kata terang adalah gelap."
 },
 {
  "id": 237,
  "section": "TIU",
  "q": "JARUM : MENJAHIT = PISAU : ...",
  "options": [
   "Memotong",
   "Memasak",
   "Menjual",
   "Membeli",
   "Menyimpan"
  ],
  "answer": 0,
  "explanation": "Jarum adalah alat untuk menjahit, pisau adalah alat untuk memotong."
 },
 {
  "id": 238,
  "section": "TIU",
  "q": "MATA : MELIHAT = TELINGA : ...",
  "options": [
   "Berbicara",
   "Mendengar",
   "Mencium",
   "Meraba",
   "Berjalan"
  ],
  "answer": 1,
  "explanation": "Mata adalah indra untuk melihat, telinga adalah indra untuk mendengar."
 },
 {
  "id": 239,
  "section": "TIU",
  "q": "KUNCI : PINTU = REM : ...",
  "options": [
   "Kendaraan",
   "Jalan",
   "Ban",
   "Bensin",
   "Sopir"
  ],
  "answer": 0,
  "explanation": "Kunci digunakan pada pintu, rem digunakan pada kendaraan. Hubungannya: alat yang dipakai pada sesuatu."
 },
 {
  "id": 240,
  "section": "TIU",
  "q": "BUNGA : TAMAN = IKAN : ...",
  "options": [
   "Jaring",
   "Pancing",
   "Kolam",
   "Umpan",
   "Air"
  ],
  "answer": 2,
  "explanation": "Bunga ditanam dan dipelihara di taman, ikan dipelihara di kolam."
 },
 {
  "id": 241,
  "section": "TIU",
  "q": "4, 8, 16, 32, 64, ... Berapakah angka berikutnya?",
  "options": [
   "96",
   "112",
   "120",
   "128",
   "144"
  ],
  "answer": 3,
  "explanation": "Setiap angka dikali 2: 4 x 2 = 8, 8 x 2 = 16, 16 x 2 = 32, 32 x 2 = 64, jadi 64 x 2 = 128."
 },
 {
  "id": 242,
  "section": "TIU",
  "q": "1, 4, 9, 16, 25, ... Berapakah angka berikutnya?",
  "options": [
   "30",
   "36",
   "34",
   "40",
   "49"
  ],
  "answer": 1,
  "explanation": "Deret bilangan kuadrat: 1² = 1, 2² = 4, 3² = 9, 4² = 16, 5² = 25, jadi berikutnya 6² = 36."
 },
 {
  "id": 243,
  "section": "TIU",
  "q": "90, 80, 71, 63, 56, ... Berapakah angka berikutnya?",
  "options": [
   "48",
   "49",
   "51",
   "52",
   "50"
  ],
  "answer": 4,
  "explanation": "Selisihnya berkurang 1 tiap langkah: -10, -9, -8, -7, jadi selisih berikutnya -6. 56 - 6 = 50."
 },
 {
  "id": 244,
  "section": "TIU",
  "q": "1, 3, 6, 10, 15, ... Berapakah angka berikutnya?",
  "options": [
   "21",
   "18",
   "19",
   "20",
   "22"
  ],
  "answer": 0,
  "explanation": "Selisihnya bertambah 1 tiap langkah: +2, +3, +4, +5, jadi selisih berikutnya +6. 15 + 6 = 21."
 },
 {
  "id": 245,
  "section": "TIU",
  "q": "3, 6, 11, 18, 27, ... Berapakah angka berikutnya?",
  "options": [
   "34",
   "36",
   "38",
   "40",
   "42"
  ],
  "answer": 2,
  "explanation": "Selisihnya bilangan ganjil berurutan: +3, +5, +7, +9, jadi selisih berikutnya +11. 27 + 11 = 38."
 },
 {
  "id": 246,
  "section": "TIU",
  "q": "Berapakah 25% dari 240?",
  "options": [
   "60",
   "50",
   "55",
   "65",
   "70"
  ],
  "answer": 0,
  "explanation": "25% dari 240 = 25/100 x 240 = 60."
 },
 {
  "id": 247,
  "section": "TIU",
  "q": "Harga 4 kg gula adalah Rp48.000,00. Berapa harga 7 kg gula yang sama?",
  "options": [
   "Rp72.000,00",
   "Rp84.000,00",
   "Rp80.000,00",
   "Rp88.000,00",
   "Rp96.000,00"
  ],
  "answer": 1,
  "explanation": "Harga 1 kg = Rp48.000 : 4 = Rp12.000. Harga 7 kg = 7 x Rp12.000 = Rp84.000."
 },
 {
  "id": 248,
  "section": "TIU",
  "q": "Jika diketahui a + b = 15 dan ab = 56, berapakah nilai a^2 + b^2?",
  "options": [
   "100",
   "105",
   "120",
   "125",
   "113"
  ],
  "answer": 4,
  "explanation": "(a+b)² = a² + 2ab + b², jadi 225 = a² + b² + 112, maka a² + b² = 113. Cek: a = 7, b = 8, maka 49 + 64 = 113."
 },
 {
  "id": 249,
  "section": "TIU",
  "q": "Perbandingan uang Sinta dan Rina adalah 2 : 3. Jumlah uang mereka Rp250.000,00. Berapa uang Rina?",
  "options": [
   "Rp150.000,00",
   "Rp100.000,00",
   "Rp125.000,00",
   "Rp175.000,00",
   "Rp200.000,00"
  ],
  "answer": 0,
  "explanation": "Jumlah bagian = 2 + 3 = 5. Uang Rina = 3/5 x Rp250.000 = Rp150.000."
 },
 {
  "id": 250,
  "section": "TIU",
  "q": "Berapakah 12,5% dari 96?",
  "options": [
   "10",
   "14",
   "16",
   "18",
   "12"
  ],
  "answer": 4,
  "explanation": "12,5% = 1/8. 96 : 8 = 12."
 },
 {
  "id": 251,
  "section": "TIU",
  "q": "Sebuah proyek dapat diselesaikan oleh 15 orang pekerja dalam waktu 12 hari. Jika proyek harus selesai dalam 9 hari, berapa tambahan pekerja yang diperlukan?",
  "options": [
   "3 orang",
   "4 orang",
   "6 orang",
   "5 orang",
   "8 orang"
  ],
  "answer": 3,
  "explanation": "Total pekerjaan = 15 x 12 = 180 orang-hari. Untuk 9 hari dibutuhkan 180 : 9 = 20 orang. Tambahan = 20 - 15 = 5 orang."
 },
 {
  "id": 252,
  "section": "TIU",
  "q": "Pipa A dapat mengisi sebuah kolam hingga penuh dalam waktu 3 jam, sedangkan pipa B membutuhkan waktu 6 jam untuk mengisi kolam yang sama. Jika kedua pipa dibuka secara bersamaan, berapa lama waktu yang dibutuhkan untuk mengisi kolam tersebut hingga penuh?",
  "options": [
   "1 jam",
   "1 jam 30 menit",
   "2 jam 30 menit",
   "3 jam",
   "2 jam"
  ],
  "answer": 4,
  "explanation": "Kecepatan gabungan = 1/3 + 1/6 = 1/2 kolam per jam. Waktu = 1 : (1/2) = 2 jam."
 },
 {
  "id": 253,
  "section": "TIU",
  "q": "Seorang pedagang membeli 5 kg mangga seharga Rp100.000,00, lalu menjualnya dengan harga Rp25.000,00 per kg. Berapa persen keuntungan pedagang tersebut?",
  "options": [
   "10%",
   "15%",
   "25%",
   "20%",
   "30%"
  ],
  "answer": 2,
  "explanation": "Hasil penjualan = 5 x Rp25.000 = Rp125.000. Untung = Rp125.000 - Rp100.000 = Rp25.000. Persentase = 25.000/100.000 x 100% = 25%."
 },
 {
  "id": 254,
  "section": "TIU",
  "q": "Semua guru adalah pendidik. Sari adalah guru. Kesimpulan yang tepat adalah ...",
  "options": [
   "Sari bukan pendidik",
   "Sari adalah pendidik",
   "Semua pendidik adalah Sari",
   "Sari mungkin bukan guru",
   "Tidak dapat disimpulkan"
  ],
  "answer": 1,
  "explanation": "Sari termasuk kelompok guru, dan semua guru adalah pendidik, jadi Sari adalah pendidik."
 },
 {
  "id": 255,
  "section": "TIU",
  "q": "Semua ikan hidup di air. Lele adalah ikan. Kesimpulan yang tepat adalah ...",
  "options": [
   "Lele hidup di darat",
   "Semua yang hidup di air adalah lele",
   "Lele hidup di air",
   "Lele bukan ikan",
   "Tidak dapat disimpulkan"
  ],
  "answer": 2,
  "explanation": "Lele termasuk kelompok ikan, dan semua ikan hidup di air, jadi lele hidup di air."
 },
 {
  "id": 256,
  "section": "TIU",
  "q": "Semua kendaraan bermotor memakai bahan bakar. Sepeda motor adalah kendaraan bermotor. Kesimpulan yang tepat adalah ...",
  "options": [
   "Sepeda motor tidak memakai bahan bakar",
   "Semua yang memakai bahan bakar adalah sepeda motor",
   "Tidak dapat disimpulkan",
   "Sepeda motor memakai bahan bakar",
   "Sepeda motor bukan kendaraan"
  ],
  "answer": 3,
  "explanation": "Sepeda motor termasuk kendaraan bermotor, dan semua kendaraan bermotor memakai bahan bakar, jadi sepeda motor memakai bahan bakar."
 },
 {
  "id": 257,
  "section": "TIU",
  "q": "Jika lampu padam, maka ruangan menjadi gelap. Ruangan tidak gelap. Kesimpulan yang tepat adalah ...",
  "options": [
   "Lampu padam",
   "Lampu tidak padam",
   "Ruangan gelap karena lampu padam",
   "Tidak dapat disimpulkan",
   "Lampu pasti rusak"
  ],
  "answer": 1,
  "explanation": "Jika lampu padam ruangan pasti gelap. Karena ruangan tidak gelap, maka lampu tidak padam (modus tollens)."
 },
 {
  "id": 258,
  "section": "TIU",
  "q": "Semua karyawan yang disiplin akan mendapat bonus. Dedi mendapat bonus. Kesimpulan yang tepat adalah ...",
  "options": [
   "Dedi pasti disiplin",
   "Dedi pasti tidak disiplin",
   "Tidak dapat disimpulkan apakah Dedi disiplin",
   "Semua yang mendapat bonus pasti disiplin",
   "Dedi tidak mendapat bonus"
  ],
  "answer": 2,
  "explanation": "Dedi mendapat bonus bisa karena disiplin, bisa juga karena alasan lain. Dari premis ini tidak dapat disimpulkan apakah Dedi disiplin."
 },
 {
  "id": 259,
  "section": "TIU",
  "q": "Jika Budi menabung, maka ia bisa membeli sepeda. Budi menabung. Kesimpulan yang tepat adalah ...",
  "options": [
   "Budi tidak bisa membeli sepeda",
   "Budi bisa membeli sepeda",
   "Budi mungkin bisa membeli sepeda",
   "Tidak dapat disimpulkan",
   "Budi tidak menabung"
  ],
  "answer": 1,
  "explanation": "Premis terpenuhi (Budi menabung), maka akibatnya berlaku: Budi bisa membeli sepeda (modus ponens)."
 },
 {
  "id": 260,
  "section": "TIU",
  "q": "Semua penulis adalah pembaca. Sebagian pembaca adalah penyair. Kesimpulan yang tepat adalah ...",
  "options": [
   "Sebagian penulis pasti penyair",
   "Semua penulis adalah penyair",
   "Semua penyair adalah penulis",
   "Tidak dapat dipastikan sebagian penulis adalah penyair",
   "Sebagian penyair adalah penulis"
  ],
  "answer": 3,
  "explanation": "Penyair yang merupakan pembaca belum tentu penulis. Tidak ada kepastian bahwa sebagian penulis adalah penyair."
 },
 {
  "id": 261,
  "section": "TIU",
  "q": "Perhatikan deretan gambar berikut. Gambar berikutnya adalah ...",
  "figure": "<div class=\"fig-seq\"><svg viewBox=\"0 0 64 64\" width=\"64\" height=\"64\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"2\" y=\"2\" width=\"60\" height=\"60\" fill=\"#ffffff\" stroke=\"#1c2733\" stroke-width=\"2\"/><polygon points=\"32,10 44,30 36,30 36,54 28,54 28,30 20,30\" fill=\"#111111\"/></svg><svg viewBox=\"0 0 64 64\" width=\"64\" height=\"64\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"2\" y=\"2\" width=\"60\" height=\"60\" fill=\"#ffffff\" stroke=\"#1c2733\" stroke-width=\"2\"/><g transform=\"rotate(45 32 32)\"><polygon points=\"32,10 44,30 36,30 36,54 28,54 28,30 20,30\" fill=\"#111111\"/></g></svg><svg viewBox=\"0 0 64 64\" width=\"64\" height=\"64\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"2\" y=\"2\" width=\"60\" height=\"60\" fill=\"#ffffff\" stroke=\"#1c2733\" stroke-width=\"2\"/><g transform=\"rotate(90 32 32)\"><polygon points=\"32,10 44,30 36,30 36,54 28,54 28,30 20,30\" fill=\"#111111\"/></g></svg><svg viewBox=\"0 0 64 64\" width=\"64\" height=\"64\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"2\" y=\"2\" width=\"60\" height=\"60\" fill=\"#ffffff\" stroke=\"#1c2733\" stroke-width=\"2\"/><g transform=\"rotate(135 32 32)\"><polygon points=\"32,10 44,30 36,30 36,54 28,54 28,30 20,30\" fill=\"#111111\"/></g></svg><svg viewBox=\"0 0 64 64\" width=\"64\" height=\"64\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"2\" y=\"2\" width=\"60\" height=\"60\" fill=\"#f1f5f9\" stroke=\"#1c2733\" stroke-width=\"2\"/><text x=\"32\" y=\"43\" text-anchor=\"middle\" font-size=\"30\" font-weight=\"bold\" fill=\"#0b3d91\">?</text></svg></div>",
  "options": [
   "Panah ke atas",
   "Panah ke kanan",
   "Panah ke kanan bawah",
   "Panah ke bawah",
   "Panah ke kiri"
  ],
  "optionFigures": [
   "<svg viewBox=\"0 0 64 64\" width=\"56\" height=\"56\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"2\" y=\"2\" width=\"60\" height=\"60\" fill=\"#ffffff\" stroke=\"#1c2733\" stroke-width=\"2\"/><polygon points=\"32,10 44,30 36,30 36,54 28,54 28,30 20,30\" fill=\"#111111\"/></svg>",
   "<svg viewBox=\"0 0 64 64\" width=\"56\" height=\"56\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"2\" y=\"2\" width=\"60\" height=\"60\" fill=\"#ffffff\" stroke=\"#1c2733\" stroke-width=\"2\"/><g transform=\"rotate(90 32 32)\"><polygon points=\"32,10 44,30 36,30 36,54 28,54 28,30 20,30\" fill=\"#111111\"/></g></svg>",
   "<svg viewBox=\"0 0 64 64\" width=\"56\" height=\"56\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"2\" y=\"2\" width=\"60\" height=\"60\" fill=\"#ffffff\" stroke=\"#1c2733\" stroke-width=\"2\"/><g transform=\"rotate(135 32 32)\"><polygon points=\"32,10 44,30 36,30 36,54 28,54 28,30 20,30\" fill=\"#111111\"/></g></svg>",
   "<svg viewBox=\"0 0 64 64\" width=\"56\" height=\"56\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"2\" y=\"2\" width=\"60\" height=\"60\" fill=\"#ffffff\" stroke=\"#1c2733\" stroke-width=\"2\"/><g transform=\"rotate(180 32 32)\"><polygon points=\"32,10 44,30 36,30 36,54 28,54 28,30 20,30\" fill=\"#111111\"/></g></svg>",
   "<svg viewBox=\"0 0 64 64\" width=\"56\" height=\"56\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"2\" y=\"2\" width=\"60\" height=\"60\" fill=\"#ffffff\" stroke=\"#1c2733\" stroke-width=\"2\"/><g transform=\"rotate(270 32 32)\"><polygon points=\"32,10 44,30 36,30 36,54 28,54 28,30 20,30\" fill=\"#111111\"/></g></svg>"
  ],
  "answer": 3,
  "explanation": "Panah berputar 45 derajat searah jarum jam setiap langkah: 0°, 45°, 90°, 135°, jadi berikutnya 180°, yaitu panah menunjuk ke bawah."
 },
 {
  "id": 262,
  "section": "TIU",
  "q": "Perhatikan deretan gambar berikut. Gambar berikutnya adalah ...",
  "figure": "<div class=\"fig-seq\"><svg viewBox=\"0 0 64 64\" width=\"64\" height=\"64\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"2\" y=\"2\" width=\"60\" height=\"60\" fill=\"#ffffff\" stroke=\"#1c2733\" stroke-width=\"2\"/><polygon points=\"32.0,12.0 46.1,17.9 52.0,32.0 46.1,46.1 32.0,52.0 17.9,46.1 12.0,32.0 17.9,17.9\" fill=\"#111111\"/></svg><svg viewBox=\"0 0 64 64\" width=\"64\" height=\"64\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"2\" y=\"2\" width=\"60\" height=\"60\" fill=\"#ffffff\" stroke=\"#1c2733\" stroke-width=\"2\"/><polygon points=\"32.0,12.0 47.6,19.5 51.5,36.5 40.7,50.0 23.3,50.0 12.5,36.5 16.4,19.5\" fill=\"#111111\"/></svg><svg viewBox=\"0 0 64 64\" width=\"64\" height=\"64\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"2\" y=\"2\" width=\"60\" height=\"60\" fill=\"#ffffff\" stroke=\"#1c2733\" stroke-width=\"2\"/><polygon points=\"32.0,12.0 49.3,22.0 49.3,42.0 32.0,52.0 14.7,42.0 14.7,22.0\" fill=\"#111111\"/></svg><svg viewBox=\"0 0 64 64\" width=\"64\" height=\"64\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"2\" y=\"2\" width=\"60\" height=\"60\" fill=\"#ffffff\" stroke=\"#1c2733\" stroke-width=\"2\"/><polygon points=\"32.0,12.0 51.0,25.8 43.8,48.2 20.2,48.2 13.0,25.8\" fill=\"#111111\"/></svg><svg viewBox=\"0 0 64 64\" width=\"64\" height=\"64\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"2\" y=\"2\" width=\"60\" height=\"60\" fill=\"#f1f5f9\" stroke=\"#1c2733\" stroke-width=\"2\"/><text x=\"32\" y=\"43\" text-anchor=\"middle\" font-size=\"30\" font-weight=\"bold\" fill=\"#0b3d91\">?</text></svg></div>",
  "options": [
   "Segitiga (3 sisi)",
   "Segiempat (4 sisi)",
   "Segilima (5 sisi)",
   "Segienam (6 sisi)",
   "Lingkaran"
  ],
  "optionFigures": [
   "<svg viewBox=\"0 0 64 64\" width=\"56\" height=\"56\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"2\" y=\"2\" width=\"60\" height=\"60\" fill=\"#ffffff\" stroke=\"#1c2733\" stroke-width=\"2\"/><polygon points=\"32.0,12.0 49.3,42.0 14.7,42.0\" fill=\"#111111\"/></svg>",
   "<svg viewBox=\"0 0 64 64\" width=\"56\" height=\"56\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"2\" y=\"2\" width=\"60\" height=\"60\" fill=\"#ffffff\" stroke=\"#1c2733\" stroke-width=\"2\"/><polygon points=\"32.0,12.0 52.0,32.0 32.0,52.0 12.0,32.0\" fill=\"#111111\"/></svg>",
   "<svg viewBox=\"0 0 64 64\" width=\"56\" height=\"56\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"2\" y=\"2\" width=\"60\" height=\"60\" fill=\"#ffffff\" stroke=\"#1c2733\" stroke-width=\"2\"/><polygon points=\"32.0,12.0 51.0,25.8 43.8,48.2 20.2,48.2 13.0,25.8\" fill=\"#111111\"/></svg>",
   "<svg viewBox=\"0 0 64 64\" width=\"56\" height=\"56\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"2\" y=\"2\" width=\"60\" height=\"60\" fill=\"#ffffff\" stroke=\"#1c2733\" stroke-width=\"2\"/><polygon points=\"32.0,12.0 49.3,22.0 49.3,42.0 32.0,52.0 14.7,42.0 14.7,22.0\" fill=\"#111111\"/></svg>",
   "<svg viewBox=\"0 0 64 64\" width=\"56\" height=\"56\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"2\" y=\"2\" width=\"60\" height=\"60\" fill=\"#ffffff\" stroke=\"#1c2733\" stroke-width=\"2\"/><circle cx=\"32\" cy=\"32\" r=\"18\" fill=\"#111111\"/></svg>"
  ],
  "answer": 1,
  "explanation": "Jumlah sisi berkurang 1 setiap langkah: 8, 7, 6, 5, jadi berikutnya 4 sisi, yaitu segiempat."
 },
 {
  "id": 263,
  "section": "TIU",
  "q": "Perhatikan deretan gambar berikut. Gambar berikutnya adalah ...",
  "figure": "<div class=\"fig-seq\"><svg viewBox=\"0 0 64 64\" width=\"64\" height=\"64\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"2\" y=\"2\" width=\"60\" height=\"60\" fill=\"#ffffff\" stroke=\"#1c2733\" stroke-width=\"2\"/><circle cx=\"32\" cy=\"32\" r=\"18\" fill=\"#111111\"/></svg><svg viewBox=\"0 0 64 64\" width=\"64\" height=\"64\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"2\" y=\"2\" width=\"60\" height=\"60\" fill=\"#ffffff\" stroke=\"#1c2733\" stroke-width=\"2\"/><rect x=\"14\" y=\"14\" width=\"36\" height=\"36\" fill=\"#111111\"/></svg><svg viewBox=\"0 0 64 64\" width=\"64\" height=\"64\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"2\" y=\"2\" width=\"60\" height=\"60\" fill=\"#ffffff\" stroke=\"#1c2733\" stroke-width=\"2\"/><circle cx=\"32\" cy=\"32\" r=\"18\" fill=\"#111111\"/></svg><svg viewBox=\"0 0 64 64\" width=\"64\" height=\"64\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"2\" y=\"2\" width=\"60\" height=\"60\" fill=\"#ffffff\" stroke=\"#1c2733\" stroke-width=\"2\"/><rect x=\"14\" y=\"14\" width=\"36\" height=\"36\" fill=\"#111111\"/></svg><svg viewBox=\"0 0 64 64\" width=\"64\" height=\"64\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"2\" y=\"2\" width=\"60\" height=\"60\" fill=\"#ffffff\" stroke=\"#1c2733\" stroke-width=\"2\"/><circle cx=\"32\" cy=\"32\" r=\"18\" fill=\"#111111\"/></svg><svg viewBox=\"0 0 64 64\" width=\"64\" height=\"64\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"2\" y=\"2\" width=\"60\" height=\"60\" fill=\"#f1f5f9\" stroke=\"#1c2733\" stroke-width=\"2\"/><text x=\"32\" y=\"43\" text-anchor=\"middle\" font-size=\"30\" font-weight=\"bold\" fill=\"#0b3d91\">?</text></svg></div>",
  "options": [
   "Segitiga",
   "Lingkaran",
   "Persegi",
   "Belah ketupat",
   "Bintang"
  ],
  "optionFigures": [
   "<svg viewBox=\"0 0 64 64\" width=\"56\" height=\"56\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"2\" y=\"2\" width=\"60\" height=\"60\" fill=\"#ffffff\" stroke=\"#1c2733\" stroke-width=\"2\"/><polygon points=\"32.0,12.0 49.3,42.0 14.7,42.0\" fill=\"#111111\"/></svg>",
   "<svg viewBox=\"0 0 64 64\" width=\"56\" height=\"56\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"2\" y=\"2\" width=\"60\" height=\"60\" fill=\"#ffffff\" stroke=\"#1c2733\" stroke-width=\"2\"/><circle cx=\"32\" cy=\"32\" r=\"18\" fill=\"#111111\"/></svg>",
   "<svg viewBox=\"0 0 64 64\" width=\"56\" height=\"56\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"2\" y=\"2\" width=\"60\" height=\"60\" fill=\"#ffffff\" stroke=\"#1c2733\" stroke-width=\"2\"/><rect x=\"14\" y=\"14\" width=\"36\" height=\"36\" fill=\"#111111\"/></svg>",
   "<svg viewBox=\"0 0 64 64\" width=\"56\" height=\"56\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"2\" y=\"2\" width=\"60\" height=\"60\" fill=\"#ffffff\" stroke=\"#1c2733\" stroke-width=\"2\"/><polygon points=\"32.0,12.0 52.0,32.0 32.0,52.0 12.0,32.0\" fill=\"#111111\"/></svg>",
   "<svg viewBox=\"0 0 64 64\" width=\"56\" height=\"56\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"2\" y=\"2\" width=\"60\" height=\"60\" fill=\"#ffffff\" stroke=\"#1c2733\" stroke-width=\"2\"/><polygon points=\"32.0,11.0 37.0,25.1 52.0,25.5 40.1,34.6 44.3,49.0 32.0,40.5 19.7,49.0 23.9,34.6 12.0,25.5 27.0,25.1\" fill=\"#111111\"/></svg>"
  ],
  "answer": 2,
  "explanation": "Pola bergantian dua bentuk: lingkaran, persegi, lingkaran, persegi, lingkaran, jadi berikutnya persegi."
 },
 {
  "id": 264,
  "section": "TIU",
  "q": "Perhatikan deretan gambar berikut. Gambar berikutnya adalah ...",
  "figure": "<div class=\"fig-seq\"><svg viewBox=\"0 0 64 64\" width=\"64\" height=\"64\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"2\" y=\"2\" width=\"60\" height=\"60\" fill=\"#ffffff\" stroke=\"#1c2733\" stroke-width=\"2\"/><circle cx=\"20\" cy=\"20\" r=\"7\" fill=\"#111111\"/></svg><svg viewBox=\"0 0 64 64\" width=\"64\" height=\"64\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"2\" y=\"2\" width=\"60\" height=\"60\" fill=\"#ffffff\" stroke=\"#1c2733\" stroke-width=\"2\"/><circle cx=\"44\" cy=\"20\" r=\"7\" fill=\"#111111\"/></svg><svg viewBox=\"0 0 64 64\" width=\"64\" height=\"64\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"2\" y=\"2\" width=\"60\" height=\"60\" fill=\"#ffffff\" stroke=\"#1c2733\" stroke-width=\"2\"/><circle cx=\"44\" cy=\"44\" r=\"7\" fill=\"#111111\"/></svg><svg viewBox=\"0 0 64 64\" width=\"64\" height=\"64\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"2\" y=\"2\" width=\"60\" height=\"60\" fill=\"#ffffff\" stroke=\"#1c2733\" stroke-width=\"2\"/><circle cx=\"20\" cy=\"44\" r=\"7\" fill=\"#111111\"/></svg><svg viewBox=\"0 0 64 64\" width=\"64\" height=\"64\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"2\" y=\"2\" width=\"60\" height=\"60\" fill=\"#f1f5f9\" stroke=\"#1c2733\" stroke-width=\"2\"/><text x=\"32\" y=\"43\" text-anchor=\"middle\" font-size=\"30\" font-weight=\"bold\" fill=\"#0b3d91\">?</text></svg></div>",
  "options": [
   "Titik di sudut kiri atas",
   "Titik di sudut kanan atas",
   "Titik di sudut kanan bawah",
   "Titik di sudut kiri bawah",
   "Titik di tengah"
  ],
  "optionFigures": [
   "<svg viewBox=\"0 0 64 64\" width=\"56\" height=\"56\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"2\" y=\"2\" width=\"60\" height=\"60\" fill=\"#ffffff\" stroke=\"#1c2733\" stroke-width=\"2\"/><circle cx=\"20\" cy=\"20\" r=\"7\" fill=\"#111111\"/></svg>",
   "<svg viewBox=\"0 0 64 64\" width=\"56\" height=\"56\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"2\" y=\"2\" width=\"60\" height=\"60\" fill=\"#ffffff\" stroke=\"#1c2733\" stroke-width=\"2\"/><circle cx=\"44\" cy=\"20\" r=\"7\" fill=\"#111111\"/></svg>",
   "<svg viewBox=\"0 0 64 64\" width=\"56\" height=\"56\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"2\" y=\"2\" width=\"60\" height=\"60\" fill=\"#ffffff\" stroke=\"#1c2733\" stroke-width=\"2\"/><circle cx=\"44\" cy=\"44\" r=\"7\" fill=\"#111111\"/></svg>",
   "<svg viewBox=\"0 0 64 64\" width=\"56\" height=\"56\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"2\" y=\"2\" width=\"60\" height=\"60\" fill=\"#ffffff\" stroke=\"#1c2733\" stroke-width=\"2\"/><circle cx=\"20\" cy=\"44\" r=\"7\" fill=\"#111111\"/></svg>",
   "<svg viewBox=\"0 0 64 64\" width=\"56\" height=\"56\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"2\" y=\"2\" width=\"60\" height=\"60\" fill=\"#ffffff\" stroke=\"#1c2733\" stroke-width=\"2\"/><circle cx=\"32\" cy=\"32\" r=\"7\" fill=\"#111111\"/></svg>"
  ],
  "answer": 0,
  "explanation": "Titik bergerak searah jarum jam dari sudut ke sudut: kiri atas, kanan atas, kanan bawah, kiri bawah, jadi berikutnya kembali ke kiri atas."
 },
 {
  "id": 265,
  "section": "TIU",
  "q": "Perhatikan deretan gambar berikut. Gambar berikutnya adalah ...",
  "figure": "<div class=\"fig-seq\"><svg viewBox=\"0 0 64 64\" width=\"64\" height=\"64\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"2\" y=\"2\" width=\"60\" height=\"60\" fill=\"#ffffff\" stroke=\"#1c2733\" stroke-width=\"2\"/></svg><svg viewBox=\"0 0 64 64\" width=\"64\" height=\"64\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"2\" y=\"2\" width=\"60\" height=\"60\" fill=\"#ffffff\" stroke=\"#1c2733\" stroke-width=\"2\"/><rect x=\"4\" y=\"33\" width=\"56\" height=\"27\" fill=\"#111111\"/></svg><svg viewBox=\"0 0 64 64\" width=\"64\" height=\"64\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"2\" y=\"2\" width=\"60\" height=\"60\" fill=\"#ffffff\" stroke=\"#1c2733\" stroke-width=\"2\"/><rect x=\"4\" y=\"4\" width=\"56\" height=\"56\" fill=\"#111111\"/></svg><svg viewBox=\"0 0 64 64\" width=\"64\" height=\"64\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"2\" y=\"2\" width=\"60\" height=\"60\" fill=\"#ffffff\" stroke=\"#1c2733\" stroke-width=\"2\"/></svg><svg viewBox=\"0 0 64 64\" width=\"64\" height=\"64\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"2\" y=\"2\" width=\"60\" height=\"60\" fill=\"#ffffff\" stroke=\"#1c2733\" stroke-width=\"2\"/><rect x=\"4\" y=\"33\" width=\"56\" height=\"27\" fill=\"#111111\"/></svg><svg viewBox=\"0 0 64 64\" width=\"64\" height=\"64\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"2\" y=\"2\" width=\"60\" height=\"60\" fill=\"#f1f5f9\" stroke=\"#1c2733\" stroke-width=\"2\"/><text x=\"32\" y=\"43\" text-anchor=\"middle\" font-size=\"30\" font-weight=\"bold\" fill=\"#0b3d91\">?</text></svg></div>",
  "options": [
   "Kotak kosong",
   "Kotak terisi setengah",
   "Kotak terisi penuh",
   "Segitiga",
   "Lingkaran"
  ],
  "optionFigures": [
   "<svg viewBox=\"0 0 64 64\" width=\"56\" height=\"56\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"2\" y=\"2\" width=\"60\" height=\"60\" fill=\"#ffffff\" stroke=\"#1c2733\" stroke-width=\"2\"/></svg>",
   "<svg viewBox=\"0 0 64 64\" width=\"56\" height=\"56\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"2\" y=\"2\" width=\"60\" height=\"60\" fill=\"#ffffff\" stroke=\"#1c2733\" stroke-width=\"2\"/><rect x=\"4\" y=\"33\" width=\"56\" height=\"27\" fill=\"#111111\"/></svg>",
   "<svg viewBox=\"0 0 64 64\" width=\"56\" height=\"56\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"2\" y=\"2\" width=\"60\" height=\"60\" fill=\"#ffffff\" stroke=\"#1c2733\" stroke-width=\"2\"/><rect x=\"4\" y=\"4\" width=\"56\" height=\"56\" fill=\"#111111\"/></svg>",
   "<svg viewBox=\"0 0 64 64\" width=\"56\" height=\"56\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"2\" y=\"2\" width=\"60\" height=\"60\" fill=\"#ffffff\" stroke=\"#1c2733\" stroke-width=\"2\"/><polygon points=\"32.0,12.0 49.3,42.0 14.7,42.0\" fill=\"#111111\"/></svg>",
   "<svg viewBox=\"0 0 64 64\" width=\"56\" height=\"56\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"2\" y=\"2\" width=\"60\" height=\"60\" fill=\"#ffffff\" stroke=\"#1c2733\" stroke-width=\"2\"/><circle cx=\"32\" cy=\"32\" r=\"18\" fill=\"#111111\"/></svg>"
  ],
  "answer": 2,
  "explanation": "Pola isi kotak berulang 3 tahap: kosong, terisi setengah, terisi penuh, lalu kembali ke kosong, setengah, jadi berikutnya terisi penuh."
 },
 {
  "category": "Pelayanan Publik",
  "explanation": "Opsi 5 poin paling ideal: proaktif memberi kenyamanan bagi ibu dan bayi tanpa mengorbankan antrean warga lain. Melayani seperti biasa tanpa perhatian khusus (4 poin) masih adil tapi kurang peduli. Memintanya menunggu di luar ruangan (1 poin) mengabaikan kebutuhan warga.",
  "id": 266,
  "options": [
   "Memintanya pulang dan datang lagi saat bayinya sudah tenang.",
   "Memberinya tempat duduk prioritas dan kursi menyusui bila tersedia, lalu melayaninya pada giliran berikutnya yang memungkinkan tanpa melangkahi antrean secara tidak adil.",
   "Melayaninya paling akhir agar tidak mengganggu warga lain.",
   "Memintanya menunggu di luar ruangan sampai bayinya berhenti menangis.",
   "Melayaninya pada gilirannya seperti warga lain, tanpa fasilitas khusus."
  ],
  "points": [
   2,
   5,
   3,
   1,
   4
  ],
  "q": "Skenario: Seorang ibu datang mengurus akta kelahiran sambil menggendong bayi yang terus menangis. Antrean sedang panjang dan ia tampak kelelahan serta kesulitan mengisi formulir. Apa yang paling tepat Anda lakukan?",
  "section": "TKP"
 },
 {
  "category": "Pelayanan Publik",
  "explanation": "Opsi 5 poin paling ideal: transparan soal tarif resmi, bantu warga memahami, dan tindak lanjuti dugaan pungutan liar. Membiarkan begitu saja (1 poin) membiarkan pelanggaran.",
  "id": 267,
  "options": [
   "Membiarkannya karena Anda tidak mau ikut campur urusan loket lain.",
   "Menjelaskan tarif resmi sesuai aturan yang berlaku, menunjukkan papan tarifnya, membantu warga memahami rinciannya, dan melaporkan dugaan pungutan tambahan itu ke atasan.",
   "Menyuruh warga itu membayar saja agar urusannya cepat selesai.",
   "Menyuruh warga itu menanyakan langsung ke petugas yang memungut biaya itu tanpa pendampingan.",
   "Mengatakan tarif itu memang sudah berubah tanpa memeriksa aturan yang berlaku."
  ],
  "points": [
   1,
   5,
   2,
   4,
   3
  ],
  "q": "Skenario: Seorang warga mengeluh karena diminta membayar biaya yang menurutnya tidak tercantum di papan tarif resmi. Ia merasa dipungut biaya tambahan tanpa penjelasan. Apa yang paling tepat Anda lakukan?",
  "section": "TKP"
 },
 {
  "category": "Pelayanan Publik",
  "explanation": "Opsi 5 poin paling ideal: jangan biarkan warga pulang tanpa arah — arahkan ke instansi yang benar dan bantu menghubungkannya. Menolak tanpa arahan (1 poin) adalah pelayanan buruk.",
  "id": 268,
  "options": [
   "Menolaknya begitu saja karena surat itu bukan kewenangan kantor Anda.",
   "Menjelaskan dengan sopan bahwa surat itu diterbitkan instansi lain, memberitahu alamat dan syaratnya, serta membantu menghubungi instansi tersebut agar warga tidak bolak-balik.",
   "Menerima berkasnya lalu menyimpannya tanpa diproses.",
   "Memberitahu nama dan alamat instansi yang berwenang, serta syarat-syarat yang perlu dibawa.",
   "Memintanya datang minggu depan untuk menanyakan hal yang sama ke petugas lain."
  ],
  "points": [
   1,
   5,
   3,
   4,
   2
  ],
  "q": "Skenario: Seorang warga datang meminta surat keterangan yang ternyata bukan kewenangan kantor Anda, melainkan kewenangan instansi lain di kota yang berbeda. Ia sudah antre lama dan tampak kecewa. Apa yang paling tepat Anda lakukan?",
  "section": "TKP"
 },
 {
  "category": "Pelayanan Publik",
  "explanation": "Opsi 5 poin paling ideal: tenangkan kedua pihak, tegakkan antrean yang adil, dan selesaikan secara damai. Memihak salah satu tanpa memeriksa bukti (4 poin) mengikuti prinsip siapa cepat dia dapat, tetapi tanpa verifikasi. Membiarkan mereka bertengkar (1 poin) memperburuk keadaan.",
  "id": 269,
  "options": [
   "Memihak warga yang datang lebih dulu tanpa memeriksa bukti antreannya.",
   "Menenangkan keduanya, memeriksa nomor antrean masing-masing, menjelaskan urutan yang benar dengan sopan, dan melayani sesuai giliran.",
   "Membiarkan mereka bertengkar sampai salah satu mengalah.",
   "Meminta keduanya pulang dan datang lagi besok.",
   "Melayani warga yang berteriak paling keras agar keributan cepat reda."
  ],
  "points": [
   4,
   5,
   1,
   3,
   2
  ],
  "q": "Skenario: Dua warga hampir bertengkar di loket karena masing-masing merasa lebih dulu datang. Antrean menjadi macet dan warga lain mulai tidak nyaman. Apa yang paling tepat Anda lakukan?",
  "section": "TKP"
 },
 {
  "category": "Pelayanan Publik",
  "explanation": "Opsi 5 poin paling ideal: bantu warga mendapatkan dokumen yang jelas tanpa melanggar aturan — fotokopi buram tidak bisa diterima apa adanya. Menerima begitu saja (1 poin) melanggar prosedur.",
  "id": 270,
  "options": [
   "Menerima fotokopi buram itu apa adanya demi mempercepat pelayanan.",
   "Menjelaskan bahwa dokumen harus terbaca jelas, membantunya memfotokopi ulang atau memindai dokumen aslinya di kantor, dan memeriksa kembali sebelum memprosesnya.",
   "Menolak berkasnya dan menyuruhnya pulang tanpa solusi.",
   "Memintanya datang lagi besok dengan dokumen baru.",
   "Memproses berkasnya sambil menebak-nebak isi dokumen yang tidak terbaca."
  ],
  "points": [
   1,
   5,
   2,
   4,
   3
  ],
  "q": "Skenario: Seorang warga menyerahkan fotokopi dokumen yang sangat buram dan sebagian tulisannya tidak terbaca. Dokumen itu wajib dilampirkan untuk pengurusan suratnya. Apa yang paling tepat Anda lakukan?",
  "section": "TKP"
 },
 {
  "category": "Pelayanan Publik",
  "explanation": "Opsi 5 poin paling ideal: layani kebutuhan mendesak sebentar, lalu jelaskan jam layanan dengan sopan. Menolak mentah-mentah (1 poin) tidak melayani, sedangkan melayani penuh di jam istirahat tanpa batas merugikan petugas lain.",
  "id": 271,
  "options": [
   "Menolaknya karena sudah jam istirahat dan loket sedang kosong.",
   "Melayaninya sebentar untuk kebutuhan yang mendesak, lalu menjelaskan jam layanan resmi dengan sopan agar lain kali ia datang pada jam pelayanan.",
   "Melayaninya seperti biasa seolah-olah bukan jam istirahat.",
   "Menyuruhnya menunggu sampai jam istirahat selesai tanpa penjelasan.",
   "Mengabaikannya dan tetap beristirahat."
  ],
  "points": [
   2,
   5,
   4,
   3,
   1
  ],
  "q": "Skenario: Seorang warga datang tepat di jam istirahat ketika loket sedang kosong. Ia hanya butuh mengambil surat yang sudah selesai dan sudah ditandatangani, tetapi ia harus segera kembali bekerja. Apa yang paling tepat Anda lakukan?",
  "section": "TKP"
 },
 {
  "category": "Pelayanan Publik",
  "explanation": "Opsi 5 poin paling ideal: akui kesalahan, perbaiki segera, dan periksa ulang agar tidak terulang. Menyalahkan warga (1 poin) merusak kepercayaan.",
  "id": 272,
  "options": [
   "Menyalahkan warga karena tidak memeriksa suratnya saat diterima.",
   "Meminta maaf atas kesalahan tersebut, segera memperbaiki ejaan nama itu, memeriksa ulang seluruh isi surat sebelum diserahkan kembali, dan memastikan warga tidak perlu mengulang proses dari awal.",
   "Memintanya mengurus ulang dari awal dengan berkas baru.",
   "Menyuruhnya kembali besok karena perbaikan membutuhkan waktu lama.",
   "Membiarkan kesalahan itu karena menurut Anda hanya salah ejaan kecil."
  ],
  "points": [
   1,
   5,
   3,
   4,
   2
  ],
  "q": "Skenario: Seorang warga kembali ke loket karena nama di suratnya salah eja satu huruf. Kesalahan itu berasal dari petugas yang menginput data. Warga itu membutuhkan surat tersebut hari itu juga. Apa yang paling tepat Anda lakukan?",
  "section": "TKP"
 },
 {
  "category": "Pelayanan Publik",
  "explanation": "Opsi 5 poin paling ideal: usulkan layanan kunjungan resmi dan koordinasikan — bukan melayani diam-diam di luar prosedur. Menolak tanpa solusi (1 poin) tidak melayani.",
  "id": 273,
  "options": [
   "Menolaknya karena layanan hanya bisa diurus di kantor.",
   "Mengusulkan kepada atasan agar ada layanan kunjungan rumah untuk warga yang sakit, mencatat kebutuhannya, dan mengoordinasikan jadwal kunjungan sesuai prosedur yang berlaku.",
   "Melayaninya di rumah secara diam-diam tanpa mencatat atau melapor.",
   "Menyuruh keluarganya menguruskan ke kantor tanpa penjelasan lebih lanjut.",
   "Memintanya menunggu sampai ia sembuh dan bisa datang sendiri."
  ],
  "points": [
   1,
   5,
   3,
   4,
   2
  ],
  "q": "Skenario: Keluarga seorang warga yang sedang sakit keras meminta agar dokumen warga itu diurus dengan layanan kunjungan ke rumah, karena ia tidak bisa datang ke kantor sama sekali. Layanan seperti itu belum pernah Anda lakukan. Apa yang paling tepat Anda lakukan?",
  "section": "TKP"
 },
 {
  "category": "Integritas & Anti-Gratifikasi",
  "explanation": "Opsi 5 poin paling ideal: tolak intervensi keluarga, layani sesuai antrean dan prosedur, dan laporkan tekanan itu. Mendahulukan kerabat atasan (1 poin) adalah nepotisme.",
  "id": 274,
  "options": [
   "Mendahulukan berkas kerabat atasan itu karena perintah pimpinan.",
   "Menolak mendahulukan berkas tersebut, menjelaskan bahwa semua warga dilayani sesuai antrean dan prosedur, dan melaporkan tekanan itu melalui kanal yang berlaku.",
   "Mendahulukannya diam-diam agar atasan tidak tersinggung.",
   "Menunda berkas warga lain agar kerabat atasan tidak terlihat didahulukan.",
   "Mengatakan Anda akan mendahulukannya, tetapi sebenarnya tetap melayani sesuai antrean."
  ],
  "points": [
   1,
   5,
   3,
   2,
   4
  ],
  "q": "Skenario: Atasan Anda meminta Anda mendahulukan pengurusan berkas kerabatnya, padahal antrean warga lain sudah panjang dan berkas kerabat itu baru saja masuk. Apa yang paling tepat Anda lakukan?",
  "section": "TKP"
 },
 {
  "category": "Integritas & Anti-Gratifikasi",
  "explanation": "Opsi 5 poin paling ideal: tolak calo, layani warga secara resmi dan gratis sesuai aturan, dan laporkan praktik itu. Membiarkan calo (1 poin) merugikan warga.",
  "id": 275,
  "options": [
   "Membiarkannya karena warga itu memang mau membayar agar cepat.",
   "Menolak praktik calo tersebut, menjelaskan kepada warga bahwa layanan itu gratis dan sesuai prosedur, melayani berkasnya secara resmi, dan melaporkan rekan itu melalui kanal yang berlaku.",
   "Menegur rekan itu secara pribadi tetapi membiarkan warga tetap membayar.",
   "Menyuruh warga itu bernegosiasi langsung dengan rekan tersebut.",
   "Mengabaikan karena Anda tidak mau bermusuhan dengan rekan."
  ],
  "points": [
   1,
   5,
   4,
   3,
   2
  ],
  "q": "Skenario: Anda mengetahui seorang rekan menawarkan jasa percepatan pengurusan dokumen kepada warga dengan bayaran tertentu, padahal layanan itu gratis. Warga itu hampir menyetujuinya karena tidak tahu prosedurnya. Apa yang paling tepat Anda lakukan?",
  "section": "TKP"
 },
 {
  "category": "Integritas & Anti-Gratifikasi",
  "explanation": "Opsi 5 poin paling ideal: laporkan pemalsuan dengan bukti, jangan ikut menutupi. Ikut menandatangani (1 poin) adalah pelanggaran berat.",
  "id": 276,
  "options": [
   "Ikut menandatangani agar pekerjaan cepat selesai.",
   "Menolak terlibat, mendokumentasikan temuan itu, dan melaporkannya kepada atasan atau kanal pengaduan yang berlaku sesuai prosedur.",
   "Menegur rekan itu tetapi tidak melaporkannya agar ia tidak mendapat sanksi.",
   "Membiarkannya karena berkas itu bukan tanggung jawab Anda.",
   "Menyuruh rekan itu menghapus tanda tangan palsu itu sendiri tanpa melapor."
  ],
  "points": [
   1,
   5,
   4,
   2,
   3
  ],
  "q": "Skenario: Anda menemukan seorang rekan memalsukan tanda tangan warga pada berkas permohonan agar berkas itu terlihat sudah lengkap. Ia meminta Anda merahasiakannya. Apa yang paling tepat Anda lakukan?",
  "section": "TKP"
 },
 {
  "category": "Integritas & Anti-Gratifikasi",
  "explanation": "Opsi 5 poin paling ideal: tolak fasilitas dari pihak berkepentingan karena menimbulkan benturan kepentingan. Menerima dengan alasan hemat anggaran (3 poin) tetap melanggar, apalagi menerima diam-diam.",
  "id": 277,
  "options": [
   "Menerimanya karena menghemat anggaran perjalanan dinas kantor.",
   "Menolak tawaran itu dengan sopan, menjelaskan bahwa menerima fasilitas dari pihak yang sedang bekerja sama dengan instansi menimbulkan benturan kepentingan, dan melaporkannya sesuai aturan.",
   "Menerimanya tetapi tidak memberi tahu siapa pun.",
   "Menerimanya dan berjanji akan tetap objektif dalam bekerja sama dengan perusahaan itu.",
   "Menolak tawaran itu dengan sopan, tetapi tidak melaporkannya kepada siapa pun."
  ],
  "points": [
   3,
   5,
   2,
   1,
   4
  ],
  "q": "Skenario: Sebuah perusahaan yang sedang mengerjakan proyek bersama instansi Anda menawarkan perjalanan dinas gratis beserta akomodasi mewah untuk Anda dan tim. Tawaran itu datang tepat sebelum evaluasi proyek dilakukan. Apa yang paling tepat Anda lakukan?",
  "section": "TKP"
 },
 {
  "category": "Integritas & Anti-Gratifikasi",
  "explanation": "Opsi 5 poin paling ideal: jangan menandatangani sesuatu yang tidak Anda saksikan kebenarannya. Menandatangani demi atasan (1 poin) adalah pemalsuan dokumen.",
  "id": 278,
  "options": [
   "Menandatanganinya karena atasan yang meminta dan ia yang bertanggung jawab.",
   "Menolak menandatanganinya, menjelaskan bahwa Anda tidak hadir dalam kegiatan itu, dan meminta berita acara dibuat sesuai fakta yang sebenarnya.",
   "Menandatanganinya tetapi menambahkan catatan kecil di sudut dokumen.",
   "Menandatanganinya setelah meminta atasan menulis surat perintah terlebih dahulu.",
   "Menolak, tetapi tidak menjelaskan alasannya kepada siapa pun."
  ],
  "points": [
   1,
   5,
   3,
   2,
   4
  ],
  "q": "Skenario: Atasan Anda meminta Anda menandatangani berita acara sebuah kegiatan yang sebenarnya tidak Anda hadiri. Ia berkata tanda tangan Anda hanya formalitas dan semua orang sudah setuju. Apa yang paling tepat Anda lakukan?",
  "section": "TKP"
 },
 {
  "category": "Integritas & Anti-Gratifikasi",
  "explanation": "Opsi 5 poin paling ideal: tolak dengan sopan dan jelaskan aturan gratifikasi — hadiah dari warga yang sedang dilayani tidak boleh diterima. Menerima sambil berjanji tetap objektif (1 poin) adalah pembenaran yang paling berbahaya karena gratifikasi tetap memengaruhi penilaian.",
  "id": 279,
  "options": [
   "Menerimanya karena nilainya kecil dan hanya tanda terima kasih.",
   "Menolak dengan sopan, menjelaskan bahwa petugas tidak boleh menerima hadiah dari warga yang sedang dilayani, dan mencatatnya sesuai aturan gratifikasi bila diperlukan.",
   "Menerimanya lalu membagikannya kepada rekan agar tidak terlihat menerima sendiri.",
   "Menolaknya tetapi memintanya menitipkan makanan itu di ruang tunggu untuk semua petugas.",
   "Menerimanya, tetapi berjanji tidak akan memengaruhi pelayanan Anda."
  ],
  "points": [
   2,
   5,
   3,
   4,
   1
  ],
  "q": "Skenario: Setelah berkasnya selesai diurus, seorang warga memberikan sekotak makanan mahal kepada Anda sebagai tanda terima kasih. Ia berkata tidak ada maksud apa-apa dan memaksa Anda menerimanya. Apa yang paling tepat Anda lakukan?",
  "section": "TKP"
 },
 {
  "category": "Integritas & Anti-Gratifikasi",
  "explanation": "Opsi 5 poin paling ideal: jujur, perbaiki kesalahan, dan laporkan — menutupi kesalahan bersama justru memperbesar masalah. Menolak ikut menutupi tetapi tidak melapor (4 poin) masih baik namun kurang transparan. Ikut menutupi (1 poin) adalah pelanggaran.",
  "id": 280,
  "options": [
   "Ikut menutupi kesalahan itu karena Anda terlibat dan takut mendapat sanksi.",
   "Mengakui kesalahan tersebut, memperbaikinya sesuai prosedur, dan melaporkannya kepada atasan agar tidak terulang.",
   "Menutupi kesalahan itu sementara sampai ada kesempatan memperbaikinya diam-diam.",
   "Menyalahkan rekan yang mengajak Anda menutupi agar Anda terlihat tidak bersalah.",
   "Menolak ikut menutupi, tetapi tidak melaporkannya dan memperbaiki kesalahan itu sendiri."
  ],
  "points": [
   1,
   5,
   3,
   4,
   2
  ],
  "q": "Skenario: Seorang rekan mengajak Anda menutupi kesalahan kecil dalam laporan keuangan kegiatan kantor yang kalian kerjakan bersama. Ia berkata tidak ada yang akan memeriksa dan kesalahan itu tidak merugikan siapa pun. Apa yang paling tepat Anda lakukan?",
  "section": "TKP"
 },
 {
  "category": "Kerjasama Tim & Komunikasi",
  "explanation": "Opsi 5 poin paling ideal: tetap tenang, sampaikan gagasan dengan data, dan ajak diskusi terbuka — meremehkan bukan alasan untuk menyerang balik. Membalas dengan nada tinggi (1 poin) merusak tim.",
  "id": 281,
  "options": [
   "Membalasnya dengan nada tinggi agar ia tahu Anda tidak bisa diremehkan.",
   "Menyampaikan gagasan Anda dengan tenang dan didukung data, mendengarkan keberatannya, dan mengajaknya berdiskusi mencari solusi terbaik untuk tim.",
   "Diam dan menarik gagasan Anda agar tidak dipermalukan lagi.",
   "Mengadukan sikapnya ke atasan tanpa berbicara dengannya terlebih dahulu.",
   "Menyindirnya kembali di depan tim agar ia merasakan hal yang sama."
  ],
  "points": [
   1,
   5,
   3,
   4,
   2
  ],
  "q": "Skenario: Dalam rapat tim, seorang rekan senior meremehkan gagasan Anda di depan semua orang dan berkata gagasan itu tidak akan berhasil. Anda yakin gagasan itu didukung data yang kuat. Apa yang paling tepat Anda lakukan?",
  "section": "TKP"
 },
 {
  "category": "Kerjasama Tim & Komunikasi",
  "explanation": "Opsi 5 poin paling ideal: koordinasi aktif, cari solusi bersama, dan evaluasi tanpa menyalahkan. Menyalahkan divisi lain (1 poin) memperburuk kerjasama.",
  "id": 282,
  "options": [
   "Menyalahkan divisi yang tidak mengirim data di depan atasan.",
   "Menghubungi divisi tersebut untuk mengetahui kendalanya, menyusun rencana bersama agar data segera tersedia, dan mengevaluasi alur kerja agar tidak terulang.",
   "Menunggu data itu datang tanpa melakukan apa pun.",
   "Mengerjakan laporan dengan data yang tersedia sambil mencatat bagian yang masih menunggu data dan memberi tahu atasan.",
   "Meminta atasan memberi sanksi kepada divisi tersebut."
  ],
  "points": [
   1,
   5,
   3,
   4,
   2
  ],
  "q": "Skenario: Tim Anda gagal mencapai target karena divisi lain tidak mengirim data yang dibutuhkan tepat waktu. Atasan meminta penjelasan dan tim Anda yang disalahkan. Apa yang paling tepat Anda lakukan?",
  "section": "TKP"
 },
 {
  "category": "Kerjasama Tim & Komunikasi",
  "explanation": "Opsi 5 poin paling ideal: klarifikasi secara profesional dan tenang, minta pengakuan yang adil tanpa menuduh. Menuduh di depan umum (1 poin) merusak hubungan kerja.",
  "id": 283,
  "options": [
   "Menuduhnya mengambil pujian Anda di depan atasan.",
   "Mengajaknya bicara secara pribadi, menjelaskan bagian mana yang Anda kerjakan, dan menyepakati agar ke depan kontribusi masing-masing disampaikan dengan jelas.",
   "Membiarkannya karena Anda tidak mau terlihat mencari pujian.",
   "Menceritakan hal itu kepada semua rekan agar mereka tahu yang sebenarnya.",
   "Membalas dengan mengambil pujian atas pekerjaan rekan lain."
  ],
  "points": [
   1,
   5,
   4,
   3,
   2
  ],
  "q": "Skenario: Atasan memuji seorang rekan atas keberhasilan sebuah laporan, padahal sebagian besar laporan itu Anda yang menyusun. Rekan itu tidak menyebutkan kontribusi Anda sama sekali. Apa yang paling tepat Anda lakukan?",
  "section": "TKP"
 },
 {
  "category": "Kerjasama Tim & Komunikasi",
  "explanation": "Opsi 5 poin paling ideal: jelaskan istilah dengan sabar dan buat panduan singkat — anggota baru yang paham akan bekerja lebih baik. Membiarkannya bingung (1 poin) merugikan tim.",
  "id": 284,
  "options": [
   "Membiarkannya bingung karena ia seharusnya bertanya sendiri.",
   "Menjelaskan istilah-istilah itu dengan sabar, membuat panduan singkat yang bisa ia baca, dan memastikan ia memahami sebelum mengerjakan tugasnya.",
   "Mengerjakan tugasnya sendiri agar tidak perlu menjelaskan.",
   "Melaporkan ke atasan bahwa anggota baru itu tidak siap bekerja.",
   "Menggunakan istilah itu terus-menerus agar ia cepat terbiasa."
  ],
  "points": [
   2,
   5,
   4,
   3,
   1
  ],
  "q": "Skenario: Seorang anggota tim yang baru dipindahkan dari divisi lain tidak memahami istilah teknis yang biasa dipakai tim Anda. Ia sering salah paham saat menerima instruksi. Apa yang paling tepat Anda lakukan?",
  "section": "TKP"
 },
 {
  "category": "Kerjasama Tim & Komunikasi",
  "explanation": "Opsi 5 poin paling ideal: fasilitasi rapat dengan agenda dan batas waktu yang jelas agar keputusan tercapai. Membiarkan rapat berlarut (1 poin) membuang waktu tim.",
  "id": 285,
  "options": [
   "Membiarkan rapat berlanjut sampai semua orang lelah dan pulang sendiri.",
   "Mengusulkan agar rapat dibatasi waktunya, merangkum poin-poin yang sudah disepakati, dan meminta peserta memutuskan hal-hal yang masih tertunda secara tertulis.",
   "Keluar dari rapat karena merasa tidak ada gunanya.",
   "Memaksakan keputusan Anda agar rapat cepat selesai.",
   "Diam saja dan berharap rapat segera berakhir."
  ],
  "points": [
   2,
   5,
   1,
   4,
   3
  ],
  "q": "Skenario: Rapat tim Anda sudah berjalan dua jam tanpa keputusan. Peserta mulai mengulang argumen yang sama dan beberapa orang terlihat tidak fokus. Padahal keputusan itu dibutuhkan hari ini. Apa yang paling tepat Anda lakukan?",
  "section": "TKP"
 },
 {
  "category": "Kerjasama Tim & Komunikasi",
  "explanation": "Opsi 5 poin paling ideal: empati, bantu sementara, dan koordinasikan pembagian tugas agar tim tetap berjalan. Menceritakan masalah pribadinya kepada rekan lain (1 poin) melanggar privasi dan tidak peduli pada rekan.",
  "id": 286,
  "options": [
   "Mengabaikannya karena itu masalah pribadinya, bukan urusan tim.",
   "Menanyakan kabarnya dengan empati, membantu sebagian tugas mendesaknya untuk sementara, dan mengoordinasikan pembagian tugas dengan tim agar pekerjaannya tetap berjalan.",
   "Mengambil alih seluruh pekerjaannya tanpa memberi tahu siapa pun.",
   "Menanyakan kabarnya dan menawarkan bantuan, tetapi tetap mengingatkan tentang deadline yang harus dipenuhi tim.",
   "Menceritakan masalah pribadinya kepada rekan lain."
  ],
  "points": [
   2,
   5,
   3,
   4,
   1
  ],
  "q": "Skenario: Seorang rekan kerja sedang berduka karena anggota keluarganya meninggal. Ia tidak masuk kerja selama beberapa hari dan tugasnya yang mendesak tertunda. Apa yang paling tepat Anda lakukan?",
  "section": "TKP"
 },
 {
  "category": "Adaptasi & Teknologi Baru",
  "explanation": "Opsi 5 poin paling ideal: belajar aktif, ikut pelatihan, dan minta pendampingan — tanda tangan elektronik adalah kewajiban baru yang harus dikuasai. Meminta rekan menandatangani atas nama Anda (1 poin) adalah pemalsuan dan menghambat layanan.",
  "id": 287,
  "options": [
   "Menolak memakai tanda tangan elektronik dan tetap meminta tanda tangan basah.",
   "Mempelajari cara memakai tanda tangan elektronik dengan sungguh-sungguh, mengikuti pelatihan yang disediakan, dan meminta pendampingan rekan sampai Anda mahir.",
   "Memakai tanda tangan elektronik hanya saat ada yang mengawasi.",
   "Meminta rekan menandatangani secara elektronik atas nama Anda.",
   "Mempelajari sistem baru itu secara mandiri sedikit demi sedikit, tetapi tidak mengikuti pelatihan yang disediakan."
  ],
  "points": [
   2,
   5,
   3,
   1,
   4
  ],
  "q": "Skenario: Kantor Anda beralih ke tanda tangan elektronik untuk semua surat resmi. Anda belum terbiasa dan sering gagal saat mencoba menandatangani dokumen digital. Semua surat kini wajib memakai tanda tangan elektronik. Apa yang paling tepat Anda lakukan?",
  "section": "TKP"
 },
 {
  "category": "Adaptasi & Teknologi Baru",
  "explanation": "Opsi 5 poin paling ideal: bantu warga memakai aplikasi sekaligus sampaikan masukannya ke pengembang agar layanan membaik. Mengabaikan keluhan warga (1 poin) tidak melayani.",
  "id": 288,
  "options": [
   "Memaksa warga memakai aplikasi tanpa membantu karena itu sudah kebijakan.",
   "Membimbing warga memakai aplikasi dengan sabar, mencatat kesulitan yang ia alami, dan menyampaikan masukan itu ke tim pengembang agar aplikasinya diperbaiki.",
   "Membimbing warga memakai aplikasi, tetapi tetap menyediakan layanan manual sebagai alternatif sementara.",
   "Mengisi aplikasi itu untuk warga tanpa menjelaskan apa-apa.",
   "Mengabaikan keluhan warga karena aplikasi itu bukan tanggung jawab Anda."
  ],
  "points": [
   3,
   5,
   4,
   2,
   1
  ],
  "q": "Skenario: Banyak warga mengeluh aplikasi antrean baru sulit dipakai dan meminta kembali ke antrean manual. Atasan meminta Anda membantu warga beralih ke aplikasi itu. Apa yang paling tepat Anda lakukan?",
  "section": "TKP"
 },
 {
  "category": "Adaptasi & Teknologi Baru",
  "explanation": "Opsi 5 poin paling ideal: patuhi aturan keamanan dan edukasi rekan — kata sandi yang kuat melindungi data warga. Membagikan kata sandi kepada rekan (1 poin) membahayakan data.",
  "id": 289,
  "options": [
   "Mengabaikan aturan itu karena mengganti kata sandi merepotkan.",
   "Mematuhi aturan penggantian kata sandi berkala, menggunakan kata sandi yang kuat, dan mengingatkan rekan tentang pentingnya menjaga keamanan akun.",
   "Mengganti kata sandi hanya saat sistem memaksa, selebihnya memakai kata sandi lama.",
   "Membagikan kata sandi Anda kepada rekan agar ia bisa membantu pekerjaan Anda.",
   "Menulis kata sandi di kertas dan menempelkannya di meja agar tidak lupa."
  ],
  "points": [
   2,
   5,
   4,
   1,
   3
  ],
  "q": "Skenario: Kantor Anda menerapkan aturan keamanan baru: kata sandi akun kerja harus diganti secara berkala dan tidak boleh dibagikan. Beberapa rekan malas menggantinya dan menganggap aturan itu berlebihan. Apa yang paling tepat Anda lakukan?",
  "section": "TKP"
 },
 {
  "category": "Adaptasi & Teknologi Baru",
  "explanation": "Opsi 5 poin paling ideal: atur komunikasi dan laporkan progres secara berkala agar pekerjaan tetap terpantau. Menunda pekerjaan sampai kembali ke kantor (1 poin) membuat tim tidak tahu progres Anda.",
  "id": 290,
  "options": [
   "Bekerja tanpa memberi kabar karena Anda merasa tetap produktif di rumah.",
   "Menjaga komunikasi dengan tim, menyusun daftar tugas harian, menyelesaikan pekerjaan sesuai target, dan melaporkan progres secara berkala kepada atasan.",
   "Menunda pekerjaan sampai kembali ke kantor.",
   "Mengerjakan hanya tugas yang mudah dan menunda yang sulit.",
   "Meminta penyesuaian tenggat hanya untuk tugas yang memang tidak bisa dikerjakan dari rumah, sambil menyelesaikan sisanya."
  ],
  "points": [
   2,
   5,
   1,
   3,
   4
  ],
  "q": "Skenario: Karena cuaca buruk dan banjir, kantor Anda menetapkan kerja dari rumah selama beberapa hari. Anda harus tetap menyelesaikan tugas dan berkoordinasi dengan tim dari rumah. Apa yang paling tepat Anda lakukan?",
  "section": "TKP"
 },
 {
  "category": "Adaptasi & Teknologi Baru",
  "explanation": "Opsi 5 poin paling ideal: pelajari prosedur pencadangan dan ikuti aturannya, tanyakan ke tim IT bila ragu. Mengunggah data tanpa memeriksa aturan keamanannya (1 poin) berisiko kehilangan data.",
  "id": 291,
  "options": [
   "Mengabaikan perpindahan itu dan tetap menyimpan data di komputer pribadi Anda.",
   "Mempelajari cara kerja penyimpanan cloud dan prosedur pencadangannya, mengikuti aturan yang ditetapkan, dan bertanya kepada tim IT bila ada yang meragukan.",
   "Menyimpan semua data di flashdisk pribadi agar tetap aman menurut Anda.",
   "Menggunakan penyimpanan cloud setelah mempelajari fitur keamanannya, tetapi belum memahami prosedur pencadangannya.",
   "Menolak memakai penyimpanan cloud karena Anda tidak mempercayainya."
  ],
  "points": [
   2,
   5,
   3,
   1,
   4
  ],
  "q": "Skenario: Data kantor Anda dipindahkan ke penyimpanan cloud agar bisa diakses dari mana saja. Anda khawatir data penting hilang atau bocor, dan Anda belum memahami cara kerjanya. Apa yang paling tepat Anda lakukan?",
  "section": "TKP"
 },
 {
  "category": "Kerja Mandiri & Orientasi Hasil",
  "explanation": "Opsi 5 poin paling ideal: cari referensi, susun kerangka, dan konsultasikan — tugas tanpa contoh diselesaikan dengan belajar dan bertanya. Menunggu contoh (1 poin) pasif.",
  "id": 292,
  "options": [
   "Menunggu sampai ada yang memberikan contoh laporan itu.",
   "Mencari referensi dari laporan sejenis, menyusun kerangka laporan, mengerjakannya secara sistematis, dan mengonsultasikan hasilnya kepada atasan sebelum diserahkan.",
   "Menyerahkan laporan seadanya tanpa memeriksa isinya.",
   "Menyusun laporan itu sendiri dengan bantuan referensi, lalu meminta rekan meninjau hasilnya sebelum diserahkan.",
   "Menolak tugas itu karena tidak ada contohnya."
  ],
  "points": [
   1,
   5,
   3,
   4,
   2
  ],
  "q": "Skenario: Anda ditugaskan menyusun laporan tahunan sendirian tanpa ada contoh laporan tahun sebelumnya. Laporan itu harus selesai minggu depan dan akan dipresentasikan kepada pimpinan. Apa yang paling tepat Anda lakukan?",
  "section": "TKP"
 },
 {
  "category": "Kerja Mandiri & Orientasi Hasil",
  "explanation": "Opsi 5 poin paling ideal: evaluasi capaian, fokus pada sisa target yang paling berdampak, dan laporkan progresnya. Mengubah angka capaian (1 poin) adalah kecurangan.",
  "id": 293,
  "options": [
   "Mengubah angka capaian agar terlihat sudah mencapai target.",
   "Mengevaluasi capaian yang sudah ada, memfokuskan sisa waktu pada target yang paling berdampak, dan melaporkan progres serta kendalanya secara jujur kepada atasan.",
   "Menyerah dan membiarkan target tidak tercapai.",
   "Mengerjakan semua sisa target secara asal agar terlihat selesai.",
   "Meminta bantuan tim lain secara terbuka dan membagi tugas agar target tercapai."
  ],
  "points": [
   1,
   5,
   3,
   2,
   4
  ],
  "q": "Skenario: Target bulanan tim Anda hampir tercapai, tetapi ada kendala di akhir bulan yang membuat beberapa target terancam tidak selesai. Atasan meminta laporan capaian minggu ini. Apa yang paling tepat Anda lakukan?",
  "section": "TKP"
 },
 {
  "category": "Kerja Mandiri & Orientasi Hasil",
  "explanation": "Opsi 5 poin paling ideal: akui, perbaiki segera, dan informasikan pihak terkait — kesalahan yang diakui dan diperbaiki menunjukkan tanggung jawab. Menyembunyikan (1 poin) merusak kepercayaan.",
  "id": 294,
  "options": [
   "Menyembunyikan kesalahan itu dan berharap tidak ada yang menyadarinya.",
   "Mengakui kesalahan itu, segera memperbaikinya, dan menginformasikan kepada atasan serta pihak yang terdampak agar tidak menimbulkan masalah lebih besar.",
   "Menyalahkan rekan yang memberikan data kepada Anda.",
   "Memperbaikinya diam-diam tanpa memberi tahu siapa pun.",
   "Membiarkan kesalahan itu karena sudah terlanjur diserahkan."
  ],
  "points": [
   1,
   5,
   2,
   4,
   3
  ],
  "q": "Skenario: Setelah menyerahkan laporan kepada atasan, Anda menyadari ada kesalahan angka di dalam laporan itu. Laporan tersebut sudah diteruskan ke pimpinan yang lebih tinggi. Apa yang paling tepat Anda lakukan?",
  "section": "TKP"
 },
 {
  "category": "Kerja Mandiri & Orientasi Hasil",
  "explanation": "Opsi 5 poin paling ideal: sesuaikan prioritas dengan kebijakan baru, komunikasikan perubahan itu, dan tetap jaga kualitas. Mengabaikan kebijakan baru (1 poin) tidak patuh.",
  "id": 295,
  "options": [
   "Mengabaikan kebijakan baru itu dan tetap mengerjakan tugas seperti semula.",
   "Menyesuaikan prioritas dan rencana kerja dengan kebijakan baru, mengomunikasikan perubahan itu kepada pihak terkait, dan memastikan hasil kerja tetap berkualitas.",
   "Mengerjakan tugas lama dan tugas baru secara bersamaan tanpa prioritas.",
   "Menyelesaikan tugas lama yang sudah setengah jalan terlebih dahulu, lalu beralih ke tugas baru sesuai kebijakan, dan mengomunikasikan jadwal itu kepada atasan.",
   "Menunda semua pekerjaan sampai ada penjelasan lebih lanjut."
  ],
  "points": [
   1,
   5,
   3,
   4,
   2
  ],
  "q": "Skenario: Di tengah pengerjaan tugas Anda, terbit kebijakan baru yang mengubah prioritas pekerjaan Anda. Tugas yang sudah setengah jalan kini tidak lagi menjadi prioritas utama. Apa yang paling tepat Anda lakukan?",
  "section": "TKP"
 },
 {
  "category": "Kerja Mandiri & Orientasi Hasil",
  "explanation": "Opsi 5 poin paling ideal: atur beban kerja, komunikasikan ke atasan, dan jaga kualitas — lembur terus tanpa batas menurunkan kinerja. Meminta rekan mengerjakan tugas lembur Anda tanpa memberi tahu atasan (1 poin) mengorbankan kesehatan dan kualitas.",
  "id": 296,
  "options": [
   "Terus lembur setiap hari tanpa mengatakan apa pun, meskipun kualitas kerja Anda menurun.",
   "Mengatur beban kerja berdasarkan prioritas, menyampaikan kondisi Anda kepada atasan, dan mengusulkan pembagian tugas yang lebih seimbang agar kualitas kerja terjaga.",
   "Menolak semua tugas lembur tanpa penjelasan.",
   "Menolak tugas lembur yang tidak mendesak dengan penjelasan, sambil tetap menyelesaikan tugas lembur yang benar-benar penting.",
   "Meminta rekan mengerjakan tugas lembur Anda tanpa memberi tahu atasan."
  ],
  "points": [
   2,
   5,
   4,
   3,
   1
  ],
  "q": "Skenario: Anda sudah lembur hampir setiap hari selama dua minggu karena beban kerja yang menumpuk. Anda mulai kelelahan dan kualitas pekerjaan Anda menurun. Apa yang paling tepat Anda lakukan?",
  "section": "TKP"
 },
 {
  "category": "Profesionalisme & Disiplin",
  "explanation": "Opsi 5 poin paling ideal: jangan ikut menutupi, jawab jujur bila ditanya dan sampaikan melalui jalur yang benar. Membantu memalsukan catatan kehadiran (1 poin) melanggar disiplin.",
  "id": 297,
  "options": [
   "Ikut menutupinya agar rekan tidak mendapat teguran.",
   "Menolak menutupi, menjawab dengan jujur bila ditanya atasan, dan menyarankan rekan itu memperbaiki kedisiplinannya.",
   "Membantu rekan itu memalsukan catatan kehadirannya.",
   "Mengabaikan karena itu bukan urusan Anda.",
   "Menolak menutupi, tetapi tidak melaporkannya dan menyarankan rekan itu memperbaiki kedisiplinannya."
  ],
  "points": [
   2,
   5,
   1,
   3,
   4
  ],
  "q": "Skenario: Seorang rekan kerja sering pulang lebih awal dari jam kerja dan meminta Anda menutupinya bila atasan menanyakan. Ia berkata semua orang juga melakukannya sesekali. Apa yang paling tepat Anda lakukan?",
  "section": "TKP"
 },
 {
  "category": "Profesionalisme & Disiplin",
  "explanation": "Opsi 5 poin paling ideal: akui, tarik atau klarifikasi segera, dan perbaiki — kesalahan pengiriman yang diakui cepat lebih mudah diperbaiki. Membiarkan (1 poin) tidak bertanggung jawab.",
  "id": 298,
  "options": [
   "Membiarkannya dan berharap penerima tidak membacanya.",
   "Mengakui kesalahan itu, segera menghubungi penerima yang salah untuk mengklarifikasi, mengirimkan email yang benar ke alamat yang tepat, dan memberitahu atasan bila diperlukan.",
   "Menyalahkan sistem email yang membingungkan.",
   "Mengakui kesalahan itu dan segera mengirimkan klarifikasi, tetapi tidak memberitahu atasan karena data sudah berhasil ditarik kembali.",
   "Meminta penerima yang salah untuk tidak membaca email itu tanpa penjelasan."
  ],
  "points": [
   1,
   5,
   3,
   4,
   2
  ],
  "q": "Skenario: Anda tidak sengaja mengirim email berisi data penting ke alamat yang salah. Email itu ditujukan kepada atasan Anda, tetapi terkirim ke alamat warga. Apa yang paling tepat Anda lakukan?",
  "section": "TKP"
 },
 {
  "category": "Profesionalisme & Disiplin",
  "explanation": "Opsi 5 poin paling ideal: terima teguran, perbaiki penampilan, dan patuhi aturan — penampilan adalah bagian dari profesionalisme ASN. Mengabaikan teguran (1 poin) tidak disiplin.",
  "id": 299,
  "options": [
   "Mengabaikan teguran itu karena menurut Anda penampilan tidak memengaruhi kinerja.",
   "Menerima teguran itu dengan lapang, memperbaiki penampilan Anda sesuai aturan, dan memastikan ke depannya Anda selalu mematuhi ketentuan berpakaian.",
   "Membela diri dan mengatakan aturan berpakaian itu sudah ketinggalan zaman.",
   "Memperbaiki penampilan sesuai aturan dan meminta penjelasan tentang ketentuan berpakaian agar tidak terulang.",
   "Menyalahkan rekan yang melaporkan penampilan Anda."
  ],
  "points": [
   1,
   5,
   3,
   4,
   2
  ],
  "q": "Skenario: Atasan menegur penampilan Anda karena tidak memakai seragam dinas sesuai aturan pada hari yang ditentukan. Anda merasa seragam itu tidak nyaman dipakai seharian. Apa yang paling tepat Anda lakukan?",
  "section": "TKP"
 },
 {
  "category": "Profesionalisme & Disiplin",
  "explanation": "Opsi 5 poin paling ideal: tolak dengan sopan dan tetap bekerja — jam kerja adalah untuk tugas kantor. Mengajak rekan lain ikut keluar (1 poin) melanggar disiplin.",
  "id": 300,
  "options": [
   "Ikut keluar kantor karena Anda tidak enak menolak ajakan rekan.",
   "Menolak ajakan itu dengan sopan, menjelaskan bahwa Anda masih ada pekerjaan, dan tetap menyelesaikan tugas Anda pada jam kerja.",
   "Menolak ajakan itu, tetapi menawarkan membantu keperluan rekan itu setelah jam kerja.",
   "Meminta rekan itu menutupi kepergian Anda dari atasan.",
   "Mengajak rekan lain ikut keluar agar Anda tidak sendirian."
  ],
  "points": [
   2,
   5,
   4,
   3,
   1
  ],
  "q": "Skenario: Di tengah jam kerja, seorang rekan mengajak Anda keluar kantor untuk mengurus keperluan pribadinya. Pekerjaan Anda sedang menumpuk dan ada warga yang menunggu dilayani. Apa yang paling tepat Anda lakukan?",
  "section": "TKP"
 },
 {
  "category": "Profesionalisme & Disiplin",
  "explanation": "Opsi 5 poin paling ideal: komunikasikan ke atasan, atur prioritas, dan bantu sebisanya tanpa mengorbankan tugas pokok. Meminta rekan lain menggantikan Anda sebagai panitia tanpa memberi tahu panitia (1 poin) membuat pekerjaan utama terbengkalai.",
  "id": 301,
  "options": [
   "Menerima semua tugas panitia itu tanpa memberi tahu atasan tentang beban pekerjaan Anda.",
   "Mengomunikasikan kepada atasan tentang beban pekerjaan utama Anda, mengatur prioritas bersama, dan membantu kepanitiaan sebisanya tanpa mengorbankan tugas pokok.",
   "Menolak menjadi panitia tanpa penjelasan apa pun.",
   "Menolak menjadi panitia dengan penjelasan yang sopan tentang beban pekerjaan utama Anda.",
   "Meminta rekan lain menggantikan Anda sebagai panitia tanpa memberi tahu panitia."
  ],
  "points": [
   2,
   5,
   4,
   3,
   1
  ],
  "q": "Skenario: Anda diminta menjadi panitia sebuah acara besar kantor di luar tugas pokok Anda. Persiapan acara itu menyita banyak waktu, sementara pekerjaan utama Anda juga sedang menumpuk. Apa yang paling tepat Anda lakukan?",
  "section": "TKP"
 },
 {
  "category": "Sosial Budaya & Toleransi",
  "explanation": "Opsi 5 poin paling ideal: dengarkan keluhannya, layani secara setara, dan jelaskan prosedurnya — perasaan tidak adil harus ditangani dengan transparan. Menyuruhnya mengurus di daerah asalnya saja (1 poin) diskriminatif.",
  "id": 302,
  "options": [
   "Mengabaikan keluhannya karena menurut Anda ia terlalu sensitif.",
   "Mendengarkan keluhannya dengan tenang, menjelaskan prosedur pelayanan yang berlaku untuk semua warga, dan memastikan ia dilayani dengan setara seperti warga lainnya.",
   "Memintanya menyesuaikan diri dengan kebiasaan mayoritas di daerah itu.",
   "Melayaninya dengan setara seperti warga lain dan memastikan ia memahami prosedur yang berlaku.",
   "Menyuruhnya mengurus di daerah asalnya saja."
  ],
  "points": [
   2,
   5,
   3,
   4,
   1
  ],
  "q": "Skenario: Seorang warga dari suku yang berbeda merasa diperlakukan tidak adil saat mengurus dokumen di kantor Anda. Ia berkata petugas lebih ramah kepada warga dari suku mayoritas. Apa yang paling tepat Anda lakukan?",
  "section": "TKP"
 },
 {
  "category": "Sosial Budaya & Toleransi",
  "explanation": "Opsi 5 poin paling ideal: minta penjelasan dengan sopan dan usulkan penggunaan bahasa Indonesia dalam rapat resmi. Memprotes dengan kasar (1 poin) tidak sopan.",
  "id": 303,
  "options": [
   "Memprotesnya dengan kasar agar ia berhenti memakai bahasa daerah.",
   "Meminta penjelasan dengan sopan bila ada yang tidak Anda pahami, dan mengusulkan agar dalam rapat resmi digunakan bahasa Indonesia supaya semua peserta memahami.",
   "Diam saja dan berpura-pura memahami pembicaraan itu.",
   "Meminta penjelasan setelah rapat kepada rekan yang memahami, agar Anda tidak ketinggalan pembahasan.",
   "Meminta rekan itu tidak lagi memakai bahasa daerahnya di kantor."
  ],
  "points": [
   1,
   5,
   4,
   3,
   2
  ],
  "q": "Skenario: Dalam sebuah rapat, beberapa rekan berbicara menggunakan bahasa daerah yang tidak Anda pahami. Anda ketinggalan pembahasan penting karena tidak mengerti isi pembicaraan mereka. Apa yang paling tepat Anda lakukan?",
  "section": "TKP"
 },
 {
  "category": "Sosial Budaya & Toleransi",
  "explanation": "Opsi 5 poin paling ideal: hormati hari besar adat, sesuaikan jadwal, dan libatkan tokoh setempat. Membatalkan acara itu begitu saja tanpa berdiskusi (1 poin) tidak peka budaya.",
  "id": 304,
  "options": [
   "Memaksakan acara itu tetap berjalan sesuai jadwal karena sudah direncanakan.",
   "Menghormati hari besar adat itu, menyesuaikan jadwal acara agar tidak bertabrakan, dan berkoordinasi dengan tokoh setempat agar acara tetap berjalan dengan baik.",
   "Membatalkan acara itu begitu saja tanpa berdiskusi.",
   "Menyesuaikan jadwal acara dan mengundang tokoh adat untuk membuka acara sebagai bentuk penghormatan.",
   "Meminta warga setempat menyesuaikan diri dengan jadwal acara Anda."
  ],
  "points": [
   2,
   5,
   1,
   4,
   3
  ],
  "q": "Skenario: Acara kantor yang sudah Anda rencanakan ternyata bertabrakan dengan hari besar adat setempat yang sangat dihormati masyarakat. Warga meminta acara itu dijadwalkan ulang. Apa yang paling tepat Anda lakukan?",
  "section": "TKP"
 },
 {
  "category": "Sosial Budaya & Toleransi",
  "explanation": "Opsi 5 poin paling ideal: layani sesuai prosedur tanpa terpengaruh tekanan tokoh — pelayanan harus adil untuk semua. Menolak melayani warga itu sama sekali (1 poin) melanggar keadilan.",
  "id": 305,
  "options": [
   "Menuruti permintaan tokoh itu agar tidak terjadi masalah.",
   "Melayani warga tersebut sesuai prosedur dan antrean yang berlaku, menjelaskan aturannya dengan sopan kepada tokoh itu, dan tidak terpengaruh oleh tekanan siapa pun.",
   "Menolak melayani warga itu sama sekali.",
   "Menjelaskan kepada tokoh itu bahwa semua warga dilayani sesuai antrean, dan menawarkan bantuan agar warganya tidak menunggu terlalu lama.",
   "Meminta atasan memutuskan tanpa Anda ikut terlibat."
  ],
  "points": [
   2,
   5,
   1,
   4,
   3
  ],
  "q": "Skenario: Seorang tokoh masyarakat datang mendampingi warganya dan meminta agar warga itu didahulukan dari antrean. Ia berkata tokoh masyarakat harus dihormati dan warga lain pasti memahami. Apa yang paling tepat Anda lakukan?",
  "section": "TKP"
 },
 {
  "category": "Sosial Budaya & Toleransi",
  "explanation": "Opsi 5 poin paling ideal: hentikan candaan yang menyinggung, jaga etika, dan minta maaf bila perlu. Mengabaikan ketidaknyamanan rekan itu (1 poin) tidak menghormati rekan.",
  "id": 306,
  "options": [
   "Terus bercanda karena menurut Anda itu hanya candaan biasa.",
   "Menghentikan candaan itu, menjaga etika berbicara di kantor, dan meminta maaf bila candaan itu membuat rekan tidak nyaman.",
   "Membela candaan itu dan mengatakan rekan itu terlalu sensitif.",
   "Menghentikan candaan yang menyinggung itu dan mengajak rekan lain menjaga etika berbicara di kantor.",
   "Mengabaikan ketidaknyamanan rekan itu karena bukan urusan Anda."
  ],
  "points": [
   2,
   5,
   3,
   4,
   1
  ],
  "q": "Skenario: Seorang rekan kerja yang lebih muda dan berbeda latar belakang dengan Anda tampak tidak nyaman dengan candaan di kantor yang menurutnya menyinggung. Beberapa rekan lain tertawa dan menganggapnya biasa saja. Apa yang paling tepat Anda lakukan?",
  "section": "TKP"
 },
 {
  "category": "Inisiatif & Belajar",
  "explanation": "Opsi 5 poin paling ideal: analisis penyebab antrean dan usulkan perbaikan konkret ke atasan. Membiarkan antrean panjang (1 poin) tidak peduli pada pelayanan.",
  "id": 307,
  "options": [
   "Membiarkan antrean itu karena sudah biasa terjadi setiap hari.",
   "Menganalisis penyebab antrean panjang itu, mengusulkan penjadwalan ulang atau penambahan loket pada jam sibuk kepada atasan, dan memantau hasilnya.",
   "Menyalahkan warga yang datang beramai-ramai pada jam yang sama.",
   "Mengusulkan pembagian jam layanan berdasarkan jenis keperluan agar antrean Senin pagi terurai.",
   "Menutup loket lebih awal agar antrean tidak semakin panjang."
  ],
  "points": [
   1,
   5,
   3,
   4,
   2
  ],
  "q": "Skenario: Anda menyadari antrean warga selalu sangat panjang setiap Senin pagi, sementara loket lain relatif sepi. Warga sering menunggu berjam-jam dan banyak yang mengeluh. Apa yang paling tepat Anda lakukan?",
  "section": "TKP"
 },
 {
  "category": "Inisiatif & Belajar",
  "explanation": "Opsi 5 poin paling ideal: susun panduan, ajukan, dan uji coba — inisiatif yang terukur dan bermanfaat bagi warga. Menyimpan ide sendiri (1 poin) tidak berkontribusi.",
  "id": 308,
  "options": [
   "Menyimpan ide itu untuk diri sendiri karena takut ditolak.",
   "Menyusun panduan layanan sederhana itu, mengajukannya kepada atasan, dan menguji cobanya dalam skala kecil untuk melihat apakah warga terbantu.",
   "Langsung mencetak dan membagikan panduan itu tanpa persetujuan atasan.",
   "Menyusun draf panduan itu dan meminta masukan rekan sebelum mengajukannya kepada atasan.",
   "Meminta rekan lain yang membuat panduan itu untuk Anda."
  ],
  "points": [
   1,
   5,
   4,
   3,
   2
  ],
  "q": "Skenario: Anda berpikir membuat panduan layanan sederhana akan sangat membantu warga yang sering bingung dengan syarat-syarat dokumen. Panduan itu belum pernah ada di kantor Anda. Apa yang paling tepat Anda lakukan?",
  "section": "TKP"
 },
 {
  "category": "Inisiatif & Belajar",
  "explanation": "Opsi 5 poin paling ideal: minta bimbingan secara aktif, belajar, dan terapkan — belajar dari rekan adalah cara cepat berkembang. Malu bertanya (1 poin) menghambat belajar.",
  "id": 309,
  "options": [
   "Malu bertanya karena takut dianggap tidak mampu.",
   "Meminta bimbingan rekan itu secara aktif, mempelajari keahliannya dengan sungguh-sungguh, dan menerapkannya dalam pekerjaan Anda.",
   "Menunggu sampai rekan itu menawarkan bimbingan dengan sendirinya.",
   "Mempelajari keahlian itu sendiri tanpa bertanya, meskipun membutuhkan waktu lama.",
   "Meminta atasan memindahkan rekan itu ke tim Anda agar Anda bisa belajar darinya."
  ],
  "points": [
   1,
   5,
   3,
   4,
   2
  ],
  "q": "Skenario: Seorang rekan kerja Anda sangat ahli dalam menyusun presentasi dan laporan yang rapi. Anda ingin mempelajari keahlian itu karena pekerjaan Anda semakin sering membutuhkan presentasi. Apa yang paling tepat Anda lakukan?",
  "section": "TKP"
 },
 {
  "category": "Inisiatif & Belajar",
  "explanation": "Opsi 5 poin paling ideal: pelajari peraturan baru, sosialisasikan ke tim, dan sesuaikan cara kerja — ASN harus selalu memperbarui pengetahuannya. Mengabaikan (1 poin) berisiko melayani dengan aturan lama.",
  "id": 310,
  "options": [
   "Mengabaikan peraturan baru itu karena Anda sudah terbiasa dengan aturan lama.",
   "Mempelajari peraturan baru itu dengan saksama, mensosialisasikannya kepada rekan kerja, dan menyesuaikan cara kerja serta SOP agar sesuai dengan peraturan tersebut.",
   "Mempelajari peraturan itu sendiri tanpa memberi tahu rekan lain.",
   "Menunggu sampai ada yang menegur Anda karena memakai aturan lama.",
   "Menerapkan peraturan baru itu tanpa memahami isinya."
  ],
  "points": [
   1,
   5,
   4,
   3,
   2
  ],
  "q": "Skenario: Terbit peraturan baru yang mengubah syarat dan prosedur layanan yang Anda tangani sehari-hari. Banyak rekan belum mengetahuinya dan masih memakai aturan lama. Apa yang paling tepat Anda lakukan?",
  "section": "TKP"
 }
];
