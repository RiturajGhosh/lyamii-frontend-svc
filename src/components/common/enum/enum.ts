import { HeaderList } from "../header/Header";

export enum axiosType {
  get = "get",
  post = "post",
  put = "put",
  delete = "delete",
}

export const exploreDescription =
  "Explore stunning destinations, from exotic tropical paradises to historic landmarks and vibrant cityscapes with Lyamii.";

export const mapDescription =
  "It is an invitation to expand the horizons of your existence and witness the remarkable resilience of human spirit. Through travel, we become citizens of the FaWordpressSimple, the best version of ourselves.";

export const reasons = [
  {
    title: "Global Reach",
    img: require("../../../Assets/blueglobe.png"),
    description:
      "Our global accommodations cover all continents, from vibrant cities to serene islands. Find comfort and convenience wherever you wander.",
  },
  {
    title: "Complete Tours",
    img: require("../../../Assets/tick1.png"),
    description:
      "Travel insurance? Check. Local SIM card? Sorted. Visa requirements? We've got you covered. Choose your destination, pack your bags, and leave the rest to us.",
  },
  {
    title: "Secure & Convenient",
    img: require("../../../Assets/fingerprint1.png"),
    description:
      "Experience secure and seamless online transactions. Enjoy convenience and peace of mind. Embrace effortless financial interactions from home. No more headaches.",
  },
  {
    title: "Has something for Everyone",
    img: require("../../../Assets/giftbox.png"),
    description:
      "Unforgettable moments guaranteed. Handpicked attractions tailored to each destinations essence. VIP experiences, breathtaking sights, thrilling adventures -all included for an exciting journey.",
  },
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
  { name: "About us", path: "/about" },
  { name: "Our Mission", path: "/mission" },
  { name: "Join us", path: "/joinus" },
  { name: "Reviews", path: "/reviews" },
  { name: "Privacy policy", path: "/privacypolicy" },
  { name: "Terms and conditions", path: "/termconditions" },
  { name: "FAQ", path: "/" },
];
export const supports: HeaderList[] = [
  { name: "My Profile", path: "/profile" },
  { name: "Helpdesk", path: "/helpdesk" },
  { name: "Feedback", path: "/feedback" },
];

export const journeyOptions = [
  {
    name: "ROYAL BHARAT EDITION",
    path: "https://cdn.pixabay.com/photo/2018/08/29/09/27/india-3639503_1280.jpg",
  },
  {
    name: "BACKPACKERS EDITION",
    path: "https://cdn.pixabay.com/photo/2016/11/22/19/25/adventure-1850178_1280.jpg",
  },
  {
    name: "COMBOS",
    path: "https://cdn.pixabay.com/photo/2015/04/28/17/04/musician-743973_1280.jpg",
  },
];

export const internationalTours = [
  {
    from: "IND",
    to: "ITALY",
    path: "https://cdn.pixabay.com/photo/2016/04/15/13/30/fassa-valley-1331004_1280.jpg",
  },
  {
    from: "IND",
    to: "FRANCE",
    path: "https://cdn.pixabay.com/photo/2014/11/13/23/34/palace-530055_1280.jpg",
  },
  {
    from: "IND",
    to: "GERMANY",
    path: "https://cdn.pixabay.com/photo/2015/03/31/23/08/neuschwanstein-701732_1280.jpg",
  },
  {
    from: "IND",
    to: "SWITZERLAND",
    path: "https://cdn.pixabay.com/photo/2016/08/22/10/20/city-1611657_1280.jpg",
  },
];
