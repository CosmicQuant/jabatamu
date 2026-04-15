import { useState, useEffect } from 'react';

export const useTheme = () => {
    const [isDarkMode, setIsDarkMode] = useState(() => {
        try {
            const stored = localStorage.getItem('theme');
            if (stored === 'dark') return true;
            if (stored === 'light') return false;
            return false; // Default to light mode
        } catch {
            return false;
        }
    });

    useEffect(() => {
        if (isDarkMode) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    }, [isDarkMode]);

    const toggleTheme = () => setIsDarkMode(prev => !prev);

    return { isDarkMode, toggleTheme };
};