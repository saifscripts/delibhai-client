const getMainStationTitle = (address) => {
  return address?.village?.title || address?.union?.title;
};

export default getMainStationTitle;
