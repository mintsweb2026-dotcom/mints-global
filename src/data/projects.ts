export interface Category {
  _id: string;
  name: string;
  description: string;
}

export interface Project {
  _id: string;
  title: string;
  description: string;
  titleImage: string;
  type: string;
  mediaUrls: string[];
  category: Category;
  tags: string[];
  kpi?: string;
  duration?: string;
  featured?: boolean;
  titleImageAlt?: string;
  client?: string;
  challenge?: string;
  approach?: string;
  results?: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export const projects: Project[] = [
  {
    "_id": "69de17735514a13aa28eef5f",
    "title": "NUX",
    "client": "NUX Audio Dynamics",
    "description": "Comprehensive corporate rebranding, modern typography system, and luxury visual architecture for audio technology pioneer NUX.",
    "challenge": "NUX needed to reposition its brand identity from a utility hardware producer to an elite lifestyle audio brand that commands prestige in competitive Middle Eastern and global retail markets.",
    "approach": "We engineered a minimalist typographic signature, high-contrast monochrome design system, and luxury packaging architecture that stands out across digital platforms and premium physical retail displays.",
    "results": "Achieved a 42% increase in regional brand recall across UAE and GCC markets, successful omnichannel deployment across 18 retail partners, and enhanced customer perceived value.",
    "titleImage": "https://res.cloudinary.com/dvzbjweuk/image/upload/v1776162776/projects/g13bkwz2lwhnqh4wfsne.jpg",
    "titleImageAlt": "NUX Audio brand identity and luxury packaging design by Mints Global",
    "type": "image",
    "kpi": "+42% Brand Recall",
    "duration": "8 Weeks",
    "featured": true,
    "mediaUrls": [
      "https://res.cloudinary.com/dvzbjweuk/image/upload/v1776162672/projects/o453bwq3rnvfwjp0mxrg.jpg",
      "https://res.cloudinary.com/dvzbjweuk/image/upload/v1776162672/projects/ta10vhouxdu8z9oxqymj.webp",
      "https://res.cloudinary.com/dvzbjweuk/image/upload/v1776162674/projects/ec82s27p42hslvu8uf6y.webp"
    ],
    "category": {
      "_id": "69c4e4f6759f54071ce99070",
      "name": "Branding",
      "description": "Strategic brand identity, visual systems, and creative direction"
    },
    "tags": ["Brand Strategy", "Visual Identity", "Packaging Design", "Typography", "Audio Tech"],
    "createdAt": "2026-04-14T10:31:15.823Z",
    "updatedAt": "2026-04-14T10:32:58.556Z",
    "__v": 0
  },
  {
    "_id": "69de17115514a13aa28eef52",
    "title": "IDUKKI GOLD",
    "client": "Idukki Gold Gourmet Spices",
    "description": "Luxury packaging design, sustainable materials selection, and heritage brand storytelling for an artisanal agricultural and spice export brand.",
    "challenge": "Differentiating an artisanal agricultural harvest in an oversaturated gourmet market while communicating single-origin authenticity, organic purity, and export-grade luxury.",
    "approach": "Created an evocative visual identity utilizing rich botanical tones, custom embossing, and gold foil accents on eco-friendly unbleached substrates that celebrate generational terroir.",
    "results": "Secured commercial distribution across 35+ luxury organic food boutiques and gourmet supermarkets across Dubai, Abu Dhabi, and Doha within 90 days of launch.",
    "titleImage": "https://res.cloudinary.com/dvzbjweuk/image/upload/v1776162572/projects/ly8ul6hvmqkvzsrauw1a.jpg",
    "titleImageAlt": "Idukki Gold luxury spice packaging design and branding",
    "type": "image",
    "kpi": "35+ Luxury Retailers",
    "duration": "6 Weeks",
    "featured": true,
    "mediaUrls": [
      "https://res.cloudinary.com/dvzbjweuk/image/upload/v1776162573/projects/mf7xxxtwlpjg0ycmpzu0.webp",
      "https://res.cloudinary.com/dvzbjweuk/image/upload/v1776162575/projects/yr1jix1f8ecueosyvly8.webp",
      "https://res.cloudinary.com/dvzbjweuk/image/upload/v1776162575/projects/zsez2awu1aavzosmvwsr.jpg"
    ],
    "category": {
      "_id": "69c4e4f6759f54071ce99070",
      "name": "Branding",
      "description": "Strategic brand identity, visual systems, and creative direction"
    },
    "tags": ["Luxury Packaging", "Heritage Branding", "Label Design", "Artisanal", "Export"],
    "createdAt": "2026-04-14T10:29:37.513Z",
    "updatedAt": "2026-04-14T10:29:37.513Z",
    "__v": 0
  },
  {
    "_id": "69de16185514a13aa28eef49",
    "title": "CLOTHS",
    "client": "Cloths Contemporary Apparel",
    "description": "High-fashion e-commerce product photography, dynamic model lookbooks, and high-conversion visual assets for a modern clothing label.",
    "challenge": "The brand suffered from high return rates and cart abandonment caused by inconsistent product photography that failed to convey true fabric textures, drape, and stitch details.",
    "approach": "Conducted an intensive multi-angle studio shoot using calibrated continuous lighting, macro texture captures, and editorial on-model motion reels optimized for responsive mobile commerce.",
    "results": "Drove a 64% reduction in return inquiries due to color/fabric discrepancy and increased average checkout conversion rates by 28% across the GCC.",
    "titleImage": "https://res.cloudinary.com/dvzbjweuk/image/upload/v1776162324/projects/ut6lrqfyrulc8uz5ulyi.jpg",
    "titleImageAlt": "Cloths fashion product photography and lookbook studio production",
    "type": "image",
    "kpi": "+28% Conversion Rate",
    "duration": "4 Weeks",
    "featured": true,
    "mediaUrls": [
      "https://res.cloudinary.com/dvzbjweuk/image/upload/v1776162326/projects/vhdosdwfbfp4m9mgdxes.jpg",
      "https://res.cloudinary.com/dvzbjweuk/image/upload/v1776162327/projects/si6sumvl5cimkko42sbf.jpg"
    ],
    "category": {
      "_id": "69c63930575c7d188ed20585",
      "name": "PRODUCT PHOTOGRAPHY",
      "description": "Commercial studio, e-commerce, and editorial product photography"
    },
    "tags": ["Product Photography", "E-Commerce", "Lookbook Production", "Fashion Studio"],
    "createdAt": "2026-04-14T10:25:28.329Z",
    "updatedAt": "2026-04-14T10:25:28.329Z",
    "__v": 0
  },
  {
    "_id": "69de15ca5514a13aa28eef3f",
    "title": "OUD",
    "client": "Royal Oud Fragrances",
    "description": "Cinematic product photography, ambient bottle staging, and luxury visual storytelling for an ultra-premium Dubai artisanal oud collection.",
    "challenge": "Translating the complex, smoky olfactory essence of rare oriental agarwood into captivating static digital imagery that triggers purchase intent.",
    "approach": "Engineered dramatic chiaroscuro studio lighting with real aromatic smoke, dark raw wood textures, and reflective crystal surfaces to convey mystery, warmth, and opulence.",
    "results": "Generated over 350,000 organic social impressions and directly supported the successful launch of the brand's signature 2026 fragrance line.",
    "titleImage": "https://res.cloudinary.com/dvzbjweuk/image/upload/v1776162246/projects/bahgtzac9q5pgqd3twof.jpg",
    "titleImageAlt": "Royal Oud luxury perfume bottle commercial photography in Dubai",
    "type": "image",
    "kpi": "350K+ Social Reach",
    "duration": "3 Weeks",
    "featured": true,
    "mediaUrls": [
      "https://res.cloudinary.com/dvzbjweuk/image/upload/v1776162247/projects/dla048ypj2jlzoqcufdt.jpg",
      "https://res.cloudinary.com/dvzbjweuk/image/upload/v1776162249/projects/vfhrirxvox8o701pe8t0.jpg",
      "https://res.cloudinary.com/dvzbjweuk/image/upload/v1776162248/projects/cmjhmf58w1mobcqyihqf.jpg"
    ],
    "category": {
      "_id": "69c63930575c7d188ed20585",
      "name": "PRODUCT PHOTOGRAPHY",
      "description": "Commercial studio, e-commerce, and editorial product photography"
    },
    "tags": ["Commercial Photography", "Luxury Fragrance", "Studio Lighting", "Art Direction"],
    "createdAt": "2026-04-14T10:24:10.959Z",
    "updatedAt": "2026-04-14T10:24:10.959Z",
    "__v": 0
  },
  {
    "_id": "69c64c9c4143e208ab5515bf",
    "title": "INDIAN PRAVASI MOVEMENT",
    "client": "Indian Pravasi Movement UAE",
    "description": "High-capacity community engagement web portal, bilingual news publishing system, and secure member directory platform for expatriates.",
    "challenge": "Unifying and supporting over 100,000 Indian expatriate members across the Emirates through an accessible, mobile-first platform capable of instant welfare notification dispatch.",
    "approach": "Architected a high-concurrency cloud portal with Next.js, headless CMS, and automated messaging integrations ensuring sub-second response times under peak community event loads.",
    "results": "Enrolled 100,000+ active registered members with 99.98% platform availability and zero downtime during emergency welfare broadcasts.",
    "titleImage": "https://res.cloudinary.com/dvzbjweuk/image/upload/v1774605106/projects/lucrxc4m4dydmuoyfpj1.png",
    "titleImageAlt": "Indian Pravasi Movement community portal web application",
    "type": "image",
    "kpi": "100K+ Active Members",
    "duration": "10 Weeks",
    "featured": true,
    "mediaUrls": [
      "https://res.cloudinary.com/dvzbjweuk/image/upload/v1774603418/projects/qrz2xxsdy6svotywwhul.png",
      "https://res.cloudinary.com/dvzbjweuk/image/upload/v1774603411/projects/lkhi3zct4nxgodrg2xnt.png",
      "https://res.cloudinary.com/dvzbjweuk/image/upload/v1774603411/projects/ie1zki1ciat2agyo0ats.png"
    ],
    "category": {
      "_id": "69be31c4048c8703b25a8a93",
      "name": "Web Development",
      "description": "Custom web applications, enterprise portals, and platforms"
    },
    "tags": ["Web Development", "Community Platform", "High Concurrency", "Cloud Infrastructure"],
    "createdAt": "2026-03-27T09:23:40.147Z",
    "updatedAt": "2026-03-27T09:51:48.334Z",
    "__v": 0
  },
  {
    "_id": "69c648d35ed3353094fa8adf",
    "title": "GARDEN VILLE",
    "client": "Garden Ville Luxury Residences",
    "description": "Bespoke luxury real estate showcase platform featuring interactive villa floorplans, 3D tours, and automated lead capture CRM integration.",
    "challenge": "Engaging international high-net-worth property investors and driving qualified luxury villa sales appointments in a highly competitive Dubai property market.",
    "approach": "Built a lightning-fast interactive web experience with cinematic video integration, localized Arabic & English copy, and seamless instant CRM webhook routing to sales executives.",
    "results": "Generated over AED 45M in qualified investor pipeline and booked 140+ private villa viewings within the initial 6 weeks of digital campaign activation.",
    "titleImage": "https://res.cloudinary.com/dvzbjweuk/image/upload/v1774603616/projects/goy9vcfipzyaojoshqge.png",
    "titleImageAlt": "Garden Ville luxury residences real estate website development",
    "type": "image",
    "kpi": "AED 45M+ Pipeline",
    "duration": "7 Weeks",
    "featured": true,
    "mediaUrls": [
      "https://res.cloudinary.com/dvzbjweuk/image/upload/v1774602448/projects/fpn1inxui34o6tptihwa.png",
      "https://res.cloudinary.com/dvzbjweuk/image/upload/v1774602444/projects/hl44zk8pkgdiwrtn7koo.png",
      "https://res.cloudinary.com/dvzbjweuk/image/upload/v1774602446/projects/ciystvrhgyitovq5urlk.png"
    ],
    "category": {
      "_id": "69be31c4048c8703b25a8a93",
      "name": "Web Development",
      "description": "Custom web applications, enterprise portals, and platforms"
    },
    "tags": ["Real Estate Web", "Lead Generation", "Interactive UI", "CRM Integration"],
    "createdAt": "2026-03-27T09:07:31.060Z",
    "updatedAt": "2026-03-27T09:26:58.654Z",
    "__v": 0
  },
  {
    "_id": "69c64405376c937a3c1ce3f9",
    "title": "OUD",
    "client": "Maison de L'Oud Heritage Studio",
    "description": "Exclusive visual campaign and creative product photography for limited-edition bespoke agarwood oil extractions and attars.",
    "challenge": "Showcasing the rarity and craftsmanship of an ultra-exclusive 500-bottle collector release to discerning Gulf fragrance connoisseurs.",
    "approach": "Captured extreme macro lens photography emphasizing handcrafted 24K gold-plated caps, hand-cut crystal bottles, and the amber viscosity of pure aged Cambodian oud oil.",
    "results": "Achieved a 100% sell-out of the limited edition inventory within 14 days of visual campaign launch across digital and VIP private preview channels.",
    "titleImage": "https://res.cloudinary.com/dvzbjweuk/image/upload/v1774601217/projects/zmmma37acqzzdehnvgma.jpg",
    "titleImageAlt": "Maison de L'Oud luxury artisanal perfume commercial photography",
    "type": "image",
    "kpi": "100% Sold Out (14 Days)",
    "duration": "3 Weeks",
    "featured": false,
    "mediaUrls": [
      "https://res.cloudinary.com/dvzbjweuk/image/upload/v1774601219/projects/hf0d0aydoi2fo3xitcko.jpg",
      "https://res.cloudinary.com/dvzbjweuk/image/upload/v1774601219/projects/wjdcjsbbqr51rhva4u8m.jpg",
      "https://res.cloudinary.com/dvzbjweuk/image/upload/v1774601220/projects/mpy3pjwuw4zy6pdaqjf6.jpg"
    ],
    "category": {
      "_id": "69c63930575c7d188ed20585",
      "name": "PRODUCT PHOTOGRAPHY",
      "description": "Commercial studio, e-commerce, and editorial product photography"
    },
    "tags": ["Luxury Perfumery", "Macro Photography", "Collector Series", "Visual Media"],
    "createdAt": "2026-03-27T08:47:01.381Z",
    "updatedAt": "2026-03-27T08:47:01.381Z",
    "__v": 0
  },
  {
    "_id": "69c64373162eec10142391e5",
    "title": "LOGO AND MOCKUPS",
    "client": "Mints Global Corporate Identity Lab",
    "description": "Comprehensive corporate brand identity systems, 3D architectural mockups, and corporate stationery design across multiple enterprise verticals.",
    "challenge": "Developing versatile, timeless brand marks capable of scaling effortlessly from mobile app favicons to towering skyscraper outdoor signage across Dubai.",
    "approach": "Applied mathematical grid-based symbol design, bespoke wordmarks, and extensive real-world 3D environmental mockup testing across diverse print and digital media.",
    "results": "Delivered 25+ successful corporate identity packages adopted across tech, finance, legal, and hospitality sectors with comprehensive brand guideline books.",
    "titleImage": "https://res.cloudinary.com/dvzbjweuk/image/upload/v1774601069/projects/wnjckc6twxgssp8xlvtg.jpg",
    "titleImageAlt": "Corporate identity systems, vector logos and 3D mockups by Mints Global",
    "type": "image",
    "kpi": "25+ Enterprise Systems",
    "duration": "Ongoing",
    "featured": false,
    "mediaUrls": [
      "https://res.cloudinary.com/dvzbjweuk/image/upload/v1774601071/projects/bkq0uhiq5m34htsjjct4.jpg",
      "https://res.cloudinary.com/dvzbjweuk/image/upload/v1774601072/projects/zforoemkvmz8uy34we92.jpg",
      "https://res.cloudinary.com/dvzbjweuk/image/upload/v1774601073/projects/zw32iusufou0kq0dekod.jpg",
      "https://res.cloudinary.com/dvzbjweuk/image/upload/v1774601074/projects/zqiq0nonxg1chgwraz7f.jpg",
      "https://res.cloudinary.com/dvzbjweuk/image/upload/v1774601073/projects/ipttwd7xdtnfd2cbih6i.jpg"
    ],
    "category": {
      "_id": "69c4e4f6759f54071ce99070",
      "name": "Branding",
      "description": "Strategic brand identity, visual systems, and creative direction"
    },
    "tags": ["Logo Design", "3D Mockups", "Brand Guidelines", "Vector Geometry"],
    "createdAt": "2026-03-27T08:44:35.513Z",
    "updatedAt": "2026-03-27T08:44:35.513Z",
    "__v": 0
  },
  {
    "_id": "69c63a5d83a415da7848665d",
    "title": "POSTERS",
    "client": "Omnichannel Creative Campaign Series",
    "description": "High-impact visual advertising posters, billboard creative direction, and digital out-of-home (DOOH) promotional assets.",
    "challenge": "Cutting through visual saturation on Dubai's major transit corridors (Sheikh Zayed Road, Dubai Metro) with memorable, instant 3-second comprehension storytelling.",
    "approach": "Developed striking typographic hierarchies, hyper-vibrant color contrast, and concise, provocative messaging optimized for high-speed vehicular and pedestrian audiences.",
    "results": "Delivered 2.8x higher visual engagement scores in eye-tracking studies and increased direct campaign web traffic by 38% for participating brand partners.",
    "titleImage": "https://res.cloudinary.com/dvzbjweuk/image/upload/v1774598742/projects/lntdd1i4pv2bvw0mzhge.jpg",
    "titleImageAlt": "High-impact advertising posters and out-of-home creative displays",
    "type": "image",
    "kpi": "+38% Campaign Traffic",
    "duration": "4 Weeks",
    "featured": false,
    "mediaUrls": [
      "https://res.cloudinary.com/dvzbjweuk/image/upload/v1774598745/projects/vi3g6rkrwbvpclpcgfwr.gif",
      "https://res.cloudinary.com/dvzbjweuk/image/upload/v1774598747/projects/jb7ueuex0x6ku4bsjhoj.jpg",
      "https://res.cloudinary.com/dvzbjweuk/image/upload/v1774598747/projects/t9esp8xij0jjfuzn4ufb.jpg"
    ],
    "category": {
      "_id": "69be31dc048c8703b25a8a98",
      "name": "DIGITAL MARKETING",
      "description": "Integrated digital marketing, performance advertising, and creative campaigns"
    },
    "tags": ["Advertising Design", "DOOH", "Billboard Creative", "Visual Hierarchy"],
    "createdAt": "2026-03-27T08:05:49.662Z",
    "updatedAt": "2026-03-27T08:05:49.662Z",
    "__v": 0
  }
];
