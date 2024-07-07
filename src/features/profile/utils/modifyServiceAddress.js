import { cloneDeep } from "lodash";

const modifyServiceAddress = (serviceAddress) => {
  const _serviceAddress = cloneDeep(serviceAddress);

  _serviceAddress.sort((add1, add2) => {
    if (add1?.village?.length && !add2.village?.length) return 1;
    if (!add1?.village?.length && add2.village?.length) return -1;

    if (add1?.union?.title && !add2.union?.title) return 1;
    if (!add1?.union?.title && add2.union?.title) return -1;

    if (add1?.upazila?.title && !add2.upazila?.title) return 1;
    if (!add1?.upazila?.title && add2.upazila?.title) return -1;

    if (add1?.district?.title && !add2.district?.title) return 1;
    if (!add1?.district?.title && add2.district?.title) return -1;

    if (add1?.division?.title && !add2.division?.title) return 1;
    if (!add1?.division?.title && add2.division?.title) return -1;
  });

  return _serviceAddress.map((address) => {
    const title = address?.village?.length
      ? `${address?.union?.title} ইউনিয়ন: ${address.village.map((v) => v.title)}`
      : address?.union?.title
        ? `সমগ্র ${address?.union?.title} ইউনিয়ন`
        : address?.upazila?.title
          ? `সমগ্র ${address?.upazila?.title} উপজেলা`
          : address?.district?.title
            ? `সমগ্র ${address?.district?.title} জেলা`
            : address?.division?.title
              ? `সমগ্র ${address?.division?.title} বিভাগ`
              : "";
    return "➡️ " + title;
  });
};

export default modifyServiceAddress;
