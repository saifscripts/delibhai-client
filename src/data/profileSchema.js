import nid from "../assets/profile-icons/NID.svg";
import age from "../assets/profile-icons/age.svg";
import bloodGroup from "../assets/profile-icons/blood-group.svg";
import clock from "../assets/profile-icons/clock.svg";
import email from "../assets/profile-icons/email.svg";
import facebook from "../assets/profile-icons/facebook.svg";
import father from "../assets/profile-icons/father.svg";
import marker from "../assets/profile-icons/marker.svg";
import phone from "../assets/profile-icons/phone.svg";
import serviceAddress from "../assets/profile-icons/service-area.svg";
import serviceType from "../assets/profile-icons/service-type.svg";
import gender from "../assets/profile-icons/sex.svg";
import station from "../assets/profile-icons/station.svg";
import steering from "../assets/profile-icons/steering.svg";
import person from "../assets/profile-icons/user.svg";
import vehicleName from "../assets/profile-icons/vehicle--name.svg";
import vehicleBrand from "../assets/profile-icons/vehicle-brand.svg";
import vehicleModel from "../assets/profile-icons/vehicle-model.svg";
import vehicleNumber from "../assets/profile-icons/vehicle-number.svg";
import vehicleType from "../assets/profile-icons/vehicle.svg";
import { getServiceTimes } from "../features/Profile/utils/convertTime";
import getAddressTitles from "../features/Profile/utils/getAddressTitles";
import getVillages from "../features/Profile/utils/getVillages";
import modifyAge from "../features/Profile/utils/modifyAge";

const profileSchema = {
  general: [
    {
      category: "ব্যক্তিগত তথ্য",
      editRoute: "/profile/edit/personal-info",
      fields: [
        { dataKey: "name", label: "নিজের নাম", icon: person },
        {
          dataKey: "fatherName",
          label: "পিতার নাম",
          icon: father,
        },
        {
          dataKey: "gender",
          label: "লিঙ্গ",
          icon: gender,
        },
        {
          dataKey: "bloodGroup",
          label: "রক্তের গ্রুপ",
          icon: bloodGroup,
        },
        {
          dataKey: "age",
          dataModifier: modifyAge,
          label: "বয়স",
          icon: age,
        },
        {
          dataKey: "nid",
          label: "জন্মনিবন্ধন/NID নম্বর",
          icon: nid,
          isPrivate: true,
        },
      ],
    },
    {
      category: "কন্টাক্ট ইনফো",
      editRoute: "/profile/edit/contact-info",
      fields: [
        {
          dataKey: "mobile",
          label: "মোবাইল নম্বর",
          icon: phone,
        },
        {
          dataKey: "altMobile",
          label: "বিকল্প মোবাইল নম্বর",
          icon: phone,
        },
        { dataKey: "email", label: "ই-মেইল", icon: email },
        {
          dataKey: "facebookURL",
          label: "ফেইসবুক লিংক",
          icon: facebook,
        },
      ],
    },
    {
      category: "ঠিকানা",
      editRoute: "/profile/edit/address",
      fields: [
        {
          dataKey: "presentAddress",
          dataModifier: getAddressTitles,
          label: "বর্তমান ঠিকানা",
          icon: marker,
        },
        {
          dataKey: "permanentAddress",
          dataModifier: getAddressTitles,
          label: "স্থায়ী ঠিকানা",
          icon: marker,
        },
      ],
    },
  ],
  vehicle: [
    {
      category: "গাড়ির সাধারণ তথ্য",
      editRoute: "/profile/edit/vehicle-info",
      fields: [
        {
          dataKey: "vehicleType",
          label: "গাড়ির ধরণ",
          icon: vehicleType,
        },
        {
          dataKey: "vehicleBrand",
          label: "গাড়ির ব্র্যান্ড",
          icon: vehicleBrand,
        },
        {
          dataKey: "vehicleModel",
          label: "গাড়ির মডেল",
          icon: vehicleModel,
        },
        {
          dataKey: "vehicleNumber",
          label: "গাড়ির নম্বর",
          icon: vehicleNumber,
        },
        {
          dataKey: "vehicleName",
          label: "গাড়ির নাম",
          icon: vehicleName,
        },
      ],
    },
    {
      category: "গাড়ির মালিকানার তথ্য",
      editRoute: "/profile/edit/owner-info",
      fields: [
        {
          dataKey: "ownerName",
          label: "কোম্পানি/মালিকের নাম",
          icon: person,
        },
        {
          dataKey: "ownerAddress",
          dataModifier: getAddressTitles,
          label: "স্থায়ী ঠিকানা",
          icon: marker,
        },
        {
          dataKey: "ownerMobile",
          label: "মোবাইল",
          icon: phone,
        },
        {
          dataKey: "ownerEmail",
          label: "ই-মেইল",
          icon: email,
        },
      ],
    },
  ],
  service: [
    {
      category: "সার্ভিস তথ্য",
      editRoute: "/profile/edit/service-info",
      fields: [
        {
          dataKey: "serviceUsage",
          label: "গাড়ির ব্যবহার",
          icon: steering,
        },
        {
          dataKey: "serviceType",
          label: "গাড়ির সেবা",
          icon: serviceType,
        },
        { dataKey: "mainStation", label: "প্রধান স্ট্যাশন", icon: station },
        {
          dataKey: "serviceAddress",
          dataModifier: getVillages,
          label: "সার্ভিস প্রদানের এলাকা সমূহ",
          icon: serviceAddress,
        },
        {
          dataKey: "serviceTimes",
          dataModifier: getServiceTimes,
          label: "সার্ভিস প্রদানের সময়",
          icon: clock,
        },
      ],
    },
  ],
  location: [
    {
      category: "ম্যানুয়াল লোকেশন",
      editRoute: "/profile/edit/manual-location-info",
      fields: [
        {
          dataKey: "manualLocation",
          dataModifier: getAddressTitles,
          label: "ঠিকানা",
          icon: marker,
        },
        {
          dataKey: "station",
          label: "স্ট্যাশন",
          icon: station,
        },
      ],
    },
  ],
};

export default profileSchema;
