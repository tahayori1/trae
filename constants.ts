import { Project, Stat } from './types';

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Project 01",
    subtitle: "Mediterranean Boldness",
    description: "A kitchen with blue lacquered furniture at night, evoking the shades of the Mediterranean Sea. Incorporating natural elements and warm textures, with a natural stone countertop adding elegance and sophistication.",
    image: "https://picsum.photos/id/431/1200/800",
    tags: ["Blue Lacquer", "Natural Stone", "Mediterranean"],
    layout: 'left'
  },
  {
    id: 2,
    title: "Project 02",
    subtitle: "Timeless Ebony",
    description: "Ebony wood acts as the protagonist. This noble and exotic material, with its dark tone and rich vein, transforms the culinary space into a sanctuary of elegance. The island with curved sides breaks away from rigidity.",
    image: "https://picsum.photos/id/364/1200/800",
    tags: ["Ebony Wood", "Curved Island", "Sophisticated"],
    layout: 'right'
  },
  {
    id: 3,
    title: "Project 03",
    subtitle: "Modern Minimalism",
    description: "A completely white kitchen with a gola system is synonymous with modernity and brightness. The absence of visible handles creates clean lines, while elegant black appliances add a touch of sophistication.",
    image: "https://picsum.photos/id/401/1200/800",
    tags: ["White Lacquer", "Gola System", "Minimalist"],
    layout: 'left'
  },
  {
    id: 4,
    title: "Project 04",
    subtitle: "Wood & White Harmony",
    description: "Combines the warmth of wood with the brightness of white, enhanced by the elegance of the gola system. Integrated LED lighting highlights the linearity of the design.",
    image: "https://picsum.photos/id/250/1200/800",
    tags: ["Wood Texture", "LED Lighting", "Warmth"],
    layout: 'right'
  },
  {
    id: 9,
    title: "Project 09",
    subtitle: "Black & Gold Luxury",
    description: "The personification of modern elegance, where the boldness of black meets the subtle luxury of gold. Dramatic and sophisticated, perfect for those seeking a distinctive design.",
    image: "https://picsum.photos/id/449/1200/800",
    tags: ["Black Matte", "Gold Details", "Luxury"],
    layout: 'full'
  },
  {
    id: 10,
    title: "Project 10",
    subtitle: "Turquoise Vitality",
    description: "The freshness and energy of turquoise evoke clear skies. Natural beauty of wood finish integrates perfectly into the design, achieving a cozy atmosphere full of character.",
    image: "https://picsum.photos/id/180/1200/800",
    tags: ["Turquoise", "Industrial Touch", "Freshness"],
    layout: 'left'
  }
];

export const STATS: Stat[] = [
  { label: "Factory Size", value: "15,000", sub: "m² Facilities" },
  { label: "Team", value: "+100", sub: "Skilled Workers" },
  { label: "Growth", value: "+140%", sub: "Since 2023" },
  { label: "Technology", value: "AI", sub: "Integrated Process" },
];

export const LOCATIONS = [
  { code: "MAD", city: "Madrid", country: "Spain", type: "Headquarters" },
  { code: "MIA", city: "Miami", country: "USA", type: "Logistics Hub" },
  { code: "NYC", city: "New York", country: "USA", type: "Showroom" },
  { code: "ZRH", city: "Zürich", country: "Switzerland", type: "Official Partner" },
  { code: "DXB", city: "Dubai", country: "UAE", type: "Official Partner" },
  { code: "TEX", city: "Texas", country: "USA", type: "Official Partner" },
  { code: "MEX", city: "Mexico City", country: "Mexico", type: "Distribution" },
];

export const COMPANY_INFO = {
  address: "Albacete 1, Griñón (Madrid) ESPAÑA",
  phone: "(+34) 91 814 11 29",
  email: "trae@trae.es",
  web: "www.trae.es"
};