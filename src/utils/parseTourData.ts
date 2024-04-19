export const parseTourData = (response: string) => {
  const parseRes = JSON.parse(response);
  parseRes.destinations = parseRes.destinations.split("\n");
  parseRes.highlights = parseRes.highlights.split("\n");
  parseRes.includes = parseRes.includes.split("\n");
  parseRes.packagePrice = parseRes.packagePrice.split("\n");
  parseRes.itinerary = parseRes.itinerary
    .replaceAll('"', "")
    .replaceAll(", \n", ",\n")
    .split(",\n")
    .map((i: any) =>
      Object.assign({}, [i.split(":")[0], i.split(":")[1].split("\n")])
    );
  return parseRes;
};

export const parseTourDataArray = (response: string) => {
  const parseRes = JSON.parse(response);
  parseRes.forEach((res: any) => {
    res.destinations = res.destinations.split("\n");
    res.highlights = res.highlights.split("\n");
    res.includes = res.includes.split("\n");
    res.packagePrice = res.packagePrice.split("\n");
    res.itinerary = res.itinerary
      .replaceAll('"', "")
      .replaceAll(", \n", ",\n")
      .split(",\n")
      .map((i: any) =>
        Object.assign({}, [i.split(":")[0], i.split(":")[1].split("\n")])
      );
    return parseRes;
  });
  return parseRes;
};
