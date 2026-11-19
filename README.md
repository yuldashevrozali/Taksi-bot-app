# Farg'ona – Qo'qon Taksi · Telegram Mini App

Mijoz va haydovchi uchun Telegram Mini App (React + TypeScript + Tailwind CSS).

- **Mijoz:** yo'nalish tanlash, buyurtma berish (yo'lovchilar soni, vaqt yoki "Hozir"), buyurtma holati, ballar, voucherlar, referral havola, sevimli yo'nalishlar.
- **Haydovchi:** yangi buyurtmalar, "Buyurtmani olish", mening buyurtmalarim (mijoz kontakti), tarix, voucher tekshirish.
- Interfeys: o'zbek tili (lotin va kirill), Telegram'ning yorug' / qorong'i mavzusiga moslashadi.

> Bu faqat frontend. Backend (API + Telegram bot) alohida joylashadi (Railway).
> Ilova faqat Telegram ichida ishlaydi: kirish Telegram `initData` orqali, imzosi backendda tekshiriladi.

## Sozlash

| O'zgaruvchi | Ma'nosi |
|---|---|
| `VITE_API_URL` | Backend manzili, masalan `https://taxi-api.up.railway.app` |

## Lokal ishga tushirish

```bash
npm install
cp .env.example .env   # VITE_API_URL ni yozing
npm run dev
```

## Vercel'ga joylash

1. Vercel → **Add New → Project** → shu GitHub repozitoriyni tanlang (framework: Vite, avtomatik aniqlanadi).
2. **Environment Variables:** `VITE_API_URL` = backend manzili.
3. **Deploy.** Natija: `https://<loyiha>.vercel.app`.
4. Backend `.env` ga shu manzilni yozing: `MINI_APP_URL="https://<loyiha>.vercel.app"`
   (bot tugmalari shu manzilni ochadi va backend shu manzildan so'rovlarga ruxsat beradi).

## Ishga tushirish parametrlari

| URL | Nima ochiladi |
|---|---|
| `/` | Mijoz bosh sahifasi |
| `/?mode=driver` | Haydovchi paneli |
| `/?order=<id>` | Haydovchi uchun bitta buyurtma ("Buyurtmani olish") |
| `/?repeat=<id>` | Eski buyurtma ma'lumotlari bilan yangi buyurtma formasi |

Telegram Mini App `startapp=order_<id>` parametri ham qo'llab-quvvatlanadi.

## Tuzilishi

```
src/
  main.tsx, core.tsx       ilova, router (Telegram Back tugmasi bilan), kontekst
  pages/                   Home, OrderForm, OrderStatus, Profile, Driver
  ui.tsx, components.tsx   UI komponentlar
  i18n.ts                  lotin va kirill matnlari
  lib/shared/              umumiy tiplar va validatsiya (backend bilan bir xil)
  lib/web-core/            API klient, Telegram SDK, formatlash
```
