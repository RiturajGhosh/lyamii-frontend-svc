export const parseTourData = (response: string) => {
  console.log(response);
  const parseRes = JSON.parse(JSON.stringify(response));
  parseRes.description = parseRes.description.split("\n");
  parseRes.destinations = parseRes.destinations.split("\n");
  parseRes.highlights = parseRes.highlights.split("\n");
  parseRes.includes = parseRes.includes.split("\n");
  parseRes.packagePrice = parseRes.packagePrice.split("\n");
  parseRes.itinerary = parseRes.itinerary.split(",").map((i: any) =>
    Object.assign({}, [
      i
        .replaceAll(/"+/g, "")
        .split(":")
        .slice(-2, -1)
        .join(",")
        .replaceAll("\n", ""),
      i
        .replaceAll(/"+/g, "")
        .split(":")
        .slice(-1)
        .join("")
        .replaceAll("\n", ",")
        .split(",")
        .filter(function (e: any) {
          return e;
        }),
    ])
  );
  return parseRes;
};

export const parseTourDataArray = (response: string) => {
  const parseRes = JSON.parse(JSON.stringify(response));
  parseRes.forEach((res: any) => {
    res.description = res.description.split("\n");
    res.destinations = res.destinations.split("\n");
    res.highlights = res.highlights.split("\n");
    res.includes = res.includes.split("\n");
    res.packagePrice = res.packagePrice.split("\n");
    res.itinerary = res.itinerary.split(",").map((i: any) =>
      Object.assign({}, [
        i
          .replaceAll(/"+/g, "")
          .split(":")
          .slice(-2, -1)
          .join(",")
          .replaceAll("\n", "")
          .replaceAll('"', ""),
        i
          .replaceAll(/"+/g, "")
          .split(":")
          .slice(-1)
          .join("")
          .replaceAll("\n", ",")
          .replaceAll('"', "")
          .split(",")
          .filter(function (e: any) {
            return e;
          }),
      ])
    );
    return parseRes;
  });
  return parseRes;
};
