
export type Place = {
    _id: string;
    alt_id: number;
    name: string;
    location?: Address
    events: Event[];
    enabled: boolean;
    featured: boolean;
    neighborhood: string;
    lastUpdated: Date;
    urls?: Urls;
};

export type Address = {
    // "@type": "PostalAddress",
    streetAddress: string;
    city: string, //addressRegion in official schema.org schema
    state: string, //addressLocality in official schema.org schema
    postalCode: number;
    geo?: {
        latitude: number;
        longitude: number;
    };
};

export type Urls = {
    homepage: string;
    eventListings: string;
    specials: string;
};

export type Event = {
    name: string;
    description?: string;
    keywords?: string | string[];
    startDate?: Date;
    endDate?: Date;
    allDay?: boolean;
    eventSchedule?: Schedule[];
    location?: Address; // use if event is off-site
    price?: number;
    url?: string;
    menu?: MenuItem[];
};

export type Schedule = {
    // '@context'?: string;
    // '@type': 'Schedule';
    startTime?: number;
    endTime?: number;
    byDay?: DayOfWeek | DayOfWeek[];
    byMonth?: number | number[]; 
    byMonthDay?: number | number[]; 
    byMonthWeek?: number | number[];
    repeatFrequency?: RepeatFrequency;
    repeatCount?: number;
    startDate?: string;
    endDate?: Date;
    exceptDate?: string | string[];
};

export enum DayOfWeek {
    Monday = 'MO',
    Tuesday = 'TU',
    Wednesday = 'WE',
    Thursday = 'TH',
    Friday = 'FR',
    Saturday = 'SA',
    Sunday = 'SU',
};

export enum RepeatFrequency {
    NoRepeat = 'P0Y',
    Yearly = 'P1Y',
    Monthly = 'P1M',
    Weekly = 'P1W',
    Daily = 'P1D',
};

export type MenuItem = {
    name: string;
    category?: 'Drink' | 'Food';
    price?: number;
    discountRate?: number; // 0.50 for 50% off
    discountPriceBy?: number; // 2 for $2 off
};