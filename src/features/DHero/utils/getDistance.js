export const deg2rad = (deg) => {
  return deg * (Math.PI / 180);
};

export const getDistance = (geolocation1, geolocation2) => {
  const { latitude: lat1, longitude: lon1 } = geolocation1;
  const { latitude: lat2, longitude: lon2 } = geolocation2;

  const R = 6371; // Radius of the earth in km
  const dLat = deg2rad(lat2 - lat1);
  const dLon = deg2rad(lon2 - lon1);

  const angularDistance =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(deg2rad(lat1)) *
      Math.cos(deg2rad(lat2)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);

  const centralAngle =
    2 * Math.atan2(Math.sqrt(angularDistance), Math.sqrt(1 - angularDistance));

  const distance = (R * centralAngle).toFixed(2); // Distance in km
  return distance;
};
