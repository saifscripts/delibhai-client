const getAddressText = (address) => {
    const division = address?.division || "";
    const district = address?.district ? address?.district + ", " : "";
    const upazila = address?.upazila ? address?.upazila + ", " : "";
    const union = address?.union ? address?.union + ", " : "";

    return address && `${union}${upazila}${district}${division}।`

}

export default getAddressText;