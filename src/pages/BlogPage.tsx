import { useParams, Link } from 'react-router-dom';
import { Clock, Tag } from 'lucide-react';
import { blogPosts } from '../data/products';

const postContent: Record<string, string> = {
  'solar-panel-price-increase-2026': `The solar equipment market in Nigeria has seen significant price changes in June 2026 due to ongoing forex fluctuations. Here's our updated price guide:

Solar Panels (per 400W panel): ₦85,000 - ₦110,000 (up 8% from last month)
Tubular Batteries (200Ah): ₦180,000 - ₦230,000 (stable)
Lithium Batteries (3.5kWh): ₦650,000 - ₦750,000 (up 5%)
Hybrid Inverters (2-3KVA): ₦280,000 - ₦450,000 (stable)
Complete 3KVA Kits: ₦1,100,000 - ₦1,400,000 (up 10%)

The main driver of price increases is the Naira/Dollar exchange rate, which affects imported panels and lithium batteries the most. Locally-assembled inverters (like some Felicity models) have seen less price movement.

Our advice: If you're planning a solar installation, don't wait too long. Prices have been trending upward and there's no indication they'll drop soon. Lock in your purchase if you find a good deal.`,

  'cbn-forex-solar-impact': `The Central Bank of Nigeria's recent forex policy changes have created uncertainty in the solar equipment market. Here's what it means for buyers:

What changed: The CBN has adjusted the official exchange rate window, affecting how importers access foreign currency for solar equipment imports.

Impact on prices: Solar panels (mostly imported from China) have seen 5-10% price increases. Batteries assembled locally have been less affected. Inverters from brands with Nigerian assembly (like Felicity) have seen moderate increases.

What to expect: We expect prices to remain elevated through Q3 2026. If the forex situation stabilizes, we might see some relief in Q4.

Advice for buyers: Consider complete kits from brands with local assembly — they tend to have more stable pricing. Also, buying during sales periods (Black Friday, end-of-year) can save you 5-15%.`,

  'felicity-new-5kva-launch': `Felicity Solar has just launched their new 5KVA hybrid inverter in the Nigerian market, and we've gotten hands-on with the first unit.

Key specs: 5KVA/4000W output, 48V system, built-in 80A MPPT (supports up to 4000W solar), parallel capability (connect 2 units for 10KVA), LCD touchscreen display.

First impressions: Build quality is excellent — the unit feels solid and the new touchscreen interface is a significant upgrade from previous models. The MPPT range (120-500V) allows flexible panel configurations.

Heat management: Felicity has improved the cooling system with larger heat sinks and dual fans. In our initial testing (2 weeks), the unit stayed cool even under heavy loads in Lagos heat.

Pricing: Expected retail price is ₦550,000 - ₦650,000 when it hits stores in July 2026.

Full review coming soon after our 4-week testing period.`,

  'harmattan-solar-tips': `Harmattan season (November - February) brings dusty conditions that can significantly reduce your solar panel output. Here's how to keep your system running efficiently:

1. Clean panels weekly: During heavy harmattan, dust can reduce output by 20-30%. Clean panels with water and a soft cloth/sponge every 5-7 days.

2. Clean early morning: Panels are cooler in the morning, reducing the risk of thermal shock from cold water on hot glass.

3. Don't use harsh chemicals: Plain water is sufficient. Avoid detergents that can leave residue.

4. Check connections: Harmattan dust can get into connections. Check and clean all MC4 connectors and terminal connections.

5. Monitor output: If you notice a sudden drop in generation that doesn't match weather conditions, it's probably dust. Clean and check again.

6. Protect batteries: Keep battery rooms well-ventilated but try to minimize dust entry. Dust on battery terminals can cause slow discharge.

7. Cover unused equipment: If you have spare panels or equipment in storage, cover them to prevent dust accumulation.

Pro tip: Some installers in Northern Nigeria tilt panels steeper during harmattan (closer to 30° instead of the usual latitude-based angle) to help dust slide off more easily.`,
};

export default function BlogPage() {
  const { postId } = useParams<{ postId: string }>();
  const post = blogPosts.find(p => p.id === postId);

  if (postId && post) {
    return (
      <div>
        <div className="bg-white border-b border-gray-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 py-3">
            <nav className="flex items-center gap-2 text-sm text-gray-500">
              <Link to="/" className="hover:text-solar-600">Home</Link>
              <span>/</span>
              <Link to="/blog" className="hover:text-solar-600">Blog</Link>
              <span>/</span>
              <span className="text-gray-900 font-medium truncate">{post.title}</span>
            </nav>
          </div>
        </div>

        <article className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="px-2.5 py-1 bg-solar-100 text-solar-700 text-xs font-medium rounded-full flex items-center gap-1">
              <Tag className="w-3 h-3" /> {post.category}
            </span>
            <span className="text-sm text-gray-500 flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" /> {post.date}
            </span>
          </div>

          <h1 className="text-3xl font-bold text-gray-900">{post.title}</h1>
          <p className="text-lg text-gray-600 mt-3">{post.excerpt}</p>

          <div className="mt-8 prose prose-lg max-w-none text-gray-700">
            {postContent[postId]?.split('\n\n').map((paragraph, i) => (
              <p key={i} className="mb-4 leading-relaxed">{paragraph}</p>
            ))}
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <h3 className="font-bold text-gray-900 mb-4">More Articles</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {blogPosts.filter(p => p.id !== postId).slice(0, 2).map(p => (
                <Link
                  key={p.id}
                  to={`/blog/${p.id}`}
                  className="p-4 bg-white rounded-lg border border-gray-200 hover:border-solar-200 hover:shadow-sm transition-all"
                >
                  <span className="text-xs text-solar-600 font-medium">{p.category}</span>
                  <h4 className="text-sm font-bold text-gray-900 mt-1">{p.title}</h4>
                  <span className="text-xs text-gray-500 mt-1">{p.date}</span>
                </Link>
              ))}
            </div>
          </div>
        </article>
      </div>
    );
  }

  // Blog listing
  return (
    <div>
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3">
          <nav className="flex items-center gap-2 text-sm text-gray-500">
            <Link to="/" className="hover:text-solar-600">Home</Link>
            <span>/</span>
            <span className="text-gray-900 font-medium">Blog & News</span>
          </nav>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        <h1 className="text-3xl font-bold text-gray-900">📰 Blog & News</h1>
        <p className="text-gray-600 mt-2">Latest updates on solar prices, policy changes, and product launches in Nigeria</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          {blogPosts.map(post => (
            <Link
              key={post.id}
              to={`/blog/${post.id}`}
              className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-md hover:border-solar-200 transition-all group"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="px-2.5 py-1 bg-solar-100 text-solar-700 text-xs font-medium rounded-full">{post.category}</span>
                <span className="text-xs text-gray-500">{post.date}</span>
              </div>
              <h2 className="text-lg font-bold text-gray-900 group-hover:text-solar-600 transition-colors">{post.title}</h2>
              <p className="text-gray-600 text-sm mt-2">{post.excerpt}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
