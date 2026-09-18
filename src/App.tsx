import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Header from './components/Header';
import Footer from './components/Footer';
import CookieConsent from './components/CookieConsent';
import ForexBanner from './components/ForexBanner';
import Home from './pages/Home';
import CategoryPage from './pages/CategoryPage';
import ProductReview from './pages/ProductReview';
import ComparisonPage from './pages/ComparisonPage';
import BuyingGuidePage from './pages/BuyingGuidePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import BlogPage from './pages/BlogPage';
import BrandPage from './pages/BrandPage';
import LegalPage from './pages/LegalPage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <div className="min-h-screen flex flex-col bg-gray-50">
          <ForexBanner />
          <Header />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/category/:categoryId" element={<CategoryPage />} />
              <Route path="/reviews/:productId" element={<ProductReview />} />
              <Route path="/compare" element={<ComparisonPage />} />
              <Route path="/guides/:guideId" element={<BuyingGuidePage />} />
              <Route path="/guides" element={<BuyingGuidePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/blog/:postId" element={<BlogPage />} />
              <Route path="/brand/:brandId" element={<BrandPage />} />
              <Route path="/:pageId" element={<LegalPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </main>
          <Footer />
          <CookieConsent />
        </div>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
