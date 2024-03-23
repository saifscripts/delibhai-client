const generateSearchString = (searchParams) => {
  let searchString = "";

  for (const key in searchParams) {
    let value = searchParams[key];

    if (typeof value === "object") {
      value = JSON.stringify(searchParams[key]);
    }

    searchString += `${key}=${value}&`;
  }

  return searchString.slice(0, -1);
};

export default generateSearchString;
