import Image from "next/image";
import Navbar from "@/component/navbar";
import Footer from "@/component/footer";
import { useState, useEffect } from "react";
import axios from "axios";
import PassPopUp from "@/component/passPopUp";
import FlipCard from "@/component/flipCard";

const wisataList = [
  {
    img: "/Lapangan Randu Alas.png",
    nama: "Randu Alas",
    deskripsi: "Bayangkan Anda menaiki mobil VW Safari berwarna-warni dan berkeliling sepanjang desa Tuksongo. Anda akan melewati beberapa lapangan datar yang dikelilingi oleh pohon cemara, dan pohon randu raksasa berusia ratusan tahun berdiri tegak di ujungnya. Latar belakangnya adalah bukit Menoreh yang hijau, langit biru, dan stupa Candi Borobudur yang samar-samar di kejauhan. Itu seperti gambar kartu pos yang sempurna. Lapangan Randu Alas, lokasi foto paling populer di Desa Tuksongo, berada di sini.\n\nDalam paket Short Trip, Anda mendapatkan momen eksklusif kurang lebih 30 menit di lapangan ini—cukup untuk sesi foto solo, dokumentasi keluarga, atau video reels. Ingin lebih? Silakan tambah paket Medium atau Sunrise untuk pengalaman lengkap dan instagramable.\n\n📞 Sudah siap tampil maksimal di Instagram-mu?\nPesan paket Randu Alas sekarang dan abadikan momen tak terlupakan di Desa Tuksongo!"
  },
  {
    img: "/Pati Aren.png",
    nama: "Pati Aren",
    deskripsi: "Pernahkah Anda mendengar tentang Pati Aren? Meskipun masih terdengar asing, bahan alami ini ternyata menjadi kunci kelezatan kuliner khas Desa Tuksongo seperti Mie Lethek dan Ongol-Ongol. Pati aren adalah tepung yang dihasilkan dari nira pohon aren (Arenga pinnata), yaitu cairan manis yang keluar dari bunga jantan pohon aren. Pati ini memiliki tekstur lembut dan warna putih kecoklatan, serta banyak digunakan sebagai bahan dasar makanan tradisional di Indonesia.\n\nBerbeda dengan tepung sagu atau tapioka, pati aren memiliki aroma khas dan rasa yang lebih alami. Cara pembuatannya dilakukan dengan cara mengendapkan nira yang telah dimasak, kemudian endapan tersebut dikeringkan hingga menjadi tepung\n\nDi sini, Anda bisa melihat dari dekat bagaimana aren diolah menjadi pati, belajar teknik tradisionalnya, hingga mencoba hasil olahan langsung dari sumbernya. Tidak hanya itu, setiap wisatawan juga bisa membawa pulang tepung pati aren hasil produksi sendiri sebagai buah tangan khas yang otentik. Wisata ini tidak hanya edukatif, tapi juga menjadi bentuk dukungan terhadap UMKM lokal dan pelestarian budaya keluarga yang masih bertahan hingga kini."
  },
  {
    img: "/Balkondes.png",
    nama: "Balkondes Tuksongo",
    deskripsi: "Balkondes Tuksongo tidak hanya menawarkan penginapan bernuansa pedesaan, tetapi juga pengalaman kuliner yang khas dan autentik. Di sini, pengunjung dapat menikmati beragam hidangan tradisional yang diolah langsung oleh warga, menggunakan bahan-bahan lokal tanpa tambahan bahan kimia.\n\nSalah satu sajian andalan adalah mie lethek, mie khas berbahan dasar pati aren yang diolah secara tradisional tanpa pewarna. Pengunjung bisa melihat langsung proses pembuatannya, mulai dari pencetakan mie hingga penjemuran di bawah sinar matahari. Selain mie lethek, tersedia juga menu-menu rumahan seperti sayur lodeh, tempe bacem, ongol-ongol, hingga kopi seduh dari biji lokal.\n\nSemua hidangan disajikan dengan cara sederhana namun penuh cita rasa, menghadirkan suasana makan yang akrab dan menyatu dengan alam sekitar. Bagi wisatawan yang ingin merasakan sisi lain dari Borobudur, pengalaman kuliner di Balkondes Tuksongo bisa menjadi momen yang menyenangkan dan berkesan."
  },
  {
    img: "/Watu Wadek.png",
    nama: "Watu Wadek",
    deskripsi: "Bayangkan berdiri di atas bongkahan batu purba, menyaksikan hamparan hijau persawahan dan siluet Gunung Menoreh, Merapi, Merbabu, bahkan Sumbing menari di cakrawala pagi. Itulah Watu Wadek, sebuah wisata alam magis di Desa Tuksongo yang mengundang semua indera untuk terhubung langsung dengan alam.\n\nWatu Wadek dapat menjadi latar yang sempurna untuk foto kenangan. Berdiri di atas batu dengan latar belakang alam yang luas: lembah, perbukitan, dan langit luas kombinasi visual yang ideal untuk media sosial maupun kenang-kenangan pribadi. Yuk, jadikan momen hiking di Tuksongo bagian dari kisah perjalananmu!"
  },
  {
    img: "/Mong Track.png",
    nama: "Mong Track",
    deskripsi: "Bayangkan menikmati senja sambil menatap cakrawala Magelang dari atas bukit—udara sejuk mengiringi napas panjang, hati ikut damai. Inilah sensasi yang tersaji dalam Paket Wisata Alam Mong Track, rute trekking alami yang mengundang Anda menjelajahi sisi autentik alam Tuksongo.\n\nMulai dari persawahan hijau yang lembut, Anda akan berjalan di jalur setapak dengan pemandangan pegunungan Menoreh yang menakjubkan. Anda akan menuju Punthuk Mongkrong, salah satu bukit tertinggi dengan sekitar 624 mdpl, yang terkenal dengan pemandangan matahari terbit dan terbenam.\n\nTrekking ini melewati hutan jati, sungai kecil yang menyejukkan, dan gardu pandang di puncak bukit. Ini adalah tempat yang sempurna untuk mengambil foto bagus atau sekadar melihat pemandangan Magelang dari atas.\n\nPerlintasan Mong Track memiliki fasilitas penjelajahan representatif. Ada banyak hal yang dapat dilakukan. Hiking atau trekking mungkin pilihan yang menarik, tergantung pada minat dan kebutuhan wisatawan. Wisata Mong Track di Desa Tuksongo cocok untuk pendaki pemula dan cocok untuk siswa sekolah. Ini juga bagus untuk kegiatan pramuka."
  },
  {
    img: "/Galeri Jathilan.png",
    nama: "Galeri Jathilan",
    deskripsi: "Salah satu kesenian tradisional yang sangat menarik di masyarakat Jawa adalah Jathilan, atau Jaran Kepang. Ini terinspirasi dari cerita rakyat Jawa seperti Jaran Kepang, reog, dan monyet Jawa. Hal yang membuat Jathilan unik adalah penggunaan elemen sakral yang kental, termasuk musik Jawa yang khas dan tembang yang mendayu-dayu yang dinyanyikan oleh sinden.\n\nJathilan Tuksongo adalah akulturasi budaya yang kaya akan nilai spiritual itu adalah cara masyarakat mengucapkan terima kasih kepada alam dan roh. Seolah-olah mereka digerakkan oleh kekuatan gaib, gerakan para penari menceritakan kisah perang kerajaan, pesan moral, dan keyakinan animisme. Rasa misteri yang kental diperkuat oleh potensi interaksi dengan roh (ndadi).\n\nDatanglah ke Tuksongo, dan biarkan budaya tradisional yang penuh mistis ini membuka mata dan hati Anda.\nJathilan bukan hanya seni—ia adalah karya hidup, ritus, dan warisan."
  },
  {
    img: "/Mie Lethek.png",
    nama: "Mie Lethek",
    deskripsi: "Mie lethek adalah mie tradisional khas daerah Yogyakarta dan Magelang, yang terkenal karena warna kusamnya—itulah sebabnya disebut lethek, yang dalam bahasa Jawa berarti “kotor” atau “kusam”. Tapi jangan tertipu oleh namanya! Warna kusam ini justru menjadi tanda bahwa mie ini dibuat secara alami tanpa bahan kimia atau pewarna buatan.\n\nIngin merasakan sensasi kuliner yang benar-benar berbeda dan penuh makna? Datanglah ke Desa Tuksongo, Borobudur, dan ikuti Paket Wisata Kuliner Mie Lethek—perjalanan rasa yang dimulai dari dapur tradisional hingga ke mangkuk Anda sendiri. Di sini, Anda tak hanya mencicipi mie lethek yang kenyal dan gurih, tetapi juga diajak menyusuri proses pembuatannya langsung dari tangan para perajin lokal. Mulai dari pengolahan pati aren alami, pencetakan mie tanpa bahan kimia, hingga proses penjemuran yang unik di bawah sinar matahari. Anda juga berkesempatan mengikuti sesi memasak, meracik mie lethek dengan bumbu khas, dan menikmati hasil buatan sendiri dalam suasana pedesaan yang hangat dan autentik. Selain memanjakan lidah, pengalaman ini akan membuka mata Anda terhadap kekayaan tradisi kuliner lokal yang nyaris terlupakan. Tak lupa, Anda bisa membawa pulang mie lethek kering sebagai oleh-oleh khas Tuksongo. Ini bukan sekadar wisata kuliner—ini adalah petualangan rasa, budaya, dan kebaikan lokal dalam satu paket."
  },
  {
    img: "/Griya Lebah.png",
    nama: "Griya Lebah",
    deskripsi: "Griya Lebah Tuksongo, sebuah \"sel surga\" kecil. Ini adalah tempat lebah Apis cerana mengambil nektar bunga kaliandra untuk menghasilkan madu manis alami yang kaya khasiat dan memiliki ciri khas yang unik.\n\nLangkah Anda merasakan desiran lebah di Griya Lebah Tuksongo adalah awal dari petualangan manis. Dipandu peternak berpengalaman, Anda menyelami rahasia lebah Apis cerana: memetik sarang, memanen madu, lalu mencicipi tetesan manis yang menenangkan madu kaliandra asli Borobudur. Di setiap tetesnya terkandung cerita alam dan perjuangan warga lokal. Bawa pulang pengalaman dan madu sehat—jadi bagian dari penggerak ekonomi dan pelestari tradisi desa.\n\nAyo kunjungi Griya Lebah Tuksongo! Rasakan sensasi menyentuh sarang lebah, pelajari tentang kehidupan koloni lebah, dan belajar bagaimana membuat madu asli. Cicip madu kaliandra yang unik dengan tangan Anda sendiri, dan bawa pulang pengalaman yang menyehatkan dan hasilnya."
  },
  {
    img: "/Ukir Bambu.png",
    nama: "Ukir Bambu",
    deskripsi: "Pernahkah Anda membayangkan bahwa sebatang bambu bisa berubah menjadi karya seni bernilai tinggi? Di Desa Tuksongo, Borobudur, keajaiban itu nyata. Lewat Paket Wisata Edukasi Ukir Bambu, Anda diajak menyusuri jejak tradisi yang telah diwariskan secara turun-temurun sejak 1989 oleh tangan-tangan terampil warga desa. \n\nBambu adalah bahan baku yang sangat filosofis, bukan hanya tanaman. Setiap guratan ukir adalah ekspresi budaya lokal dan nilai estetika. Pengrajin Tuksongo mengajarkan teknik mengukir secara manual dari mulai memilih bambu, membuat desain, hingga membuat produk siap pakai.\n\nDesa Tuksongo memiliki potensi besar dalam kerajinan ukir bambu, wisatawan dapat melihat prosesnya dan bahkan ikut membuatnya. Wisata edukasi ini adalah hal yang harus dilakukan di Desa Tuksongo.\n\nYuk, Rencanakan Kunjunganmu Sekarang!\nBersama ukiran bambu, Anda tak hanya menciptakan karya, tapi juga membawa pulang cerita. Ayo datang ke Tuksongo dan jadi bagian dari perjalanan seni yang hidup di tengah desa."
  },
  {
    img: "/Produksi Tahu.png",
    nama: "Produk Tahu",
    deskripsi: "Tahu adalah makanan yang dikenal di seluruh dunia. Beberapa negara di seluruh dunia mengenal tofu, begitu pula orang Indonesia yang sering menggunakan tahu sebagai sayur dan lauk dengan nasi. Namun, tidak banyak orang yang mengetahui proses pembuatan tahu, terutama yang dilakukan secara tradisional. Resep dan trik untuk membuat tahu diturunkan dari generasi ke generasi.\n\nUsaha tahu di Puton sudah ada sejak nenek moyang, dan kini dijalankan dengan penuh cinta oleh Bapak Sidiq. Setiap langkah produksi mulai dari merendam kacang, menggiling sari kedelai hingga proses koagulasi yang tak hanya menawarkan kelezatan, tapi juga kisah keluarga yang berlanjut dari generasi ke generasi .\n\nAnda akan merasakan masuk ke dapur UMKM tahu kuno di Dusun Puton di Desa Tuksongo, Borobudur. Di sana, warisan leluhur dihidupkan kembali oleh tangan-tangan mahir Bapak Sidiq, cucu dari pendiri usaha tahu pertama di dusun ini.\n\nRasakan cara unik memproduksi tahu pedesaan, segarkan pengetahuan kuliner Anda, dan ciptakan kenangan lama yang hangat.\nMari gelar pengalaman seru bersama keluarga, sekolah, atau teman dalam Paket Edukasi Produksi Tahu Tuksongo!"
  },
  {
    img: "/Topeng Kawedar.png",
    nama: "Galeri Topeng Kawedar",
    deskripsi: "Di Desa Tuksongo, sebuah paket wisata tak sekadar menawarkan tontonan—melainkan pengalaman meresapi seni, sejarah, dan spiritualitas dalam satu panggung budaya. Namanya: Wisata Budaya Topeng Kawedar.\n\nBermula dari tahun 1930, oleh tangan-tangan warga desa yang tergabung dalam Syubbanul Muslimin, Topeng Kawedar lahir sebagai ekspresi artistik dan dakwah di saat silat dan kebudayaan lokal sering dibatasi. Kini, seni ini hidup lebih dari sekadar pertunjukan ia menjadi maskot budaya lokal yang kaya makna.\n\nTopeng Kawedar merupakan paguyuban warga Desa Tuksongo yang menggeluti kesenian topeng ireng. Istilah \"ndayakan\", yang berasal dari kata Jawa \"Sak nDayak\", yang berarti banyak orang yang mengikuti, juga digunakan untuk menyebut gaya topeng ireng.\n\nNikmati atraksi yang menguatkan kesadaran spiritual, menghibur tanpa kehilangan esensi, dan menyambungkanmu pada tanah, budaya, serta nilai-nilai luhur masyarakat Desa Tuksongo.\nKunjungi, rasakan, dan bawa pulang pengalaman yang jauh lebih dari sekadar pertunjukan—ini adalah jiwa sebuah desa dalam gerak, musik, dan topeng yang hidup."
  },
  {
    img: "/Galeri Artmojo.png",
    nama: "Galeri Artmojo",
    deskripsi: "Orang-orang di Desa Tuksongo melakukan banyak hal yang baik. Bapak Atmojo adalah seorang seniman yang terkenal dari banyak orang. Semenjak tahun 1990, pelukis ini telah mendirikan galeri seni yang menghasilkan berbagai karya yang telah menembus pasar nasional dan internasional.\n\nWisatawan mendapatkan kesan yang luar biasa dari pengalaman luar biasa berinteraksi dengan seniman berkelas dunia. Untuk tamu, ada kain kanvas, kuas, cat air, stand lukis, dan makanan ringan. Untuk mendapatkan pengalaman dan melukis di bawah bimbingan seniman internasional yang tinggal di Borobudur, kunjungi Atmojo Painting Studio!\n\nAnda akan mendapatkan kuas, kanvas, cat, dan waktu eksklusif untuk menciptakan karya sendiri. Biarkan setiap objek yang Anda lukis menjadi cerminan pengalaman magis di Borobudur, dengan sapuan kuas yang menciptakan kenangan tak terlupakan.\n\nRencanakan kunjungan Anda ke Galeri Atmojo. Gabungkan dengan paket lainnya—seperti ukir bambu, pati aren, atau topeng kawedar—untuk pengalaman wisata budaya yang lengkap dan berlapis."
  },
  {
    img: "/Situs Dipan.png",
    nama: "Situs Dipan",
    deskripsi: "Bayangkan Anda berdiri di tengah pedesaan yang tenang, hanya suara burung dan hembusan angin yang menemani. Di hadapan Anda, tersisa tumpukan bata kuno dan batu berukir yang telah menyaksikan perjalanan waktu berabad-abad lamanya. Inilah Situs Dipan, sebuah cagar budaya yang menyimpan kisah masa lalu peradaban Jawa Kuno.\n\nDahulu, tempat ini dipercaya sebagai bagian dari pemukiman atau kompleks keagamaan yang berdiri megah di era yang sama dengan Candi Borobudur. Fragmen arca Mahakala, antefik, dan stupa yang ditemukan di sini menjadi saksi bisu betapa pentingnya Situs Dipan pada masanya. Kini, Situs Dipan hadir sebagai destinasi wisata sejarah yang tenang dan penuh makna. Di sini, Anda bisa merasakan atmosfer masa lalu yang autentik, menyusuri jalan setapak sederhana, sekaligus belajar tentang proses pelestarian cagar budaya.\n\nJangan lupa membawa kamera, karena setiap sudut Situs Dipan memiliki pesona tersendiri. Setelah puas berkeliling, Anda dapat menikmati kuliner khas desa di sekitar lokasi sambil mendengar cerita-cerita menarik dari warga lokal. Situs Dipan bukan sekadar tempat bersejarah—ia adalah jendela menuju masa lalu yang akan membuat Anda semakin jatuh cinta pada warisan budaya Borobudur."
  }
];

export default function Wisata() {
  const paketNames = ["Edukasi", "Alam", "Budaya", "Kuliner", "Fotografi", "Spiritual"];
  const [index, setIndex] = useState(0);
  const [paketGrouped, setPaketGrouped] = useState({});
  const [currentIndex, setCurrentIndex] = useState(0);
  const handlePrev = () => {
    setIndex((prev) => (prev === 0 ? wisataList.length - 1 : prev - 1));
  };
  const handleNext = () => {
    setIndex((prev) => (prev === wisataList.length - 1 ? 0 : prev + 1));
  };
  const handlePrev2 = () => {
    setCurrentIndex((prev) => (prev - 1 + paketNames.length) % paketNames.length);
  };

  const handleNext2 = () => {
    setCurrentIndex((prev) => (prev + 1) % paketNames.length);
  };
  const current = wisataList[index];
  const [dataWisata, setDataWisata] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isPopupAddOpen, setIsPopupAddOpen] = useState(false);
  const [formData, setFormData] = useState({
    nama_pariwisata: "",
    jenis_pariwisata: "",
    img_pariwisata: "",
    deskripsi_pariwisata: "",
  });
  const [dataPariwisata, setDataPariwisata] = useState([]);
  const [jenisPariwisata, setJenisPariwisata] = useState("Edukasi");
  const [filteredPaket, setFilteredPaket] = useState(null);
  const currentNamaPaket = paketNames[currentIndex] || "Edukasi";
  const currentItems = paketGrouped[currentNamaPaket] || [];
  const [selectedPaket, setSelectedPaket] = useState(null);
  const [showPassPopUp, setShowPassPopUp] = useState(false);
  const [actionType, setActionType] = useState(null);
  const [showActionPopup, setShowActionPopup] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const res = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_BASEURL}/pariwisata`);
      const wisata = res.data.pariwisatas || [];
      const grouped = {};
      paketNames.forEach((namaPaket) => {
        grouped[namaPaket] = wisata.filter((w) => {
          const jenis = w.jenis_pariwisata?.toLowerCase();
          const approval = w.approval_pariwisata?.toLowerCase();
          return jenis === namaPaket.toLowerCase() && approval === "disetujui";
        });
      });
      setDataWisata(wisata);
      setPaketGrouped(grouped);
    } catch (error) {
      const msg = error?.response?.data?.message || "Error.";
    }
  };

  const handleRowClick = (item) => {
    setSelectedItem(item);
  };
  
  const handleAdd = async () => {
    setIsPopupAddOpen(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log("Data yang dikirim:", formData);
      await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_BASEURL}/pariwisata`, formData);
      setIsPopupAddOpen(false);
      setFormData({
        nama_pariwisata: "",
        jenis_pariwisata: "",
        img_pariwisata: "",
        deskripsi_pariwisata: "",
      });
      const res = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_BASEURL}/pariwisata`);
      setDataWisata(res.data.pariwisatas || []);
    } catch (err) {
      console.error(err);
      alert("Gagal menambahkan data.");
    }
  };

  const getImageUrl = (url) => {
    if (!url) return null;
    if (url.includes("drive.google.com")) {
      const match = url.match(/\/d\/(.+?)\//);
      if (match?.[1]) {
        return `https://drive.google.com/uc?export=view&id=${match[1]}`;
      }
    }
    return url;
  };

  const handleApprove = () => {
    setActionType("approve");
    setShowPassPopUp(true);
  };

  const handleDelete = () => {
    setActionType("delete");
    setShowPassPopUp(true);
  };

  const onConfirmPassword = async () => {
    try {
      if (actionType == "approve") {
        console.log("ID yang dikirim:", selectedItem._id);
        await axios.patch(`${process.env.NEXT_PUBLIC_BACKEND_BASEURL}/pariwisata?pariwisataId=${selectedItem._id}`);
      } else if (actionType == "delete") {
        console.log("ID yang dikirim:", selectedItem._id);
        await axios.delete(`${process.env.NEXT_PUBLIC_BACKEND_BASEURL}/pariwisata?pariwisataId=${selectedItem._id}`);
      }
      await fetchData();
    } catch (error) {
      console.error("Terjadi kesalahan:", error);
    }
    setActionType(null);
    setSelectedItem(null);
  };

  return (
    <div>
      <Navbar />
      <div className="relative w-full md:h-[110vh] h-[100vh]">
        <Image
          src="/wisata.jpg" // ganti dengan path gambarnya
          alt=""
          fill
          className="object-cover"
        />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent z-10" />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center px-4">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-light" data-aos='fade-up'>
            Desa Harmoni <span className="font-bold">Budaya</span> dan <span className="font-bold">Alam</span>
          </h2>
        </div>
      </div>

      <div className="relative py-10 px-8 md:px-16 bg-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/background.png')] bg-repeat-y bg-center bg-[length:auto_auto] opacity-20 pointer-events-none z-0"></div>
        <div className="relative z-10 justify-items-center">
          <h2 className="text-lg md:text-3xl mb-4 mt-5">
            <span className="bg-[var(--biru)] text-white px-4 py-1 rounded-full" data-aos='fade-up'>
              Wisata Desa <span className="font-bold">Tuksongo</span>
            </span>
          </h2>
          <div className="xl:mt-2 mb-4 item-center justify-items-center justify-center text-lg font-semibold text-black flex items-center gap-2">
            <button 
              onClick={handlePrev} 
              className="px-2 hover:bg-[var(--biru)] hover:opacity-80 hover:rounded-full transition">
              <i className="fa-solid fa-location-arrow text-black -rotate-135"></i>
            </button>
            <h1 className="text-lg text-black md:text-2xl font-semibold">{current.nama}</h1>
            <button
              onClick={handleNext} 
              className="px-2 hover:bg-[var(--biru)] hover:opacity-80 hover:rounded-full transition">
              <i className="fa-solid fa-location-arrow text-black rotate-45"></i>
            </button>
          </div>
          <div className="flex flex-col xl:flex-row items-center gap-5 md:gap-10 justify-items-center">
            <div className="xl:w-[40%] w-[70%] item-center overflow-hidden">
              <Image
                src={current.img}
                alt={current.nama}
                width={500}
                height={500}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="text-center leading-relaxed text-sm sm:text-base max-w-xl text-black">
              <p className="mb-2 whitespace-pre-line">
                {current.deskripsi}
              </p>
            </div>
          </div>
        </div>

        <div className="relative z-10 flex flex-col items-center">
          <h2 className="text-lg md:text-3xl mb-5 mt-5">
            <span className="bg-[var(--biru)] text-white px-4 py-1 rounded-full" data-aos='fade-up'>
              <span className="font-bold">Paket Wisata</span> Desa Tuksongo
            </span>
          </h2>
          <div className="w-full text-center">
            <div className="flex items-center justify-center gap-4 mt-1 xl:mt-4 mb-4">
              <button onClick={handlePrev2} className="px-2 hover:bg-[var(--biru)] hover:opacity-80 hover:rounded-full transition">
                <i className="fa-solid fa-location-arrow text-black -rotate-135"></i>
              </button>
              <h1 className="text-lg md:text-xl mb-4 mt-2 text-[var(--biru)] bg-white p-2 rounded-full shadow-black shadow-lg/40">
                Wisata {currentNamaPaket}
              </h1>
              <button onClick={handleNext2} className="px-2 hover:bg-[var(--biru)] hover:opacity-80 hover:rounded-full transition">
                <i className="fa-solid fa-location-arrow text-black rotate-45"></i>
              </button>
            </div>

            {paketGrouped[currentNamaPaket] &&
            [...Array(Math.ceil(currentItems.length / 4))].map((_, rowIndex) => (
              <div key={rowIndex} className="flex justify-center gap-3 mb-2">
                {paketGrouped[currentNamaPaket]
                  .slice(rowIndex * 4, rowIndex * 4 + 4)
                  .map((item, index) => (
                    <div
                      key={index}
                      onClick={() => setSelectedPaket(item)}
                      className="bg-gray-300 text-sm md:text-lg text-black px-1 md:px-4 py-2 rounded-lg shadow-md text-center w-fit cursor-pointer"
                    >
                      {item.nama_pariwisata}
                    </div>
                ))}
              </div>
            ))}
            { selectedPaket ? (
              <div className={`flex flex-col items-center gap-5 md:gap-10 justify-center ${
                selectedPaket.img_pariwisata ? 'xl:flex-row-reverse' : ''
              }`}>
                { selectedPaket.img_pariwisata ? (
                  <div className="xl:w-[40%] w-[70%] item-center overflow-hidden" data-aos='fade-right'>
                    <Image
                      src={getImageUrl(selectedPaket.img_pariwisata)}
                      alt={selectedPaket.nama_pariwisata}
                      width={300}
                      height={300}
                      className="object-cover w-full h-full"
                    />
                  </div>
                ) : ( <div></div>)}
                <div className="text-center leading-relaxed text-sm sm:text-base max-w-xl text-black" data-aos='fade-left'>
                  <div className="xl:mt-2 mb-4 item-center justify-items-center justify-center text-lg font-semibold text-black flex items-center gap-2">
                    <h1 className="text-lg text-black md:text-2xl font-semibold">{selectedPaket.nama_pariwisata}</h1>
                  </div>
                  <p className="mb-2 whitespace-pre-line">
                    {selectedPaket.deskripsi_pariwisata}
                  </p>
                  <p className="mb-2 whitespace-pre-line font-semibold">
                    Hubungi kami: @desawisatatuksongo on Instagram
                  </p>
                </div>
              </div>
            ) : (
              <div></div>
            )}
          </div>
        </div>

        <div className="relative z-10 flex flex-col items-center">
          <h2 className="text-lg md:text-3xl mb-4 mt-8">
            <span className="bg-[var(--biru)] text-white px-4 py-1 rounded-full" data-aos='fade-up'>
              Pendataan Pariwisata
            </span>
          </h2>
          <p className="text-black text-center">Berikut adalah list pariwisata yang belum disetujui:</p>
          <div className='overflow-x-auto mt-3'>
            <table className='w-full bg-white text-center rounded-lg shadow border border-gray'>
              <thead className='bg-[var(--biru)]'>
                <tr>
                  <th className='p-3'>No</th>
                  <th className='p-3'>Nama Pariwisata</th>
                  <th className='p-3'>Jenis Pariwisata</th>
                </tr>
              </thead>
              <tbody>
                {dataWisata.length > 0 ? (
                  dataWisata
                  .filter(item => item.approval_pariwisata !== "Disetujui")
                  .map((item, index) => (
                    <tr 
                      key={item.id || index}
                      className='hover:bg-gray-100 bg-white cursor-pointer text-black'
                      onClick={() => handleRowClick(item)}>
                      <td className='p-3'>{index + 1}</td>
                      <td className='p-3'>{item.nama_pariwisata}</td>
                      <td className='p-3'>{item.jenis_pariwisata}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="4" className="p-3 text-center text-gray-500">Data tidak ditemukan.</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
          <button
            onClick={handleAdd}
            className="bg-[var(--biru)] text-white rounded-full p-2 mt-3 cursor-pointer"
          >
            (+) Tambah Wisata Baru
          </button>
        </div>

        <div className="relative z-10 flex flex-col items-center">
          <h2 className="text-lg md:text-3xl mb-4 mt-8">
            <span className="bg-[var(--biru)] text-white px-4 py-1 rounded-full" data-aos='fade-up'>
              Pengenalan <span className="font-bold">Agro Eko Wisata</span>
            </span>
          </h2>
          <div className="xl:w-[40%] w-[70%] item-center overflow-hidden" data-aos='fade-up'>
            <Image
              src="/agro-wisata.png"
              width={500}
              height={500}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="xl:max-w-xl max-w-lg" data-aos="fade-left">
            <h1 className="text-lg md:text-xl mb-4 mt-2 text-[var(--biru)] bg-white p-2 rounded-full shadow-black shadow-lg/40 w-fit">
              Agro Wisata
            </h1>
            <p className="text-[var(--biru)]">Agro-wisata adalah bentuk pariwisata alternatif yang menggabungkan pertanian dan kegiatan wisata dengan prinsip berkelanjutan, berkontribusi pada pembangunan pedesaan dan konservasi lingkungan melalui praktik ramah alam. Konsep ini muncul seiring pergeseran minat wisatawan menuju gaya hidup alami, konsumsi hijau, dan pemberdayaan komunitas lokal [1].</p>
          </div>
          <div className="xl:max-w-xl max-w-lg justify-items-end text-right" data-aos="fade-right">
            <h1 className="text-lg md:text-xl mb-4 mt-2 text-[var(--biru)] bg-white p-2 rounded-full shadow-black shadow-lg/40 w-fit">
              Eko Wisata
            </h1>
            <p className="text-[var(--biru)]">Eko-wisata adalah bentuk pariwisata berkelanjutan yang muncul sebagai respons terhadap dampak negatif pariwisata massal, dengan menekankan pada konservasi lingkungan, pelestarian budaya, pemberdayaan komunitas lokal, dan manfaat ekonomi yang adil. Eko-wisata mendorong partisipasi aktif masyarakat, khususnya di daerah terpencil, serta berperan penting dalam pembangunan dan konservasi melalui penciptaan lapangan kerja, peningkatan pendapatan, dan pelestarian sumber daya lokal [2].</p>
          </div>
          <div className="xl:max-w-xl max-w-lg" data-aos="fade-left">
            <h1 className="text-lg md:text-xl mb-4 mt-2 text-[var(--biru)] bg-white p-2 rounded-full shadow-black shadow-lg/40 w-fit">
              Agro Eko-Wisata
            </h1>
            <p className="text-[var(--biru)]">Agro eko-wisata adalah konsep pariwisata yang mengintegrasikan kegiatan pertanian, eko-wisata, dan budaya pedesaan untuk memberikan pengalaman edukatif dan rekreatif bagi wisatawan sekaligus mendukung pendapatan petani. Konsep ini menghubungkan wisatawan dengan alam, aktivitas pertanian, makanan lokal, serta tradisi desa, sehingga menjadi strategi jangka panjang dalam pengembangan pariwisata berkelanjutan di wilayah pedesaan [3].</p>
          </div>
          <div className="justify-items-center justify-center">
            <h1 className="font-semibold text-lg md:text-xl mb-4 mt-4 bg-[var(--biru)] text-white rounded-full p-2">
              Manfaat
            </h1>
            <div className="grid gap-4 md:grid-cols-3 xl:max-w-xl max-w-lg">
              <div className="bg-[var(--biru)] text-white p-4 rounded-lg relative shadow-md transition-transform duration-300 shadow hover:shadow-lg/40 hover:shadow-black hover:scale-110">
                <i className="fa-solid fa-clipboard-check absolute -top-2 -right-1 text-yellow-300 text-3xl"></i>
                <h2 className="font-bold text-base md:text-lg mb-1">Memberikan Pendapatan Ekonomi Ganda</h2>
                <p className="text-sm">Pendapatan awal kecil dari agroforestri, tetapi keuntungan jangka panjang dari ekowisata [5].</p>
              </div>
              <div className="bg-[var(--biru)] text-white p-4 rounded-lg relative shadow-md transition-transform duration-300 shadow hover:shadow-lg/40 hover:shadow-black hover:scale-110">
                <i className="fa-solid fa-clipboard-check absolute -top-2 -right-1 text-yellow-300 text-3xl"></i>
                <h2 className="font-bold text-base md:text-lg mb-1">Meningkatkan Kualitas Lingkungan</h2>
                <p className="text-sm">Agroforestri akan meningkatkan kualitas lingkungan alam [5].</p>
              </div>
              <div className="bg-[var(--biru)] text-white p-4 rounded-lg relative shadow-md transition-transform duration-300 shadow hover:shadow-lg/40 hover:shadow-black hover:scale-110">
                <i className="fa-solid fa-clipboard-check absolute -top-2 -right-1 text-yellow-300 text-3xl"></i>
                <h2 className="font-bold text-base md:text-lg mb-1">Hidup Harmonis dengan Alam</h2>
                <p className="text-sm">Masyarakat bisa hidup berdampingan dengan hutan sambil tetap mendapat manfaat [5].</p>
              </div>
              <div className="bg-[var(--biru)] text-white p-4 rounded-lg relative shadow-md transition-transform duration-300 shadow hover:shadow-lg/40 hover:shadow-black hover:scale-110">
                <i className="fa-solid fa-clipboard-check absolute -top-2 -right-1 text-yellow-300 text-3xl"></i>
                <h2 className="font-bold text-base md:text-lg mb-1">Solusi Terpadu untuk Perubahan Iklim</h2>
                <p className="text-sm">Agro eko-wisata menjadi solusi menyeluruh untuk tantangan alam dan ekonomi sekaligus [5].</p>
              </div>
              <div className="bg-[var(--biru)] text-white p-4 rounded-lg relative shadow-md transition-transform duration-300 shadow hover:shadow-lg/40 hover:shadow-black hover:scale-110">
                <i className="fa-solid fa-clipboard-check absolute -top-2 -right-1 text-yellow-300 text-3xl"></i>
                <h2 className="font-bold text-base md:text-lg mb-1">Meningkatkan Kesejahteraan Petani Lokal</h2>
                <p className="text-sm">Dalam jangka panjang, kesejahteraan petani lokal bisa meningkat [5].</p>
              </div>
              <div className="bg-[var(--biru)] text-white p-4 rounded-lg relative shadow-md transition-transform duration-300 shadow hover:shadow-lg/40 hover:shadow-black hover:scale-110">
                <i className="fa-solid fa-clipboard-check absolute -top-2 -right-1 text-yellow-300 text-3xl"></i>
                <h2 className="font-bold text-base md:text-lg mb-1">Kolaborasi Multi-Pihak</h2>
                <p className="text-sm">Pendekatan ini melibatkan masyarakat, pemerintah, dan sektor swasta untuk keberlanjutan [5].</p>
              </div>
            </div>
          </div>
          <div className="md:max-w-3xl max-w-lg justify-items-center">
            <h1 className="font-semibold text-lg md:text-xl mb-4 mt-4 text-[var(--biru)] bg-white p-2 rounded-full shadow-black shadow-lg/40 w-fit">
              Ciri-Ciri Agro Eko-Wisata
            </h1>
            <div className="flex flex-row flex-wrap justify-center gap-5">
              <FlipCard title="Berbasis pertanian ekologis dan budaya pedesaan" description="Agro eko-wisata menggunakan pertanian ekologis dan budaya khas desa sebagai daya tarik utama wisata [4]." color="var(--biru)" />
              <FlipCard title="Mengintegrasikan wisata, teknologi, dan edukasi" description="Menggabungkan kegiatan pertanian, penerapan teknologi pertanian modern, serta partisipasi wisatawan dalam pengalaman edukatif [4]." color="var(--biru)" />
              <FlipCard title="Mendorong pelestarian lingkungan dan pembangunan berkelanjutan" description="Agro eko-wisata menekankan efisiensi energi, rendah emisi, serta pengelolaan sumber daya secara lestari sesuai prinsip ekonomi sirkular [4]." color="var(--biru)" />
            </div>
          </div>
          <div className="justify-items-center justify-center">
            <h1 className="font-semibold text-lg md:text-xl mb-4 mt-4 bg-[var(--biru)] text-white rounded-full p-2">
              Mengapa Penting Bagi Desa?
            </h1>
            <div className="flex flex-col gap-3 xl:max-w-xl max-w-lg">
              <div className="flex flex-row items-center gap-3 bg-[var(--biru)] text-white p-4 rounded-lg relative shadow-md" data-aos="fade-right">
                <i className="fa-regular fa-square-check text-white text-4xl"></i>
                <div className="flex flex-col">
                  <h2 className="font-bold text-base md:text-lg mb-1">Meningkatkan Pendapatan Masyarakat Lokal</h2>
                  <p className="text-sm">Wisata ini membuka peluang usaha baru (homestay, kuliner lokal, pemandu wisata) dan membantu petani memperoleh pendapatan tambahan dari aktivitas wisata.</p>
                </div>
              </div>
              <div className="flex flex-row items-center gap-3 bg-[var(--biru)] text-white p-4 rounded-lg relative shadow-md" data-aos="fade-left">
                <i className="fa-regular fa-square-check text-white text-4xl"></i>
                <div className="flex flex-col">
                  <h2 className="font-bold text-base md:text-lg mb-1">Mendorong Pelestarian Lingkungan dan Pertanian Berkelanjutan</h2>
                  <p className="text-sm">Dengan menerapkan praktik agroforestri dan pertanian ramah lingkungan, desa menjaga keseimbangan alam dan mengurangi kerusakan lingkungan.</p>
                </div>
              </div>
              <div className="flex flex-row items-center gap-3 bg-[var(--biru)] text-white p-4 rounded-lg relative shadow-md" data-aos="fade-right">
                <i className="fa-regular fa-square-check text-white text-4xl"></i>
                <div className="flex flex-col">
                  <h2 className="font-bold text-base md:text-lg mb-1">Melestarikan Budaya dan Tradisi Lokal</h2>
                  <p className="text-sm">Agro eko-wisata mengenalkan wisatawan pada adat, makanan tradisional, dan kehidupan desa, yang memperkuat identitas budaya lokal.</p>
                </div>
              </div>
              <div className="flex flex-row items-center gap-3 bg-[var(--biru)] text-white p-4 rounded-lg relative shadow-md" data-aos="fade-left">
                <i className="fa-regular fa-square-check text-white text-4xl"></i>
                <div className="flex flex-col">
                  <h2 className="font-bold text-base md:text-lg mb-1">Meningkatkan Edukasi dan Kesadaran</h2>
                  <p className="text-sm">Pengunjung (terutama dari kota) belajar langsung tentang pertanian dan lingkungan, sementara masyarakat desa mendapatkan akses terhadap pengetahuan dan teknologi baru.</p>
                </div>
              </div>
              <div className="flex flex-row items-center gap-3 bg-[var(--biru)] text-white p-4 rounded-lg relative shadow-md" data-aos="fade-right">
                <i className="fa-regular fa-square-check text-white text-4xl"></i>
                <div className="flex flex-col">
                  <h2 className="font-bold text-base md:text-lg mb-1">Meningkatkan Infrastruktur dan Kesejahteraan</h2>
                  <p className="text-sm">Masuknya wisatawan mendorong pembangunan fasilitas umum seperti jalan, sanitasi, dan layanan publik lainnya yang bermanfaat bagi warga desa.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="md:max-w-3xl max-w-lg justify-items-center">
            <h1 className="font-semibold text-xs md:text-sm mb-4 mt-4 text-[var(--biru)] bg-white p-2 rounded-full shadow-black shadow-lg/40 w-fit">
              Daftar Pustaka
            </h1>
            <p className="text-[var(--biru)] text-xs">
              <span className="block text-justify">• Djuwendah, E., Karyani, T., Wulandari, E., &amp; Pradono, P. (2023). Community-based agro-ecotourism sustainability in west java, indonesia. Sustainability, 15(13), 10432.</span>
              <span className="block text-justify">• Kia, Z. (2021). Ecotourism in Indonesia: Local community involvement and the affecting factors. Journal of Governance and Public Policy, 8(2), 93-105.</span>
              <span className="block text-justify">• Kumar, P., Desai, A. R., Arunachalam, V., Gupta, M. J., Paramesha, V., Rajkumar, R. S., ... &amp; Janjal, A. V. (2021). A conceptual framework for agro–ecotourism development for livelihood security. Indian Journal of Agronomy, 66, 184-190.</span>
              <span className="block text-justify">• Mustafayeva, S., &amp; Gasimova, A. (2023). The role and significance of agro-eco parks in the development of agroeco tourism. The Scientific Heritage, (105), 97-99.</span>
              <span className="block text-justify">• Suryandari, R. T., Wicaksono, R. L., &amp; Agustina, A. (2020, July). Is agro-ecotourism approach a potential to support climate change mitigation?. In IOP Conference Series: Earth and Environmental Science (Vol. 528, No. 1, p. 012055). IOP Publishing.</span>
            </p>
          </div>
        </div>
      </div>

      {isPopupAddOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-opacity-50">
          <div className="bg-[var(--biru)] p-6 rounded-lg w-[90%] max-w-md relative">
            <h2 className="text-xl font-semibold mb-4">Tambah Data Pariwisata</h2>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Nama Pariwisata"
                className="w-full p-2 mb-2 border rounded"
                value={formData.nama_pariwisata}
                onChange={(e) => setFormData({ ...formData, nama_pariwisata: e.target.value })}
              />
              <select
                className="w-full p-2 mb-2 border rounded bg-[var(--biru)]"
                value={formData.jenis_pariwisata}
                onChange={(e) => setFormData({ ...formData, jenis_pariwisata: e.target.value })}
              >
                <option value="">Pilih Jenis Pariwisata</option>
                <option value="Edukasi">Edukasi</option>
                <option value="Alam">Alam</option>
                <option value="Budaya">Budaya</option>
                <option value="Kuliner">Kuliner</option>
                <option value="Fotografi">Fotografi</option>
                <option value="Spiritual">Spiritual</option>
              </select>
              <input
                type="text"
                placeholder="Link Gambar (Opsional)"
                className="w-full p-2 mb-2 border rounded"
                value={formData.img_pariwisata}
                onChange={(e) => setFormData({ ...formData, img_pariwisata: e.target.value })}
              />
              <textarea
                placeholder="Deskripsi"
                className="w-full p-2 mb-2 border rounded"
                value={formData.deskripsi_pariwisata}
                onChange={(e) => setFormData({ ...formData, deskripsi_pariwisata: e.target.value })}
              />
              <div className="flex justify-end gap-2 mt-3">
                <button type="button" className="px-4 py-1 rounded bg-[var(--biru)] cursor-pointer border" onClick={() => setIsPopupAddOpen(false)}>
                  Batal
                </button>
                <button type="submit" className="cursor-pointer px-4 py-1 border rounded bg-[var(--biru)] text-white hover:bg-opacity-60">
                  Simpan
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {selectedItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="bg-white rounded-xl shadow-lg p-6 w-[90%] md:w-[600px] max-h-[90vh] overflow-y-auto" data-aos="zoom-in">
            <div className="text-center leading-relaxed text-sm sm:text-base text-black">
              <h1 className="text-lg md:text-xl font-semibold mb-2">{selectedItem.nama_pariwisata}</h1>

              {selectedItem.img_pariwisata && (
                <div className="mb-3">
                  <Image
                    src={getImageUrl(selectedItem.img_pariwisata)}
                    alt={selectedItem.nama_pariwisata}
                    width={300}
                    height={300}
                    className="object-cover mx-auto rounded"
                  />
                </div>
              )}

              <p className="mb-4 whitespace-pre-line">{selectedItem.deskripsi_pariwisata}</p>
            
              <div className="flex justify-center gap-4 mt-4">
                <button
                  className="bg-[var(--ijo)] hover:bg-green-700 text-white font-semibold py-2 px-4 rounded"
                  onClick={handleApprove}
                >
                  Setujui
                </button>
                <button
                  className="bg-[var(--oren)] hover:bg-red-700 text-white font-semibold py-2 px-4 rounded"
                  onClick={handleDelete}
                >
                  Hapus
                </button>
                <button
                  className="bg-gray-400 hover:bg-gray-500 text-white font-semibold py-2 px-4 rounded"
                  onClick={() => setSelectedItem(null)}
                >
                  Kembali
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <PassPopUp
        visible={showPassPopUp}
        onClose={() => {
          setShowPassPopUp(false);
          setSelectedItem(null);
          setActionType(null);
        }}
        onConfirm={onConfirmPassword}
      />

      <Footer />
    </div>
  );
}
