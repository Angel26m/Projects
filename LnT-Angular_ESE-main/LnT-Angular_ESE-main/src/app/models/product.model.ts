export interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    category: string;
    imageUrl: string;
}

export interface CartItem extends Product {
    quantity: number;
}
