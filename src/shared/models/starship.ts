
export interface Starship {
    id: number;
    skuCode: string;
    price: number;
    color: string
    name: string;
    engines: string;
    height: number;
    length: number;
    width: number;
    weight: number;
    description: string;
    quantity: number;
    manufacturer: Manufacturer;
    hyperdriveSysteme: HyperdriveSystem;
    weapons: Weapon[]
}

export interface Manufacturer {
    name: string;
}

export interface HyperdriveSystem {
    name: string;
    manufacturer: Manufacturer;
}

export interface Weapon {
    name: string
    manufacturer: Manufacturer;
}