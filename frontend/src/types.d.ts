export interface Person {
    id: string;
    name: string;
    image: string;
    house?: string | null;
    hogwartsStudent?: boolean;
    hogwartsStaff?: boolean;
    gender: string;
}