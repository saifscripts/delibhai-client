import cloneDeep from "lodash/cloneDeep";

const getSelectedAddress = (address) => {
  const _address = cloneDeep(address);

  for (const field in _address) {
    _address[field] = _address[field]?.find(({ selected }) => selected)?.title;
  }

  return _address;
};

export default getSelectedAddress;
