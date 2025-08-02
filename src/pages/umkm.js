import Image from "next/image";
import Navbar from "@/component/navbar";
import Footer from "@/component/footer";
import { useState } from "react";
import FlipCard from "@/component/flipCard";

const wisataList = [
  {
    img: "/umkm-Pati Aren.png",
    nama: "Pati Aren",
    deskripsi: "Pati Aren menghadirkan berbagai produk olahan aren berkualitas, mulai dari tepung pati, mie lethek, gula aren, hingga kopi aren. Semua diolah secara tradisional dengan menjaga kebersihan dan cita rasa alami, cocok untuk konsumsi harian maupun oleh-oleh khas Magelang.",
    deskripsiEng: "Pati Aren offers a variety of high-quality aren-based products, including aren flour, traditional noodles, palm sugar, and aren coffee. All are traditionally processed with care and hygiene, making them perfect for daily use or as authentic Magelang souvenirs."
  },
  {
    img: "/Omah Sandal.png",
    nama: "Omah Sandal",
    deskripsi: "Omah Sandal memproduksi sandal anyaman tradisional dengan berbagai model serta kerajinan tangan berbahan pandan seperti totebag, goodiebag, dan topi. Semua produk dibuat dengan teliti oleh pengrajin lokal, menghadirkan keindahan dan fungsi dalam setiap karya.",
    deskripsiEng: "Omah Sandal produces traditional woven sandals in various models, along with pandan handicrafts such as tote bags, goodie bags, and hats. Each product is carefully handmade by local artisans, combining beauty with practical use."
  },
  {
    img: "/umkm-Griya Lebah.png",
    nama: "Griya Lebah",
    deskripsi: "Griya Lebah menyediakan madu murni berkualitas yang dihasilkan langsung dari peternakan lebah pribadi. Griya Lebah juga menawarkan paket wisata edukasi bagi pengunjung untuk belajar tentang budidaya lebah dan proses produksi madu secara langsung.",
    deskripsiEng: "Griya Lebah provides pure, high-quality honey directly harvested from personal bee farms. Griya Lebah also offer educational tour packages where visitors can learn about beekeeping and honey production firsthand."
  },
  {
    img: "/Sumber Sembilan.png",
    nama: "Sumber Sembilan",
    deskripsi: "Super Sembilan memproduksi camilan homemade dengan rasa gurih khas, seperti basreng original dan keripik pangsit cumi. Produk Sumber Sembilan telah dipasarkan ke berbagai kota melalui reseller, membuktikan kualitas dan cita rasa yang dipercaya banyak pelanggan.",
    deskripsiEng: ""
  },
  {
    img: "/Galeri Brownies.png",
    nama: "Galeri Brownies",
    deskripsi: "Galeri Brownies menawarkan donat homemade dengan berbagai topping yang tersedia setiap hari, serta kue custom yang dibuat sesuai pesanan untuk acara spesial konsumen. Setiap produk dibuat dengan bahan berkualitas untuk rasa lezat dan tampilan menarik.",
    deskripsiEng: "Galeri Brownies offers homemade donuts with various toppings available daily, as well as custom cakes made to order for consumer’s special occasions. Each product is made with quality ingredients to ensure delicious taste and attractive presentation."
  },
  {
    img: "/Kuliner Bukit Menoreh.png",
    nama: "Kuliner Bukit Menoreh",
    deskripsi: "Kuliner Bukit Menoreh menyediakan berbagai makanan khas daerah Bukit Menoreh dengan cita rasa lezat dan harga terjangkau. Cocok dinikmati saat berwisata atau dibawa pulang sebagai oleh-oleh untuk keluarga di rumah.",
    deskripsiEng: "Kuliner Bukit Menoreh serves a variety of traditional dishes from the Bukit Menoreh area, offering delicious flavours at affordable prices. Perfect to enjoy during a visit or to take home as souvenirs for family."
  },
  {
    img: "/Madu Wijaya.png",
    nama: "Madu Wijaya",
    deskripsi: "Madu Wijaya menjual madu murni berkualitas tinggi langsung dari peternakan lebah lokal, serta menyediakan bibit lebah bagi yang ingin memulai budidaya lebah sendiri.",
    deskripsiEng: "Madu Wijaya sells pure, high-quality honey directly from local bee farms and provides bee colonies for those interested in starting their own beekeeping."
  },
  {
    img: "/umkm-Galeri Artmojo.png",
    nama: "Galeri Artmojo",
    deskripsi: "Galeri Artmojo merupakan galeri seni yang menampilkan karya lukis bertema alam Borobudur dan berbagai karya kreatif seniman lokal lainnya. Setiap lukisan membawa keindahan dan cerita dari Borobudur untuk dinikmati pengunjung.",
    deskripsiEng: "Artmojo Songo Art Gallery is an art gallery showcasing paintings inspired by Borobudur’s landscapes, along with other creative works by local artists. Each artwork brings the beauty and stories of Borobudur to life for visitors."
  },
  {
    img: "/Slondok Bu Kasih.png",
    nama: "Slondok Bu Kasih",
    deskripsi: "Slondok Bu Kasih menghadirkan keripik slondok khas Magelang berbahan singkong dengan berbagai rasa seperti asin, gurih, dan pedas. Cocok sebagai camilan harian maupun oleh-oleh untuk keluarga di rumah.",
    deskripsiEng: "Slondok Bu Kasih offers traditional Magelang slondok cassava chips in flavours such as salty, savoury, and spicy. Perfect as a daily snack or as a souvenir to take home for family."
  },
  {
    img: "/Hampers Mirna Craft.png",
    nama: "Hampers Mirna Craft",
    deskripsi: "Hampers Mirna Craft menyediakan berbagai pilihan hampers seperti buket bunga, snack, uang, dan balon untuk acara wisuda, lamaran, pernikahan, dan lainnya. Setiap hampers dibuat dengan desain menarik sesuai kebutuhan Anda.",
    deskripsiEng: "Hampers Mirna Craft offers a variety of hampers including flower bouquets, snack hampers, money bouquets, and balloons for graduations, engagements, weddings, and more. Each hamper is beautifully designed to suit the consumer's needs."
  },
  {
    img: "/umkm-Ukir Bambu.png",
    nama: "Ukir Bambu",
    deskripsi: "Ukir Bambu menghadirkan paket yang mengajak pengunjung merasakan langsung tradisi ukir bambu yang diwariskan sejak 1989. Mulai dari memilih bambu, merancang desain, hingga proses ukir manual, semua dipandu oleh pengrajin lokal yang berpengalaman. Tak hanya membuat karya seni bernilai, wisata ini juga menghadirkan pengalaman budaya yang hidup di tengah Desa Tuksongo, Borobudur.",
    deskripsiEng: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi id ligula vel neque auctor condimentum. Mauris vestibulum ornare ultrices. Sed placerat, diam vitae feugiat placerat, felis sapien sollicitudin odio, nec malesuada justo metus ut nunc. Aliquam nisl turpis, auctor eget lacinia et, facilisis id erat. Mauris porta vestibulum enim ut porta. Sed gravida convallis quam at iaculis. Suspendisse potenti. Proin eget lobortis lectus, eget blandit sem."
  },
  {
    img: "/umkm-Produksi Tahu.png",
    nama: "Produksi Tahu",
    deskripsi: "Tahu Tradisional menghadirkan pengalaman edukatif seputar pembuatan tahu secara tradisional di Dusun Puton, Desa Tuksongo. Usaha keluarga yang diwariskan sejak zaman nenek moyang ini kini diteruskan oleh Bapak Sidiq, menjaga resep dan proses pembuatan mulai dari merendam kacang hingga koagulasi. Pengunjung dapat menyelami dapur tahu pedesaan dan mengenal lebih dekat warisan kuliner yang hangat dan penuh cerita.",
    deskripsiEng: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi id ligula vel neque auctor condimentum. Mauris vestibulum ornare ultrices. Sed placerat, diam vitae feugiat placerat, felis sapien sollicitudin odio, nec malesuada justo metus ut nunc. Aliquam nisl turpis, auctor eget lacinia et, facilisis id erat. Mauris porta vestibulum enim ut porta. Sed gravida convallis quam at iaculis. Suspendisse potenti. Proin eget lobortis lectus, eget blandit sem."
  },
  {
    img: "/umkm-Mie Lethek.png",
    nama: "Mie Lethek",
    deskripsi: "Mie Lethek Tuksongo menawarkan pengalaman kuliner tradisional dengan cita rasa khas dari mie berbahan pati aren alami. Diproses manual tanpa bahan kimia, mie ini memiliki tekstur kenyal dan gurih.Pengunjung diajak melihat langsung proses pembuatannya hingga ikut memasak dan mencicipinya sendiri di Desa Tuksongo, Borobudur. Cocok untuk pecinta kuliner sekaligus pencari oleh-oleh autentik.",
    deskripsiEng: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi id ligula vel neque auctor condimentum. Mauris vestibulum ornare ultrices. Sed placerat, diam vitae feugiat placerat, felis sapien sollicitudin odio, nec malesuada justo metus ut nunc. Aliquam nisl turpis, auctor eget lacinia et, facilisis id erat. Mauris porta vestibulum enim ut porta. Sed gravida convallis quam at iaculis. Suspendisse potenti. Proin eget lobortis lectus, eget blandit sem."
  }
];

export default function UMKM() {
  const [index, setIndex] = useState(0);
  
  const handlePrev = () => {
    setIndex((prev) => (prev === 0 ? wisataList.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setIndex((prev) => (prev === wisataList.length - 1 ? 0 : prev + 1));
  };

  const current = wisataList[index];

  return (
    <div>
      <Navbar />
      <div className="relative w-full md:h-[110vh] h-[100vh]">
        <Image
          src="/umkm.jpg" // ganti dengan path gambarnya
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
        <div className="absolute inset-0 bg-[url('/background.png')] bg-cover bg-center bg-[length:100%_100%] bg-repeat opacity-20 pointer-events-none z-0"></div>
        <div className="relative z-10 justify-items-center">
          <h2 className="text-xl md:text-3xl mb-4">
            <span className="bg-[var(--ijo)] text-white px-4 py-1 rounded-full" data-aos='fade-up'>
              UMKM Desa <span className="font-bold">Tuksongo</span>
            </span>
          </h2>

          <div className="xl:mt-2 mb-4 item-center justify-items-center justify-center text-lg font-semibold text-black flex items-center gap-2">
            <button 
              onClick={handlePrev} 
              className="px-2 hover:bg-[var(--ijo)] hover:opacity-80 hover:rounded full transition">
              <i className="fa-solid fa-location-arrow text-black -rotate-135"></i>
            </button>
            <h1 className="text-lg text-black md:text-2xl font-semibold">{current.nama}</h1>
            <button
              onClick={handleNext} 
              className="px-2 hover:bg-[var(--ijo)] hover:opacity-80 hover:rounded full transition">
              <i className="fa-solid fa-location-arrow text-black rotate-45"></i>
            </button>
          </div>

          <div className="flex flex-col xl:flex-row items-center gap-5 md:gap-10 justify-items-center">
            <div className="xl:w-[40%] w-[70%] item-center overflow-hidden" data-aos='fade-right'>
              <Image
                src={current.img}
                alt={current.nama}
                width={500}
                height={500}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="flex flex-col text-center leading-relaxed text-sm sm:text-base max-w-xl text-black">
              <p className="mb-2">
                {current.deskripsi}
              </p>
              <p className="italic mb-2">
                {current.deskripsiEng}
              </p>
            </div>
          </div>

          <div className="relative z-10 items-center justify-items-center">
            <h2 className="text-xl md:text-3xl mb-4 mt-5">
              <span className="bg-[var(--ijo)] text-white px-4 py-1 rounded-full" data-aos='fade-up'>
                Tutorial Pendaftaran <span className="font-bold">Qris</span>
              </span>
            </h2>

            <img 
              src="/umkm-qris desktop.png"
              className="hidden sm:block w-full max-w-3xl object-contain"
            />
            <img 
              src="/umkm-qris mobile.png"
              className="block sm:hidden w-full object-contain"
            />
          </div>

          <div className="relative z-10 items-center justify-items-center">
            <h2 className="text-xl md:text-3xl mb-4 mt-5">
              <span className="bg-[var(--ijo)] text-white px-4 py-1 rounded-full" data-aos='fade-up'>
                UMKM <span className="font-bold">Izin Lengkap</span>
              </span>
            </h2>

            <div className="md:max-w-2xl max-w-md justify-items-center p-5" data-aos="fade-up">
              <div className="leading-relaxed text-sm max-w-xl text-black text-center" data-aos="fade-up">
                <p className="font-light mb-2 xl:mb-0"><span className="font-semibold">NIB atau Nomor Izin Berusaha</span> diterbitkan melalui lembaga OSS setelah pelaku usaha melakukan pendaftaran untuk melakukan kegiatan usaha dan sebagai identitas bagi pelaku usaha dalam pelaksanaan kegiatan usahanya. </p>
              </div>
            </div>

            <div className="md:min-w-md min-w-xs justify-between mt-7 flex flex-row">
              <div className="w-fit text-black p-1 rounded-lg border border-[var(--ijo)] border-2 relative transition-transform duration-300 hover:scale-110">
                <img 
                  src="/umkm-izin nib 1.png" 
                  className="absolute top-0 -translate-y-1/2 left-1/2 transform -translate-x-1/2 w-20 h-20 object-contain"
                />
                <h2 className="font-semibold md:text-md text-sm mb-1 mt-9 text-center">Wajib Dimiliki oleh</h2>
                <h2 className="font-semibold md:text-md text-sm mb-1 text-center">Pelaku Usaha</h2>
              </div>
              <div className="w-fit text-black p-1 rounded-lg border border-[var(--ijo)] border-2 relative  transition-transform duration-300 hover:scale-110">
                <img 
                  src="/umkm-izin nib 2.png" 
                  className="absolute top-0 -translate-y-1/2 left-1/2 transform -translate-x-1/2 w-20 h-18 object-contain"
                />
                <h2 className="font-semibold md:text-md text-sm mb-1 mt-9 text-center">Biaya Pendaftaran</h2>
                <h2 className="font-semibold md:text-md text-sm mb-1 text-center">Gratis</h2>
              </div>
            </div>
          </div>

          <div className="relative z-10 items-center justify-items-center">
            <h2 className="text-xl md:text-3xl mb-6 md:mb-4 mt-5">
              <span className="text-lg md:text-xl mb-4 mt-2 text-[var(--ijo)] bg-white p-2 rounded-full shadow-black shadow-lg/40 w-fit" data-aos='fade-up'>
                Manfaat <span className="font-bold">NIB</span>
              </span>
            </h2>

            <div className="flex flex-col gap-5">
              <div className="md:min-w-2xl min-w-md gap-10 md:gap-0 md:justify-between items-center mt-7 flex flex-col md:flex-row">
                <div className="w-fit max-w-2xs text-black p-4 rounded-lg border border-[var(--ijo)] border-2 relative transition-transform duration-300 hover:scale-110">
                  <img 
                    src="/umkm-nib manfaat 1.png" 
                    className="absolute top-0 -translate-y-1/2 left-1/2 transform -translate-x-1/2 w-20 h-20 object-contain"
                  />
                  <h2 className="font-semibold md:text-md text-sm mb-1 mt-9 text-center">Kemudahan Perizinan</h2>
                  <h2 className="text-justify md:text-md text-sm mb-1 text-center">Telah terintegrasi dalam satu sistem sehingga pengusaha tidak perlu mengurus banyak izin secara terpisah.</h2>
                </div>
                <div className="w-fit max-w-2xs text-black p-4 rounded-lg border border-[var(--ijo)] border-2 relative transition-transform duration-300 hover:scale-110">
                  <img 
                    src="/umkm-nib manfaat 2.png" 
                    className="absolute top-0 -translate-y-1/2 left-1/2 transform -translate-x-1/2 w-20 h-20 object-contain"
                  />
                  <h2 className="font-semibold md:text-md text-sm mb-1 mt-9 text-center">Akses Perbankan</h2>
                  <h2 className="text-justify md:text-md text-sm mb-1 text-center">Usaha yang memiliki NIB dianggap lebih legitimate dan terdaftar resmi. sehingga bank lebih mudah memberikan kredit atau layanan keuangan.</h2>
                </div>
              </div>
              <div className="md:min-w-2xl min-w-md gap-10 md:gap-0 md:justify-between items-center mt-7 flex flex-col md:flex-row">
                <div className="w-fit max-w-2xs text-black p-4 rounded-lg border border-[var(--ijo)] border-2 relative transition-transform duration-300 hover:scale-110">
                  <img 
                    src="/umkm-nib manfaat 3.png" 
                    className="absolute top-0 -translate-y-1/2 left-1/2 transform -translate-x-1/2 w-20 h-20 object-contain"
                  />
                  <h2 className="font-semibold md:text-md text-sm mb-1 mt-9 text-center">Perlindungan Hukum</h2>
                  <h2 className="text-justify md:text-md text-sm mb-1 text-center">Usaha yang telah memiliki NIB akan mendapatkan perlindungan hukum yang lebih kuat dan diakui secara resmi oleh negara.</h2>
                </div>
                <div className="w-fit max-w-2xs text-black p-4 rounded-lg border border-[var(--ijo)] border-2 relative transition-transform duration-300 hover:scale-110">
                  <img 
                    src="/umkm-nib manfaat 4.png" 
                    className="absolute top-0 -translate-y-1/2 left-1/2 transform -translate-x-1/2 w-20 h-20 object-contain"
                  />
                  <h2 className="font-semibold md:text-md text-sm mb-1 mt-9 text-center">Penguatan Branding</h2>
                  <h2 className="text-justify md:text-md text-sm mb-1 text-center">NIB dapat meningkatkan kredibilitas dan kepercayaan mitra bisnis, supplier, maupun konsumen terhadap usaha yang dimiliki.</h2>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3 xl:max-w-xl max-w-lg items-center justify-items-center" data-aos="fade-up">
            <h1 className="text-lg md:text-xl mb-4 mt-2 text-[var(--ijo)] bg-white p-2 rounded-full shadow-black shadow-lg/40 w-fit">
              Alur <strong>Pendaftaran</strong>
            </h1>
            <h1 className="text-lg md:text-xl text-black p-1">
              Pendaftaran Hak Akses di OSS
            </h1>
            <div className="flex flex-col xl:max-w-xl max-w-lg gap-3 justify-items-center items-center">
              <div className="w-sm md:w-lg flex flex-row justify-start items-center gap-5 text-left border border-[var(--ijo)] border-2 text-black p-3 rounded-lg relative shadow-md" data-aos="fade-up">
                <p className="text-lg font-bold text-white bg-[var(--ijo)] p-2 rounded-full">01</p>
                <h2 className="text-base md:text-lg mb-1">Kunjungi laman www.oss.go.id</h2>
              </div>
              <div className="w-sm md:w-lg flex flex-row justify-start items-center gap-5 text-left border border-[var(--ijo)] border-2 text-black p-3 rounded-lg relative shadow-md" data-aos="fade-up">
                <p className="text-lg font-bold text-white bg-[var(--ijo)] p-2 rounded-full">02</p>
                <h2 className="text-base md:text-lg mb-1">Pilih menu &quot;UMK atau Non UMK&quot;</h2>
              </div>
              <div className="w-sm md:w-lg flex flex-row justify-start items-center gap-5 text-left border border-[var(--ijo)] border-2 text-black p-3 rounded-lg relative shadow-md" data-aos="fade-up">
                <p className="text-lg font-bold text-white bg-[var(--ijo)] p-2 rounded-full">03</p>
                <h2 className="text-base md:text-lg mb-1">Pilih &quot;Jenis Pelaku Usaha&quot;</h2>
              </div>
              <div className="w-sm md:w-lg flex flex-row justify-start items-center gap-5 text-left border border-[var(--ijo)] border-2 text-black p-3 rounded-lg relative shadow-md" data-aos="fade-up">
                <p className="text-lg font-bold text-white bg-[var(--ijo)] p-2 rounded-full">04</p>
                <h2 className="text-base md:text-lg mb-1">Masukkan NIK, Data Diri, Kode Captcha, dan Klik Daftar</h2>
              </div>
              <div className="w-sm md:w-lg flex flex-row justify-start items-center gap-5 text-left border border-[var(--ijo)] border-2 text-black p-3 rounded-lg relative shadow-md" data-aos="fade-up">
                <p className="text-lg font-bold text-white bg-[var(--ijo)] p-2 rounded-full">05</p>
                <h2 className="text-base md:text-lg mb-1">Cek E-mail untuk Proses Verifikasi dan Aktivasi</h2>
              </div>
              <div className="w-sm md:w-lg flex flex-row justify-start items-center gap-5 text-left border border-[var(--ijo)] border-2 text-black p-3 rounded-lg relative shadow-md" data-aos="fade-up">
                <p className="text-lg font-bold text-white bg-[var(--ijo)] p-2 rounded-full">06</p>
                <h2 className="text-base md:text-lg mb-1">Klik &quot;Tombol Aktivasi&quot;</h2>
              </div>
            </div>
            <h1 className="text-lg md:text-xl text-black p-1">
              Pendaftaran NIB di OSS
            </h1>
            <div className="flex flex-col xl:max-w-xl max-w-lg gap-3 justify-items-center items-center">
              <div className="w-sm md:w-lg flex flex-row justify-start items-center gap-5 text-left border border-[var(--ijo)] border-2 text-black p-3 rounded-lg relative shadow-md" data-aos="fade-up">
                <p className="text-lg font-bold text-white bg-[var(--ijo)] p-2 rounded-full">01</p>
                <h2 className="text-base md:text-lg mb-1">Kunjungi laman www.oss.go.id Pilih &quot;Masuk&quot;</h2>
              </div>
              <div className="w-sm md:w-lg flex flex-row justify-start items-center gap-5 text-left border border-[var(--ijo)] border-2 text-black p-3 rounded-lg relative shadow-md" data-aos="fade-up">
                <p className="text-lg font-bold text-white bg-[var(--ijo)] p-2 rounded-full">02</p>
                <h2 className="text-base md:text-lg mb-1">Masukkan Username, Password, dan Kode Captcha</h2>
              </div>
              <div className="w-sm md:w-lg flex flex-row justify-start items-center gap-5 text-left border border-[var(--ijo)] border-2 text-black p-3 rounded-lg relative shadow-md" data-aos="fade-up">
                <p className="text-lg font-bold text-white bg-[var(--ijo)] p-2 rounded-full">03</p>
                <h2 className="text-base md:text-lg mb-1">Klik Menu &quot;Perizinan Berusaha&quot;</h2>
              </div>
              <div className="w-sm md:w-lg flex flex-row justify-start items-center gap-5 text-left border border-[var(--ijo)] border-2 text-black p-3 rounded-lg relative shadow-md" data-aos="fade-up">
                <p className="text-lg font-bold text-white bg-[var(--ijo)] p-2 rounded-full">04</p>
                <h2 className="text-base md:text-lg mb-1">Pilih &quot;Permohonan Baru&quot;</h2>
              </div>
              <div className="w-sm md:w-lg flex flex-row justify-start items-center gap-5 text-left border border-[var(--ijo)] border-2 text-black p-3 rounded-lg relative shadow-md" data-aos="fade-up">
                <p className="text-lg font-bold text-white bg-[var(--ijo)] p-2 rounded-full">05</p>
                <h2 className="text-base md:text-lg mb-1">Lengkapi data pelaku usaha, bidang usaha, detail bidang usaha, dan produk/jasa bidang usaha</h2>
              </div>
              <div className="w-sm md:w-lg flex flex-row justify-start items-center gap-5 text-left border border-[var(--ijo)] border-2 text-black p-3 rounded-lg relative shadow-md" data-aos="fade-up">
                <p className="text-lg font-bold text-white bg-[var(--ijo)] p-2 rounded-full">06</p>
                <h2 className="text-base md:text-lg mb-1">Periksa daftar produk/jasa, data usaha, dan daftar kegiatan usaha</h2>
              </div>
              <div className="w-sm md:w-lg flex flex-row justify-start items-center gap-5 text-left border border-[var(--ijo)] border-2 text-black p-3 rounded-lg relative shadow-md" data-aos="fade-up">
                <p className="text-lg font-bold text-white bg-[var(--ijo)] p-2 rounded-full">07</p>
                <h2 className="text-base md:text-lg mb-1">Periksa dan lengkapi dokumen persetujuan lingkungan</h2>
              </div>
              <div className="w-sm md:w-lg flex flex-row justify-start items-center gap-5 text-left border border-[var(--ijo)] border-2 text-black p-3 rounded-lg relative shadow-md" data-aos="fade-up">
                <p className="text-lg font-bold text-white bg-[var(--ijo)] p-2 rounded-full">08</p>
                <h2 className="text-base md:text-lg mb-1">Pahami dan centang &quot;Pernyataan Mandiri&quot; dan Periksa draf perizinan berusaha</h2>
              </div>
              <div className="w-sm md:w-lg flex flex-row justify-start items-center gap-5 text-left border border-[var(--ijo)] border-2 text-black p-3 rounded-lg relative shadow-md" data-aos="fade-up">
                <p className="text-lg font-bold text-white bg-[var(--ijo)] p-2 rounded-full">09</p>
                <h2 className="text-base md:text-lg mb-1">Perizinan NIB Terbit</h2>
              </div>
            </div>
          </div>

          <div className="relative z-10 items-center justify-items-center">
            <h2 className="text-2xl md:text-3xl mb-4 mt-5">
              <span className="bg-[var(--ijo)] text-white px-4 py-1 rounded-full" data-aos='fade-up'>
                UMKM <span className="font-bold">Jangan Tertipu!</span>
              </span>
            </h2>

            <h1 className="text-lg md:text-xl text-black font-semibold p-1">
              #WaspadaKomunitasPalsu
            </h1>

            <div className="mt-4 gap-5 flex flex-row xl:max-w-2xl max-w-lg">
              <div className="border border-gray-300 bg-white shadow-black shadow-lg/40 text-black p-2 rounded-lg text-center items-center content-center font-semibold relative shadow-md transition-transform duration-300 shadow hover:shadow-lg/40 hover:shadow-black hover:scale-110">
                <p>KENALI MODUS PENIPUAN DALAM KOMUNITAS</p>
              </div>
              <div className="border border-gray-300 bg-white shadow-black shadow-lg/40 text-black p-2 rounded-lg text-center items-center content-center font-semibold relative shadow-md transition-transform duration-300 shadow hover:shadow-lg/40 hover:shadow-black hover:scale-110">
                <p>CIRI DAN TANDA BAHAYA PENIPUAN</p>
              </div>
              <div className="border border-gray-300 bg-white shadow-black shadow-lg/40 text-black p-2 rounded-lg text-center items-center content-center font-semibold relative shadow-md transition-transform duration-300 shadow hover:shadow-lg/40 hover:shadow-black hover:scale-110">
                <p>APA YANG HARUS DILAKUKAN KETIKA TERJERAT PENIPUAN?</p>
              </div>
            </div>

            <h1 className="p-3 mt-2 text-lg md:text-xl text-black font-semibold p-1">
              Ada Penipuan? Lapor Kesini!
            </h1>

            <h1 className="text-lg md:text-xl bg-gray-300 text-black font-semibold p-1 px-7 rounded-full">
              sipasti.ojk.go.id
            </h1>
          </div>

          <div className="flex flex-col gap-3 xl:max-w-xl max-w-lg items-center justify-items-center" data-aos="fade-up">
            <h1 className="text-lg md:text-xl mb-4 mt-4 text-[var(--ijo)] bg-white p-2 rounded-full shadow-black shadow-lg/40 w-fit">
              Kenali <strong>Modusnya</strong>
            </h1>
            <div className="flex flex-col gap-5">
              <div className="md:min-w-3xl min-w-md gap-10 md:gap-5 md:justify-between items-stretch mt-7 flex flex-col md:flex-row">
                <div className="flex flex-col w-fit text-black p-4 rounded-lg bg-gray-300 relative transition-transform duration-300 hover:scale-110">
                  <img 
                    src="/umkm-modus 1.png" 
                    className="absolute top-0 -translate-y-1/2 left-1/2 transform -translate-x-1/2 w-20 h-20 object-contain"
                  />
                  <h2 className="font-semibold md:text-md text-sm mb-1 mt-9 text-center">Modus Pelatihan UMKM Palsu</h2>
                  <h2 className="text-justify md:text-md text-sm mb-1 text-center flex-grow">Penipu mengaku dari lembaga resmi, menjanjikan pelatihan bersertifikat dan bantuan modal, lalu meminta data pribadi lewat link palsu.</h2>
                </div>
                <div className="flex flex-col w-fit text-black p-4 rounded-lg bg-gray-300 relative transition-transform duration-300 hover:scale-110">
                  <img 
                    src="/umkm-modus 2.png" 
                    className="absolute top-0 -translate-y-1/2 left-1/2 transform -translate-x-1/2 w-20 h-20 object-contain"
                  />
                  <h2 className="font-semibold md:text-md text-sm mb-1 mt-9 text-center">Modus Survei atau Pendataan Usaha</h2>
                  <h2 className="text-justify md:text-md text-sm mb-1 text-center flex-grow">Pelaku berpura-pura melakukan survei dari dinas atau koperasi dan meminta data sensitif seperti NIK, PIN, atau OTP.</h2>
                </div>
                <div className="flex flex-col w-fit text-black p-4 rounded-lg bg-gray-300 relative transition-transform duration-300 hover:scale-110">
                  <img 
                    src="/umkm-modus 3.png" 
                    className="absolute top-0 -translate-y-1/2 left-1/2 transform -translate-x-1/2 w-20 h-20 object-contain"
                  />
                  <h2 className="font-semibold md:text-md text-sm mb-1 mt-9 text-center">Modus Investasi Gotong Royong</h2>
                  <h2 className="text-justify md:text-md text-sm mb-1 text-center flex-grow">Korban diajak gabung komunitas &quot;UMKM sukses&quot; dengan janji keuntungan besar, tetapi ternyata skema tipu-tipu seperti arisan bodong.</h2>
                </div>
              </div>
              <div className="md:min-w-3xl min-w-md gap-10 md:gap-5 md:justify-between items-stretch mt-7 flex flex-col md:flex-row">
                <div className="flex flex-col w-fit text-black p-4 rounded-lg bg-gray-300 relative transition-transform duration-300 hover:scale-110">
                  <img 
                    src="/umkm-modus 4.png" 
                    className="absolute top-0 -translate-y-1/2 left-1/2 transform -translate-x-1/2 w-20 h-20 object-contain"
                  />
                  <h2 className="font-semibold md:text-md text-sm mb-1 mt-9 text-center">Modus Penjualan Alat Usaha Fiktif</h2>
                  <h2 className="text-justify md:text-md text-sm mb-1 text-center flex-grow">Pelaku menjual alat usaha murah lewat grup online, tapi setelah dibayar, barang tak dikirim dan penjual hilang.</h2>
                </div>
                <div className="flex flex-col w-fit text-black p-4 rounded-lg bg-gray-300 relative transition-transform duration-300 hover:scale-110">
                  <img 
                    src="/umkm-modus 5.png" 
                    className="absolute top-0 -translate-y-1/2 left-1/2 transform -translate-x-1/2 w-20 h-20 object-contain"
                  />
                  <h2 className="font-semibold md:text-md text-sm mb-1 mt-9 text-center">Modus Impersonasi Tokoh Tepercaya</h2>
                  <h2 className="text-justify md:text-md text-sm mb-1 text-center flex-grow">Penipu menggunakan nama atau foto tokoh masyarakat untuk menyebar link bantuan palsu dengan tampilan resmi agar lebih meyakinkan.</h2>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3 xl:max-w-3xl max-w-lg items-center justify-items-center" data-aos="fade-up">
            <h1 className="text-lg md:text-xl mb-4 mt-4 text-[var(--ijo)] bg-white p-2 rounded-full shadow-black shadow-lg/40 w-fit">
              Ciri & Tanda <strong>Bahaya</strong>
            </h1>
            <div className="flex flex-row flex-wrap justify-center gap-5">
              <FlipCard title="Janji Keuntungan Tidak Masuk Akal" description="&quot;Cukup setor Rp100.000, dapat alat usaha dan modal Rp1 juta.&quot;" color="var(--ijo)" />
              <FlipCard title="Permintaan Informasi Pribadi Sensitif" description="Meminta OTP, PIN, password, nomor rekening, atau NIK lengkap via chat atau form tidak resmi." color="var(--ijo)" />
              <FlipCard title="Desakan Untuk Transfer Secepatnya" description="&quot;Hari ini terakhir. Kalau lewat, kamu rugi sendiri.&quot;" color="var(--ijo)" />
              <FlipCard title="Sumber Informasi Tidak Bisa Diverifikasi" description="Link pendek (bit.ly), WA broadcast dari nomor tak dikenal, tidak ada situs resmi." color="var(--ijo)" />
              <FlipCard title="Penggunaan Logo Instansi Tanpa Izin" description="Logo dinas, desa, atau bank yang buram/tidak sesuai." color="var(--ijo)" />
              <FlipCard title="Minim Transparansi dan Detail" description="Saat ditanya detail program, pelaku mengalihkan, marah, atau menekan korban." color="var(--ijo)" />
            </div>
          </div>

          <div className="flex flex-col gap-5 md:gap-3 xl:max-w-3xl max-w-lg items-center justify-items-center" data-aos="fade-up">
            <h1 className="text-lg md:text-xl mb-4 mt-4 text-[var(--ijo)] bg-white p-2 rounded-full shadow-black shadow-lg/40 w-fit">
              Apa Hal yang <strong>Harus</strong> Dilakukan?
            </h1>
            <div className="flex flex-col gap-5">
              <div className="md:max-w-3xl max-w-xl gap-5 justify-center items-center mt-3 flex flex-wrap">
                <div className="flex flex-col max-w-3xs text-black p-3 rounded-lg border border-[var(--ijo)] border-2 relative">
                  <img 
                    src="/warn.png" 
                    className="absolute top-0 -translate-y-1/2 left-1/2 transform -translate-x-1/2 w-10 h-10 object-contain"
                  />
                  <h2 className="font-semibold md:text-md text-sm mt-3 text-center">Jangan Langsung Percaya!</h2>
                </div>
                <div className="flex flex-col max-w-3xs text-black p-3 rounded-lg border border-[var(--ijo)] border-2 relative">
                  <img 
                    src="/warn.png" 
                    className="absolute top-0 -translate-y-1/2 left-1/2 transform -translate-x-1/2 w-10 h-10 object-contain"
                  />
                  <h2 className="font-semibold md:text-md text-sm mt-3 text-center">Jangan Berikan Data Pribadi!</h2>
                </div>
                <div className="flex flex-col max-w-3xs text-black p-3 rounded-lg border border-[var(--ijo)] border-2 relative">
                  <img 
                    src="/warn.png" 
                    className="absolute top-0 -translate-y-1/2 left-1/2 transform -translate-x-1/2 w-10 h-10 object-contain"
                  />
                  <h2 className="font-semibold md:text-md text-sm mt-3 text-center">Blokir dan Tandai Nomor Penipu!</h2>
                </div>
                <div className="flex flex-col max-w-3xs text-black p-3 rounded-lg border border-[var(--ijo)] border-2 relative">
                  <img 
                    src="/warn.png" 
                    className="absolute top-0 -translate-y-1/2 left-1/2 transform -translate-x-1/2 w-10 h-10 object-contain"
                  />
                  <h2 className="font-semibold md:text-md text-sm mt-3 text-center">Jangan Sebarkan Informasi Tidak Jelas!</h2>
                </div>
                <div className="flex flex-col max-w-3xs text-black p-3 rounded-lg border border-[var(--ijo)] border-2 relative">
                  <img 
                    src="/warn.png" 
                    className="absolute top-0 -translate-y-1/2 left-1/2 transform -translate-x-1/2 w-10 h-10 object-contain"
                  />
                  <h2 className="font-semibold md:text-md text-sm mt-3 text-center">Lapor ke Perangkat Desa!</h2>
                </div>
                <div className="flex flex-col max-w-3xs text-black p-3 rounded-lg border border-[var(--ijo)] border-2 relative">
                  <img 
                    src="/warn.png" 
                    className="absolute top-0 -translate-y-1/2 left-1/2 transform -translate-x-1/2 w-10 h-10 object-contain"
                  />
                  <h2 className="font-semibold md:text-md text-sm mt-3 text-center">Lapor ke Situs Resmi!</h2>
                </div>
                
              </div>
              
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
