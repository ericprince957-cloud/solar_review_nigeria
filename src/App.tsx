import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import CategoryPage from './pages/CategoryPage';
import ProductReview from './pages/ProductReview';
import ComparisonPage from './pages/ComparisonPage';
import BuyingGuidePage from './pages/BuyingGuidePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import BlogPage from './pages/BlogPage';
import BrandPage from './pages/BrandPage';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col bg-gray-50">
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
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
