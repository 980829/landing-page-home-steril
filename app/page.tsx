"use client";

import Image from "next/image";
import { useEffect, useRef, useState, type ReactNode } from "react";
import TestimoniSlider from "@/components/TestimoniSlider";

function StatCard({
  value,
  lines,
  icon,
}: {
  value: React.ReactNode;
  lines: React.ReactNode[];
  icon?: React.ReactNode;
}) {
  return (
    <div
      className="
        w-full
        rounded-2xl
        border border-slate-200
        bg-white
        px-5 py-4
        shadow-sm
      "
    >
      <div className="flex items-center gap-4">
        {/* Icon */}
        <div
          className="
            flex h-10 w-10 shrink-0 items-center justify-center
            rounded-2xl
            bg-slate-50
            border border-slate-200
          "
        >
          {icon}
        </div>

        {/* Value */}
        <div className="shrink-0 text-[18px] sm:text-[20px] leading-none font-bold text-red-700">
          {value}
        </div>

        {/* Text */}
        <div className="min-w-0 flex-1 pr-1">
          <div className="space-y-0.5 leading-[1.15]">
            {lines.map((line, i) => (
              <div
                key={i}
                className={
                  i === 0
                    ? "text-[12px] sm:text-[13px] font-semibold text-slate-900 whitespace-normal break-normal"
                    : "text-[12px] sm:text-[13px] font-medium text-slate-600 whitespace-normal break-normal"
                }
              >
                {line}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}



export default function Home() {
  const [openJasaMobile, setOpenJasaMobile] = useState(false);
  const [openMobile, setOpenMobile] = useState(false);
  const [openVideo, setOpenVideo] = useState(false);
  type CityKey =
    | "Bandung"
    | "Sukabumi"
    | "Cirebon"
    | "Cikarang"
    | "Serang"
    | "Banten"
    | "Cipanas"
    | "Karawang";

  const CITIES: Array<{
    key: CityKey;
    title: string;
    desc: string;
    image: string;
    badgeTitle: string;
    badgeSub: string;
  }> = [
    {
      key: "Bandung",
      title: "Bandung",
      desc: "Layanan tersedia 24/7",
      image: "/maps/bandung.webp",
      badgeTitle: "BANDUNG",
      badgeSub: "Coverage Area",
    },
    {
      key: "Sukabumi",
      title: "Sukabumi",
      desc: "Layanan tersedia 24/7",
      image: "/maps/sukabumi.webp",
      badgeTitle: "SUKABUMI",
      badgeSub: "Coverage Area",
    },
    {
      key: "Cirebon",
      title: "Cirebon",
      desc: "Layanan tersedia 24/7",
      image: "/maps/cirebon.webp",
      badgeTitle: "CIREBON",
      badgeSub: "Coverage Area",
    },
    {
      key: "Cikarang",
      title: "Cikarang",
      desc: "Layanan tersedia 24/7",
      image: "/maps/cikarang.webp",
      badgeTitle: "CIKARANG",
      badgeSub: "Coverage Area",
    },
    {
      key: "Serang",
      title: "Serang",
      desc: "Layanan tersedia 24/7",
      image: "/maps/serang.webp",
      badgeTitle: "SERANG",
      badgeSub: "Coverage Area",
    },
    {
      key: "Banten",
      title: "Banten",
      desc: "Layanan tersedia 24/7",
      image: "/maps/banten.webp",
      badgeTitle: "BANTEN",
      badgeSub: "Coverage Area",
    },
    {
      key: "Cipanas",
      title: "Cipanas",
      desc: "Layanan tersedia 24/7",
      image: "/maps/cipanas.webp",
      badgeTitle: "CIPANAS",
      badgeSub: "Coverage Area",
    },
    {
      key: "Karawang",
      title: "Karawang",
      desc: "Layanan tersedia 24/7",
      image: "/maps/karawang.webp",
      badgeTitle: "KARAWANG",
      badgeSub: "Coverage Area",
    },
  ];

  const [activeCity, setActiveCity] = useState<CityKey>("Bandung");
  const [isSwitching, setIsSwitching] = useState(false);

  const activeData = CITIES.find((c) => c.key === activeCity) ?? CITIES[0];

  function handleSelectCity(next: CityKey) {
    if (next === activeCity) return;

    setIsSwitching(true);
    window.setTimeout(() => {
      setActiveCity(next);
      setIsSwitching(false);
    }, 180);
  }

  const [openJasa, setOpenJasa] = useState(false);
  const jasaRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (jasaRef.current && !jasaRef.current.contains(e.target as Node)) {
        setOpenJasa(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Prevent background scroll when mobile menu / modal is open
  useEffect(() => {
    const shouldLock = openMobile || openVideo;
    document.documentElement.classList.toggle("overflow-hidden", shouldLock);
    document.body.classList.toggle("overflow-hidden", shouldLock);
    return () => {
      document.documentElement.classList.remove("overflow-hidden");
      document.body.classList.remove("overflow-hidden");
    };
  }, [openMobile, openVideo]);

return (
  <div className="min-h-screen bg-white">
    {/* Header */}
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/80 backdrop-blur">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <a href="https://home-steril.com/" className="h-9 w-auto object-contain">
            <Image
              src="/logo-home-steril.png"
              alt="Home Steril"
              width={140}
              height={40}
              priority
              className="h-10 w-auto object-contain"
            />
          </a>

          {/* Nav */}
          <nav className="hidden items-center gap-6 text-sm text-slate-700 md:flex">
            <div ref={jasaRef} className="relative">
              <button
                type="button"
                onClick={() => setOpenJasa((v) => !v)}
                className="flex items-center gap-1 hover:text-slate-950"
              >
                Pilihan Jasa
                <svg
                  className={`h-4 w-4 transition-transform duration-200 ${
                    openJasa ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
    {/* DROPDOWN BOX */}
    {openJasa && (
      <div className="absolute left-0 top-full z-50 mt-3 w-[520px] rounded-xl border border-slate-200 bg-white shadow-xl">
        <div className="grid grid-cols-2 gap-4 p-4 text-sm">
          <a
            href="https://home-steril.com/services/jasa-asisten-rumah-tangga"
            className="rounded-lg p-3 hover:bg-slate-50"
            onClick={() => setOpenJasa(false)}
          >
            <p className="font-semibold text-slate-900">
              JASA ASISTEN RUMAH TANGGA | BERGARANSI* & GRATIS TRANSPORT*
            </p>
            <p className="text-slate-500 text-xs mt-1">
              Asisten harian profesional & terpercaya
            </p>
          </a>

          <a
            href="https://home-steril.com/services/general-cleaning-jasa-bersih-rumah"
            className="rounded-lg p-3 hover:bg-slate-50"
            onClick={() => setOpenJasa(false)}
          >
            <p className="font-semibold text-slate-900">
              JASA KEBERSIHAN RUMAH | BERGARANSI* & GRATIS TRANSPORT*
            </p>
            <p className="text-slate-500 text-xs mt-1">
              jasa pembersih rumah terdekat harga mulai Rp 90 Rb an saja!!
            </p>
          </a>

          <a
            href="https://home-steril.com/services/special-cleaning"
            className="rounded-lg p-3 hover:bg-slate-50"
            onClick={() => setOpenJasa(false)}
          >
            <p className="font-semibold text-slate-900">
              JASA DEEP CLEANING RUMAH | BERGARANSI* & GRATIS TRANSPORT*
            </p>
            <p className="text-slate-500 text-xs mt-1">
              jasa bersih kamar mandi bergaransi
            </p>
          </a>

          <a
            href="https://home-steril.com/services/wet-cleaning-sofa"
            className="rounded-lg p-3 hover:bg-slate-50"
            onClick={() => setOpenJasa(false)}
          >
            <p className="font-semibold text-slate-900">
              JASA CUCI SOFA - LAUNDRY SOFA | BERGARANSI* & GRATIS TRANSPORT*
            </p>
            <p className="text-slate-500 text-xs mt-1">
              Jasa Cuci Sofa, Cuci Kursi Kantor dan Cuci Kursi Makan Bergaransi*
            </p>
          </a>
        </div>
      </div>
    )}
  </div>

  {/* MENU LAIN */}
  <a className="hover:text-slate-950" href="#faq">
    FAQ
  </a>
  <a className="hover:text-slate-950" href="#kemitraan">
    Kemitraan
  </a>
  <a className="hover:text-slate-950" href="https://home-steril.com/blog">
    Blog
  </a>
  <a className="hover:text-slate-950" href="https://home-steril.com/about">
    Tentang Kami
  </a>
</nav>

{/* CTA */}
<div className="flex items-center gap-3">
  <button
    className="hidden sm:inline-flex rounded-xl border border-slate-200 px-3 py-2 text-sm font-semibold hover:bg-slate-50"
    aria-label="Toggle"
    type="button"
  >
    ⚙️
  </button>

  <a
    href="https://api.whatsapp.com/send/?phone=62888908769669&text=Halo+Home+Steril%2C+saya+ingin+info+kemitraan.&type=phone_number&app_absent=0"
    className="hidden md:inline-flex items-center justify-center rounded-xl bg-red-700 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-800"
  >
    Pesan Sekarang
  </a>

  {/* HAMBURGER (MOBILE) */}
  <button
    type="button"
    className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white hover:bg-slate-50"
    aria-label="Buka menu"
    onClick={() => {
      setOpenMobile((v) => !v);
      setOpenJasa(false);
    }}
  >
    <span className="text-xl leading-none">{openMobile ? "✕" : "☰"}</span>
  </button>
</div>
</div>

{/* MOBILE MENU PANEL */}
{openMobile && (
  <div className="md:hidden pb-3">
    <div className="rounded-2xl border border-slate-200 bg-white shadow-sm p-3">
      <div className="flex flex-col text-sm text-slate-700">

        {/* PILIHAN JASA (MOBILE) */}
        <button
          type="button"
          onClick={() => setOpenJasaMobile((v) => !v)}
          className="flex w-full items-center justify-between rounded-xl px-3 py-3 hover:bg-slate-50"
        >
          <span>Pilihan Jasa</span>
          <svg
            className={`h-4 w-4 transition-transform duration-200 ${
              openJasaMobile ? "rotate-180" : ""
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>

        {openJasaMobile && (
          <div className="mt-1 space-y-1 rounded-xl border border-slate-200 bg-white p-2">
            <a
              href="https://home-steril.com/services/jasa-asisten-rumah-tangga"
              className="block rounded-lg p-3 hover:bg-slate-50"
              onClick={() => {
                setOpenMobile(false);
                setOpenJasaMobile(false);
              }}
            >
              <p className="font-semibold text-slate-900 text-sm">
                Jasa Asisten Rumah Tangga
              </p>
              <p className="text-slate-500 text-xs mt-1">
                Asisten harian profesional & terpercaya
              </p>
            </a>

            <a
              href="https://home-steril.com/services/general-cleaning-jasa-bersih-rumah"
              className="block rounded-lg p-3 hover:bg-slate-50"
              onClick={() => {
                setOpenMobile(false);
                setOpenJasaMobile(false);
              }}
            >
              <p className="font-semibold text-slate-900 text-sm">
                Jasa Kebersihan Rumah
              </p>
              <p className="text-slate-500 text-xs mt-1">
                Harga mulai Rp 90 rb-an
              </p>
            </a>

            <a
              href="https://home-steril.com/services/special-cleaning"
              className="block rounded-lg p-3 hover:bg-slate-50"
              onClick={() => {
                setOpenMobile(false);
                setOpenJasaMobile(false);
              }}
            >
              <p className="font-semibold text-slate-900 text-sm">
                Jasa Deep Cleaning Rumah
              </p>
              <p className="text-slate-500 text-xs mt-1">
                jasa bersih kamar mandi bergaransi
              </p>
            </a>

            <a
              href="https://home-steril.com/services/wet-cleaning-sofa"
              className="block rounded-lg p-3 hover:bg-slate-50"
              onClick={() => {
                setOpenMobile(false);
                setOpenJasaMobile(false);
              }}
            >
              <p className="font-semibold text-slate-900 text-sm">
                Jasa Cuci Sofa
              </p>
              <p className="text-slate-500 text-xs mt-1">
                Sofa, kursi kantor & kursi makan bergaransi*
              </p>
            </a>
          </div>
        )}

        <a
          href="#kemitraan"
          className="rounded-xl px-3 py-3 hover:bg-slate-50"
          onClick={() => setOpenMobile(false)}
        >
          Kemitraan
        </a>

        <a
          href="#faq"
          className="rounded-xl px-3 py-3 hover:bg-slate-50"
          onClick={() => setOpenMobile(false)}
        >
          FAQ
        </a>

        <a
          href="https://home-steril.com/blog"
          className="rounded-xl px-3 py-3 hover:bg-slate-50"
          onClick={() => setOpenMobile(false)}
        >
          Blog
        </a>

        <a
          href="https://home-steril.com/about"
          className="rounded-xl px-3 py-3 hover:bg-slate-50"
          onClick={() => setOpenMobile(false)}
        >
          Tentang Kami
        </a>

        <div className="mt-2 border-t border-slate-200 pt-3">
          <a
            href="https://api.whatsapp.com/send/?phone=62888908769669&text=Halo+Home+Steril%2C+saya+ingin+info+kemitraan.&type=phone_number&app_absent=0"
            className="inline-flex w-full items-center justify-center rounded-xl bg-red-700 px-4 py-3 text-sm font-semibold text-white shadow-sm hover:bg-red-800"
            onClick={() => setOpenMobile(false)}
          >
            Pesan Sekarang
          </a>
        </div>
      </div>
    </div>
  </div>
)}
          {/* Breadcrumb */}
          <div className="pb-3">
            <div className="flex items-center gap-2 text-xs text-slate-500">
              <span className="inline-flex h-6 w-6 items-center justify-center rounded-lg bg-slate-50 border border-slate-200">
                🏠
              </span>
              <span>Home</span>
              <span>›</span>
              <span className="font-semibold text-slate-700">Kemitraan</span>
            </div>
          </div>
        </div>
      </header>

      {/* Hero */}
      <main className="mx-auto max-w-7xl px-4">
        <section className="grid grid-cols-1 items-center gap-10 py-10 md:grid-cols-2 md:py-14 lg:gap-14">
          {/* Left */}
          <div className="flex flex-col justify-center">
            <h1 className="font-montserrat text-3xl leading-tight sm:text-4xl sm:leading-[44px] lg:text-[44px] lg:leading-[48px] font-bold tracking-normal text-slate-900">
              <span className="text-slate-950">BANGUN BISNIS ANDA</span>{" "}
              <span className="text-red-700">BERSAMA HOME STERIL</span>
            </h1>

            <p className="mt-4 text-base sm:text-lg md:text-xl font-semibold text-slate-800">
              Platform kemitraan bisnis Jasa Kebersihan dan Perawatan Rumah, Kantor &amp; Gedung Terbaik dan Terpercaya
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="https://api.whatsapp.com/send/?phone=62888908769669&text=Halo+Home+Steril%2C+saya+ingin+info+kemitraan.&type=phone_number&app_absent=0"
                className="
                  group
                  inline-flex items-center gap-3 rounded-2xl bg-red-700 px-5 py-3 text-sm font-semibold text-white shadow-md
                  transition-all duration-300 ease-out
                  hover:bg-red-800 hover:-translate-y-0.5 hover:shadow-lg
                  active:translate-y-0 active:scale-[0.99]
                "
              >
                Daftar Kemitraan Sekarang
                <span
                  className="
                    inline-flex h-8 w-8 items-center justify-center rounded-xl bg-white/15
                    transition-transform duration-300 ease-out
                    group-hover:translate-x-0.5
                  "
                >
                  ➜
                </span>
              </a>
            </div>

            <p className="mt-6 max-w-xl font-montserrat text-[18px] leading-[24px] font-normal text-slate-600">
              Raih peluang usaha dengan sistem siap pakai. Dengan Brand Home Steril yang sudah terpercaya sejak tahun 2020. Kami bantu marketing dan carikan pelanggan, Anda fokus pada kualitas layanan ke pelanggan.
            </p>
          </div>

          {/* Right */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-[28px] sm:p-4 lg:p-6">
              {/* Frame gambar */}
              <div
                className="
                  relative w-full overflow-hidden rounded-2xl bg-[#E9E0D6]
                  transition-all duration-300 ease-out
                  shadow-sm hover:shadow-lg
                "
              >
                {/* tinggi frame */}
                <div className="relative h-[260px] sm:h-[320px] lg:h-[360px]">
                  <Image
                    src="/mitra-home-steril.jpg"
                    alt="Mitra Home Steril"
                    fill
                    className="
                      object-contain
                      transition-transform duration-500 ease-out
                      hover:scale-[1.02]
                    "
                    priority
                  />
                </div>

                {/* tombol overlay */}
                <button
                  id="video"
                  type="button"
                  onClick={() => setOpenVideo(true)}
                  className="
                    absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
                    flex items-center justify-center gap-3
                    w-[92%] max-w-[360px] sm:w-auto sm:max-w-none
                    rounded-full border border-white/40
                    bg-black/25 backdrop-blur-[2px]
                    px-4 py-3 sm:px-6
                    font-montserrat text-[12px] sm:text-[14px] font-medium text-white
                    text-center leading-snug whitespace-normal sm:whitespace-nowrap
                    transition-all duration-300 ease-out
                    hover:bg-white/10 hover:shadow-[0_10px_30px_rgba(255,255,255,0.18)]
                    hover:scale-[1.02]
                    active:scale-[0.99]
                  "
                >
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/60 bg-white/10 transition-transform duration-300 ease-out hover:scale-110">
                    ▶
                  </span>
                  Lihat Bagaimana Sistem Kami Bekerja
                </button>
              </div>

              {/* Stats row */}
              <div className="mt-5 grid grid-cols-1 gap-3 sm:mt-6 sm:grid-cols-3 sm:gap-4">
                <StatCard
                  value="5.0"
                  lines={["3.300+", "Rating review"]}
                  icon={<span className="text-yellow-500 text-lg">★</span>}
                />

                <StatCard
                  value="100+"
                  lines={["Tim", "Operasional"]}
                  icon={<span className="text-purple-600 text-lg">👥</span>}
                />

                <StatCard
                  value="100%"
                  lines={["Dukungan", "Pelatihan", "Operasional"]}
                  icon={<span className="text-green-600 text-lg">🎓</span>}
                />
              </div>
            </div>
          </div>
        </section>

        {/* MODAL VIDEO (taruh setelah hero / sebelum section lain juga boleh) */}
        {openVideo && (
          <div
            className="fixed inset-0 z-[60] flex items-center justify-center bg-black/70 px-4"
            onClick={() => setOpenVideo(false)}
          >
            <div
              className="relative w-full max-w-2xl overflow-hidden rounded-2xl bg-black shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close */}
              <button
                type="button"
                onClick={() => setOpenVideo(false)}
                className="absolute right-3 top-3 z-10 inline-flex h-10 w-10 items-center justify-center rounded-full bg-black/70 text-white text-xl hover:bg-black"
                aria-label="Tutup video"
              >
                ✕
              </button>

              {/* 16:9 responsive */}
              <div className="relative aspect-video w-full">
                <iframe
                  className="absolute inset-0 h-full w-full"
                  src="https://www.youtube.com/embed/m4lyu12QJik?autoplay=1&mute=1"
                  title="Video Home Steril"
                  allow="autoplay; encrypted-media; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        )}
        {/* Section Keuntungan Jadi Mitra HOME STERIL */}
        <section id="kemitraan" className="py-12 md:py-16">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:items-center">
            {/* Left: Image */}
            <div className="relative">
              <div className="relative overflow-hidden rounded-[28px] bg-[#E9E0D6] shadow-sm">
                <div className="relative aspect-square w-full">
                  <Image
                    src="/tim-home-steril.png"
                    alt="Mitra Home Steril"
                    fill
                    className="object-cover"
                    priority={false}
                  />
                </div>
              </div>
            </div>

            {/* Right: Title + Cards */}
            <div>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-[1.05] text-slate-900">
              <div>Keuntungan jadi</div>
              <div>Mitra Bisnis</div>
              <div className="text-red-700">HOME STERIL</div>
            </h2>

              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  {
                    t: "Tanpa Modal Besar",
                    d: "Mulai usaha tanpa harus membangun brand dari nol",
                    icon: (
                      <Image
                        src="/tanpa-modal.png"
                        alt="Tanpa Modal Besar"
                        width={26}
                        height={26}
                        className="h-7 w-7 object-contain"
                      />
                    ),
                  },
                  {
                    t: "Dukungan Digital",
                    d: "Promosi, pemesanan dan customer service kami bantu",
                    icon: (
                      <Image
                        src="/dukungan-digital.png"
                        alt="Dukungan Digital"
                        width={26}
                        height={26}
                        className="h-7 w-7 object-contain"
                      />
                    ),
                  },
                  {
                    t: "Training & Support",
                    d: "Tim siap mendampingi anda",
                    icon: (
                      <Image
                        src="/training.png"
                        alt="Training & Support"
                        width={26}
                        height={26}
                        className="h-7 w-7 object-contain"
                      />
                    ),
                  },
                  {
                    t: "Penghasilan Tambahan",
                    d: "Setiap order jadi peluang profit",
                    icon: (
                      <Image
                        src="/penghasilan.png"
                        alt="Penghasilan Tambahan"
                        width={26}
                        height={26}
                        className="h-7 w-7 object-contain"
                      />
                    ),
                  },
                ].map((x) => (
                  <div
                    key={x.t}
                    className="
      group
      rounded-2xl
      bg-red-800
      p-7
      text-white
      shadow-sm
      transition-all
      duration-300
      ease-out
      hover:-translate-y-2
      hover:shadow-xl
      hover:shadow-red-900/30
      hover:ring-2
      hover:ring-white/20
    "
                  >
                    <div className="flex items-center justify-center">
                      <div
                        className="
          flex
          h-12
          w-12
          items-center
          justify-center
          rounded-xl
          bg-white/10
          transition-transform
          duration-300
          ease-out
          group-hover:scale-110
          group-hover:rotate-3
        "
                      >
                        {x.icon}
                      </div>
                    </div>

                    <div className="mt-4 px-2 text-center text-base font-extrabold whitespace-normal">
                      {x.t}
                    </div>
                    <p className="mt-2 text-center text-sm leading-relaxed text-white/90">
                      {x.d}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Section: Siapa Kami */}
        <section id="tentang-kami" className="py-14 md:py-20">
          <div className="mx-auto max-w-4xl px-4 text-center">
            {/* Heading */}
            <h2
              className="
                font-montserrat
                text-[40px]
                leading-[40px]
                font-bold
                tracking-normal
                text-slate-900
              "
            >
              Siapa Kami dan{" "}
              <span className="text-red-700">Apa yang Kami Lakukan?</span>
            </h2>

            {/* Paragraf 1 */}
            <p
              className="
                mt-6
                font-montserrat
                text-[18px]
                leading-[24px]
                font-normal
                text-slate-600
              "
            >
              Home Steril adalah platform one-stop solution yang menyediakan berbagai layanan kebersihan dan perawatan untuk rumah, kantor, dan gedung sejak tahun 2020. Dengan reputasi yang solid, Home Steril telah melayani ribuan pelanggan dan meraih 3.300+ ulasan Google dengan rating sempurna.
            </p>

            {/* Paragraf 2 */}
            <p
              className="
                mt-4
                font-montserrat
                text-[18px]
                leading-[24px]
                font-normal
                text-slate-600
              "
            >
              Home Steril mengedepankan kualitas, transparansi, dan kepuasan pelanggan di setiap pekerjaan serta selalu memberikan Garansi di setiap layanan untuk memastikan properti Anda tetap bersih, aman, dan nyaman.
            </p>
          </div>
        </section>

        {/* Section: Visi & Misi */}
        <section id="visi-misi" className="py-14 md:py-20">
          <div className="mx-auto max-w-6xl px-4">
            <div className="rounded-3xl bg-slate-50 px-6 py-14 md:px-12">
              {/* Heading */}
              <h2
                className="
                  text-center
                  font-montserrat
                  text-[40px]
                  leading-[40px]
                  font-bold
                  tracking-normal
                  text-slate-900
                "
              >
                Visi & Misi Home Steril:
                <br />
                <span className="text-red-700">
                  Mewujudkan Standar Baru Kebersihan Profesional
                </span>
              </h2>

              {/* Intro paragraph */}
              <p
                className="
                  mx-auto
                  mt-6
                  max-w-3xl
                  text-center
                  font-montserrat
                  text-[18px]
                  leading-[24px]
                  font-normal
                  text-slate-600
                "
              >
                Kami percaya bahwa kebersihan bukan sekadar rutinitas, tetapi
                bagian penting dari gaya hidup sehat dan lingkungan yang nyaman.
              </p>

              {/* Content */}
              <div className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-2">
                {/* Visi */}
                <div className="flex items-start gap-4">
                  {/* Icon Visi */}
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-red-100">
                    <Image
                      src="/visi.png"
                      alt="Icon Visi"
                      width={28}
                      height={28}
                    />
                  </div>

                  {/* Text Visi */}
                  <div className="flex-1">
                    <h3 className="font-montserrat text-2xl font-bold text-slate-900">
                      Visi
                    </h3>
                    <p className="mt-2 font-montserrat text-[18px] leading-[24px] font-normal text-slate-600">
                     Menjadi platform penyedia jasa kebersihan dan perawatan properti terdepan dan paling terpercaya di Indonesia, yang menjadi standar utama dalam menciptakan lingkungan hunian dan kerja yang bersih, sehat, serta aman.
                    </p>
                  </div>
                </div>

                {/* Misi */}
                <div className="flex items-start gap-4">
                  {/* Icon Misi */}
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-red-100">
                    <Image
                      src="/misi.png"
                      alt="Icon Misi"
                      width={28}
                      height={28}
                    />
                  </div>

                  {/* Text Misi */}
                  <div className="flex-1">
                    <h3 className="font-montserrat text-2xl font-bold text-slate-900">
                      Misi
                    </h3>

                    <div className="mt-2 space-y-2 font-montserrat text-[18px] leading-[24px] font-normal text-slate-600">
                      {[
                        "Menyediakan standar layanan kebersihan modern yang konsisten.",
                        "Memberdayakan mitra dengan pelatihan dan dukungan yang efektif.",
                        "Menjangkau lebih banyak keluarga dan bisnis di berbagai kota.",
                        "Mengutamakan kualitas, kepercayaan, dan kepuasan pelanggan.",
                        "Menyediakan Solusi Satu Pintu (One-Stop Solution): Menghadirkan ekosistem layanan yang komprehensif untuk memudahkan pemilik rumah, kantor, dan gedung dalam memenuhi seluruh kebutuhan perawatan properti mereka.",
                      ].map((text, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <span className="w-5 flex-shrink-0 text-slate-600">
                            {i + 1}.
                          </span>
                          <p className="flex-1">{text}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section: Kenapa Harus Bergabung Sekarang */}
        <section id="bergabung-sekarang" className="py-12 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-20">
            <div className="grid grid-cols-1 items-start gap-10 md:grid-cols-2 md:gap-12">
              {/* Left: Image */}
              <div className="relative w-full max-w-[460px] md:max-w-none md:pr-2">
                <div className="relative overflow-hidden rounded-[32px]">
                  <div className="relative w-full h-[420px] sm:h-[520px] md:h-[595px]">
                    <Image
                      src="/join-man.png"
                      alt="Peluang kemitraan Home Steril"
                      fill
                      className="object-contain md:object-cover object-center md:object-[30%_center]"
                      priority={false}
                    />

                    {/* Badge: top-right (inside frame) */}
                    <div
                      className="
                        absolute top-2 right-2
                        md:top-3 md:right-3
                        rounded-2xl bg-red-800
                        px-4 py-3 md:px-5 md:py-4
                        text-center text-white
                        shadow-md
                      "
                    >
                      <div className="text-xs md:text-sm leading-none opacity-90">Pasar</div>
                      <div className="text-xl md:text-2xl font-extrabold leading-none">Naik</div>
                    </div>
                  </div>
                </div>

                {/* Badge: bottom-left */}
                <div
                  className="
                    absolute left-3 bottom-3
                    sm:left-2 sm:bottom-5
                    md:left-5 md:bottom-4
                    rounded-2xl bg-white
                    px-4 py-3 md:px-5 md:py-4
                    shadow-md ring-1 ring-black/5
                  "
                >
                  <div className="text-base md:text-lg font-extrabold text-red-700 leading-none">Ambil</div>
                  <div className="text-xs md:text-sm text-red-700 opacity-90">Peluang</div>
                </div>
              </div>

              {/* Right: Content */}
              <div>
                <h2
                  className="
                    font-montserrat
                    text-[32px] leading-[36px]
                    sm:text-[40px] sm:leading-[40px]
                    font-bold tracking-normal text-slate-900
                  "
                >
                  Kenapa Harus{" "}
                  <span className="text-red-700">Bergabung Sekarang?</span>
                </h2>

                <p
                  className="
                    mt-4
                    max-w-xl
                    font-montserrat
                    text-[18px] leading-[24px]
                    font-normal tracking-normal text-slate-600
                  "
                >
                  Kesempatan terbaik tidak datang dua kali. Home Steril terus berkembang, dan saat ini adalah momen paling tepat untuk ikut tumbuh bersama kami.
                </p>

                {/* Cards */}
                <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2">
                  {[
                    {
                      t: "Reputasi Bintang 5 Home Steril di Google dengan ribuan ulasan positif",
                      d: "Dengan Reputasi Brand yang tinggi dapat lebih mudah mendapatkan pelanggan baru",
                      iconSrc: "/reputasi.webp",
                      iconAlt: "Reputasi Bintang 5 Home Steril di Google dengan ribuan ulasan positif",
                    },
                    {
                      t: "Marketing & SEO Dihandle Sepenuhnya Google.",
                      d: "Lupakan biaya iklan yang mahal. Home Steril mengoptimalkan strategi digital marketing dan SEO agar jasa yang Anda tangani selalu muncul di peringkat atas pencarian",
                      iconSrc: "/SEO.webp",
                      iconAlt: "Marketing & SEO Dihandle Sepenuhnya Google.",
                    },
                    {
                      t: "Ekosistem Jasa yang Sangat Luas (Cross-Selling)",
                      d: "Dengan 17+ kategori layanan, potensi cross-selling sangat tinggi untuk setiap pelanggan",
                      iconSrc: "/Ekosistem.webp",
                      iconAlt: "Ekosistem Jasa yang Sangat Luas (Cross-Selling)",
                    },
                    {
                      t: "Branding Kuat & Terpercaya",
                      d: "Home Steril sudah dikenal sebagai platform one-stop solution. Menjadi bagian dari mitra kami akan meningkatkan brand value bisnis Anda dibandingkan kompetitor mandiri.",
                      iconSrc: "/branding-kuat.webp",
                      iconAlt: "Branding Kuat & Terpercaya",
                    },
                    {
                      t: "Pertumbuhan Bisnis yang Stabil",
                      d: "Industri kebersihan & perawatan rumah dan gedung adalah sektor yang terus dibutuhkan (evergreen). Bersama Home Steril, bisnis Anda akan memiliki keberlanjutan jangka panjang yang lebih terjamin.",
                      iconSrc: "/pertumbuhan-bisnis.webp",
                      iconAlt: "Pertumbuhan Bisnis yang Stabil",
                    },
                    {
                      t: "Dukungan Komunitas & Update Skill",
                      d: "Kesempatan untuk bertukar pengalaman dengan sesama mitra ahli dan mendapatkan arahan standar pengerjaan profesional kelas atas agar selalu unggul di pasaran.",
                      iconSrc: "/komunitas.webp",
                      iconAlt: "Dukungan Komunitas & Update Skill",
                    },
                  ].map((x) => (
                    <div
                      key={x.t}
                      className="
                        group
                        h-full
                        rounded-2xl bg-white
                        p-5 sm:p-6
                        shadow-sm ring-1 ring-black/5
                        transition-all duration-300 ease-out
                        hover:-translate-y-1 hover:shadow-xl
                        hover:ring-2 hover:ring-red-700/15
                      "
                    >
<div className="mb-4 flex justify-center sm:justify-start">
  <div
    className="
      flex items-center justify-center
      h-34 w-34 sm:h-16 sm:w-16
      transition-transform duration-300 ease-out
      group-hover:scale-110
    "
  >
    <Image
      src={x.iconSrc}
      alt={x.iconAlt}
      width={80}
      height={80}
      className="
        h-full w-full object-contain
        scale-[1.45] sm:scale-[1.25]
        origin-center
      "
    />
  </div>
</div>




                      <div className="mt-3 font-montserrat text-lg font-bold text-slate-900">
                        {x.t}
                      </div>

                      <p className="mt-2 font-montserrat text-sm leading-relaxed text-slate-600">
                        {x.d}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

{/* Section: Google Review / Testimoni */}
<section id="review" className="py-14 md:py-24">
  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-20">
    <div className="max-w-4xl">
<h2 className="font-montserrat text-[32px] leading-tight sm:text-[40px] font-bold text-slate-900">
  <span className="block">
    Rating tertinggi dan terbaik di Layanan 
  </span>
  <span className="block text-red-700">
    Kebersihan & Perawatan Rumah
  </span>
</h2>

      <p className="mt-4 font-montserrat text-[18px] leading-[24px] font-normal tracking-normal text-slate-600">
       Dipercaya oleh ribuan pelanggan karena kualitas, ketepatan waktu dan hasil kerja yang memuaskan. Lihat apa kata mereka tentang pengalaman menggunakan jasa Home Steril
      </p>

      {/* Button pindah ke bawah */}
      <a
        href="https://www.google.com/maps/place/Home-Steril+%7CCuci+Kasur+-Laundry+Kasur+-Cuci+Sofa+-Vacuum+Tungau+-Jasa+Bersih+Bersih+Rumah+-Kuras+Toren+-Pembantu+Harian,+Home+Steril+Jabodetabek,+Jalan+Raya+Gandul,+Gandul,+Kota+Depok,+Jawa+Barat/@-6.3257633,106.7913025,6621m/data=!3m1!1e3!4m5!3m4!1s0x2e69f1479a03efd5:0x89641142eeac2f8!8m2!3d-6.3271646!4d106.7961089?entry=ttu&g_ep=EgoyMDI2MDExMy4wIKXMDSoASAFQAw%3D%3D"
        target="_blank"
        rel="noopener noreferrer"
        className="
                  mt-6
                  inline-flex
                  w-fit
                  items-center
                  justify-center
                  rounded-full
                  border-2
                  border-red-700
                  px-6
                  py-3
                  font-montserrat
                  text-[16px]
                  font-semibold
                  text-slate-900
                  shadow-sm
                  hover:bg-red-50
                "
      >
        Lihat Google Review
      </a>
    </div>

    {/* Stats */}
    <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-5">
      {[
        {
          img: "/rating.png",
          alt: "Rating",
          main: "5.0",
          sub: "Rating Rata-rata",
        },
        {
          img: "/review-positif.png",
          alt: "Review Positif",
          main: "+3.300",
          sub: "Review Positif",
        },
        {
          img: "/terbaik.png",
          alt: "Terbaik",
          main: "#1",
          sub: "Terbaik di Indonesia",
        },
      ].map((s) => (
        <div
          key={s.sub}
          className="
                  group
                  flex
                  items-center
                  gap-4
                  rounded-2xl
                  bg-white
                  px-5
                  py-4
                  sm:px-6
                  sm:py-5
                  shadow-sm
                  ring-1 ring-black/5
                  transition-all
                  duration-300
                  ease-out
                  hover:-translate-y-1
                  hover:shadow-xl
                  hover:ring-2
                  hover:ring-red-700/15
  "
        >
          {/* Icon */}
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-red-700 transition-transform duration-300 ease-out group-hover:scale-110">
            <Image
              src={s.img}
              alt={s.alt}
              width={22}
              height={22}
              className="object-contain"
            />
          </div>

          {/* Text */}
          <div className="leading-tight">
            <div className="font-montserrat text-[22px] font-bold text-slate-900">
              {s.main}
            </div>
            <div className="font-montserrat text-[14px] font-normal text-slate-600">
              {s.sub}
            </div>
          </div>
        </div>
      ))}
    </div>

    {/* Reviews */}
    <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-5 sm:p-6">
      {[
        {
          initial: "R",
          name: "Rahmyel",
          time: "2 minggu yang lalu",
          rating: 5,
          reviewUrl:
            "https://www.google.com/maps/contrib/111235702987455232909/place/ChIJ1e8DmkfxaS4R-MLqLhRBlgg/@-6.5161631,106.599894,847186m/data=!3m1!1e3!4m6!1m5!8m4!1e1!2s111235702987455232909!3m1!1e1?hl=id&entry=ttu&g_ep=EgoyMDI2MDExMy4wIKXMDSoASAFQAw%3D%3D",
          text: "Home service yg paling fleksibel.. Pelayanan nya baik, admin informatif dan sabar melayani.. petugas yg hadir (nama: Jaja) orangnya jujur, hasil nya bersih, alat alatnya komplit, sampai dapat sinar uv juga stelah pembersihan. Terima kasih",
        },
        {
          initial: "S",
          name: "Salman Naufal",
          time: "1 bulan yang lalu",
          rating: 5,
          reviewUrl:
            "https://www.google.com/maps/contrib/116770709428187991930/place/ChIJ1e8DmkfxaS4R-MLqLhRBlgg/@22.2582781,52.7149363,12626512m/data=!3m1!1e3!4m6!1m5!8m4!1e1!2s116770709428187991930!3m1!1e1?hl=id&entry=ttu&g_ep=EgoyMDI2MDExMy4wIKXMDSoASAFQAw%3D%3D",
          text: "Saya sangat puas dari service special cleaning and wet cleaning sofa dari home steril. Terutama pelayanan cleaning dari Pak Muis, Bu Siska, dan Mas Riki benar-benar memuaskan. Mereka bekerja dengan teliti, cepat, dan hasilnya sangat bersih. Setiap dari mereka menunjukkan profesionalisme yang tinggi, ramah, serta memperhatikan detail sehingga area yang dibersihkan terasa jauh lebih nyaman. Terima kasih atas layanan yang luar biasa—sangat direkomendasikan!",
        },
        {
          initial: "D",
          name: "Devy Wilson",
          time: "1 minggu yang lalu",
          rating: 5,
          reviewUrl:
            "https://www.google.com/maps/contrib/106670683795192094836/place/ChIJ1e8DmkfxaS4R-MLqLhRBlgg/@-6.3271646,106.7961089,828m/data=!3m1!1e3!4m6!1m5!8m4!1e1!2s106670683795192094836!3m1!1e1?hl=id&entry=ttu&g_ep=EgoyMDI2MDExMy4wIKXMDSoASAFQAw%3D%3D",
          text: "Thanks Home Steril for the great service, I'm very happy with my bathroom renovation. The result turned out just as expected, n the work was done neatly and professional^^",
        },
        {
          initial: "U",
          name: "Umi Uum",
          time: "1 minggu yang lalu",
          rating: 5,
          reviewUrl:
            "https://www.google.com/maps/contrib/112891109205964328072/place/ChIJ1e8DmkfxaS4R-MLqLhRBlgg/@-6.3271646,106.7961089,828m/data=!3m1!1e3!4m6!1m5!8m4!1e1!2s112891109205964328072!3m1!1e1?hl=id&entry=ttu&g_ep=EgoyMDI2MDExMy4wIKXMDSoASAFQAw%3D%3D",
          text: "Terima kasih home steril yang sudah memberikan pelayanan dry sofa dan kasur di rumah saya. Hasilnya bersih, rapi, dan memuaskan,Terima kasih juga untuk mas Sidiq yang sudah membersihkan dengan teliti dan merapikannya dengan baik. pelayanannya ramah dan Profesional. Sangat direkomendaskan👍🏻",
        },
      ].map((r) => (
        <div
          key={r.name}
          className="
    group
    rounded-2xl
    bg-white
    p-5 sm:p-6
    shadow-sm
    ring-1 ring-black/5
    transition-all
    duration-300
    ease-out
    hover:-translate-y-1.5
    hover:shadow-xl
    hover:ring-2
    hover:ring-red-700/10
  "
        >
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-center gap-4">
              {/* Avatar */}
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-700 text-white font-montserrat font-bold transition-transform duration-300 ease-out group-hover:scale-105">
                {r.initial}
              </div>

              <div>
                <div className="flex items-center gap-2">
                  <div className="font-montserrat font-bold text-slate-900">
                    {r.name}
                  </div>

                  {/* Verified badge (image) */}
                  <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-slate-200">
                    <Image
                      src="/verified.png"
                      alt="Verified"
                      width={12}
                      height={12}
                      className="object-contain"
                    />
                  </span>
                </div>

                {/* Stars + time (INLINE, TANPA component) */}
                <div className="mt-1 flex items-center gap-2">
                  <div className="flex items-center gap-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <span
                        key={i}
                        className={
                          i < r.rating ? "text-yellow-500" : "text-slate-300"
                        }
                      >
                        ★
                      </span>
                    ))}
                  </div>

                  <span className="font-montserrat text-[12px] text-slate-500">
                    {r.time}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <p className="mt-4 font-montserrat text-[14px] leading-[20px] text-slate-600">
            {r.text}
          </p>

          {r.reviewUrl && (
            <div className="mt-4">
              <a
                href={r.reviewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="
        inline-flex items-center gap-2
        rounded-full border border-slate-200 bg-white
        px-3 py-1.5
        font-montserrat text-[12px] font-semibold text-slate-700
        transition-colors
        hover:border-red-200 hover:text-red-700
      "
                aria-label={`Lihat review ${r.name} di Google Maps`}
              >
                Lihat di Google <span aria-hidden="true">↗</span>
              </a>
            </div>
          )}
        </div>
      ))}
    </div>
  </div>
</section>


        {/* Section: Paket Franchise */}
        <section id="paket-franchise" className="py-14 md:py-20">
          <div className="mx-auto max-w-7xl px-4">
            {/* Header */}
            <div className="text-center">
              <h2 className="font-montserrat text-2xl leading-tight sm:text-3xl sm:leading-[34px] md:text-[40px] md:leading-[44px] font-bold tracking-normal text-slate-900">
                Paket Mitra Bisnis{" "}
                <span className="text-red-700">HOME STERIL</span>
              </h2>

              <p className="mt-4 mx-auto max-w-3xl font-montserrat text-[18px] leading-[24px] font-normal tracking-normal text-slate-600">
                Saatnya wujudkan impian punya usaha sendiri di bidang
                kebersihan!
                <br />
                Dengan modal terjangkau, Anda bisa langsung menjalankan bisnis
                bersama Home Steril.
              </p>
            </div>

            {/* Cards */}
            <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
              {[
                {
                  title: "Paket Mitra Bersih",
                  price: "Rp 25.000.000",
                  points: [
                    "Lisensi Brand Home Steril (1 tahun)",
                    "Pelatihan SC & GC (2 hari)",
                    "Dry Vacuum (1 unit)",
                    "Mop set (2 set)",
                    "Window cleaning (2 set)",
                    "Tas Home Steril (2 pcs)",
                    "Kaos polo HS (12 pcs)",
                    "Topi HS (2 pcs)",
                    "Rompi HS (2 pcs)",
                    "Lampu UV (2 unit)",
                    "Sapu (2 pcs)",
                    "Microfiber (20 pcs)",
                    "Kabel roll 20 meter (2 pcs)",
                  ],
                  cocok:
                    "Cocok untuk mitra yang ingin memulai layanan General Cleaning, Deep/Special Cleaning, dan Toren dengan paket perlengkapan dasar.",
                  bonus: "Konsultasi bisnis gratis selama 1 bulan",
                },
                {
                  title: "Paket Mitra Bersih Pro",
                  price: "Rp 50.000.000",
                  points: [
                    "Brand Home Steril (2 tahun)",
                    "Pelatihan SC & GC (2 hari)",
                    "Hydro vacuum Sirena (1 unit)",
                    "Wet & Dry vacuum (1 unit)",
                    "Sikat bor (1 unit)",
                    "Botol pump (2 pcs)",
                    "Dry Vacuum (2 unit)",
                    "Mop set (2 set)",
                    "Window cleaning (2 set)",
                    "Tas Home Steril (3 pcs)",
                    "Kaos polo HS (12 pcs)",
                    "Topi HS (2 pcs)",
                    "Rompi HS (2 pcs)",
                    "Lampu UV (2 unit)",
                    "Sapu (2 pcs)",
                    "Microfiber (20 pcs)",
                    "Kabel roll 20 meter (2 pcs)",
                  ],
                  cocok:
                    "Cocok untuk mitra yang ingin menangani layanan lebih luas: General Cleaning, Deep/Special Cleaning, Toren, Filter air, Wet Cleaning kasur/sofa/karpet, dan Vacuum tungau.",
                  bonus: "Desain banner & konten promo eksklusif",
                },
                {
                  title: "Paket Ekspansi",
                  price: "Rp 135.000.000",
                  points: [
                    "Brand Home Steril (3 tahun)",
                    "Pelatihan SC & GC (2 hari)",
                    "Hydro vacuum Sirena (1 unit)",
                    "Wet & Dry vacuum (2 unit)",
                    "Sikat bor (2 unit)",
                    "Botol pump (4 pcs)",
                    "Dry Vacuum (2 unit)",
                    "Mop set (2 set)",
                    "Window cleaning (2 set)",
                    "Tas Home Steril (4 pcs)",
                    "Kaos polo HS (24 pcs)",
                    "Topi HS (4 pcs)",
                    "Rompi HS (4 pcs)",
                    "Lampu UV (4 unit)",
                    "Sapu (2 pcs)",
                    "Microfiber (30 pcs)",
                    "Kabel roll 20 meter (2 pcs)",
                  ],
                  cocok:
                    "Cocok untuk mitra yang ingin ekspansi (All Services) dengan perlengkapan lebih banyak untuk scale-up tim dan cakupan area.",
                  bonus: "Pendampingan strategi pemasaran lokal",
                }].map((p) => {
                const WA_LINK = "https://wa.me/628XXXXXXXXXX"; // <-- ganti nomor WA kamu

                return (
                  <div
                    key={p.title}
                    className="
    group
    rounded-[24px]
    bg-white
    px-7
    pt-8
    pb-6
    shadow-sm
    ring-1 ring-black/5
    transition-all
    duration-300
    ease-out
    hover:-translate-y-2
    hover:shadow-xl
    hover:ring-2
    hover:ring-red-700/15
    active:scale-[0.99]
  "
                  >
                    {/* Title + Price */}
                    <div className="text-center">
                      <div className="font-montserrat text-[20px] font-bold text-slate-900">
                        {p.title}
                      </div>
                      <div className="mt-1 font-montserrat text-[28px] leading-[32px] font-extrabold text-red-700 transition-transform duration-300 ease-out group-hover:scale-[1.03]">
                        {p.price}
                      </div>
                    </div>

                    {/* Checklist */}
                    <ul className="mt-8 space-y-4">
                      {p.points.map((t) => (
                        <li
                          key={t}
                          className="
                            flex
                            items-start
                            gap-3
                            font-montserrat
                            text-[14px]
                            leading-[20px]
                            text-slate-600
                            min-h-[40px]
                          "
                        >
                          <span className="mt-[2px] inline-flex h-5 w-5 shrink-0 items-center justify-center">
                            <Image
                              src="/ceklis.png"
                              alt="Checklist"
                              width={20}
                              height={20}
                              className="h-5 w-5 object-contain"
                            />
                          </span>

                          <span className="block">{t}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Cocok untuk */}
                    <p className="mt-8 font-montserrat text-[13px] leading-[18px] text-slate-500">
                      <span className="font-bold text-slate-700">
                        Cocok untuk:
                      </span>{" "}
                      {p.cocok}
                    </p>

                    {/* Bonus */}
                    <div className="mt-6 flex flex-col items-center justify-end min-h-[110px] transition-transform duration-300 ease-out group-hover:-translate-y-1">
                      <a
                        href={WA_LINK}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block"
                      >
                        <img
                          src="/extra-bonus.png"
                          alt="Extra Bonus"
                          className="h-[90px] w-auto"
                        />
                      </a>

                      <p
                        className="
                          mt-3
                          min-h-[40px]
                          text-center
                          font-montserrat
                          text-[14px]
                          font-semibold
                          text-red-700
                          leading-[20px]
                        "
                      >
                        {p.bonus}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Section: Cara Kerja Kemitraan */}
        <section id="cara-kerja" className="py-14 md:py-20">
          <div className="mx-auto max-w-7xl px-4">
            {/* Header (atas) */}
            <div className="max-w-3xl">
              <h2 className="font-montserrat text-2xl leading-tight sm:text-4xl sm:leading-[44px] lg:text-[50px] lg:leading-[54px] font-bold text-slate-900">
                Bagaimana Sistem Kemitraan{" "}
                <span className="text-red-700">Kami Bekerja?</span>
              </h2>

              <p className="mt-4 font-montserrat text-[16px] leading-[24px] text-slate-600">
                Bergabung jadi mitra Home Steril itu mudah. Hanya dengan tiga
                langkah sederhana, Anda bisa langsung memulai usaha jasa cuci
                kasur dengan brand terpercaya.
              </p>
            </div>

            {/* Cards (bawah, 3 kolom lebar) */}
            <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-3">
              {[
                {
                  no: "1",
                  title: "Daftar Jadi Mitra",
                  desc: "Isi formulir pendaftaran online",
                },
                {
                  no: "2",
                  title: "Mulai Beroperasi",
                  desc: "Kami berikan branding, pelatihan dan panduan",
                },
                {
                  no: "3",
                  title: "Terima Order",
                  desc: "Layani pelanggan, hasilkan keuntungan",
                },
              ].map((s) => (
                <div
                  key={s.no}
                  className="
    group
    rounded-[20px]
    bg-[#EED9D9]
    px-8
    py-10
    transition-all
    duration-300
    ease-out
    hover:-translate-y-2
    hover:shadow-xl
    hover:ring-2
    hover:ring-red-700/15
    active:scale-[0.99]
  "
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-700 font-montserrat text-[16px] font-bold text-white transition-transform duration-300 ease-out group-hover:scale-110">
                    {s.no}
                  </div>

                  <div className="mt-4 font-montserrat text-[18px] font-bold text-slate-900 transition-colors duration-300 group-hover:text-red-700">
                    {s.title}
                  </div>

                  <div className="mt-3 font-montserrat text-[14px] leading-[20px] text-slate-700">
                    {s.desc}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

{/* Section: CTA Franchise */}
<section className="relative py-14 md:py-24">
  <div className="mx-auto max-w-7xl px-4">
    <div className="relative overflow-hidden rounded-[28px]">
      {/* Background image */}
      <img
        src="/perjalanan-bisnis.png"
        alt="CTA Home Steril"
        className="h-[520px] w-full object-cover md:h-[420px]"
      />

      {/* Overlay Content */}
      <div className="absolute inset-6 md:inset-12 flex items-start md:items-start">
        <div
          className="
            w-full max-w-full
            text-center
            md:ml-auto md:w-[750px] md:max-w-[750px] md:text-right
          "
        >
          <h2 className="font-montserrat text-[28px] leading-[36px] md:text-[36px] md:leading-[44px] font-bold text-slate-900">
            <span className="block">Siapkah Anda Memulai Perjalanan Bisnis</span>
            <span className="block">
              Bersama <span className="text-red-700">Home Steril?</span>
            </span>
          </h2>

          <p className="mt-3 md:mt-4 font-montserrat text-[14px] leading-[22px] md:text-[16px] md:leading-[24px] text-slate-700">
            Bergabunglah sekarang dan nikmati semua paket serta dukungan eksklusif
            yang sudah kami siapkan.
          </p>

          <a
            href="#paket-franchise"
            className="
              mt-5 md:mt-6
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-slate-400
              px-5 md:px-6
              py-3
              font-montserrat
              text-[14px] md:text-[15px]
              font-semibold
              text-slate-900
              hover:bg-slate-100
              transition
            "
          >
            Lihat Detail & Daftar Sekarang
            <span>›</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</section>

        {/* Section: Area Cakupan */}
        <section id="area-cakupan" className="py-14 md:py-20">
          <div className="mx-auto max-w-7xl px-4">
            {/* Header */}
            <div className="text-center">
              <h2 className="font-montserrat text-2xl leading-tight sm:text-3xl sm:leading-[34px] md:text-[40px] md:leading-[44px] font-bold tracking-normal text-slate-900">
                Area Cakupan <span className="text-red-700">HOME STERIL</span>
              </h2>

              <p className="mt-4 mx-auto max-w-3xl font-montserrat text-[18px] leading-[24px] font-normal tracking-normal text-slate-600">
                Kami melayani area Jakarta dan sekitarnya dengan standar
                pelayanan terbaik
              </p>
            </div>

                        {/* Content */}
            <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-[360px_1fr] lg:items-stretch">
              {/* Sidebar */}
              <aside className="rounded-3xl bg-white shadow-sm ring-1 ring-black/5 p-4">
                <div className="mb-3 px-2">
                  <div className="font-montserrat text-[14px] font-semibold text-slate-900">
                    Pilih Area
                  </div>
                  <div className="font-montserrat text-[12px] font-medium text-slate-600">
                    Klik kota untuk melihat peta cakupan
                  </div>
                </div>

                <div className="space-y-3">
                  {CITIES.map((item) => {
                    const isActive = activeCity === item.key;

                    return (
                      <button
                        key={item.key}
                        type="button"
                        onClick={() => handleSelectCity(item.key)}
                        className={`
                          group w-full text-left
                          flex items-center justify-between
                          rounded-2xl bg-white
                          px-4 py-3
                          shadow-sm ring-1 ring-black/5
                          transition-all duration-300 ease-out
                          hover:-translate-y-0.5 hover:shadow-lg hover:ring-2 hover:ring-red-700/10
                          active:scale-[0.99]
                          ${isActive ? "ring-2 ring-red-700/30 shadow-lg" : ""}
                        `}
                      >
                        <div className="flex items-center gap-4 min-w-0">
                          <div
                            className={`
                              flex h-10 w-10 shrink-0 items-center justify-center rounded-xl
                              bg-red-700 text-white
                              transition-transform duration-300 ease-out
                              group-hover:scale-110
                              ${isActive ? "scale-110" : ""}
                            `}
                            aria-hidden="true"
                          >
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                              <path
                                d="M12 21s7-4.35 7-11a7 7 0 10-14 0c0 6.65 7 11 7 11z"
                                stroke="currentColor"
                                strokeWidth="2"
                              />
                              <path
                                d="M12 10.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z"
                                stroke="currentColor"
                                strokeWidth="2"
                              />
                            </svg>
                          </div>

                          <div className="min-w-0">
                            <div className="font-montserrat text-[16px] font-bold text-slate-900 truncate">
                              {item.title}
                            </div>
                            <div className="font-montserrat text-[12px] font-medium text-slate-600">
                              {item.desc}
                            </div>
                          </div>
                        </div>

                        <span
                          className={`
                            h-2.5 w-2.5 rounded-full
                            ${isActive ? "bg-red-700" : "bg-slate-300"}
                          `}
                          aria-hidden="true"
                        />
                      </button>
                    );
                  })}
                </div>
              </aside>

              {/* Main Map */}
              <div className="relative overflow-hidden rounded-[26px] bg-white shadow-sm ring-1 ring-black/5">
                {/* Badge */}
                <div className="absolute right-6 top-6 z-10 rounded-2xl bg-red-700 px-5 py-3 text-center shadow-md">
                  <div className="font-montserrat text-[18px] font-extrabold leading-[18px] text-white">
                    {activeData.badgeTitle}
                  </div>
                  <div className="font-montserrat text-[12px] font-medium text-white/90">
                    {activeData.badgeSub}
                  </div>
                </div>

                {/* Image wrapper for animation */}
                <div
                  className={`
                    p-3 sm:p-4
                    transition-all duration-300 ease-out
                    ${isSwitching ? "opacity-0 translate-y-2" : "opacity-100 translate-y-0"}
                  `}
                >
                  <img
                    src={activeData.image}
                    alt={`Peta area cakupan ${activeData.title}`}
                    className="w-full h-auto object-contain"
                  />
                </div>
              </div>
            </div>

</div>
        </section>
        {/* Section: Testimoni Mitra */}
        <section id="testimoni" className="py-14 md:py-20">
          <div className="mx-auto max-w-7xl px-4">
            <h2 className="text-center font-montserrat text-2xl sm:text-3xl md:text-[40px] font-bold">
              Testimoni Mitra <span className="text-red-700">HOME STERIL</span>
            </h2>

            <p className="mt-4 text-center text-slate-600">
              Pengalaman nyata mitra kami menjalankan bisnis bersama Home Steril
            </p>

            <div className="mt-10">
              <TestimoniSlider />
            </div>
          </div>
        </section>
        {/* Section: Apa yang Anda Dapatkan */}
        <section id="apa-yang-didapatkan" className="py-14 md:py-20">
          <div className="mx-auto max-w-7xl px-4">
            <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
              {/* Left */}
              <div>
                <h2 className="font-montserrat text-2xl leading-tight sm:text-3xl sm:leading-[36px] lg:text-[44px] lg:leading-[48px] font-bold tracking-normal text-slate-900">
                  Apa yang Anda <span className="text-red-700">Dapatkan?</span>
                </h2>

                <p className="mt-4 max-w-xl font-montserrat text-[16px] leading-[22px] font-normal text-slate-600">
                  Home Steril memberikan lebih dari sekadar layanan, <br />
                  kami mendampingi setiap langkah Anda.
                </p>

                <div className="mt-10 space-y-7">
                  {[
                    "Hak pakai brand HOME STERIL",
                    "Materi promosi & marketing kit",
                    "Training operasional & layanan",
                    "Dukungan customer service",
                    "Jaringan pelanggan dari platform",
                  ].map((text) => (
                    <div
                      key={text}
                      className="
                group
                flex items-center gap-5
                rounded-2xl bg-white
                px-5 py-4
                ring-1 ring-black/5 shadow-sm
                transition-all duration-300 ease-out
                hover:-translate-y-1 hover:shadow-xl hover:ring-2 hover:ring-red-700/10
                active:scale-[0.99]
              "
                    >
                      {/* Icon check image */}
                      <div
                        className="
                  h-11 w-11 shrink-0
                  transition-transform duration-300 ease-out
                  group-hover:scale-110
                "
                      >
                        <Image
                          src="/ceklis 2.png"
                          alt="Checklist"
                          width={44}
                          height={44}
                          className="h-11 w-11 object-contain"
                        />
                      </div>

                      <div
                        className="
                  font-montserrat text-[15px] leading-[20px] font-normal text-slate-700
                  transition-colors duration-300
                  group-hover:text-red-700
                "
                      >
                        {text}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right */}
              <div className="flex justify-center md:justify-end">
                <div
                  className="
            group
            relative w-full max-w-[460px]
            overflow-hidden rounded-[28px]
            bg-slate-100 shadow-sm ring-1 ring-black/5
            transition-all duration-300 ease-out
            hover:shadow-xl hover:ring-2 hover:ring-red-700/10
          "
                >
                  <img
                    src="/apa-yang-didapatkan.png"
                    alt="Mitra Home Steril"
                    className="h-[600px] w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Section: Garansi Kepuasan */}
        <section id="garansi" className="py-14 md:py-20">
          <div className="mx-auto max-w-7xl px-4">
            {/* Header */}
            <div className="text-center">
              <h2 className="font-montserrat text-2xl leading-tight sm:text-3xl sm:leading-[36px] lg:text-[44px] lg:leading-[48px] font-bold tracking-normal text-slate-900">
                Garansi Kepuasan{" "}
                <span className="text-red-700">100% Mitra HOME STERIL</span>
              </h2>

              <p className="mt-4 mx-auto max-w-3xl font-montserrat text-[16px] leading-[22px] font-normal text-slate-600">
                Kami berkomitmen memberikan lebih dari sekadar layanan,
                <br />
                karena kepuasan mitra adalah prioritas utama kami.
              </p>
            </div>

            {/* Content */}
            <div className="mt-14 grid grid-cols-1 items-center gap-10 md:grid-cols-[0.9fr_1.1fr]">
              {/* Left: Badge */}
              <div className="flex justify-center md:justify-start">
                <div className="relative w-full max-w-[340px] md:ml-8 transition-transform duration-300 ease-out hover:scale-[1.03]">
                  <img
                    src="/satisfaction.png"
                    alt="100% Satisfaction Guaranteed"
                    className="w-full h-auto object-contain"
                  />
                </div>
              </div>

              {/* Right: Cards */}
              <div className="space-y-6">
                {/* Top 2 cards */}
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  {/* Card 1 */}
                  <div
                    className="
              group
              rounded-[18px] bg-white p-6
              shadow-sm ring-1 ring-black/10
              transition-all duration-300 ease-out
              hover:-translate-y-1 hover:shadow-xl hover:ring-red-700/20
              active:scale-[0.99]
            "
                  >
                    <div className="flex items-start gap-4">
                      <div
                        className="
                  flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-slate-100
                  transition-transform duration-300 ease-out
                  group-hover:scale-110
                "
                      >
                        <img
                          src="/icon user.png"
                          alt="Dukungan Responsif"
                          className="h-full w-full object-contain scale-[1.35]"
                        />
                      </div>

                      <div className="min-w-0">
                        <div className="font-montserrat text-[15px] font-bold text-slate-900 leading-[20px] transition-colors duration-300 group-hover:text-red-700">
                          Dukungan Responsif
                          <br />
                          &amp; Terbuka
                        </div>

                        <p className="mt-3 font-montserrat text-[14px] leading-[20px] text-slate-600">
                          Tim kami selalu siap membantu setiap pertanyaan dan
                          kebutuhan mitra.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Card 2 */}
                  <div
                    className="
              group
              rounded-[18px] bg-white p-6
              shadow-sm ring-1 ring-black/10
              transition-all duration-300 ease-out
              hover:-translate-y-1 hover:shadow-xl hover:ring-red-700/20
              active:scale-[0.99]
            "
                  >
                    <div className="flex items-start gap-4">
                      <div
                        className="
                  flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-slate-100
                  transition-transform duration-300 ease-out
                  group-hover:scale-110
                "
                      >
                        <img
                          src="/icon gift.png"
                          alt="Bonus Layanan"
                          className="h-full w-full object-contain scale-[1.35]"
                        />
                      </div>

                      <div className="min-w-0">
                        <div className="font-montserrat text-[16px] font-bold text-slate-900 leading-[20px] transition-colors duration-300 group-hover:text-red-700">
                          Bonus Layanan
                          <br />
                          Tambahan
                        </div>

                        <p className="mt-3 font-montserrat text-[14px] leading-[20px] text-slate-600">
                          Dapatkan konsultasi bisnis dan update strategi promosi
                          gratis selama 1 bulan pertama.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom wide card */}
                <div
                  className="
            group
            rounded-[18px] bg-white p-6
            shadow-sm ring-1 ring-black/10
            transition-all duration-300 ease-out
            hover:-translate-y-1 hover:shadow-xl hover:ring-red-700/20
            active:scale-[0.99]
          "
                >
                  <div className="flex items-start gap-4">
                    <div
                      className="
                flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-red-700
                transition-transform duration-300 ease-out
                group-hover:scale-110
              "
                    >
                      <img
                        src="/icon heart.png"
                        alt="Pendampingan Ulang Gratis"
                        className="h-full w-full object-contain scale-[1.35]"
                      />
                    </div>

                    <div className="min-w-0">
                      <div className="font-montserrat text-[16px] font-bold text-slate-900 transition-colors duration-300 group-hover:text-red-700">
                        Pendampingan Ulang Gratis
                      </div>

                      <p className="mt-3 font-montserrat text-[14px] leading-[20px] text-slate-600 max-w-[620px]">
                        Jika pelatihan atau sistem belum sesuai harapan, kami
                        siap memberikan bimbingan ulang secara gratis hingga
                        Anda merasa siap menjalankan bisnis dengan percaya diri.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* end right */}
            </div>
          </div>
        </section>
{/* Section: Perbandingan Kemitraan */}
<section id="perbandingan" className="py-14 md:py-20">
  <div className="mx-auto max-w-7xl px-4">
    {/* Header */}
    <div className="text-center">
      <h2 className="font-montserrat text-[32px] leading-[38px] md:text-[44px] md:leading-[48px] font-bold tracking-normal text-slate-900">
        Mengapa kemitraan{" "}
        <span className="text-red-700">HOME STERIL</span> Lebih Unggul
      </h2>

      <p className="mt-4 mx-auto max-w-3xl font-montserrat text-[14px] leading-[20px] md:text-[16px] md:leading-[22px] font-normal text-slate-600">
        Pilihan cerdas bagi Anda yang ingin memulai bisnis kebersihan dengan
        dukungan nyata, sistem yang siap tumbuh,{" "}
        <span className="hidden md:inline">
          <br />
        </span>
        dan hasil yang terpercaya.
      </p>
    </div>

    {/* Table */}
    <div className="mt-14">
      {/* ===================== */}
      {/* MOBILE*/}
      {/* ===================== */}
      <div className="space-y-4 md:hidden">
        {/* Top labels (sekali saja) */}
        <div className="grid grid-cols-2 gap-3 px-1">
          <div className="text-center font-montserrat text-[14px] tracking-wide text-red-700 font-extrabold">
            HOME STERIL
          </div>
          <div className="text-center font-montserrat text-[11px] tracking-wide text-slate-600">
            Kemitraan Lain
          </div>
        </div>

        {/* Item 1 */}
        <div className="
    rounded-[18px] ring-1 ring-black/10 bg-white p-4
    transition-all duration-200 ease-out
    active:scale-[0.99] active:shadow-md
  ">
          <div className="font-montserrat text-[14px] font-bold text-slate-900">
            Pendampingan Mitra
          </div>

          <div className="mt-3 grid grid-cols-2 gap-3">
            <div className="rounded-[14px] bg-red-800 px-3 py-3 text-white flex items-center justify-center">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/10">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M20 6L9 17l-5-5"
                    stroke="white"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </div>

            <div className="rounded-[14px] bg-white px-3 py-3 text-slate-700 flex items-center justify-center ring-1 ring-black/10">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-red-800/10">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M18 6L6 18M6 6l12 12"
                    stroke="#991B1B"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </div>
          </div>
        </div>

        {/* Item 2 */}
        <div className="
    rounded-[18px] ring-1 ring-black/10 bg-white p-4
    transition-all duration-200 ease-out
    active:scale-[0.99] active:shadow-md
  ">
          <div className="font-montserrat text-[14px] font-bold text-slate-900">
            Dukungan Promosi Digital
          </div>

          <div className="mt-3 grid grid-cols-2 gap-3">
            <div className="rounded-[14px] bg-red-800 px-3 py-3 text-white flex items-center justify-center">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/10">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M20 6L9 17l-5-5"
                    stroke="white"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </div>

            <div className="rounded-[14px] bg-white px-3 py-3 text-slate-700 flex items-center justify-center ring-1 ring-black/10">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-red-800/10">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M18 6L6 18M6 6l12 12"
                    stroke="#991B1B"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </div>
          </div>
        </div>

        {/* Item 3 */}
        <div className="
    rounded-[18px] ring-1 ring-black/10 bg-white p-4
    transition-all duration-200 ease-out
    active:scale-[0.99] active:shadow-md
  ">
          <div className="font-montserrat text-[14px] font-bold text-slate-900">
            Kualitas Pelatihan
          </div>

          <div className="mt-3 grid grid-cols-2 gap-3">
            <div className="rounded-[14px] bg-red-800 px-3 py-3 text-white flex items-center justify-center text-center font-montserrat text-[12px] leading-[18px]">
              Pelatihan teknis dan
              <br />
              manajemen lengkap
            </div>

            <div className="rounded-[14px] bg-white px-3 py-3 text-slate-700 flex items-center justify-center text-center font-montserrat text-[12px] leading-[18px] ring-1 ring-black/10">
              Terbatas pada teknis dasar
            </div>
          </div>
        </div>

        {/* Item 4 */}
        <div className="
    rounded-[18px] ring-1 ring-black/10 bg-white p-4
    transition-all duration-200 ease-out
    active:scale-[0.99] active:shadow-md
  ">
          <div className="font-montserrat text-[14px] font-bold text-slate-900">
            Garansi Kepuasan
          </div>

          <div className="mt-3 grid grid-cols-2 gap-3">
            <div className="rounded-[14px] bg-red-800 px-3 py-3 text-white flex items-center justify-center">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/10">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M20 6L9 17l-5-5"
                    stroke="white"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </div>

            <div className="rounded-[14px] bg-white px-3 py-3 text-slate-700 flex items-center justify-center ring-1 ring-black/10">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-red-800/10">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M18 6L6 18M6 6l12 12"
                    stroke="#991B1B"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </div>
          </div>
        </div>

        {/* Item 5 */}
        <div className="
    rounded-[18px] ring-1 ring-black/10 bg-white p-4
    transition-all duration-200 ease-out
    active:scale-[0.99] active:shadow-md
  ">
          <div className="font-montserrat text-[14px] font-bold text-slate-900">
            Reputasi &amp; Kepercayaan Pelanggan
          </div>

          <div className="mt-3 grid grid-cols-2 gap-3">
            <div className="rounded-[14px] bg-red-800 px-3 py-3 text-white flex items-center justify-center text-center font-montserrat text-[12px] leading-[18px]">
              Terbukti dengan rating
              <br />
              tertinggi layanan kebersihan
            </div>

            <div className="rounded-[14px] bg-white px-3 py-3 text-slate-700 flex items-center justify-center text-center font-montserrat text-[12px] leading-[18px] ring-1 ring-black/10">
              Belum terbukti memiliki
              <br />
              kredibilitas
            </div>
          </div>
        </div>
      </div>

      {/* ===================== */}
      {/* DESKTOP (md+) */}
      {/* ===================== */}
      <div className="hidden md:block">
        {/* Head row */}
        <div className="grid grid-cols-12 items-center gap-6">
          <div className="col-span-12 md:col-span-4" />
          <div className="col-span-12 md:col-span-4 text-center font-montserrat text-[14px] tracking-wide text-red-700 font-extrabold">
            HOME STERIL
          </div>
          <div className="col-span-12 md:col-span-4 text-center font-montserrat text-[14px] tracking-wide text-slate-700">
            Kemitraan Lain
          </div>
        </div>

        {/* Rows wrapper */}
        <div className="mt-6 space-y-4">
          {/* Row 1 */}
          <div className="group grid grid-cols-12 items-stretch gap-6 transition-all duration-300 ease-out hover:-translate-y-[2px]">
            <div className="col-span-12 md:col-span-4 flex items-center">
              <div className="font-montserrat text-[16px] leading-[20px] font-bold text-slate-900 transition-colors duration-300 group-hover:text-red-700">
                Pendampingan Mitra
              </div>
            </div>

            <div className="col-span-12 md:col-span-4">
              <div className="h-full rounded-[14px] bg-red-800 px-6 py-4 text-white flex items-center justify-center transition-all duration-300 ease-out shadow-sm hover:shadow-xl hover:-translate-y-[1px] hover:ring-2 hover:ring-red-700/15">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/10 transition-transform duration-300 ease-out group-hover:scale-110">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M20 6L9 17l-5-5"
                      stroke="white"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </div>
            </div>

            <div className="col-span-12 md:col-span-4">
              <div className="h-full rounded-[14px] bg-white px-6 py-4 text-slate-700 flex items-center justify-center ring-1 ring-black/10 transition-all duration-300 ease-out shadow-sm hover:shadow-xl hover:-translate-y-[1px] hover:ring-2 hover:ring-red-700/15">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-red-800/10 transition-transform duration-300 ease-out group-hover:scale-110">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M18 6L6 18M6 6l12 12"
                      stroke="#991B1B"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </div>
            </div>
          </div>

          {/* Row 2 */}
          <div className="group grid grid-cols-12 items-stretch gap-6 transition-all duration-300 ease-out hover:-translate-y-[2px]">
            <div className="col-span-12 md:col-span-4 flex items-center">
              <div className="font-montserrat text-[16px] leading-[20px] font-bold text-slate-900 transition-colors duration-300 group-hover:text-red-700">
                Dukungan Promosi Digital
              </div>
            </div>

            <div className="col-span-12 md:col-span-4">
              <div className="h-full rounded-[14px] bg-red-800 px-6 py-4 text-white flex items-center justify-center transition-all duration-300 ease-out shadow-sm hover:shadow-xl hover:-translate-y-[1px] hover:ring-2 hover:ring-red-700/15">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/10 transition-transform duration-300 ease-out group-hover:scale-110">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M20 6L9 17l-5-5"
                      stroke="white"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </div>
            </div>

            <div className="col-span-12 md:col-span-4">
              <div className="h-full rounded-[14px] bg-white px-6 py-4 text-slate-700 flex items-center justify-center ring-1 ring-black/10 transition-all duration-300 ease-out shadow-sm hover:shadow-xl hover:-translate-y-[1px] hover:ring-2 hover:ring-red-700/15">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-red-800/10 transition-transform duration-300 ease-out group-hover:scale-110">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M18 6L6 18M6 6l12 12"
                      stroke="#991B1B"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </div>
            </div>
          </div>

          {/* Row 3 */}
          <div className="group grid grid-cols-12 items-stretch gap-6 transition-all duration-300 ease-out hover:-translate-y-[2px]">
            <div className="col-span-12 md:col-span-4 flex items-center">
              <div className="font-montserrat text-[16px] leading-[20px] font-bold text-slate-900 transition-colors duration-300 group-hover:text-red-700">
                Kualitas Pelatihan
              </div>
            </div>

            <div className="col-span-12 md:col-span-4">
              <div className="h-full rounded-[14px] bg-red-800 px-6 py-4 text-white flex items-center justify-center text-center font-montserrat text-[14px] leading-[20px] transition-all duration-300 ease-out shadow-sm hover:shadow-xl hover:-translate-y-[1px] hover:ring-2 hover:ring-red-700/15">
                Pelatihan teknis dan
                <br />
                manajemen lengkap
              </div>
            </div>

            <div className="col-span-12 md:col-span-4">
              <div className="h-full rounded-[14px] bg-white px-6 py-4 text-slate-700 flex items-center justify-center text-center font-montserrat text-[14px] leading-[20px] ring-1 ring-black/10 transition-all duration-300 ease-out shadow-sm hover:shadow-xl hover:-translate-y-[1px] hover:ring-2 hover:ring-red-700/15">
                Terbatas pada teknis dasar
              </div>
            </div>
          </div>

          {/* Row 4 */}
          <div className="group grid grid-cols-12 items-stretch gap-6 transition-all duration-300 ease-out hover:-translate-y-[2px]">
            <div className="col-span-12 md:col-span-4 flex items-center">
              <div className="font-montserrat text-[16px] leading-[20px] font-bold text-slate-900 transition-colors duration-300 group-hover:text-red-700">
                Garansi Kepuasan
              </div>
            </div>

            <div className="col-span-12 md:col-span-4">
              <div className="h-full rounded-[14px] bg-red-800 px-6 py-4 text-white flex items-center justify-center transition-all duration-300 ease-out shadow-sm hover:shadow-xl hover:-translate-y-[1px] hover:ring-2 hover:ring-red-700/15">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/10 transition-transform duration-300 ease-out group-hover:scale-110">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M20 6L9 17l-5-5"
                      stroke="white"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </div>
            </div>

            <div className="col-span-12 md:col-span-4">
              <div className="h-full rounded-[14px] bg-white px-6 py-4 text-slate-700 flex items-center justify-center ring-1 ring-black/10 transition-all duration-300 ease-out shadow-sm hover:shadow-xl hover:-translate-y-[1px] hover:ring-2 hover:ring-red-700/15">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-red-800/10 transition-transform duration-300 ease-out group-hover:scale-110">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M18 6L6 18M6 6l12 12"
                      stroke="#991B1B"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </div>
            </div>
          </div>

          {/* Row 5 */}
          <div className="group grid grid-cols-12 items-stretch gap-6 transition-all duration-300 ease-out hover:-translate-y-[2px]">
            <div className="col-span-12 md:col-span-4 flex items-center">
              <div className="font-montserrat text-[16px] leading-[20px] font-bold text-slate-900 transition-colors duration-300 group-hover:text-red-700">
                Reputasi &amp; Kepercayaan Pelanggan
              </div>
            </div>

            <div className="col-span-12 md:col-span-4">
              <div className="h-full rounded-[14px] bg-red-800 px-6 py-4 text-white flex items-center justify-center text-center font-montserrat text-[14px] leading-[20px] transition-all duration-300 ease-out shadow-sm hover:shadow-xl hover:-translate-y-[1px] hover:ring-2 hover:ring-red-700/15">
                Terbukti dengan rating
                <br />
                tertinggi layanan kebersihan
              </div>
            </div>

            <div className="col-span-12 md:col-span-4">
              <div className="h-full rounded-[14px] bg-white px-6 py-4 text-slate-700 flex items-center justify-center text-center font-montserrat text-[14px] leading-[20px] ring-1 ring-black/10 transition-all duration-300 ease-out shadow-sm hover:shadow-xl hover:-translate-y-[1px] hover:ring-2 hover:ring-red-700/15">
                Belum terbukti memiliki
                <br />
                kredibilitas
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
{/* Section: CTA - Waktunya Naik Kelas*/}
<section id="cta-naik-kelas" className="py-10 sm:py-14 md:py-16">
  <div className="mx-auto max-w-7xl px-4">
    <div
      className="
        relative overflow-hidden rounded-[28px] bg-red-700
        min-h-[clamp(340px,45vh,520px)]
        sm:min-h-[clamp(360px,52vh,480px)]
        md:min-h-[360px]
      "
    >
      {/* Decorative shapes */}
      <div className="absolute -left-12 bottom-8 h-44 w-44 rounded-full bg-white/10" />
      <div className="absolute -top-20 right-16 h-52 w-52 rounded-full bg-white/10" />
      <div className="absolute left-10 top-10 h-24 w-24 rounded-full bg-black/10 md:hidden" />
      <div className="absolute bottom-10 right-10 h-32 w-32 rounded-full bg-black/10 md:hidden" />

      {/* overlay */}
      <div className="absolute inset-0 bg-black/5" />

      {/* Content */}
      <div
        className="
          relative z-10 h-full
          grid grid-cols-1 items-start gap-8
          p-6 sm:p-8
          md:grid-cols-2 md:items-center md:gap-10 md:p-14
        "
      >
        {/* Left */}
        <div className="text-white">
          <h3 className="font-montserrat font-bold text-[28px] leading-[34px] sm:text-[34px] sm:leading-[40px] md:text-[36px] md:leading-[42px]">
            Waktunya Naik Kelas
            <br />
            <span className="text-white">Bersama Home Steril</span>
          </h3>

          <p className="mt-4 max-w-lg font-montserrat text-[14px] leading-[22px] text-white/90 sm:text-[16px] sm:leading-[24px]">
            Mulai langkah pertama Anda membangun bisnis kebersihan yang tumbuh,
            terarah, dan berdaya saing tinggi.
          </p>

          {/* CTA (Mobile)*/}
          <div className="mt-10 sm:mt-8 md:hidden flex flex-col gap-3">
          <a
            href="https://api.whatsapp.com/"
            className="
              inline-flex w-full items-center justify-center gap-2
              rounded-full border border-white/80
              bg-white/0 px-6 py-3
              font-montserrat text-[14px] font-semibold text-white
              backdrop-blur-[1px]
              transition
              hover:bg-white/10 hover:border-white
            "
          >
              Mulai Bergabung Hari Ini
              <span className="text-[16px] leading-none">›</span>
            </a>
          </div>
        </div>

        {/* Right*/}
        <div className="hidden md:flex md:items-center md:justify-end">
          <a
            href="https://api.whatsapp.com/"
            className="
              inline-flex items-center justify-center gap-2
              rounded-full border border-white/80
              bg-white/0 px-7 py-3.5
              font-montserrat text-[14px] font-semibold text-white
              backdrop-blur-[1px]
              transition
              hover:bg-white/10 hover:border-white
              shadow-[0_18px_50px_rgba(0,0,0,0.18)]"
          >
            Mulai Bergabung Hari Ini
            <span className="text-[16px] leading-none">›</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</section>

        {/* Section: Klien Terpercaya */}
        <section id="klien-terpercaya" className="py-14 md:py-20">
          <div className="mx-auto max-w-7xl px-4">
            {/* Header */}
            <div className="text-center">
              <h2 className="font-montserrat text-2xl leading-tight sm:text-3xl sm:leading-[36px] lg:text-[44px] lg:leading-[48px] font-bold tracking-normal text-slate-900">
                Klien <span className="text-red-700">Terpercaya</span>
              </h2>

              <p className="mt-4 mx-auto max-w-3xl font-montserrat text-[16px] leading-[22px] font-normal text-slate-600">
                HOME STERIL telah bekerja sama dan dipercaya oleh berbagai
                perusahaan terkemuka di Indonesia
              </p>
            </div>

            {/* Logo */}
            <div className="mt-14">
              <div className="grid grid-cols-2 items-center justify-items-center gap-y-10 gap-x-8 sm:grid-cols-4">
                {/* Telkomsel */}
                <img
                  src="telkomsel.png"
                  alt="Telkomsel"
                  className="
            h-[50px] w-auto object-contain
            opacity-70 grayscale
            transition-all duration-300 ease-out
            hover:opacity-100 hover:grayscale-0
            hover:-translate-y-1
            hover:drop-shadow-[0_10px_18px_rgba(0,0,0,0.10)]
            active:scale-[0.98]
          "
                  loading="lazy"
                />

                {/* JAKPRO */}
                <img
                  src="/jakpro.png"
                  alt="JAKPRO"
                  className="
            h-[50px] w-auto object-contain
            opacity-70 grayscale
            transition-all duration-300 ease-out
            hover:opacity-100 hover:grayscale-0
            hover:-translate-y-1
            hover:drop-shadow-[0_10px_18px_rgba(0,0,0,0.10)]
            active:scale-[0.98]
          "
                  loading="lazy"
                />

                {/* Transjakarta */}
                <img
                  src="/transjakarta.png"
                  alt="Transjakarta"
                  className="
            h-[70px] w-auto object-contain
            opacity-70 grayscale
            transition-all duration-300 ease-out
            hover:opacity-100 hover:grayscale-0
            hover:-translate-y-1
            hover:drop-shadow-[0_10px_18px_rgba(0,0,0,0.10)]
            active:scale-[0.98]
          "
                  loading="lazy"
                />

                {/* TOWER */}
                <img
                  src="/tower.png"
                  alt="TOWER"
                  className="
            h-[50px] w-auto object-contain
            opacity-70 grayscale
            transition-all duration-300 ease-out
            hover:opacity-100 hover:grayscale-0
            hover:-translate-y-1
            hover:drop-shadow-[0_10px_18px_rgba(0,0,0,0.10)]
            active:scale-[0.98]
          "
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>
        {/* Section: FAQ */}
        <section id="faq" className="py-14 md:py-20">
          <div className="mx-auto max-w-7xl px-4">
            {/* Header */}
            <div className="text-center">
              <h2 className="font-montserrat text-2xl leading-tight sm:text-3xl sm:leading-[36px] lg:text-[44px] lg:leading-[48px] font-bold tracking-normal text-slate-900">
                Pertanyaan{" "}
                <span className="text-red-700">yang Sering Diajukan</span>
              </h2>

              <p className="mt-4 mx-auto max-w-3xl font-montserrat text-[16px] leading-[22px] font-normal text-slate-600">
                Temukan jawaban untuk pertanyaan umum tentang kemitraan HOME
                STERIL
              </p>
            </div>

            {/* FAQ Grid */}
            <div className="mt-14 grid grid-cols-1 gap-x-16 gap-y-8 md:grid-cols-2">
              {/* LEFT */}
              <div className="space-y-6">
                {/* Q1 */}
                <details className="group">
                  <summary className="flex cursor-pointer items-center gap-4 rounded-xl py-3">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-[#E8C9C5]">
                      <svg
                        className="transition-transform duration-200 group-open:rotate-180"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                      >
                        <path
                          d="M6 9l6 6 6-6"
                          stroke="#111827"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>

                    <span className="font-montserrat text-[15px] leading-[22px] font-normal text-slate-800">
                      Apa keuntungan utama bergabung sebagai mitra Home Steril?
                    </span>
                  </summary>

                  <div className="pl-[52px] pr-2 pb-3">
                    <p className="font-montserrat text-[14px] leading-[22px] text-slate-600">
                      Anda mendapatkan dukungan sistem operasional yang sudah
                      jadi (SOP, alur kerja, standar layanan), akses brand HOME
                      STERIL, serta bantuan pemasaran untuk mempercepat akuisisi
                      pelanggan. Fokus Anda tinggal eksekusi layanan dengan
                      kualitas konsisten.
                    </p>
                  </div>
                </details>

                {/* Q2 */}
                <details className="group">
                  <summary className="flex cursor-pointer items-center gap-4 rounded-xl py-3">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-[#E8C9C5]">
                      <svg
                        className="transition-transform duration-200 group-open:rotate-180"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                      >
                        <path
                          d="M6 9l6 6 6-6"
                          stroke="#111827"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>

                    <span className="font-montserrat text-[15px] leading-[22px] font-normal text-slate-800">
                      Bagaimana proses bergabung menjadi mitra?
                    </span>
                  </summary>

                  <div className="pl-[52px] pr-2 pb-3">
                    <p className="font-montserrat text-[14px] leading-[22px] text-slate-600">
                      Prosesnya umumnya: isi formulir pendaftaran → konsultasi
                      kebutuhan wilayah/kapasitas → verifikasi & kesepakatan
                      kerja sama → onboarding (training + SOP + tools) → mulai
                      operasional. Tim kami akan mendampingi di setiap tahap.
                    </p>
                  </div>
                </details>

                {/* Q3 */}
                <details className="group">
                  <summary className="flex cursor-pointer items-center gap-4 rounded-xl py-3">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-[#E8C9C5]">
                      <svg
                        className="transition-transform duration-200 group-open:rotate-180"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                      >
                        <path
                          d="M6 9l6 6 6-6"
                          stroke="#111827"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>

                    <span className="font-montserrat text-[15px] leading-[22px] font-normal text-slate-800">
                      Apakah saya harus memiliki pengalaman di bidang
                      kebersihan?
                    </span>
                  </summary>

                  <div className="pl-[52px] pr-2 pb-3">
                    <p className="font-montserrat text-[14px] leading-[22px] text-slate-600">
                      Tidak wajib. Yang penting Anda siap belajar, disiplin
                      menjalankan SOP, dan berkomitmen pada standar kualitas.
                      Training operasional & layanan akan membantu Anda memahami
                      teknik kerja, komunikasi ke pelanggan, sampai kontrol
                      kualitas.
                    </p>
                  </div>
                </details>
              </div>

              {/* RIGHT */}
              <div className="space-y-6">
                {/* Q4 */}
                <details className="group">
                  <summary className="flex cursor-pointer items-center gap-4 rounded-xl py-3">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-[#E8C9C5]">
                      <svg
                        className="transition-transform duration-200 group-open:rotate-180"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                      >
                        <path
                          d="M6 9l6 6 6-6"
                          stroke="#111827"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>

                    <span className="font-montserrat text-[15px] leading-[22px] font-normal text-slate-800">
                      Apa saja fasilitas yang saya dapatkan setelah bergabung?
                    </span>
                  </summary>

                  <div className="pl-[52px] pr-2 pb-3">
                    <p className="font-montserrat text-[14px] leading-[22px] text-slate-600">
                      Anda memperoleh paket dukungan: hak pakai brand, materi
                      promosi & marketing kit, training operasional, panduan
                      standar layanan, dukungan customer service, serta akses
                      jaringan/lead dari platform (sesuai ketersediaan wilayah &
                      kapasitas operasional).
                    </p>
                  </div>
                </details>

                {/* Q5 */}
                <details className="group">
                  <summary className="flex cursor-pointer items-center gap-4 rounded-xl py-3">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-[#E8C9C5]">
                      <svg
                        className="transition-transform duration-200 group-open:rotate-180"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                      >
                        <path
                          d="M6 9l6 6 6-6"
                          stroke="#111827"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>

                    <span className="font-montserrat text-[15px] leading-[22px] font-normal text-slate-800">
                      Apakah Home Steril membantu dalam promosi bisnis mitra?
                    </span>
                  </summary>

                  <div className="pl-[52px] pr-2 pb-3">
                    <p className="font-montserrat text-[14px] leading-[22px] text-slate-600">
                      Ya. Kami menyiapkan materi promosi, arahan strategi
                      pemasaran, dan dukungan kampanye (sesuai program yang
                      berjalan). Tujuannya agar mitra lebih cepat dikenal dan
                      memperoleh permintaan layanan secara konsisten.
                    </p>
                  </div>
                </details>

                {/* Q6 */}
                <details className="group">
                  <summary className="flex cursor-pointer items-center gap-4 rounded-xl py-3">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-[#E8C9C5]">
                      <svg
                        className="transition-transform duration-200 group-open:rotate-180"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                      >
                        <path
                          d="M6 9l6 6 6-6"
                          stroke="#111827"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>

                    <span className="font-montserrat text-[15px] leading-[22px] font-normal text-slate-800">
                      Kapan saya bisa mulai menjalankan operasional setelah
                      bergabung?
                    </span>
                  </summary>

                  <div className="pl-[52px] pr-2 pb-3">
                    <p className="font-montserrat text-[14px] leading-[22px] text-slate-600">
                      Setelah onboarding selesai. Biasanya Anda bisa mulai
                      operasional setelah training, setup alat & tim (jika ada),
                      serta memastikan standar layanan siap dijalankan. Tim kami
                      akan membantu memastikan Anda “ready” sebelum menerima
                      order pertama.
                    </p>
                  </div>
                </details>
              </div>
            </div>
          </div>
        </section>

 {/* Section: Panel Diskusi */}
<section id="diskusi" className="py-14 md:py-20">
  <div className="mx-auto max-w-7xl px-4">
    <div className="rounded-[22px] bg-white shadow-sm ring-1 ring-black/5 px-4 py-8 md:px-10 md:py-10 transition-all duration-300 ease-out hover:shadow-lg hover:ring-black/10">
      {/* Header */}
      <div className="text-center">
        <h2 className="mx-auto max-w-[22rem] md:max-w-none font-montserrat text-[30px] leading-[34px] md:text-[44px] md:leading-[48px] font-bold tracking-normal text-slate-900">
          Panel Diskusi{" "}
          <span className="text-red-700">Mitra HOME STERIL</span>
        </h2>

        <p className="mt-3 md:mt-4 mx-auto max-w-3xl font-montserrat text-[14px] leading-[20px] md:text-[16px] md:leading-[22px] font-normal text-slate-600">
          Ruang interaktif bagi para mitra untuk berbagi pengalaman, strategi,
          dan solusi bisnis kebersihan bersama tim profesional Home Steril
        </p>
      </div>

      {/* Login prompt */}
      <div className="mt-7 md:mt-10 flex flex-col items-center gap-3">
        <div className="font-montserrat text-[13px] md:text-[14px] text-slate-600">
          Silakan masuk untuk memberikan pertanyaan
        </div>

        <button
          type="button"
          className="inline-flex items-center gap-2 rounded-[10px] border border-slate-200 bg-white px-4 py-2 text-[14px] font-medium text-slate-900 shadow-sm transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-slate-50 hover:shadow-md hover:border-slate-300 active:translate-y-0 active:scale-[0.99]"
        >
          <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-slate-100 transition-transform duration-300 ease-out group-hover:scale-105">
            G
          </span>
          Login dengan Google
        </button>
      </div>

      {/* List */}
      {(() => {
        const threads = [
          {
            id: "t1",
            user: {
              name: "Budi Santoso",
              initials: "BS",
              avatar: "/budi.png",
            },
            time: "3 jam yang lalu",
            question:
              "Apakah Home Steril membantu dalam membuat konten promosi di media sosial?",
            likes: 6,
            replies: [
              {
                id: "t1r1",
                user: {
                  name: "HOME STERIL",
                  initials: "HS",
                  avatar: "/admin.png",
                  isOfficial: true,
                },
                time: "2 jam yang lalu",
                message:
                  "Ya, kami bantu! Setiap bulan mitra akan mendapat template desain dan contoh caption promosi yang bisa langsung digunakan atau disesuaikan dengan karakter bisnis masing-masing.",
                likes: 10,
              },
            ],
          },
          {
            id: "t2",
            user: {
              name: "Maya Putri",
              initials: "MP",
              avatar: "/maya.png",
            },
            time: "5 jam yang lalu",
            question:
              "Bagaimana cara menjaga kualitas layanan agar pelanggan tetap repeat order?",
            likes: 4,
            replies: [],
          },
          {
            id: "t3",
            user: {
              name: "Nurul Amaliah",
              initials: "NA",
              avatar: "/nurul.png",
            },
            time: "3 bulan yang lalu",
            question:
              "Saya baru bergabung, bagaimana kalau ada kendala saat menjalankan operasional di lapangan?",
            likes: 2,
            replies: [
              {
                id: "t3r1",
                user: {
                  name: "HOME STERIL",
                  initials: "HS",
                  avatar: "/admin.png",
                  isOfficial: true,
                },
                time: "2 jam yang lalu",
                message:
                  "Tenang, tim support kami selalu aktif di grup komunitas mitra. Anda bisa konsultasi langsung, dan jika dibutuhkan kami juga bisa bantu pendampingan jarak jauh untuk menyelesaikan masalah secara cepat.",
                likes: 2,
              },
            ],
          },
        ];

        function Avatar({
          name,
          initials,
          avatar,
          isOfficial,
        }: {
          name: string;
          initials: string;
          avatar?: string;
          isOfficial?: boolean;
        }) {
          return (
            <div
              className={[
                "relative h-10 w-10 md:h-12 md:w-12 overflow-hidden rounded-full",
                isOfficial ? "ring-2 ring-red-700/20" : "ring-1 ring-black/5",
                "bg-slate-200",
                "transition-all duration-300 ease-out",
                "group-hover:shadow-md group-hover:-translate-y-0.5",
              ].join(" ")}
              title={name}
            >
              {avatar ? (
                <img
                  src={avatar}
                  alt={name}
                  className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center text-[12px] font-bold text-slate-700">
                  {initials}
                </div>
              )}
            </div>
          );
        }

        return (
          <div className="mt-8 md:mt-10 space-y-5 md:space-y-6">
            {threads.map((t) => (
              <div
                key={t.id}
                className="
                  group
                  rounded-[18px] bg-white p-4 md:p-6 shadow-sm ring-1 ring-black/10
                  transition-all duration-300 ease-out
                  hover:-translate-y-1 hover:shadow-lg hover:ring-red-700/10
                  active:translate-y-0 active:scale-[0.998]
                "
              >
                {/* Question */}
                <div className="flex items-start gap-3 md:gap-4">
                  <Avatar
                    name={t.user.name}
                    initials={t.user.initials}
                    avatar={t.user.avatar}
                  />

                  <div className="min-w-0 flex-1">
                    <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between md:gap-4">
                      <div className="min-w-0">
                        <div className="font-montserrat text-[15px] md:text-[16px] font-bold text-slate-900 transition-colors duration-300 group-hover:text-red-700">
                          {t.user.name}
                        </div>
                        <div className="mt-1 font-montserrat text-[13px] leading-[19px] md:text-[14px] md:leading-[20px] text-slate-700">
                          {t.question}
                        </div>
                      </div>

                      <div className="shrink-0 font-montserrat text-[11px] md:text-[12px] text-slate-500 md:text-right">
                        {t.time}
                      </div>
                    </div>

                    <div className="mt-3 flex flex-wrap items-center gap-3 md:gap-4 font-montserrat text-[11px] md:text-[12px] text-slate-500">
                      <div className="inline-flex items-center gap-2 transition-transform duration-300 ease-out group-hover:scale-[1.02]">
                        <span className="text-amber-500">👍</span>
                        <span>{t.likes}</span>
                      </div>

                      <button
                        type="button"
                        className="transition-colors duration-300 hover:text-slate-700 hover:underline"
                      >
                        Balas
                      </button>

                      {t.replies.length > 0 ? (
                        <button
                          type="button"
                          className="transition-colors duration-300 hover:text-slate-700 hover:underline"
                        >
                          Sembunyikan {t.replies.length} balasan
                        </button>
                      ) : null}
                    </div>
                  </div>
                </div>

                {/* Replies */}
                {t.replies.length > 0 && (
                  <div className="mt-4 md:mt-5 space-y-3 md:space-y-4">
                    {t.replies.map((r) => (
                      <div
                        key={r.id}
                        className="
                          rounded-[16px] bg-slate-50 p-4 md:p-5 ring-1 ring-black/5
                          transition-all duration-300 ease-out
                          hover:-translate-y-0.5 hover:shadow-md hover:ring-red-700/10
                        "
                      >
                        <div className="flex items-start gap-3 md:gap-4">
                          <Avatar
                            name={r.user.name}
                            initials={r.user.initials}
                            avatar={r.user.avatar}
                            isOfficial={r.user.isOfficial}
                          />

                          <div className="min-w-0 flex-1">
                            <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between md:gap-4">
                              <div className="flex items-center gap-2">
                                <div className="font-montserrat text-[13px] md:text-[14px] font-bold text-slate-900">
                                  {r.user.name}
                                </div>

                                {r.user.isOfficial ? (
                                  <span className="inline-flex items-center rounded-full bg-red-50 px-2 py-0.5 text-[10px] md:text-[11px] font-semibold text-red-700 ring-1 ring-red-700/10 transition-transform duration-300 ease-out hover:scale-[1.03]">
                                    Admin
                                  </span>
                                ) : null}
                              </div>

                              <div className="shrink-0 font-montserrat text-[11px] md:text-[12px] text-slate-500 md:text-right">
                                {r.time}
                              </div>
                            </div>

                            <div className="mt-2 font-montserrat text-[13px] leading-[19px] md:text-[14px] md:leading-[20px] text-slate-700">
                              {r.message}
                            </div>

                            <div className="mt-3 flex flex-wrap items-center gap-3 md:gap-4 font-montserrat text-[11px] md:text-[12px] text-slate-500">
                              <div className="inline-flex items-center gap-2 transition-transform duration-300 ease-out hover:scale-[1.02]">
                                <span className="text-amber-500">👍</span>
                                <span>{r.likes}</span>
                              </div>

                              <button
                                type="button"
                                className="transition-colors duration-300 hover:text-slate-700 hover:underline"
                              >
                                Balas
                              </button>

                              <button
                                type="button"
                                className="transition-colors duration-300 hover:text-slate-700 hover:underline"
                              >
                                Lihat 1 balasan
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* Arrow down */}
            <div className="pt-1 md:pt-2 flex justify-center">
              <button
                type="button"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white text-slate-700 ring-1 ring-black/10 transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-slate-50 hover:shadow-md active:translate-y-0 active:scale-[0.98]"
                aria-label="Scroll down"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  className="transition-transform duration-300 ease-out group-hover:translate-y-0.5"
                >
                  <path
                    d="M6 9l6 6 6-6"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        );
      })()}
    </div>
  </div>
</section>

        {/* Section: Rating / Seberapa Bermanfaat Postingan Ini */}
        <section id="rating" className="py-12 md:py-16">
          <div className="mx-auto max-w-7xl px-4">
            <div
              className="
        rounded-[18px] bg-slate-100 px-6 py-10 text-center md:px-10
        transition-all duration-300 ease-out
        hover:-translate-y-1 hover:shadow-lg
      "
            >
              <h2 className="font-montserrat text-[28px] leading-[34px] font-bold text-slate-900 md:text-[34px] md:leading-[40px]">
                Seberapa Bermanfaat Postingan Ini?
              </h2>

              {/* Stars */}
              <div
                className="mt-5 flex justify-center gap-2"
                aria-label="Rating 5 dari 5"
              >
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg
                    key={i}
                    width="34"
                    height="34"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    className="
              h-8 w-8 md:h-10 md:w-10
              transition-all duration-300 ease-out
              hover:scale-110
              hover:drop-shadow-[0_6px_12px_rgba(250,204,21,0.55)]
            "
                  >
                    <path
                      d="M12 2.6l2.82 5.72 6.32.92-4.57 4.45 1.08 6.29L12 17.95 6.35 19.98l1.08-6.29L2.86 9.24l6.32-.92L12 2.6z"
                      fill="#FACC15"
                    />
                  </svg>
                ))}
              </div>

              {/* Score */}
              <div className="mt-4 flex items-baseline justify-center gap-3">
                <div
                  className="
            font-montserrat text-[36px] leading-[40px] font-extrabold text-amber-500
            md:text-[44px] md:leading-[48px]
            transition-transform duration-300 ease-out
            hover:scale-105
          "
                >
                  5.0
                </div>
                <div className="font-montserrat text-[16px] leading-[22px] font-normal text-slate-700">
                  dari 5 bintang
                </div>
              </div>

              <div className="mt-3 font-montserrat text-[15px] leading-[20px] text-slate-500">
                Berdasarkan 250 rating pembaca
              </div>
            </div>
          </div>
        </section>
        {/* Section: CTA Akhir */}
        <section id="cta-akhir" className="py-14 md:py-20">
          <div className="mx-auto max-w-7xl px-4">
            <div className="relative overflow-hidden rounded-[28px] bg-red-700">
              {/* Decorative shapes */}
              <div className="absolute -left-10 bottom-6 h-40 w-40 rounded-full bg-white/10" />
              <div className="absolute -top-16 right-24 h-48 w-48 rounded-full bg-white/10" />

              <div className="relative grid grid-cols-1 items-center gap-10 p-10 md:grid-cols-2 md:p-14">
                {/* Left content */}
                <div className="text-white">
                  <h2 className="font-montserrat text-[36px] leading-[42px] font-bold">
                    Siap Memulai Bisnis Kebersihan
                    <br />
                    <span className="text-white">Bersama HOME STERIL?</span>
                  </h2>

                  <p className="mt-4 max-w-lg font-montserrat text-[16px] leading-[24px] text-white/90">
                    Jangan tunda peluang Anda. Dapatkan sistem, pendampingan,
                    dan dukungan brand yang sudah terbukti dipercaya klien besar
                    di Indonesia.
                  </p>

                  <div className="mt-8 flex flex-wrap gap-4">
                    <a
                      href="https://api.whatsapp.com/"
                      className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-montserrat text-[14px] font-semibold text-red-700 transition hover:bg-white/90"
                    >
                      Daftar Mitra Sekarang
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5 12h14M13 5l6 7-6 7"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </a>

                    <a
                      href="#faq"
                      className="inline-flex items-center rounded-full border border-white/40 px-6 py-3 font-montserrat text-[14px] font-medium text-white transition hover:bg-white/10"
                    >
                      Lihat FAQ
                    </a>
                  </div>
                </div>

                {/* Right image */}
                <div className="relative flex justify-center md:justify-end">
                  <img
                    src="/cta-cleaner.png"
                    alt="Mitra Home Steril"
                    className="w-full max-w-[360px] object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-slate-200 bg-white">
          <div className="mx-auto max-w-7xl px-4 py-14">
            <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
              {/* Brand / About */}
              <div>
                <img
                  src="/logo-home-steril.png"
                  alt="Home Steril"
                  className="h-10 w-auto"
                />

                <div className="mt-4 font-montserrat text-[14px] leading-[22px] text-slate-700">
                  <div className="font-semibold text-slate-900">
                    Home Steril Indonesia
                  </div>
                  <div className="text-slate-700">
                    PT. Infiniti Digital Indonesia
                  </div>

                  <p className="mt-4 italic text-slate-600">
                    “Kami adalah mitra kebersihan, perawatan dan perbaikan rumah
                    - kantor Anda yang dapat diandalkan. Dengan komitmen untuk
                    kualitas dan kepuasan pelanggan, kami menyediakan layanan
                    rumah - kantor yang profesional dan terpercaya. Hubungi kami
                    hari ini untuk pengalaman kebersihan yang tak tertandingi!”
                  </p>
                </div>
              </div>

              {/* Contact */}
              <div>
                <div className="font-montserrat text-[14px] font-bold tracking-wide text-slate-900">
                  HUBUNGI KAMI
                </div>

                <div className="mt-5 font-montserrat text-[14px] leading-[22px] text-slate-700">
                  <div className="font-semibold text-slate-900">Alamat:</div>
                  <div className="mt-1 text-slate-700">
                    <a
                      href="https://www.google.com/maps/place/Home-Steril+%7CCuci+Kasur+-Laundry+Kasur+-Cuci+Sofa+-Vacuum+Tungau+-Jasa+Bersih+Bersih+Rumah+-Kuras+Toren+-Pembantu+Harian/@-6.3271646,106.793534,17z/data=!3m1!4b1!4m6!3m5!1s0x2e69f1479a03efd5:0x89641142eeac2f8!8m2!3d-6.3271646!4d106.7961089!16s%2Fg%2F11ht5h7_31?entry=ttu&g_ep=EgoyMDI2MDExMy4wIKXMDSoASAFQAw%3D%3D"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block hover:text-red-700 transition-colors"
                      aria-label="Buka alamat Home Steril di Google Maps"
                    >
                      Home Steril Jabodetabek, Sneakershoot Building (samping Resto Cubuk Bamboo),
                      <br />
                      Jl. Raya Gandul No.29A, Depok City, West Java 16512
                    </a>
                  </div>

                  <div className="mt-5 font-semibold text-slate-900">
                    Kontak:
                  </div>
                  <div className="mt-1">
                    Whatsapp/Telepon:{" "}
                    <a
                      href="tel:+6288908769669"
                      className="font-semibold text-slate-800 hover:text-red-700"
                    >
                      +62-889-0876-9669
                    </a>
                    <br />
                    Email:{" "}
                    <a
                      href="mailto:info@home-steril.com"
                      className="font-semibold text-slate-800 hover:text-red-700"
                    >
                      info@home-steril.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Menu + Social */}
              <div>
                <div className="font-montserrat text-[14px] font-bold tracking-wide text-slate-900">
                  MENU
                </div>

                <div className="mt-5 grid grid-cols-2 gap-8">
                  <ul className="space-y-2 font-montserrat text-[14px] text-slate-700">
                    <li>
                      <a
                        href="https://home-steril.com/"
                        className="hover:text-red-700"
                      >
                        Beranda
                      </a>
                    </li>
                    <li>
                      <a href="#faq" className="hover:text-red-700">
                        FAQ
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://home-steril.com/contact"
                        className="hover:text-red-700"
                      >
                        Hubungi Kami
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://home-steril.com/contact"
                        className="hover:text-red-700"
                      >
                        Gabung Mitra
                      </a>
                    </li>
                  </ul>

                  <ul className="space-y-2 font-montserrat text-[14px] text-slate-700">
                    <li>
                      <a
                        href="https://home-steril.com/services"
                        className="hover:text-red-700"
                      >
                        Layanan
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://home-steril.com/about"
                        className="hover:text-red-700"
                      >
                        Tentang Kami
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://home-steril.com/blog"
                        className="hover:text-red-700"
                      >
                        Blog
                      </a>
                    </li>
                  </ul>
                </div>

                {/* Social icons */}
                <div className="mt-6 flex flex-wrap items-center gap-3">
                  <a
                    href="https://www.facebook.com/profile.php?id=100064338030557&mibextid=ZbWKwL"
                    aria-label="Facebook"
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-black text-white hover:bg-black/90"
                  >
                    {/* facebook icon */}
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M22 12a10 10 0 10-11.5 9.9v-7H8v-3h2.5V9.7c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.4h-1.2c-1.2 0-1.6.8-1.6 1.5V12H18l-.5 3h-2.7v7A10 10 0 0022 12z" />
                    </svg>
                  </a>

                  <a
                    href="https://www.instagram.com/home.steril/"
                    aria-label="Instagram"
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-black text-white hover:bg-black/90"
                  >
                    {/* instagram icon */}
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5z"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                      <path
                        d="M12 17a5 5 0 100-10 5 5 0 000 10z"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                      <path
                        d="M17.5 6.5h.01"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                  </a>

                  <a
                    href="https://www.tiktok.com/@home.steril?_t=8kGeKzEzZjz&_r=1"
                    aria-label="TikTok"
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-black text-white hover:bg-black/90"
                  >
                    {/* tiktok icon (simple) */}
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M16 3c.6 2.8 2.2 4.4 5 5v4c-2.7 0-4.4-.9-6-2.2V17a6 6 0 11-6-6c.6 0 1.2.1 1.7.2V15a2 2 0 10-2.2 2A2 2 0 0013 15V3h3z" />
                    </svg>
                  </a>

                  <a
                    href="https://youtube.com/@homesteril?si=cWZYEb9RHy61Negk"
                    aria-label="YouTube"
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-black text-white hover:bg-black/90"
                  >
                    {/* youtube icon */}
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M21.8 8s-.2-1.6-.9-2.3c-.9-.9-2-.9-2.5-1C15 4.4 12 4.4 12 4.4h0s-3 0-6.4.3c-.5.1-1.6.1-2.5 1C2.4 6.4 2.2 8 2.2 8S2 9.9 2 11.8v.4C2 14.1 2.2 16 2.2 16s.2 1.6.9 2.3c.9.9 2.1.9 2.6 1 1.9.2 6.3.3 6.3.3s3 0 6.4-.3c.5-.1 1.6-.1 2.5-1 .7-.7.9-2.3.9-2.3s.2-1.9.2-3.8v-.4c0-1.9-.2-3.8-.2-3.8zM10 15V9l6 3-6 3z" />
                    </svg>
                  </a>

                  <a
                    href="https://www.linkedin.com/company/home-steril?originalSubdomain=id"
                    aria-label="LinkedIn"
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-black text-white hover:bg-black/90"
                  >
                    {/* linkedin icon */}
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M6.5 6.5A2 2 0 114.5 4.5a2 2 0 012 2zM5 8h3v12H5V8zm5 0h3v1.6h.1A3.3 3.3 0 0116 7.9c3.2 0 3.8 2.1 3.8 4.9V20h-3v-6.1c0-1.5 0-3.4-2.1-3.4s-2.4 1.6-2.4 3.3V20h-3V8z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="mt-12 border-t border-slate-200 pt-5">
              <div className="flex flex-col gap-3 font-montserrat text-[13px] text-slate-600 md:flex-row md:items-center md:justify-between">
                <div className="flex flex-wrap gap-6">
                  <a
                    href="https://home-steril.com/privacy-policy"
                    className="hover:text-red-700"
                  >
                    Kebijakan Privasi
                  </a>
                  <a
                    href="https://home-steril.com/term-and-condition"
                    className="hover:text-red-700"
                  >
                    Syarat dan Ketentuan
                  </a>
                </div>

                <div>© Copyright 2026 Home Steril Indonesia.</div>
              </div>

              {/* SEO keywords block */}
              <div className="mt-6 text-[12px] leading-[18px] text-slate-500">
                wet cleaning kasur, Cuci springbed, cuci spring bed, laundry
                kasur terdekat, laundry kasur, jasa bersih kasur, jasa bersihkan
                kasur, jasa pembersih kasur, laundry springbed, laundry spring
                bed, cuci ambal, harga cuci spring bed, harga cuci springbed,
                pembersih spring bed, jasa bersih spring bed, jasa bersih
                springbed, jasa bersihkan springbed, harga jasa cuci springbed,
                harga laundry spring bed, harga laundry springbed, jasa cleaning
                kasur, Harga Cuci Kasur, Cuci Kasur Murah, Cuci kasur terdekat,
                Bersihkan Kasur, membersihkan kasur, mencuci kasur, pembersih
                kasur, laundry springbed, pembersih kasur spring bed, Bed
                Cleaning, Mattress cleaning, Springbed cleaning, spring bed
                cleaning, mattress cleaning, Bed laundry, service cuci kasur,
                tempat cuci kasur terdekat, tukang bersihin kasur, tukang cuci
                kasur, tukang cuci spring bed.
              </div>
            </div>
          </div>

          {/* WhatsApp Floating Button */}
          <a
            href="https://wa.me/62888908769669?text=Halo%20Home%20Steril,%20saya%20ingin%20info%20kemitraan."
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat WhatsApp Home Steril"
            className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full shadow-lg transition hover:scale-105"
          >
            <img
              src="/logo-wa.png"
              alt="WhatsApp"
              className="h-14 w-14 object-contain"
            />
          </a>
        </footer>
      </main>
    </div>
  );
}
