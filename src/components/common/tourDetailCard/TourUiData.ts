export const styles: { [key: string]: React.CSSProperties } = {
  card: {
    display: "flex",
    flexDirection: "column",
    fontFamily: "Arial, sans-serif",
    margin: "20px",
    marginTop: 70,
  },
  mainImageContainer: {
    position: "relative",
  },
  mainImage: {
    display: "flex",
    justifyContent: "flex-start",
    width: "1036px",
    height: "360px",
  },
  mainText: {
    position: "absolute",
    top: "20px",
    left: "1080px",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: "10px",
  },
  bookNowBtn: {
    padding: "10px 20px",
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    cursor: "pointer",
    fontSize: "16px",
  },
  placesContainer: {
    marginTop: "20px",
    width: "100%",
  },
  placeContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  placeImage: {
    width: "245px",
    height: "146px",
    flex: "0 0 auto",
  },
  placeName: {
    fontSize: 18,
    fontWeight: "400",
    color: "#000000",
    marginTop: "5px",
    textAlign: "center",
  },
  sectionHeading: {
    marginLeft: "20px",
    fontSize: 30,
    fontWeight: "700",
    color: "#2E2E2E",
  },
  placesList: {
    display: "flex",
    overflowX: "scroll",
    padding: "10px",
    gap: "10px",
  },
  aboutSection: {
    marginTop: "20px",
    width: "100%",
  },
  aboutText: {
    margin: "10px 20px",
    fontSize: 18,
    fontWeight: "300",
    color: "#000000",
  },
  daysPlanContainer: {
    marginTop: "20px",
    width: "100%",
    paddingLeft: "20px",
    paddingRight: "20px",
    position: "relative",
  },
  daysPlanTitle: {
    marginLeft: 20,
    marginTop: -10,
    fontSize: 25,
    fontWeight: "700",
    color: "#6F82D3",
  },
  dayContainer: {
    marginLeft: 30,
    marginTop: 0,
    display: "flex",
    alignItems: "flex-start",
    marginBottom: "0px",
    position: "relative",
  },
  dayDot: {
    width: "10px",
    height: "10px",
    borderRadius: "50%",
    backgroundColor: "#6F82D3",
    marginTop: "5px",
    marginRight: "10px",
    zIndex: 1,
  },
  dayContent: {
    display: "flex",
    flexDirection: "column",
  },
  dayTitle: {
    fontSize: 18,
    fontWeight: "400",
    color: "#818181",
  },
  daySubtitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#879DFF",
  },
  dayDescription: {
    fontSize: "16px",
    fontWeight: "300",
    color: "#000000",
    marginTop: "5px",
  },
  verticalLine: {
    position: "absolute",
    width: "2px",
    backgroundColor: "black",
    top: "0",
    bottom: "0",
    left: "4px",
    zIndex: 0,
  },
};

export const places = [
  {
    imageUrl:
      "https://images.unsplash.com/photo-1695403338141-fd88a0747a90?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGFtZXJpY2F8ZW58MHx8MHx8fDA%3D",
    name: "Place 1",
  },
  {
    imageUrl:
      "https://plus.unsplash.com/premium_photo-1682628191553-81d881f4fd9a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGFtZXJpY2F8ZW58MHx8MHx8fDA%3D",
    name: "Place 2",
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1690404130759-0d47f667b3a8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGFtZXJpY2F8ZW58MHx8MHx8fDA%3D",
    name: "Place 3",
  },
  {
    imageUrl:
      "https://plus.unsplash.com/premium_photo-1681530700755-e8079add58ef?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGFtZXJpY2F8ZW58MHx8MHx8fDA%3D",
    name: "Place 4",
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1597700959826-5dcacabee120?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGFtZXJpY2F8ZW58MHx8MHx8fDA%3D",
    name: "Place 5",
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1586111046185-67c2cf6bb72c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzd8fGFtZXJpY2F8ZW58MHx8MHx8fDA%3D",
    name: "Place 6",
  },
];

export const aboutContent = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
  minim veniam, quis nostrud exercitation ullamco laboris nisi ut
  aliquip ex ea commodo consequat. Duis aute irure dolor in
  reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
  pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
  culpa qui officia deserunt mollit anim id est laborum." Lorem ipsum
  dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
  commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
  velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
  occaecat cupidatat non proident, sunt in culpa qui officia deserunt
  mollit anim id est laborum.`;

export const highlightsData = [
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.",
];

export const itineraryData = [
  {
    day: "Day 1",
    subtitle: "Lorem ipsum",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    day: "Day 2",
    subtitle: "Lorem ipsum",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    day: "Day 3",
    subtitle: "Lorem ipsum",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    day: "Day 4",
    subtitle: "Lorem ipsum",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    day: "Day 5",
    subtitle: "Lorem ipsum",
    description: "Abhishek Johri",
  },
];
export const departureData = [
  {
    date: "Day, 01/09/2024",
    dayOfWeek: "Tuesday",
    startDate: "Sept 24, 2024",
    nightDay: "8 Night / 9 Day",
    destination: "Mumbai",
  },
  {
    date: "Day, 14/10/2024",
    dayOfWeek: "Monday",
    startDate: "Oct 14, 2024",
    nightDay: "10 Night / 11 Day",
    destination: "Kolkata",
  },
  {
    date: "Day, 25/12/2024",
    dayOfWeek: "Sunday",
    startDate: "Jan 1, 2025",
    nightDay: "7 Night / 8 Day",
    destination: "Banglore",
  },
  // Add more data objects as needed
];
