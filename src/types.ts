export interface MenuItem {
  id: string;
  name: string;
  category: 'starters' | 'soups-salads' | 'pizza-pasta' | 'burgers-sandwiches' | 'north-indian' | 'biryani' | 'chinese' | 'desserts-brews';
  categoryLabel: string;
  description: string;
  isVeg: boolean;
  isChefSpecial?: boolean;
  isSpicy?: boolean;
  price?: string;
  image?: string;
  tags?: string[];
}

export interface MenuCategory {
  id: MenuItem['category'] | 'all';
  label: string;
  iconName: string;
  count?: number;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'all' | 'rooftop' | 'food' | 'ambience' | 'drinks';
  imageUrl: string;
  caption: string;
  span?: string;
}

export interface FeatureItem {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface StatItem {
  value: string;
  label: string;
  sublabel: string;
}
