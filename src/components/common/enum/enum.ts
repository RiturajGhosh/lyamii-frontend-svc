import { HeaderList } from "../header/Header";

export enum axiosType {
  get = "get",
  post = "post",
  put = "put",
  delete = "delete",
}
// 8193043551
export const exploreDescription =
  "Explore stunning destinations, from exotic tropical paradises to historic landmarks and vibrant cityscapes with Lyamii.";

export const mapDescription =
  "It is an invitation to expand the horizons of your existence and witness the remarkable resilience of human spirit. Through travel, we become citizens of the world, the best version of ourselves.";

export const reasons = [
  {
    title: "Global Reach",
    img: require("../../../Assets/globe.png"),
    description:
      "Our global accommodation covers 77+ countries. 500+ volunteers are always there to assist you on the way. Find comfort wherever you wander.",
  },
  {
    title: "Complete Tours",
    img: require("../../../Assets/tick1.png"),
    description:
      "The traveller ID solves all your headaches. Travel Insurance? Sorted. Air Tickets? Done. Government Documentation? Checked. All stays? Covered. Pack your bag and leave the rest to us.",
  },
  {
    title: "Secure & Convenient",
    img: require("../../../Assets/fingerprint1.png"),
    description:
      "Experience secure and seamless transactions. Enjoy convenience and peace of mind with our online/offline payment model. Embrace effortless currency exchange in our Journey of a Lifetime tours.",
  },
  {
    title: "Has something for Everyone",
    img: require("../../../Assets/giftbox.png"),
    description:
      "Lyamii presents vacations for everyone, to everywhere. Do not hesitate to dive into the exploration of yourself. Scroll through snow, ocean, wildlife, alleys and select your journey. You have us to handle the rest.",
  },
];

export const facilities = [
  require("../../../Assets/bell.png"),
  require("../../../Assets/car.png"),
  require("../../../Assets/house.png"),
  require("../../../Assets/boat.png"),
  require("../../../Assets/notepad.png"),
  require("../../../Assets/food.png"),
  require("../../../Assets/police.png"),
];
export const paths = [
  "/signup",
  "/login",
  "/addHotel",
  "/addHostel",
  "/profile",
  "/faqs"
];
export const reviews = [
  {
    name: "Sarah M",
    review:
      "I had an amazing experience booking my vacation through this website. The user-friendly interface made it super easy to browse through various destinations and find the perfect package for my family. The customer support team was incredibly helpful in answering all my questions and providing recommendations. Our trip went off without a hitch, and I can't wait to use this website again for my next adventure!",
  },
  {
    name: "John D",
    review:
      "Overall, a great travel booking website! I found some fantastic deals and discounts on flights and hotels for my recent solo trip. The search filters were handy for narrowing down my options, and the booking process was smooth. The only reason I'm not giving it 5 stars is that I encountered a minor issue with my hotel reservation, but the customer support team promptly resolved it. I'd definitely use this website again for my next getaway.",
  },
  {
    name: "Lisa T",
    review:
      "This website has a wide range of travel options, but my experience was a bit mixed. I found a great deal on a tour package to a beautiful destination, but the booking process felt a bit clunky, and I had some trouble with payment processing. Eventually, I managed to secure my reservation with the help of customer support, but it was a bit frustrating. On the positive side, the tour itself was fantastic, and the local guides were knowledgeable and friendly.",
  },
];

export const communities: HeaderList[] = [
  { name: "About us", path: "/aboutus" },
  { name: "Our Mission", path: "/mission" },
  { name: "Join us", path: "/joinus" },
  { name: "Reviews", path: "/reviews" },
];

export const mustReads: HeaderList[] = [
  { name: "Terms and conditions", path: "/termconditions" },
  { name: "Privacy policy", path: "/privacypolicy" },
  { name: "Cancellation policy", path: "/cancellationpolicy" },
  { name: "Refund policy", path: "/refundpolicy" },
  { name: "FAQ", path: "/" },
];
export const supports: HeaderList[] = [
  { name: "My Profile", path: "/login" },
  { name: "Helpdesk", path: "/helpdesk" },
  { name: "Feedback", path: "/feedback" },
];

export const journeyOptions = [
  {
    name: "ROYAL BHARAT EDITION",
    path: require("../../../Assets/bharat.png"),
  },
  {
    name: "BACKPACKERS EDITION",
    path: require("../../../Assets/backpackers.jpeg"),
  },
  {
    name: "COMBOS",
    path: require("../../../Assets/combo.jpeg"),
  },
];

export const internationalTours = [
  {
    from: "IND",
    to: "Egypt",
    path: "",
  },
  {
    from: "IND",
    to: "Japan",
    path: "",
  },
  {
    from: "IND",
    to: "Turkey",
    path: "",
  },
  {
    from: "IND",
    to: "Cambodia",
    path: "",
  },
  {
    from: "IND",
    to: "United Kingdom",
    path: "",
  },
  {
    from: "IND",
    to: "Iceland",
    path: "",
  },
  {
    from: "IND",
    to: "Norway",
    path: "",
  },
  {
    from: "IND",
    to: "Hungary",
    path: "",
  },
  {
    from: "IND",
    to: "Montenegro",
    path: "",
  },
  {
    from: "IND",
    to: "Albania",
    path: "",
  },
  {
    from: "IND",
    to: "Romania",
    path: "",
  },
  {
    from: "IND",
    to: "South Korea",
    path: "",
  },
  {
    from: "IND",
    to: "Cyprus ",
    path: "",
  },
  {
    from: "IND",
    to: "Malta",
    path: "",
  },
  {
    from: "IND",
    to: "Belgium",
    path: "",
  },
  {
    from: "IND",
    to: "Croatia",
    path: "",
  },
  {
    from: "IND",
    to: "Uzbekistan",
    path: "",
  },
  {
    from: "IND",
    to: "Russia",
    path: "",
  },
  {
    from: "IND",
    to: "Bolivia",
    path: "",
  },
  {
    from: "IND",
    to: "Ireland",
    path: "",
  },
  {
    from: "IND",
    to: "Baltic States",
    path: "",
  },
  {
    from: "IND",
    to: "Sri Lanka",
    path: "",
  },
  {
    from: "IND",
    to: "Vietnam",
    path: "",
  },
  {
    from: "IND",
    to: "Thailand",
    path: "",
  },
  {
    from: "IND",
    to: "Indonesia ",
    path: "",
  },
];

export const bharatTours = [
  {
    from: "kolkatal",
    to: "delhi",
    days: "15",
    priceInUSD: "12,000 USD",
    priceInEUR: "11,500 EUR",
    priceInAED: "45,000 AED",
    img: "",
    places: [
      "Kolkatal",
      "Kolkata",
      "Hyderabad",
      "Hyderabad",
      "Kerala Backwaters",
      "Kerala Backwaters",
      "Mumbai",
      "Mumbai",
      "Udaipur",
      "Jodhpur",
      "Jodhpur",
      "Jaipur",
      "Jaipur",
      "Lucknow",
      "Agra",
      "Delhi",
      "Delhi",
    ],
  },
  {
    from: "kolkata",
    to: "delhi",
    days: "20",
    priceInUSD: "15,000 USD",
    priceInEUR: "14,500 EUR",
    priceInAED: "55,000 AED",
    img: "",
    places: [
      "Kolkata",
      "Andaman Nicobar",
      "Andaman Nicobar",
      "Kolkata",
      "Varanasi",
      "Varanasi",
      "Hyderabad",
      "Hyderabad",
      "Kerala Backwaters",
      "Kerala Backwaters",
      "Mumbai",
      "Mumbai",
      "Vadodara",
      "Statue of Unity",
      "Jaipur",
      "Jaipur",
      "Bharatpur",
      "Agra",
      "Delhi",
      "Kashmir",
      "Kashmir",
      "Kashmir",
      "Delhi",
      "Delhi",
    ],
  },
  {
    from: "kolkatal",
    to: "delhi",
    days: "30",
    priceInUSD: "18,000 USD",
    priceInEUR: "16,000 EUR",
    priceInAED: "65,000 AED",
    img: "",
    places: [
      "Kolkata",
      "Andaman Nicobar",
      "Andaman Nicobar",
      "Andaman Nicobar",
      "Kolkata",
      "Varanasi",
      "Varanasi",
      "Varanasi",
      "Hyderabad",
      "Hyderabad",
      "Kerala Backwaters",
      "Kerala Backwaters",
      "Mumbai",
      "Mumbai",
      "Vadodara",
      "Statue of Unity",
      "Jaipur",
      "Jaipur",
      "Jaipur",
      "Delhi",
      "Agra",
      "Kashmir",
      "Kashmir",
      "Kashmir",
      "Leh",
      "Nubra Valley",
      "Nubra Valley",
      "Pangong Lake",
      "Leh",
      "Amritsar",
      "Amritsar",
      "Amritsar",
      "Delhi",
      "Delhi",
    ],
  },
  {
    from: "kolkatal",
    to: "delhi",
    days: "50",
    priceInUSD: "22,000 USD",
    priceInEUR: "20,500 EUR",
    priceInAED: "80,000 AED",
    img: "",
    places: [
      "Kolkata",
      "Kolkata",
      "Sundarbans",
      "Sundarbans",
      "Kolkata",
      "Andaman Nicobar",
      "Andaman Nicobar",
      "Andaman Nicobar",
      "Kolkata-Shillong",
      "Meghalaya",
      "Meghalaya",
      "Delhi",
      "Agra",
      "Lucknow",
      "Varanasi",
      "Varanasi",
      "Delhi",
      "Sreenagar",
      "Sreenagar",
      "Pahalgam",
      "Sonamarg",
      "Sonamarg",
      "Leh",
      "Leh",
      "Nubra Valley",
      "Pangong- Leh",
      "Chandigarh",
      "Chandigarh",
      "Patiala",
      "Delhi",
      "Bikaner",
      "Bikaner",
      "Jaisalmer",
      "Jodhpur",
      "Udaipur",
      "Jaipur",
      "Jaipur",
      "VadJodhpurodara",
      "Vadodara",
      "Mumbai",
      "Mumbai",
      "Mumbai - Hyderabad",
      "Hyderabad",
      "Cochin",
      "Varkala/Mararikulam",
      "Kanyakumari",
      "Alleppey",
      "TN- Traditional Stay ",
      "TN- Traditional Stay ",
      "Bengaluru",
      "Bengaluru",
    ],
  },
];
export const backpackersTours = [
  {
    from: "kolkatal",
    to: "Bengaluru",
    days: "20",
    tourType: "Vagabond's Wishlist",
    priceInUSD: "1,70,000 USD",
    priceInEUR: "1,50,000 EUR",
    priceInAED: "",
    img: "",
    places: [
      "Kolkata",
      "Kolkata",
      "Sundarbans",
      "Sundarbans",
      "Kolkata",
      "Shillong",
      "Meghalaya",
      "Delhi",
      "Agra",
      "Lucknow",
      "Varanasi",
      "Varanasi",
      "Delhi",
      "Amritsar",
      "Amritsar",
      "Jaipur",
      "Jaipur",
      "Udaipur",
      "Mumbai",
      "Mumbai",
      "Goa",
      "Goa",
      "Humpi",
      "Hyderabad",
      "Hyderabad",
      "Kerala",
      "Kerala",
      "TN- Traditional Stay ",
      "TN- Traditional Stay ",
      "Mysore",
      "Bengaluru",
      "Bengaluru",
    ],
  },
  {
    from: "kolkata",
    to: "delhi",
    days: "50",
    priceInUSD: "5,20,000 USD",
    priceInEUR: "",
    tourType: "Vagabond's Wishlist",
    priceInAED: "",
    img: "",
    places: [
      "Kolkata",
      "Kolkata",
      "Sundarbans",
      "Sundarbans",
      "Kolkata",
      "Kolkata",
      "Shillong",
      "Meghalaya",
      "Meghalaya-Kolkata",
      "Andaman Nicobar",
      "Andaman Nicobar",
      "Andaman Nicobar",
      "Chennai",
      "TN",
      "TN",
      "TN",
      "Kerala",
      "Kerala",
      "Cochin",
      "Mysore",
      "Bengaluru",
      "Bengaluru",
      "Goa",
      "Goa",
      "Goa",
      "Mumbai",
      "Mumbai",
      "Mumbai",
      "Udaipur",
      "Udaipur",
      "Pushkar",
      "Jaipur",
      "Jaipur",
      "Amritsar",
      "Amritsar",
      "Delhi",
      "Agra",
      "Lucknow",
      "Lucknow",
      "Varanasi",
      "Varanasi",
      "Varanasi",
      "Delhi",
      "Delhi",
      "Srinagar",
      "Srinagar",
      "Kashmir",
      "Kashmir",
      "Kashmir",
      "Leh",
      "Leh",
      "Nubra Valley",
      "Leh-Manali",
      "Manali",
      "Kasol",
      "Kasol",
      "Shimla",
      "Shimla",
      "Chandigarh",
      "Chandigarh",
      "Haridwar",
      "Rishikesh",
      "Rishikesh",
      "Delhi",
    ],
  },
  {
    from: "kolkata",
    to: "delhi",
    tourType: "Vagabond's Wishlist",
    days: "75",
    priceInUSD: "18,000 USD",
    priceInEUR: "16,000 EUR",
    priceInAED: "65,000 AED",
    img: "",
    places: [
      "Delhi",
      "Delhi",
      "Delhi",
      "Jaipur",
      "Udaipur",
      "Jaisalmer",
      "Bikaner",
      "Ajmer",
      "Gujrat",
      "Gujrat",
      "Gujrat",
      "Gujrat",
      "MP",
      "MP",
      "Maharashtra",
      "Maharashtra",
      "Maharashtra",
      "Maharashtra",
      "Goa",
      "Goa",
      "Goa",
      "Karnataka",
      "Karnataka",
      "Karnataka",
      "Karnataka",
      "Tamilnadu",
      "Tamilnadu",
      "Tamilnadu",
      "Tamilnadu",
      "Tamilnadu",
      "Kerala",
      "Kerala",
      "Kerala",
      "Kerala",
      "Hyderabad",
      "Hyderabad",
      "Kolkata",
      "Kolkata",
      "Andaman",
      "Andaman",
      "Andaman",
      "Kolkata",
      "Sundarbans",
      "Sundarbans",
      "Sundarbans",
      "North East",
      "North East",
      "North East",
      "North East",
      "North East",
      "North East",
      "North East",
      "Sikkim",
      "Sikkim",
      "Bihar",
      "Bihar",
      "Uttar Pradesh",
      "Uttar Pradesh",
      "Uttar Pradesh",
      "Uttar Pradesh",
      "Uttar Pradesh",
      "Jammu Kashmir",
      "Jammu Kashmir",
      "Ladakh",
      "Ladakh",
      "Ladakh",
      "Ladakh",
      "Ladakh",
      "Himachal",
      "Himachal",
      "Himachal",
      "Himachal",
      "Chandigarh",
      "Chandigarh",
      "Punjab",
      "Punjab",
      "Haryana",
      "Uttarakhand",
      "Uttarakhand",
      "Uttarakhand",
      "Uttarakhand",
      "Delhi",
    ],
  },
  {
    from: "kolkata",
    to: "delhi",
    tourType: "Spiritual Enlightenment",
    days: "50",
    priceInUSD: "22,000 USD",
    priceInEUR: "20,500 EUR",
    priceInAED: "80,000 AED",
    img: "",
    places: [
      "Auroville",
      "Pondicherry",
      "Rishikesh",
      "Haridwar",
      "Lucknow",
      "Varanasi",
      "Pushkar",
      "Ajmer",
      "Mathura",
      "Vrindavan",
    ],
  },
  {
    from: "kolkata",
    to: "delhi",
    tourType: "Spiritual Enlightenment",
    days: "50",
    priceInUSD: "22,000 USD",
    priceInEUR: "20,500 EUR",
    priceInAED: "80,000 AED",
    img: "",
    places: [
      "Auroville",
      "Pondicherry",
      "Rishikesh",
      "Haridwar",
      "Lucknow",
      "Varanasi",
      "Pushkar",
      "Ajmer",
      "Mathura",
      "Vrindavan",
    ],
  },
  {
    from: "kolkata",
    to: "delhi",
    tourType: "Spiritual Enlightenment",
    days: "50",
    priceInUSD: "22,000 USD",
    priceInEUR: "20,500 EUR",
    priceInAED: "80,000 AED",
    img: "",
    places: [
      "Auroville",
      "Pondicherry",
      "Rishikesh",
      "Haridwar",
      "Lucknow",
      "Varanasi",
      "Pushkar",
      "Ajmer",
      "Mathura",
      "Vrindavan",
    ],
  },
  {
    from: "kolkata",
    to: "delhi",
    tourType: "Spiritual Enlightenment",
    days: "50",
    priceInUSD: "22,000 USD",
    priceInEUR: "20,500 EUR",
    priceInAED: "80,000 AED",
    img: "",
    places: [
      "Auroville",
      "Pondicherry",
      "Rishikesh",
      "Haridwar",
      "Lucknow",
      "Varanasi",
      "Pushkar",
      "Ajmer",
      "Mathura",
      "Vrindavan",
    ],
  },
  {
    from: "kolkata",
    to: "delhi",
    tourType: "Colours of Festivals",
    days: "50",
    priceInUSD: "22,000 USD",
    priceInEUR: "20,500 EUR",
    priceInAED: "80,000 AED",
    img: "",
    places: [
      "Ganga Dussehra",
      "Hornbill Festival",
      "Onam",
      "Durga Puja",
      "Diwali",
      "Holi",
      "Theyyam",
      "Garba- Navaratri",
      "Losar",
      "Dasara",
      "Ganesh Chaturthi",
      "Janmashtami",
      "Eid-ul-Fitr",
      "Christmas",
      "Baisakhi",
      "Buddha Purnima",
      "Pongal",
      "Bihu",
      "Makar Sankranti",
      "Hemis",
      "Saga Dawa",
      "Mahavir Jayanti",
    ],
  },
  {
    from: "kolkata",
    to: "delhi",
    tourType: "Wild Encounter",
    days: "50",
    priceInUSD: "22,000 USD",
    priceInEUR: "20,500 EUR",
    priceInAED: "80,000 AED",
    img: "",
    places: [
      "Tigers",
      "The Royal Bengal Tiger",
      "Maharajas of Maharashtra",
      "Jim Corbett",
      "Roars of Ranthambore",
      "Gir NP Madhya Pradesh Majestics",
      "Asiatic Lions",
      "Gir National Park",
      "Ranthambore",
      "Elephant Kerala",
      "Snow Leopards Spiti Valley",
      "Red Panda",
      "Singalila National Park",
      "Fishing Cat West Bengal",
      "Birds",
      "Butterflies",
    ],
  },
  {
    from: "kolkata",
    to: "delhi",
    tourType: "Sandy Escape",
    days: "50",
    priceInUSD: "22,000 USD",
    priceInEUR: "20,500 EUR",
    priceInAED: "80,000 AED",
    img: "",
    places: [
      "Mumbai",
      "Mumbai",
      "Goa",
      "Goa",
      "Goa",
      "Kerala",

      "Kerala",
      "Lakshadweep",
      "Lakshadweep",
      "Lakshadweep",
      "Kerala",
      "Kerala",
      "Tamilnadu",
      "Tamilnadu",
      "Tamilnadu",
      "Tamilnadu",
      "Andhra",
      "Andhra",
      "Odisha",
      "Odisha",
      "Odisha",
      "West Bengal",
      "West Bengal",
      "Andaman",
      "Andaman",
      "Andaman",
      "Andaman",
      "Kolkata",
      "Mumbai",
      "Mumbai",
    ],
  },
  {
    from: "kolkata",
    to: "delhi",
    tourType: "Seven Sisters",
    days: "50",
    priceInUSD: "22,000 USD",
    priceInEUR: "20,500 EUR",
    priceInAED: "80,000 AED",
    img: "",
    places: [
      "Guwahati",
      "Tawang",
      "Tawang",
      "Bomdila",
      "Kaziranga NP",
      "Kaziranga",
      "Shivasagar",
      "Mon town",
      "Mon town",
      "Dzukou Valley",
      "Dzukou Valley",
      "Kohima",
      "Imphal",
      "Loktak Lake",
      "Agartala",
      "Agartala",
      "Aizawl",
      "Aizawl",
      "Shillong",
      "Shillong",
      "Shillong",
      "Guwahati",
      "Guwahati",
      "Guwahati",
    ],
  },
];
//   3. 'COMBOS'
//   1.1. South Indian Combo
//   (Kerala, Karnataka, Tamil Nadu) + Pondicherry
//   Karnataka
//   'Bengaluru
//   'Mysore 'Coorg 'Hampi 'Badami

//    'Kabini
//   'Jog falls
//   'Mangalore
//   'Karwar
//   'Gokarna
//   'Udupi
//   'Murudeshwar
//   'Kudremukh
//   Kerala
//   'Kochi
//   'Munnar
//   'Alappuzha
//   'Thiruvananthapuram
//   'Wayanad
//   'Kovalam
//   'Kozhikode
//   'Periyar National Park
//   'Kumarakom
//   'Varkala
//   'Eravikulam National Park
//   'Kollam
//   'Thrissur
//   'Palakkad
//   'Idukki
//   'Marari Beach ●
//   2. The Ganga.
//   (WB, Bihar, UP, UK)
//   3. The North Combo.
//   (Uttarakhand, Himachal, Leh, Kashmir)

//   4. West Coast Combo.
//   (Kerala, Goa, Maharashtra, Gujrat)
// ];
export const amenities = [
  { checked: false, label: "Local Tour", value: "LOCAL_TOUR" },
  { checked: false, label: "BreakFast Buffet", value: "BREAKFAST_BUFFET" },
  { checked: false, label: "Female Dorm", value: "FEMALE_DORM" },
  { checked: false, label: "Locker", value: "LOCKER" },
  { checked: false, label: "No Racism", value: "NO_RACISM" },
  { checked: false, label: "Wifi", value: "WIFI" },
  { checked: false, label: "Airport Transfer", value: "AIRPORT_TRANSFER" },
  { checked: false, label: "Lunch Buffet", value: "LUNCH_BUFFET" },
  { checked: false, label: "Pool", value: "POOL" },
  { checked: false, label: "Gym", value: "GYM" },
];
export const filterList = [
  {
    filterName: "Type",
    subFilter: [
      { checked: false, label: "Deluxe" },
      { checked: false, label: "Backpacker" },
      { checked: false, label: "Standard" },
      { checked: false, label: "Indian Passport Holders" },
      { checked: false, label: "India Tours" },
    ],
  },
  {
    filterName: "Continents",
    subFilter: [
      { checked: false, label: "Asia" },
      { checked: false, label: " Africa" },
      { checked: false, label: " North America" },
      { checked: false, label: " South America" },
      { checked: false, label: " Antarctica" },
      { checked: false, label: " Europe" },
      { checked: false, label: " Australia" },
    ],
  },
  {
    filterName: "Days",
    subFilter: [
      {
        checked: false,
        label: "less than 5",
      },
      {
        checked: false,
        label: "5 - 15",
      },
      {
        checked: false,
        label: "15-25",
      },
      {
        checked: false,
        label: "25-45",
      },
      {
        checked: false,
        label: "45-75",
      },
      {
        checked: false,
        label: "more than 75",
      },
    ],
  },
  {
    filterName: "Price Range",
    subFilter: [
      { checked: false, label: "less than 2000" },
      { checked: false, label: "2000 - 5000" },
      { checked: false, label: "5000 - 10000" },
      { checked: false, label: "10000 - 25000" },
      { checked: false, label: "more than 25000" },
    ],
  },
];

export const tourReviews = [
  "Marvel at the grandeur of Prague Castle, one of the largest ancient castles in the world.",
  "Walk along the iconic Charles Bridge, adorned with statues and offering picturesque views of the Vitava River. Experience its lively atmosphere with street artists, musicians, and local vendors.",

  "From Gothic masterpieces like the Powder Tower to the Art Nouveau elegance of the Municipal House, Prague is a treasure trove of architectural gems.",
  "Escape the hustle and bustle of the city and relax in Prague's beautiful gardens. Visit the romantic Vrtba Garden or the tranquil Wallenstein Garden.",

  "Delight your taste buds with Czech cuisine. Try goulash, svíčková, and trdelnik. Don't forget to pair them with a glass of famous Czech beer.",
];

export const isoCountries = [
  {
    id: "AF",
    text: "Afghanistan",
  },
  {
    id: "AX",
    text: "Aland Islands",
  },
  {
    id: "AL",
    text: "Albania",
  },
  {
    id: "DZ",
    text: "Algeria",
  },
  {
    id: "AS",
    text: "American Samoa",
  },
  {
    id: "AD",
    text: "Andorra",
  },
  {
    id: "AO",
    text: "Angola",
  },
  {
    id: "AI",
    text: "Anguilla",
  },
  {
    id: "AQ",
    text: "Antarctica",
  },
  {
    id: "AG",
    text: "Antigua And Barbuda",
  },
  {
    id: "AR",
    text: "Argentina",
  },
  {
    id: "AM",
    text: "Armenia",
  },
  {
    id: "AW",
    text: "Aruba",
  },
  {
    id: "AU",
    text: "Australia",
  },
  {
    id: "AT",
    text: "Austria",
  },
  {
    id: "AZ",
    text: "Azerbaijan",
  },
  {
    id: "BS",
    text: "Bahamas",
  },
  {
    id: "BH",
    text: "Bahrain",
  },
  {
    id: "BD",
    text: "Bangladesh",
  },
  {
    id: "BB",
    text: "Barbados",
  },
  {
    id: "BY",
    text: "Belarus",
  },
  {
    id: "BE",
    text: "Belgium",
  },
  {
    id: "BZ",
    text: "Belize",
  },
  {
    id: "BJ",
    text: "Benin",
  },
  {
    id: "BM",
    text: "Bermuda",
  },
  {
    id: "BT",
    text: "Bhutan",
  },
  {
    id: "BO",
    text: "Bolivia",
  },
  {
    id: "BA",
    text: "Bosnia And Herzegovina",
  },
  {
    id: "BW",
    text: "Botswana",
  },
  {
    id: "BV",
    text: "Bouvet Island",
  },
  {
    id: "BR",
    text: "Brazil",
  },
  {
    id: "IO",
    text: "British Indian Ocean Territory",
  },
  {
    id: "BN",
    text: "Brunei Darussalam",
  },
  {
    id: "BG",
    text: "Bulgaria",
  },
  {
    id: "BF",
    text: "Burkina Faso",
  },
  {
    id: "BI",
    text: "Burundi",
  },
  {
    id: "KH",
    text: "Cambodia",
  },
  {
    id: "CM",
    text: "Cameroon",
  },
  {
    id: "CA",
    text: "Canada",
  },
  {
    id: "CV",
    text: "Cape Verde",
  },
  {
    id: "KY",
    text: "Cayman Islands",
  },
  {
    id: "CF",
    text: "Central African Republic",
  },
  {
    id: "TD",
    text: "Chad",
  },
  {
    id: "CL",
    text: "Chile",
  },
  {
    id: "CN",
    text: "China",
  },
  {
    id: "CX",
    text: "Christmas Island",
  },
  {
    id: "CC",
    text: "Cocos (Keeling) Islands",
  },
  {
    id: "CO",
    text: "Colombia",
  },
  {
    id: "KM",
    text: "Comoros",
  },
  {
    id: "CG",
    text: "Congo",
  },
  {
    id: "CD",
    text: "Congo}, Democratic Republic",
  },
  {
    id: "CK",
    text: "Cook Islands",
  },
  {
    id: "CR",
    text: "Costa Rica",
  },
  {
    id: "CI",
    text: "Cote D'Ivoire",
  },
  {
    id: "HR",
    text: "Croatia",
  },
  {
    id: "CU",
    text: "Cuba",
  },
  {
    id: "CY",
    text: "Cyprus",
  },
  {
    id: "CZ",
    text: "Czech Republic",
  },
  {
    id: "DK",
    text: "Denmark",
  },
  {
    id: "DJ",
    text: "Djibouti",
  },
  {
    id: "DM",
    text: "Dominica",
  },
  {
    id: "DO",
    text: "Dominican Republic",
  },
  {
    id: "EC",
    text: "Ecuador",
  },
  {
    id: "EG",
    text: "Egypt",
  },
  {
    id: "SV",
    text: "El Salvador",
  },
  {
    id: "GQ",
    text: "Equatorial Guinea",
  },
  {
    id: "ER",
    text: "Eritrea",
  },
  {
    id: "EE",
    text: "Estonia",
  },
  {
    id: "ET",
    text: "Ethiopia",
  },
  {
    id: "FK",
    text: "Falkland Islands (Malvinas)",
  },
  {
    id: "FO",
    text: "Faroe Islands",
  },
  {
    id: "FJ",
    text: "Fiji",
  },
  {
    id: "FI",
    text: "Finland",
  },
  {
    id: "FR",
    text: "France",
  },
  {
    id: "GF",
    text: "French Guiana",
  },
  {
    id: "PF",
    text: "French Polynesia",
  },
  {
    id: "TF",
    text: "French Southern Territories",
  },
  {
    id: "GA",
    text: "Gabon",
  },
  {
    id: "GM",
    text: "Gambia",
  },
  {
    id: "GE",
    text: "Georgia",
  },
  {
    id: "DE",
    text: "Germany",
  },
  {
    id: "GH",
    text: "Ghana",
  },
  {
    id: "GI",
    text: "Gibraltar",
  },
  {
    id: "GR",
    text: "Greece",
  },
  {
    id: "GL",
    text: "Greenland",
  },
  {
    id: "GD",
    text: "Grenada",
  },
  {
    id: "GP",
    text: "Guadeloupe",
  },
  {
    id: "GU",
    text: "Guam",
  },
  {
    id: "GT",
    text: "Guatemala",
  },
  {
    id: "GG",
    text: "Guernsey",
  },
  {
    id: "GN",
    text: "Guinea",
  },
  {
    id: "GW",
    text: "Guinea-Bissau",
  },
  {
    id: "GY",
    text: "Guyana",
  },
  {
    id: "HT",
    text: "Haiti",
  },
  {
    id: "HM",
    text: "Heard Island & Mcdonald Islands",
  },
  {
    id: "VA",
    text: "Holy See (Vatican City State)",
  },
  {
    id: "HN",
    text: "Honduras",
  },
  {
    id: "HK",
    text: "Hong Kong",
  },
  {
    id: "HU",
    text: "Hungary",
  },
  {
    id: "IS",
    text: "Iceland",
  },
  {
    id: "IN",
    text: "India",
  },
  {
    id: "ID",
    text: "Indonesia",
  },
  {
    id: "IR",
    text: "Iran}, Islamic Republic Of",
  },
  {
    id: "IQ",
    text: "Iraq",
  },
  {
    id: "IE",
    text: "Ireland",
  },
  {
    id: "IM",
    text: "Isle Of Man",
  },
  {
    id: "IL",
    text: "Israel",
  },
  {
    id: "IT",
    text: "Italy",
  },
  {
    id: "JM",
    text: "Jamaica",
  },
  {
    id: "JP",
    text: "Japan",
  },
  {
    id: "JE",
    text: "Jersey",
  },
  {
    id: "JO",
    text: "Jordan",
  },
  {
    id: "KZ",
    text: "Kazakhstan",
  },
  {
    id: "KE",
    text: "Kenya",
  },
  {
    id: "KI",
    text: "Kiribati",
  },
  {
    id: "KR",
    text: "Korea",
  },
  {
    id: "KW",
    text: "Kuwait",
  },
  {
    id: "KG",
    text: "Kyrgyzstan",
  },
  {
    id: "LA",
    text: "Lao People's Democratic Republic",
  },
  {
    id: "LV",
    text: "Latvia",
  },
  {
    id: "LB",
    text: "Lebanon",
  },
  {
    id: "LS",
    text: "Lesotho",
  },
  {
    id: "LR",
    text: "Liberia",
  },
  {
    id: "LY",
    text: "Libyan Arab Jamahiriya",
  },
  {
    id: "LI",
    text: "Liechtenstein",
  },
  {
    id: "LT",
    text: "Lithuania",
  },
  {
    id: "LU",
    text: "Luxembourg",
  },
  {
    id: "MO",
    text: "Macao",
  },
  {
    id: "MK",
    text: "Macedonia",
  },
  {
    id: "MG",
    text: "Madagascar",
  },
  {
    id: "MW",
    text: "Malawi",
  },
  {
    id: "MY",
    text: "Malaysia",
  },
  {
    id: "MV",
    text: "Maldives",
  },
  {
    id: "ML",
    text: "Mali",
  },
  {
    id: "MT",
    text: "Malta",
  },
  {
    id: "MH",
    text: "Marshall Islands",
  },
  {
    id: "MQ",
    text: "Martinique",
  },
  {
    id: "MR",
    text: "Mauritania",
  },
  {
    id: "MU",
    text: "Mauritius",
  },
  {
    id: "YT",
    text: "Mayotte",
  },
  {
    id: "MX",
    text: "Mexico",
  },
  {
    id: "FM",
    text: "Micronesia}, Federated States Of",
  },
  {
    id: "MD",
    text: "Moldova",
  },
  {
    id: "MC",
    text: "Monaco",
  },
  {
    id: "MN",
    text: "Mongolia",
  },
  {
    id: "ME",
    text: "Montenegro",
  },
  {
    id: "MS",
    text: "Montserrat",
  },
  {
    id: "MA",
    text: "Morocco",
  },
  {
    id: "MZ",
    text: "Mozambique",
  },
  {
    id: "MM",
    text: "Myanmar",
  },
  {
    id: "NA",
    text: "Namibia",
  },
  {
    id: "NR",
    text: "Nauru",
  },
  {
    id: "NP",
    text: "Nepal",
  },
  {
    id: "NL",
    text: "Netherlands",
  },
  {
    id: "AN",
    text: "Netherlands Antilles",
  },
  {
    id: "NC",
    text: "New Caledonia",
  },
  {
    id: "NZ",
    text: "New Zealand",
  },
  {
    id: "NI",
    text: "Nicaragua",
  },
  {
    id: "NE",
    text: "Niger",
  },
  {
    id: "NG",
    text: "Nigeria",
  },
  {
    id: "NU",
    text: "Niue",
  },
  {
    id: "NF",
    text: "Norfolk Island",
  },
  {
    id: "MP",
    text: "Northern Mariana Islands",
  },
  {
    id: "NO",
    text: "Norway",
  },
  {
    id: "OM",
    text: "Oman",
  },
  {
    id: "PK",
    text: "Pakistan",
  },
  {
    id: "PW",
    text: "Palau",
  },
  {
    id: "PS",
    text: "Palestinian Territory}, Occupied",
  },
  {
    id: "PA",
    text: "Panama",
  },
  {
    id: "PG",
    text: "Papua New Guinea",
  },
  {
    id: "PY",
    text: "Paraguay",
  },
  {
    id: "PE",
    text: "Peru",
  },
  {
    id: "PH",
    text: "Philippines",
  },
  {
    id: "PN",
    text: "Pitcairn",
  },
  {
    id: "PL",
    text: "Poland",
  },
  {
    id: "PT",
    text: "Portugal",
  },
  {
    id: "PR",
    text: "Puerto Rico",
  },
  {
    id: "QA",
    text: "Qatar",
  },
  {
    id: "RE",
    text: "Reunion",
  },
  {
    id: "RO",
    text: "Romania",
  },
  {
    id: "RU",
    text: "Russian Federation",
  },
  {
    id: "RW",
    text: "Rwanda",
  },
  {
    id: "BL",
    text: "Saint Barthelemy",
  },
  {
    id: "SH",
    text: "Saint Helena",
  },
  {
    id: "KN",
    text: "Saint Kitts And Nevis",
  },
  {
    id: "LC",
    text: "Saint Lucia",
  },
  {
    id: "MF",
    text: "Saint Martin",
  },
  {
    id: "PM",
    text: "Saint Pierre And Miquelon",
  },
  {
    id: "VC",
    text: "Saint Vincent And Grenadines",
  },
  {
    id: "WS",
    text: "Samoa",
  },
  {
    id: "SM",
    text: "San Marino",
  },
  {
    id: "ST",
    text: "Sao Tome And Principe",
  },
  {
    id: "SA",
    text: "Saudi Arabia",
  },
  {
    id: "SN",
    text: "Senegal",
  },
  {
    id: "RS",
    text: "Serbia",
  },
  {
    id: "SC",
    text: "Seychelles",
  },
  {
    id: "SL",
    text: "Sierra Leone",
  },
  {
    id: "SG",
    text: "Singapore",
  },
  {
    id: "SK",
    text: "Slovakia",
  },
  {
    id: "SI",
    text: "Slovenia",
  },
  {
    id: "SB",
    text: "Solomon Islands",
  },
  {
    id: "SO",
    text: "Somalia",
  },
  {
    id: "ZA",
    text: "South Africa",
  },
  {
    id: "GS",
    text: "South Georgia And Sandwich Isl.",
  },
  {
    id: "ES",
    text: "Spain",
  },
  {
    id: "LK",
    text: "Sri Lanka",
  },
  {
    id: "SD",
    text: "Sudan",
  },
  {
    id: "SR",
    text: "Suriname",
  },
  {
    id: "SJ",
    text: "Svalbard And Jan Mayen",
  },
  {
    id: "SZ",
    text: "Swaziland",
  },
  {
    id: "SE",
    text: "Sweden",
  },
  {
    id: "CH",
    text: "Switzerland",
  },
  {
    id: "SY",
    text: "Syrian Arab Republic",
  },
  {
    id: "TW",
    text: "Taiwan",
  },
  {
    id: "TJ",
    text: "Tajikistan",
  },
  {
    id: "TZ",
    text: "Tanzania",
  },
  {
    id: "TH",
    text: "Thailand",
  },
  {
    id: "TL",
    text: "Timor-Leste",
  },
  {
    id: "TG",
    text: "Togo",
  },
  {
    id: "TK",
    text: "Tokelau",
  },
  {
    id: "TO",
    text: "Tonga",
  },
  {
    id: "TT",
    text: "Trinidad And Tobago",
  },
  {
    id: "TN",
    text: "Tunisia",
  },
  {
    id: "TR",
    text: "Turkey",
  },
  {
    id: "TM",
    text: "Turkmenistan",
  },
  {
    id: "TC",
    text: "Turks And Caicos Islands",
  },
  {
    id: "TV",
    text: "Tuvalu",
  },
  {
    id: "UG",
    text: "Uganda",
  },
  {
    id: "UA",
    text: "Ukraine",
  },
  {
    id: "AE",
    text: "United Arab Emirates",
  },
  {
    id: "GB",
    text: "United Kingdom",
  },
  {
    id: "US",
    text: "United States",
  },
  {
    id: "UM",
    text: "United States Outlying Islands",
  },
  {
    id: "UY",
    text: "Uruguay",
  },
  {
    id: "UZ",
    text: "Uzbekistan",
  },
  {
    id: "VU",
    text: "Vanuatu",
  },
  {
    id: "VE",
    text: "Venezuela",
  },
  {
    id: "VN",
    text: "Viet Nam",
  },
  {
    id: "VG",
    text: "Virgin Islands}, British",
  },
  {
    id: "VI",
    text: "Virgin Islands}, U.S.",
  },
  {
    id: "WF",
    text: "Wallis And Futuna",
  },
  {
    id: "EH",
    text: "Western Sahara",
  },
  {
    id: "YE",
    text: "Yemen",
  },
  {
    id: "ZM",
    text: "Zambia",
  },
  {
    id: "ZW",
    text: "Zimbabwe",
  },
];
