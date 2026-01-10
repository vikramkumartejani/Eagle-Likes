import { PlanType } from '../PricingCards';

export interface Package {
    count: number;
    discount: {
        premium: number;
        active: number;
        vip: number;
    };
    price: number;
    originalPrice: number;
}

export interface ReviewSlide {
    count: number;
    text: string;
    subtext: string;
    prefix?: string;
}

export type { PlanType };
