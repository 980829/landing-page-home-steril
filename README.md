# homesteril-landing (Next.js + Tailwind)

## Jalankan
```bash
npm install
npm run dev
```

## Edit konten
- `app/page.tsx` untuk layout landing page.
- Ganti gambar hero:
  - Taruh file di `public/hero.jpg`
  - Ubah `src` di komponen `<Image />` jadi `"/hero.jpg"`

## Deploy ke Vercel
- Push repo ke GitHub
- Import di Vercel (Next.js auto-detect)
