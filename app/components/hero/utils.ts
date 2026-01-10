import { PlanType } from './types';

// Price multipliers for different plan types
export const getPriceForPlan = (basePrice: number, planType: PlanType): number => {
    switch (planType) {
        case 'premium':
            return basePrice;
        case 'active':
            return basePrice * 2; // Active followers cost 2x
        case 'vip':
            return basePrice * 3; // VIP followers cost 3x
        default:
            return basePrice;
    }
};
