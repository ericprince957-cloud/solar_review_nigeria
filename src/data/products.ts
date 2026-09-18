export interface Product {
  id: string;
  name: string;
  brand: string;
  category: 'inverters' | 'batteries' | 'panels' | 'solar-kits' | 'solar-lanterns' | 'charge-controllers';
  image: string;
  imageAlt?: string; // Custom alt text for the product image
  rating: number; // Editorial/spec-based rating (0-5)
  ratingSource?: 'editorial' | 'customer' | 'spec-based'; // What the rating represents
  ratingCount?: number; // Number of customer ratings (if applicable)
  reviewCount?: number; // Number of customer reviews (if applicable)
  price: number; // Price in NGN
  priceVerifiedAt?: string; // ISO date when price was last verified
  priceSource?: string; // Where the price was sourced from
  priceNote: string;
  availability?: 'in-stock' | 'out-of-stock' | 'limited' | 'unknown'; // Current availability
  verdict: string;
  specs: Record<string, string>;
  pros: string[];
  cons: string[];
  reviewBody: string;
  bestFor: string[];
  faqs: { question: string; answer: string }[];
  buyLinks: { 
    store: string; 
    url: string;
    isAffiliate?: boolean; // Whether this is an affiliate link
  }[];
  ratingBreakdown: {
    performance: number;
    durability: number;
    valueForMoney: number;
    easeOfInstallation: number;
    batteryLife?: number;
  };
  relatedProducts: string[];
  updatedAt: string; // ISO date when review was last updated
  lastUpdated?: string; // Alternative field name for compatibility
  basedOnSpecsAndFeedback: boolean; // Whether review is based on specs/feedback vs hands-on testing
  physicallyTested?: boolean; // Whether we physically tested this product
  manufacturerUrl?: string; // Official manufacturer product page
  affiliateDisclosure?: string; // Custom affiliate disclosure text
}

// NOTE: All reviews are based on published manufacturer specifications, verified buyer feedback
// from Nigerian e-commerce platforms, and consultation with solar installers.
// Products marked as "tested" will only carry that designation once we have physically
// handled and installed units. See our methodology page for details.

export const products: Product[] = [
  {
    id: 'luminous-eco-watt-1100',
    name: 'Eco Watt 1100 Pure Sine Wave Inverter',
    brand: 'Luminous',
    category: 'inverters',
    image: 'https://image.qwenlm.ai/generated-images/98c39c35-dbb9-4ccf-a32e-2809babb51e6/_result.png',
    rating: 4.5,
    price: 185000,
    priceNote: 'Prices fluctuate with forex rates. Last verified June 2026.',
    verdict: 'Best budget pure sine wave inverter for small homes. Handles 2 fans, 4 lights, and a TV based on its 900VA/750W rating. Good entry point if you\'re replacing a small generator.',
    specs: {
      'Capacity': '900VA / 750W',
      'Wave Type': 'Pure Sine Wave',
      'Input Voltage': '12V DC',
      'Output Voltage': '230V AC',
      'Warranty': '2 years',
      'Weight': '8.5 kg',
      'Dimensions': '300 × 250 × 120 mm',
      'Efficiency': '85%',
      'Charging Current': '10A max',
    },
    pros: [
      'Pure sine wave — safe for sensitive electronics',
      'Luminous has authorized service centers in Lagos, Abuja, and Port Harcourt',
      'Handles voltage fluctuations well (built-in protection)',
      'Compact and lightweight for easy wall mounting',
      'Good value for money at current price point',
    ],
    cons: [
      'Only 900VA — not enough for a fridge + other loads simultaneously',
      'Single battery (12V) limits backup time',
      'Cooling fan can be audible during heavy load',
      'No MPPT solar charge controller built-in — requires separate purchase',
    ],
    reviewBody: `The Luminous Eco Watt 1100 is one of the most popular entry-level inverters in Nigeria. Based on its published specifications and buyer feedback from Nigerian e-commerce platforms, here's what you should know before purchasing.

At 900VA (750W usable at typical power factor), this inverter is designed for light loads. According to Luminous' specifications, it can comfortably power 2 standing fans (~140W), 4 LED bulbs (~40W), and a 32" TV (~60W) — totaling about 240W, well within its capacity. Multiple buyers on Jumia and Konga have confirmed this works as expected for basic home loads.

The pure sine wave output is a significant advantage over cheaper modified sine wave inverters. This means your electronics — especially TVs, phone chargers, and laptops — won't experience the buzzing, interference, or potential damage that modified sine wave units can cause. Several Nigerian buyers have specifically noted switching from modified to pure sine wave and seeing their electronics last longer.

Luminous maintains authorized service centers in major Nigerian cities including Lagos, Abuja, and Port Harcourt, which is important for warranty claims and repairs. Spare parts availability is generally good based on installer feedback.

For heat management: the unit is rated for operation in typical tropical conditions. User reports suggest the cooling fan activates under sustained loads above 500W, which is expected. Ensure adequate ventilation around the unit — don't enclose it in a tight cabinet.

One important note: this inverter does NOT have a built-in solar charge controller. If you want to charge from solar panels, you'll need to purchase a separate PWM or MPPT charge controller (adding ₦30,000-₦80,000 to your total cost). Alternatively, if you want an all-in-one solution, consider a hybrid inverter like the Felicity Solar 2KVA.

For battery pairing: Luminous recommends a 12V tubular battery of at least 150Ah. A 200Ah battery (like the Exide InvaMaster) would give approximately 5-6 hours of backup at a 250W load, based on standard discharge calculations.`,
    bestFor: [
      'Small apartments (1-2 bedroom) with basic loads',
      'Shops running fans, lights, and a TV',
      'First-time solar/inverter buyers on a budget',
      'Anyone replacing a small generator (1-2KVA)',
    ],
    faqs: [
      {
        question: 'Can this inverter power a freezer?',
        answer: 'No. The 900VA capacity (750W usable) is not enough for a freezer, which typically requires 1500W+ starting surge. You would need at least a 2.5KVA inverter for that. Consult a solar installer to properly size your system.',
      },
      {
        question: 'How long will it last on a 200Ah battery?',
        answer: 'Based on standard calculations: at a 300W load (2 fans + 4 lights + TV), a fully charged 200Ah 12V battery provides approximately 5-6 hours. Actual time varies based on battery age, temperature, and exact load. Never discharge a tubular battery below 50% regularly.',
      },
      {
        question: 'Is Luminous service available in Nigeria?',
        answer: 'Yes. Luminous has authorized service centers in Lagos, Abuja, Port Harcourt, and other major cities. You can verify the nearest center on Luminous\' official Nigeria website. Spare parts are generally available through authorized dealers.',
      },
    ],
    buyLinks: [
      { store: 'Luminous Nigeria (Official)', url: 'https://www.luminousnigeria.com/', isAffiliate: false },
      { store: 'Jumia Nigeria', url: 'https://www.jumia.com.ng/mlp-luminous-inverter/', isAffiliate: false },
      { store: 'Luminous India (Global)', url: 'https://www.luminousindia.com/', isAffiliate: false },
    ],
    manufacturerUrl: 'https://www.luminousnigeria.com/',
    ratingBreakdown: {
      performance: 4.5,
      durability: 4.0,
      valueForMoney: 4.5,
      easeOfInstallation: 4.5,
      batteryLife: 4.0,
    },
    relatedProducts: ['felicity-solar-2kva', 'blue-gate-1kva'],
    updatedAt: 'June 2026',
    basedOnSpecsAndFeedback: true,
  },
  {
    id: 'felicity-solar-2kva',
    name: 'Felicity Solar 2KVA Hybrid Inverter',
    brand: 'Felicity Solar',
    category: 'inverters',
    image: 'https://image.qwenlm.ai/generated-images/e5350978-1729-431e-aa36-674cd2a0cea8/_result.png',
    rating: 4.7,
    price: 320000,
    priceNote: 'Prices fluctuate with forex rates. Last verified June 2026.',
    verdict: 'Our top-rated hybrid inverter based on specs and buyer feedback. Built-in MPPT, handles a fridge + fans + lights, and the hybrid design means you can add solar panels anytime.',
    specs: {
      'Capacity': '2KVA / 1600W',
      'Wave Type': 'Pure Sine Wave',
      'Input Voltage': '24V DC',
      'Output Voltage': '230V AC',
      'Warranty': '3 years',
      'Weight': '15 kg',
      'Dimensions': '400 × 300 × 150 mm',
      'Efficiency': '90%',
      'MPPT Range': '60-115V DC',
      'Max Solar Input': '1000W',
      'Charging Current': '30A (solar) + 20A (AC)',
    },
    pros: [
      'Built-in MPPT solar charge controller — saves ₦50,000-₦80,000 vs buying separately',
      '2KVA capacity handles a fridge, fans, lights, and TV simultaneously',
      'Hybrid design: works with solar, PHCN, and generator seamlessly',
      'LCD display shows real-time solar generation and battery status',
      'Strong 3-year warranty — above average for the category',
      'Felicity has growing service presence in major Nigerian cities',
    ],
    cons: [
      'More expensive than basic non-hybrid inverters',
      'Heavier (15kg) — needs proper wall mounting, not just shelf placement',
      'Setup is more complex than plug-and-play inverters — professional installation recommended',
      '24V system requires 2 batteries in series — higher initial battery cost',
    ],
    reviewBody: `The Felicity Solar 2KVA Hybrid is our highest-rated inverter based on specification analysis, buyer feedback, and installer recommendations across Nigeria. Here's a detailed breakdown of why it stands out.

The built-in MPPT (Maximum Power Point Tracking) charge controller is the standout feature. MPPT controllers extract 20-30% more energy from solar panels compared to cheaper PWM controllers. By including this in the inverter, Felicity saves you the cost and complexity of buying a separate charge controller. According to Felicity's specifications, the MPPT accepts 60-115V DC input and supports up to 1000W of solar panels.

At 2KVA (1600W usable), this inverter can handle a typical Nigerian home's essential loads: a refrigerator (~150-200W running, higher on startup), 3-4 fans (~210-280W), 6 LED lights (~60W), a 43" TV (~80W), and phone chargers (~20W). Multiple buyers have confirmed running this combination without issues. The switchover time from grid to battery is specified at under 10ms — fast enough that most electronics won't notice.

The hybrid functionality means the inverter intelligently manages multiple power sources. According to Felicity's documentation, it prioritizes solar charging when available, then switches to grid (PHCN) charging, and can also accept generator input. This flexibility is valuable in Nigeria where power availability varies throughout the day.

The LCD display provides real-time information on solar input wattage, battery voltage/percentage, current load consumption, and output voltage. This is genuinely useful for monitoring your system's health without needing additional equipment.

Felicity Solar has been expanding its Nigerian presence, with service points now available in Lagos (Alaba International Market area), Abuja, and Onitsha. The 3-year warranty is above the industry average of 2 years, which suggests manufacturer confidence.

For battery pairing: this is a 24V system requiring 2 × 12V batteries in series. Felicity recommends 200Ah tubular batteries. Two 200Ah batteries at 24V would provide approximately 6-8 hours of backup at a moderate 400-500W load, based on standard discharge calculations.

Important: Professional installation is strongly recommended. The 24V battery configuration, solar panel wiring, and integration with your home's electrical system require proper expertise for safety and optimal performance.`,
    bestFor: [
      '3-bedroom homes with a fridge and possibly an inverter AC',
      'Homeowners who want to start with solar and expand later',
      'Small offices running computers, fans, and lighting',
      'Anyone replacing a 2-3KVA petrol generator',
    ],
    faqs: [
      {
        question: 'Can I add solar panels later?',
        answer: 'Yes. The built-in MPPT supports up to 1000W of solar panels according to Felicity\'s specifications. You can start with 2 panels and add more as your budget allows, as long as total wattage stays under 1000W and voltage stays within the 60-115V MPPT range.',
      },
      {
        question: 'How many batteries do I need?',
        answer: 'This is a 24V system, so you need 2 × 12V batteries connected in series. Based on standard calculations, 2 × 200Ah tubular batteries would provide 6-8 hours backup at moderate loads (400-500W). Your actual backup time depends on your specific load and how deeply you discharge the batteries.',
      },
      {
        question: 'Will it work with my existing generator?',
        answer: 'Yes. The hybrid design accepts AC input from PHCN or generator for battery charging. According to Felicity\'s specifications, it prioritizes solar first, then grid/generator. Make sure your generator output is stable (pure sine wave) for best results.',
      },
    ],
    buyLinks: [
      { store: 'Felicity Solar (Official)', url: 'https://www.felicitysolar.com/', isAffiliate: false },
      { store: 'Jumia Nigeria', url: 'https://www.jumia.com.ng/inverters/felicity-solar/', isAffiliate: false },
      { store: 'Felicity Solar SA', url: 'https://felicitysolar.co.za/', isAffiliate: false },
    ],
    manufacturerUrl: 'https://www.felicitysolar.com/',
    ratingBreakdown: {
      performance: 4.8,
      durability: 4.5,
      valueForMoney: 4.5,
      easeOfInstallation: 4.0,
      batteryLife: 4.7,
    },
    relatedProducts: ['luminous-eco-watt-1100', 'rubitek-3kva-hybrid'],
    updatedAt: 'June 2026',
    basedOnSpecsAndFeedback: true,
  },
  {
    id: 'tubular-battery-200ah',
    name: 'Exide InvaMaster 200Ah Tubular Battery',
    brand: 'Exide',
    category: 'batteries',
    image: 'https://image.qwenlm.ai/generated-images/6dc6ac34-82d1-4fc7-9866-4a1b65aaa747/_result.png',
    rating: 4.6,
    price: 210000,
    priceNote: 'Prices fluctuate with forex rates. Last verified June 2026.',
    verdict: 'The most widely recommended tubular battery for Nigerian solar setups based on installer feedback and buyer reviews. Expected lifespan of 3-5 years with proper maintenance.',
    specs: {
      'Capacity': '200Ah (C20 rating)',
      'Voltage': '12V',
      'Type': 'Tall Tubular Lead-Acid',
      'Warranty': '3 years (pro-rated)',
      'Weight': '58 kg',
      'Dimensions': '500 × 190 × 420 mm',
      'Cycle Life': '1200+ cycles at 50% DOD (per manufacturer)',
      'Operating Temp': '15°C - 45°C',
      'Water Refill Interval': '2-3 months (per manufacturer guidelines)',
      'Plate Type': 'Tubular positive plates',
    },
    pros: [
      'Widely available across Nigeria — easy to find in Lagos, Abuja, PH, and other cities',
      '3-year pro-rated warranty provides replacement assurance',
      'Tubular plates handle deep cycling better than flat-plate batteries',
      'Well-documented maintenance requirements from manufacturer',
      'Good capacity (200Ah) suitable for most home solar setups',
      'Operating temperature range covers Nigerian climate conditions',
    ],
    cons: [
      'Requires periodic distilled water top-up — not maintenance-free',
      'Heavy (58kg) — needs careful handling and proper placement',
      'Must be installed in a ventilated area (releases hydrogen gas during charging)',
      'Not maintenance-free like lithium alternatives',
      '50% max recommended depth of discharge for optimal lifespan',
    ],
    reviewBody: `The Exide InvaMaster 200Ah is one of the most commonly recommended tubular batteries for solar installations in Nigeria, based on installer recommendations and buyer feedback across Nigerian e-commerce platforms. Here's what the available information tells us.

Tubular plate technology is the key advantage over cheaper flat-plate batteries. According to Exide's specifications, the InvaMaster is rated for 1200+ cycles at 50% depth of discharge. In practical terms for Nigerian solar users who cycle their batteries daily, this translates to an expected lifespan of 3-5 years — significantly longer than flat-plate alternatives that typically last 1-2 years under similar conditions.

The 200Ah capacity at C20 rating means the battery can deliver 200 amps over 20 hours (or proportionally less over shorter periods). For a typical 12V solar system running 300-400W of loads, this provides approximately 5-7 hours of backup, depending on actual load and battery condition.

Exide's operating temperature range of 15°C to 45°C covers Nigerian climate conditions, though battery lifespan decreases at sustained high temperatures. Installers recommend keeping batteries in a shaded, ventilated area away from direct sunlight.

Important maintenance requirements (per Exide's guidelines):
• Check water levels every 2 months and top up with distilled water only
• Keep plates always covered with water — exposed plates will be permanently damaged
• Install in a ventilated area — hydrogen gas is released during charging
• Clean terminals every 6 months to prevent corrosion (apply petroleum jelly after cleaning)
• Don't regularly discharge below 50% — this significantly shortens battery life

The 3-year pro-rated warranty means if the battery fails within the warranty period, you'll receive a replacement valued proportionally to the remaining warranty time. This is standard industry practice.

At current pricing, the Exide InvaMaster offers a strong balance of cost and expected lifespan for Nigerian solar users. If your budget allows for a higher upfront investment, lithium (LiFePO4) batteries last 3x longer with zero maintenance — see our Pylontech US3000C review for comparison.`,
    bestFor: [
      'Home solar systems (1-5KVA inverters)',
      'Users who want proven reliability at a reasonable price',
      'Anyone replacing old car batteries (car batteries are NOT suitable for solar)',
      'Installers looking for a dependable battery to recommend to clients',
    ],
    faqs: [
      {
        question: 'How long will this battery last in Nigeria?',
        answer: 'Based on Exide\'s cycle life rating (1200+ cycles at 50% DOD) and typical Nigerian usage patterns, expect 3-5 years with proper maintenance. Actual lifespan depends on depth of discharge, temperature, maintenance regularity, and charging quality.',
      },
      {
        question: 'Can I use a car battery instead?',
        answer: 'No. Car batteries are designed for short, high-current bursts (starting an engine), not for the deep daily cycling that solar systems require. Using a car battery in a solar setup will typically result in failure within 6-12 months. Always use deep-cycle batteries (tubular, AGM, or lithium) for solar.',
      },
      {
        question: 'How much distilled water does it need?',
        answer: 'Per Exide\'s guidelines, check water levels every 2-3 months. Only use distilled water — never tap water (minerals damage the plates). Add enough to cover the plates by about 10-15mm. Never overfill. The exact amount varies based on usage and temperature.',
      },
    ],
    buyLinks: [
      { store: 'Exide Industries (Official)', url: 'https://www.exideindustries.com/products/inverter-batteries/tubular-inverter-batteries.aspx', isAffiliate: false },
      { store: 'Jumia Nigeria', url: 'https://www.jumia.com.ng/mlp-tubular-battery/', isAffiliate: false },
      { store: 'Exide Care', url: 'https://www.exidecare.com/find-exide/batteries-for-inverter', isAffiliate: false },
    ],
    manufacturerUrl: 'https://www.exideindustries.com/',
    ratingBreakdown: {
      performance: 4.5,
      durability: 4.8,
      valueForMoney: 4.5,
      easeOfInstallation: 4.0,
      batteryLife: 4.7,
    },
    relatedProducts: ['luminous-eco-watt-1100', 'felicity-solar-2kva'],
    updatedAt: 'June 2026',
    basedOnSpecsAndFeedback: true,
  },
  {
    id: 'jinko-450w-panel',
    name: 'Jinko Solar 450W Mono PERC Panel',
    brand: 'Jinko Solar',
    category: 'panels',
    image: 'https://image.qwenlm.ai/generated-images/6f75b17a-3961-4581-ad92-933d9b26f338/_result.png',
    rating: 4.4,
    price: 95000,
    priceNote: 'Prices fluctuate with forex rates. Last verified June 2026.',
    verdict: 'High-efficiency Tier-1 monocrystalline panel. Good for Nigerian rooftops where space is limited. Strong 25-year performance warranty from a major global manufacturer.',
    specs: {
      'Power Output': '450W (STC)',
      'Cell Type': 'Monocrystalline PERC',
      'Efficiency': '21.0%',
      'Voltage at MPP': '40.5V',
      'Current at MPP': '11.12A',
      'Open Circuit Voltage': '48.6V',
      'Short Circuit Current': '11.82A',
      'Dimensions': '2094 × 1038 × 35 mm',
      'Weight': '22.5 kg',
      'Warranty': '25 years linear / 12 years product',
      'Temperature Coefficient': '-0.35%/°C',
    },
    pros: [
      'High 21% efficiency — more power per square meter of roof space',
      'Tier-1 manufacturer (Jinko is one of the world\'s largest) with 25-year performance warranty',
      'PERC technology performs better in high temperatures than older cell types',
      'Good low-light performance for early morning and late afternoon generation',
      'Anti-PID technology helps resist degradation in tropical humidity',
      'Widely available through Nigerian solar distributors',
    ],
    cons: [
      'Large physical size (2.1m × 1.0m) — needs adequate roof space',
      'Heavy (22.5kg) — requires proper mounting structure',
      'Panel price has increased with recent forex changes',
      'Hot climate reduces actual output by ~10-15% vs STC rating (normal for all panels)',
    ],
    reviewBody: `Jinko Solar is one of the world's largest panel manufacturers and is classified as a "Tier-1" brand by Bloomberg New Energy Finance — meaning their panels are considered bankable and are widely used in large-scale solar projects globally. The 450W Mono PERC panel is well-regarded among Nigerian solar installers.

At 21% efficiency, this panel converts more sunlight to electricity per square meter than older polycrystalline panels (typically 15-17%). This matters for Nigerian rooftops where space may be limited — you get more power from fewer panels.

The PERC (Passivated Emitter and Rear Cell) technology is particularly relevant for Nigeria's climate. According to Jinko's specifications, the temperature coefficient is -0.35%/°C, meaning for every degree above 25°C, output drops by 0.35%. In Nigerian conditions where panel surface temperatures can reach 55-65°C, this translates to roughly 10-15% reduction from the rated 450W — giving real-world output of approximately 380-405W during peak sun. This is normal for all panels and not specific to Jinko.

Based on installer reports from Lagos and Abuja, a single 450W panel typically generates 1.6-2.0 kWh per day depending on weather conditions, orientation, and location. Northern Nigeria (Kano, Sokoto) gets more sun hours than southern cities (Lagos, Port Harcourt), so expect higher daily generation in the north.

The 25-year linear warranty guarantees the panel will produce at least 80% of its rated output after 25 years. The 12-year product warranty covers manufacturing defects. These are strong warranty terms from a manufacturer with global scale.

For a typical 3-bedroom Nigerian home with a 2KVA system, you would typically need 4-6 of these panels (1800-2700W total), depending on your actual daily energy consumption and how much solar generation you want.

Important: Always buy from authorized dealers. Counterfeit panels are a known problem in Nigerian solar markets. Verify the serial number on the back of each panel and check for proper Jinko branding and labeling.`,
    bestFor: [
      'Rooftop solar installations for homes and businesses',
      'Systems where roof space is limited (high efficiency helps)',
      'Users who want a Tier-1 brand with strong warranty backing',
      'Grid-tied and off-grid systems across Nigeria',
    ],
    faqs: [
      {
        question: 'How many panels do I need for a 3-bedroom house?',
        answer: 'For a typical 3-bedroom home with a 2KVA inverter and moderate loads (fridge, fans, lights, TV), you typically need 4-6 panels (1800-2700W total). The exact number depends on your specific daily energy consumption, your location\'s sun hours, and how much backup you need. A solar installer can calculate this precisely for your situation.',
      },
      {
        question: 'Will this work in rainy season?',
        answer: 'Yes, but output drops significantly on cloudy/rainy days — typically to 30-50% of normal output. This is why battery storage is essential for Nigerian solar systems. During extended rainy periods, you may need to supplement with grid or generator charging.',
      },
      {
        question: 'How do I avoid fake panels?',
        answer: 'Buy from authorized Jinko dealers. Check for: (1) proper Jinko logo and labeling, (2) serial number on the back that can be verified, (3) consistent build quality with no visible defects. Avoid suspiciously cheap panels from unknown sellers. Prices significantly below market rate are a red flag.',
      },
    ],
    buyLinks: [
      { store: 'Jinko Solar (Official)', url: 'https://www.jinkosolar.com/', isAffiliate: false },
      { store: 'Jumia Nigeria', url: 'https://www.jumia.com.ng/jinko-450w-solar-panel-mono-2436v48v-419404270.html', isAffiliate: false },
      { store: 'Jinko Solar US', url: 'https://jinkosolar.us/', isAffiliate: false },
    ],
    manufacturerUrl: 'https://www.jinkosolar.com/',
    ratingBreakdown: {
      performance: 4.5,
      durability: 4.5,
      valueForMoney: 4.3,
      easeOfInstallation: 4.0,
    },
    relatedProducts: ['felicity-solar-2kva', 'complete-home-kit-3kva'],
    updatedAt: 'June 2026',
    basedOnSpecsAndFeedback: true,
  },
  {
    id: 'complete-home-kit-3kva',
    name: 'Complete 3KVA Solar Home Kit (Felicity)',
    brand: 'Felicity Solar',
    category: 'solar-kits',
    image: 'https://image.qwenlm.ai/generated-images/e5350978-1729-431e-aa36-674cd2a0cea8/_result.png',
    rating: 4.3,
    price: 1250000,
    priceNote: 'Prices fluctuate with forex rates. Last verified June 2026. Installation and mounting structure not included.',
    verdict: 'All-in-one kit that removes the hassle of sourcing compatible components. Includes inverter, batteries, panels, and accessories. Good for buyers who want one vendor for the core system.',
    specs: {
      'Inverter': '3KVA/2400W Hybrid Pure Sine Wave',
      'Batteries': '2 × 200Ah Tubular',
      'Solar Panels': '4 × 350W Mono',
      'Charge Controller': 'Built-in MPPT 60A',
      'Total Solar': '1400W',
      'Estimated Daily Generation': '~5.5 kWh (good sun conditions)',
      'Estimated Backup': '6-8 hours at 500W load',
      'Warranty': '2-3 years (varies by component)',
      'Cables & Accessories': 'Included (solar cables, MC4, breaker)',
      'Mounting Structure': 'NOT included (add ₦80,000-₦150,000)',
    },
    pros: [
      'Everything included — no need to source and verify component compatibility',
      'Components are pre-matched to work together',
      '3KVA can power fridge, fans, lights, TV, and laptop simultaneously',
      'Built-in MPPT means efficient solar charging without extra equipment',
      'Warranty coverage across all components from single vendor',
      'Simplifies the buying process for first-time solar purchasers',
    ],
    cons: [
      'Higher total cost vs sourcing components individually (convenience premium)',
      'Mounting structure NOT included — significant additional cost',
      'Installation NOT included — budget ₦50,000-₦100,000 for professional installation',
      'Some components may not be the absolute best in their individual class',
      'Limited customization — what you see is what you get',
    ],
    reviewBody: `Complete solar kits are popular in Nigeria because they remove the complexity of sourcing compatible components individually. This Felicity 3KVA kit bundles the core components of a home solar system into one package.

The kit includes: a 3KVA hybrid inverter (with built-in 60A MPPT), 2 × 200Ah tubular batteries, 4 × 350W monocrystalline panels, solar cables, MC4 connectors, and a DC breaker. Based on the included components' individual specifications, this system should handle moderate home loads (fridge, fans, lights, TV, phone chargers) comfortably.

Important cost breakdown — the kit price does NOT include everything you need:
• Kit: ₦1,250,000
• Mounting structure: ₦80,000-₦150,000 (varies by roof type)
• Professional installation: ₦50,000-₦100,000
• Delivery outside major cities: ₦20,000-₦50,000
• Total realistic cost: ₦1,400,000-₦1,550,000

Is the kit worth it vs buying separately? Based on current individual component prices, buying separately might save ₦100,000-₦150,000 but introduces compatibility risk and requires more research. For first-time buyers who value convenience and compatibility assurance, the kit approach makes sense.

Based on the specifications of included components: the 1400W solar array should generate approximately 5-6 kWh per day in good conditions (more in northern Nigeria, less in southern coastal areas during rainy season). The 2 × 200Ah batteries at 24V provide approximately 4.8 kWh usable capacity (at 50% DOD for battery longevity), supporting 6-8 hours of backup at moderate loads.

We recommend getting quotes from at least 2-3 installers for the mounting structure and installation labor, as prices vary significantly by location and roof type.`,
    bestFor: [
      '3-4 bedroom homes wanting full solar backup',
      'First-time solar buyers who want a complete, pre-matched solution',
      'Homeowners replacing 3-5KVA generators',
      'Small businesses (salons, shops, offices) with moderate power needs',
    ],
    faqs: [
      {
        question: 'Can I run an AC with this kit?',
        answer: 'A 1HP inverter-type AC, possibly — but only one at a time, and primarily when solar is generating. A 1.5HP or 2HP AC would likely overload the system. For homes that need AC backup, consider a larger 5KVA+ system.',
      },
      {
        question: 'How long until this kit pays for itself?',
        answer: 'This depends on your current electricity costs. If you were spending ₦30,000-₦50,000/month on petrol/diesel for a generator, a solar system of this size could pay for itself in approximately 2.5-4 years based on simple payback calculations. After that, you benefit from significantly reduced electricity costs for the system\'s remaining lifespan.',
      },
      {
        question: 'Do I need a technician to install this?',
        answer: 'Yes, absolutely. Solar installation involves high-voltage DC wiring, roof mounting, and integration with your home\'s electrical system. Improper installation can be dangerous and void warranties. Budget ₦50,000-₦100,000 for professional installation by a qualified solar installer.',
      },
    ],
    buyLinks: [
      { store: 'Felicity Solar (Official)', url: 'https://www.felicitysolar.com/', isAffiliate: false },
      { store: 'Jumia Nigeria', url: 'https://www.jumia.com.ng/felicity-solar/', isAffiliate: false },
    ],
    manufacturerUrl: 'https://www.felicitysolar.com/',
    ratingBreakdown: {
      performance: 4.3,
      durability: 4.2,
      valueForMoney: 4.3,
      easeOfInstallation: 3.8,
      batteryLife: 4.5,
    },
    relatedProducts: ['felicity-solar-2kva', 'jinko-450w-panel', 'tubular-battery-200ah'],
    updatedAt: 'June 2026',
    basedOnSpecsAndFeedback: true,
  },
  {
    id: 'epsolar-tracer-4210an',
    name: 'Epsolar Tracer 4210AN MPPT Controller',
    brand: 'Epsolar',
    category: 'charge-controllers',
    image: 'https://image.qwenlm.ai/generated-images/6f75b17a-3961-4581-ad92-933d9b26f338/_result.png',
    rating: 4.2,
    price: 75000,
    priceNote: 'Prices fluctuate with forex rates. Last verified June 2026.',
    verdict: 'Well-regarded MPPT charge controller for systems up to 1200W solar input. Widely available in Nigerian markets. Good option for DIY setups or systems using non-hybrid inverters.',
    specs: {
      'Max Solar Input': '1200W (12V system) / 2400W (24V system)',
      'Rated Charging Current': '40A',
      'Max PV Voltage': '100V',
      'MPPT Efficiency': '99.5% (per manufacturer)',
      'System Voltage': '12V/24V auto-detect',
      'USB Output': '5V/2A',
      'Communication': 'RS485 / MT-50 display included',
      'Protection': 'Over-charge, over-discharge, overload, short-circuit, reverse polarity',
      'Weight': '1.2 kg',
      'Dimensions': '210 × 135 × 60 mm',
    },
    pros: [
      'True MPPT tracking — 20-30% more efficient than PWM controllers',
      '40A rating handles most home solar arrays in Nigeria',
      'Built-in USB port for phone charging (convenient)',
      'RS485 communication allows monitoring with optional modules',
      'Comprehensive protection features safeguard your battery investment',
      'Widely available and affordable in Nigerian solar markets',
    ],
    cons: [
      'Included MT-50 display is basic — no smartphone app connectivity',
      '100V max PV voltage limits how many panels you can wire in series',
      'No built-in inverter — this is ONLY a charge controller, you still need a separate inverter',
      'Cooling fan can be audible under heavy charging current',
    ],
    reviewBody: `The Epsolar Tracer 4210AN is one of the most widely used MPPT charge controllers in Nigerian solar installations, based on its prevalence in major solar markets and installer recommendations.

MPPT (Maximum Power Point Tracking) controllers are significantly more efficient than cheaper PWM controllers. According to Epsolar's specifications, the Tracer achieves 99.5% MPPT tracking efficiency. In practical terms, this means you extract 20-30% more energy from the same solar panels compared to a PWM controller — a meaningful gain in Nigerian conditions where every watt matters, especially during harmattan or rainy season.

At 40A rated charging current, this controller can handle solar arrays up to 1200W on a 12V system or 2400W on a 24V system (per Epsolar's specifications). For most Nigerian home installations (typically 800-1600W of panels), this is adequate capacity.

The 100V maximum PV input voltage is an important constraint. It limits how many panels you can wire in series. For example, with 450W panels (48.6V open circuit), you can wire a maximum of 2 panels in series (97.2V total, within the 100V limit). If you need more panels, they must be wired in parallel strings.

The included MT-50 display shows battery voltage, charging current, solar input power, and load consumption. It's functional but basic. For more advanced monitoring, Epsolar offers the XRS-05 Bluetooth module (sold separately, approximately ₦15,000) that enables smartphone monitoring.

Build quality appears adequate based on buyer feedback — metal casing with heat sinks for thermal management. The comprehensive protection features (over-charge, over-discharge, overload, short-circuit, reverse polarity) help protect your battery investment from common wiring mistakes.

Note: This is ONLY a charge controller. You still need a separate inverter to convert battery DC power to AC for your home appliances. If you want an all-in-one solution, consider a hybrid inverter with built-in MPPT instead.`,
    bestFor: [
      'DIY solar enthusiasts building their own system',
      'Systems using non-hybrid inverters that need a separate charge controller',
      'Users upgrading from PWM to MPPT for better efficiency',
      '12V and 24V solar systems with up to 1200W/2400W solar input',
    ],
    faqs: [
      {
        question: 'Do I need this if I have a hybrid inverter?',
        answer: 'No. Hybrid inverters like the Felicity 2KVA have built-in MPPT controllers. This product is for systems with basic (non-hybrid) inverters that don\'t have solar charging capability built in.',
      },
      {
        question: 'How many panels can I connect?',
        answer: 'At 24V system voltage, you can connect up to 2400W of panels (per Epsolar\'s specs), as long as the total open circuit voltage stays under 100V. With 450W panels (48.6V Voc), that means maximum 2 in series, with additional strings in parallel. Always calculate total Voc at your location\'s lowest expected temperature (voltage increases in cold).',
      },
      {
        question: 'Is MPPT really better than PWM?',
        answer: 'Yes, significantly. MPPT controllers extract 20-30% more energy from panels, especially when panel voltage is higher than battery voltage (which is the normal operating condition). The extra cost of MPPT vs PWM typically pays for itself within the first year through additional energy harvested.',
      },
    ],
    buyLinks: [
      { store: 'EPEVER (Official)', url: 'https://www.epever.com/', isAffiliate: false },
      { store: 'Amazon', url: 'https://www.amazon.com/EPever-Controller-Display-Battery-Charging/dp/B01GMUPGZA', isAffiliate: false },
      { store: 'Man Solar', url: 'https://mannsolar.com/products/charge-controller-epever-tracer-4210an', isAffiliate: false },
    ],
    manufacturerUrl: 'https://www.epever.com/',
    ratingBreakdown: {
      performance: 4.3,
      durability: 4.0,
      valueForMoney: 4.5,
      easeOfInstallation: 4.2,
    },
    relatedProducts: ['jinko-450w-panel', 'felicity-solar-2kva', 'tubular-battery-200ah'],
    updatedAt: 'June 2026',
    basedOnSpecsAndFeedback: true,
  },
  {
    id: 'rubitek-3kva-hybrid',
    name: 'Rubitek 3KVA Hybrid Solar Inverter',
    brand: 'Rubitek',
    category: 'inverters',
    image: 'https://image.qwenlm.ai/generated-images/e5350978-1729-431e-aa36-674cd2a0cea8/_result.png',
    rating: 4.4,
    price: 420000,
    priceNote: 'Prices fluctuate with forex rates. Last verified June 2026.',
    verdict: 'Powerful hybrid inverter for larger homes. Handles multiple appliances including a 1HP AC based on its 2400W rating. Built-in MPPT and wide voltage range offer flexibility.',
    specs: {
      'Capacity': '3KVA / 2400W',
      'Wave Type': 'Pure Sine Wave',
      'Input Voltage': '48V DC',
      'Output Voltage': '230V AC',
      'Warranty': '2 years',
      'Weight': '22 kg',
      'Dimensions': '460 × 340 × 160 mm',
      'Efficiency': '91%',
      'MPPT Range': '120-450V DC',
      'Max Solar Input': '3000W',
      'Charging Current': '60A (solar) + 30A (AC)',
    },
    pros: [
      '3KVA/2400W handles most home loads including a 1HP inverter AC',
      'High voltage MPPT range (120-450V) — flexible panel series configurations',
      '48V system is more efficient than 24V (lower current, less cable loss)',
      'Can accept generator input for backup charging',
      'Large LCD with detailed system information',
      'Supports both lithium and lead-acid battery charging profiles',
    ],
    cons: [
      '48V system requires 4 batteries — higher initial battery cost',
      'Rubitek is a less established brand in Nigeria compared to Luminous or Felicity',
      'Service center availability limited to major cities (Lagos, Abuja)',
      'Complex setup — professional installation strongly recommended',
    ],
    reviewBody: `The Rubitek 3KVA is designed for larger Nigerian homes that need substantial backup power. Based on its specifications and available buyer feedback, here's our assessment.

At 3KVA (2400W usable), this inverter can handle significant loads. According to its specifications, it should manage a 1HP inverter AC (~750W running), fridge (~200W), 4-5 fans (~350W), 8-10 LED lights (~100W), and a TV (~80W) — totaling approximately 1480W, within its 2400W capacity. Note: conventional (non-inverter) ACs have much higher startup surges and may not be suitable.

The wide MPPT voltage range (120-450V) is a notable advantage. It allows panels to be wired in series for higher voltage and lower current, reducing cable losses and allowing longer cable runs from roof to inverter. This is particularly useful for Nigerian homes where the inverter location may be far from the roof. With 450W panels (48.6V Voc each), you could wire up to 9 panels in series (437V total, within the 450V limit).

The 48V battery system is more efficient than 24V systems because it draws less current for the same power, reducing heat and cable losses. However, it requires 4 × 12V batteries in series, which increases initial battery cost.

Build quality appears solid based on available information — proper heat sinks and temperature-controlled cooling fan. The LCD screen provides comprehensive system information.

An important consideration: Rubitek is a newer brand in the Nigerian market compared to established players like Luminous and Felicity. While the specifications are competitive, the after-sales service network is less developed. Service centers reportedly exist in Lagos and Abuja, but availability in other cities may be limited. Factor this into your decision, especially if you're outside major cities.`,
    bestFor: [
      '4+ bedroom homes with significant power needs',
      'Homes running a 1HP inverter-type AC',
      'Users who want to wire panels in series for efficiency',
      'Small offices or shops with multiple appliances',
    ],
    faqs: [
      {
        question: 'How many batteries do I need?',
        answer: 'This is a 48V system, requiring 4 × 12V batteries connected in series. Based on standard calculations, 4 × 200Ah batteries would provide approximately 6-8 hours backup at typical moderate loads. Your installer should calculate exact requirements based on your specific loads.',
      },
      {
        question: 'Can it run a 1.5HP AC?',
        answer: 'Based on its 2400W rating, a 1.5HP inverter-type AC might work under ideal conditions, but it would be near the limit. A conventional 1.5HP AC would likely overload it due to high starting surge. We recommend sticking with 1HP inverter-type AC for reliable operation.',
      },
      {
        question: 'Is Rubitek reliable?',
        answer: 'Rubitek is a less established brand in Nigeria compared to Luminous or Felicity. Based on available specifications, the product appears well-designed. However, the limited service network and shorter track record in the Nigerian market are factors to consider. If after-sales support is a priority, more established brands may be preferable.',
      },
    ],
    buyLinks: [
      { store: 'Rubitec Solar (Official)', url: 'https://www.rubitecsolar.com/', isAffiliate: false },
      { store: 'Coolamg Business', url: 'https://coolamg.com/product/rubitec-inverter/', isAffiliate: false },
    ],
    manufacturerUrl: 'https://www.rubitecsolar.com/',
    ratingBreakdown: {
      performance: 4.5,
      durability: 4.3,
      valueForMoney: 4.2,
      easeOfInstallation: 3.8,
      batteryLife: 4.4,
    },
    relatedProducts: ['felicity-solar-2kva', 'tubular-battery-200ah', 'complete-home-kit-3kva'],
    updatedAt: 'June 2026',
    basedOnSpecsAndFeedback: true,
  },
  {
    id: 'blue-gate-1kva',
    name: 'Blue Gate 1KVA Offline Inverter',
    brand: 'Blue Gate',
    category: 'inverters',
    image: 'https://image.qwenlm.ai/generated-images/98c39c35-dbb9-4ccf-a32e-2809babb51e6/_result.png',
    rating: 3.8,
    price: 95000,
    priceNote: 'Prices fluctuate with forex rates. Last verified June 2026.',
    verdict: 'Ultra-budget option for very small loads only. Fine for a single room or small shop running fans and lights. NOT suitable for TVs, computers, or sensitive electronics due to modified sine wave output.',
    specs: {
      'Capacity': '1KVA / 700W',
      'Wave Type': 'Modified Sine Wave',
      'Input Voltage': '12V DC',
      'Output Voltage': '230V AC',
      'Warranty': '1 year',
      'Weight': '5.5 kg',
      'Dimensions': '270 × 200 × 100 mm',
      'Efficiency': '80%',
      'Charging Current': '10A max',
    },
    pros: [
      'Very affordable — lowest-cost entry point for backup power',
      'Compact and lightweight — easy to place anywhere',
      'Simple to install — basic plug-and-play setup',
      'Adequate for resistive loads (fans, incandescent bulbs, phone chargers)',
    ],
    cons: [
      'Modified sine wave — NOT safe for TVs, computers, or sensitive electronics',
      'Only 700W usable — very limited capacity',
      'Short 1-year warranty — below industry standard',
      'Build quality is basic — plastic casing, minimal heat dissipation',
      'No solar charging capability',
      'Gets warm under sustained load — needs ventilation',
    ],
    reviewBody: `The Blue Gate 1KVA is the cheapest inverter we list, and we want to be very clear about its limitations. This is a modified sine wave inverter, which is fundamentally different from the pure sine wave inverters we recommend for most users.

Modified sine wave output causes problems with many electronics: TVs may show picture interference or buzzing, computers may malfunction, phone chargers may overheat, and some appliances may be damaged over time. This inverter is ONLY suitable for simple resistive loads like fans, incandescent/halogen bulbs, and basic phone chargers.

At 1KVA (700W usable), the capacity is very limited. Based on its specifications, it can handle approximately 2 fans (~140W) and 4-5 LED bulbs (~50W) — totaling about 190W, well within its capacity. But adding a TV or any sensitive electronics is not recommended.

Build quality is basic: plastic casing with minimal heat dissipation. User feedback suggests the unit gets noticeably warm during Nigerian afternoons, especially under sustained loads. The 1-year warranty is the shortest we've seen and reflects the manufacturer's own confidence level.

We list this product because some buyers have extremely tight budgets and need basic backup power NOW. If that's your situation and you ONLY need fans and lights, this will work. But we strongly recommend saving for a pure sine wave inverter if at all possible — the Luminous Eco Watt 1100 at roughly double the price is dramatically better for almost all use cases.

If you're unsure whether this is right for you, please contact us with your specific needs and we'll help you determine the minimum viable setup.`,
    bestFor: [
      'Very small shops (POS agents, kiosk operators) running only fans and lights',
      'Single room backup (fans + lights only — NO electronics)',
      'Extreme budget situations where every Naira counts',
      'Temporary power solution while saving for a proper pure sine wave system',
    ],
    faqs: [
      {
        question: 'Can I power my TV with this?',
        answer: 'We strongly advise against it. The modified sine wave output may cause buzzing, picture interference, and can potentially damage your TV over time. If you need TV backup, invest in a pure sine wave inverter instead.',
      },
      {
        question: 'How long will this inverter last?',
        answer: 'Based on its 1-year warranty and basic build quality, expect 1-3 years depending on usage intensity and environmental conditions. Heavy daily use in Nigerian heat may shorten this further.',
      },
      {
        question: 'Should I buy this or save more?',
        answer: 'If you can wait, we strongly recommend saving for a pure sine wave inverter (even the Luminous Eco Watt 1100 is much better and safer for electronics). If you need backup power immediately and can ONLY afford this, it will work for basic loads (fans and lights only).',
      },
    ],
    buyLinks: [
      { store: 'Blue Gate World (Official)', url: 'https://bluegateworld.com/', isAffiliate: false },
      { store: 'Jumia Nigeria', url: 'https://www.jumia.com.ng/bluegate/', isAffiliate: false },
      { store: 'Bluegate Products', url: 'https://www.bluegateproducts.com/', isAffiliate: false },
    ],
    manufacturerUrl: 'https://bluegateworld.com/',
    ratingBreakdown: {
      performance: 3.5,
      durability: 3.5,
      valueForMoney: 4.0,
      easeOfInstallation: 4.5,
      batteryLife: 3.5,
    },
    relatedProducts: ['luminous-eco-watt-1100', 'felicity-solar-2kva'],
    updatedAt: 'June 2026',
    basedOnSpecsAndFeedback: true,
  },
  {
    id: 'pylontech-us3000c',
    name: 'Pylontech US3000C Lithium Battery',
    brand: 'Pylontech',
    category: 'batteries',
    image: 'https://image.qwenlm.ai/generated-images/9e472573-3816-4f42-b827-73fb2982d00e/_result.png',
    rating: 4.8,
    price: 680000,
    priceNote: 'Prices fluctuate with forex rates. Last verified June 2026.',
    verdict: 'Premium lithium battery with exceptional lifespan and zero maintenance. The long-term cost of ownership is competitive with lead-acid when factoring in replacement cycles. Requires compatible inverter.',
    specs: {
      'Capacity': '3.55 kWh (56Ah @ 51.2V)',
      'Voltage': '51.2V',
      'Chemistry': 'LiFePO4 (Lithium Iron Phosphate)',
      'Cycle Life': '6000+ cycles at 90% DOD (per manufacturer)',
      'Depth of Discharge': '90% usable',
      'Warranty': '10 years',
      'Weight': '32 kg',
      'Dimensions': '480 × 355 × 165 mm',
      'Max Charge Current': '165A',
      'Max Discharge Current': '165A',
      'Communication': 'CAN/RS485',
      'Operating Temp': '-20°C to 55°C',
    },
    pros: [
      '10+ year expected lifespan — approximately 3x longer than lead-acid batteries',
      '90% usable capacity (vs 50% for lead-acid) — more effective energy per unit',
      'Zero maintenance — no water top-ups, no terminal cleaning needed',
      'Compact — takes up approximately 1/3 the space of equivalent lead-acid bank',
      'Lighter than equivalent lead-acid capacity (32kg vs 116kg for 2×200Ah)',
      '10-year warranty provides long-term assurance',
      'LiFePO4 chemistry is the safest lithium type — very low fire risk',
    ],
    cons: [
      'Very expensive upfront — approximately 3x the cost of equivalent lead-acid',
      'Requires compatible inverter with lithium battery support and CAN/RS485 communication',
      'Not widely available outside major Nigerian cities',
      'Cannot be repaired — complete unit replacement needed if it fails',
    ],
    reviewBody: `Lithium batteries represent the premium end of solar storage, and the Pylontech US3000C is one of the most widely recommended options available in Nigeria. Here's our analysis based on published specifications and total cost of ownership calculations.

The key advantage is lifespan: Pylontech rates the US3000C for 6000+ cycles at 90% depth of discharge. At one full cycle per day, that's 16+ years. Even at 2 cycles per day (common in Nigeria with unreliable grid power), you're looking at 8+ years of service. Compare this to lead-acid tubular batteries which typically last 3-5 years.

The 90% usable capacity is another major advantage. This 3.55 kWh battery gives you 3.2 kWh of usable energy. A 200Ah 12V lead-acid battery (also 2.4 kWh nominal) only gives you 1.2 kWh usable (at 50% DOD). So you need fewer lithium batteries to achieve the same usable capacity.

Total cost of ownership comparison:
• Lead-acid: ₦210,000 × 2 replacements over 10 years = ₦630,000 total
• Lithium: ₦680,000 × 1 purchase = ₦680,000 total
• The long-term cost is surprisingly similar, but lithium offers zero maintenance and takes up far less space.

Zero maintenance is a significant practical advantage. No checking water levels, no acid spills, no ventilation requirements for gas release. You can install it in a cupboard, living area, or any location without safety concerns.

The built-in BMS (Battery Management System) protects against overcharge, over-discharge, over-current, short circuit, and temperature extremes. It communicates with compatible inverters via CAN bus or RS485 for optimal charging control.

Compatible inverters include: Victron, Deye, Growatt, Felicity (with lithium support), and other modern hybrid inverters with CAN/RS485 communication. Check with your inverter manufacturer before purchasing.

LiFePO4 (Lithium Iron Phosphate) is the safest lithium chemistry available. Unlike laptop/phone lithium-ion batteries, LiFePO4 is extremely stable and doesn't pose fire risk even if physically damaged. The operating temperature range of -20°C to 55°C comfortably covers Nigerian conditions.

The main barrier is upfront cost. At ₦680,000 per unit, it's a significant investment. However, when viewed as a 10-year purchase vs replacing lead-acid batteries 2-3 times in the same period, the economics become more favorable.`,
    bestFor: [
      'Homeowners who want a "fit and forget" long-term solution',
      'Installations where space is limited (compact size)',
      'Users who want the longest-lasting battery option available',
      'Premium solar installations with budget flexibility',
    ],
    faqs: [
      {
        question: 'Is lithium worth the extra cost in Nigeria?',
        answer: 'Based on total cost of ownership calculations over 10 years, lithium is approximately cost-neutral with lead-acid when you factor in replacement cycles. The additional benefits are: zero maintenance, 90% usable capacity (vs 50%), much less space, lighter weight, and 10-year warranty vs 3-year. If you can afford the higher upfront cost, lithium offers a better long-term solution.',
      },
      {
        question: 'Will my inverter work with this battery?',
        answer: 'Your inverter must support lithium batteries AND have CAN or RS485 communication for the BMS to work properly. Most modern hybrid inverters (Felicity, Deye, Victron, Growatt) support Pylontech batteries. Older or basic inverters may not. Check your inverter\'s compatibility list before purchasing.',
      },
      {
        question: 'Is LiFePO4 safe in Nigerian heat?',
        answer: 'Yes. LiFePO4 is the safest lithium chemistry — it is extremely stable and does not pose fire risk even if physically damaged (unlike lithium-ion used in phones/laptops). The operating range goes up to 55°C, well above Nigerian ambient temperatures. The built-in BMS also shuts down the battery if internal temperature exceeds safe limits.',
      },
    ],
    buyLinks: [
      { store: 'Pylontech (Official)', url: 'https://en.pylontech.com.cn/', isAffiliate: false },
      { store: 'Pylontech US', url: 'https://www.pylontech.us/', isAffiliate: false },
      { store: 'Voltacon Solar', url: 'https://voltaconsolar.com/products/pylontech-us3000c-3-55kwh-48v-lithium-battery', isAffiliate: false },
    ],
    manufacturerUrl: 'https://en.pylontech.com.cn/',
    ratingBreakdown: {
      performance: 5.0,
      durability: 5.0,
      valueForMoney: 4.0,
      easeOfInstallation: 4.5,
      batteryLife: 5.0,
    },
    relatedProducts: ['felicity-solar-2kva', 'rubitek-3kva-hybrid', 'complete-home-kit-3kva'],
    updatedAt: 'June 2026',
    basedOnSpecsAndFeedback: true,
  },
  {
    id: 'sun-king-pico-plus',
    name: 'Pico Plus Solar Lantern',
    brand: 'Sun King',
    category: 'solar-lanterns',
    image: 'https://ng.sunking.com/wp-content/uploads/2024/01/pico-plus.png',
    rating: 4.3,
    price: 10000,
    priceNote: 'Prices may vary by retailer. Last verified June 2026.',
    verdict: 'Ultra-portable and budget-friendly solar lantern perfect for basic lighting needs. Ideal replacement for kerosene lamps with 5x brighter output and 72-hour runtime.',
    specs: {
      'Brightness': '50 lumens (max)',
      'Light Modes': '3 brightness levels',
      'Solar Panel': '350mW integrated polycrystalline',
      'Battery': '425 mAh LiFePO4 (3.3V)',
      'Runtime': 'Up to 72 hours',
      'Battery Life': '5 years',
      'Warranty': '2 years',
      'Weight': 'Ultra-portable',
      'Charging Time': '6-8 hours (full sun)',
      'Comparison': '5x brighter than kerosene lamp',
    },
    pros: [
      'Extremely affordable entry point for solar lighting',
      '72-hour runtime on single charge',
      '5-year battery lifespan with LiFePO4 chemistry',
      'Integrated solar panel - no external wiring needed',
      'Ultra-portable with multi-use stand',
      '3 brightness modes for flexibility',
      'Zero running costs after purchase',
    ],
    cons: [
      'Only 50 lumens - suitable for small areas only',
      'No USB charging port for phones',
      'Not suitable as primary lighting for large rooms',
      'Small battery capacity limits extended use',
    ],
    reviewBody: `The Sun King Pico Plus is designed as an entry-level solar lantern for basic lighting needs in Nigerian homes. Based on manufacturer specifications and user feedback, it delivers 50 lumens of brightness on max setting - approximately 5 times brighter than a traditional kerosene lamp.

The integrated 350mW polycrystalline solar panel charges the 425 mAh LiFePO4 battery, which is rated for 5 years of typical use. LiFePO4 chemistry is significant because it offers superior safety and longevity compared to older lithium-ion technologies.

With three brightness modes, users can balance light output against battery life. The maximum 72-hour runtime is achieved on the lowest setting, making it practical for overnight use during power outages.

The multi-use stand allows the lantern to function as a desk lamp, hanging light, or handheld torch. This versatility makes it suitable for various scenarios: reading, cooking areas, outdoor activities, or emergency lighting.

At approximately ₦8,000-₦10,000, the Pico Plus represents an accessible entry point for households transitioning from kerosene lamps to solar lighting. The zero running costs (no fuel, no electricity bills) make it economically attractive over time.

However, users should understand this is basic lighting - it won't illuminate an entire room or power devices. For multi-room lighting or phone charging, consider the Sun King Home 40 Plus or Pro 400 models.`,
    bestFor: [
      'Households transitioning from kerosene lamps',
      'Small rooms or personal lighting needs',
      'Students needing study light during outages',
      'Outdoor activities and camping',
      'Emergency backup lighting',
      'POS agents and small shop operators',
    ],
    faqs: [
      {
        question: 'How long does the battery last before needing replacement?',
        answer: 'The LiFePO4 battery is rated for 5 years of typical daily use. After this period, capacity will gradually decline but the lantern will still function at reduced runtime.',
      },
      {
        question: 'Can I charge my phone with this lantern?',
        answer: 'No, the Pico Plus does not have a USB charging port. For phone charging capability, consider the Sun King Pro 400 or Home 40 Plus models.',
      },
      {
        question: 'How long does it take to fully charge?',
        answer: 'Approximately 6-8 hours in direct sunlight. Cloudy conditions will extend charging time. The integrated solar panel is optimized for Nigerian sun conditions.',
      },
    ],
    buyLinks: [
      { store: 'Sun King Nigeria (Official)', url: 'https://ng.sunking.com/product/pico-plus/', isAffiliate: false },
      { store: 'Jumia Nigeria', url: 'https://www.jumia.com.ng/mlp-sun-king-pico-plus/', isAffiliate: false },
      { store: 'Thrillhouse Nigeria', url: 'https://www.thrillhouse.com.ng/shop/alternative-energy/sun-king-solar-gadgets/sun-king-pico-plus/', isAffiliate: false },
    ],
    manufacturerUrl: 'https://ng.sunking.com/',
    ratingBreakdown: {
      performance: 4.0,
      durability: 4.5,
      valueForMoney: 4.8,
      easeOfInstallation: 5.0,
      batteryLife: 4.5,
    },
    relatedProducts: ['sun-king-pro-400', 'sun-king-home-40-plus'],
    updatedAt: 'June 2026',
    basedOnSpecsAndFeedback: true,
  },
  {
    id: 'sun-king-pro-400',
    name: 'Pro 400 Solar Lantern',
    brand: 'Sun King',
    category: 'solar-lanterns',
    image: 'https://ng.sunking.com/wp-content/uploads/2024/01/pro-400.png',
    rating: 4.6,
    price: 37255,
    priceNote: 'Prices may vary by retailer. Last verified June 2026.',
    verdict: 'Super bright emergency solar lantern with USB phone charging. Delivers 400 lumens (40x brighter than kerosene) with 100-hour runtime and robust battery life.',
    specs: {
      'Brightness': '400 lumens (max)',
      'Light Modes': '3 brightness levels',
      'Solar Panel': '5.5W with 5-meter cable',
      'Battery': '5100 mAh LiFePO4',
      'Runtime': 'Up to 100 hours (low mode)',
      'Battery Life': '5 years',
      'Warranty': '2 years',
      'USB Output': 'Mobile phone charging',
      'Dimensions': 'Lamp: 130x145x74mm',
      'Comparison': '40x brighter than kerosene lamp',
    },
    pros: [
      '400 lumens provides substantial room lighting',
      'Built-in USB port for phone charging',
      '100-hour runtime on low power mode',
      'Separate 5.5W solar panel with long cable',
      '5-year battery lifespan with LiFePO4',
      'Suitable for home, office, and outdoor use',
      'Battery meter shows remaining charge',
    ],
    cons: [
      'Higher price point than basic lanterns',
      'Larger and heavier than Pico Plus',
      'Solar panel requires separate placement',
      'USB charging reduces available lighting runtime',
    ],
    reviewBody: `The Sun King Pro 400 is positioned as a premium solar lantern for Nigerian households and small businesses needing both bright lighting and phone charging capability. With 400 lumens maximum output, it delivers 40 times the brightness of a kerosene lamp according to manufacturer specifications.

The 5.5W solar panel connects via a 5-meter cable, allowing flexible placement for optimal sun exposure while the lantern remains indoors. This separate panel design is more effective than integrated panels for consistent charging.

The 5100 mAh LiFePO4 battery provides up to 100 hours of runtime on the lowest brightness setting. Three lighting modes allow users to balance brightness against battery life: high (200 lumens, 12 hours), normal (lower output, extended runtime), and low power (25 lumens, 100 hours).

The built-in USB charging port is a significant advantage for Nigerian users who need to keep phones charged during power outages. However, using USB charging will reduce available lighting runtime, so users must balance these needs.

At approximately ₦27,000-₦37,000, the Pro 400 represents a mid-range investment. It's suitable for shops, POS agents, small offices, or households needing both lighting and phone charging. The 5-year battery lifespan and 2-year warranty provide confidence in long-term value.

User feedback indicates reliable performance in Nigerian conditions, with the LiFePO4 battery maintaining capacity over extended use. The separate solar panel design allows optimal positioning even in spaces with limited roof access.`,
    bestFor: [
      'Small shops and POS businesses',
      'Households needing both lighting and phone charging',
      'Students requiring bright study light',
      'Security lighting for compounds',
      'Outdoor events and gatherings',
      'Small offices during power outages',
    ],
    faqs: [
      {
        question: 'Can I charge my phone while using the light?',
        answer: 'Yes, but using the USB charging port will reduce available battery for lighting. The Pro 400 is designed to handle both simultaneously, though runtime will be shorter than lighting-only use.',
      },
      {
        question: 'How bright is 400 lumens in practical terms?',
        answer: '400 lumens is sufficient to illuminate a medium-sized room (roughly 3m x 3m) for reading, cooking, or working. It\'s comparable to a 40W incandescent bulb.',
      },
      {
        question: 'How long does the solar panel take to charge the battery?',
        answer: 'Approximately 8-10 hours in direct sunlight for a full charge. The 5-meter cable allows placing the panel in optimal sun location while keeping the lantern indoors.',
      },
    ],
    buyLinks: [
      { store: 'Sun King Nigeria (Official)', url: 'https://ng.sunking.com/', isAffiliate: false },
      { store: 'Jumia Nigeria', url: 'https://www.jumia.com.ng/sun-king-pro-400-super-bright-emergency-solar-lamp-portable-solar-light-for-home-office-and-outdoor-travelling-use-60660863.html', isAffiliate: false },
    ],
    manufacturerUrl: 'https://ng.sunking.com/',
    ratingBreakdown: {
      performance: 4.7,
      durability: 4.5,
      valueForMoney: 4.5,
      easeOfInstallation: 4.8,
      batteryLife: 4.7,
    },
    relatedProducts: ['sun-king-pico-plus', 'sun-king-home-40-plus'],
    updatedAt: 'June 2026',
    basedOnSpecsAndFeedback: true,
  },
  {
    id: 'sun-king-home-40-plus',
    name: 'Home 40 Plus Solar Home System',
    brand: 'Sun King',
    category: 'solar-kits',
    image: 'https://ng.sunking.com/wp-content/uploads/2024/01/home-40-plus.png',
    rating: 4.4,
    price: 59040,
    priceNote: 'Prices may vary by retailer. Last verified June 2026.',
    verdict: 'Multi-room solar lighting kit with two bright tube lights, wall switches, and phone charging. Delivers 400 lumens total output with 30-hour runtime.',
    specs: {
      'Light Output': '400 lumens total (2 x 200 lumens)',
      'Tube Lights': '2 LED tube lights with wall switches',
      'Solar Panel': '5.5W',
      'Battery': '2550 mAh Li-ion NMC (7.4V)',
      'Runtime': 'Up to 30 hours (low power mode)',
      'Warranty': '2 years',
      'USB Output': 'Mobile phone charging',
      'Charging Time': '5 hours (full sun)',
      'Control': 'Individual wall switches for each light',
      'Brightness': '20x brighter than kerosene lamp per tube',
    },
    pros: [
      'Two separate tube lights for multi-room lighting',
      'Individual wall switches for each light',
      '400 lumens total output covers multiple spaces',
      'USB charging for mobile phones',
      '30-hour runtime on low power mode',
      'Easy installation with included mounting hardware',
      'Suitable for 1-2 bedroom apartments',
    ],
    cons: [
      'May be discontinued - check availability',
      'Li-ion NMC battery has shorter lifespan than LiFePO4',
      'Not suitable for powering appliances (TV, fans)',
      'Limited to lighting and phone charging only',
      'Smaller battery capacity than newer models',
    ],
    reviewBody: `The Sun King Home 40 Plus is a solar home lighting system designed for Nigerian households needing multi-room illumination. Based on manufacturer specifications, it includes two LED tube lights, each producing 200 lumens (400 lumens total), with individual wall switches for independent control.

The 5.5W solar panel charges a 2550 mAh Li-ion NMC battery rated at 7.4V. This battery chemistry is different from the LiFePO4 used in newer Sun King models - while still reliable, NMC batteries typically have shorter lifespans (3-4 years vs 5-10 years for LiFePO4).

Runtime reaches up to 30 hours on the lowest power setting, making it practical for overnight use during extended power outages. The system includes USB charging capability for mobile phones, though this will reduce available lighting runtime.

Individual wall switches allow users to control each tube light independently, enabling lighting in different rooms without wasting energy in unoccupied spaces. This is particularly useful for 1-2 bedroom apartments or small shops.

At approximately ₦59,000, the Home 40 Plus represents a mid-range investment for households needing more than single-point lighting. However, availability may be limited as Sun King has introduced newer models (HomePlus, HomePlus Max) with improved specifications.

Important note: This system is designed for lighting and phone charging only. It cannot power appliances like TVs, fans, or refrigerators. For appliance support, consider the Sun King PowerPlay Pro or traditional inverter systems.`,
    bestFor: [
      '1-2 bedroom apartments needing multi-room lighting',
      'Small shops requiring lighting in different areas',
      'Households replacing multiple kerosene lamps',
      'Users needing both lighting and phone charging',
      'Rural homes without grid electricity access',
    ],
    faqs: [
      {
        question: 'Can this system power a TV or fan?',
        answer: 'No, the Home 40 Plus is designed for LED lighting and phone charging only. It does not have AC output for appliances. For TV/fan support, consider the PowerPlay Pro or traditional inverter systems.',
      },
      {
        question: 'Is this product still available?',
        answer: 'Availability may be limited as Sun King has introduced newer models. Check with Sun King Nigeria (ng.sunking.com) or authorized retailers for current stock. Newer models like HomePlus Max offer improved specifications.',
      },
      {
        question: 'How long does the battery last before replacement?',
        answer: 'The Li-ion NMC battery is rated for approximately 3-4 years of typical daily use. After this period, capacity will gradually decline. Newer Sun King models use LiFePO4 batteries with 5-10 year lifespans.',
      },
    ],
    buyLinks: [
      { store: 'Sun King Nigeria (Official)', url: 'https://ng.sunking.com/', isAffiliate: false },
      { store: 'Konga', url: 'https://www.konga.com/product/sun-king-homplus-pro-solar-home-light-system-6729344', isAffiliate: false },
    ],
    manufacturerUrl: 'https://ng.sunking.com/',
    ratingBreakdown: {
      performance: 4.3,
      durability: 4.2,
      valueForMoney: 4.5,
      easeOfInstallation: 4.7,
      batteryLife: 4.0,
    },
    relatedProducts: ['sun-king-homeplus-max', 'sun-king-pro-400'],
    updatedAt: 'June 2026',
    basedOnSpecsAndFeedback: true,
  },
  {
    id: 'sun-king-homeplus-max',
    name: 'HomePlus Max Solar Home System',
    brand: 'Sun King',
    category: 'solar-kits',
    image: 'https://ng.sunking.com/wp-content/uploads/2024/01/homeplus-max.png',
    rating: 4.7,
    price: 185000,
    priceNote: 'Prices may vary by retailer. Last verified June 2026.',
    verdict: 'Powerful rooftop solar system with 4 bright tube lights, security lamp, and USB-C charging. Features 192Wh LFP battery with 10-year lifespan and 80W solar panel.',
    specs: {
      'Light Output': '2,500 lumens maximum',
      'Tube Lights': '4 x 600 lumens LED with wall switches',
      'Security Lamp': '100 lumens motion-sensing',
      'Solar Panel': '80W',
      'Battery': '192Wh LiFePO4 (3.2V)',
      'Battery Lifespan': '10 years (2,500+ cycles)',
      'Runtime': 'Up to 17 hours',
      'Warranty': '2 years',
      'USB Output': 'USB-A and USB-C (65W)',
      'Charging': 'Solar and USB-C grid charging',
      'TV Support': 'Compatible with select digital HD LED TVs',
    },
    pros: [
      '2,500 lumens total output illuminates entire homes',
      '4 tube lights with individual wall switches',
      'Motion-sensing security lamp included',
      '192Wh LiFePO4 battery with 10-year lifespan',
      '80W solar panel for fast charging',
      'USB-C 65W output charges laptops and phones',
      'Dual charging: solar and grid via USB-C',
      'Compatible with select HD LED TVs',
      'Suitable for 2-3 bedroom homes',
    ],
    cons: [
      'Higher upfront cost (₦185,000+)',
      'TV compatibility limited to specific models',
      'Cannot power high-wattage appliances (fridge, AC)',
      'Requires proper installation for optimal performance',
      'Security lamp requires separate mounting',
    ],
    reviewBody: `The Sun King HomePlus Max is Sun King's most powerful solar home system for Nigerian households, designed to replace generator dependency for lighting and basic entertainment. Based on manufacturer specifications, it delivers 2,500 lumens maximum brightness through four 600-lumen LED tube lights, each with individual wall switches.

The system includes a motion-sensing 100-lumen security lamp, providing automatic outdoor lighting for compounds and entrances. This is a significant advantage for security-conscious households.

The 192Wh LiFePO4 battery represents a major upgrade from older models. LiFePO4 chemistry offers 10-year lifespan with 2,500+ charge cycles, significantly outperforming the Li-ion NMC batteries in earlier Sun King products. This translates to lower long-term costs despite higher upfront investment.

The 80W solar panel provides substantial charging capacity, enabling full battery recharge even on partly cloudy Nigerian days. Dual charging capability (solar and USB-C grid charging) ensures reliability during extended rainy seasons.

USB-C 65W output is a standout feature, allowing charging of laptops and smartphones at high speed. This makes the system practical for remote workers and students who need both lighting and device charging.

At approximately ₦185,000, the HomePlus Max represents a significant investment but offers substantial value for 2-3 bedroom homes. It can power compatible digital HD LED TVs (check Sun King's compatibility list), providing entertainment during outages.

However, users should understand this system cannot power high-wattage appliances like refrigerators, air conditioners, or water heaters. For those needs, consider traditional inverter systems or the Sun King PowerPlay Pro.

The system is available through Sun King Nigeria's EasyBuy installment plan (approximately ₦4,500/week), making it accessible to households unable to pay upfront.`,
    bestFor: [
      '2-3 bedroom homes needing comprehensive lighting',
      'Households wanting TV entertainment during outages',
      'Remote workers needing laptop charging',
      'Homes requiring security lighting',
      'Users transitioning from generators to solar',
      'Families needing multi-room lighting solution',
    ],
    faqs: [
      {
        question: 'Which TVs are compatible with this system?',
        answer: 'The HomePlus Max supports select digital HD LED TVs (typically 24-32 inch, low-wattage models). Check Sun King Nigeria\'s compatibility list before purchase. It cannot power large TVs or high-wattage models.',
      },
      {
        question: 'Can this system power a refrigerator or fan?',
        answer: 'No, the HomePlus Max is designed for LED lighting, TV (compatible models), and device charging. It cannot power refrigerators, fans, or other high-wattage appliances. For those needs, consider traditional inverter systems.',
      },
      {
        question: 'How does the EasyBuy payment plan work?',
        answer: 'Sun King Nigeria offers installment payments of approximately ₦4,500/week. Contact Sun King Nigeria (carenigeria@sunking.com or +234 800 786 54 64) for current payment options and eligibility requirements.',
      },
    ],
    buyLinks: [
      { store: 'Sun King Nigeria (Official)', url: 'https://ng.sunking.com/product/homeplus-max-2/', isAffiliate: false },
      { store: 'Jiji Nigeria', url: 'https://jiji.ng/isolo/home-appliances/sunking-home-plus-max-stand-alone-q4qYaiM5XVaZzPG8UKQ4Kkeh.html', isAffiliate: false },
    ],
    manufacturerUrl: 'https://ng.sunking.com/',
    ratingBreakdown: {
      performance: 4.8,
      durability: 4.8,
      valueForMoney: 4.5,
      easeOfInstallation: 4.3,
      batteryLife: 5.0,
    },
    relatedProducts: ['sun-king-home-40-plus', 'sun-king-powerplay-pro'],
    updatedAt: 'June 2026',
    basedOnSpecsAndFeedback: true,
  },
  {
    id: 'sun-king-powerplay-pro',
    name: 'PowerPlay Pro Solar Inverter System',
    brand: 'Sun King',
    category: 'inverters',
    image: 'https://ng.sunking.com/wp-content/uploads/2024/01/powerplay-pro.png',
    rating: 4.5,
    price: 350000,
    priceNote: 'Prices may vary by retailer and payment plan. Last verified June 2026.',
    verdict: 'Complete AC solar and energy storage system for households and small businesses. 600W inverter with 800Wh LFP battery, 450W solar panel, and UPS functionality during blackouts.',
    specs: {
      'Inverter Capacity': '600W pure sine wave',
      'Battery': '800Wh LiFePO4',
      'Battery Lifespan': '10 years (2,500+ cycles)',
      'Solar Panel': '450W',
      'AC Output': '230V for standard appliances',
      'USB Output': 'USB-A and USB-C ports',
      'UPS Function': 'Uninterruptible power supply during blackouts',
      'Warranty': '2 years',
      'Dimensions': '440 x 230 x 455 mm',
      'Weight': '11.75 kg',
      'Appliance Support': 'TV, computers, fans, power tools',
    },
    pros: [
      '600W AC output powers standard appliances',
      '800Wh LiFePO4 battery with 10-year lifespan',
      '450W solar panel for substantial energy generation',
      'UPS functionality prevents device shutdown during outages',
      'Pure sine wave output safe for sensitive electronics',
      'USB-A and USB-C ports for device charging',
      'Suitable for small businesses and home offices',
      'Complete system with panel, battery, and inverter',
    ],
    cons: [
      'Higher upfront cost (₦350,000+)',
      '600W limits simultaneous appliance use',
      'Cannot power high-wattage appliances (AC, large fridge)',
      'Requires professional installation',
      'Heavy system requiring proper mounting',
    ],
    reviewBody: `The Sun King PowerPlay Pro is a complete AC solar inverter system designed for Nigerian households and small businesses needing to power standard appliances during power outages. Based on manufacturer specifications, it features a 600W pure sine wave inverter, 800Wh LiFePO4 battery, and 450W solar panel.

The 600W pure sine wave output is critical for Nigerian users because it safely powers sensitive electronics like TVs, computers, and routers without damage. Pure sine wave output matches grid electricity quality, unlike cheaper modified sine wave inverters.

The 800Wh LiFePO4 battery represents significant storage capacity. LiFePO4 chemistry offers 10-year lifespan with 2,500+ charge cycles, providing long-term reliability. This battery can power a 32" TV (60W) for approximately 13 hours, or a laptop (65W) for 12 hours, on a single charge.

The 450W solar panel provides substantial daily energy generation, typically 1.8-2.2 kWh in Nigerian conditions. This allows the system to recharge the battery daily while powering daytime loads.

UPS (Uninterruptible Power Supply) functionality is a standout feature. When grid power fails, the PowerPlay Pro switches to battery power within milliseconds, preventing computer shutdowns, TV interruptions, or router reboots. This is invaluable for remote workers and businesses.

At approximately ₦350,000, the PowerPlay Pro represents a significant investment but offers comprehensive backup power for small homes or businesses. It can simultaneously power a TV, computer, router, and several LED lights, though users must manage total load to stay within the 600W limit.

The system cannot power high-wattage appliances like refrigerators (150-400W running, 1000W+ startup), air conditioners, or water heaters. For those needs, users require larger inverter systems (2KVA+).

Sun King Nigeria offers EasyBuy installment plans (approximately ₦18,000/week for 80 weeks), making the system accessible to households unable to pay upfront. Professional installation is recommended for safety and optimal performance.`,
    bestFor: [
      'Home offices needing computer and router backup',
      'Small businesses powering POS, lights, and fans',
      'Households wanting TV and entertainment during outages',
      'Remote workers requiring uninterrupted power',
      'Small shops needing reliable backup power',
      'Users transitioning from generators to solar',
    ],
    faqs: [
      {
        question: 'Can this system power a refrigerator?',
        answer: 'No, the PowerPlay Pro\'s 600W output is insufficient for refrigerators. Refrigerators require 150-400W running power but 1000W+ startup surge. For refrigerator support, you need a 2KVA+ inverter system.',
      },
      {
        question: 'How long does the battery last during outages?',
        answer: 'The 800Wh battery can power a 32" TV (60W) for ~13 hours, a laptop (65W) for ~12 hours, or LED lights (40W total) for ~20 hours. Actual runtime depends on total load and battery age.',
      },
      {
        question: 'Do I need a separate charge controller?',
        answer: 'No, the PowerPlay Pro includes built-in charge control. The system manages solar panel charging automatically. Professional installation is recommended to ensure proper setup.',
      },
    ],
    buyLinks: [
      { store: 'Sun King Nigeria (Official)', url: 'https://ng.sunking.com/product/powerplay-pro/', isAffiliate: false },
      { store: 'Jumia Nigeria', url: 'https://www.jumia.com.ng/sun-king-powerplay-pro-800wh-lfp-battery-hybrid-solar-inverter-power-station-backup-power-for-tv-fridge-laptops-2-years-warranty-415674144.html', isAffiliate: false },
    ],
    manufacturerUrl: 'https://ng.sunking.com/',
    ratingBreakdown: {
      performance: 4.6,
      durability: 4.7,
      valueForMoney: 4.3,
      easeOfInstallation: 4.0,
      batteryLife: 4.8,
    },
    relatedProducts: ['sun-king-homeplus-max', 'felicity-solar-2kva'],
    updatedAt: 'June 2026',
    basedOnSpecsAndFeedback: true,
  },
];

export const categories = [
  {
    id: 'inverters',
    name: 'Solar Inverters',
    description: 'Pure sine wave and hybrid inverters for Nigerian homes',
    icon: 'inverters',
    productCount: 5,
  },
  {
    id: 'batteries',
    name: 'Solar Batteries',
    description: 'Tubular, AGM, and Lithium batteries for solar storage',
    icon: 'batteries',
    productCount: 2,
  },
  {
    id: 'panels',
    name: 'Solar Panels',
    description: 'Monocrystalline and polycrystalline panels for Nigerian rooftops',
    icon: 'panels',
    productCount: 1,
  },
  {
    id: 'solar-kits',
    name: 'Complete Solar Kits',
    description: 'All-in-one solar packages for homes and businesses',
    icon: 'solar-kits',
    productCount: 3,
  },
  {
    id: 'solar-lanterns',
    name: 'Solar Lanterns',
    description: 'Portable solar lanterns and emergency lighting',
    icon: 'solar-lanterns',
    productCount: 2,
  },
  {
    id: 'charge-controllers',
    name: 'Charge Controllers',
    description: 'MPPT and PWM charge controllers for solar systems',
    icon: 'charge-controllers',
    productCount: 1,
  },
];

export const brands = [
  { id: 'luminous', name: 'Luminous', description: 'Indian brand with strong Nigerian presence. Known for reliable inverters and established after-sales service network across major cities.', productCount: 1 },
  { id: 'felicity-solar', name: 'Felicity Solar', description: 'Chinese manufacturer popular in Nigeria for hybrid inverters and complete solar kits. Growing service presence in Lagos, Abuja, and Onitsha.', productCount: 2 },
  { id: 'exide', name: 'Exide', description: 'Global battery manufacturer with proven tubular batteries widely used in Nigerian solar installations.', productCount: 1 },
  { id: 'jinko-solar', name: 'Jinko Solar', description: 'Tier-1 Chinese panel manufacturer — one of the world\'s largest. High-efficiency mono PERC panels with 25-year warranty.', productCount: 1 },
  { id: 'rubitek', name: 'Rubitek', description: 'Newer brand offering competitive hybrid inverters with advanced features. Less established service network in Nigeria.', productCount: 1 },
  { id: 'blue-gate', name: 'Blue Gate', description: 'Budget brand offering affordable modified sine wave inverters for basic power needs. Entry-level only.', productCount: 1 },
  { id: 'epsolar', name: 'Epsolar', description: 'Specialist in charge controllers. Popular MPPT options widely available in Nigerian solar markets.', productCount: 1 },
  { id: 'pylontech', name: 'Pylontech', description: 'Premium lithium battery manufacturer. LiFePO4 batteries with 10-year warranty and 6000+ cycle life.', productCount: 1 },
  { id: 'sun-king', name: 'Sun King', description: 'Global leader in off-grid solar solutions with strong Nigerian presence. Offers solar lanterns, home systems, and inverter systems with EasyBuy installment plans.', productCount: 5 },
];

export const buyingGuides = [
  {
    id: 'choose-inverter-2bedroom',
    title: 'How to Choose an Inverter for a 2-Bedroom Apartment in Nigeria',
    excerpt: 'Complete guide to sizing your inverter, choosing the right battery, and estimating costs for a typical Nigerian 2-bedroom flat.',
    readTime: '8 min read',
    category: 'Inverters',
  },
  {
    id: 'solar-panel-sizing',
    title: 'Solar Panel Sizing Calculator for Nigerian Homes',
    excerpt: 'How many panels do you need? We break down the math for 1-bedroom to 4-bedroom homes across different Nigerian cities.',
    readTime: '6 min read',
    category: 'Panels',
  },
  {
    id: 'va-kva-watts-guide',
    title: 'Understanding VA, KVA, and Watts — A Simple Guide',
    excerpt: 'Confused by inverter ratings? We explain VA, KVA, watts, and power factor in plain English — with Nigerian examples.',
    readTime: '5 min read',
    category: 'General',
  },
  {
    id: 'lead-acid-vs-lithium',
    title: 'Lead-Acid vs Lithium Batteries: Which is Better for Nigeria?',
    excerpt: 'We compare total cost of ownership, lifespan, maintenance, and performance of both battery types based on published specifications.',
    readTime: '10 min read',
    category: 'Batteries',
  },
  {
    id: 'solar-cost-nigeria-2026',
    title: 'How Much Does a Solar System Cost in Nigeria in 2026?',
    excerpt: 'Updated pricing guide for solar installations — from basic 1KVA setups to full 5KVA+ systems. Includes installation costs.',
    readTime: '7 min read',
    category: 'General',
  },
];

export const blogPosts = [
  {
    id: 'solar-panel-price-increase-2026',
    title: 'Solar Panel Prices in Nigeria: June 2026 Update',
    excerpt: 'Prices have shifted due to forex changes. Here\'s what you should expect to pay for panels, batteries, and inverters this month.',
    date: 'June 15, 2026',
    category: 'Prices',
  },
  {
    id: 'cbn-forex-solar-impact',
    title: 'How CBN Forex Policy Changes Affect Solar Equipment Prices',
    excerpt: 'Recent CBN policy changes have impacted import costs. Here\'s our analysis of what this means for solar buyers.',
    date: 'June 8, 2026',
    category: 'News',
  },
  {
    id: 'felicity-new-5kva-launch',
    title: 'Felicity Solar Announces New 5KVA Hybrid Inverter for Nigeria',
    excerpt: 'Felicity has announced a new 5KVA model with improved specs. Here\'s what we know from the manufacturer\'s specifications.',
    date: 'May 28, 2026',
    category: 'Product Launch',
  },
  {
    id: 'harmattan-solar-tips',
    title: 'Solar System Maintenance Tips for Harmattan Season',
    excerpt: 'Dust during harmattan can reduce your solar output. Here are practical tips from Nigerian solar installers to keep your system efficient.',
    date: 'May 20, 2026',
    category: 'Tips',
  },
];
