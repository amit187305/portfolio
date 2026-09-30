// ============================================
// 🌙 DARK MODE TOGGLE
// ============================================

// --------------------------------------------
// ধাপ ১: HTML থেকে বাটনটি ধরা
// --------------------------------------------
// document        = পুরো HTML পেজ
// .getElementById = "theme-toggle" আইডির এলিমেন্ট খোঁজো
// const           = একটি স্থায়ী নাম বানানো (পরে বদলাবে না)

const themeToggle = document.getElementById('theme-toggle');


// --------------------------------------------
// ধাপ ২: পেজ লোড হলে আগের থিম মনে রাখা
// --------------------------------------------
// localStorage       = ব্রাউজারের স্মৃতিশক্তি
// .getItem('theme')  = আগে সেভ করা থিম বের করো

const savedTheme = localStorage.getItem('theme');

// যদি আগে "dark" সেভ করা থাকে...
if (savedTheme === 'dark') {
    // body-তে "dark" ক্লাস যোগ করো → পুরো সাইট কালো হবে
    document.body.classList.add('dark');
    // বাটনে সূর্য ☀️ দেখাও
    themeToggle.textContent = '☀️';
} else {
    // নাহলে চাঁদ 🌙 দেখাও (সাদা মোড)
    themeToggle.textContent = '🌙';
}


// --------------------------------------------
// ধাপ ৩: বাটনে ক্লিক করলে থিম পরিবর্তন
// --------------------------------------------
// .addEventListener('click', ...) = "ক্লিক" ঘটনাটি শোনো
// যখন ক্লিক হবে, তখন ভিতরের কাজটি করো

themeToggle.addEventListener('click', () => {

    // body-তে "dark" ক্লাস থাকলে সরাও, না থাকলে যোগ করো
    // .toggle() = থাকলে সরায়, না থাকলে যোগ করে
    document.body.classList.toggle('dark');

    // এখন চেক করো: body-তে "dark" ক্লাস আছে কি?
    if (document.body.classList.contains('dark')) {
        // হ্যাঁ, আছে → থিম সেভ করো
        localStorage.setItem('theme', 'dark');
        // বাটনে সূর্য ☀️ দেখাও
        themeToggle.textContent = '☀️';
    } else {
        // না, নেই → থিম সেভ করো
        localStorage.setItem('theme', 'light');
        // বাটনে চাঁদ 🌙 দেখাও
        themeToggle.textContent = '🌙';
    }

});