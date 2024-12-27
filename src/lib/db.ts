export type Product = {
    category: string;   
    id: number;
    name: string;
    description: string;
    price: number;
    src: string;
};

export const products: Product[] = [
    {
        id: 1,
        name: "Wireless Mouse",
        description: "Ergonomic wireless mouse with a sleek design and adjustable DPI.",
        price: 25.99,
        src: '/photos/1.jpeg',
        category: 'Accessories'
    },
    {
        id: 2,
        name: "Bluetooth Headphones",
        description: "Noise-canceling Bluetooth headphones with up to 20 hours of battery life.",
        price: 89.99,
        src: '/photos/2.jpg',
        category: 'Electronics'
    },
    {
        id: 3,
        name: "Laptop Stand",
        description: "Adjustable laptop stand with a built-in cooling fan and ergonomic design.",
        price: 39.99,
        src: '/photos/3.jpeg',
        category: 'Accessories'
    },
    {
        id: 4,
        name: "4K Monitor",
        description: "27-inch 4K UHD monitor with high color accuracy and low blue light technology.",
        price: 299.99,
        src: '/photos/4.jpeg',
        category: 'Electronics'
    },
    {
        id: 5,
        name: "Keyboard and Mouse Combo",
        description: "Compact keyboard and mouse combo with quiet, responsive keys and ergonomic design.",
        price: 45.99,
        src: '/photos/5.jpeg',
        category: 'Accessories'
    },
    {
        id: 6,
        name: "USB-C Hub",
        description: "Multi-port USB-C hub with HDMI, USB-A, and SD card reader.",
        price: 29.99,
        src: '/photos/6.jpeg',
        category: 'Accessories'
    },
    {
        id: 7,
        name: "Portable SSD",
        description: "1TB portable SSD with fast data transfer speeds and rugged design.",
        price: 129.99,
        src: '/photos/7.jpeg',
        category: 'Accessories'
    },
    {
        id: 8,
        name: "Webcam",
        description: "1080p HD webcam with built-in microphone and auto-focus.",
        price: 59.99,
        src: '/photos/8.jpeg',
        category: 'Electronics'
    },
    {
        id: 9,
        name: "Ergonomic Chair",
        description: "Adjustable ergonomic chair with lumbar support and breathable mesh.",
        price: 199.99,
        src: '/photos/9.jpeg',
        category: 'Furniture'
    },
    {
        id: 10,
        name: "Gaming Keyboard",
        description: "Mechanical gaming keyboard with customizable RGB backlighting and programmable keys.",
        price: 79.99,
        src: '/photos/10.jpg',
        category: 'Accessories'
    },
];