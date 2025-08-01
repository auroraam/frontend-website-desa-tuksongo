import Image from "next/image";
import Navbar from "@/component/navbar";
import Footer from "@/component/footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="relative w-full md:h-[110vh] h-[100vh]">
        <Image
          src="/beranda.jpg" // ganti dengan path gambarnya
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
          <h2 className="text-xl md:text-3xl mb-6">
            <span className="bg-[var(--oren)] text-white px-4 py-1 rounded-full" data-aos='fade-up'>
              Kenali Desa <span className="font-bold">Tuksongo</span>
            </span>
          </h2>
          <div className="flex flex-col xl:flex-row items-center gap-5 md:gap-10 justify-items-center">
            <div className="w-48 h-48 md:w-72 md:h-72 rounded-full overflow-hidden border-8 border-[var(--oren)]" data-aos='fade-right'>
              <Image
                src="/beranda.jpg"
                alt="Sawah"
                width={400}
                height={400}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="text-justify leading-relaxed text-sm sm:text-base max-w-xl text-black" data-aos='fade-left'>
              <p className="mb-2">
                Desa <strong>Tuksongo</strong> adalah salah satu desa yang terletak di Kecamatan <strong>Borobudur</strong>, 
                Kabupaten <strong>Magelang</strong>, <strong>Jawa Tengah</strong>. Berada di kawasan strategis yang berdekatan 
                langsung dengan <strong> Candi Borobudur</strong> (salah satu warisan dunia <strong>UNESCO</strong>). Desa 
                <strong> Tuksongo</strong> memiliki potensi besar dalam sektor budaya, pariwisata, dan pertanian.
              </p>
              <p className="mb-2">
                Secara <strong>geografis</strong>, desa ini dikelilingi oleh panorama alam yang asri, dengan latar belakang 
                <strong> pegunungan Menoreh</strong> serta hamparan sawah dan ladang tembakau yang menjadi salah satu komoditas 
                utama masyarakat setempat. Tuksongo juga dikenal sebagai desa yang kaya akan nilai-nilai <strong>tradisional</strong>
                , <strong>gotong royong</strong>, serta kegiatan <strong>seni-budaya</strong> seperti <strong>jathilan</strong> dan 
                <strong> karawitan</strong>.
              </p>
              <p className="mb-2">
                Masyarakat <strong>Tuksongo</strong> sebagian besar bermata pencaharian sebagai <strong>petani</strong>, pelaku 
                <strong> UMKM</strong>, dan <strong>penggiat wisata</strong> berbasis komunitas. Dalam beberapa tahun terakhir, 
                desa ini terus berkembang menjadi destinasi wisata alternatif yang menawarkan pengalaman otentik, mulai dari 
                <strong> homestay, kerajinan lokal</strong>, hingga wisata budaya dan edukatif.
              </p>
              <p>
                Dengan semangat partisipatif dan potensi yang dimiliki, Desa <strong>Tuksongo</strong> kini menjadi bagian penting 
                dalam pengembangan <strong>kawasan Borobudur</strong> sebagai destinasi pariwisata berkelanjutan berbasis masyarakat.
              </p>
              {/* kamu bisa lanjutkan sesuai isi teks kamu */}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
