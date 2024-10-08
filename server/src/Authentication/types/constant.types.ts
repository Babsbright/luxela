export enum UserRole {
    BUYER = 'buyer',
    SELLER = 'seller'
}

export enum ExtraInfo {
    CLOTH = 'clothing',
    SHOES = 'shoes',
    COSMETIC_PRODUCT = 'cosmetic products',
    ACCESSORIES = 'accessories',
    MERCH = 'merch',
    OTHERS = 'others'
}

export interface ISeller {
    id?: string,
    role: string,
    userId: string,
    images: {
        banner: string,
        pfp: string;
    },
    brandName: string,
    email: string,
    country: string,
    website: string,
    LogisticInfo: {
        typesOfShipping: string,
        refundPolicy: boolean,
        refundExpPeriod: string,
        EstimatedShippingTime: {
            days: number,
            minute: number
        }
    },
    ExtraInfo: {
        typesOfFashion: string[],
        targetAudience: string[],
        currencyPricing: string,
        preferredPaymentMethod: string[]
    },
    otpCode?: {
        code: string,
        exp: Date | any
    }
}

export interface IBuyer {
    id?: string,
    role: string,
    email: string,
    picture: string,
    isVerified: string,
    username: string,
    userId: string,
    otpCode?: {
        code: string,
        exp: Date | any
    }
}