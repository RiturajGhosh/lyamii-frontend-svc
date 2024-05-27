import { parseTourData } from "../utils/parseTourData";
import { getPackageDetailsByPackageId } from "./getPackageDetailsByPackageId";

export async function getPackageDetailsByPackageIdApi(packageId: string) {
  // const res =
  //   '{\n    "packageId": "RIE07",\n    "packageName": "The Eastern India",\n    "title": "Enlighenment of Eastern India",\n    "description": "Welcome to Kolk\\nImmerse Yourself\\nIndulge Your Senses\\nEngage With The\\nKolkata\'s Warmth",\n    "overview": "Overview East India",\n    "highlights": "Experience the\\nVisite the largest\\nSpend a morning\\nJourney to the South\\nFeel the charm of\\nEnjoy Indian cuisines",\n    "noOfDays": 7,\n    "itinerary": "\\"Day1\\":\\"City of Joy\\nJet Lag Leisure\\nEvening Cultural\\", \\n\\"Day2\\":\\"Kolkata:\\nPrincep Ghat\\nVictoria Memorial\\nCoffee House\\nKumortuli\\",\\n\\"Day3\\":\\"Kolkata-Shillong:\\nMullick Ghat Flow\\nHowrah Bridge\\nAirport Drop and Pickup\\",\\n\\"Day4\\":\\"Meghalaya:\\nDawki River\\nLiving Root\\nPolo Bazaar\\",\\n\\"Day5\\":\\"Meghalaya:\\nElephant Falls\\nMawlynnong Village\\",\\n\\"Day6\\":\\"Mawlynnog village:\\nSky View Point\\nBorhil Falls\\nAirport Drop and Pickup\\",\\n\\"Day7\\":\\"Kolkata:\\nBelur Math\\nDakshineswar Temple\\nRooftop Concert\\"",\n    "includes": "Domestic Flights\\nLounge Access\\nAirport drop-pickup\\nCurrency Exchange\\nTravel Insurance\\nHealth Insurance\\nUPI Wallet\\nLuxury Accomodation\\nCuisines\\nSUV Transfers\\nPersonal Guide\\nEntry Tickets\\nShow Tickets\\nActivites\\nRound the Clock",\n    "destinations": "Kolkata\\nShillong\\nMeghalaya\\nMawlynnong",\n    "packagePrice": "1,530 KWD\\n1,880 BHD\\n4,000 GBP\\n4,400 CHF\\n4,500 EUR\\n5,000 USD\\n7,600 AUD\\n18,200 AED",\n    "rating": 5,\n    "currencyLabel": "INR",\n    "tripType": "BACKPACKER",\n    "country": "India",\n    "imageUri": [\n        "15g5EvDhBSNxSSEgZ_sryNZhqic0EB5lm",\n        "15g5EvDhBSNxSSEgZ_sryNZhqic0EB5lm"\n    ]\n}';
  try {
    return await getPackageDetailsByPackageId(packageId);
  } catch (error: any) {
    return error;
  }
}
