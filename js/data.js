/**
 * Egsale India - Central Data Repository
 * Business: Egsale India Private Limited
 * Tagline: "Yaha Sab Kuch Bikega"
 * Contact: +91 88004 66499 (Agency) | +91 88004 66891 (TCP Plots)
 */

const EGSALE_DATA = {
  company: {
    name: "Egsale India",
    legalName: "Egsale India Private Limited",
    tagline: "Yaha Sab Kuch Bikega",
    establishedYear: 2014,
    description: "Gurgaon's premier real estate consultancy specializing in prime resale & fresh residential developments across DLF, M3M, Godrej, Emaar, Tata Housing and our exclusive TCP Govt.-approved plotted township.",
    address: {
      line1: "Sector 104, Dwarka Expressway, Tech Chand Nagar",
      city: "Gurugram",
      state: "Haryana",
      pincode: "122006",
      country: "India"
    },
    hours: "Open 24 Hours (7 Days a Week)",
    contacts: {
      agencyPrimary: "+918800466499",
      agencyPrimaryFormatted: "+91 88004 66499",
      agencyEmail: "info@egsale.in",
      tcpHotline1: "+918800466891",
      tcpHotline1Formatted: "+91 88004 66891",
      tcpHotline2: "+918800466431",
      tcpHotline2Formatted: "+91 88004 66431",
      tcpEmail: "admin@tcpaffordableplots.com",
      tcpOffice: "Aayan Group, Plot No-637, 6th Floor, Sector-102, Gurgaon-122005"
    }
  },

  // Flagship Project Details
  flagshipPlot: {
    title: "Suraksha Enclave Township (S.E.T)",
    companyProjectName: "Aayan Residency Pvt. Ltd.",
    govtApprovalNOC: "TCP-OFA/19907/2026",
    developer: "K.S. Bisht Construction Pvt. Ltd.",
    location: "Opp. Reliance MET City, Zahidpur, Sector 1, Jhajjar, Haryana",
    distanceHighlight: "Direct connectivity to Dwarka Expressway, KMP & AIIMS-2 Badsa",
    totalSizeAcres: 13.25,
    plotSizes: [121, 135, 150, 168, 180, 203],
    plotSizeRangeStr: "121 – 203 sq. yards",
    pricing: {
      currentSpecialPerSqYd: 25000,
      originalPricePerSqYd: 27000,
      specialBatchCount: 15,
      specialBatchCondition: "South-Facing, First 15 Plots Only",
      registrationFee: 21000,
      bookingAmount: 31000,
      bookingRefundable: true,
      allotmentType: "Official Lucky Draw Allotment"
    },
    amenities: [
      { id: "playarea", name: "Kids Play Area", desc: "Safe, rubberized outdoor recreation zone for children", icon: "playarea" },
      { id: "jogging", name: "Jogging & Walking Tracks", desc: "Tree-lined morning track spanning the perimeter", icon: "jogging" },
      { id: "temple", name: "Spiritual Temple Complex", desc: "Serene sanctum for daily worship and meditation", icon: "temple" },
      { id: "security", name: "24×7 Multi-tier Security", desc: "CCTV surveillance, guarded boom barriers & patrols", icon: "security" },
      { id: "sewage", name: "Underground Sewage & Drainage", desc: "Eco-compliant deep sewer line network", icon: "sewage" },
      { id: "parks", name: "Lush Green Landscaped Parks", desc: "Manicured gardens, gazebos and senior sit-outs", icon: "parks" },
      { id: "roads", name: "Wide Arterial Roads", desc: "22ft, 25ft, 38ft and 44ft concrete & blacktop avenues", icon: "roads" },
      { id: "gated", name: "Gated Township & Guard Room", desc: "Controlled biometric access point & sentry rooms", icon: "gated" },
      { id: "banquet", name: "Grand Banquet & Community Hall", desc: "Spacious venue for celebrations & township meetings", icon: "banquet" }
    ],
    roadWidths: ["22 Feet", "25 Feet", "38 Feet", "44 Feet"]
  },

  // 24 Authentic Resale & Primary Projects in Gurgaon
  projects: [
    {
      id: "experion-heartsong",
      name: "Experion Heartsong",
      builder: "Experion Developers",
      sector: "Sector 108",
      sectorNum: 108,
      rera: "HARERA-306/2017",
      priceRange: "₹80L – 2.14Cr",
      minPriceLacs: 80,
      maxPriceLacs: 214,
      bhk: ["2 BHK", "3 BHK", "4 BHK"],
      status: "Ready to Move",
      statusCode: "ready",
      possessionProgress: 100,
      highlight: "Premium gated community with 20,000 sq.ft clubhouse right on Dwarka Expressway.",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "emaar-imperial-garden",
      name: "Emaar Imperial Garden",
      builder: "Emaar India",
      sector: "Sector 102",
      sectorNum: 102,
      rera: "HRERA-208/2017",
      priceRange: "₹1.10 – 1.29Cr",
      minPriceLacs: 110,
      maxPriceLacs: 129,
      bhk: ["3 BHK"],
      status: "Ready to Move",
      statusCode: "ready",
      possessionProgress: 100,
      highlight: "French lifestyle residences with 6 acres of uninterrupted central greens.",
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "ats-tourmaline",
      name: "ATS Tourmaline",
      builder: "ATS Infrastructure",
      sector: "Sector 109",
      sectorNum: 109,
      rera: "HARERA-41/2017",
      priceRange: "₹1.22 – 2.29Cr",
      minPriceLacs: 122,
      maxPriceLacs: 229,
      bhk: ["3 BHK", "4 BHK"],
      status: "Ready to Move",
      statusCode: "ready",
      possessionProgress: 100,
      highlight: "Timeless Art Deco towers crafted with Italian marble finishes and serene courtyards.",
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "bricks-lumbini",
      name: "Bricks Lumbini",
      builder: "Bricks Group",
      sector: "Sector 109",
      sectorNum: 109,
      rera: "Ready",
      priceRange: "₹1.03 – 1.56Cr",
      minPriceLacs: 103,
      maxPriceLacs: 156,
      bhk: ["3 BHK", "4 BHK"],
      status: "Ready to Move",
      statusCode: "ready",
      possessionProgress: 100,
      highlight: "Modern high-rise enclave minutes from Delhi border & Aerocity corridor.",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "experion-windchants",
      name: "Experion Windchants",
      builder: "Experion Developers",
      sector: "Sector 112",
      sectorNum: 112,
      rera: "HARERA-64/2017",
      priceRange: "₹1.85 – 3.68Cr",
      minPriceLacs: 185,
      maxPriceLacs: 368,
      bhk: ["2 BHK", "3 BHK", "4 BHK"],
      status: "Ready to Move",
      statusCode: "ready",
      possessionProgress: 100,
      highlight: "Ultra-luxury project with Asia's largest residential skywalk and opulent villaments.",
      image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "ats-grandstand",
      name: "ATS Grandstand",
      builder: "ATS Infrastructure",
      sector: "Sector 99A",
      sectorNum: 99,
      rera: "HARERA-06/2018",
      priceRange: "₹80L – 1.67Cr",
      minPriceLacs: 80,
      maxPriceLacs: 167,
      bhk: ["3 BHK", "4 BHK"],
      status: "New Launch",
      statusCode: "launch",
      possessionProgress: 40,
      highlight: "High-spec modern layouts nestled in a 13.25 acre campus with unmatched high-speed connectivity.",
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "godrej-prive",
      name: "Godrej Prive",
      builder: "Godrej Properties",
      sector: "Sector 106",
      sectorNum: 106,
      rera: "HARERA-09/2020",
      priceRange: "₹1.20 – 2.70Cr",
      minPriceLacs: 120,
      maxPriceLacs: 270,
      bhk: ["2 BHK", "3 BHK", "4 BHK"],
      status: "New Launch",
      statusCode: "launch",
      possessionProgress: 55,
      highlight: "Exclusive private residences with 5-tier concierge, Olympic swimming pool and spa suites.",
      image: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "cosmos-express99",
      name: "Cosmos Express99",
      builder: "Cosmos Group",
      sector: "Sector 99",
      sectorNum: 99,
      rera: "OC Applied",
      priceRange: "₹45L – 1.10Cr",
      minPriceLacs: 45,
      maxPriceLacs: 110,
      bhk: ["2 BHK", "3 BHK", "4 BHK"],
      status: "Under Construction",
      statusCode: "construction",
      possessionProgress: 88,
      highlight: "Value-luxury homes with OC applied, fast-track delivery, close to Dwarka Expressway interchange.",
      image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "m3m-woodshire",
      name: "M3M Woodshire",
      builder: "M3M India",
      sector: "Sector 107",
      sectorNum: 107,
      rera: "Ready",
      priceRange: "₹65L – 2.14Cr",
      minPriceLacs: 65,
      maxPriceLacs: 214,
      bhk: ["2 BHK", "3 BHK", "4 BHK"],
      status: "Ready to Move",
      statusCode: "ready",
      possessionProgress: 100,
      highlight: "18 mid-rise towers surrounded by wide landscape greens, premium clubhouse & sports arenas.",
      image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "puri-emerald-bay",
      name: "Puri Emerald Bay",
      builder: "Puri Construction",
      sector: "Sector 104",
      sectorNum: 104,
      rera: "HARERA-136/2017",
      priceRange: "₹1.05 – 2.25Cr",
      minPriceLacs: 105,
      maxPriceLacs: 225,
      bhk: ["2 BHK", "3 BHK"],
      status: "Ready to Move",
      statusCode: "ready",
      possessionProgress: 100,
      highlight: "Signature 3-side open architecture with wrap-around balconies overlooking lush gardens.",
      image: "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "tata-gateway-gurgaon",
      name: "Tata Gateway Gurgaon",
      builder: "Tata Housing",
      sector: "Sector 112",
      sectorNum: 112,
      rera: "HARERA-186/2017",
      priceRange: "₹1.60 – 2.44Cr",
      minPriceLacs: 160,
      maxPriceLacs: 244,
      bhk: ["2 BHK", "3 BHK", "4 BHK"],
      status: "Ready to Move",
      statusCode: "ready",
      possessionProgress: 100,
      highlight: "IGBC certified green residences backed by the legacy trust and construction excellence of Tata.",
      image: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "ats-triumph",
      name: "ATS Triumph",
      builder: "ATS Infrastructure",
      sector: "Sector 104",
      sectorNum: 104,
      rera: "HARERA-140/2019",
      priceRange: "₹1.60 – 2.35Cr",
      minPriceLacs: 160,
      maxPriceLacs: 235,
      bhk: ["3 BHK", "4 BHK"],
      status: "Ready to Move",
      statusCode: "ready",
      possessionProgress: 100,
      highlight: "Bespoke high ceilings, imported marble flooring, customized wooden wardrobes and infinity pools.",
      image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "hero-homes-phase-2",
      name: "Hero Homes Phase-2",
      builder: "Hero Realty",
      sector: "Sector 104",
      sectorNum: 104,
      rera: "HARERA-24/2018",
      priceRange: "₹74L – 1.14Cr",
      minPriceLacs: 74,
      maxPriceLacs: 114,
      bhk: ["2 BHK", "3 BHK", "4 BHK"],
      status: "New Launch",
      statusCode: "launch",
      possessionProgress: 45,
      highlight: "Smart-home automation, zero-vehicular surface traffic, and electric vehicle charging bays.",
      image: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "emaar-gurgaon-green",
      name: "Emaar Gurgaon Green",
      builder: "Emaar India",
      sector: "Sector 102",
      sectorNum: 102,
      rera: "HRERA-36/2017",
      priceRange: "₹85L – 1.10Cr",
      minPriceLacs: 85,
      maxPriceLacs: 110,
      bhk: ["3 BHK"],
      status: "Ready to Move",
      statusCode: "ready",
      possessionProgress: 100,
      highlight: "Strategically located gated neighborhood offering world-class sports facilities and jogging loops.",
      image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "godrej-meridien",
      name: "Godrej Meridien",
      builder: "Godrej Properties",
      sector: "Sector 106",
      sectorNum: 106,
      rera: "Registered",
      priceRange: "3,4BHK from 1.70Cr",
      minPriceLacs: 170,
      maxPriceLacs: 320,
      bhk: ["3 BHK", "4 BHK"],
      status: "10% now, 90% on possession",
      statusCode: "payment-plan",
      possessionProgress: 75,
      highlight: "Unrivalled luxury with 66,000 sq.ft clubhouse curated with Elle Spa, salon, & French boulangerie.",
      image: "https://images.unsplash.com/photo-1600607687644-c7171b42498b?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "tata-la-vida",
      name: "Tata La Vida",
      builder: "Tata Housing",
      sector: "Sector 113",
      sectorNum: 113,
      rera: "HARERA-148/2017",
      priceRange: "₹65L – 75L",
      minPriceLacs: 65,
      maxPriceLacs: 75,
      bhk: ["2 BHK", "3 BHK"],
      status: "New Launch",
      statusCode: "launch",
      possessionProgress: 50,
      highlight: "IGBC pre-certified Gold residential hub with an 1.85-acre central sky forest and herbal gardens.",
      image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "ats-marigold",
      name: "ATS Marigold",
      builder: "ATS Infrastructure",
      sector: "Sector 89A",
      sectorNum: 89,
      rera: "HRERA-55/2017",
      priceRange: "₹96L – 1.51Cr",
      minPriceLacs: 96,
      maxPriceLacs: 151,
      bhk: ["3 BHK"],
      status: "Under Construction",
      statusCode: "construction",
      possessionProgress: 82,
      highlight: "Refined residences inspired by Spanish aesthetics amidst vast landscaped lawns and water fountains.",
      image: "https://images.unsplash.com/photo-1600585154363-67eb9e2e2099?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "paras-dews",
      name: "Paras Dews",
      builder: "Paras Buildtech",
      sector: "Sector 105",
      sectorNum: 105,
      rera: "HARERA-118/2017",
      priceRange: "₹85L – 1.40Cr",
      minPriceLacs: 85,
      maxPriceLacs: 140,
      bhk: ["2 BHK", "3 BHK", "4 BHK"],
      status: "Ready to Move",
      statusCode: "ready",
      possessionProgress: 100,
      highlight: "Expansive multi-tier clubhouse, air-conditioned lobbies and zero pollution surroundings.",
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "shapoorji-joyville",
      name: "Shapoorji Pallonji Joyville",
      builder: "Shapoorji Pallonji",
      sector: "Sector 102",
      sectorNum: 102,
      rera: "HARERA-27/2018",
      priceRange: "₹68L – 1.70Cr",
      minPriceLacs: 68,
      maxPriceLacs: 170,
      bhk: ["2 BHK", "3 BHK", "4 BHK"],
      status: "New Launch",
      statusCode: "launch",
      possessionProgress: 60,
      highlight: "Powered by 150-year engineering heritage with air purifiers in common areas and 31+ amenities.",
      image: "https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "adani-oyster-grand",
      name: "Adani Oyster Grand",
      builder: "Adani Realty",
      sector: "Sector 102",
      sectorNum: 102,
      rera: "HRERA-37/2017",
      priceRange: "₹1 – 2.25Cr",
      minPriceLacs: 100,
      maxPriceLacs: 225,
      bhk: ["3 BHK", "4 BHK", "5 BHK"],
      status: "Ready to Move",
      statusCode: "ready",
      possessionProgress: 100,
      highlight: "Grand double-height entrance lobbies, imported marble finishes, and lap pool with sun loungers.",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "godrej-summit",
      name: "Godrej Summit",
      builder: "Godrej Properties",
      sector: "Sector 104",
      sectorNum: 104,
      rera: "HARERA-75/2017",
      priceRange: "₹65L – 1.55Cr",
      minPriceLacs: 65,
      maxPriceLacs: 155,
      bhk: ["2 BHK", "3 BHK", "4 BHK"],
      status: "Ready to Move",
      statusCode: "ready",
      possessionProgress: 100,
      highlight: "Eco-smart high-rise homes located just off Dwarka Expressway near proposed metro corridor.",
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "chintels-serenity",
      name: "Chintels Serenity",
      builder: "Chintels India",
      sector: "Sector 109",
      sectorNum: 109,
      rera: "HARERA-125/2017",
      priceRange: "₹1.22 – 2.29Cr",
      minPriceLacs: 122,
      maxPriceLacs: 229,
      bhk: ["3 BHK", "4 BHK"],
      status: "Ready to Move",
      statusCode: "ready",
      possessionProgress: 100,
      highlight: "Serene living experience surrounded by green expanses with world-class squash and badminton courts.",
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "bptp-amstoria",
      name: "BPTP Amstoria",
      builder: "BPTP",
      sector: "Sector 102",
      sectorNum: 102,
      rera: "HARERA-297/2017",
      priceRange: "₹1.07 – 2.57Cr",
      minPriceLacs: 107,
      maxPriceLacs: 257,
      bhk: ["3 BHK", "4 BHK Floors"],
      status: "Ready to Move",
      statusCode: "ready",
      possessionProgress: 100,
      highlight: "Exclusive low-density independent floors with private elevators and reserved stilt car parking.",
      image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "hero-homes",
      name: "Hero Homes",
      builder: "Hero Realty",
      sector: "Sector 104",
      sectorNum: 104,
      rera: "HARERA-24/2018",
      priceRange: "₹68L – 1.04Cr",
      minPriceLacs: 68,
      maxPriceLacs: 104,
      bhk: ["2 BHK", "3 BHK", "4 BHK"],
      status: "New Launch (30:40:30 plan)",
      statusCode: "launch",
      possessionProgress: 52,
      highlight: "Special 30:40:30 flexible payment plan offering great capital appreciation for early buyers.",
      image: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=800&q=80"
    }
  ],

  // Builder Partners
  builderPartners: [
    { name: "DLF", category: "Luxury Developer", badge: "Iconic Developer" },
    { name: "M3M", category: "High-Rise Living", badge: "Speed of Delivery" },
    { name: "Godrej Properties", category: "Sustainable Eco-Homes", badge: "125 Yr Trust" },
    { name: "Tata Housing", category: "Pan-India Heritage", badge: "Tata Quality" },
    { name: "Emaar India", category: "Global Communities", badge: "Master-Planned" },
    { name: "Adani Realty", category: "Modern Infrastructure", badge: "Adani Group" },
    { name: "ATS Infrastructure", category: "Art Deco Architecture", badge: "Timeless Quality" },
    { name: "Shapoorji Pallonji", category: "Engineering Excellence", badge: "150+ Years" },
    { name: "AIPL", category: "Commercial & Residential", badge: "Prime Delivery" },
    { name: "IREO", category: "Grand Master Spaces", badge: "Dwarka Expy" }
  ],

  // Frequently Asked Questions
  faqs: [
    {
      q: "What is the official approval status of Aayan Residency / Suraksha Enclave Township?",
      a: "Aayan Residency (Suraksha Enclave Township) is 100% Town & Country Planning (TCP) Haryana Government-approved under NOC reference number TCP-OFA/19907/2026. All township layout drawings, sector demarcations, and environmental sanctions are officially sanctioned by the Department of Town and Country Planning Haryana."
    },
    {
      q: "Is the ₹31,000 plot booking amount genuinely refundable?",
      a: "Yes, 100%. The ₹31,000 initial registration token is completely refundable without deductions if you choose not to proceed or are not allocated your preferred plot during the lucky-draw allotment session."
    },
    {
      q: "What is the special discounted price for south-facing plots?",
      a: "As part of the promotional launch phase, the first 15 South-facing plots are available at a discounted rate of ₹25,000 per sq. yard (marked down from the standard ₹27,000 per sq. yard). Plot registration fee is ₹21,000."
    },
    {
      q: "Can I inspect the original RERA certificates of the resale/primary projects?",
      a: "Absolutely. Egsale India adheres to 100% transparent RERA compliance. Every listing on our portal features its verified HARERA/HRERA registration code. We provide comprehensive title search, builder ledger clearance, and documentation assistance prior to signing."
    },
    {
      q: "What are the road sizes inside the Suraksha Enclave Township?",
      a: "The township boasts wide planned thoroughfares designed to accommodate heavy vehicles and emergency services effortlessly, featuring road widths of 22 feet, 25 feet, 38 feet, and wide 44-foot central avenues."
    },
    {
      q: "Where is the physical office of Egsale India located?",
      a: "Our primary agency office is located at Sector 104, Dwarka Expressway, Tech Chand Nagar, Gurugram, Haryana 122006. We operate 24 hours a day. The TCP Affordable Plots project office is located at Aayan Group, Plot No-637, 6th Floor, Sector-102, Gurgaon-122005."
    }
  ],

  // Realistic Social Proof Feed (Rotates quietly on the bottom left)
  socialProofStream: [
    { name: "Dr. Anish Sharma", location: "South Delhi", action: "enquired about 3 BHK at ATS Triumph", time: "2 mins ago" },
    { name: "Manish Aggarwal", location: "Gurgaon Sector 57", action: "booked plot token for Aayan Residency (150 sq.yd)", time: "6 mins ago" },
    { name: "Pooja & Rohan Verma", location: "Noida Sector 62", action: "requested site visit for Experion Windchants", time: "11 mins ago" },
    { name: "Col. Sanjeev Rawat", location: "Chandigarh", action: "downloaded TCP Haryana NOC Certificate", time: "17 mins ago" },
    { name: "Vikram Singhania", location: "DLF Phase 2", action: "enquired about Godrej Meridien 4 BHK", time: "24 mins ago" },
    { name: "Sunita Choudhary", location: "Janakpuri, Delhi", action: "registered for Suraksha Enclave Lucky Draw", time: "31 mins ago" }
  ]
};

// Export to window for vanilla JS access, and module.exports for Node
if (typeof window !== "undefined") {
  window.EGSALE_DATA = EGSALE_DATA;
}
if (typeof module !== "undefined" && module.exports) {
  module.exports = EGSALE_DATA;
}
