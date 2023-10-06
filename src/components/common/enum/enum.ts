import { HeaderList } from "../header/Header";

export enum axiosType {
  get = "get",
  post = "post",
  put = "put",
  delete = "delete",
}

export const mapDescription =
  "Explore stunning destinations, from exotic tropical paradises to historic landmarks and vibrant cityscapes with Lyamii.";

export const reasons = [
  {
    title: "Global Reach",
    img: require("../../../Assets/globe.png"),
    description:
      "Our global accommodations cover all continents, from vibrant cities to serene islands. Find comfort and convenience wherever you wander.",
  },
  {
    title: "Complete Tours",
    img: require("../../../Assets/tick.png"),
    description:
      "Travel insurance? Check. Local SIM card? Sorted. Visa requirements? We've got you covered. Choose your destination, pack your bags, and leave the rest to us.",
  },
  {
    title: "Secure & Convenient",
    img: require("../../../Assets/fingerprint.png"),
    description:
      "Experience secure and seamless online transactions. Enjoy convenience and peace of mind. Embrace effortless financial interactions from home. No more headaches.",
  },
  {
    title: "Has something for Everyone",
    img: require("../../../Assets/gift.png"),
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
