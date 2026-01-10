
export interface MenuTemplate {
    id: string;
    name: string;
    style: 'modern' | 'rustic' | 'minimal';
    categories: {
        name: string;
        items: {
            name: string;
            description: string;
            price: string;
            image?: string;
        }[];
    }[];
}

export const MENU_TEMPLATES: Record<string, MenuTemplate> = {
    default: {
        id: 't1',
        name: 'Bistro Modern',
        style: 'modern',
        categories: [
            {
                name: 'Starters',
                items: [
                    { name: 'Truffle Arancini', description: 'Fried risotto balls with truffle oil & parmesan', price: '$12' },
                    { name: 'Burrata Salad', description: 'Heirloom tomatoes, fresh basil, balsamic glaze', price: '$16' }
                ]
            },
            {
                name: 'Mains',
                items: [
                    { name: 'Pan-Seared Salmon', description: 'Served with asparagus and lemon butter sauce', price: '$28' },
                    { name: 'Ribeye Steak', description: '12oz grass-fed beef with garlic mash', price: '$34' }
                ]
            }
        ]
    },
    mexican: {
        id: 't2',
        name: 'Cantina Spicy',
        style: 'rustic',
        categories: [
            {
                name: 'Antojitos',
                items: [
                    { name: 'Guacamole Fresco', description: 'Avocado, lime, cilantro, serrano peppers', price: '$10' },
                    { name: 'Queso Fundido', description: 'Melted chihuahua cheese with chorizo', price: '$12' }
                ]
            },
            {
                name: 'Tacos & Enchiladas',
                items: [
                    { name: 'Tacos Al Pastor', description: 'Marinated pork, pineapple, onion, cilantro', price: '$14' },
                    { name: 'Enchiladas Verdes', description: 'Chicken stuffed tortillas in green tomatillo sauce', price: '$16' }
                ]
            }
        ]
    },
    japanese: {
        id: 't3',
        name: 'Sakura Minimal',
        style: 'minimal',
        categories: [
            {
                name: 'Zensai',
                items: [
                    { name: 'Edamame', description: 'Steamed soybeans with sea salt', price: '$6' },
                    { name: 'Gyoza', description: 'Pan-fried pork and vegetable dumplings', price: '$9' }
                ]
            },
            {
                name: 'Sushi & Sashimi',
                items: [
                    { name: 'Omakase Nigiri', description: 'Chef\'s selection of 8 pieces', price: '$35' },
                    { name: 'Spicy Tuna Roll', description: 'Fresh tuna, cucumber, spicy mayo', price: '$12' }
                ]
            }
        ]
    }
};
