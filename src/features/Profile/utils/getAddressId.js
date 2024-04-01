const getAddressId = (address) => {
    const _address = {};
    for (const field in address) {
        _address[field] = address[field]._id;
    }
    return _address;
}

export default getAddressId;