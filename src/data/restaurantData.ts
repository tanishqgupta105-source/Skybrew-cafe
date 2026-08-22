import { MenuItem, MenuCategory, GalleryItem, FeatureItem, StatItem } from '../types';

export const RESTAURANT_INFO = {
  name: 'SKY BREW',
  subName: 'CAFE & RESTAURANT',
  tagline: 'Where Great Food Meets The Sky',
  subtitle: 'An elevated dining experience in the heart of Gwarighat, Jabalpur.',
  fullAddress: '4th Floor, Satya Raj Pride, 164, Gwarighat Main Road, Bhim Nagar, Polipather, Jabalpur, Madhya Pradesh 482008, India',
  shortAddress: '4th Floor, Satya Raj Pride, 164, Gwarighat Main Road, Jabalpur',
  landmark: 'Opposite Guru Govind Singh Khalsa School',
  city: 'Jabalpur, Madhya Pradesh',
  pincode: '482008',
  phone: '+91 99931 11959',
  phoneFormatted: '+91 99931 11959',
  phoneLink: 'tel:+919993111959',
  hours: 'Every day: 11:00 AM – 11:00 PM',
  hoursTime: { open: 11, close: 23 },
  approxCost: '₹1,500 – ₹1,600 for two',
  googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=SKY+BREW+4th+Floor+Satya+Raj+Pride+164+Gwarighat+Main+Road+Jabalpur+Madhya+Pradesh+482008',
  embedMapQuery: 'SKY BREW, 4th Floor, Satya Raj Pride, 164, Gwarighat Main Road, Jabalpur, Madhya Pradesh 482008',
  cuisines: [
    'North Indian',
    'Chinese',
    'Fast Food',
    'Biryani',
    'Pizza & Pasta',
    'Sandwiches & Burgers',
    'Rolls & Salads',
    'Desserts & Artisanal Brews'
  ],
  facilities: [
    { title: 'Rooftop Seating', desc: 'Open-air panoramic views of the city under starlit evenings' },
    { title: 'Indoor Lounge', desc: 'Comfortable air-conditioned contemporary dining space' },
    { title: 'Dine-in Experience', desc: 'Attentive table service for couples, families & groups' },
    { title: 'Takeaway & Delivery', desc: 'Freshly packed orders ready for pick-up or doorstep delivery' },
    { title: 'Lunch & Dinner', desc: 'Serving afternoon lunches through late evening dining' },
    { title: 'Digital Payments', desc: 'UPI, Credit/Debit cards & contactless payments accepted' }
  ]
};

export const MENU_CATEGORIES: MenuCategory[] = [
  { id: 'all', label: 'All Items', iconName: 'Utensils' },
  { id: 'starters', label: 'Starters', iconName: 'Flame' },
  { id: 'north-indian', label: 'North Indian', iconName: 'CookingPot' },
  { id: 'biryani', label: 'Biryani', iconName: 'Sparkles' },
  { id: 'pizza-pasta', label: 'Pizza & Pasta', iconName: 'Pizza' },
  { id: 'burgers-sandwiches', label: 'Burgers & Sandwiches', iconName: 'Sandwich' },
  { id: 'chinese', label: 'Chinese & Asian', iconName: 'Soup' },
  { id: 'soups-salads', label: 'Soups & Salads', iconName: 'Salad' },
  { id: 'desserts-brews', label: 'Desserts & Brews', iconName: 'Coffee' }
];

export const MENU_ITEMS: MenuItem[] = [
  // Starters
  {
    id: 'starter-1',
    name: 'Paneer Tandoori Tikka',
    category: 'starters',
    categoryLabel: 'Starters',
    description: 'Fresh cottage cheese cubes marinated in spiced hung curd, carom seeds and char-grilled to golden perfection in the clay oven.',
    isVeg: true,
    isChefSpecial: true,
    price: '₹340',
    image: 'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=800&auto=format&fit=crop&q=80',
    tags: ['Tandoor', 'Popular', 'Vegetarian']
  },
  {
    id: 'starter-2',
    name: 'Hara Bhara Kabab',
    category: 'starters',
    categoryLabel: 'Starters',
    description: 'Crispy spiced spinach, green pea and potato cutlets with a delicate cashew crown, served with fresh mint dip.',
    isVeg: true,
    price: '₹280',
    image: 'https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?w=800&auto=format&fit=crop&q=80',
    tags: ['Crispy', 'Classic']
  },
  {
    id: 'starter-3',
    name: 'Chicken Tandoori',
    category: 'starters',
    categoryLabel: 'Starters',
    description: 'Classic bone-in chicken marinated in Kashmiri red chilies, mustard oil, and freshly roasted tandoori masala.',
    isVeg: false,
    isChefSpecial: true,
    price: '₹420',
    image: 'https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?w=800&auto=format&fit=crop&q=80',
    tags: ['Smoky', 'Chef Favorite']
  },
  {
    id: 'starter-4',
    name: 'Crispy Corn Salt & Pepper',
    category: 'starters',
    categoryLabel: 'Starters',
    description: 'Golden fried sweet corn kernels tossed with crushed black pepper, spring onions, and tangy seasoning.',
    isVeg: true,
    price: '₹260',
    image: 'https://images.unsplash.com/photo-1551248429-40975aa4de74?w=800&auto=format&fit=crop&q=80',
    tags: ['Quick Bite', 'Crunchy']
  },
  {
    id: 'starter-5',
    name: 'Dahi Ke Kebab',
    category: 'starters',
    categoryLabel: 'Starters',
    description: 'Silky hung yoghurt patties with fresh herbs and mild spices, pan-seared with a crunchy golden crust.',
    isVeg: true,
    price: '₹310',
    image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=800&auto=format&fit=crop&q=80',
    tags: ['Melt in Mouth', 'Signature']
  },
  {
    id: 'starter-6',
    name: 'Afghani Chicken Tikka',
    category: 'starters',
    categoryLabel: 'Starters',
    description: 'Boneless tender chicken morsels soaked in creamy cashew nut paste, cheese, and cardamom before char-broiling.',
    isVeg: false,
    price: '₹390',
    image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=800&auto=format&fit=crop&q=80',
    tags: ['Creamy', 'Mild Spiced']
  },

  // Soups & Salads
  {
    id: 'soup-1',
    name: 'Veg Manchow Soup',
    category: 'soups-salads',
    categoryLabel: 'Soups & Salads',
    description: 'Hearty Indo-Chinese spiced soup with finely minced vegetables, garlic, cilantro, and topped with crisp fried noodles.',
    isVeg: true,
    isSpicy: true,
    price: '₹190',
    image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=800&auto=format&fit=crop&q=80',
    tags: ['Spicy', 'Comforting']
  },
  {
    id: 'soup-2',
    name: 'Roasted Tomato Soup',
    category: 'soups-salads',
    categoryLabel: 'Soups & Salads',
    description: 'Velvety vine-ripened plum tomato soup with fresh basil drizzle and butter-toasted herb garlic croutons.',
    isVeg: true,
    price: '₹180',
    image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=800&auto=format&fit=crop&q=80',
    tags: ['Classic', 'Herbaceous']
  },
  {
    id: 'soup-3',
    name: 'Hot & Sour Chicken Soup',
    category: 'soups-salads',
    categoryLabel: 'Soups & Salads',
    description: 'Zesty and peppery dark broth packed with shredded chicken, shiitake mushrooms, bamboo shoots and cracked pepper.',
    isVeg: false,
    isSpicy: true,
    price: '₹220',
    image: 'https://images.unsplash.com/photo-1603105037880-880cd4edfb0d?w=800&auto=format&fit=crop&q=80',
    tags: ['Tangy & Hot']
  },
  {
    id: 'salad-1',
    name: 'Mediterranean Greek Salad',
    category: 'soups-salads',
    categoryLabel: 'Soups & Salads',
    description: 'Crisp iceberg lettuce, English cucumbers, bell peppers, Kalamata black olives, and crumbled feta cheese in extra virgin olive oil vinaigrette.',
    isVeg: true,
    price: '₹260',
    image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=800&auto=format&fit=crop&q=80',
    tags: ['Fresh', 'Healthy']
  },

  // Pizza & Pasta
  {
    id: 'pizza-1',
    name: 'Classic Margherita Pizza',
    category: 'pizza-pasta',
    categoryLabel: 'Pizza & Pasta',
    description: 'Stone-baked thin crust pizza with San Marzano tomato reduction, fresh buffalo mozzarella, aromatic basil, and olive oil drizzle.',
    isVeg: true,
    isChefSpecial: true,
    price: '₹380',
    image: 'https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?w=800&auto=format&fit=crop&q=80',
    tags: ['Stone Baked', 'Artisanal']
  },
  {
    id: 'pizza-2',
    name: 'Paneer Tikka Woodfire Pizza',
    category: 'pizza-pasta',
    categoryLabel: 'Pizza & Pasta',
    description: 'House special fusion pizza topped with tandoori spiced paneer cubes, crunchy red onions, bell peppers, and melted mozzarella.',
    isVeg: true,
    price: '₹440',
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800&auto=format&fit=crop&q=80',
    tags: ['House Special', 'Fusion']
  },
  {
    id: 'pizza-3',
    name: 'Farmhouse Supreme Pizza',
    category: 'pizza-pasta',
    categoryLabel: 'Pizza & Pasta',
    description: 'Loaded with sautéed button mushrooms, sweet corn, tricolor capsicum, jalapeños, and layered mozzarella cheese.',
    isVeg: true,
    price: '₹420',
    image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=800&auto=format&fit=crop&q=80',
    tags: ['Loaded Veg']
  },
  {
    id: 'pasta-1',
    name: 'Penne Alfredo with Wild Mushrooms',
    category: 'pizza-pasta',
    categoryLabel: 'Pizza & Pasta',
    description: 'Al dente penne pasta smothered in a rich garlic Parmesan cream sauce with pan-roasted button mushrooms and fresh parsley.',
    isVeg: true,
    price: '₹360',
    image: 'https://images.unsplash.com/photo-1621996346565-e3d5d62816f1?w=800&auto=format&fit=crop&q=80',
    tags: ['Creamy', 'Parmesan']
  },
  {
    id: 'pasta-2',
    name: 'Spicy Arrabbiata Pasta',
    category: 'pizza-pasta',
    categoryLabel: 'Pizza & Pasta',
    description: 'Penne pasta tossed in a robust crushed tomato sauce infused with chili flakes, garlic, basil, and black olives.',
    isVeg: true,
    isSpicy: true,
    price: '₹340',
    image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=800&auto=format&fit=crop&q=80',
    tags: ['Zesty Tomato']
  },

  // Burgers & Sandwiches
  {
    id: 'sandwich-1',
    name: 'Cheese & Mushroom Sandwich',
    category: 'burgers-sandwiches',
    categoryLabel: 'Burgers & Sandwiches',
    description: 'Toasted artisan sourdough bread layered with sautéed garlic mushrooms, melted aged cheddar, and caramelized onions.',
    isVeg: true,
    isChefSpecial: true,
    price: '₹260',
    image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=800&auto=format&fit=crop&q=80',
    tags: ['Gourmet', 'Cheddar']
  },
  {
    id: 'sandwich-2',
    name: 'Paneer Makhani Sandwich',
    category: 'burgers-sandwiches',
    categoryLabel: 'Burgers & Sandwiches',
    description: 'Grilled multi-grain sandwich packed with spiced paneer tikka chunks glazed in rich butter makhani gravy and mint cream.',
    isVeg: true,
    price: '₹280',
    image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?w=800&auto=format&fit=crop&q=80',
    tags: ['Makhani Glaze', 'Rich']
  },
  {
    id: 'sandwich-3',
    name: 'Chicken Club Sandwich',
    category: 'burgers-sandwiches',
    categoryLabel: 'Burgers & Sandwiches',
    description: 'Triple-decker toasted sandwich with tender herb-roasted chicken, fried egg, crunchy lettuce, tomatoes, and house smoked mayo.',
    isVeg: false,
    price: '₹340',
    image: 'https://images.unsplash.com/photo-1567234669003-dce7a7a88821?w=800&auto=format&fit=crop&q=80',
    tags: ['Triple Decker', 'Hearty']
  },
  {
    id: 'burger-1',
    name: 'Sky Brew Signature Veg Burger',
    category: 'burgers-sandwiches',
    categoryLabel: 'Burgers & Sandwiches',
    description: 'Crispy spiced vegetable patty nestled in toasted brioche buns with cheddar slice, tomato relish, and truffle mayo.',
    isVeg: true,
    price: '₹240',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&auto=format&fit=crop&q=80',
    tags: ['Brioche Bun', 'Crispy']
  },

  // North Indian
  {
    id: 'curry-1',
    name: 'Butter Paneer (Paneer Butter Masala)',
    category: 'north-indian',
    categoryLabel: 'North Indian',
    description: 'Silky smooth cottage cheese cubes cooked in a slow-simmered velvety cashew and sun-ripened tomato gravy with aromatic butter.',
    isVeg: true,
    isChefSpecial: true,
    price: '₹360',
    image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=800&auto=format&fit=crop&q=80',
    tags: ['Royal Favorite', 'Rich & Creamy']
  },
  {
    id: 'curry-2',
    name: 'Matar Paneer',
    category: 'north-indian',
    categoryLabel: 'North Indian',
    description: 'Traditional Punjabi curry featuring sweet green peas and soft paneer cubes in an aromatic onion, ginger and tomato masala.',
    isVeg: true,
    price: '₹320',
    image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=800&auto=format&fit=crop&q=80',
    tags: ['Homestyle Classic']
  },
  {
    id: 'curry-3',
    name: 'Mushroom Masala',
    category: 'north-indian',
    categoryLabel: 'North Indian',
    description: 'Fresh tender button mushrooms tossed with coarse onion-tomato gravy, roasted cumin, and fragrant fenugreek leaves.',
    isVeg: true,
    price: '₹340',
    image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=800&auto=format&fit=crop&q=80',
    tags: ['Robust Masala']
  },
  {
    id: 'curry-4',
    name: 'Royal Kaju Curry',
    category: 'north-indian',
    categoryLabel: 'North Indian',
    description: 'Whole roasted golden cashew nuts simmered in a regal, mildly sweet and fragrant saffron yellow cream gravy.',
    isVeg: true,
    isChefSpecial: true,
    price: '₹390',
    image: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=800&auto=format&fit=crop&q=80',
    tags: ['Royal Specialty', 'Cashew Rich']
  },
  {
    id: 'curry-5',
    name: 'Dal Makhani Slow-Cooked',
    category: 'north-indian',
    categoryLabel: 'North Indian',
    description: 'Whole black urad lentils and kidney beans slow-cooked for 14 hours with churned white butter, cream, and gentle charcoal smoke.',
    isVeg: true,
    price: '₹290',
    image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=800&auto=format&fit=crop&q=80',
    tags: ['14-Hour Dum', 'Must Try']
  },
  {
    id: 'curry-6',
    name: 'Murgh Makhani (Butter Chicken)',
    category: 'north-indian',
    categoryLabel: 'North Indian',
    description: 'Tender tandoor-roasted chicken pieces simmered in an iconic buttery tomato and fenugreek reduction.',
    isVeg: false,
    isChefSpecial: true,
    price: '₹440',
    image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=800&auto=format&fit=crop&q=80',
    tags: ['Iconic', 'Tender Chicken']
  },

  // Biryani
  {
    id: 'biryani-1',
    name: 'Dum Veg Handi Biryani',
    category: 'biryani',
    categoryLabel: 'Biryani',
    description: 'Aromatic long-grain aged basmati rice layered with garden fresh vegetables, saffron milk, fried onions, and whole spices sealed under dough dum.',
    isVeg: true,
    isChefSpecial: true,
    price: '₹320',
    image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=800&auto=format&fit=crop&q=80',
    tags: ['Handi Dum', 'Saffron Rice']
  },
  {
    id: 'biryani-2',
    name: 'Hyderabadi Chicken Dum Biryani',
    category: 'biryani',
    categoryLabel: 'Biryani',
    description: 'Marinated tender chicken steeped in yogurt and Hyderabadi pot spices, layered with fragrant kewra basmati rice and fresh mint.',
    isVeg: false,
    isChefSpecial: true,
    price: '₹410',
    image: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=800&auto=format&fit=crop&q=80',
    tags: ['Signature Dum', 'Juicy Chicken']
  },
  {
    id: 'biryani-3',
    name: 'Paneer Tikka Biryani',
    category: 'biryani',
    categoryLabel: 'Biryani',
    description: 'Smoky clay-oven paneer cubes combined with spiced basmati rice, caramelized shallots, and fragrant cardamom.',
    isVeg: true,
    price: '₹350',
    image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=800&auto=format&fit=crop&q=80',
    tags: ['Tandoori Fusion']
  },

  // Chinese & Asian
  {
    id: 'chinese-1',
    name: 'Chilli Paneer (Dry / Gravy)',
    category: 'chinese',
    categoryLabel: 'Chinese & Asian',
    description: 'Wok-tossed crispy paneer cubes with crunchy bell peppers, onions, spring onions, and spicy garlic dark soya glaze.',
    isVeg: true,
    isSpicy: true,
    price: '₹310',
    image: 'https://images.unsplash.com/photo-1525755662778-989d0524087e?w=800&auto=format&fit=crop&q=80',
    tags: ['Wok Tossed', 'Indo-Chinese']
  },
  {
    id: 'chinese-2',
    name: 'Veg Hakka Noodles',
    category: 'chinese',
    categoryLabel: 'Chinese & Asian',
    description: 'Long silky noodles tossed on high flame with julienned vegetables, white pepper, and light sesame soy sauce.',
    isVeg: true,
    price: '₹240',
    image: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?w=800&auto=format&fit=crop&q=80',
    tags: ['Wok Hei', 'Classic']
  },
  {
    id: 'chinese-3',
    name: 'Schezwan Fried Rice',
    category: 'chinese',
    categoryLabel: 'Chinese & Asian',
    description: 'Steamed rice stir-fried in a fiery wok with home-crafted Schezwan chili paste, crunchy celery, and spring greens.',
    isVeg: true,
    isSpicy: true,
    price: '₹260',
    image: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=800&auto=format&fit=crop&q=80',
    tags: ['Fiery', 'Street Style']
  },
  {
    id: 'chinese-4',
    name: 'Chicken Manchurian',
    category: 'chinese',
    categoryLabel: 'Chinese & Asian',
    description: 'Succulent spiced chicken spheres drenched in a luscious ginger-garlic and dark soy Manchurian sauce.',
    isVeg: false,
    price: '₹360',
    image: 'https://images.unsplash.com/photo-1525755662778-989d0524087e?w=800&auto=format&fit=crop&q=80',
    tags: ['Luscious Glaze']
  },

  // Desserts & Brews
  {
    id: 'dessert-1',
    name: 'Sizzling Hot Brownie with Vanilla Gelato',
    category: 'desserts-brews',
    categoryLabel: 'Desserts & Brews',
    description: 'Dense Belgian chocolate walnut brownie served on a smoking cast-iron platter, drizzled with hot dark fudge sauce and vanilla ice cream.',
    isVeg: true,
    isChefSpecial: true,
    price: '₹260',
    image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=800&auto=format&fit=crop&q=80',
    tags: ['Showstopper', 'Sizzling']
  },
  {
    id: 'dessert-2',
    name: 'Shahi Gulab Jamun (2 pcs)',
    category: 'desserts-brews',
    categoryLabel: 'Desserts & Brews',
    description: 'Warm, melt-in-the-mouth pure mawa dumplings soaked in saffron, rose water, and green cardamom sugar syrup.',
    isVeg: true,
    price: '₹160',
    image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=800&auto=format&fit=crop&q=80',
    tags: ['Warm & Sweet', 'Royal']
  },
  {
    id: 'brew-1',
    name: 'Sky Brew Signature Cold Coffee',
    category: 'desserts-brews',
    categoryLabel: 'Desserts & Brews',
    description: 'Thick creamy espresso blend churned with ice cream, dark mocha ganache and topped with cocoa dusting.',
    isVeg: true,
    price: '₹210',
    image: 'https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?w=800&auto=format&fit=crop&q=80',
    tags: ['Signature Brew', 'Refreshing']
  },
  {
    id: 'brew-2',
    name: 'Blue Pea Herbal Cooler',
    category: 'desserts-brews',
    categoryLabel: 'Desserts & Brews',
    description: 'Color-changing butterfly pea flower tea infused with fresh mint leaves, kaffir lime, and effervescent soda.',
    isVeg: true,
    price: '₹190',
    image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=800&auto=format&fit=crop&q=80',
    tags: ['Artisanal', 'Mocktail']
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g-1',
    title: 'Rooftop Starlit Evening',
    category: 'rooftop',
    imageUrl: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200&auto=format&fit=crop&q=80',
    caption: 'Ambient evening dining overlooking the cityscape of Jabalpur from the 4th floor.',
    span: 'col-span-1 md:col-span-2 row-span-2'
  },
  {
    id: 'g-2',
    title: 'Stone-Baked Artisanal Pizza',
    category: 'food',
    imageUrl: 'https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?w=800&auto=format&fit=crop&q=80',
    caption: 'Crisp crust, gourmet toppings and fresh mozzarella straight from the oven.',
    span: 'col-span-1 row-span-1'
  },
  {
    id: 'g-3',
    title: 'Warm Indoor Lounge Ambience',
    category: 'ambience',
    imageUrl: 'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?w=800&auto=format&fit=crop&q=80',
    caption: 'Contemporary indoor seating with soothing lighting and comfortable booth tables.',
    span: 'col-span-1 row-span-1'
  },
  {
    id: 'g-4',
    title: 'Royal Biryani Pot',
    category: 'food',
    imageUrl: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=800&auto=format&fit=crop&q=80',
    caption: 'Fragrant basmati rice dum cooked with saffron and secret ground spices.',
    span: 'col-span-1 row-span-1'
  },
  {
    id: 'g-5',
    title: 'Crafted Cold Brews & Mocktails',
    category: 'drinks',
    imageUrl: 'https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?w=800&auto=format&fit=crop&q=80',
    caption: 'Signature chilled beverages and iced brews crafted by passionate baristas.',
    span: 'col-span-1 row-span-1'
  },
  {
    id: 'g-6',
    title: 'Paneer Tandoori Tikka Platter',
    category: 'food',
    imageUrl: 'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=800&auto=format&fit=crop&q=80',
    caption: 'Smoky grilled cottage cheese served sizzling with mint chutney and onion rings.',
    span: 'col-span-1 row-span-1'
  },
  {
    id: 'g-7',
    title: 'Open-Air Terrace Table',
    category: 'rooftop',
    imageUrl: 'https://images.unsplash.com/photo-1578474846511-04ba529f0b88?w=800&auto=format&fit=crop&q=80',
    caption: 'A relaxed open breeze atmosphere ideal for couples, friends, and family gatherings.',
    span: 'col-span-1 md:col-span-2 row-span-1'
  },
  {
    id: 'g-8',
    title: 'Sizzling Belgian Brownie',
    category: 'food',
    imageUrl: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=800&auto=format&fit=crop&q=80',
    caption: 'Decadent warm chocolate brownie with vanilla gelato and bubbling fudge drizzle.',
    span: 'col-span-1 row-span-1'
  }
];

export const ABOUT_FEATURES: FeatureItem[] = [
  {
    id: 'f-1',
    title: 'ROOFTOP DINING',
    description: 'Enjoy your meal with an elevated open-air atmosphere and gentle evening breezes on our 4th-floor terrace.',
    icon: 'Sunset'
  },
  {
    id: 'f-2',
    title: 'FLAVOURS FOR EVERY MOOD',
    description: 'From North Indian favourites to Chinese specialties, pizzas, sandwiches, rolls, biryani and handcrafted brews.',
    icon: 'UtensilsCrossed'
  },
  {
    id: 'f-3',
    title: 'PERFECT FOR EVERY OCCASION',
    description: 'Casual meetups, family dinners, birthday celebrations or a memorable evening out with friends in Gwarighat.',
    icon: 'Users'
  },
  {
    id: 'f-4',
    title: 'WARM AMBIENCE',
    description: 'A comfortable setting designed for relaxed dining, combining warm golden lighting with modern aesthetic decor.',
    icon: 'Sparkles'
  }
];

export const WHY_SKY_BREW_STATS: StatItem[] = [
  {
    value: '11 AM – 11 PM',
    label: 'Daily Dining Hours',
    sublabel: 'Open 7 days a week for lunch & dinner'
  },
  {
    value: 'Rooftop',
    label: 'Elevated Dining',
    sublabel: '4th Floor at Satya Raj Pride'
  },
  {
    value: 'Jabalpur',
    label: 'Gwarighat Location',
    sublabel: 'Opposite Guru Govind Singh Khalsa School'
  },
  {
    value: '₹1,500 – ₹1,600',
    label: 'Approx. Dining for Two',
    sublabel: 'Accessible premium multi-cuisine experience'
  }
];

export const FAQS = [
  {
    q: 'Do you offer both open-air rooftop and indoor air-conditioned seating?',
    a: 'Yes, Sky Brew features both a spacious open-air rooftop terrace overlooking the Gwarighat main road area and a comfortable indoor air-conditioned dining lounge.'
  },
  {
    q: 'Is prior table reservation recommended?',
    a: 'While walk-ins are always welcomed, we recommend reserving your table in advance for weekend evenings, group celebrations, or specific rooftop preferences by calling us at +91 99931 11959.'
  },
  {
    q: 'What cuisines are served at Sky Brew?',
    a: 'We offer an extensive multi-cuisine menu featuring North Indian curries, dum biryanis, wood-fired styled pizzas, al dente pastas, gourmet burgers, sandwiches, Chinese wok specials, and handcrafted desserts & cold brews.'
  },
  {
    q: 'Are vegetarian and Jain-friendly options available?',
    a: 'Yes, we provide an extensive variety of pure vegetarian preparations, paneer specialties, tandoori starters, and select dishes can be customized on request.'
  },
  {
    q: 'Can we host birthday parties or family celebrations here?',
    a: 'Yes! Sky Brew is a popular destination for birthday celebrations, anniversaries, and casual get-togethers. Please call our team at +91 99931 11959 to coordinate group arrangements.'
  }
];
