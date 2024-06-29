import getAddressId from "./getAddressId";

const isAddressExist = (tAddress, addressArray) => {
  const tAddressWithId = getAddressId(tAddress);

  const matchedAddressIndex = addressArray.findIndex((address) => {
    for (const [tAddressField, tAddressValue] of Object.entries(
      tAddressWithId,
    )) {
      const sAddressValue = address[tAddressField]?._id;

      // if service address value is undefined than service address is matched
      if (!sAddressValue) {
        return true;
      }

      // if service address value is equal to target address value then service address is not matched
      if (sAddressValue !== tAddressValue) {
        return false;
      }
    }

    // here all the fields matched so service address is matched
    return true;
  });

  const isExist = matchedAddressIndex > -1;

  return isExist;
};

export default isAddressExist;
