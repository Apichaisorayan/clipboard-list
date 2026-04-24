# 🚀 Deploy to Cloudflare Pages + Workers + D1

## ข้อดีของ Cloudflare
- ✅ **ฟรี** - Unlimited requests
- ✅ **เร็ว** - Global CDN
- ✅ **D1 Database** - SQLite database ฟรี
- ✅ **รองรับหลายคนใช้พร้อมกัน** - ข้อมูลไม่หาย

---

## 📋 ขั้นตอนการ Deploy

### 1. ติดตั้ง Wrangler CLI

```bash
npm install -g wrangler
```

### 2. Login เข้า Cloudflare

```bash
wrangler login
```

### 3. สร้าง D1 Database

```bash
# สร้าง database
wrangler d1 create revival-survey-db
```

**จะได้ database_id ออกมา** คัดลอกแล้วนำไปใส่ใน `wrangler.toml`:

```toml
[[d1_databases]]
binding = "DB"
database_name = "revival-survey-db"
database_id = "YOUR_DATABASE_ID_HERE"  # <-- ใส่ตรงนี้
```

### 4. สร้างตาราง (Schema)

```bash
# รัน schema.sql เพื่อสร้างตาราง
wrangler d1 execute revival-survey-db --file=./schema.sql
```

### 5. ทดสอบ Local (Optional)

```bash
# ทดสอบก่อน deploy
wrangler pages dev . --d1=DB=revival-survey-db
```

เปิดเบราว์เซอร์ไปที่ `http://localhost:8788`

### 6. Deploy ไป Cloudflare Pages

```bash
# Deploy ครั้งแรก
wrangler pages deploy . --project-name=revival-survey

# หรือถ้ามี project แล้ว
wrangler pages deploy .
```

### 7. เชื่อม D1 Database กับ Pages Project

ไปที่ Cloudflare Dashboard:
1. เข้า **Pages** → เลือก project **revival-survey**
2. ไปที่ **Settings** → **Functions**
3. ที่ **D1 database bindings** กด **Add binding**
   - Variable name: `DB`
   - D1 database: เลือก `revival-survey-db`
4. กด **Save**

### 8. Deploy อีกครั้ง

```bash
wrangler pages deploy .
```

---

## 🌐 เว็บของคุณพร้อมใช้งานแล้ว!

URL จะเป็น: `https://revival-survey.pages.dev`

---

## 🔧 Custom Domain (Optional)

ถ้าต้องการใช้ domain ของตัวเอง:

1. ไปที่ Cloudflare Dashboard → **Pages** → **revival-survey**
2. ไปที่ **Custom domains**
3. กด **Set up a custom domain**
4. ใส่ domain ของคุณ (เช่น `revival.yourdomain.com`)

---

## 📊 ดูข้อมูลใน D1 Database

```bash
# ดูข้อมูลทั้งหมด
wrangler d1 execute revival-survey-db --command="SELECT * FROM results ORDER BY timestamp DESC LIMIT 10"

# นับจำนวนผู้ทำแบบสำรวจ
wrangler d1 execute revival-survey-db --command="SELECT COUNT(*) as total FROM results"
```

---

## 🔄 อัพเดทโค้ด

เมื่อแก้ไขโค้ด ให้รัน:

```bash
git add .
git commit -m "Update code"
git push
wrangler pages deploy .
```

---

## 🆘 Troubleshooting

### ❌ Error: "DB is not defined"
- ตรวจสอบว่าเชื่อม D1 binding แล้วใน Cloudflare Dashboard
- Variable name ต้องเป็น `DB` (ตัวพิมพ์ใหญ่)

### ❌ Error: "table results does not exist"
- รัน schema.sql อีกครั้ง:
  ```bash
  wrangler d1 execute revival-survey-db --file=./schema.sql
  ```

### ❌ ข้อมูลไม่บันทึก
- เช็ค logs:
  ```bash
  wrangler pages deployment tail
  ```

---

## 📁 โครงสร้างไฟล์

```
/Users/apichai/Desktop/full/
├── index.htm                    # หน้าเว็บหลัก
├── questions.json               # คำถาม 125 ข้อ
├── img/                         # รูปภาพ
├── functions/
│   └── api/
│       └── [[path]].js         # Cloudflare Workers API
├── schema.sql                   # D1 Database Schema
├── wrangler.toml               # Cloudflare Configuration
├── _headers                     # HTTP Headers
└── CLOUDFLARE_DEPLOY.md        # คู่มือนี้
```

---

## 🎉 เสร็จสิ้น!

เว็บของคุณตอนนี้:
- ✅ Deploy บน Cloudflare Pages
- ✅ ใช้ D1 Database (ข้อมูลไม่หาย)
- ✅ รองรับหลายคนใช้พร้อมกัน
- ✅ ฟรี 100%

**URL:** `https://revival-survey.pages.dev`
