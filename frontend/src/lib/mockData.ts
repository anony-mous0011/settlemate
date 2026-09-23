export interface TenantProfile {
  id: string;
  name: string;
  age: number;
  city: string;
  location: string;
  timeline: string;
  occupation: string;
  occupationIcon: string;
  budget: string;
  budgetNum: number;
  initials: string;
  avatarBg: string;
  reason: string;
  tags: string[];
  lookingFor: string;
  bio: string;
  foodPreference: string;
  smoking: string;
  cleanliness: string;
  sleepSchedule: string;
  guestsPolicy: string;
  isOnline: boolean;
  status: "active" | "connected" | "pending";
}

export interface Property {
  id: string;
  title: string;
  propertyType: string;
  pricePerMonth: number;
  deposit: number;
  location: string;
  city: string;
  amenities: string[];
  availableDate: string;
  ownerName: string;
  ownerType: string;
  responseRate: string;
  imageSrc: string;
  imageTag: string;
  roommatesNeeded: number;
  description: string;
  viewsCount: number;
  enquiriesCount: number;
  status: "Active" | "Occupied" | "Draft";
}

export interface MoveProfile {
  destinationCity: string;
  reason: string;
  preferredAreas: string[];
  budgetMin: number;
  budgetMax: number;
  moveInDate: string;
  flatTypePreference: string;
  lifestyleTags: string[];
}

export interface ConnectionItem {
  id: string;
  user: TenantProfile;
  status: "connected" | "pending_incoming" | "pending_outgoing";
  lastMessage?: string;
  lastMessageTime?: string;
  unreadCount?: number;
  sharedPropertyId?: string;
}

export interface EnquiryItem {
  id: string;
  propertyId: string;
  propertyTitle: string;
  tenantNames: string[];
  tenantInitials: string[];
  moveInTarget: string;
  message: string;
  timestamp: string;
  budget: string;
  status: "New" | "Contacted" | "Viewing Scheduled" | "Closed";
}

export const initialMoveProfile: MoveProfile = {
  destinationCity: "Pune",
  reason: "Coaching / UPSC Preparation",
  preferredAreas: ["Kharadi", "Viman Nagar"],
  budgetMin: 12000,
  budgetMax: 15000,
  moveInDate: "October 2026",
  flatTypePreference: "2BHK Shared Flat",
  lifestyleTags: ["Early riser", "Non-smoker", "Study-focused", "Vegetarian"],
};

export const sampleTenants: TenantProfile[] = [
  {
    id: "t1",
    name: "Aditi R.",
    age: 23,
    city: "Pune",
    location: "Kharadi",
    timeline: "October 2026",
    occupation: "Preparing for UPSC",
    occupationIcon: "🎓",
    budget: "₹12k–15k/mo",
    budgetNum: 14000,
    initials: "AR",
    avatarBg: "#0284c7",
    reason: "Coaching",
    tags: ["Early riser", "Non-smoker", "Study-focused", "Vegetarian"],
    lookingFor: "1 female roommate for a quiet 2BHK in Kharadi",
    bio: "Moving to Pune for full-time civil services prep. Looking for a quiet, structured living environment with study hours respected.",
    foodPreference: "Vegetarian",
    smoking: "Strictly Non-smoker",
    cleanliness: "High / Daily tidy",
    sleepSchedule: "10 PM – 6 AM",
    guestsPolicy: "Quiet weekends only",
    isOnline: true,
    status: "active",
  },
  {
    id: "t2",
    name: "Karan M.",
    age: 24,
    city: "Pune",
    location: "Viman Nagar",
    timeline: "October 2026",
    occupation: "Software Engineer @ EON IT",
    occupationIcon: "💼",
    budget: "₹13k–16k/mo",
    budgetNum: 15000,
    initials: "KM",
    avatarBg: "#059669",
    reason: "Work / Job",
    tags: ["Quiet home", "Neat freak", "Loves cooking", "Runner"],
    lookingFor: "Flatmate for 2BHK/3BHK near EON IT Park",
    bio: "Backend developer relocating from Indore. Like cooking on weekends, keeping the flat clean, and morning jogs.",
    foodPreference: "Flexible / Non-veg friendly",
    smoking: "Non-smoker",
    cleanliness: "Very High",
    sleepSchedule: "11 PM – 7 AM",
    guestsPolicy: "Occasional friends welcome",
    isOnline: true,
    status: "active",
  },
  {
    id: "t3",
    name: "Meera S.",
    age: 22,
    city: "Pune",
    location: "Baner",
    timeline: "November 2026",
    occupation: "UX Designer @ Tech Hub",
    occupationIcon: "🎨",
    budget: "₹11k–14k/mo",
    budgetNum: 13000,
    initials: "MS",
    avatarBg: "#7c3aed",
    reason: "Work / Job",
    tags: ["Pet friendly", "Coffee lover", "Remote work", "Creative"],
    lookingFor: "Friendly flatmate who enjoys a relaxed, plant-filled home",
    bio: "Relocating for design role. WFH 3 days a week. Looking for an open-minded flatmate who enjoys shared dinners and cozy spaces.",
    foodPreference: "Vegetarian / Eggetarian",
    smoking: "Balcony only",
    cleanliness: "Moderate",
    sleepSchedule: "12 AM – 8 AM",
    guestsPolicy: "Friends allowed with heads up",
    isOnline: false,
    status: "active",
  },
  {
    id: "t4",
    name: "Rohit K.",
    age: 25,
    city: "Pune",
    location: "Kharadi",
    timeline: "October 2026",
    occupation: "Financial Analyst @ Barclays",
    occupationIcon: "📊",
    budget: "₹14k–18k/mo",
    budgetNum: 16000,
    initials: "RK",
    avatarBg: "#d97706",
    reason: "Work / Job",
    tags: ["Gym enthusiast", "Non-smoker", "Has car parking need"],
    lookingFor: "Working professional for gated society 2BHK",
    bio: "Finance professional shifting from Mumbai. Very disciplined routine, hits the gym early, looking for a gated society flat.",
    foodPreference: "High protein / Flexible",
    smoking: "Non-smoker",
    cleanliness: "High",
    sleepSchedule: "10:30 PM – 6:30 AM",
    guestsPolicy: "Weekends only",
    isOnline: true,
    status: "connected",
  },
  {
    id: "t5",
    name: "Tanya S.",
    age: 23,
    city: "Pune",
    location: "Viman Nagar",
    timeline: "October 2026",
    occupation: "Chartered Accountant",
    occupationIcon: "📈",
    budget: "₹12k–15k/mo",
    budgetNum: 14000,
    initials: "TS",
    avatarBg: "#db2777",
    reason: "Work / Job",
    tags: ["Yoga lover", "Organised", "Quiet evenings"],
    lookingFor: "Clean, non-smoking female roommate for 2BHK",
    bio: "Starting with a Big 4 firm in Pune. Clean habits, peaceful atmosphere, love yoga and reading in the evenings.",
    foodPreference: "Vegetarian",
    smoking: "Non-smoker",
    cleanliness: "Very High",
    sleepSchedule: "11 PM – 7 AM",
    guestsPolicy: "Quiet visits only",
    isOnline: false,
    status: "active",
  },
  {
    id: "t6",
    name: "Siddharth B.",
    age: 26,
    city: "Pune",
    location: "Hinjawadi",
    timeline: "November 2026",
    occupation: "Product Manager @ SaaS",
    occupationIcon: "🚀",
    budget: "₹15k–20k/mo",
    budgetNum: 18000,
    initials: "SB",
    avatarBg: "#475569",
    reason: "Work / Job",
    tags: ["Foodie", "Weekend sports", "Fast Wi-Fi need"],
    lookingFor: "Tech professional to co-lease a premium 3BHK flat",
    bio: "Product guy moving from Bengaluru. Need reliable Wi-Fi, great society amenities, and easy commute to Phase 1.",
    foodPreference: "All food welcome",
    smoking: "Non-smoker",
    cleanliness: "High",
    sleepSchedule: "12 AM – 7:30 AM",
    guestsPolicy: "Weekend chill sessions welcome",
    isOnline: true,
    status: "active",
  },
];

export const sampleProperties: Property[] = [
  {
    id: "p1",
    title: "Spacious 2BHK with Scenic Balcony & Modular Kitchen",
    propertyType: "2BHK Shared Flat",
    pricePerMonth: 14500,
    deposit: 29000,
    location: "Kharadi, near EON IT Park",
    city: "Pune",
    amenities: ["📶 300 Mbps Wi-Fi", "🛋️ Semi-Furnished", "🌅 Balcony", "⚡ Power Backup"],
    availableDate: "Oct 1, 2026",
    ownerName: "Rajesh Kulkarni",
    ownerType: "Direct Owner",
    responseRate: "Responds in < 30m",
    imageSrc: "/pic1.jpg",
    imageTag: "Direct Owner Listing",
    roommatesNeeded: 1,
    description: "Located 5 mins from EON IT Park. High floor flat with panoramic views, spacious master bedrooms, piped gas, and gated 24/7 security.",
    viewsCount: 142,
    enquiriesCount: 9,
    status: "Active",
  },
  {
    id: "p2",
    title: "Sunlit Designer 2BHK near Symbiosis Campus",
    propertyType: "2BHK Flat",
    pricePerMonth: 16500,
    deposit: 33000,
    location: "Viman Nagar",
    city: "Pune",
    amenities: ["❄️ Air Conditioned", "🏊 Pool & Gym", "🚗 Reserved Parking", "🛡️ 24/7 Security"],
    availableDate: "Oct 15, 2026",
    ownerName: "Priya Deshmukh",
    ownerType: "Direct Owner",
    responseRate: "Responds in < 1 hr",
    imageSrc: "/pic 2.jpg",
    imageTag: "Direct Owner Listing",
    roommatesNeeded: 1,
    description: "Walking distance to Symbiosis and Phoenix Mall. Furnished living area with AC in both bedrooms. Ideal for students and young professionals.",
    viewsCount: 98,
    enquiriesCount: 6,
    status: "Active",
  },
  {
    id: "p3",
    title: "Premium 3BHK Gated Society on High Street",
    propertyType: "3BHK Flat",
    pricePerMonth: 25500,
    deposit: 51000,
    location: "Baner - High Street",
    city: "Pune",
    amenities: ["🛋️ Fully Furnished", "⚡ Power Backup", "🍳 Modular Kitchen", "🧹 Maid Included"],
    availableDate: "Nov 1, 2026",
    ownerName: "Amitabh Sen",
    ownerType: "Direct Owner",
    responseRate: "Responds in < 2 hrs",
    imageSrc: "/pic3.jpg",
    imageTag: "Direct Owner Listing",
    roommatesNeeded: 2,
    description: "Prime Baner location with Italian marble flooring, 3 attached baths, modular kitchen with chimney, and 100% DG power backup.",
    viewsCount: 215,
    enquiriesCount: 14,
    status: "Active",
  },
  {
    id: "p4",
    title: "Cozy 2BHK Apartment with Natural Wood Interiors",
    propertyType: "2BHK Flat",
    pricePerMonth: 15000,
    deposit: 30000,
    location: "Kharadi, Central Avenue",
    city: "Pune",
    amenities: ["📶 High Speed Wi-Fi", "🛋️ Furnished", "🚿 Geyser", "⚡ Inverter Backup"],
    availableDate: "Oct 5, 2026",
    ownerName: "Rajesh Kulkarni",
    ownerType: "Direct Owner",
    responseRate: "Responds in < 15m",
    imageSrc: "/pic4.jpg",
    imageTag: "Direct Owner Listing",
    roommatesNeeded: 1,
    description: "Peaceful residential tower with private garden access. Modern wood finish throughout the flat.",
    viewsCount: 88,
    enquiriesCount: 5,
    status: "Active",
  },
  {
    id: "p5",
    title: "Luxury 3BHK with Green Views & Club House",
    propertyType: "3BHK Shared Flat",
    pricePerMonth: 27000,
    deposit: 54000,
    location: "Koregaon Park Annexe",
    city: "Pune",
    amenities: ["🌳 Garden View", "🏋️ Club Gym", "❄️ 3 ACs", "🚗 2 Car Parking"],
    availableDate: "Oct 20, 2026",
    ownerName: "Sunita Kapoor",
    ownerType: "Direct Owner",
    responseRate: "Responds in < 45m",
    imageSrc: "/pic5.jpg",
    imageTag: "Direct Owner Listing",
    roommatesNeeded: 2,
    description: "Exclusive gated enclave in Koregaon Park Annexe with clubhouse, swimming pool, and lush green surrounding trees.",
    viewsCount: 176,
    enquiriesCount: 11,
    status: "Active",
  },
  {
    id: "p6",
    title: "Modern Minimalist 2BHK near Metro Terminal",
    propertyType: "2BHK Flat",
    pricePerMonth: 17000,
    deposit: 34000,
    location: "Viman Nagar",
    city: "Pune",
    amenities: ["🚇 200m to Metro", "🍳 Chimney & Hob", "🛋️ Sofa Set", "🛡️ CCTV"],
    availableDate: "Nov 5, 2026",
    ownerName: "Rajesh Kulkarni",
    ownerType: "Direct Owner",
    responseRate: "Responds in < 1 hr",
    imageSrc: "/pic6.jpg",
    imageTag: "Direct Owner Listing",
    roommatesNeeded: 1,
    description: "Ultra-connected location directly opposite the metro station. Freshly painted with brand new kitchen fittings.",
    viewsCount: 110,
    enquiriesCount: 7,
    status: "Active",
  },
  {
    id: "p7",
    title: "Airy 2BHK with Terrace Balcony & Work Pods",
    propertyType: "2BHK Flat",
    pricePerMonth: 16000,
    deposit: 32000,
    location: "Baner",
    city: "Pune",
    amenities: ["💻 Work Desks", "⚡ 100% Power Backup", "🌅 Terrace", "📶 500Mbps"],
    availableDate: "Oct 10, 2026",
    ownerName: "Vandana Sharma",
    ownerType: "Direct Owner",
    responseRate: "Responds in < 20m",
    imageSrc: "/pic7.jpg",
    imageTag: "Direct Owner Listing",
    roommatesNeeded: 1,
    description: "Designed specifically for remote working duos. Large terrace balcony overlooking Baner Hills.",
    viewsCount: 165,
    enquiriesCount: 10,
    status: "Active",
  },
  {
    id: "p8",
    title: "Executive 3BHK Penthouse Share for Young Movers",
    propertyType: "3BHK Flat",
    pricePerMonth: 30000,
    deposit: 60000,
    location: "Kharadi, Riverfront",
    city: "Pune",
    amenities: ["🌇 Penthouse Deck", "🛋️ Fully Furnished", "🧹 Daily Housekeeping", "⚡ 24/7 Power"],
    availableDate: "Nov 1, 2026",
    ownerName: "Rohit Agarwal",
    ownerType: "Direct Owner",
    responseRate: "Responds in < 30m",
    imageSrc: "/pic8.jpg",
    imageTag: "Direct Owner Listing",
    roommatesNeeded: 2,
    description: "Top floor duplex penthouse with private terrace deck, home theater lounge, and riverfront sunrise views.",
    viewsCount: 290,
    enquiriesCount: 18,
    status: "Active",
  },
];

export const sampleConnections: ConnectionItem[] = [
  {
    id: "c1",
    user: sampleTenants[1], // Karan
    status: "connected",
    lastMessage: "Checked out the 2BHK on Eon IT road — looks great! Want to do a site visit this Saturday?",
    lastMessageTime: "10:42 AM",
    unreadCount: 2,
    sharedPropertyId: "p1",
  },
  {
    id: "c2",
    user: sampleTenants[3], // Rohit
    status: "connected",
    lastMessage: "I spoke to the owner Rajesh Kulkarni. Rent is ₹14,500 total, so ₹7,250 each. Deposit is 2 months.",
    lastMessageTime: "Yesterday",
    unreadCount: 0,
    sharedPropertyId: "p1",
  },
  {
    id: "c3",
    user: sampleTenants[4], // Tanya
    status: "pending_incoming",
    lastMessage: "Hi Aditi! I'm also preparing for exams in Pune from October. Would love to connect regarding Kharadi housing.",
    lastMessageTime: "2 hours ago",
    unreadCount: 1,
  },
  {
    id: "c4",
    user: sampleTenants[2], // Meera
    status: "pending_outgoing",
    lastMessage: "Connection request sent for Baner co-living.",
    lastMessageTime: "Sep 20",
  },
];

export const sampleEnquiries: EnquiryItem[] = [
  {
    id: "e1",
    propertyId: "p1",
    propertyTitle: "Spacious 2BHK with Scenic Balcony (Kharadi)",
    tenantNames: ["Aditi R.", "Karan M."],
    tenantInitials: ["AR", "KM"],
    moveInTarget: "Oct 1, 2026",
    message: "Hi Rajesh ji, we are two working professionals moving to Pune in October. We love the flat photos and would like to schedule a physical visit this Saturday.",
    timestamp: "Today, 11:15 AM",
    budget: "₹14,500 / month matched",
    status: "New",
  },
  {
    id: "e2",
    propertyId: "p4",
    propertyTitle: "Cozy 2BHK Apartment (Central Avenue)",
    tenantNames: ["Rohit K.", "Siddharth B."],
    tenantInitials: ["RK", "SB"],
    moveInTarget: "Oct 5, 2026",
    message: "Hello, is reserved covered car parking available with this unit? We are looking for an 11-month registered agreement.",
    timestamp: "Yesterday, 4:20 PM",
    budget: "₹15,000 / month matched",
    status: "Viewing Scheduled",
  },
  {
    id: "e3",
    propertyId: "p6",
    propertyTitle: "Modern Minimalist 2BHK (Viman Nagar)",
    tenantNames: ["Tanya S."],
    tenantInitials: ["TS"],
    moveInTarget: "Nov 1, 2026",
    message: "Looking to rent for long term. Are pure vegetarian tenants preferred?",
    timestamp: "Sep 21, 2:30 PM",
    budget: "₹17,000 / month matched",
    status: "Contacted",
  },
];
