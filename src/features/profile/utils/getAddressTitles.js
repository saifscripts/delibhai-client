const getAddressTitles = (address) => {
  const division = address?.division?.title || "";
  const district = address?.district ? address?.district?.title + ", " : "";
  const upazila = address?.upazila ? address?.upazila?.title + ", " : "";
  const union = address?.union ? address?.union?.title + ", " : "";
  const village = address?.village ? address?.village?.title + ", " : "";

  return address && `${village}${union}${upazila}${district}${division}।`;
};

export default getAddressTitles;
