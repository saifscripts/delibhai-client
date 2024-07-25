const isArray = (arr) => Array.isArray(arr);

const getAddressId = (address) => {
  const _address = {};

  for (const [key, value] of Object.entries(address || {})) {
    if (!value || (isArray(value) && !value.length)) {
      continue;
    }

    if (isArray(value)) {
      _address[key] = value?.map((item) => item?._id);
    } else {
      _address[key] = value?._id;
    }
  }

  return _address;
};

export default getAddressId;
