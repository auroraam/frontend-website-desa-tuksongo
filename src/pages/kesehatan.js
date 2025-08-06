import Image from "next/image";
import Navbar from "@/component/navbar";
import Footer from "@/component/footer";
import { useState } from "react";
import FlipCard from "@/component/flipCard";

export default function Kesehatan() {
  const [activeStatistik, setActiveStatistik] = useState("Magelang");
  const isActive = (name) => activeStatistik === name;

  const [activeCara, setActiveCara] = useState("Nutrisi");
  const isActive2 = (key) => activeCara === key;

  return (
    <div>
      <Navbar />

      <div className="relative w-full md:h-[110vh] h-[100vh]">
        <Image
          src="/kesehatan-2.png" // ganti dengan path gambarnya
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
          <h2 className="text-sm sm:text-xl md:text-3xl mb-4 mt-5">
            <span className="bg-[var(--coklat)] text-white px-4 py-1 rounded-full" data-aos='fade-up'>
              <span className="font-bold">Cegah Stunting</span>, Wujudkan Generasi Hebat
            </span>
          </h2>

          <div className="xl:max-w-xl max-w-lg justify-items-center" data-aos="fade-up">
            <h1 className="text-lg md:text-xl mb-4 mt-2 text-[var(--coklat)] bg-white p-2 rounded-full shadow-black shadow-lg/40 w-fit">
              Apa itu <strong>Stunting</strong>?
            </h1>
            <div className="leading-relaxed text-sm sm:text-base max-w-xl text-[var(--coklat)] text-center" data-aos="fade-up">
              <p className="mb-2">Stunting adalah kondisi <strong>tinggi badan seorang anak lebih rendah dibandingkan tinggi badan rata-rata anak seusianya</strong>. Stunting disebabkan oleh banyak faktor. </p>
              <p className="mb-2"><strong>Dampak dari stunting tidak hanya pada pertumbuhan fisik, tetapi juga pada perkembangan kecerdasan anak</strong> yang dapat berpengaruh dalam jangka panjang kemampuan anak dalam belajar, bekerja, dan menjalani kehidupan yang sehat.</p>
              <p className="mb-2"><strong>Stunting sangat penting untuk diatasi</strong> agar kesejahteraan individu dan perkembangan masyarakat secara menyeluruh dapat terwujud. Selain itu, <strong>stunting merupakan indikator masalah gizi yang menjadi cerminan status sosial serta ekonomi suatu bangsa.</strong></p>
            </div>
          </div>

          <div className="xl:max-w-xl max-w-lg justify-items-center" data-aos="fade-up">
            <h1 className="text-lg md:text-xl mb-4 mt-2 text-[var(--coklat)] bg-white p-2 rounded-full shadow-black shadow-lg/40 w-fit">
              <strong>Statistik</strong> Kabupaten Magelang
            </h1>
            <div className="flex flex-col xl:max-w-xl max-w-lg items-center" data-aos="fade-up">
              <div className="flex flex-row gap-5">
                <div 
                  onClick={() => setActiveStatistik("Magelang")}
                  className={`text-center bg-white text-[var(--coklat)] border border-2 border-[var(--coklat)] p-2 rounded-lg transition-transform duration-200 ${isActive("Magelang") ? "scale-110" : "hover:scale-110"}`}
                >
                  <h2 className="font-semibold text-3xl">14.6%</h2>
                  <p>Angka Stunting</p><p>di Kabupaten</p><p>Magelang</p>
                </div>
                <div 
                  onClick={() => setActiveStatistik("Jateng")}
                  className={`text-center bg-white text-[var(--coklat)] border border-2 border-[var(--coklat)] p-2 rounded-lg transition-transform duration-200 ${isActive("Jateng") ? "scale-110" : "hover:scale-110"}`}
                >
                  <h2 className="font-semibold text-3xl">8.6%</h2>
                  <p>Angka Stunting</p><p>di Provinsi</p><p>Jawa Tengah</p>
                </div>
              </div>
              {activeStatistik === "Magelang" ? (
                <p className="mt-4 text-sm sm:text-base max-w-xl text-[var(--coklat)] text-justify"><strong>Dengan angka stunting sebesar 14.6%, Kabupaten Magelang masih berada di atas target nasional 14%.</strong> Hal ini menunjukkan perlunya upaya berkelanjutan untuk mengatasi malnutrisi. Tantangan seperti ketahanan pangan, akses layanan kesehatan yang tidak memadai, dan sanitasi yang buruk masih ada. Perlnya memperkuat intervensi yang berfokus pada peningkatan gizi ibu dan anak, mempromosikan pemberian ASI eksklusif, dan meningkatkan layanan kesehatan. Dengan menciptakan lingkungan yang mendukung dan mengatasi masalah ini, Kabupaten Magelang dapat bekerja menuju pencapaian target kesehatan dan secara signifikan mengurangi prevalensi stunting.</p>
              ) : (
                <p className="mt-4 text-sm sm:text-base max-w-xl text-[var(--coklat)] text-justify"><strong>Dengan angka stunting sebesar 8,6%, Provinsi Jawa Tengah telah berhasil menurunkan prevalensi stunting hingga berada di bawah target nasional yakni 14%.</strong> Keberhasilan di provinsi ini dapat dikaitkan dengan intervensi yang tepat sasaran, seperti program peningkatan gizi ibu hamil, peningkatan akses layanan kesehatan, dan partisipasi aktif komunitas dalam inisiatif kesehatan. Penurunan angka stunting menunjukkan efektivitas kerja sama antara pemerintah, penyedia layanan kesehatan, dan masyarakat lokal. Dukungan berkelanjutan dan strategi inovatif sangat penting untuk mempertahankan angka stunting ini.</p>
              )}
            </div>
          </div>

          <div className="flex flex-col gap-3 xl:max-w-xl max-w-lg items-center justify-items-center" data-aos="fade-up">
            <h1 className="text-lg md:text-xl mb-4 mt-2 text-[var(--coklat)] bg-white p-2 rounded-full shadow-black shadow-lg/40 w-fit">
              <strong>Penyebab</strong> Stunting
            </h1>
            <div className="flex flex-col xl:max-w-xl max-w-lg gap-3 justify-items-center items-center">
              <div className="flex flex-row justify-items-center items-center text-center bg-[var(--coklat)] text-white p-4 rounded-lg relative shadow-md transition-transform duration-300 shadow hover:shadow-lg/40 hover:shadow-black hover:scale-110">
                <i className="items-center fa-solid fa-plate-wheat text-white text-6xl"></i>
                <div className="flex flex-col">
                  <h2 className="font-bold text-base md:text-lg mb-1">Kekurangan Gizi</h2>
                <p className="text-sm">Stunting terjadi ketika anak mengalami kekurangan gizi kronis sejak dalam kandungan hingga usia dua tahun. <strong>Asupan nutrisi yang tidak memadai, seperti protein, vitamin, dan mineral penting, menyebabkan pertumbuhan tulang dan otak terhambat</strong> sehingga anak tidak mencapai tinggi badan sesuai usianya.</p>
                </div>
              </div>
              <div className="flex flex-row justify-items-center items-center text-center bg-[var(--coklat)] text-white p-4 rounded-lg relative shadow-md transition-transform duration-300 shadow hover:shadow-lg/40 hover:shadow-black hover:scale-110">
                <i className="items-center fa-solid fa-droplet text-white text-6xl"></i>
                <div className="flex flex-col">
                  <h2 className="font-bold text-base md:text-lg mb-1">Sanitasi dan Akses Air Bersih Kurang Baik</h2>
                <p className="text-sm">Kondisi sanitasi yang buruk dan kurangnya akses ke air bersih <strong>memudahkan penyebaran penyakit infeksi yang dapat mengganggu penyerapan gizi serta kesehatan pencernaan anak</strong>. Hal ini berdampak langsung pada tumbuh kembang anak yang tidak optimal.</p>
                </div>
              </div>
              <div className="flex flex-row justify-items-center items-center text-center bg-[var(--coklat)] text-white p-4 rounded-lg relative shadow-md transition-transform duration-300 shadow hover:shadow-lg/40 hover:shadow-black hover:scale-110">
                <i className="items-center fa-solid fa-bacteria text-white text-6xl"></i>
                <div className="flex flex-col">
                  <h2 className="font-bold text-base md:text-lg mb-1">Sering Infeksi dan Sakit</h2>
                <p className="text-sm"><strong>Anak yang sering mengalami infeksi atau sakit, seperti diare, infeksi saluran pernapasan, dan penyakit menular lainnya akan mengalami gangguan penyerapan nutrisi dan energi</strong> yang dibutuhkan untuk tumbuh dengan optimal, sehingga risiko stunting semakin meningkat.</p>
                </div>
              </div>
              <div className="flex flex-row justify-items-center items-center text-center bg-[var(--coklat)] text-white p-4 rounded-lg relative shadow-md transition-transform duration-300 shadow hover:shadow-lg/40 hover:shadow-black hover:scale-110">
                <i className="items-center fa-solid fa-person-breastfeeding text-white text-6xl"></i>
                <div className="flex flex-col">
                  <h2 className="font-bold text-base md:text-lg mb-1">Kesehatan Ibu Kurang Baik</h2>
                <p className="text-sm">Kesehatan ibu yang kurang baik selama masa kehamilan, misalnya kurangnya asupan gizi dan adanya penyakit, dapat <strong>menyebabkan pertumbuhan janin terhambat dan berat badan lahir rendah</strong>. Kondisi ini menjadi faktor risiko utama terjadinya stunting pada anak.</p>
                </div>
              </div>
              <div className="flex flex-row justify-items-center items-center text-center bg-[var(--coklat)] text-white p-4 rounded-lg relative shadow-md transition-transform duration-300 shadow hover:shadow-lg/40 hover:shadow-black hover:scale-110">
                <i className="items-center fa-solid fa-house-medical text-white text-6xl"></i>
                <div className="flex flex-col">
                  <h2 className="font-bold text-base md:text-lg mb-1">Kurangnya Akses ke Pelayanan Kesehatan</h2>
                <p className="text-sm">Terbatasnya akses ibu dan anak terhadap pelayanan kesehatan, seperti pemeriksaan rutin kehamilan, imunisasi, dan konsultasi gizi, <strong>menyebabkan masalah kesehatan dan gizi tidak terdeteksi atau tidak tertangani dengan baik</strong> sehingga meningkatkan risiko stunting.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="xl:max-w-xl max-w-lg justify-items-center" data-aos="fade-up">
            <h1 className="text-lg md:text-xl mb-4 mt-2 text-[var(--coklat)] bg-white p-2 rounded-full shadow-black shadow-lg/40 w-fit">
              Cara Mengatasi <strong>Stunting</strong>
            </h1>
            <div className="flex flex-col xl:max-w-xl max-w-sm items-center" data-aos="fade-up">
              <div className="flex flex-row gap-5">
                <div 
                  onClick={() => setActiveCara("Nutrisi")}
                  className={`text-xs md:text-sm font-semibold text-center bg-white text-[var(--coklat)] border border-2 border-[var(--coklat)] p-2 rounded-lg transition-transform duration-200 ${isActive2("Nutrisi") ? "scale-110" : "hover:scale-110"}`}
                >
                  <img 
                    src="/1.png"
                    className="mx-auto w-10 h-10 md:w-20 md:h-20 object-contain"
                  />
                  <p>Peningkatan</p><p>Nutrisi dan Gizi</p>
                </div>
                <div 
                  onClick={() => setActiveCara("Sanitasi")}
                  className={`text-xs md:text-sm font-semibold text-center bg-white text-[var(--coklat)] border border-2 border-[var(--coklat)] p-2 rounded-lg transition-transform duration-200 ${isActive2("Sanitasi") ? "scale-110" : "hover:scale-110"}`}
                >
                  <img 
                    src="/2.png"
                    className="mx-auto w-10 h-10 md:w-20 md:h-20 object-contain"
                  />
                  <p>Sanitasi dan</p><p>Lingkungan</p>
                </div>
                <div 
                  onClick={() => setActiveCara("Asuh")}
                  className={`text-xs md:text-sm font-semibold text-center bg-white text-[var(--coklat)] border border-2 border-[var(--coklat)] p-2 rounded-lg transition-transform duration-200 ${isActive2("Asuh") ? "scale-110" : "hover:scale-110"}`}
                >
                  <img 
                    src="/3.png"
                    className="mx-auto w-10 h-10 md:w-20 md:h-20 object-contain"
                  />
                  <p>Pola Asuh</p><p>dan Edukasi</p>
                </div>
                <div 
                  onClick={() => setActiveCara("Layanan")}
                  className={`text-xs md:text-sm font-semibold text-center bg-white text-[var(--coklat)] border border-2 border-[var(--coklat)] p-2 rounded-lg transition-transform duration-200 ${isActive2("Layanan") ? "scale-110" : "hover:scale-110"}`}
                >
                  <img 
                    src="/4.png"
                    className="mx-auto w-10 h-10 md:w-20 md:h-20 object-contain"
                  />
                  <p>Layanan</p><p>Kesehatan</p>
                </div>
              </div>
              {activeCara === "Nutrisi" && (
                <p className="mt-4 text-sm sm:text-base max-w-xl leading-relaxed text-[var(--coklat)] text-justify">Memberikan makanan <strong>bergizi lengkap dan seimbang</strong> untuk anak dan ibu hamil agar kebutuhan nutrisi terpenuhi, diantaranya dengan memberikan <strong>ASI eksklusif</strong> 6 bulan dan dilanjutkan sampai 2 tahun, <strong>MPASI bergizi tinggi</strong> dengan komposisi lengkap mulai usia 6 bulan, menerapkan <strong>&quot;Isi Piringku&quot;</strong> dengan gizi seimbang, menyusun menu harian yang kaya akan protein, vitamin, dan mineral seperti sayur, buah, sumber karbohidrat kompleks, dan protein hewani, memberikan suplemen vitamin dan mineral.</p>
              )}
              {activeCara === "Sanitasi" && (
                <p className="mt-4 text-sm sm:text-base max-w-xl leading-relaxed text-[var(--coklat)] text-justify">Dengan <strong>sanitasi yang memadai</strong> dapat mengurangi infeksi dan penyakit yang mempengaruhi penyerapan nutrisi. Hal yang dapat dilakukan diantaranya <strong>constructing jamban</strong> sehat dan memastikan penggunaannya secara rutin, menyediakan <strong>sumber air bersih</strong> yang layak dan meningkatkan kesadaran menjaga kebersihan lingkungan, cuci tangan pakai sabun, pola hidup bersih di lingkungan rumah, <strong>pengelolaan limbah</strong> yang baik</p>
              )}
              {activeCara === "Asuh" && (
                <p className="mt-4 text-sm sm:text-base max-w-xl leading-relaxed text-[var(--coklat)] text-justify">Hal yang dapat dilakukan diantaranya membangun <strong>kebiasaan hidup sehat yang berkelanjutan</strong>, melaksanakan kegiatan <strong>edukasi di fasilitas kesehatan</strong> dan komunitas secara reguler, melibatkan kader kesehatan dan tokoh masyarakat sebagai agen perubahan perilaku, <strong>edukasi gizi</strong> untuk ibu hamil dan menyusui, <strong>stimulasi perkembangan</strong> motorik dan kognitif anak, pemantauan pertumbuhan rutin di posyandu, <strong>kelas parenting</strong> tentang pola asuh aktif</p>
              )}
              {activeCara === "Layanan" && (
                <p className="mt-4 text-sm sm:text-base max-w-xl leading-relaxed text-[var(--coklat)] text-justify">Tenaga kesehatan harus <strong>aktif melakukan edukasi</strong> tentang pentingnya menjaga kesehatan ibu dan anak, termasuk pentingnya nutrisi yang cukup dan pemantauan kesehatan secara rutin. Dengan <strong>pengetahuan yang baik</strong>, orang tua lebih sadar dan mampu melakukan pencegahan stunting secara langsung di lingkungan mereka, <strong>imunisasi lengkap</strong> sesuai jadwal, implementasi gizi (tablet besi, vitamin A), <strong>pemeriksaan rutin</strong> berat badan dan tinggi badan, penanganan infeksi segera</p>
              )}
            </div>
          </div>

          <div className="xl:max-w-xl max-w-lg justify-items-center" data-aos="fade-up">
            <h1 className="text-lg md:text-xl mb-4 mt-2 text-[var(--coklat)] bg-white p-2 rounded-full shadow-black shadow-lg/40 w-fit">
              Apa itu <strong>Gizi Seimbang</strong>?
            </h1>
            <div className="leading-relaxed text-sm sm:text-base max-w-xl text-[var(--coklat)] text-center" data-aos="fade-up">
              <p className="mb-2"><strong>Gizi seimbang</strong> adalah pola makan yang mencakup <strong>semua zat gizi</strong> yang diperlukan untuk pertumbuhan optimal anak, terutama dalam 1.000 hari pertama kehidupan. Penerapan gizi seimbang dapat <strong>mencegah stunting</strong> dengan memastikan asupan <strong>nutrisi</strong> yang cukup dan berkualitas, serta mendukung perkembangan fisik dan kognitif anak.</p>
              <p className="mb-2">Untuk mempermudah penerapan gizi seimbang dalam kehidupan sehari-hari, <strong>Kementerian Kesehatan RI</strong> memperkenalkan panduan <strong>&quot;Isi Piringku&quot;</strong>. Panduan ini membantu masyarakat memahami porsi makan yang tepat agar kebutuhan gizi tercukupi, khususnya bagi anak-anak pada <strong>masa tumbuh kembang</strong>, sehingga dapat membantu mencegah stunting sejak dini.</p>
            </div>
          </div>

          <div className="xl:max-w-xl max-w-lg justify-items-center" data-aos="fade-up">
            <h1 className="text-lg md:text-xl mb-4 mt-2 text-[var(--coklat)] bg-white p-2 rounded-full shadow-black shadow-lg/40 w-fit">
              Konsep <strong>Isi Piringku</strong>
            </h1>
            <div className="flex flex-row flex-wrap justify-center gap-5">
              <FlipCard title="1/3 Sayuran" description="Sumber serat, vitamin, dan mineral untuk mendukung pertumbuhan dan perkembangan sel. Sayuran berwarna-warni memberikan berbagai nutrisi penting." color="var(--coklat)" />
              <FlipCard title="1/3 Makanan Pokok" description="Karbohidrat kompleks dari nasi, jagung, singkong, atau sagu sebagai sumber energi utama. Pilih variasi sumber karbohidrat untuk nutrisi lebih lengkap." color="var(--coklat)" />
              <FlipCard title="1/6 Lauk Hewani" description="Protein hewani (ikan, ayam, daging, telur) untuk pertumbuhan sel dan otot, serta mengandung zat besi penting untuk mencegah anemia." color="var(--coklat)" />
              <FlipCard title="1/6 Lauk Nabati + Buah" description="Protein nabati (tahu, tempe, kacang-kacangan) dan buah-buahan kaya vitamin C untuk penyerapan zat besi dan imunitas tubuh." color="var(--coklat)" />
            </div>
          </div>

          <div className="xl:max-w-xl max-w-lg justify-items-center items-center" data-aos="fade-up">
            <h1 className="text-lg md:text-xl mb-4 mt-2 text-[var(--coklat)] bg-white p-2 rounded-full shadow-black shadow-lg/40 w-fit">
              Gambaran <strong>Isi Piringku</strong>?
            </h1>
            <div className="items-center overflow-hidden" data-aos='fade-up'>
              <Image
                src="/isi-piringku.png"
                width={225}
                height={350}
                className="object-contain mx-auto"
              />
            </div>
            <p className="text-sm sm:text-base mb-4 text-center text-lg md:text-xl text-[var(--coklat)] mb-2"><strong>Fakta Penting:</strong> 1.000 Hari Pertama Kehidupan (mulai dari kandungan hingga usia 2 tahun) adalah periode kritis pencegahan stunting. Penerapan <strong>&quot;Isi Piringku&quot;</strong> sejak masa kehamilan hingga anak usia balita memberikan manfaat optimal untuk pertumbuhan anak.</p>
          </div>
        </div>

        <div className="relative z-10   justify-items-center">
          <h2 className="text-lg md:text-3xl mb-4 mt-5">
            <span className="bg-[var(--coklat)] text-white px-4 py-1 rounded-full" data-aos='fade-up'>
              Pariwisata Sehat, <span className="font-bold">Udara Segar</span>
            </span>
          </h2>

          <div className="xl:max-w-xl max-w-lg justify-items-center" data-aos="fade-up">
            <div className="rounded-3xl leading-relaxed text-sm sm:text-base max-w-xl text-white font-semibold bg-[var(--coklat)] text-center" data-aos="fade-up">
              <p className="p-2 mb-2 xl:mb-0">Tulisan ini disusun untuk mendukung terwujudnya pariwisata yang sehat dan nyaman bagi semua pengunjung, termasuk anak-anak, ibu hamil, dan lansia. Dengan pendekatan kolaboratif, kami mengajak masyarakat dan wisatawan untuk menjaga kualitas udara di area wisata demi menciptakan pengalaman berwisata yang menyenangkan.</p>
            </div>
          </div>

          <div className="flex flex-col md:max-w-3xl max-w-xl" data-aos="fade-up">
            <div className="gap-3 flex flex-row justify-items-center items-center text-center text-[var(--coklat)] relative">
              <div className="flex flex-col text-left">
                <h2 className="font-bold text-4xl text-[var(--coklat)]">Fakta</h2>
                <h2 className="font-bold text-4xl mb-1 text-[var(--coklat)]">Singkat</h2>
                <p className="font-semibold text-xs bg-[var(--coklat)] text-white rounded-lg p-2 w-fit">Rokok dan Wisata</p>
              </div>
              <p className="text-sm italic font-light text-justify self-end mb-2 md:mb-0">Dilansir dari beritamagelang.id, pada tahun 2022 Bupati Magelang melalui Asisten Pemerintahan dan Kesejahteraan Rakyat, Nanda Cahya Pribadi, menyampaikan hasil survei mengenai penerapan Kawasan Tanpa Rokok (KTR) dalam rangka menciptakan ruang publik yang lebih sehat dan nyaman bagi masyarakat.</p>
            </div>
            <div className="gap-3 flex flex-row items-start justify-start text-[var(--coklat)] relative">
              <img 
                src="/kesehatan-chart.png"
                className="w-35 h-25 object-contain"
              />
              <div className="flex flex-col text-left self-end">
                <h2 className="font-semibold text-xl mb-1 text-[var(--coklat)]">87,3% menyatakan setuju dengan penerapan KTR</h2>
                <p className="italic font-light text-sm text-[var(--coklat)] mb-2 xl:mb-0">karena dinilai menciptakan ruang publik yang lebih nyaman dan bebas asap rokok.</p>
              </div>
            </div>
            <div className="gap-3 flex flex-row items-start justify-start text-[var(--coklat)] relative">
              <img 
                src="/kesehatan-rokok.png"
                className="w-35 h-25 object-contain"
              />
              <div className="flex flex-col text-left self-end">
                <h2 className="font-semibold text-xl mb-1 text-[var(--coklat)]">12,7% menyatakan tidak setuju dengan penerapan KTR</h2>
                <p className="italic font-light text-sm text-[var(--coklat)]">karena merasa ruang gerak untuk merokok terbatas dan belum tersedianya ruang khusus merokok.</p>
              </div>
            </div>
          </div>

          <div className="md:max-w-3xl max-w-xl justify-items-center items-center" data-aos="fade-up">
            <h1 className="text-lg md:text-xl mb-4 mt-2 text-[var(--coklat)] bg-white p-2 rounded-full shadow-black shadow-lg/40 w-fit">
              Asap Rokok di <strong>Kawasan Wisata</strong>
            </h1>
            <div className="flex flex-row justify-items-center gap-5 items-start" data-aos="fade-up">
              <div className="flex flex-col gap-2 items-center">
                <h2 className="font-bold text-2xl mb-1 bg-[var(--coklat)] text-white rounded-xl w-fit p-4">1</h2>
                <p className="text-sm text-[var(--coklat)] font-semibold text-center">Asap rokok dapat mengurangi kenyamanan sebagian pengunjung, terutama anak-anak, ibu hamil, dan penderita asma.</p>
              </div>
              <div className="flex flex-col gap-2 items-center">
                <h2 className="font-bold text-2xl mb-1 bg-[var(--coklat)] text-white rounded-xl w-fit p-4">2</h2>
                <p className="text-sm text-[var(--coklat)] font-semibold text-center">Udara bersih penting untuk menjaga suasana alami destinasi wisata.</p>
              </div>
              <div className="flex flex-col gap-2 items-center">
                <h2 className="font-bold text-2xl mb-1 bg-[var(--coklat)] text-white rounded-xl w-fit p-4">3</h2>
                <p className="text-sm text-[var(--coklat)] font-semibold text-center">Tanpa pengelolaan yang tepat, puntung rokok juga dapat menambah sampah di area wisata.</p>
              </div>
            </div>
          </div>

          <div className="md:max-w-xl max-w-lg justify-items-center" data-aos="fade-up">
            <h1 className="text-lg md:text-xl mb-4 mt-2 text-[var(--coklat)] bg-white p-2 rounded-full shadow-black shadow-lg/40 w-fit">
              Solusi: <strong>Zona Nyaman Wisata</strong>
            </h1>
            <div className="leading-relaxed text-sm sm:text-base max-w-xl text-[var(--coklat)] text-center" data-aos="fade-up">
              <p className="italic font-light text-sm text-[var(--coklat)]">Zona nyaman wisata bukan berarti melarang, melainkan mengatur ruang agar semua pengunjung (anak-anak, lansia, dan ibu hamil) dan warga merasa nyaman selama berkunjung.</p>
              <ul className="font-semibold list-disc pl-5 space-y-2 text-[var(--coklat)] text-left">
                <li>
                  Penyediaan tempat khusus merokok yang merupakan ruang terbuka dan berhubungan langsung dengan udara luar.
                </li>
                <li>
                  Penempatan tanda sederhana &quot;Area Bebas Asap&quot; di ruang tertutup dan di wilayah yang berdekatan dengan kelompok rentan
                  seperti anak-anak, ibu hamil, penderita asma, dan lansia.
                </li>
                <li>
                  Penyediaan tempat sampah khusus puntung di area merokok.
                </li>
              </ul>
            </div>
          </div>

          <div className="md:max-w-xl max-w-lg justify-items-center" data-aos="fade-up">
            <h1 className="text-lg md:text-xl mb-4 mt-2 text-[var(--coklat)] bg-white p-2 rounded-full shadow-black shadow-lg/40 w-fit">
              Peran <strong>Pengunjung dan Warga</strong>
            </h1>
            <div className="flex flex-row justify-items-center gap-5 items-center" data-aos="fade-up">
              <div className="flex flex-col gap-2 items-center">
                <img 
                  src="/kesehatan-pengunjung.png"
                  className="w-40 h-30 object-contain"
                />
                <p className="text-base text-[var(--coklat)] font-semibold text-center">Pengunjung</p>
                <ul className="font-light italic text-sm list-disc pl-5 space-y-1 text-[var(--coklat)] text-left">
                  <li>
                    Hindari merokok di area ramai
                  </li>
                  <li>
                    Gunakan tempat sampah puntung jika tersedia
                  </li>
                  <li>
                    Hormati kenyamanan pengunjung lain
                  </li>
                </ul>
              </div>
              <div className="flex flex-col gap-2 items-center">
                <img 
                  src="/kesehatan-warga.png"
                  className="w-40 h-30 object-contain"
                />
                <p className="text-base text-[var(--coklat)] font-semibold text-center">Warga dan Pengelola</p>
                <ul className="font-light italic text-sm list-disc pl-5 space-y-1 text-[var(--coklat)] text-left">
                  <li>
                    Menyediakan ruang merokok alternatif
                  </li>
                  <li>
                    Menjaga kebersihan dan mengingatkan dengan sopan
                  </li>
                  <li>
                    Menjadi contoh dalam menjaga citra desa wisata sehat
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="md:max-w-md max-w-sm justify-items-center p-5" data-aos="fade-up">
            <div className="leading-relaxed text-sm max-w-xl text-[var(--coklat)] text-center" data-aos="fade-up">
              <p className="font-semibold italic">&quot;Pariwisata yang sehat dimulai dari udara yang bersih dan sikap saling menghormati.&quot;</p>
              <p className="font-light mb-2 xl:mb-0"> Mari kita jaga bersama kenyamanan desa agar selalu menjadi tujuan wisata yang ramah anak, ramah lingkungan, dan berkesan bagi semua.</p>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}