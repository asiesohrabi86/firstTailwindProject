# firstTailwindProject

توضیحات
این پروژه یک پیاده‌سازی با Tailwind CSS است که از طراحی وب‌سایت https://www.filimo.com در سال 1403 الهام گرفته شده است. هدف بازسازی ظاهر و حسّ و حال آن با استفاده از کلاس‌های Tailwind بوده است. طراحی موبایل‌فرست است و تا عرض 320 پیکسل واکنش‌گرا شده است. کارت‌های محصولات با استفاده از یک اسلایدر نمایش داده می‌شوند.


ویژگی‌ها
- طراحی mobile-first و واکنش‌گرا (پشتیبانی تا 320px).
- نمایش کارت‌ها داخل اسلایدر (Owl Carousel طبق طراحی).
- فونت فارسی Vazir برای پشتیبانی از متن‌های RTL.
- استفاده از کلاس‌های Tailwind برای سفارشی‌سازی سریع.

فناوری‌ها / وابستگی‌ها
- Tailwind CSS
- Owl Carousel 2 (معمولاً به jQuery نیاز دارد)
- jQuery (در صورت استفاده از نسخه‌های کلاسیک Owl Carousel)
- Vazir font (در repo موجود است)

شروع سریع — روش ساده
1. فایل src/index.html را مستقیماً باز کنید یا پوشه src را با یک سرور ساده سرو کنید:
```bash
cd src
python -m http.server 8000
# سپس به http://localhost:8000 بروید
```

شروع سریع — روش پیشنهادی با npm (برای توسعه)
1. Node.js (نسخه 14 یا بالاتر) و npm را نصب کنید.
2. وابستگی‌ها را نصب کنید:
```bash
npm install
# در صورت نیاز:
npm install -D tailwindcss postcss autoprefixer
```
3. ساخت CSS:
```bash
npx tailwindcss -i ./src/input.css -o ./src/output.css --minify
```
4. src/index.html را باز یا سرو کنید تا خروجی را ببینید.

نکات درباره فایل‌های بسته‌شده
- فایل‌های src/all.min.js و src/all.min.css در مخزن وجود دارند و حجم بالایی دارند؛ احتمال دارد شامل کتابخانه‌های خارجی مانند jQuery و Owl Carousel باشند. اگر می‌خواهید آنها را به‌روز کنید یا audit انجام دهید، منبعشان را بررسی کنید یا آنها را تفکیک کنید.
- اگر می‌خواهید از jQuery استفاده نکنید، می‌توانید Owl Carousel را با Swiper یا سایر اسلایدرهای مدرن جایگزین کنید.

نمونه راه‌اندازی Owl Carousel
اگر index.html شما jQuery و Owl Carousel را بارگزاری می‌کند، نمونه مقداردهی اولیه:
```html
<script>
$(document).ready(function() {
  $('.owl-carousel').owlCarousel({
    loop: true,
    margin: 16,
    nav: true,
    responsive: {
      0: { items: 1 },
      640: { items: 2 },
      1024: { items: 4 }
    }
  });
});
</script>
```
شکست‌ها و تعداد آیتم‌ها را متناسب با طراحی و رفتار موبایل‌فرست تا 320px تنظیم کنید.

فونت‌ها و راست‌چین
- فونت Vazir در مسیر src/fonts/vazir قرار دارد و README فونت نیز موجود است. برای استفاده:
```css
body { font-family: "Vazir", sans-serif; }
```
- هنگام نمایش محتوای فارسی مطمئن شوید dir="rtl" یا تنظیمات متن راست‌چین اعمال شده باشد.

ساختار پروژه (فایل‌های مهم)
- src/index.html — صفحه اصلی
- src/input.css — ورودی Tailwind
- src/output.css — CSS تولیدشده
- src/all.min.js, src/all.min.css — دارایی‌های مینفاید
- src/fonts/vazir/ — فونت‌ها
- src/images/ — تصاویر
- tailwind.config.js — پیکربندی
- package.json & package-lock.json — متادیتا

اعتبارها
- الهام طراحی: https://www.filimo.com (سال 1403)
- Tailwind CSS: https://tailwindcss.com/
- Owl Carousel: https://owlcarousel2.github.io/OwlCarousel2/
- Vazir font: مسیر src/fonts/vazir/README.md

مجوز
لطفاً مجوز موردنظر را برای پروژه مشخص کنید یا فایل LICENSE (مثلاً MIT) اضافه کنید.

# firstTailwindProject

Description
This project is a Tailwind CSS implementation inspired by the design of https://www.filimo.com (design reference: year 1403). The goal was to recreate the look and feel using Tailwind utilities. The layout is mobile-first and responsive down to 320px. Product cards are displayed using a carousel.

What I checked in the repository
- src/index.html — main HTML file (the template you can edit).
- src/input.css — Tailwind input CSS file.
- src/output.css — generated output CSS (built CSS).
- src/all.min.js and src/all.min.css — bundled/minified assets (check their source if you want to update).
- src/fonts/vazir/ — Vazir font files and font README included.
- src/images, src/logo.png, src/payment_landing.png — project images.
- tailwind.config.js — Tailwind configuration.
- package.json & package-lock.json — npm metadata.

Features
- Mobile-first responsive design, tuned down to 320px width.
- Carousel for product cards (Owl Carousel used in the design).
- Vazir Persian font included for RTL/FA support.
- Tailwind CSS-based utility classes for quick customization.

Tech stack / dependencies
- Tailwind CSS
- Owl Carousel 2 (commonly requires jQuery)
- jQuery (if Owl Carousel is used from classic versions)
- Node.js + npm (optional, for building Tailwind locally)
- Fonts: Vazir (included under src/fonts/vazir)

Quick start — Option A: Open locally (simple)
1. Open src/index.html directly in your browser, or serve the src directory with a simple static server:
```bash
# from repository root
cd src
python -m http.server 8000
# then open http://localhost:8000 in your browser
```

Quick start — Option B: Build Tailwind locally (recommended for development)
1. Install Node.js (v14+) and npm.
2. Install dependencies:
```bash
npm install
# if you don't have tailwind installed globally:
npm install -D tailwindcss postcss autoprefixer
```
3. Build the CSS:
```bash
npx tailwindcss -i ./src/input.css -o ./src/output.css --minify
```
4. Open src/index.html (or serve the src folder) to see the result.

Notes about bundled files
- src/all.min.js and src/all.min.css are large minified files included in the repo. They likely contain third-party libraries (possibly jQuery and Owl Carousel). If you plan to update or audit dependencies, check their origin and consider splitting or replacing them with more modern alternatives.
- If you prefer a carousel without jQuery, consider replacing Owl Carousel with Swiper (https://swiperjs.com/) or another modern, dependency-free slider.

Owl Carousel — example initialization
If your index.html includes jQuery and Owl Carousel assets, initialize the carousel like this:
```html
<script>
$(document).ready(function() {
  $('.owl-carousel').owlCarousel({
    loop: true,
    margin: 16,
    nav: true,
    responsive: {
      0: { items: 1 },
      640: { items: 2 },
      1024: { items: 4 }
    }
  });
});
</script>
```
Adjust breakpoints and items to match your design and the mobile-first behavior down to 320px.

Fonts and RTL
- The Vazir font files are included under src/fonts/vazir and a README for the font is present. Use the font by referencing the included font-face CSS or by adding:
```css
body { font-family: "Vazir", sans-serif; }
```
- Ensure dir="rtl" is set on appropriate containers/pages when showing Persian content.

Project structure (important files)
- src/index.html — main page
- src/input.css — Tailwind input (source)
- src/output.css — generated CSS (used by index.html)
- src/all.min.js, src/all.min.css — bundled JS/CSS
- src/fonts/vazir/ — font files
- src/images/ — images and assets
- tailwind.config.js — Tailwind config
- package.json & package-lock.json — project metadata

Credits
- Design inspiration: https://www.filimo.com (design reference year 1403)
- Tailwind CSS: https://tailwindcss.com/
- Owl Carousel: https://owlcarousel2.github.io/OwlCarousel2/
- Vazir font: see src/fonts/vazir/README.md

License
Add a LICENSE file (e.g., MIT) or state your preferred license in the repo.