# 🗄️ MongoDB Atlas Setup Guide

## ขั้นตอนที่ 1: สร้าง MongoDB Atlas Account

1. ไปที่: **[mongodb.com/cloud/atlas/register](https://mongodb.com/cloud/atlas/register)**
2. **Sign Up** ด้วย Google หรือ Email
3. กรอกข้อมูล และยืนยัน Email

## ขั้นตอนที่ 2: สร้าง Cluster (Database)

1. เลือก **FREE tier** (M0 Sandbox - 512 MB ฟรีตลอดชีพ)
2. เลือก **Provider**: AWS
3. เลือก **Region**: Singapore (ใกล้ที่สุด)
4. **Cluster Name**: `SpiritualGiftSurvey` (หรือชื่ออื่นก็ได้)
5. คลิก **Create Cluster**
6. รอ 3-5 นาที ให้ cluster สร้างเสร็จ

## ขั้นตอนที่ 3: สร้าง Database User

1. คลิก **Database Access** (เมนูซ้าย)
2. คลิก **Add New Database User**
3. **Authentication Method**: Password
4. **Username**: `surveyuser` (หรือชื่ออื่น)
5. **Password**: สร้าง password ที่แข็งแรง (เก็บไว้ดีๆ!)
6. **Database User Privileges**: เลือก **Read and write to any database**
7. คลิก **Add User**

## ขั้นตอนที่ 4: ตั้งค่า Network Access

1. คลิก **Network Access** (เมนูซ้าย)
2. คลิก **Add IP Address**
3. คลิก **Allow Access from Anywhere** (0.0.0.0/0)
4. คลิก **Confirm**

## ขั้นตอนที่ 5: ดึง Connection String

1. กลับไปที่ **Database** (เมนูซ้าย)
2. คลิกปุ่ม **Connect** ที่ cluster ของคุณ
3. เลือก **Connect your application**
4. **Driver**: Node.js
5. **Version**: 4.1 or later
6. **คัดลอก Connection String** จะได้แบบนี้:
   ```
   mongodb+srv://surveyuser:<password>@spiritualgiftsurvey.xxxxx.mongodb.net/?retryWrites=true&w=majority
   ```
7. **แทนที่ `<password>`** ด้วย password จริงที่คุณตั้งไว้

## ขั้นตอนที่ 6: ตั้งค่า Local

1. เปิดไฟล์ `.env` ในโปรเจค
2. แทนที่ `MONGODB_URI` ด้วย Connection String ของคุณ:
   ```
   MONGODB_URI=mongodb+srv://surveyuser:YOUR_REAL_PASSWORD@spiritualgiftsurvey.xxxxx.mongodb.net/spiritual-gift-survey?retryWrites=true&w=majority
   ```
3. **บันทึกไฟล์**

## ขั้นตอนที่ 7: ตั้งค่า Vercel

1. ไปที่ [vercel.com/dashboard](https://vercel.com/dashboard)
2. เลือกโปรเจค **full**
3. ไปที่ **Settings** → **Environment Variables**
4. เพิ่ม Environment Variable ใหม่:
   - **Key**: `MONGODB_URI`
   - **Value**: (วาง Connection String ของคุณ)
   - **Environments**: เลือกทั้ง Production, Preview, Development
5. คลิก **Save**

## ขั้นตอนที่ 8: Redeploy

```bash
vercel --prod
```

## ✅ เสร็จแล้ว!

ตอนนี้เว็บของคุณ:
- ✅ เก็บข้อมูลใน MongoDB Atlas (ถาวร)
- ✅ รองรับหลายคนใช้พร้อมกัน
- ✅ ข้อมูลไม่หาย
- ✅ ดูผลของทุกคนได้

## 🔍 ตรวจสอบข้อมูล

1. ไปที่ MongoDB Atlas Dashboard
2. คลิก **Browse Collections**
3. เลือก database: `spiritual-gift-survey`
4. เลือก collection: `results`
5. จะเห็นข้อมูลทั้งหมดที่บันทึกไว้

## 🆘 แก้ปัญหา

### ถ้าเชื่อมต่อไม่ได้:
1. ตรวจสอบ password ใน Connection String
2. ตรวจสอบ Network Access (ต้องอนุญาต 0.0.0.0/0)
3. ตรวจสอบ Database User มี permission ถูกต้อง

### ถ้า Vercel ไม่ทำงาน:
1. ตรวจสอบ Environment Variable ตั้งค่าถูกต้อง
2. Redeploy: `vercel --prod --force`
3. ดู logs: `vercel logs`
