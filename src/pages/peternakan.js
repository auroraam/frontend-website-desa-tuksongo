import Image from "next/image";
import Navbar from "@/component/navbar";
import Footer from "@/component/footer";
import { useState } from "react";
import FlipCard2 from "@/component/flipCard2";

export default function Peternakan() {
  return (
    <div>
      <Navbar />

      <div className="relative w-full md:h-[110vh] h-[100vh]">
        <Image
          src="/peternakan-bg.jpg" // ganti dengan path gambarnya
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
            <span className="bg-[var(--oren)] text-white px-4 py-1 rounded-full" data-aos='fade-up'>
              <span className="font-bold">BioDesa</span>
            </span>
          </h2>

          <div className="xl:w-[40%] w-[70%] item-center overflow-hidden" data-aos='fade-up'>
            <Image
              src="/peternakan-biodesa.jpg"
              width={500}
              height={500}
              className="object-cover w-full h-full mb-5"
            />
          </div>

          <div className="justify-items-center flex md:flex-row flex-col gap-10" data-aos="fade-up">
            <div className="xl:max-w-xl max-w-lg justify-items-center" data-aos="fade-up">
              <h1 className="text-lg md:text-xl mb-4 mt-2 text-[var(--oren)] bg-white p-2 rounded-full shadow-black shadow-lg/40 w-fit">
                <strong>Mengapa BioDesa?</strong>
              </h1>
              <div className="leading-relaxed text-sm sm:text-base max-w-xl text-black text-center" data-aos="fade-up">
                <p className="mb-2">Pupuk organik memiliki unsur hara yang lengkap baik unsur makro maupun mikro serta diyakini dapat memperbaiki struktur maupun sifat fisik tanah dalam mengikat air. Pupuk organik juga mengandung asam organik seperti asam humik, asam fulik, dan hormon yang sangat baik untuk tumbuhan. Selain itu, pupuk organik juga dapat menjadi penyangga pH tanah sehingga unsur hara tanah berada dalam kondisi tersedia bagi tanaman.</p>
              </div>
            </div>
            <div className="xl:max-w-xl max-w-lg justify-items-center" data-aos="fade-up">
              <h1 className="text-lg md:text-xl mb-4 mt-2 text-[var(--oren)] bg-white p-2 rounded-full shadow-black shadow-lg/40 w-fit">
                <strong>Pupuk Kandang</strong>
              </h1>
              <div className="leading-relaxed text-sm sm:text-base max-w-xl text-black text-center" data-aos="fade-up">
                <p className="mb-2">Pupuk kandang adalah pupuk yang berasal dari kotoran hewan seperti kambing, domba, ayam, dan sapi. Pupuk kandang terbagi menjadi pupuk yang kering dan pupuk basah. Pupuk basah dapat berasal dari air kencing (urine) hewan. Pupuk kandang mengandung unsur hara makro (fosfor, nitrogen, dan kalium) dan mikro (kalsium, magnesium, belerangnatrium, besi, tembaga, dan molibdenum). Kandungan nitrogen dalam urine hewan ternak tiga kali lebih besar daripada kotoran padat.</p>
              </div>
            </div>
          </div>

          <div className="justify-items-center flex md:flex-row flex-col gap-10" data-aos="fade-up">
            <div className="xl:max-w-xl max-w-lg justify-items-center" data-aos="fade-up">
              <h1 className="text-lg md:text-xl mb-4 mt-2 text-[var(--oren)] bg-white p-2 rounded-full shadow-black shadow-lg/40 w-fit">
                <strong>Jenis Pupuk Kandang</strong>
              </h1>
              <div className="justify-items-center flex md:flex-row flex-col gap-10" data-aos="fade-up">
                <FlipCard2 title="PUPUK PANAS" image="/peternakan-pupuk 1.png" description="Pupuk yang berasal dari kotoran hewan yang diuraikan mikroorganisme secara cepat sehingga menimbulkan panas. Contoh: pupuk kotoran kambing, kuda, dan ayam." />
                <FlipCard2 title="PUPUK DINGIN" image="/peternakan-pupuk 2.png" description=" Pupuk yang berasal dari kotoran hewan yang diuraikan secara perlahan oleh mikroorganisme sehingga tidak menimbulkan panas. Contoh: pupuk kotoran sapi, kerbau, dan babi." />
              </div>
            </div>
          </div>
        </div>

        <div className="relative z-10 justify-items-center">
          <h2 className="text-lg md:text-3xl mb-4 mt-5">
            <span className="bg-[var(--oren)] text-white px-4 py-1 rounded-full" data-aos='fade-up'>
              <span className="font-bold">Pembuatan Pupuk Organik</span>
            </span>
          </h2>

          <div className="xl:w-[40%] w-[70%] item-center overflow-hidden" data-aos='fade-up'>
            <Image
              src="/peternakan-pembuatan.jpg"
              width={500}
              height={500}
              className="object-cover w-full h-full mb-5"
            />
          </div>

          <div className="gap-10 flex flex-row md:max-w-xl max-w-lg justify-items-center" data-aos="fade-up">
            <div className="flex-col justify-items-center">
              <h1 className="font-semibold text-lg md:text-xl mb-4 mt-2 text-[var(--oren)] bg-white p-2 rounded-full shadow-black shadow-lg/40 w-fit">
                Bahan
              </h1>
              <div className="leading-relaxed text-sm sm:text-base max-w-xl text-[var(--oren)] text-center">
                <ul className="list-disc pl-5 space-y-2 text-black text-left" data-aos="fade-up">
                  <li>1 ton kotoran kambing</li>
                  <li>200 kg kapur pertanian (dolomit)</li>
                  <li>200 kg abu/sekam/bekas gergaji</li>
                  <li>4 botol EM4 (decomposer)</li>
                </ul>
              </div>
            </div>
            <div className="flex-col justify-items-center">
              <h1 className="font-semibold text-lg md:text-xl mb-4 mt-2 text-[var(--oren)] bg-white p-2 rounded-full shadow-black shadow-lg/40 w-fit">
                Alat
              </h1>
              <div className="leading-relaxed text-sm sm:text-base max-w-xl text-[var(--oren)] text-center">
                <ul className="list-disc pl-5 space-y-2 text-black text-left" data-aos="fade-up">
                  <li>Cangkul</li>
                  <li>Terpal</li>
                  <li>Ember</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="gap-10 flex flex-row md:max-w-2xl max-w-lg justify-items-center" data-aos="fade-up">
            <div className="flex-col justify-items-center">
              <h1 className="font-semibold text-lg md:text-xl mb-4 mt-2 text-[var(--oren)] bg-white p-2 rounded-full shadow-black shadow-lg/40 w-fit">
                Tahap Pembuatan Pupuk
              </h1>
              <div className="leading-relaxed text-sm sm:text-base md:max-w-2xl max-w-lg text-[var(--oren)] text-center">
                <ul className="list-disc pl-5 space-y-2 text-black text-justify" data-aos="fade-up">
                  <li>Sebelum membuat campuran, hancurkan terlebih dahulu kotoran yang  dicampur dengan urea (1%)</li>
                  <li>Siapkan tempat atau hamparan yang ternaungi </li>
                  <li>Lakukan proses pencampuran bahan-bahan</li>
                  <li>Siapkan EM4 dari dosis yang ditetapkan yang dilarutkan dalam air sampai kadar airnya mencapai 40%</li>
                  <li>Lapisan berikutnya dibuat hingga semua bahan habis</li>
                  <li>Timbunan ditutup rapat dengan terpal </li>
                  <li>Diamkan selama 1 minggu. Setelah 1 minggu terpal dibuka dan timbunan diaduk dengan tujuan pemberian aerasi pada proses pengomposan. Proses pengomposan yang berhasil akan timbul panas dan dapat dirasakan saat pembongkaran gundukan</li>
                  <li>Setelah 3 minggu, kompos sudah bisa dibongkar dan diangin-anginkan supaya menghilangkan bau amoniak dan sudah dapat dipakai</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="relative z-10   justify-items-center">
          <h2 className="text-lg md:text-2xl mb-4 mt-5">
            <span className="font-semibold text-[var(--oren)] bg-white p-2 rounded-full shadow-black shadow-lg/40 w-fit px-4 py-1 rounded-full" data-aos='fade-up'>
              Pengaplikasian pada Tanaman
            </span>
          </h2>

          <div className="xl:max-w-xl max-w-lg justify-items-center" data-aos="fade-up">
            <div className="rounded-3xl leading-relaxed text-sm sm:text-base max-w-xl text-black italic text-center" data-aos="fade-up">
              <p className="p-2 mb-2 xl:mb-0">Aplikasi pupuk organik untuk tanaman musiman dapat dilakukan bersamaan dengan pengolahan lahan, pemupukan pada tanaman tahunan sebaiknya dibenam pada bagian ujung perakaran. Setiap tanaman umumnya memiliki ujung perakaran berada tepat di bawah daun paling ujung dari tanaman tersebut. </p>
            </div>
          </div>

          <div className="md:max-w-xl max-w-lg justify-items-center">
            <h1 className="font-semibold text-xs md:text-sm mb-4 mt-4 text-[var(--oren)] bg-white p-2 rounded-full shadow-black shadow-lg/40 w-fit">
              Daftar Pustaka
            </h1>
            <p className="text-black text-xs">
              <span className="block text-justify">Dinas Ketahanan Pangan dan Pertanian Kabupaten Ngawi. (2022). Pembuatan Pupuk Kandang dari Kohe Kambing</span>
              <span className="block text-justify">Sjofjan, O. (2021). Pengolahan Kotoran Ternak Sebagai Sumber Pupuk dan Nilai Tambah Ekonomi Masyarakat di Masa Pandemi. Prosiding Seminar Nasional Lahan Suboptimal ke-9 Tahun 2021. 19-21.</span>
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
    