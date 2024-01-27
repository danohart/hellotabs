
export type Place = {
    _id: string;
    name: string;
    address: string;
    geo: {
        latitude: number;
        longitude: number;
    };
    alt_id: number;
    day: dailySpecial[];
    enabled: boolean;
    featured: boolean;
    lastUpdated: Date;
    neighborhood: string;
}


export type dailySpecial = {
    name: string;
    drink_specials: string;
    food_specials: string;
    timeOfDay: {
        startTime: number,
        endTime: number
    };
}