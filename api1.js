// 1. Cấu hình & Khởi tạo
document.addEventListener('DOMContentLoaded', () => {
    lucide.createIcons();
    initApp();
});

// 2. Điều hướng trang mượt mà
function showPage(pageName) {
    const pages = document.querySelectorAll('.page');
    const navButtons = document.querySelectorAll('.nav-item');

    pages.forEach(page => page.classList.add('hidden'));
    document.getElementById(`page-${pageName}`).classList.remove('hidden');

    navButtons.forEach(btn => {
        btn.classList.remove('active', 'text-gray-900');
        btn.classList.add('text-gray-300');
    });

    const activeBtn = document.getElementById(`nav-${pageName}`);
    activeBtn.classList.add('active', 'text-gray-900');
    activeBtn.classList.remove('text-gray-300');
}

// 3. Hàm cập nhật dữ liệu vào giao diện (Tránh lỗi null)
function updateUI(id, value, fallback = '--') {
    const el = document.getElementById(id);
    if (el) {
        el.textContent = value || fallback;
        // Hiệu ứng nháy nhẹ khi có dữ liệu mới
        el.style.animation = 'none';
        el.offsetHeight; 
        el.style.animation = 'pulse-glow 0.5s ease-in-out';
    }
}

async function fetchSJC() {
    try {
        // BƯỚC 1: Gọi link API ở đây
        const res = await fetch('https://www.vang.today/api/prices?type=SJ9999');
        const data = await res.json();

        // 2. Lấy thời gian hiện tại
        const timeStr = new Date().toLocaleTimeString('vi-VN');
        
        // BƯỚC 2: Lấy dữ liệu từ API đổ vào HTML
        // (Giả sử cấu trúc API trả về có buy và sell)
        if (data) {
// 1. Đổ vào Vàng SJC (Dùng ID sjc-buy và sjc-sell đã đặt trong HTML)
    // Giả sử API trả về biến là data.sjc_buy hoặc data.buy
    updateUI('sjc-buy', data.sjc?.buy || data.buy); 
    updateUI('sjc-sell', data.sjc?.sell || data.sell);
    updateUI('sjc-time', `Cập nhật: ${timeStr}`); // Đã xóa khoảng trắng
            
        }
    } catch (err) {
        console.error("Lỗi kết nối API vàng:", err);
    }
}

async function fetchDOJI() {
    try {
        // BƯỚC 1: Gọi link API ở đây
        const res = await fetch('https://www.vang.today/api/prices?type=DOHCML');
        const data = await res.json();

        // 2. Lấy thời gian hiện tại
        const timeStr = new Date().toLocaleTimeString('vi-VN');
        
        // BƯỚC 2: Lấy dữ liệu từ API đổ vào HTML
        // (Giả sử cấu trúc API trả về có buy và sell)
        if (data) {
// 1. Đổ vào Vàng SJC (Dùng ID sjc-buy và sjc-sell đã đặt trong HTML)
    // Giả sử API trả về biến là data.sjc_buy hoặc data.buy
    updateUI('DOJI-buy', data.DOJI?.buy || data.buy); 
    updateUI('DOJI-sell', data.DOJI?.sell || data.sell);
    updateUI('DOJI-time', `Cập nhật: ${timeStr}`); // Đã xóa khoảng trắng
            
        }
    } catch (err) {
        console.error("Lỗi kết nối API vàng:", err);
    }
}



async function fetchWORLDGOLD() {
    try {
        // BƯỚC 1: Gọi link API
        const res = await fetch('https://www.vang.today/api/prices?type=XAUUSD');
        const data = await res.json();
        
        // 2. Lấy thời gian hiện tại
        const timeStr = new Date().toLocaleTimeString('vi-VN');

        // BƯỚC 2: Kiểm tra và đổ dữ liệu
        if (data) {
            // Lấy giá trị, ưu tiên theo cấu trúc của API vang.today
            const rawBuy = data.world_gold?.buy ?? data.buy ?? 0;
            const rawSell = data.world_gold?.sell ?? data.sell ?? 0;

            // Định dạng số cho đẹp (Ví dụ: 2.150,5)
            const buyPrice = rawBuy.toLocaleString('vi-VN');
            const sellPrice = rawSell.toLocaleString('vi-VN');

            // Gán vào HTML (Nhớ xóa khoảng trắng ở ID time)
            updateUI('world-gold-buy', buyPrice);
            updateUI('world-gold-sell', sellPrice);
            updateUI('world-gold-time', `Cập nhật: ${timeStr}`); // Đã xóa khoảng trắng
        }
    } catch (err) {
        console.error("Lỗi kết nối API vàng:", err);
    }
}


async function fetchPNJ24K() {
    try {
        // BƯỚC 1: Gọi link API ở đây
        const res = await fetch('https://www.vang.today/api/prices?type=PQHN24NTT');
        const data = await res.json();

        // 2. Lấy thời gian hiện tại
        const timeStr = new Date().toLocaleTimeString('vi-VN');
        
        // BƯỚC 2: Lấy dữ liệu từ API đổ vào HTML
        // (Giả sử cấu trúc API trả về có buy và sell)
        if (data) {
// 1. Đổ vào Vàng SJC (Dùng ID sjc-buy và sjc-sell đã đặt trong HTML)
    // Giả sử API trả về biến là data.sjc_buy hoặc data.buy
    updateUI('pnj24k-buy', data.PNJ24K?.buy || data.buy); 
    updateUI('pnj24k-sell', data.PNJ24K?.sell || data.sell);
    updateUI('pnj24k-time', `Cập nhật: ${timeStr}`); // Đã xóa khoảng trắng
            
        }
    } catch (err) {
        console.error("Lỗi kết nối API vàng:", err);
    }
}


async function fetchHaNoi() {
    const API_KEY = '3bc8c49d8686de0f7a767115fd965ce1';
    try {
        const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=Hanoi&appid=${API_KEY}&units=metric&lang=vi`);
        const data = await res.json();
        
        updateUI('hn-temp', `${Math.round(data.main.temp)}°C`);
        updateUI('hn-desc', data.weather[0].description);
        
        // Cập nhật thời gian
        const now = new Date();
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');

        const timeString = `${hours}:${minutes}:${seconds}`;

// Cập nhật vào UI
updateUI('hn-time', timeString);
        updateUI('hn-time', timeString);
    } catch (err) {
        console.error("Lỗi fetch Hà Nội:", err);
    }
}


async function fetchTokyo() {
    const API_KEY = '3bc8c49d8686de0f7a767115fd965ce1';
    try {
        const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=Tokyo&appid=${API_KEY}&units=metric&lang=vi`);
        const data = await res.json();
        
        // 1. Cập nhật các thông số thời tiết
        updateUI('jp-temp', `${Math.round(data.main.temp)}°C`);
        updateUI('jp-desc', data.weather[0].description);
        if (document.getElementById('jp-humidity')) {
            updateUI('jp-humidity', `${data.main.humidity}%`);
        }

        // 2. Lấy thời gian hiện tại và định dạng (HH:mm)
        const now = new Date();
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');
        const timeString = `${hours}:${minutes}:${seconds}`;

        // 3. Đổ thời gian vào giao diện (ID 'jp-time' mà mình đã thêm ở file HTML trước đó)
        updateUI('jp-time', timeString);

    } catch (err) {
        console.warn("Weather API lỗi hoặc cần API Key hợp lệ:", err);
    }
}


async function fetchBeijing() {
    const API_KEY = '3bc8c49d8686de0f7a767115fd965ce1';
    try {
        const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=Beijing&appid=${API_KEY}&units=metric&lang=vi`);
        const data = await res.json();
        
        // 1. Cập nhật các thông số thời tiết
        updateUI('bj-temp', `${Math.round(data.main.temp)}°C`);
        updateUI('bj-desc', data.weather[0].description);
        if (document.getElementById('bj-humidity')) {
            updateUI('bj-humidity', `${data.main.humidity}%`);
        }

        // 2. Lấy thời gian hiện tại và định dạng (HH:mm)
        const now = new Date();
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');
        const timeString = `${hours}:${minutes}:${seconds}`;

        // 3. Đổ thời gian vào giao diện (ID 'bj-time' mà mình đã thêm ở file HTML trước đó)
        updateUI('bj-time', timeString);

    } catch (err) {
        console.warn("Weather API lỗi hoặc cần API Key hợp lệ:", err);
    }
}



async function fetchSeoul() {
    const API_KEY = '3bc8c49d8686de0f7a767115fd965ce1';
    try {
        const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=Seoul&appid=${API_KEY}&units=metric&lang=vi`);
        const data = await res.json();
        
        // 1. Cập nhật các thông số thời tiết
        updateUI('sel-temp', `${Math.round(data.main.temp)}°C`);
        updateUI('sel-desc', data.weather[0].description);
        if (document.getElementById('sel-humidity')) {
            updateUI('sel-humidity', `${data.main.humidity}%`);
        }

        // 2. Lấy thời gian hiện tại và định dạng (HH:mm)
        const now = new Date();
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');
        const timeString = `${hours}:${minutes}:${seconds}`;

        // 3. Đổ thời gian vào giao diện (ID 'sel-time' mà mình đã thêm ở file HTML trước đó)
        updateUI('sel-time', timeString);

    } catch (err) {
        console.warn("Weather API lỗi hoặc cần API Key hợp lệ:", err);
    }
}

async function fetchAllNews() {
    const NEWS_API_KEY = 'b0d80b2c8a7a4660a74700825841b9b6';
    const url1 = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${NEWS_API_KEY}`;
    const url2 = `https://newsapi.org/v2/everything?domains=wsj.com&apiKey=${NEWS_API_KEY}`;

    try {
        // Chạy cả 2 request cùng lúc để tiết kiệm thời gian
        const [res1, res2] = await Promise.all([
            fetch(url1),
            fetch(url2)
        ]);

        const data1 = await res1.json();
        const data2 = await res2.json();

        // Gộp các bài báo lại thành 1 mảng duy nhất
        // Bạn có thể dùng slice() để giới hạn số lượng mỗi bên
        const allArticles = [...data1.articles.slice(0, 5), ...data2.articles.slice(0, 5)];

        const grid = document.getElementById('news-grid');
        const template = document.getElementById('news-item-template');

        // Xóa nội dung cũ 1 lần duy nhất
        grid.innerHTML = '';

        allArticles.forEach(article => {
            const clone = template.content.cloneNode(true);
            
            clone.querySelector('.news-title').textContent = article.title;
            clone.querySelector('.news-source').textContent = article.source.name;
            clone.querySelector('.news-link').href = article.url;
            
            const date = new Date(article.publishedAt);
            clone.querySelector('.news-date').textContent = date.toLocaleDateString('vi-VN');
            
            grid.appendChild(clone);
        });

        // Vẽ lại icon sau khi đã thêm tất cả
        if (window.lucide) {
            lucide.createIcons();
        }

    } catch (error) {
        console.error("Lỗi tải tin tức:", error);
    }
}

// Gọi hàm này thay vì gọi 2 hàm riêng biệt
fetchAllNews();


// 5. Vòng lặp cập nhật
function initApp() {
    fetchSJC();
    fetchDOJI();
    fetchWORLDGOLD();
    fetchPNJ24K();
    fetchHaNoi();
    fetchTokyo();
    fetchBeijing();
    fetchSeoul();
    fetchNews();
    fetchNews2();
    // Cập nhật mỗi 5 phút (300.000ms) để tránh bị khóa API
    setInterval(() => {
        fetchSJC();
        fetchDOJI();
        fetchWORLDGOLD();
        fetchPNJ24K();
        fetchHaNoi();
        fetchTokyo();
        fetchBeijing();
        fetchSeoul();
        fetchNews();
        fetchNews2();
    }, 300000);
}