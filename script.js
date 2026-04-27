
const giftNames = [
    "เผยพระวจนะ", "อภิบาล", "การสอน", "ถ้อยคำประกอบด้วยสติปัญญา", "ถ้อยคำประกอบด้วยความรู้",
    "การตักเตือนและหนุนใจ", "การสังเกตวิญญาณ", "การบริจาค", "การปรนนิบัติ", "ความเมตตา",
    "มิชชันนารี", "ผู้ประกาศ", "การรับรองแขก", "ความเชื่อ", "ผู้ครอบครอง",
    "ผู้บริหาร", "การอัศจรรย์", "การรักษาโรค", "การพูดภาษาแปลก", "การแปลภาษาแปลก",
    "อัครทูต", "การอยู่เป็นโสด", "การอธิษฐานอ้อนวอน", "การขับผี", "ผู้อุปการะ"
];

// Detailed Gift Information
const giftDetails = {
    "เผยพระวจนะ": {
        meaning: "ความสามารถพิเศษในการประกาศความจริงของพระเจ้าอย่างตรงไปตรงมา เพื่อสร้างความมั่นใจหรือเปิดโปงบาป",
        scripture: "1 โครินธ์ 12:10, 28; โรม 12:6",
        guideline: "ใช้เพื่อสร้างความมั่นใจและหนุนใจคริสตจักร โดยเน้นที่พระคำของพระเจ้าเป็นหลัก"
    },
    "อภิบาล": {
        meaning: "ความสามารถในการดูแล เลี้ยงดู และรับผิดชอบชีวิตฝ่ายวิญญาณของกลุ่มผู้เชื่อในระยะยาว",
        scripture: "เอเฟซัส 4:11; 1 เปโตร 5:1-3",
        guideline: "เน้นการสร้างความสัมพันธ์ การสอน และการปกป้องกลุ่มสมาชิกจากการหลงผิด"
    },
    "การสอน": {
        meaning: "ความสามารถในการอธิบายความจริงในพระคัมภีร์ให้ผู้อื่นเข้าใจและนำไปปรับใช้ในชีวิตได้",
        scripture: "โรม 12:7; 1 โครินธ์ 12:28; เอเฟซัส 4:11",
        guideline: "ตั้งใจศึกษาพระคำอย่างละเอียด และถ่ายทอดด้วยความถ่อมใจเพื่อให้ผู้อื่นเติบโต"
    },
    "ถ้อยคำประกอบด้วยสติปัญญา": {
        meaning: "การมองเห็นทางออกหรือความเข้าใจในสถานการณ์ที่ซับซ้อน โดยใช้สติปัญญาจากพระเจ้า",
        scripture: "1 โครินธ์ 12:8",
        guideline: "ใช้ให้คำปรึกษาเมื่อคริสตจักรหรือบุคคลต้องการการตัดสินใจที่ถูกต้องตามพระประสงค์ของพระเจ้า"
    },
    "ถ้อยคำประกอบด้วยความรู้": {
        meaning: "การได้รับความเข้าใจหรือความจริงเกี่ยวกับพระเจ้าหรือสถานการณ์บางอย่างโดยการเปิดเผยของพระวิญญาณ",
        scripture: "1 โครินธ์ 12:8",
        guideline: "ใช้เพื่อเสริมสร้างความเชื่อและเปิดเผยความจริงที่ซ่อนอยู่เพื่อการเยียวยาหรือหนุนใจ"
    },
    "การตักเตือนและหนุนใจ": {
        meaning: "ความสามารถในการช่วยเหลือผู้อื่นให้มีกำลังใจ หรือกระตุ้นให้พวกเขากลับมาเดินในทางที่ถูกต้อง",
        scripture: "โรม 12:8",
        guideline: "อยู่เคียงข้างผู้ที่ท้อแท้ และใช้คำพูดที่ให้ความหวังและพลังงานฝ่ายวิญญาณ"
    },
    "การสังเกตวิญญาณ": {
        meaning: "การแยกแยะได้ว่าสิ่งใดมาจากพระเจ้า สิ่งใดมาจากมนุษย์ หรือสิ่งใดมาจากวิญญาณชั่ว",
        scripture: "1 โครินธ์ 12:10",
        guideline: "ปกป้องคริสตจักรจากคำสอนที่ผิดและวิญญาณที่หลอกลวง"
    },
    "การบริจาค": {
        meaning: "ความสามารถในการมอบทรัพยากรส่วนตัวด้วยความยินดีและใจกว้าง เพื่อพันธกิจของพระเจ้า",
        scripture: "โรม 12:8",
        guideline: "บริหารจัดการทรัพย์สินเพื่อเป็นพรแก่ผู้อื่นโดยไม่หวังสิ่งตอบแทน"
    },
    "การปรนนิบัติ": {
        meaning: "การทำงานเบื้องหลังหรืองานด้านกายภาพเพื่อสนับสนุนพันธกิจของคริสตจักร",
        scripture: "โรม 12:7; 1 โครินธ์ 12:28",
        guideline: "มองหาความต้องการเล็กๆ น้อยๆ และเข้าไปช่วยเหลือด้วยใจรับใช้"
    },
    "ความเมตตา": {
        meaning: "ความเห็นอกเห็นใจอย่างลึกซึ้งต่อผู้ที่เจ็บปวดหรือขัดสน และการลงมือช่วยเหลือด้วยความชื่นชมยินดี",
        scripture: "โรม 12:8",
        guideline: "เยี่ยมเยียนผู้ป่วย ผู้สูงอายุ หรือผู้ที่ถูกทอดทิ้งด้วยความรักจากพระเจ้า"
    },
    "มิชชันนารี": {
        meaning: "การปรับตัวเข้ากับวัฒนธรรมที่แตกต่างเพื่อประกาศข่าวประเสริฐท่ามกลางผู้คนต่างกลุ่ม",
        scripture: "1 โครินธ์ 9:19-23; เอเฟซัส 3:6-8",
        guideline: "เรียนรู้ภาษาและวิถีชีวิตผู้อื่นเพื่อนำความรักของพระเจ้าไปถึงพวกเขา"
    },
    "ผู้ประกาศ": {
        meaning: "ความสามารถในการสื่อสารข่าวประเสริฐกับผู้ที่ยังไม่เชื่ออย่างมีพลังและเกิดผล",
        scripture: "เอเฟซัส 4:11; 2 ทิโมธี 4:5",
        guideline: "ฝึกฝนวิธีการประกาศและมีความกล้าหาญในการแบ่งปันเรื่องราวพระเยซู"
    },
    "การรับรองแขก": {
        meaning: "การเปิดบ้านและหัวใจต้อนรับคนแปลกหน้าหรือแขกด้วยความอบอุ่น",
        scripture: "โรม 12:13; 1 เปโตร 4:9",
        guideline: "สร้างบรรยากาศที่ปลอดภัยและเป็นมิตรเพื่อให้ผู้อื่นรู้สึกถึงการยอมรับ"
    },
    "ความเชื่อ": {
        meaning: "ความมั่นใจอย่างแรงกล้าในแผนการของพระเจ้า แม้ในสถานการณ์ที่ดูเป็นไปไม่ได้",
        scripture: "1 โครินธ์ 12:9; โรม 4:18-21",
        guideline: "อธิษฐานและเป็นแรงบันดาลใจให้ผู้อื่นไว้วางใจในพระเจ้าท่ามกลางวิกฤต"
    },
    "ผู้ครอบครอง": {
        meaning: "ความสามารถในการตั้งเป้าหมายและจูงใจผู้อื่นให้เดินหน้าไปตามนิมิตของพระเจ้า",
        scripture: "โรม 12:8",
        guideline: "นำด้วยความขยันหมั่นเพียรและเป็นแบบอย่างที่ดีในการดำเนินชีวิต"
    },
    "ผู้บริหาร": {
        meaning: "การจัดการ รายละเอียด และการวางแผนงานต่างๆ ให้ดำเนินไปอย่างราบรื่น",
        scripture: "1 โครินธ์ 12:28; กิจการ 6:1-7",
        guideline: "ใช้ความเป็นระเบียบเพื่อเสริมสร้างประสิทธิภาพในพันธกิจของคริสตจักร"
    },
    "การอัศจรรย์": {
        meaning: "การที่พระเจ้าใช้บุคคลนั้นทำสิ่งที่เกินกฎธรรมชาติเพื่อสำแดงพระสิริของพระองค์",
        scripture: "1 โครินธ์ 12:10, 28",
        guideline: "เน้นการยกย่องพระเจ้าและยืนยันข่าวประเสริฐ ไม่ใช่เพื่อโอ้อวดตนเอง"
    },
    "การรักษาโรค": {
        meaning: "พระเจ้าทรงเยียวยาผู้ป่วยผ่านทางการอธิษฐานหรือการวางมือของบุคคลนั้น",
        scripture: "1 โครินธ์ 12:9, 28",
        guideline: "อธิษฐานด้วยความเชื่อและพึ่งพาอำนาจการรักษาที่มาจากพระเจ้าเท่านั้น"
    },
    "การพูดภาษาแปลก": {
        meaning: "ความสามารถในการอธิษฐานหรือแบ่งปันในภาษาที่ตนเองไม่ได้เรียนรู้มาโดยตรง",
        scripture: "1 โครินธ์ 12:10, 28; 14:2",
        guideline: "หากใช้ในที่ประชุมควรมีผู้แปลเพื่อให้เกิดการเสริมสร้าง"
    },
    "การแปลภาษาแปลก": {
        meaning: "การอธิบายความหมายของภาษาแปลกเพื่อให้ผู้ฟังเข้าใจถ้อยคำของพระเจ้า",
        scripture: "1 โครินธ์ 12:10, 30",
        guideline: "ร่วมงานกับผู้ที่มีของประทานภาษาแปลกเพื่อความเข้าใจที่ตรงกันในคริสตจักร"
    },
    "อัครทูต": {
        meaning: "ความสามารถในการบุกเบิกคริสตจักรใหม่ หรือรับผิดชอบในระดับกว้างขวางเพื่อขยายแผ่นดินของพระเจ้า",
        scripture: "1 โครินธ์ 12:28; เอเฟซัส 4:11; 2 โครินธ์ 12:12",
        guideline: "วางรากฐานและสร้างผู้นำในพันธกิจใหม่ๆ ด้วยสิทธิอำนาจจากพระเจ้า"
    },
    "การอยู่เป็นโสด": {
        meaning: "ความสามารถในการใช้ชีวิตโสดเพื่อรับใช้พระเจ้าอย่างเต็มที่โดยไม่มีพันธะทางครอบครัว",
        scripture: "1 โครินธ์ 7:7, 32-35",
        guideline: "ใช้เวลาและอิสระที่มีเพื่อทุ่มเทให้กับงานของพระเจ้าอย่างสุดกำลัง"
    },
    "การอธิษฐานอ้อนวอน": {
        meaning: "การอธิษฐานอย่างสม่ำเสมอและยาวนานแทนผู้อื่น โดยเห็นผลตอบรับที่ชัดเจน",
        scripture: "โคโลสี 1:9-12; 4:12; ยากอบ 5:14-16",
        guideline: "รับผิดชอบในการเป็นสะพานฝ่ายวิญญาณเพื่อนำความต้องการของผู้อื่นเข้าหาพระเจ้า"
    },
    "การขับผี": {
        meaning: "อำนาจในการขับไล่วิญญาณชั่วออกไปจากชีวิตของบุคคลในพระนามพระเยซูคริสต์",
        scripture: "ลูกา 10:17-20; กิจการ 16:16-18",
        guideline: "ทำด้วยความถ่อมใจ พึ่งพากำลังของพระเจ้า และระมัดระวังในการปกป้องฝ่ายวิญญาณ"
    },
    "ผู้อุปการะ": {
        meaning: "ความสามารถในการสนับสนุนบุคคลหรือพันธกิจด้วยเงินทอง หรือปัจจัยต่างๆ อย่างเฉพาะเจาะจง",
        scripture: "โรม 16:1-2; ฟีเลโมน 1:1-7",
        guideline: "ใช้อำนาจและทรัพยากรเพื่อเป็นที่พึ่งและสร้างโอกาสให้กับผู้รับใช้พระเจ้า"
    }
};

// Gift categories mapping
const giftCategories = {
    "equipping": {
        name: "การแต่งตั้ง",
        color: "#2563eb",
        icon: "crown",
        gifts: ["อัครทูต", "เผยพระวจนะ", "ผู้ประกาศ", "อภิบาล", "การสอน"]
    },
    "serving": {
        name: "การปรนนิบัติ",
        color: "#2563eb",
        icon: "heart",
        gifts: ["การตักเตือนและหนุนใจ", "การปรนนิบัติ", "การบริจาค", "ผู้ครอบครอง", "ผู้บริหาร", "ความเมตตา", "การรับรองแขก", "ผู้อุปการะ"]
    },
    "manifestation": {
        name: "การสำแดง",
        color: "#2563eb",
        icon: "zap",
        gifts: ["ถ้อยคำประกอบด้วยสติปัญญา", "ถ้อยคำประกอบด้วยความรู้", "ความเชื่อ", "การรักษาโรค", "การอัศจรรย์", "การสังเกตวิญญาณ", "การพูดภาษาแปลก", "การแปลภาษาแปลก", "การขับผี"]
    },
    "special": {
        name: "พิเศษ",
        color: "#2563eb",
        icon: "star",
        gifts: ["มิชชันนารี", "การอยู่เป็นโสด", "การอธิษฐานอ้อนวอน"]
    }
};

function getGiftCategory(giftName) {
    for (const [key, category] of Object.entries(giftCategories)) {
        if (category.gifts.includes(giftName)) {
            return category;
        }
    }
    return giftCategories.special;
}

let questions = [];
let resultsChart = null;

document.addEventListener('DOMContentLoaded', async () => {
    lucide.createIcons();
    const dateEl = document.getElementById('currentDate');
    if (dateEl) {
        dateEl.innerText = new Date().toLocaleDateString('th-TH', {
            year: 'numeric', month: 'long', day: 'numeric'
        });
    }

    try {
        const response = await fetch('questions.json');
        questions = await response.json();
        renderQuestions();
        loadProgress();
    } catch (err) { console.error(err); }

    refreshData();

    // Nav
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const target = link.getAttribute('data-target');
            showSection(target);
            document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
            link.classList.add('active');
            const sidebar = document.getElementById('sidebar');
            if (sidebar) sidebar.classList.remove('active');
        });
    });

    const menuBtn = document.getElementById('menuBtn');
    if (menuBtn) {
        menuBtn.addEventListener('click', () => {
            const sidebar = document.getElementById('sidebar');
            if (sidebar) sidebar.classList.toggle('active');
        });
    }

    checkResumeStatus();
});

function showSection(id) {
    document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
    const target = document.getElementById(id);
    if (target) target.classList.add('active');
    window.scrollTo(0, 0);
    if (id === 'records') refreshData();
}

function renderQuestions() {
    const container = document.getElementById('questionsContainer');
    if (!container) return;
    container.innerHTML = questions.map((q, i) => `
        <div class="question-item">
            <span class="question-text">${i + 1}. ${q}</span>
            <div class="options-group">
                ${[3, 2, 1, 0].map(val => `
                    <label class="option-label">
                        <input type="radio" name="q${i + 1}" value="${val}" ${val === 0 ? 'checked' : ''} onchange="saveProgress()">
                        <span>${getLabel(val)}</span>
                    </label>
                `).join('')}
            </div>
        </div>
    `).join('');
}

function getLabel(v) { return v === 3 ? "มาก" : v === 2 ? "บ้าง" : v === 1 ? "น้อย" : "ไม่มี"; }

async function submitSurvey() {
    const nameInput = document.getElementById('userName');
    const name = nameInput ? nameInput.value.trim() : "";
    if (!name) { alert('กรุณากรอกชื่อ'); return; }

    const answers = {};
    for (let i = 1; i <= 125; i++) {
        const radio = document.querySelector(`input[name="q${i}"]:checked`);
        answers[i] = radio ? parseInt(radio.value) : 0;
    }

    const scores = new Array(25).fill(0);
    for (let g = 0; g < 25; g++) {
        for (let q = g + 1; q <= 125; q += 25) scores[g] += answers[q];
    }

    const data = { name, scores, topGift: giftNames[scores.indexOf(Math.max(...scores))] };

    const loading = document.getElementById('loading');
    if (loading) loading.style.display = 'flex';

    try {
        const res = await fetch('/api/save', {
            method: 'POST', headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        });
        const result = await res.json();
        if (result.success) {
            localStorage.removeItem('revival_survey_progress');
            showResultDetail(data);
        }
    } catch (e) { alert('Error: ' + e.message); }
    finally { if (loading) loading.style.display = 'none'; }
}

async function refreshData() {
    try {
        const res = await fetch('/api/results');
        const data = await res.json();
        const totalParticipants = document.getElementById('totalParticipants');
        const latestParticipant = document.getElementById('latestParticipant');
        if (totalParticipants) totalParticipants.innerText = data.length;
        if (latestParticipant) latestParticipant.innerText = data.length > 0 ? data[0].name : '-';

        const tbody = document.getElementById('recordsTableBody');
        if (tbody) {
            tbody.innerHTML = data.map((r, i) => `
                <tr>
                    <td>${data.length - i}</td>
                    <td><strong>${r.name}</strong></td>
                    <td>${new Date(r.timestamp).toLocaleDateString('th-TH')}</td>
                    <td>${r.topGift}</td>
                    <td>
                        <button class="btn btn-outline btn-sm" onclick='viewDetail(${JSON.stringify(r).replace(/'/g, "&apos;")})'>ดูผล</button>
                    </td>
                </tr>
            `).join('');
        }
        lucide.createIcons();
    } catch (e) { }
}

function viewDetail(d) { showResultDetail(d); }

function showResultDetail(data) {
    showSection('resultDetail');
    const header = document.getElementById('resultNameHeader');
    if (header) header.innerText = `ผลการประเมิน: ${data.name}`;

    const chartEl = document.getElementById('resultChart');
    if (chartEl) {
        const ctx = chartEl.getContext('2d');
        if (resultsChart) resultsChart.destroy();

        resultsChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: giftNames,
                datasets: [{
                    label: 'คะแนน',
                    data: data.scores,
                    backgroundColor: '#2563eb',
                    borderRadius: 4
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                indexAxis: 'y',
                scales: {
                    x: { beginAtZero: true, max: 15 },
                    y: { ticks: { font: { family: 'K2D' } } }
                },
                plugins: { legend: { display: false } }
            }
        });
    }

    const sorted = data.scores.map((s, i) => ({ name: giftNames[i], score: s }))
        .sort((a, b) => b.score - a.score);

    const list = document.getElementById('topGiftsList');
    if (list) {
        list.innerHTML = sorted.slice(0, 5).map((g, i) => {
            const category = getGiftCategory(g.name);
            return `
            <div class="clickable-gift" onclick="openGiftDetail('${g.name}')" style="display: flex; justify-content: space-between; align-items: center; padding: 0.75rem 1rem; background: ${i === 0 ? '#fef3c7' : '#fff'}; border: 1px solid #e2e8f0; border-radius: 8px;">
                <div style="display: flex; align-items: center; gap: 0.75rem;">
                    <span style="font-weight: 700; color: #94a3b8; font-size: 0.9rem;">#${i + 1}</span>
                    <span style="font-weight: 600;">${g.name} ${i === 0 ? '👑' : ''}</span>
                    <span style="font-size: 0.75rem; padding: 0.25rem 0.5rem; background: #dbeafe; color: #1e40af; border-radius: 4px; font-weight: 500;">
                        ${category.name}
                    </span>
                </div>
                <div style="display: flex; align-items: center; gap: 0.5rem;">
                    <span style="font-weight: 700; color: #2563eb;">${g.score} คะแนน</span>
                    <i data-lucide="info" style="width: 14px; color: var(--primary);"></i>
                </div>
            </div>
        `}).join('');
    }

    const categoryScores = {};
    Object.keys(giftCategories).forEach(key => {
        categoryScores[key] = {
            ...giftCategories[key],
            totalScore: 0,
            count: 0,
            gifts: []
        };
    });

    sorted.forEach(g => {
        const categoryKey = Object.keys(giftCategories).find(key =>
            giftCategories[key].gifts.includes(g.name)
        ) || 'special';

        categoryScores[categoryKey].totalScore += g.score;
        categoryScores[categoryKey].count++;
        if (g.score >= 10) {
            categoryScores[categoryKey].gifts.push(g);
        }
    });

    const sortedCategories = Object.entries(categoryScores)
        .sort((a, b) => b[1].totalScore - a[1].totalScore);

    const breakdown = document.getElementById('categoryBreakdown');
    if (breakdown) {
        breakdown.innerHTML = sortedCategories.map(([key, cat]) => `
            <div style="padding: 1rem; background: ${cat.color}10; border-left: 4px solid ${cat.color}; border-radius: 8px;">
                <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 0.75rem;">
                    <div style="width: 32px; height: 32px; background: ${cat.color}; border-radius: 6px; display: flex; align-items: center; justify-content: center;">
                        <i data-lucide="${cat.icon}" style="color: white; width: 18px; height: 18px;"></i>
                    </div>
                    <div style="flex: 1;">
                        <strong style="font-size: 1.1rem;">${cat.name}</strong>
                        <div style="font-size: 0.85rem; color: var(--text-muted); margin-top: 0.25rem;">
                            คะแนนรวม: <strong style="color: ${cat.color};">${cat.totalScore}</strong> คะแนน
                        </div>
                    </div>
                </div>
                ${cat.gifts.length > 0 ? `
                    <div style="margin-top: 0.75rem; padding-top: 0.75rem; border-top: 1px solid ${cat.color}30;">
                        <div style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 0.5rem;">ของประทานที่โดดเด่น:</div>
                        <div style="display: flex; flex-wrap: wrap; gap: 0.5rem;">
                            ${cat.gifts.map(g => `
                                <span style="font-size: 0.85rem; padding: 0.25rem 0.75rem; background: white; border: 1px solid ${cat.color}40; border-radius: 4px;">
                                    ${g.name} (${g.score})
                                </span>
                            `).join('')}
                        </div>
                    </div>
                ` : ''}
            </div>
        `).join('');
    }

    lucide.createIcons();
}

async function saveAsImage() {
    const element = document.getElementById('captureArea');
    const loading = document.getElementById('loading');
    if (loading) loading.style.display = 'flex';
    try {
        const canvas = await html2canvas(element, { scale: 2 });
        const link = document.createElement('a');
        link.download = `Result-${Date.now()}.png`;
        link.href = canvas.toDataURL('image/png');
        link.click();
    } catch (err) { alert('Error'); }
    finally { if (loading) loading.style.display = 'none'; }
}

function saveProgress() {
    const nameInput = document.getElementById('userName');
    const name = nameInput ? nameInput.value : "";
    const answers = {};
    for (let i = 1; i <= 125; i++) {
        const checked = document.querySelector(`input[name="q${i}"]:checked`);
        if (checked) answers[i] = checked.value;
    }
    const progress = { name, answers, timestamp: Date.now() };
    localStorage.setItem('revival_survey_progress', JSON.stringify(progress));
    checkResumeStatus();
}

function loadProgress() {
    const saved = localStorage.getItem('revival_survey_progress');
    if (!saved) return;
    const progress = JSON.parse(saved);
    const nameInput = document.getElementById('userName');
    if (nameInput) nameInput.value = progress.name || '';
    if (progress.answers) {
        Object.keys(progress.answers).forEach(qId => {
            const radio = document.querySelector(`input[name="q${qId}"][value="${progress.answers[qId]}"]`);
            if (radio) radio.checked = true;
        });
    }
}

function clearProgress() {
    if (confirm('คุณต้องการล้างข้อมูลที่บันทึกไว้ใช่หรือไม่?')) {
        localStorage.removeItem('revival_survey_progress');
        location.reload();
    }
}

function checkResumeStatus() {
    const saved = localStorage.getItem('revival_survey_progress');
    const prompt = document.getElementById('resumePrompt');
    if (!prompt) return;
    if (saved) {
        prompt.style.display = 'block';
        lucide.createIcons();
    } else {
        prompt.style.display = 'none';
    }
}

function openGiftDetail(name) {
    console.log("Opening gift detail for:", name);
    const detail = giftDetails[name];
    if (!detail) {
        console.warn("No details found for gift:", name);
        return;
    }

    const modalBody = document.getElementById('modalBody');
    if (!modalBody) return;
    modalBody.innerHTML = `
        <div class="gift-tag">ของประทานจากพระวิญญาณ</div>
        <h2 style="font-size: 1.75rem; color: var(--slate-900); margin-bottom: 0.5rem;">${name}</h2>
        <div style="height: 4px; width: 40px; background-color: var(--primary); margin-bottom: 2rem; border-radius: 2px;"></div>
        
        <div class="description-section">
            <div class="description-title"><i data-lucide="book-open" style="width: 16px;"></i> ความหมาย</div>
            <p class="description-text">${detail.meaning}</p>
        </div>
        
        <div class="description-section">
            <div class="description-title"><i data-lucide="bible" style="width: 16px;"></i> ข้อคัมภีร์อ้างอิง</div>
            <p class="description-text" style="font-style: italic; color: var(--text-muted);">${detail.scripture}</p>
        </div>
        
        <div class="description-section">
            <div class="description-title"><i data-lucide="compass" style="width: 16px;"></i> แนวทางการรับใช้</div>
            <p class="description-text">${detail.guideline}</p>
        </div>
        
        <div style="margin-top: 2.5rem; text-align: right;">
            <button class="btn btn-primary" onclick="closeModal()">ตกลง</button>
        </div>
    `;

    const modal = document.getElementById('giftModal');
    if (modal) {
        modal.style.display = 'flex';
        modal.classList.add('active');
        lucide.createIcons();
    }
}

function closeModal() {
    const modal = document.getElementById('giftModal');
    if (modal) {
        modal.classList.remove('active');
        modal.style.display = 'none';
    }
}

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
});

window.onclick = function(event) {
    const modal = document.getElementById('giftModal');
    if (event.target == modal) {
        closeModal();
    }
}
