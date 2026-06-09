# GROUPTEA — Trang Landing

Trang landing chính thức cho **GROUPTEA**, nền tảng kết nối cộng đồng và ghép nhóm theo sở thích chung.

## Giới thiệu

GROUPTEA giúp bạn tìm đúng người, đúng nhóm — dựa trên mục tiêu thực tế như học tập, giải trí, sức khỏe hay công việc — thay vì lướt vô tận trên mạng xã hội.

## Tính năng trang web

- Navbar cố định với điều hướng mượt
- 9 section kể câu chuyện thương hiệu GROUPTEA
- Màu thương hiệu: Hồng (#FF0090) + Chanh (#CCFF00)
- Font Barlow Condensed (tiêu đề) + Inter (nội dung)
- Hiệu ứng cuộn Framer Motion (chạy một lần)
- Bố cục responsive, ưu tiên mobile
- Form RSVP email hoạt động trên client

## Công nghệ sử dụng

- [Next.js](https://nextjs.org/) 16 (App Router)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/) 4
- [Framer Motion](https://www.framer.com/motion/)
- [Lucide React](https://lucide.dev/)


## Build production

```bash
npm run build
npm start
```

## Cấu trúc thư mục

```
src/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
└── components/
    ├── Navbar.tsx
    ├── Footer.tsx
    └── sections/
        ├── HookSection.tsx
        ├── ProblemSection.tsx
        ├── HeroSection.tsx
        ├── StatsSection.tsx
        ├── CategoriesSection.tsx
        ├── HowItWorksSection.tsx
        ├── WhyGroupteaSection.tsx
        ├── TargetSection.tsx
        └── RSVPSection.tsx
```

## Triển khai

Dự án được triển khai trên [Vercel](https://vercel.com/). Mỗi lần push lên nhánh chính sẽ tự động build và deploy.

## Bản quyền

© 2025 GroupTea. All rights reserved.
