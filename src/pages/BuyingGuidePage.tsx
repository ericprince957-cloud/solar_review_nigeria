import { useParams, Link } from 'react-router-dom';
import { Clock, ArrowRight, BookOpen } from 'lucide-react';
import { buyingGuides } from '../data/products';

const guideContent: Record<string, { sections: { title: string; content: string }[] }> = {
  'choose-inverter-2bedroom': {
    sections: [
      { title: 'Understanding Your Power Needs', content: 'A typical 2-bedroom apartment in Nigeria runs: 3-4 fans (70W each), 6-8 LED lights (10W each), 1 TV (80W), phone chargers (20W), and sometimes a small fridge (150W). Total running load: approximately 500-700W. For startup surge (especially if you have a fridge), you need an inverter rated at least 1.5KVA.' },
      { title: 'What Size Inverter Do You Need?', content: 'For a 2-bedroom flat without a fridge: 1KVA (800W) inverter is sufficient. For a 2-bedroom flat with a fridge: 1.5-2KVA inverter recommended. Remember: Inverter VA × Power Factor = Watts. A 1KVA inverter at 0.8 power factor gives 800W usable power.' },
      { title: 'Battery Sizing', content: 'For 6-8 hours backup at 400W load: you need about 200Ah battery at 12V. Formula: (Load in Watts × Hours needed) / Battery Voltage = Amp-hours needed. So: (400W × 8 hours) / 12V = 267Ah. Round up to a 200Ah battery (you won\'t discharge it fully) or use 2 × 100Ah in parallel.' },
      { title: 'Estimated Total Cost (2026)', content: 'A complete setup for a 2-bedroom flat: Inverter (1.5KVA pure sine wave): ₦180,000-₦320,000. Battery (200Ah tubular): ₦180,000-₦220,000. Solar panels (2 × 300W): ₦150,000-₦200,000. Installation + cables: ₦50,000-₦80,000. Total: ₦560,000-₦820,000.' },
      { title: 'Our Recommendations', content: 'Best budget pick: Luminous Eco Watt 1100 + Exide 200Ah battery. Best overall: Felicity Solar 2KVA Hybrid + 2 × 200Ah batteries + 2 × 350W panels. The hybrid option costs more upfront but includes MPPT and allows solar expansion.' },
    ],
  },
  'solar-panel-sizing': {
    sections: [
      { title: 'How Solar Panel Sizing Works', content: 'Solar panels are rated in Watts (W). A 400W panel produces about 1.6-2.0 kWh per day in Nigeria (depending on location and weather). To size your system, you need to know: 1) Your daily energy consumption, 2) How many hours of good sunlight your location gets.' },
      { title: 'Daily Energy by Home Size', content: '1-bedroom (fans, lights, phone): ~1.5 kWh/day → 1-2 panels. 2-bedroom (+ TV, laptop): ~2.5 kWh/day → 2-3 panels. 3-bedroom (+ fridge): ~4 kWh/day → 3-5 panels. 4-bedroom (+ fridge, more appliances): ~6 kWh/day → 5-7 panels.' },
      { title: 'Location Matters', content: 'Northern Nigeria (Kano, Sokoto, Maiduguri): 5.5-6.5 peak sun hours — best solar potential. Central Nigeria (Abuja, Jos): 5.0-5.5 peak sun hours. Southern Nigeria (Lagos, PH, Benin): 4.0-4.5 peak sun hours — you need more panels for the same output.' },
      { title: 'Panel Configuration Tips', content: 'For systems with MPPT controllers: you can wire panels in series for higher voltage (less cable loss). For PWM controllers: panels must be wired in parallel at matching voltage. Always use properly rated solar cables (4mm² or 6mm²).' },
    ],
  },
  'va-kva-watts-guide': {
    sections: [
      { title: 'What is VA (Volt-Amps)?', content: 'VA is the "apparent power" rating of an inverter. It\'s the number you see on the box — 1KVA, 2KVA, etc. Think of it as the total capacity of the inverter, but NOT all of it is usable as real power.' },
      { title: 'What are Watts?', content: 'Watts (W) is "real power" — the actual usable energy that runs your appliances. Your TV uses 80W, your fan uses 70W, etc. The relationship: Watts = VA × Power Factor.' },
      { title: 'Power Factor Explained Simply', content: 'Power factor is the ratio of real power to apparent power. For most inverters, it\'s 0.7-0.8. So a 1KVA inverter with 0.8 power factor gives you 800W of real power. This is why a "1KVA inverter" can\'t actually run 1000W of appliances!' },
      { title: 'Practical Examples for Nigeria', content: '1KVA inverter = 700-800W usable (2 fans + 4 lights + TV). 2KVA inverter = 1400-1600W usable (fridge + fans + lights + TV). 3KVA inverter = 2100-2400W usable (fridge + AC + fans + lights). 5KVA inverter = 3500-4000W usable (full home with multiple ACs).' },
      { title: 'How to Calculate What You Need', content: 'Step 1: List all appliances and their wattage. Step 2: Add up the watts of everything you want to run simultaneously. Step 3: Divide by 0.8 (power factor) to get the VA rating needed. Example: 800W total ÷ 0.8 = 1000VA → You need a 1KVA inverter minimum.' },
    ],
  },
  'lead-acid-vs-lithium': {
    sections: [
      { title: 'Upfront Cost Comparison', content: 'Lead-acid (200Ah tubular): ₦180,000-₦220,000. Lithium (3.5kWh LiFePO4): ₦650,000-₦750,000. Lithium costs 3-4x more upfront. But is it really more expensive in the long run?' },
      { title: 'Lifespan & Total Cost of Ownership', content: 'Lead-acid lasts 3-5 years (with maintenance). Over 10 years, you\'d buy 2-3 sets = ₦360,000-₦660,000 total. Lithium lasts 10-15 years. Over 10 years, you buy 1 set = ₦650,000-₦750,000. The total cost is surprisingly similar!' },
      { title: 'Usable Capacity', content: 'Lead-acid: only 50% usable (200Ah = 100Ah usable) to maintain battery life. Lithium: 90% usable (same capacity gives you 1.8x more usable energy). So a 200Ah lithium battery gives you the usable capacity of a 360Ah lead-acid.' },
      { title: 'Maintenance', content: 'Lead-acid: needs distilled water top-up every 2-3 months, terminal cleaning, ventilation for gas release. Lithium: zero maintenance. No water, no gas, install it anywhere.' },
      { title: 'Our Recommendation', content: 'If budget allows: go lithium. The zero maintenance and longer life make it worth it. If budget is tight: lead-acid is still a solid choice — just budget for replacement in 3-5 years and maintain it properly.' },
    ],
  },
  'solar-cost-nigeria-2026': {
    sections: [
      { title: 'Basic Setup (1KVA) — ₦350,000-₦500,000', content: 'For a small flat or shop. Includes: 1KVA pure sine wave inverter, 1 × 200Ah battery, 1-2 solar panels, basic installation. Good for: fans, lights, TV, phone charging. Backup: 4-6 hours at light loads.' },
      { title: 'Standard Setup (2-3KVA) — ₦700,000-₦1,200,000', content: 'For a 2-3 bedroom home. Includes: 2-3KVA hybrid inverter, 2 × 200Ah batteries, 3-4 solar panels, full installation. Good for: fridge, fans, lights, TV, laptop. Backup: 6-8 hours at moderate loads.' },
      { title: 'Premium Setup (5KVA+) — ₦1,500,000-₦3,000,000+', content: 'For a large home or small business. Includes: 5KVA+ inverter, lithium batteries, 6-10 solar panels, professional installation. Good for: multiple ACs, full home backup. Backup: 8-12+ hours.' },
      { title: 'Hidden Costs to Budget For', content: 'Mounting structure for panels: ₦80,000-₦150,000. Battery rack/box: ₦15,000-₦30,000. Changeover switch: ₦15,000-₦25,000. Surge protection: ₦10,000-₦20,000. Extra cables/breakers: ₦20,000-₦40,000. Delivery (outside Lagos): ₦20,000-₦50,000.' },
    ],
  },
};

export default function BuyingGuidePage() {
  const { guideId } = useParams<{ guideId: string }>();
  const guide = buyingGuides.find(g => g.id === guideId);
  const content = guideId ? guideContent[guideId] : null;

  if (guideId && guide && content) {
    return (
      <div>
        <div className="bg-white border-b border-gray-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 py-3">
            <nav className="flex items-center gap-2 text-sm text-gray-500">
              <Link to="/" className="hover:text-solar-600">Home</Link>
              <span>/</span>
              <Link to="/guides" className="hover:text-solar-600">Buying Guides</Link>
              <span>/</span>
              <span className="text-gray-900 font-medium truncate">{guide.title}</span>
            </nav>
          </div>
        </div>

        <article className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
          <span className="text-sm font-medium text-solar-600">{guide.category}</span>
          <h1 className="text-3xl font-bold text-gray-900 mt-2">{guide.title}</h1>
          <div className="flex items-center gap-4 mt-3 text-sm text-gray-500">
            <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> {guide.readTime}</span>
            <span>Research-based guide</span>
          </div>

          <div className="mt-8 space-y-8">
            {content.sections.map((section, i) => (
              <div key={i}>
                <h2 className="text-xl font-bold text-gray-900 mb-3">{section.title}</h2>
                <p className="text-gray-700 leading-relaxed">{section.content}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 p-6 bg-solar-50 border border-solar-200 rounded-xl">
            <h3 className="font-bold text-solar-800 mb-2">Need Help Choosing?</h3>
            <p className="text-solar-900 text-sm">Our team can recommend the perfect solar setup for your specific needs and budget.</p>
            <Link to="/contact" className="inline-flex items-center gap-2 mt-3 px-4 py-2 bg-solar-500 hover:bg-solar-600 text-white text-sm font-medium rounded-lg transition-colors">
              Ask Us <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </article>
      </div>
    );
  }

  // Guide listing
  return (
    <div>
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3">
          <nav className="flex items-center gap-2 text-sm text-gray-500">
            <Link to="/" className="hover:text-solar-600">Home</Link>
            <span>/</span>
            <span className="text-gray-900 font-medium">Buying Guides</span>
          </nav>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
            <BookOpen className="w-8 h-8 text-solar-500" />
            Buying Guides
          </h1>
          <p className="text-gray-600 mt-2">Detailed guides to help you choose the right solar equipment for your Nigerian home or business</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {buyingGuides.map(guide => (
            <Link
              key={guide.id}
              to={`/guides/${guide.id}`}
              className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-md hover:border-solar-200 transition-all group"
            >
              <span className="text-xs font-medium text-solar-600 uppercase tracking-wide">{guide.category}</span>
              <h2 className="text-lg font-bold text-gray-900 mt-2 group-hover:text-solar-600 transition-colors">{guide.title}</h2>
              <p className="text-gray-600 text-sm mt-2">{guide.excerpt}</p>
              <div className="flex items-center gap-2 mt-4 text-xs text-gray-500">
                <Clock className="w-3 h-3" />
                <span>{guide.readTime}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
