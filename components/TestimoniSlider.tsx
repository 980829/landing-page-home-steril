"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

type Slide = {
  name: string;
  role: string;
  quote: string;
  image: string;
};

export default function TestimoniSlider() {
  const slides: Slide[] = useMemo(
    () => [
      {
        name: "Budi",
        role: "Mitra HOME STERIL Jakarta",
        quote:
          "Awalnya saya ragu, tapi ternyata Home Steril sangat membantu saya punya usaha sendiri. Training jelas, sistemnya mudah, dan order jalan terus.",
        image: "/testimoni.png",
      },
      {
        name: "Rina",
        role: "Mitra HOME STERIL Depok",
        quote:
          "SOP dan tools-nya lengkap. Saya tinggal fokus layanan, sementara sistem booking dan support-nya dibantu. Sangat praktis.",
        image: "/testimoni 2.png",
      },
      {
        name: "Agus",
        role: "Mitra HOME STERIL Tangerang",
        quote:
          "Setelah join, saya bisa langsung jalan. Branding dan materi promosinya memudahkan dapat order lebih cepat dari yang saya kira.",
        image: "/testimoni.png",
      },
      {
        name: "Sari",
        role: "Mitra HOME STERIL Bekasi",
        quote:
          "Saya suka karena ada pendampingan. Kalau ada kendala di lapangan, responnya cepat. Jadi lebih percaya diri kelola tim.",
        image: "/testimoni 2.png",
      },
      {
        name: "Doni",
        role: "Mitra HOME STERIL Bogor",
        quote:
          "Kualitas training dan kontrolnya bagus. Saya jadi punya standar kerja yang jelas, pelanggan puas, repeat order pun meningkat.",
        image: "/testimoni.png",
      },
    ],
    []
  );

  const [idx, setIdx] = useState(0);

  // autoslide tiap 10 detik
  useEffect(() => {
    const t = setInterval(() => {
      setIdx((p) => (p + 1) % slides.length);
    }, 10000);
    return () => clearInterval(t);
  }, [slides.length]);

  const s = slides[idx];

  return (
    <div
      className="
        group
        relative
        rounded-[28px] bg-white overflow-hidden
        ring-1 ring-black/10 shadow-sm
        transition-all duration-300 ease-out
        hover:-translate-y-1 hover:shadow-xl hover:ring-2 hover:ring-red-700/20
        active:scale-[0.99]
      "
    >
      {/* glow layer */}
      <div
        className="
          pointer-events-none
          absolute inset-0
          opacity-0
          transition-opacity duration-300
          group-hover:opacity-100
          bg-[radial-gradient(120%_120%_at_50%_0%,rgba(220,38,38,0.12),transparent_60%)]
        "
      />

      <div className="relative grid grid-cols-1 md:grid-cols-[300px_1fr] items-center gap-6 px-8 py-10">
        {/* Foto */}
        <div className="flex justify-center md:justify-start">
          <div className="relative h-[220px] w-[220px]">
            <Image
              src={s.image}
              alt={s.name}
              fill
              className="object-contain"
              priority={false}
            />
          </div>
        </div>

        {/* Quote */}
        <div className="text-left md:text-left">
          <p className="font-montserrat text-[24px] leading-[34px] font-semibold text-slate-900">
            {s.quote}
          </p>

          <div className="mt-5 font-montserrat text-[14px] text-slate-700">
            {s.name}, {s.role}
          </div>

          {/* Controls */}
          <div className="mt-6 flex items-center gap-4">
            <button
              type="button"
              onClick={() => setIdx((p) => (p - 1 + slides.length) % slides.length)}
              className="h-9 w-9 rounded-full border border-slate-300 flex items-center justify-center hover:bg-slate-50"
              aria-label="Prev"
            >
              ←
            </button>

            <div className="font-montserrat text-[14px] text-slate-900">
              {idx + 1}/{slides.length}
            </div>

            <button
              type="button"
              onClick={() => setIdx((p) => (p + 1) % slides.length)}
              className="h-9 w-9 rounded-full border border-slate-300 flex items-center justify-center hover:bg-slate-50"
              aria-label="Next"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
