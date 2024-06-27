export const parseTourData = (response: string) => {
  const parseRes = JSON.parse(JSON.stringify(response));
  parseRes.description = parseRes.description.split("\n");
  parseRes.destinations = parseRes.destinations
    .split(",")
    .join("\n")
    .split("\n");
  parseRes.highlights = parseRes.highlights.split("\n");
  parseRes.includes = parseRes.includes.split("\n");
  parseRes.packagePrice = parseRes.packagePrice.split("\n");
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
    res.packagePrice = res.packagePrice.split("\n");
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
  return parseRes;
};
