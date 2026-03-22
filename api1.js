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


/*---------------------------PewPew------------------------------------*/
async function fetchYouTubePewPew() {
    const API_KEY = 'AIzaSyCDnV0yn53OJLQVdNVg4Vj6G4jkGpCf-NU'; // Dán Key của bạn
    const CHANNEL_ID = 'UCsaMa3VD1I9G952DDlOX7aw'; // Dán ID kênh
    
    try {
        const url = `https://www.googleapis.com/youtube/v3/channels?part=statistics,snippet&id=${CHANNEL_ID}&key=${API_KEY}`;
        const res = await fetch(url);
        const data = await res.json();

        if (data.items && data.items.length > 0) {
            const stats = data.items[0].statistics;
            const snippet = data.items[0].snippet;
            const now = new Date().toLocaleTimeString('vi-VN');

            // Đổ dữ liệu
            document.getElementById('yt-channel-name').innerText = snippet.title;
            
            // Dùng toLocaleString để có dấu phẩy ngăn cách hàng nghìn
            document.getElementById('yt-subs').innerText = Number(stats.subscriberCount).toLocaleString('en-US');
            document.getElementById('yt-views').innerText = Number(stats.viewCount).toLocaleString('en-US');
            
            document.getElementById('yt-time').innerText = now;

            // Render lại icon Lucide
            if (window.lucide) lucide.createIcons();
        }
    } catch (err) {
        console.error("Lỗi:", err);
        document.getElementById('yt-channel-name').innerText = "Lỗi kết nối API";
    }
}

// Chạy ngay khi mở trang
fetchYouTubePewPew();









/*---------------------------Mixigaming------------------------------------*/
async function fetchYouTubeMixigaming() {
    const API_KEY = 'AIzaSyCDnV0yn53OJLQVdNVg4Vj6G4jkGpCf-NU'; // Dán Key của bạn
    const CHANNEL_ID = 'UCA_23dkEYToAc37hjSsCnXA'; // Dán ID kênh
    
    try {
        const url = `https://www.googleapis.com/youtube/v3/channels?part=statistics,snippet&id=${CHANNEL_ID}&key=${API_KEY}`;
        const res = await fetch(url);
        const data = await res.json();

        if (data.items && data.items.length > 0) {
            const stats = data.items[0].statistics;
            const snippet = data.items[0].snippet;
            const now = new Date().toLocaleTimeString('vi-VN');

            // Đổ dữ liệu
            document.getElementById('yt-channel-name-mixi').innerText = snippet.title;
            
            // Dùng toLocaleString để có dấu phẩy ngăn cách hàng nghìn
            document.getElementById('yt-subs-mixi').innerText = Number(stats.subscriberCount).toLocaleString('en-US');
            document.getElementById('yt-views-mixi').innerText = Number(stats.viewCount).toLocaleString('en-US');
            
            document.getElementById('yt-time-mixi').innerText = now;

            // Render lại icon Lucide
            if (window.lucide) lucide.createIcons();
        }
    } catch (err) {
        console.error("Lỗi:", err);
        document.getElementById('yt-channel-name-mixi').innerText = "Lỗi kết nối API";
    }
}

// Chạy ngay khi mở trang
fetchYouTubeMixigaming();





/*---------------------------Speed------------------------------------*/
async function fetchYouTubeSpeed() {
    const API_KEY = 'AIzaSyBRU5vEv3mAgCCrnPhbU6zLOH6glNNNQWs'; // Dán Key của bạn
    const CHANNEL_ID = 'UC2bW_AY9BlbYLGJSXAbjS4Q'; // Dán ID kênh
    
    try {
        const url = `https://www.googleapis.com/youtube/v3/channels?part=statistics,snippet&id=${CHANNEL_ID}&key=${API_KEY}`;
        const res = await fetch(url);
        const data = await res.json();

        if (data.items && data.items.length > 0) {
            const stats = data.items[0].statistics;
            const snippet = data.items[0].snippet;
            const now = new Date().toLocaleTimeString('vi-VN');

            // Đổ dữ liệu
            document.getElementById('yt-channel-name-speed').innerText = snippet.title;
            
            // Dùng toLocaleString để có dấu phẩy ngăn cách hàng nghìn
            document.getElementById('yt-subs-speed').innerText = Number(stats.subscriberCount).toLocaleString('en-US');
            document.getElementById('yt-views-speed').innerText = Number(stats.viewCount).toLocaleString('en-US');
            
            document.getElementById('yt-time-speed').innerText = now;

            // Render lại icon Lucide
            if (window.lucide) lucide.createIcons();
        }
    } catch (err) {
        console.error("Lỗi:", err);
        document.getElementById('yt-channel-name-speed').innerText = "Lỗi kết nối API";
    }
}

// Chạy ngay khi mở trang
fetchYouTubeSpeed();






/*---------------------------TheFirstTake------------------------------------*/
async function fetchYouTubeTheFirstTake() {
    const API_KEY = 'AIzaSyBRU5vEv3mAgCCrnPhbU6zLOH6glNNNQWs'; // Dán Key của bạn
    const CHANNEL_ID = 'UC9zY_E8mcAo_Oq772LEZq8Q'; // Dán ID kênh
    
    try {
        const url = `https://www.googleapis.com/youtube/v3/channels?part=statistics,snippet&id=${CHANNEL_ID}&key=${API_KEY}`;
        const res = await fetch(url);
        const data = await res.json();

        if (data.items && data.items.length > 0) {
            const stats = data.items[0].statistics;
            const snippet = data.items[0].snippet;
            const now = new Date().toLocaleTimeString('vi-VN');

            // Đổ dữ liệu
            document.getElementById('yt-channel-name-thefirsttake').innerText = snippet.title;
            
            // Dùng toLocaleString để có dấu phẩy ngăn cách hàng nghìn
            document.getElementById('yt-subs-thefirsttake').innerText = Number(stats.subscriberCount).toLocaleString('en-US');
            document.getElementById('yt-views-thefirsttake').innerText = Number(stats.viewCount).toLocaleString('en-US');
            
            document.getElementById('yt-time-thefirsttake').innerText = now;

            // Render lại icon Lucide
            if (window.lucide) lucide.createIcons();
        }
    } catch (err) {
        console.error("Lỗi:", err);
        document.getElementById('yt-channel-name-thefirsttake').innerText = "Lỗi kết nối API";
    }
}

// Chạy ngay khi mở trang
fetchYouTubeTheFirstTake();





/*---------------------------DudePerfect------------------------------------*/
async function fetchYouTubeDudePerfect() {
    const API_KEY = 'AIzaSyDtaHm2NS1daIpQj9WuDBwBgaVAI_KDNiY'; // Dán Key của bạn
    const CHANNEL_ID = 'UCRijo3ddMTht_IHyNSNXpNQ'; // Dán ID kênh
    
    try {
        const url = `https://www.googleapis.com/youtube/v3/channels?part=statistics,snippet&id=${CHANNEL_ID}&key=${API_KEY}`;
        const res = await fetch(url);
        const data = await res.json();

        if (data.items && data.items.length > 0) {
            const stats = data.items[0].statistics;
            const snippet = data.items[0].snippet;
            const now = new Date().toLocaleTimeString('vi-VN');

            // Đổ dữ liệu
            document.getElementById('yt-channel-dudeperfect').innerText = snippet.title;
            
            // Dùng toLocaleString để có dấu phẩy ngăn cách hàng nghìn
            document.getElementById('yt-subs-dudeperfect').innerText = Number(stats.subscriberCount).toLocaleString('en-US');
            document.getElementById('yt-views-dudeperfect').innerText = Number(stats.viewCount).toLocaleString('en-US');
            
            document.getElementById('yt-time-dudeperfect').innerText = now;

            // Render lại icon Lucide
            if (window.lucide) lucide.createIcons();
        }
    } catch (err) {
        console.error("Lỗi:", err);
        document.getElementById('yt-channel-name-dudeperfect').innerText = "Lỗi kết nối API";
    }
}

// Chạy ngay khi mở trang
fetchYouTubeDudePerfect();





/*---------------------------Thời tiết------------------------------------*/
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



async function fetchSingapore() {
    const API_KEY = '3bc8c49d8686de0f7a767115fd965ce1';
    try {
        const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=Singapore&appid=${API_KEY}&units=metric&lang=vi`);
        const data = await res.json();
        
        // 1. Cập nhật các thông số thời tiết
        updateUI('sg-temp', `${Math.round(data.main.temp)}°C`);
        updateUI('sg-desc', data.weather[0].description);
        if (document.getElementById('sg-humidity')) {
            updateUI('sg-humidity', `${data.main.humidity}%`);
        }

        // 2. Lấy thời gian hiện tại và định dạng (HH:mm)
        const now = new Date();
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');
        const timeString = `${hours}:${minutes}:${seconds}`;

        // 3. Đổ thời gian vào giao diện (ID 'sg-time' mà mình đã thêm ở file HTML trước đó)
        updateUI('sg-time', timeString);

    } catch (err) {
        console.warn("Weather API lỗi hoặc cần API Key hợp lệ:", err);
    }
}





/*---------------------------Tin tức------------------------------------*/
async function fetchAllNews() {
    const NEWS_API_KEY = 'b0d80b2c8a7a4660a74700825841b9b6';
    // Chỉ dùng 1 URL duy nhất (ở đây chọn tin tức kinh doanh tổng hợp)
    const url = `https://newsapi.org/v2/everything?q=tesla&from=2026-02-22&sortBy=publishedAt&apiKey=${NEWS_API_KEY}`;

    try {
        const res = await fetch(url);
        const data = await res.json();

        // Kiểm tra nếu có dữ liệu bài báo
        const articles = data.articles ? data.articles.slice(0, 10) : [];
        const grid = document.getElementById('news-grid');
        const template = document.getElementById('news-item-template');

        if (!grid || !template) return;

        grid.innerHTML = ''; // Xóa nội dung cũ

        articles.forEach(article => {
            // Loại bỏ các bài báo bị xóa (Title là [Removed])
            if (article.title === "[Removed]") return;

            const clone = template.content.cloneNode(true);
            
            clone.querySelector('.news-title').textContent = article.title;
            clone.querySelector('.news-source').textContent = article.source.name;
            clone.querySelector('.news-link').href = article.url;
            
            const date = new Date(article.publishedAt);
            clone.querySelector('.news-date').textContent = date.toLocaleDateString('vi-VN');
            
            grid.appendChild(clone);
        });

        if (window.lucide) lucide.createIcons();

    } catch (error) {
        console.error("Lỗi tải tin tức:", error);
    }
}

// Gọi hàm
fetchAllNews();


// 5. Vòng lặp cập nhật
function initApp() {
    fetchYouTubeSpeed();
    fetchYouTubePewPew();
    fetchYouTubeTheFirstTake();
    fetchYouTubeMixigaming();
    fetchYouTubeDudePerfect();
    fetchHaNoi();
    fetchTokyo();
    fetchBeijing();
    fetchSeoul();
    fetchSingapore();
    fetchNews();
    // Cập nhật mỗi 5 phút (300.000ms) để tránh bị khóa API
    setInterval(() => {
        fetchYouTubeSpeed();
        fetchYouTubePewPew();
        fetchYouTubeTheFirstTake();
        fetchYouTubeMixigaming();
        fetchYouTubeDudePerfect();
        fetchHaNoi();
        fetchTokyo();
        fetchBeijing();
        fetchSeoul();
        fetchSingapore();
        fetchNews();
    }, 300000);
}