import nid from "../assets/icons/NID.svg";
import age from "../assets/icons/age.svg";
import bloodGroup from "../assets/icons/blood-group.svg";
import clock from "../assets/icons/clock.svg";
import email from "../assets/icons/email.svg";
import facebook from "../assets/icons/facebook.svg";
import father from "../assets/icons/father.svg";
import marker from "../assets/icons/marker.svg";
import phone from "../assets/icons/phone.svg";
import serviceAddress from "../assets/icons/service-area.svg";
import serviceType from "../assets/icons/service-type.svg";
import gender from "../assets/icons/sex.svg";
import station from "../assets/icons/station.svg";
import steering from "../assets/icons/steering.svg";
import person from "../assets/icons/user.svg";
import vehicleName from "../assets/icons/vehicle--name.svg";
import vehicleBrand from "../assets/icons/vehicle-brand.svg";
import vehicleModel from "../assets/icons/vehicle-model.svg";
import vehicleNumber from "../assets/icons/vehicle-number.svg";
import vehicleType from "../assets/icons/vehicle.svg";
import { getServiceTimes } from "../utils/convertTime";
import getAddressTitles from "../utils/getAddressTitles";
import modifyAge from "../utils/modifyAge";

const profileSchema = {
  generalInfo: [
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
  vehicleInfo: [
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
  serviceInfo: [
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
          dataModifier: (serviceAddress) => serviceAddress?.areas?.join(", "),
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
  locationInfo: [
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
