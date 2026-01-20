import { Package, ReviewSlide } from './types';

export const PACKAGES: Package[] = [
    { count: 100, discount: { premium: 18, active: 22, vip: 25 }, price: 2.97, originalPrice: 3.62 },
    { count: 250, discount: { premium: 40, active: 45, vip: 50 }, price: 6.99, originalPrice: 11.65 },
    { count: 500, discount: { premium: 52, active: 56, vip: 60 }, price: 11.99, originalPrice: 24.99 },
    { count: 1000, discount: { premium: 63, active: 67, vip: 70 }, price: 18.99, originalPrice: 51.32 },
    { count: 2500, discount: { premium: 68, active: 72, vip: 75 }, price: 29.99, originalPrice: 93.72 },
    { count: 5000, discount: { premium: 70, active: 74, vip: 78 }, price: 49.99, originalPrice: 166.63 },
    { count: 10000, discount: { premium: 83, active: 86, vip: 88 }, price: 89.99, originalPrice: 529.35 },
    { count: 20000, discount: { premium: 85, active: 88, vip: 90 }, price: 149.99, originalPrice: 999.99 },
];

export const REVIEWS = {
    count: 38571,
};

export const FOLLOWERS_UPDATES = [
    { name: "Sarah Jenkins", time: "10m", avatar: "https://randomuser.me/api/portraits/women/44.jpg" },
    { name: "Michael Chen", time: "12m", avatar: "https://randomuser.me/api/portraits/men/32.jpg" },
    { name: "Jessica Williams", time: "15m", avatar: "https://randomuser.me/api/portraits/women/68.jpg" },
    { name: "David Miller", time: "18m", avatar: "https://randomuser.me/api/portraits/men/85.jpg" },
    { name: "Emily Wilson", time: "20m", avatar: "https://randomuser.me/api/portraits/women/22.jpg" },
    { name: "James Anderson", time: "25m", avatar: "https://randomuser.me/api/portraits/men/15.jpg" },
    { name: "Olivia Taylor", time: "30m", avatar: "https://randomuser.me/api/portraits/women/90.jpg" },
    { name: "Daniel Thomas", time: "35m", avatar: "https://randomuser.me/api/portraits/men/54.jpg" },
    { name: "Sophia Martinez", time: "40m", avatar: "https://randomuser.me/api/portraits/women/28.jpg" },
    { name: "William Roberts", time: "45m", avatar: "https://randomuser.me/api/portraits/men/62.jpg" },
    { name: "Ava Robinson", time: "50m", avatar: "https://randomuser.me/api/portraits/women/45.jpg" },
    { name: "Alexander White", time: "55m", avatar: "https://randomuser.me/api/portraits/men/33.jpg" },
];

export const REVIEW_SLIDES: ReviewSlide[] = [
    { count: 42389, text: "customers", subtext: "ordered multiple times", prefix: "" },
    { count: 1547, text: "users", subtext: "left a 5-star rating", prefix: "🌟 " },
    { count: 891, text: "", subtext: "bought in last 24h", prefix: "❤️‍🔥️ Trending! " },
];
