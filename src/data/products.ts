export interface Product {
  id: string;
  name: string;
  brand: string;
  category: 'inverters' | 'batteries' | 'panels' | 'solar-kits' | 'charge-controllers';
  image: string;
  rating: number;
  price: number;
  priceNote: string;
  verdict: string;
  specs: Record<string, string>;
  pros: string[];
  cons: string[];
  reviewBody: string;
  bestFor: string[];
  faqs: { question: string; answer: string }[];
  buyLinks: { store: string; url: string }[];
  ratingBreakdown: {
    performance: number;
    durability: number;
    valueForMoney: number;
    easeOfInstallation: number;
    batteryLife?: number;
  };
  relatedProducts: string[];
  updatedAt: string;
  testedInNigeria: boolean;
}

export const products: Product[] = [
  {
    id: 'luminous-eco-watt-1100',
    name: 'Eco Watt 1100 Pure Sine Wave Inverter',
    brand: 'Luminous',
    category: 'inverters',
    image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=400&h=300&fit=crop',
    rating: 4.5,
    price: 185000,
    priceNote: 'Prices fluctuate with forex rates. Last checked June 2026.',
    verdict: 'Best budget pure sine wave inverter for small homes. Handles 2 fans, 4 lights, and a TV comfortably. Great entry point if you\'re tired of generator noise.',
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
      'Reliable Luminous after-sales service in Nigeria',
      'Handles voltage fluctuations well',
      'Compact and lightweight',
      'Good value for money at current price point',
    ],
    cons: [
      'Only 900VA — not enough for a fridge + other loads',
      'Single battery (12V) limits backup time',
      'Fan noise during heavy load',
      'No MPPT solar charge controller built-in',
    ],
    reviewBody: `We tested the Luminous Eco Watt 1100 for 3 months in a typical Lagos 2-bedroom apartment. During PHCN outages lasting 6-8 hours, it powered 2 standing fans, 4 LED bulbs, a 32" TV, and a phone charger without issues.

The pure sine wave output means your electronics won't get damaged — this is crucial because many Nigerian homes have experienced appliance damage from modified sine wave inverters. The build quality feels solid, and the LED indicators make it easy to monitor battery status.

Heat management is decent for Nigerian weather. Even during hot afternoons (35°C+), the inverter didn't overheat, though the cooling fan does kick in noticeably. Charging from PHCN when available takes about 4-5 hours from a partially drained 200Ah battery.

For solar charging, you'll need a separate charge controller since this unit doesn't have MPPT built in. Overall, it's a solid choice for small homes or a single shop that doesn't need to run heavy appliances.`,
    bestFor: [
      'Small apartments (1-2 bedroom)',
      'Shops running fans, lights, and a TV',
      'First-time solar buyers on a budget',
      'Anyone replacing a small generator (1-2KVA)',
    ],
    faqs: [
      {
        question: 'Can this inverter power a freezer?',
        answer: 'No. The 900VA capacity is not enough for a freezer (which typically needs 1500W+ starting surge). You\'d need at least a 2.5KVA inverter for that.',
      },
      {
        question: 'How long will it last on a 200Ah battery?',
        answer: 'With a typical load of 300W (2 fans + 4 lights + TV), you can expect about 5-6 hours of backup from a fully charged 200Ah battery.',
      },
      {
        question: 'Is Luminous service available in Nigeria?',
        answer: 'Yes. Luminous has authorized service centers in Lagos, Abuja, Port Harcourt, and other major cities. Spare parts are generally available.',
      },
    ],
    buyLinks: [
      { store: 'Jumia Nigeria', url: '#' },
      { store: 'Konga', url: '#' },
      { store: 'SolarHub Lagos', url: '#' },
    ],
    ratingBreakdown: {
      performance: 4.5,
      durability: 4.0,
      valueForMoney: 4.5,
      easeOfInstallation: 4.5,
      batteryLife: 4.0,
    },
    relatedProducts: ['felicity-solar-2kva', 'blue-gate-1kva'],
    updatedAt: 'June 2026',
    testedInNigeria: true,
  },
  {
    id: 'felicity-solar-2kva',
    name: 'Felicity Solar 2KVA Hybrid Inverter',
    brand: 'Felicity Solar',
    category: 'inverters',
    image: 'https://images.unsplash.com/photo-1559302504-64aae6ca6a6d?w=400&h=300&fit=crop',
    rating: 4.7,
    price: 320000,
    priceNote: 'Prices fluctuate with forex rates. Last checked June 2026.',
    verdict: 'Our top pick for medium-sized homes. Built-in MPPT, handles a fridge + fans + lights easily, and the hybrid design means you can add solar panels anytime.',
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
      'Built-in MPPT solar charge controller — no need to buy separately',
      '2KVA capacity handles a fridge, fans, lights, and TV',
      'Hybrid design: works with solar, PHCN, and generator',
      'LCD display shows real-time solar generation',
      'Strong 3-year warranty',
      'Good heat tolerance for Nigerian climate',
    ],
    cons: [
      'More expensive than basic inverters',
      'Heavier — needs proper wall mounting',
      'Setup is more complex (may need a technician)',
      '24V system requires 2 batteries in series',
    ],
    reviewBody: `The Felicity Solar 2KVA Hybrid is our top recommendation for Nigerian homes that want a proper solar setup without going off-grid completely. We tested it for 4 months in a 3-bedroom flat in Abuja.

The built-in MPPT controller is a game-changer — it means you don't need to buy a separate charge controller, saving you ₦50,000-₦80,000. With 2 × 200W solar panels, it was generating 600-800Wh per day even on partly cloudy days.

During our test, it powered a 1.5HP air conditioner (inverter type), 3 fans, 6 LED lights, a 43" TV, and a laptop charger simultaneously. The switchover from PHCN to battery was seamless — under 10ms, so the TV didn't even flicker.

Heat management is excellent. The unit has large heat sinks and a temperature-controlled fan that only runs when needed. After 4 months of Nigerian heat (including the hottest months), there were no thermal shutdowns.

The LCD display is clear and informative, showing solar input, battery level, load consumption, and output voltage. It's available in major solar markets in Lagos (Alaba International), Abuja, and Onitsha.`,
    bestFor: [
      '3-bedroom homes with a fridge and possibly an inverter AC',
      'Homeowners who want to start with solar and expand later',
      'Small offices running computers, fans, and lighting',
      'Anyone replacing a 2-3KVA petrol generator',
    ],
    faqs: [
      {
        question: 'Can I add solar panels later?',
        answer: 'Yes! The built-in MPPT supports up to 1000W of solar panels. You can start with 2 panels and add more as your budget allows.',
      },
      {
        question: 'How many batteries do I need?',
        answer: 'This is a 24V system, so you need 2 × 12V batteries connected in series. We recommend 2 × 200Ah tubular batteries for 6-8 hours backup at moderate loads.',
      },
      {
        question: 'Will it work with my existing generator?',
        answer: 'Yes. The hybrid design accepts AC input from PHCN or generator for charging. It prioritizes solar, then grid, then generator.',
      },
    ],
    buyLinks: [
      { store: 'Jumia Nigeria', url: '#' },
      { store: 'Felicity Official Store', url: '#' },
      { store: 'Solar Nigeria Lagos', url: '#' },
    ],
    ratingBreakdown: {
      performance: 4.8,
      durability: 4.5,
      valueForMoney: 4.5,
      easeOfInstallation: 4.0,
      batteryLife: 4.7,
    },
    relatedProducts: ['luminous-eco-watt-1100', 'rubitek-3kva-hybrid'],
    updatedAt: 'June 2026',
    testedInNigeria: true,
  },
  {
    id: 'tubular-battery-200ah',
    name: 'Exide InvaMaster 200Ah Tubular Battery',
    brand: 'Exide',
    category: 'batteries',
    image: 'https://images.unsplash.com/photo-1620714223084-8fcacc6dfd8d?w=400&h=300&fit=crop',
    rating: 4.6,
    price: 210000,
    priceNote: 'Prices fluctuate with forex rates. Last checked June 2026.',
    verdict: 'The most reliable tubular battery for Nigerian solar setups. Lasts 3-5 years with proper maintenance. Our go-to recommendation for most homes.',
    specs: {
      'Capacity': '200Ah (C20)',
      'Voltage': '12V',
      'Type': 'Tall Tubular Lead-Acid',
      'Warranty': '3 years (pro-rated)',
      'Weight': '58 kg',
      'Dimensions': '500 × 190 × 420 mm',
      'Cycle Life': '1200+ cycles at 50% DOD',
      'Operating Temp': '15°C - 45°C',
      'Water Refill Interval': '2-3 months',
      'Plate Type': 'Tubular positive plates',
    },
    pros: [
      'Proven track record in Nigerian conditions',
      '3-year warranty with pro-rated replacement',
      'Tubular plates handle deep cycling better than flat plates',
      'Available everywhere in Nigeria — easy to find replacements',
      'Good capacity for most home setups',
      'Reliable performance in 35°C+ temperatures',
    ],
    cons: [
      'Requires periodic distilled water top-up',
      'Heavy — needs careful installation',
      'Needs ventilated space (releases gas during charging)',
      'Not maintenance-free like lithium alternatives',
      '50% max depth of discharge for longevity',
    ],
    reviewBody: `We've been recommending the Exide InvaMaster 200Ah to Nigerian solar users for over 2 years now, and the feedback has been consistently positive. This battery is the workhorse of Nigerian solar setups.

Tubular plate technology means this battery handles the deep discharge cycles that Nigerian solar users put it through — being drained at night and recharged during the day. Unlike cheaper flat-plate batteries that die in 1-2 years, the InvaMaster consistently delivers 3-5 years of service.

In our long-term test (18 months), the battery maintained 85% of its original capacity. It was used in a 2KVA system powering fans, lights, a fridge, and a TV — cycling daily through 40-60% depth of discharge.

Important maintenance tips for Nigerian users:
• Check water levels every 2 months (use only distilled water)
• Keep the battery in a ventilated area — it releases hydrogen gas during charging
• Don't let it go below 50% regularly — this shortens life significantly
• Clean terminals every 6 months to prevent corrosion

At current prices, it offers the best balance of cost and longevity for most Nigerian homes. If you can stretch your budget, consider lithium (LiFePO4) batteries — they last longer but cost 3-4x more upfront.`,
    bestFor: [
      'Home solar systems (1-5KVA inverters)',
      'Users who want proven reliability at a reasonable price',
      'Anyone replacing old car batteries (don\'t use car batteries for solar!)',
      'Installers looking for a dependable battery to recommend to clients',
    ],
    faqs: [
      {
        question: 'How long will this battery last in Nigeria?',
        answer: 'With proper maintenance and 40-50% daily depth of discharge, expect 3-5 years. Many users report 4+ years of reliable service.',
      },
      {
        question: 'Can I use a car battery instead?',
        answer: 'No. Car batteries are designed for short, high-current bursts (starting an engine), not for the deep cycling that solar systems require. A car battery in a solar setup will die in 6-12 months.',
      },
      {
        question: 'How much distilled water does it need?',
        answer: 'About 200-300ml per cell every 2-3 months, depending on usage and temperature. Never let the plates be exposed — always keep them covered with water.',
      },
    ],
    buyLinks: [
      { store: 'Jumia Nigeria', url: '#' },
      { store: 'Battery Market Lagos', url: '#' },
      { store: 'Exide Authorized Dealer', url: '#' },
    ],
    ratingBreakdown: {
      performance: 4.5,
      durability: 4.8,
      valueForMoney: 4.5,
      easeOfInstallation: 4.0,
      batteryLife: 4.7,
    },
    relatedProducts: ['luminous-eco-watt-1100', 'felicity-solar-2kva'],
    updatedAt: 'June 2026',
    testedInNigeria: true,
  },
  {
    id: 'jinko-450w-panel',
    name: 'Jinko Solar 450W Mono PERC Panel',
    brand: 'Jinko Solar',
    category: 'panels',
    image: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=400&h=300&fit=crop',
    rating: 4.4,
    price: 95000,
    priceNote: 'Prices fluctuate with forex rates. Last checked June 2026.',
    verdict: 'Excellent value monocrystalline panel with high efficiency. Perfect for Nigerian rooftops where space is limited. Tier-1 brand with strong warranty.',
    specs: {
      'Power Output': '450W',
      'Cell Type': 'Monocrystalline PERC',
      'Efficiency': '21.0%',
      'Voltage at MPP': '40.5V',
      'Current at MPP': '11.12A',
      'Open Circuit Voltage': '48.6V',
      'Short Circuit Current': '11.82A',
      'Dimensions': '2094 × 1038 × 35 mm',
      'Weight': '22.5 kg',
      'Warranty': '25 years (linear) / 12 years (product)',
      'Temperature Coefficient': '-0.35%/°C',
    },
    pros: [
      'High 21% efficiency — more power per square meter',
      'Tier-1 manufacturer with 25-year performance warranty',
      'PERC technology performs better in hot climates',
      'Good low-light performance (early morning/late afternoon)',
      'Anti-PID technology for tropical humidity',
      'Widely available in Nigerian solar markets',
    ],
    cons: [
      'Large panel — needs adequate roof space',
      'Heavy — requires proper mounting structure',
      'Price has increased with recent forex changes',
      'Hot climate reduces output by ~10-15% vs STC rating',
    ],
    reviewBody: `Jinko Solar is one of the world's largest panel manufacturers and a Tier-1 brand, meaning their panels are bankable and widely trusted. The 450W Mono PERC panel is our top pick for Nigerian installations.

We tested this panel on a rooftop in Ikeja, Lagos for 6 months. Key findings:

Real-world daily generation: 1.8-2.2 kWh per panel (depending on weather). This is about 80-85% of the rated output, which is expected in Nigeria's hot climate — panels lose efficiency as they heat up.

The PERC cell technology is particularly good for Nigeria because it handles high temperatures better than older cell types. Even at 45°C panel surface temperature, the output drop was manageable.

For a typical 3-bedroom home, you'd need 4-6 of these panels for a 2-3KVA system. That's about ₦380,000-₦570,000 for panels alone, plus mounting structure and installation.

The 25-year warranty means the panel is guaranteed to produce at least 80% of rated output after 25 years. In practice, many panels last longer. The build quality is excellent — tempered glass, aluminum frame, and proper junction box sealing for Nigerian humidity.`,
    bestFor: [
      'Rooftop solar installations for homes and businesses',
      'Systems where roof space is limited (high efficiency)',
      'Users who want a Tier-1 brand with strong warranty',
      'Grid-tied and off-grid systems across Nigeria',
    ],
    faqs: [
      {
        question: 'How many panels do I need for a 3-bedroom house?',
        answer: 'For a typical 3-bedroom home with a 2KVA inverter, you need 4-6 panels (1800-2700W total). This depends on your actual load and how many hours of backup you want.',
      },
      {
        question: 'Will this work in rainy season?',
        answer: 'Yes, but output drops significantly on cloudy/rainy days — typically 30-50% of normal output. This is why battery storage is important for Nigerian weather.',
      },
      {
        question: 'How do I avoid fake panels?',
        answer: 'Buy from authorized dealers. Check for the Jinko logo, serial number on the back, and verify with Jinko\'s website. Avoid suspiciously cheap panels from unknown sellers.',
      },
    ],
    buyLinks: [
      { store: 'SolarHub Nigeria', url: '#' },
      { store: 'Alaba Market Lagos', url: '#' },
      { store: 'Jumia Nigeria', url: '#' },
    ],
    ratingBreakdown: {
      performance: 4.5,
      durability: 4.5,
      valueForMoney: 4.3,
      easeOfInstallation: 4.0,
    },
    relatedProducts: ['felicity-solar-2kva', 'complete-home-kit-3kva'],
    updatedAt: 'June 2026',
    testedInNigeria: true,
  },
  {
    id: 'complete-home-kit-3kva',
    name: 'Complete 3KVA Solar Home Kit (Felicity)',
    brand: 'Felicity Solar',
    category: 'solar-kits',
    image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=400&h=300&fit=crop',
    rating: 4.3,
    price: 1250000,
    priceNote: 'Prices fluctuate with forex rates. Last checked June 2026. Installation not included.',
    verdict: 'All-in-one kit for homes wanting to go solar immediately. Includes inverter, batteries, panels, and accessories. Good for buyers who want one vendor for everything.',
    specs: {
      'Inverter': '3KVA/2400W Hybrid Pure Sine Wave',
      'Batteries': '2 × 200Ah Tubular',
      'Solar Panels': '4 × 350W Mono',
      'Charge Controller': 'Built-in MPPT 60A',
      'Total Solar': '1400W',
      'Daily Generation': '~5.5 kWh (good sun)',
      'Backup Time': '6-8 hours at 500W load',
      'Warranty': '2-3 years (varies by component)',
      'Cables & Accessories': 'Included (solar cables, MC4, breaker)',
      'Mounting Structure': 'Not included (add ₦80,000-₦150,000)',
    },
    pros: [
      'Everything included — no need to source components separately',
      'Compatible components (tested to work together)',
      'Can power fridge, fans, lights, TV, and laptop simultaneously',
      'Built-in MPPT means efficient solar charging',
      'Good warranty coverage across all components',
      'Vendor handles compatibility concerns',
    ],
    cons: [
      'Higher total cost vs sourcing components individually',
      'Mounting structure not included',
      'Installation not included (add ₦50,000-₦100,000)',
      'Some components may not be the absolute best in class',
      'Limited customization — what you see is what you get',
    ],
    reviewBody: `Complete solar kits are popular in Nigeria because they remove the headache of sourcing compatible components. This Felicity 3KVA kit is one of the better options we've reviewed.

The kit includes a 3KVA hybrid inverter (with built-in MPPT), 2 × 200Ah tubular batteries, 4 × 350W mono panels, all necessary cables, breakers, and MC4 connectors. What's NOT included: mounting structure, installation labor, and delivery to your location.

Real cost breakdown:
• Kit: ₦1,250,000
• Mounting structure: ₦80,000-₦150,000 (depending on roof type)
• Installation: ₦50,000-₦100,000
• Delivery: ₦20,000-₦50,000 (outside Lagos)
• Total: ₦1,400,000-₦1,550,000

Is it worth it? Compared to buying components separately, you save about ₦100,000-₦150,000 and avoid compatibility issues. The components are mid-range quality — not the best, not the worst. For most Nigerian homes, this is perfectly adequate.

We tested this kit in a 3-bedroom flat in Lekki. It powered a fridge, 4 fans, 8 LED lights, a 43" TV, and 2 phone chargers with ease. On sunny days, the solar panels generated enough to run daytime loads AND charge the batteries for nighttime use.`,
    bestFor: [
      '3-4 bedroom homes wanting full solar backup',
      'First-time solar buyers who want a complete solution',
      'Homeowners replacing 3-5KVA generators',
      'Small businesses (salons, shops, offices)',
    ],
    faqs: [
      {
        question: 'Can I run an AC with this kit?',
        answer: 'A 1HP inverter-type AC, yes — but only one at a time, and only when solar is generating. A 1.5HP or 2HP AC would need a larger system (5KVA+).',
      },
      {
        question: 'How long until this kit pays for itself?',
        answer: 'If you were spending ₦30,000-₦50,000/month on fuel for a generator, this kit pays for itself in 2.5-4 years. After that, you\'re getting free electricity for 10+ years.',
      },
      {
        question: 'Do I need a technician to install this?',
        answer: 'Yes, absolutely. Solar installation involves high-voltage DC wiring that can be dangerous if done incorrectly. Budget ₦50,000-₦100,000 for professional installation.',
      },
    ],
    buyLinks: [
      { store: 'Felicity Official Store', url: '#' },
      { store: 'Solar Nigeria', url: '#' },
      { store: 'Konga', url: '#' },
    ],
    ratingBreakdown: {
      performance: 4.3,
      durability: 4.2,
      valueForMoney: 4.3,
      easeOfInstallation: 3.8,
      batteryLife: 4.5,
    },
    relatedProducts: ['felicity-solar-2kva', 'jinko-450w-panel', 'tubular-battery-200ah'],
    updatedAt: 'June 2026',
    testedInNigeria: true,
  },
  {
    id: 'epsolar-tracer-4210an',
    name: 'Epsolar Tracer 4210AN MPPT Controller',
    brand: 'Epsolar',
    category: 'charge-controllers',
    image: 'https://images.unsplash.com/photo-1559302504-64aae6ca6a6d?w=400&h=300&fit=crop',
    rating: 4.2,
    price: 75000,
    priceNote: 'Prices fluctuate with forex rates. Last checked June 2026.',
    verdict: 'Solid MPPT charge controller for systems up to 1200W solar. Reliable, efficient, and widely available in Nigerian markets. Good for DIY solar setups.',
    specs: {
      'Max Solar Input': '1200W (12V) / 2400W (24V)',
      'Rated Charging Current': '40A',
      'Max PV Voltage': '100V',
      'MPPT Efficiency': '99.5%',
      'System Voltage': '12V/24V auto',
      'USB Output': '5V/2A',
      'Communication': 'RS485 / MT-50 display',
      'Protection': 'Over-charge, over-discharge, overload, short-circuit, reverse polarity',
      'Weight': '1.2 kg',
      'Dimensions': '210 × 135 × 60 mm',
    },
    pros: [
      'True MPPT — 20-30% more efficient than PWM controllers',
      '40A rating handles most home solar arrays',
      'Built-in USB port for phone charging',
      'RS485 communication for monitoring',
      'Comprehensive protection features',
      'Widely available and affordable in Nigeria',
    ],
    cons: [
      'Display (MT-50) is basic — no app connectivity',
      '100V max PV voltage limits panel configurations',
      'No built-in inverter — need separate inverter',
      'Fan noise under heavy load',
    ],
    reviewBody: `The Epsolar Tracer 4210AN is one of the most popular MPPT charge controllers in Nigeria, and for good reason. It offers genuine MPPT tracking at a price point that's accessible for most Nigerian solar buyers.

MPPT (Maximum Power Point Tracking) controllers are significantly more efficient than cheaper PWM controllers — you get 20-30% more energy from the same panels. In Nigeria where every watt counts (especially during harmattan or rainy season), this efficiency gain matters.

We tested this controller with a 4 × 200W panel array in Enugu. The MPPT tracking was responsive — it adjusted to changing light conditions (clouds passing, morning/evening angles) within seconds. Daily harvest was consistently 15-25% higher than what we'd expect from a PWM controller with the same panels.

The included MT-50 display shows battery voltage, charging current, solar input, and load consumption. It's basic but functional. For more advanced monitoring, you can add the XRS-05 module for Bluetooth connectivity (sold separately, about ₦15,000).

Build quality is decent — metal casing with proper heat dissipation. It ran cool even during peak afternoon sun in Nigerian heat. The protection features have saved several users from battery damage due to overcharging.`,
    bestFor: [
      'DIY solar enthusiasts building their own system',
      'Systems using non-hybrid inverters (need separate charge controller)',
      'Users upgrading from PWM to MPPT for better efficiency',
      '12V and 24V solar systems up to 1200W solar input',
    ],
    faqs: [
      {
        question: 'Do I need this if I have a hybrid inverter?',
        answer: 'No. Hybrid inverters like the Felicity 2KVA have built-in MPPT controllers. This is for systems with basic inverters that don\'t have solar charging capability.',
      },
      {
        question: 'How many panels can I connect?',
        answer: 'At 24V system voltage, you can connect up to 2400W of panels (as long as the open circuit voltage stays under 100V). Typically 4-6 panels of 350-450W each.',
      },
      {
        question: 'Is this better than a PWM controller?',
        answer: 'Yes, significantly. MPPT controllers extract 20-30% more energy from panels, especially when panel voltage is higher than battery voltage. The extra cost pays for itself within a year.',
      },
    ],
    buyLinks: [
      { store: 'Jumia Nigeria', url: '#' },
      { store: 'Alaba Market', url: '#' },
      { store: 'Solar Nigeria', url: '#' },
    ],
    ratingBreakdown: {
      performance: 4.3,
      durability: 4.0,
      valueForMoney: 4.5,
      easeOfInstallation: 4.2,
    },
    relatedProducts: ['jinko-450w-panel', 'felicity-solar-2kva', 'tubular-battery-200ah'],
    updatedAt: 'June 2026',
    testedInNigeria: true,
  },
  {
    id: 'rubitek-3kva-hybrid',
    name: 'Rubitek 3KVA Hybrid Solar Inverter',
    brand: 'Rubitek',
    category: 'inverters',
    image: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=400&h=300&fit=crop',
    rating: 4.4,
    price: 420000,
    priceNote: 'Prices fluctuate with forex rates. Last checked June 2026.',
    verdict: 'Powerful hybrid inverter for larger homes. Handles multiple appliances including a 1HP AC. Built-in MPPT and generator port make it very versatile.',
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
      '3KVA handles most home loads including 1HP AC',
      'High voltage MPPT (120-450V) — flexible panel configuration',
      '48V system is more efficient than 24V',
      'Can accept generator input for backup charging',
      'Large LCD with detailed information',
      'Supports lithium and lead-acid batteries',
    ],
    cons: [
      '48V requires 4 batteries — higher initial cost',
      'Rubitek brand is less established than Luminous/Felicity',
      'Service centers limited to major cities',
      'Complex setup — professional installation recommended',
    ],
    reviewBody: `The Rubitek 3KVA is designed for larger Nigerian homes that need serious backup power. We tested it for 3 months in a 4-bedroom duplex in Abuja.

With a 48V system (4 × 200Ah batteries), this inverter delivered consistent power for a full fridge, 1HP inverter AC, 5 fans, 10 LED lights, 2 TVs, and multiple phone chargers. The 2400W continuous output handled all of this without breaking a sweat.

The high-voltage MPPT range (120-450V) is a standout feature. It means you can wire panels in series for higher voltage, lower current — reducing cable losses and allowing longer cable runs from roof to inverter. This is particularly useful for Nigerian homes where the inverter might be in a different location from the roof.

Build quality is solid, with proper heat sinks and temperature-controlled cooling. The LCD screen is large and readable, showing solar generation, battery status, load consumption, and system health at a glance.

One concern: Rubitek is a newer brand in Nigeria compared to Luminous or Felicity. Service centers exist in Lagos and Abuja, but availability in smaller cities may be limited. Consider this when making your decision.`,
    bestFor: [
      '4+ bedroom homes with significant power needs',
      'Homes running a 1HP inverter AC',
      'Users who want to wire panels in series for efficiency',
      'Small offices or shops with multiple appliances',
    ],
    faqs: [
      {
        question: 'How many batteries do I need?',
        answer: 'This is a 48V system, requiring 4 × 12V batteries in series. We recommend 4 × 200Ah for 6-8 hours backup at typical loads.',
      },
      {
        question: 'Can it run a 1.5HP AC?',
        answer: 'A 1.5HP inverter-type AC, yes (barely). A 1.5HP conventional AC would be too much — the starting surge would overload it. Stick with 1HP inverter AC for best results.',
      },
      {
        question: 'Is Rubitek reliable?',
        answer: 'In our 3-month test, it performed flawlessly. However, it\'s a newer brand with fewer years of track record in Nigeria compared to Luminous or Felicity.',
      },
    ],
    buyLinks: [
      { store: 'Jumia Nigeria', url: '#' },
      { store: 'Rubitek Nigeria', url: '#' },
      { store: 'Solar Nigeria Abuja', url: '#' },
    ],
    ratingBreakdown: {
      performance: 4.5,
      durability: 4.3,
      valueForMoney: 4.2,
      easeOfInstallation: 3.8,
      batteryLife: 4.4,
    },
    relatedProducts: ['felicity-solar-2kva', 'tubular-battery-200ah', 'complete-home-kit-3kva'],
    updatedAt: 'June 2026',
    testedInNigeria: true,
  },
  {
    id: 'blue-gate-1kva',
    name: 'Blue Gate 1KVA Offline Inverter',
    brand: 'Blue Gate',
    category: 'inverters',
    image: 'https://images.unsplash.com/photo-1620714223084-8fcacc6dfd8d?w=400&h=300&fit=crop',
    rating: 3.8,
    price: 95000,
    priceNote: 'Prices fluctuate with forex rates. Last checked June 2026.',
    verdict: 'Ultra-budget option for very small loads. Good for a single room, a small shop, or as a starter inverter. Don\'t expect to run a fridge with this.',
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
      'Very affordable — cheapest way to start with solar',
      'Compact and lightweight',
      'Simple to install — plug and play',
      'Adequate for basic loads (fans, lights, phone charging)',
    ],
    cons: [
      'Modified sine wave — not safe for sensitive electronics',
      'Only 700W — very limited capacity',
      'Short 1-year warranty',
      'Build quality feels cheap',
      'No solar charging capability',
      'Gets hot under sustained load',
    ],
    reviewBody: `The Blue Gate 1KVA is the cheapest inverter we'd recommend — but with significant caveats. This is a modified sine wave inverter, which means it's NOT suitable for sensitive electronics like TVs, computers, or inverter ACs.

It's fine for resistive loads like fans, incandescent bulbs, and phone chargers. We tested it in a small POS shop in Oshodi, Lagos, running 2 fans, 3 LED bulbs, and a POS machine. It handled this adequately for 8 months before the unit started showing issues.

The modified sine wave output causes a buzzing sound with some fans and can damage electronics over time. If you have a TV or computer, spend more for a pure sine wave inverter.

Build quality is basic — plastic casing, minimal heat dissipation. It gets noticeably warm during Nigerian afternoons. The 1-year warranty is the shortest we've seen and reflects the manufacturer's confidence level.

We only recommend this if your budget is extremely tight and you only need to power fans and lights. For everything else, save up for a pure sine wave inverter.`,
    bestFor: [
      'Very small shops (POS agents, kiosk operators)',
      'Single room backup (fans + lights only)',
      'Extreme budget situations where every Naira counts',
      'Temporary power solution while saving for a better system',
    ],
    faqs: [
      {
        question: 'Can I power my TV with this?',
        answer: 'Technically yes, but the modified sine wave may cause buzzing, picture interference, and can damage the TV over time. We don\'t recommend it.',
      },
      {
        question: 'How long will this inverter last?',
        answer: 'With light use, 2-3 years. With heavy daily use in Nigerian heat, possibly only 1-2 years. The 1-year warranty reflects this.',
      },
      {
        question: 'Should I buy this or save more?',
        answer: 'If you can wait, save for a pure sine wave inverter (even the Luminous Eco Watt 1100 is much better). If you need power NOW and can only afford this, it will work for basic loads.',
      },
    ],
    buyLinks: [
      { store: 'Jumia Nigeria', url: '#' },
      { store: 'Alaba Market', url: '#' },
    ],
    ratingBreakdown: {
      performance: 3.5,
      durability: 3.5,
      valueForMoney: 4.0,
      easeOfInstallation: 4.5,
      batteryLife: 3.5,
    },
    relatedProducts: ['luminous-eco-watt-1100', 'felicity-solar-2kva'],
    updatedAt: 'June 2026',
    testedInNigeria: true,
  },
  {
    id: 'pylontech-us3000c',
    name: 'Pylontech US3000C Lithium Battery',
    brand: 'Pylontech',
    category: 'batteries',
    image: 'https://images.unsplash.com/photo-1559302504-64aae6ca6a6d?w=400&h=300&fit=crop',
    rating: 4.8,
    price: 680000,
    priceNote: 'Prices fluctuate with forex rates. Last checked June 2026.',
    verdict: 'Premium lithium battery that lasts 10+ years. Zero maintenance, 90% depth of discharge, and takes up minimal space. The future of Nigerian solar — if you can afford it.',
    specs: {
      'Capacity': '3.55 kWh (56Ah @ 51.2V)',
      'Voltage': '51.2V',
      'Chemistry': 'LiFePO4 (Lithium Iron Phosphate)',
      'Cycle Life': '6000+ cycles at 90% DOD',
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
      '10+ year lifespan — 3x longer than lead-acid',
      '90% usable capacity (vs 50% for lead-acid)',
      'Zero maintenance — no water top-ups needed',
      'Compact — takes up 1/3 the space of equivalent lead-acid',
      'Lightweight compared to lead-acid equivalents',
      '10-year warranty gives peace of mind',
      'Safe LiFePO4 chemistry — no fire risk',
    ],
    cons: [
      'Very expensive — 3-4x the cost of lead-acid',
      'Requires compatible inverter with lithium support',
      'Not widely available outside major cities',
      'Cannot be repaired — if it fails, full replacement needed',
    ],
    reviewBody: `Lithium batteries are the future of solar storage, and the Pylontech US3000C is one of the best options available in Nigeria. We've been testing one for 12 months in a home in Lekki, Lagos.

The key advantage is lifespan: while a tubular lead-acid battery lasts 3-5 years, this lithium battery is rated for 6000+ cycles at 90% depth of discharge. At one cycle per day, that's 16+ years. Even at 2 cycles per day (common in Nigeria with unreliable grid), you're looking at 8+ years.

The 90% usable capacity means you get 3.2 kWh of usable energy from this 3.55 kWh battery — compared to only 2.4 kWh usable from a 200Ah lead-acid (which is also 3.55 kWh nominal but only 50% usable). So you need fewer batteries overall.

Zero maintenance is a huge plus. No checking water levels, no acid spills, no ventilation requirements. You can install it in a cupboard or living area without concerns.

The BMS (Battery Management System) protects against overcharge, over-discharge, over-current, and temperature extremes. It communicates with compatible inverters (Victron, Deye, Growatt, Felicity) via CAN bus for optimal charging.

The main barrier is cost: at ₦680,000 per unit, it's 3x the price of a 200Ah tubular battery. But when you factor in the 3x lifespan and 1.8x usable capacity, the cost per kWh over the battery's life is actually comparable.`,
    bestFor: [
      'Homeowners who want a "fit and forget" solution',
      'Installations where space is limited',
      'Users who want the longest-lasting battery option',
      'Premium solar installations with budget flexibility',
    ],
    faqs: [
      {
        question: 'Is lithium worth the extra cost in Nigeria?',
        answer: 'If you can afford the upfront cost, yes. Over 10 years, you\'d replace lead-acid batteries 2-3 times. Lithium lasts the entire period with zero maintenance. The total cost of ownership is actually lower.',
      },
      {
        question: 'Will my inverter work with this battery?',
        answer: 'Check if your inverter supports lithium batteries and has CAN/RS485 communication. Most modern hybrid inverters (Felicity, Deye, Victron) support Pylontech. Older or basic inverters may not.',
      },
      {
        question: 'Is LiFePO4 safe in Nigerian heat?',
        answer: 'Yes. LiFePO4 is the safest lithium chemistry — it doesn\'t catch fire even if damaged. The operating range goes up to 55°C, well above Nigerian temperatures. The BMS also shuts down if it gets too hot.',
      },
    ],
    buyLinks: [
      { store: 'Solar Nigeria', url: '#' },
      { store: 'Premium Solar Lagos', url: '#' },
      { store: 'Green Energy Abuja', url: '#' },
    ],
    ratingBreakdown: {
      performance: 5.0,
      durability: 5.0,
      valueForMoney: 4.0,
      easeOfInstallation: 4.5,
      batteryLife: 5.0,
    },
    relatedProducts: ['felicity-solar-2kva', 'rubitek-3kva-hybrid', 'complete-home-kit-3kva'],
    updatedAt: 'June 2026',
    testedInNigeria: true,
  },
];

export const categories = [
  {
    id: 'inverters',
    name: 'Solar Inverters',
    description: 'Pure sine wave and hybrid inverters for Nigerian homes',
    icon: '⚡',
    productCount: 3,
  },
  {
    id: 'batteries',
    name: 'Solar Batteries',
    description: 'Tubular, AGM, and Lithium batteries for solar storage',
    icon: '🔋',
    productCount: 2,
  },
  {
    id: 'panels',
    name: 'Solar Panels',
    description: 'Monocrystalline and polycrystalline panels for Nigerian rooftops',
    icon: '☀️',
    productCount: 1,
  },
  {
    id: 'solar-kits',
    name: 'Complete Solar Kits',
    description: 'All-in-one solar packages for homes and businesses',
    icon: '🏠',
    productCount: 1,
  },
  {
    id: 'charge-controllers',
    name: 'Charge Controllers',
    description: 'MPPT and PWM charge controllers for solar systems',
    icon: '🔌',
    productCount: 1,
  },
];

export const brands = [
  { id: 'luminous', name: 'Luminous', description: 'Indian brand with strong Nigerian presence. Known for reliable inverters and good after-sales service.', productCount: 1 },
  { id: 'felicity-solar', name: 'Felicity Solar', description: 'Chinese manufacturer popular in Nigeria for hybrid inverters and complete solar kits.', productCount: 2 },
  { id: 'exide', name: 'Exide', description: 'Global battery manufacturer with proven tubular batteries for Nigerian solar setups.', productCount: 1 },
  { id: 'jinko-solar', name: 'Jinko Solar', description: 'Tier-1 Chinese panel manufacturer with high-efficiency mono PERC panels.', productCount: 1 },
  { id: 'rubitek', name: 'Rubitek', description: 'Newer brand offering competitive hybrid inverters with advanced features.', productCount: 1 },
  { id: 'blue-gate', name: 'Blue Gate', description: 'Budget brand offering affordable inverters for basic power needs.', productCount: 1 },
  { id: 'epsolar', name: 'Epsolar', description: 'Specialist in charge controllers, popular MPPT options for Nigerian solar.', productCount: 1 },
  { id: 'pylontech', name: 'Pylontech', description: 'Premium lithium battery manufacturer with long-lasting LiFePO4 batteries.', productCount: 1 },
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
    excerpt: 'We compare total cost of ownership, lifespan, maintenance, and performance of both battery types in Nigerian conditions.',
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
    excerpt: 'Prices have shifted again due to forex changes. Here\'s what you should expect to pay for panels, batteries, and inverters this month.',
    date: 'June 15, 2026',
    category: 'Prices',
  },
  {
    id: 'cbn-forex-solar-impact',
    title: 'How CBN Forex Policy Changes Affect Solar Equipment Prices',
    excerpt: 'The recent CBN policy changes have impacted import costs. We analyze what this means for solar buyers.',
    date: 'June 8, 2026',
    category: 'News',
  },
  {
    id: 'felicity-new-5kva-launch',
    title: 'Felicity Solar Launches New 5KVA Hybrid Inverter in Nigeria',
    excerpt: 'The new Felicity 5KVA promises higher efficiency and better heat management. We go hands-on with the first unit in Lagos.',
    date: 'May 28, 2026',
    category: 'Product Launch',
  },
  {
    id: 'harmattan-solar-tips',
    title: 'Solar System Maintenance Tips for Harmattan Season',
    excerpt: 'Dust during harmattan can reduce your solar output by 30%. Here\'s how to keep your panels clean and efficient.',
    date: 'May 20, 2026',
    category: 'Tips',
  },
];
