import { fetchData } from "../../../lib/api/api.js";

const divisions = [
  {
      _id: "660877f14acc081c2ec906c9",
      title: "চট্টগ্রাম"
  },
  {
      _id: "660877f14acc081c2ec906cd",
      title: "রংপুর"
  },
  {
      _id: "660877f14acc081c2ec906c8",
      title: "ঢাকা"
  },
  {
      _id: "660877f14acc081c2ec906ce",
      title: "বরিশাল"
  },
  {
      _id: "660877f14acc081c2ec906ca",
      title: "রাজশাহী"
  },
  {
      _id: "660877f14acc081c2ec906cb",
      title: "খুলনা"
  },
  {
      _id: "660877f14acc081c2ec906cc",
      title: "ময়মনসিংহ"
  },
  {
      _id: "660877f14acc081c2ec906cf",
      title: "সিলেট"
  }
]

const getDistricts = async (divisionId) => {
  if(!divisionId) return;

  const { data } = await fetchData(`/v1/district/${divisionId}`);
  return data;
};

const getUpazilas = async (districtId) => {
  if(!districtId) return;

  const { data } = await fetchData(`/v1/upazila/${districtId}`);
  return data;
};

const getUnions = async (upazilaId) => {
  if(!upazilaId) return;

  const { data } = await fetchData(`/v1/union/${upazilaId}`);
  return data;
};

const getVillages = async (unionId) => {
  if (!unionId) return;

  const { data } = await fetchData(`/v1/village/${unionId}`);
  return data;
};

const generateAddressFields = async (address) => {
  if (!address) {
    return { divisions };
  }

  const { division, district, upazila, union } = address;
  const locations = await Promise.all([getDistricts(division?._id), getUpazilas(district?._id), getUnions(upazila?._id), getVillages(union?._id)])

  return {
    divisions,
    districts: locations[0],
    upazilas: locations[1],
    unions: locations[2],
    villages: locations[3],
  };
};

export default generateAddressFields;
