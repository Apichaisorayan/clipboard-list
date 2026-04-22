# 🚀 วิธี Deploy ไป Vercel

## ขั้นตอนที่ 1: เตรียม GitHub Repository

```bash
# ถ้ายังไม่มี git init
git init

# เพิ่มไฟล์ทั้งหมด
git add .

# Commit
git commit -m "Initial commit - Spiritual Gift Survey"

# สร้าง repo ใหม่บน GitHub แล้ว push
git remote add origin https://github.com/YOUR_USERNAME/spiritual-gift-survey.git
git branch -M main
git push -u origin main
```

## ขั้นตอนที่ 2: Deploy ไป Vercel

### วิธีที่ 1: ผ่าน Vercel Dashboard (แนะนำ)

1. ไปที่ [vercel.com](https://vercel.com)
2. คลิก **Sign Up** และเข้าสู่ระบบด้วย GitHub
3. คลิก **Add New Project**
4. เลือก repository ของคุณ
5. คลิก **Import**
6. ตั้งค่า:
   - **Framework Preset**: Other
   - **Build Command**: (เว้นว่าง)
   - **Output Directory**: (เว้นว่าง)
   - **Install Command**: `npm install`
7. คลิก **Deploy**
8. รอ 1-2 นาที ✅ เสร็จ!

### วิธีที่ 2: ผ่าน Vercel CLI

```bash
# ติดตั้ง Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy
vercel

# Deploy production
vercel --prod
```

## ⚠️ หมายเหตุสำคัญ

### การจัดเก็บข้อมูล

**ปัจจุบัน:** ใช้ in-memory storage (ข้อมูลหายเมื่อ restart)

**สำหรับ Production จริง:** ควรใช้ database เช่น:
- **Vercel Postgres** (แนะนำ)
- **MongoDB Atlas** (ฟรี)
- **Supabase** (ฟรี)
- **PlanetScale** (ฟรี)

### อัพเกรดเป็น Database

ถ้าต้องการเก็บข้อมูลถาวร ให้แจ้งเพื่อติดตั้ง database

## 🌐 หลัง Deploy แล้ว

URL ของคุณจะเป็น: `https://your-project-name.vercel.app`

### ตั้งค่า Custom Domain (ถ้าต้องการ)

1. ไปที่ Project Settings
2. เลือก Domains
3. เพิ่ม domain ของคุณ
4. ตั้งค่า DNS ตามที่ Vercel บอก

## 🔄 Auto Deploy

ทุกครั้งที่ push ไป GitHub:
- Vercel จะ deploy อัตโนมัติ
- ได้ preview URL สำหรับทุก branch
- Production deploy เมื่อ push ไป main branch

## 📊 ตรวจสอบสถานะ

- **Dashboard**: [vercel.com/dashboard](https://vercel.com/dashboard)
- **Logs**: ดูได้ใน Vercel Dashboard
- **Analytics**: ดูจำนวนผู้เข้าชมได้ฟรี

## 🆘 แก้ปัญหา

### ถ้า Deploy ไม่สำเร็จ

1. ตรวจสอบ logs ใน Vercel Dashboard
2. ตรวจสอบว่า `package.json` มี dependencies ครบ
3. ตรวจสอบว่า `vercel.json` ถูกต้อง

### ถ้าหน้าเว็บไม่แสดง

1. ตรวจสอบ Console (F12)
2. ตรวจสอบว่า API endpoints ทำงาน
3. ลอง redeploy: `vercel --prod --force`

## 💡 Tips

- ใช้ Environment Variables สำหรับ API keys
- เปิด Analytics ใน Vercel Dashboard
- ตั้งค่า CORS ถ้าต้องการเรียก API จากภายนอก
