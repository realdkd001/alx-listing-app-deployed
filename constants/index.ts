import { 
  PropertyProps, 
  SearchField, 
  NAVITEMSFIELD, 
  FormDetailsProp,
  PaymentDetailsProp,
  FooterNavLinks, NavLinks as NavField } from "../interfaces";

export const HEROIMAGESRC = "/assets/heroImage.png";
export const CaseMinimalistic = "/assets/icons/Case Minimalistic.svg"
export const Logo = "/assets/icons/logo.svg"
export const Star = "/assets/icons/star.svg"
export const LogoWhite = "/assets/icons/logo-white.svg"
export const ArrowLeft = "/assets/icons/ArrowLeft.svg"
export const Profile = "/assets/icons/profile.svg"
export const MagniferIcon = "/assets/icons/Magnifer.svg"
export const HeaderNotificationText = "Overseas trips? Get the latest information on travel guide";

export const FILTERS: string[] = ["All", "Top Villa", "Self Check-in"];

export const PaymentDetails: PaymentDetailsProp[] = [
   {
    placeholder: "Expiration date",
    type: "text"
  },
   {
    placeholder: "CVV",
    type: "text"
  }
]

export const ContactDetails: FormDetailsProp[] = [
  {
    label: "First Name",
    type: "text",
  
  },
  {
    label: "Last Name",
    type: "text",
  },
  {
    label: "Email",
    type: "email",
    
  },
  {
    label: "Phone Number",
    type: "text",
    
  }
]

export const BillingAddressDetails: FormDetailsProp[] = [
  {
    label: "City",
    type: "text",
  
  },
  {
    label: "state",
    type: "text",
  },
  {
    label: "ZipCode",
    type: "text",
    
  },
  {
    label: "Country",
    type: "text",
    
  }
]

export const ButtomNavLinks: NavField[] = [
  {
    text: "Terms of Service",
    link: "/"
  },
  {
    text: "Policy Service",
    link: "/"
  },
  {
    text: "Cookies Policy",
    link: "/"
  }
]

export const NavLinks: FooterNavLinks[] = [
  {
    title: "Explore",
    links: [
      {
        text: "Apartment in Dubai",
        link: "/"
      },
      {
        text: "Hotels in New York",
        link: "/"
      },
      {
        text: "Villa in Spain",
        link: "/"
      },
      {
        text: "Mansion in Indonesia",
        link: "/"
      },
    ]
  },
  {
    title: "Company",
    links: [
      {
        text: "About Us",
        link: "/"
      },
      {
        text: "Blog",
        link: "/"
      },
      {
        text: "Career",
        link: "/"
      },
      {
        text: "Customers",
        link: "/"
      },
      {
        text: "Brand",
        link: "/"
      },
    ]
  },
  {
    title: "Help",
    links: [
      {
        text: "Support",
        link: "/"
      },
      {
        text: "Cancel booking",
        link: "/"
      },
    ]
  },

]

export const NAVITEMS: NAVITEMSFIELD[] = [
  {
    title: "Rooms",
    imgsrc: "/assets/icons/living-room.svg",
  },
  {
    title: "Mansion",
    imgsrc: "/assets/icons/mansion.svg",
  },
  {
    title: "Countryside",
    imgsrc: "/assets/icons/countryside.svg",
  },
  {
    title: "Villa",
    imgsrc: "/assets/icons/villa.svg",
  },
  {
    title: "Tropical",
    imgsrc: "/assets/icons/tropical.svg",
  },
  {
    title: "New",
    imgsrc: "/assets/icons/new.svg",
  },
  {
    title: "Amazing pool",
    imgsrc: "/assets/icons/amazing-pool.svg",
  },
  {
    title: "Beach house",
    imgsrc: "/assets/icons/beach-house.svg",
  },
  {
    title: "Island",
    imgsrc: "/assets/icons/island.svg",
  },
  {
    title: "Camping",
    imgsrc: "/assets/icons/camping.svg",
  },
  {
    title: "House",
    imgsrc: "/assets/icons/house.svg",
  },
  {
    title: "Lakefront",
    imgsrc: "/assets/icons/lakefront.svg",
  },
  {
    title: "Treehouse",
    imgsrc: "/assets/icons/treehouse.svg",
  },
  {
    title: "Cabins",
    imgsrc: "/assets/icons/cabin.svg",
  },
  {
    title: "Castles",
    imgsrc: "/assets/icons/castles.svg",
  },
]
export const SEARCHFIELDXL: SearchField[] = [
  {
    tag: "location",
    type: "text",
    label: "Location",
    placeholder: "Location"
  },
  {
    tag: "check_in",
    type: "date",
    label: "Check in",
    placeholder: "Add date"
  },
  {
    tag: "check_out",
    type: "date",
    label: "Check out",
    placeholder: "Add date"
  },
  {
    tag: "people",
    type: "text",
    label: "People",
    placeholder: "Add guest"
  }
]

export const SEARCHFIELDSM: SearchField[] = [
  {
    tag: "location",
    label: "Where to",
    type: "text",
    placeholder: "Location"
  },
  {
    tag: "check_out",
    label: "",
    type: "date",
    placeholder: "Date"
  },
  {
    tag: "people",
    label: "",
    type: "text",
    placeholder: "Add guest"
  }
]



export const PROPERTYLISTINGSAMPLE: PropertyProps[] = [
  {
    id: 1,
    name: "Villa Ocean Breeze",
    description:
      "A luxury beachfront villa with panoramic ocean views and private pool. Perfect for family getaways.",
    reviews: [
      {
        rating: 4.5,
        comment: "Great Property",
        name: "Daniel",
        avatar: "https://realdkd.com",
      },
    ],
    address: {
      state: "Seminyak",
      city: "Bali",
      country: "Indonesia",
    },
    rating: 4.89,
    category: ["Luxury Villa", "Pool", "Free Parking"],
    price: 3200,
    offers: {
      bed: "3",
      shower: "3",
      occupants: "4-6",
    },
    image: "/assets/image 2.png",
    discount: "",
  },
  {
    id: 2,
    name: "Mountain Escape Chalet",
    description:
      "A cozy mountain retreat with stunning views and warm fireplaces for the perfect winter vacation.",
    address: {
      state: "Aspen",
      city: "Colorado",
      country: "USA",
    },
    rating: 4.7,
    category: ["Mountain View", "Fireplace", "Self Checkin"],
    price: 1800,
    offers: {
      bed: "4",
      shower: "2",
      occupants: "5-7",
    },
    
    image: "/assets/image 3.png",
    discount: "30",
  },
  {
    id: 3,
    name: "Cozy Desert Retreat",
    description:
      "Escape to this peaceful desert oasis with breathtaking sunset views and private outdoor seating.",
    address: {
      state: "Palm Springs",
      city: "California",
      country: "USA",
    },
    rating: 4.92,
    category: ["Desert View", "Pet Friendly", "Self Checkin"],
    price: 1500,
    offers: {
      bed: "2",
      shower: "1",
      occupants: "2-3",
    },
    image: "/assets/image 4.png",
    discount: "",
  },
  {
    id: 4,
    name: "City Lights Penthouse",
    description:
      "A sleek modern penthouse with panoramic city views, perfect for business travelers or couples.",
    address: {
      state: "New York",
      city: "New York",
      country: "USA",
    },
    rating: 4.85,
    category: ["City View", "Free WiFi", "24h Checkin"],
    price: 4500,
    offers: {
      bed: "2",
      shower: "2",
      occupants: "2-4",
    },
    image: "/assets/image 5.png",
    discount: "15",
  },
  {
    id: 5,
    name: "Riverside Cabin",
    description:
      "Relax by the river in this peaceful cabin featuring a private dock and kayaking access.",
    address: {
      state: "Queenstown",
      city: "Otago",
      country: "New Zealand",
    },
    rating: 4.77,
    category: ["Riverside", "Private Dock", "Free Kayaks"],
    price: 2800,
    offers: {
      bed: "3",
      shower: "2",
      occupants: "4-6",
    },
    image: "/assets/image 1.png",
    discount: "20",
  },
  {
    id: 6,
    name: "Modern Beachfront Villa",
    description:
      "An elegant beachfront villa with private infinity pool and in-house chef service.",
    address: {
      state: "Sidemen",
      city: "Bali",
      country: "Indonesia",
    },
    rating: 4.95,
    category: ["Beachfront", "Private Pool", "Chef Service"],
    price: 5000,
    offers: {
      bed: "5",
      shower: "4",
      occupants: "8-10",
    },
    image: "/assets/image 6.png",
    discount: "",
  },
  {
    id: 7,
    name: "Lakeside Chalet",
    description:
      "A cozy lakeside retreat with mountain views and hiking trails nearby.",
    address: {
      state: "Banff",
      city: "Alberta",
      country: "Canada",
    },
    rating: 4.65,
    category: ["Lakeside", "Mountain View", "Hiking Trails"],
    price: 2300,
    offers: {
      bed: "3",
      shower: "3",
      occupants: "4-5",
    },
    image: "/assets/image 7.png",
    discount: "10",
  },
  {
    id: 8,
    name: "Tropical Garden Villa",
    description:
      "Surround yourself with lush greenery in this private tropical garden villa.",
    address: {
      state: "Koh Samui",
      city: "Surat Thani",
      country: "Thailand",
    },
    rating: 4.8,
    category: ["Garden", "Free Parking", "Self Checkin"],
    price: 2750,
    offers: {
      bed: "3",
      shower: "3",
      occupants: "5-6",
    },
    image: "/assets/image 8.png",
    discount: "25",
  },
  {
    id: 9,
    name: "Urban Loft",
    description:
      "A trendy loft in the heart of Berlin, offering easy access to nightlife and culture.",
    address: {
      state: "Berlin",
      city: "Berlin",
      country: "Germany",
    },
    rating: 4.6,
    category: ["City Center", "Free WiFi", "24h Checkin"],
    price: 2000,
    offers: {
      bed: "2",
      shower: "1",
      occupants: "2-3",
    },
    image: "/assets/image 9.png",
    discount: "",
  },
  {
    id: 10,
    name: "Secluded Forest Cabin",
    description:
      "Hidden deep in the forest, this cabin offers a private escape with a hot tub and fire pit.",
    address: {
      state: "Whistler",
      city: "British Columbia",
      country: "Canada",
    },
    rating: 4.72,
    category: ["Secluded", "Hot Tub", "Self Checkin"],
    price: 2600,
    offers: {
      bed: "4",
      shower: "2",
      occupants: "5-7",
    },
    image: "/assets/image 10.png",
    discount: "40",
  },
  {
    id: 11,
    name: "Cliffside Villa",
    description:
      "A stunning cliffside villa overlooking the Amalfi Coast, featuring an infinity pool.",
    address: {
      state: "Amalfi",
      city: "Salerno",
      country: "Italy",
    },
    rating: 4.93,
    category: ["Cliffside", "Infinity Pool", "Sea View"],
    price: 6000,
    offers: {
      bed: "4",
      shower: "4",
      occupants: "6-8",
    },
    image: "/assets/image 11.png",
    discount: "50",
  },
  {
    id: 12,
    name: "Coastal Escape Villa",
    description:
      "A modern beachfront property perfect for families and couples seeking relaxation.",
    address: {
      state: "Noosa",
      city: "Queensland",
      country: "Australia",
    },
    rating: 4.83,
    category: ["Beachfront", "Pet Friendly", "Free Parking"],
    price: 3400,
    offers: {
      bed: "3",
      shower: "3",
      occupants: "4-6",
    },
    image: "/assets/image 12.png",
    discount: "",
  },
  {
    id: 13,
    name: "Historical Villa",
    description:
      "A beautifully restored villa in Florence, combining old-world charm with modern amenities.",
    address: {
      state: "Florence",
      city: "Tuscany",
      country: "Italy",
    },
    rating: 4.67,
    category: ["Historical", "Free Breakfast", "Self Checkin"],
    price: 2700,
    offers: {
      bed: "2",
      shower: "2",
      occupants: "2-4",
    },
    image: "/assets/image 13.png",
    discount: "35",
  },
  {
    id: 14,
    name: "Downtown Apartment",
    description:
      "A minimalist apartment in Tokyo’s city center, ideal for business or leisure stays.",
    address: {
      state: "Tokyo",
      city: "Tokyo",
      country: "Japan",
    },
    rating: 4.81,
    category: ["City Center", "Free WiFi", "Public Transport"],
    price: 2200,
    offers: {
      bed: "1",
      shower: "1",
      occupants: "2",
    },
    image: "/assets/image 14.png",
    discount: "",
  },
  {
    id: 15,
    name: "Luxury Safari Lodge",
    description:
      "Experience the wild in style at this safari lodge offering guided tours and stunning views.",
    address: {
      state: "Serengeti",
      city: "Mara",
      country: "Tanzania",
    },
    rating: 4.97,
    category: ["Safari", "Guided Tours", "Free Breakfast"],
    price: 4500,
    offers: {
      bed: "4",
      shower: "4",
      occupants: "6-8",
    },
    image: "/assets/image 15.png",
    discount: "20",
  },
  {
    id: 16,
    name: "Countryside Cottage",
    description:
      "A charming countryside cottage with a cozy fireplace and scenic surroundings.",
    address: {
      state: "Cotswolds",
      city: "Gloucestershire",
      country: "UK",
    },
    rating: 4.58,
    category: ["Countryside", "Fireplace", "Self Checkin"],
    price: 1800,
    offers: {
      bed: "2",
      shower: "1",
      occupants: "2-4",
    },
    image: "/assets/image 16.png",
    discount: "25",
  },
  {
    id: 17,
    name: "Riverfront Mansion",
    description:
      "A stunning riverfront property in Paris with private garden and luxury interiors.",
    address: {
      state: "Paris",
      city: "Île-de-France",
      country: "France",
    },
    rating: 4.86,
    category: ["Riverfront", "Private Garden", "Self Checkin"],
    price: 5000,
    offers: {
      bed: "4",
      shower: "3",
      occupants: "6-8",
    },
    image: "/assets/image 17.png",
    discount: "30",
  },
  {
    id: 18,
    name: "Ski Chalet",
    description:
      "Enjoy direct ski access from this cozy chalet with panoramic alpine views.",
    address: {
      state: "Zermatt",
      city: "Valais",
      country: "Switzerland",
    },
    rating: 4.75,
    category: ["Mountain View", "Ski Access", "Fireplace"],
    price: 3900,
    offers: {
      bed: "3",
      shower: "3",
      occupants: "4-5",
    },
    image: "/assets/image 18.png",
    discount: "",
  },
  {
    id: 19,
    name: "Island Paradise Villa",
    description:
      "An exclusive island retreat with private pool, chef service, and beach access.",
    address: {
      state: "Mahe",
      city: "Victoria",
      country: "Seychelles",
    },
    rating: 4.98,
    category: ["Beachfront", "Private Pool", "Chef Service"],
    price: 6500,
    offers: {
      bed: "5",
      shower: "5",
      occupants: "8-10",
    },
    image: "/assets/image 19.png",
    discount: "60",
  },
  {
    id: 20,
    name: "Clifftop Retreat",
    description:
      "A luxury hideaway perched on a cliff with sweeping ocean views and private infinity pool.",
    address: {
      state: "Cape Town",
      city: "Western Cape",
      country: "South Africa",
    },
    rating: 4.78,
    category: ["Ocean View", "Private Pool", "Self Checkin"],
    price: 4100,
    offers: {
      bed: "3",
      shower: "3",
      occupants: "4-5",
    },
    image: "/assets/image 20.png",
    discount: "",
  },
]
