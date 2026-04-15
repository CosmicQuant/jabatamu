

import React from 'react';
import { HashRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/home/Hero';
import { ProductSection } from './components/home/ProductSection';
import { TestimonialStrip } from './components/home/TestimonialStrip';
import { Cart } from './components/Cart';
import { StickyBuyBar } from './components/StickyBuyBar';
import { AIAssistant } from './components/AIAssistant';
import { LabPage } from './components/LabPage';
import { VibePage } from './components/VibePage';
import { RootsPage } from './components/RootsPage';
import { useCart } from './hooks/useCart';
import { useTheme } from './hooks/useTheme';

const AppContent: React.FC = () => {
  const { cartItems, isCartOpen, setIsCartOpen, addToCart, updateQuantity, removeFromCart, cartCount } = useCart();
  const { isDarkMode, toggleTheme } = useTheme();
  const navigate = useNavigate();

  const handleShopNow = () => {
    navigate('/');
    setTimeout(() => {
      const el = document.getElementById('shop');
      el?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <div className="min-h-screen selection:bg-yellow-500 selection:text-black bg-stone-50 dark:bg-[#0a0a0a] transition-colors duration-500">
      <Navbar
        cartCount={cartCount}
        onOpenCart={() => setIsCartOpen(true)}
        isDarkMode={isDarkMode}
        toggleTheme={toggleTheme}
      />

      <main className="animate-in fade-in slide-in-from-bottom-4 duration-1000">
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <TestimonialStrip />
              <ProductSection onAdd={addToCart} />
            </>
          } />
          <Route path="/lab" element={<LabPage />} />
          <Route path="/vibe" element={<VibePage onShopNow={handleShopNow} />} />
          <Route path="/roots" element={<RootsPage />} />
        </Routes>
      </main>

      <Footer />
      <Cart
        isOpen={isCartOpen}
        items={cartItems}
        onClose={() => setIsCartOpen(false)}
        onUpdateQuantity={updateQuantity}
        onRemove={removeFromCart}
        onAdd={addToCart}
      />
      <StickyBuyBar onAdd={addToCart} isCartOpen={isCartOpen} />
      <AIAssistant />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;
