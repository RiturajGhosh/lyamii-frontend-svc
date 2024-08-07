export const parseTourData = (response: string) => {
  const parseRes = JSON.parse(JSON.stringify(response));
  parseRes.description = parseRes.description.split("\n");
  parseRes.destinations = parseRes.destinations
    .split(",")
    .join("\n")
    .split("\n");
  parseRes.highlights = parseRes.highlights.split("\n");
  parseRes.includes = parseRes.includes.split("\n");
  parseRes.packagePrice = interchangePosition(
    parseRes?.packagePrice.split("\n"),
    4,
    6
  );
  parseRes.imageUri = parseRes.imageUri.split("\n");
  parseRes.bookingPrice = interchangePosition(
    parseRes?.bookingPrice?.split("\n"),
    4,
    6
  );
  parseRes.itinerary = parseRes.itinerary
    ?.split(":\n")
    .slice(1)
    .map((i: any) =>
      i
        .replace("Day", "")
        .trim()
        .replace(/\d+$/, "")
        .replace(/[\n]+$/, "")
        .split("\n")
    );
  return parseRes;
};

export const parseTourDataArray = (response: string) => {
  const parseRes = JSON.parse(JSON.stringify(response));
  parseRes.forEach((res: any) => {
    res.description = res.description.split("\n");
    res.destinations = res.destinations.split(",").join("\n").split("\n");
    res.highlights = res.highlights.split("\n");
    res.includes = res.includes.split("\n");
    res.packagePrice = interchangePosition(res?.packagePrice.split("\n"), 4, 6);
    res.imageUri = res.imageUri.split("\n");
    res.bookingPrice = interchangePosition(
      res?.bookingPrice?.split("\n"),
      4,
      6
    );
    res.itinerary = res.itinerary = parseRes.itinerary
      ?.split(":\n")
      .slice(1)
      .map((i: any) =>
        i
          .replace("Day", "")
          .trim()
          .replace(/\d+$/, "")
          .replace(/[\n]+$/, "")
          .split("\n")
      );
    return parseRes;
  });
  return parseRes.sort(
    (a: any, b: any) =>
      parseInt(a.packagePrice[0].split(" ")[0].replace(/,/g, ""), 10) -
      parseInt(b.packagePrice[0].split(" ")[0].replace(/,/g, ""), 10)
  );
  // return parseRes;
};

const interchangePosition = (items: any, start: number, end: number) => {
  if (items.length < 2) {
    return items;
  }
  return [
    ...items.slice(start, end),
    ...items.slice(0, start - 1),
    ...items.slice(end),
  ];
};
