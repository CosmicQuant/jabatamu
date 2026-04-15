import { useState, useEffect } from 'react';
import { Product, CartItem } from '../types';

export const useCart = () => {
    const [cartItems, setCartItems] = useState<CartItem[]>(() => {
        try {
            const stored = localStorage.getItem('cartItems');
            return stored ? JSON.parse(stored) : [];
        } catch {
            return [];
        }
    });

    const [isCartOpen, setIsCartOpen] = useState(false);

    useEffect(() => {
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }, [cartItems]);

    const addToCart = (product: Product) => {
        setCartItems(prev => {
            const existingItemIndex = prev.findIndex(item => item.id === product.id);
            if (existingItemIndex > -1) {
                const updatedCart = [...prev];
                updatedCart[existingItemIndex].quantity += 1;
                return updatedCart;
            }
            return [...prev, { ...product, quantity: 1 }];
        });
        // Open cart automatically on first add
        if (cartItems.length === 0) setIsCartOpen(true);
    };

    const updateQuantity = (id: string, delta: number) => {
        setCartItems(prev => prev.map(item =>
            item.id === id ? { ...item, quantity: Math.max(0, item.quantity + delta) } : item
        ).filter(item => item.quantity > 0));
    };

    const removeFromCart = (id: string) => {
        setCartItems(prev => prev.filter(item => item.id !== id));
    };

    const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

    return {
        cartItems,
        isCartOpen,
        setIsCartOpen,
        addToCart,
        updateQuantity,
        removeFromCart,
        cartCount
    };
};