const useAddressFields = () => {
  return [
    { type: "category", label: "বর্তমান ঠিকানা" },
    {
      type: "select",
      options: ["চট্টগ্রাম", "ঢাকা"],
      info: "চট্টগ্রাম",
      label: "বিভাগ",
    },
    {
      type: "select",
      options: ["চট্টগ্রাম", "ঢাকা"],
      info: "চট্টগ্রাম",
      label: "জেলা",
    },
    {
      type: "select",
      options: ["চট্টগ্রাম", "ঢাকা"],
      info: "চট্টগ্রাম",
      label: "উপজেলা/পৌরসভা/সিটি কর্পোরেশন",
    },
    {
      type: "select",
      options: ["চট্টগ্রাম", "ঢাকা"],
      info: "চট্টগ্রাম",
      label: "থানা",
    },
    {
      type: "select",
      options: ["চট্টগ্রাম", "ঢাকা"],
      info: "চট্টগ্রাম",
      label: "ইউনিয়ন",
    },
    {
      type: "select",
      options: ["চট্টগ্রাম", "ঢাকা"],
      info: "চট্টগ্রাম",
      label: "পোস্ট অফিস",
    },
    {
      type: "number",
      label: "পোস্ট কোড",
      info: 4327,
    },

    { type: "category", label: "স্থায়ী ঠিকানা" },

    {
      type: "radio",
      name: "address",
      checked: true,
      label: "বর্তমান ও স্থায়ী ঠিকানা একই",
    },
    {
      type: "radio",
      name: "address",
      checked: false,
      label: "বর্তমান ও স্থায়ী ঠিকানা একই নয়",
    },
    {
      type: "select",
      options: ["চট্টগ্রাম", "ঢাকা"],
      info: "চট্টগ্রাম",
      label: "বিভাগ",
      hidden: true,
    },
    {
      type: "select",
      options: ["চট্টগ্রাম", "ঢাকা"],
      info: "চট্টগ্রাম",
      label: "জেলা",
      hidden: true,
    },
    {
      type: "select",
      options: ["চট্টগ্রাম", "ঢাকা"],
      info: "চট্টগ্রাম",
      label: "উপজেলা/পৌরসভা/সিটি কর্পোরেশন",
      hidden: true,
    },
    {
      type: "select",
      options: ["চট্টগ্রাম", "ঢাকা"],
      info: "চট্টগ্রাম",
      label: "থানা",
      hidden: true,
    },
    {
      type: "select",
      options: ["চট্টগ্রাম", "ঢাকা"],
      info: "চট্টগ্রাম",
      label: "ইউনিয়ন",
      hidden: true,
    },
    {
      type: "select",
      options: ["চট্টগ্রাম", "ঢাকা"],
      info: "চট্টগ্রাম",
      label: "পোস্ট অফিস",
      hidden: true,
    },
    {
      type: "number",
      label: "পোস্ট কোড",
      info: 4327,
      hidden: true,
    },
  ];
};

export default useAddressFields;
