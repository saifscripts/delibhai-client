const getAddressId = (address) => {
    const _address = {};
    for (const field in address) {
        if(Array.isArray(address[field])) {
            _address[field] = address[field].map(f => f._id);
        } else {
            _address[field] = address[field]._id;
        }
    }
    return _address;
}

export default getAddressId;