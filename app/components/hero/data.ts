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
    { name: "started foll", time: "10m" },
    { name: "started full", time: "30m" },
    { name: "started full", time: "15m" },
    { name: "started full", time: "50m" },
    { name: "started full", time: "20m" },
    { name: "started full", time: "55m" },
    { name: "started full", time: "1h" },
    { name: "started full", time: "1h" },
    { name: "started full", time: "2h" },
    { name: "started full", time: "3h" },
    { name: "started full", time: "5h" },
    { name: "started full", time: "6h" },
];

export const REVIEW_SLIDES: ReviewSlide[] = [
    { count: 42389, text: "customers", subtext: "ordered multiple times", prefix: "" },
    { count: 1547, text: "users", subtext: "left a 5-star rating", prefix: "🌟 " },
    { count: 891, text: "", subtext: "bought in last 24h", prefix: "❤️‍🔥️ Trending! " },
];
