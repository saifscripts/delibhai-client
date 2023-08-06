// icons
import nid from '../assets/icons/NID.svg';
import age from '../assets/icons/age.svg';
import bloodGroup from '../assets/icons/blood-group.svg';
import clock from '../assets/icons/clock.svg';
import email from '../assets/icons/email.svg';
import facebook from '../assets/icons/facebook.svg';
import father from '../assets/icons/father.svg';
import marker from '../assets/icons/marker.svg';
import phone from '../assets/icons/phone.svg';
import serviceArea from '../assets/icons/service-area.svg';
import serviceType from '../assets/icons/service-type.svg';
import sex from '../assets/icons/sex.svg';
import station from '../assets/icons/station.svg';
import steering from '../assets/icons/steering.svg';
import person from '../assets/icons/user.svg';
import vehicleName from '../assets/icons/vehicle--name.svg';
import vehicleBrand from '../assets/icons/vehicle-brand.svg';
import vehicleModel from '../assets/icons/vehicle-model.svg';
import vehicleNumber from '../assets/icons/vehicle-number.svg';
import vehicleType from '../assets/icons/vehicle.svg';

// others
import { useEffect, useState } from 'react';
import heros from '../../../data/heros';
import convertNumber from '../../../utils/convertNumber';
import { getServiceTime } from '../../../utils/convertTime';

const useUserInfo = (id) => {
  const [userInfo, setUserInfo] = useState({});

  useEffect(() => setUserInfo(heros.find((hero) => hero.id === id)), [id]);

  const modifiedInfo = {
    personal: [
      { info: userInfo.name, type: 'নিজের নাম', icon: person },
      { info: userInfo.father, type: 'পিতার নাম', icon: father },
      { info: userInfo.sex, type: 'লিঙ্গ', icon: sex },
      { info: userInfo.bloodGroup, type: 'রক্তের গ্রুপ', icon: bloodGroup },
      { info: `${convertNumber(userInfo.age)} বছর`, type: 'বয়স', icon: age },
      { info: userInfo.nid, type: 'জন্মনিবন্ধন/NID নম্বর', icon: nid },
    ],
    contact: [
      { info: userInfo.mobile1, type: 'মোবাইল নম্বর', icon: phone },
      { info: userInfo.mobile2, type: 'বিকল্প মোবাইল নম্বর', icon: phone },
      { info: userInfo.email, type: 'ই-মেইল', icon: email },
      { info: userInfo.facebook, type: 'ফেইসবুক লিংক', icon: facebook },
    ],
    address: [
      { info: userInfo.presentAddress, type: 'বর্তমান ঠিকানা', icon: marker },
      { info: userInfo.permanentAddress, type: 'স্থায়ী ঠিকানা', icon: marker },
    ],
    vehicle: [
      { info: userInfo.vehicleType, type: 'গাড়ির ধরণ', icon: vehicleType },
      {
        info: userInfo.vehicleBrand,
        type: 'গাড়ির ব্র্যান্ড',
        icon: vehicleBrand,
      },
      { info: userInfo.vehicleModel, type: 'গাড়ির মডেল', icon: vehicleModel },
      {
        info: userInfo.vehicleNumber,
        type: 'গাড়ির নম্বর',
        icon: vehicleNumber,
      },
      { info: userInfo.vehicleName, type: 'গাড়ির নাম', icon: vehicleName },
    ],
    owner: [
      { info: userInfo.ownerName, type: 'কোম্পানির নাম', icon: person },
      { info: userInfo.ownerAddress, type: 'ঠিকানা', icon: marker },
      { info: userInfo.ownerMobile, type: 'মোবাইল', icon: phone },
      { info: userInfo.ownerEmail, type: 'ই-মেইল', icon: email },
    ],
    service: [
      { info: userInfo.serviceUsage, type: 'গাড়ির ব্যবহার', icon: steering },
      { info: userInfo.serviceType, type: 'গাড়ির সেবা', icon: serviceType },
      { info: userInfo.mainStation, type: 'প্রধান স্ট্যাশন', icon: station },
      {
        info: userInfo.serviceAreas?.join(', '),
        type: 'সার্ভিস প্রদানের এলাকা সমূহ',
        icon: serviceArea,
      },
      {
        info: getServiceTime(userInfo.serviceTime),
        type: 'সার্ভিস প্রদানের সময়',
        icon: clock,
      },
    ],
    location: [
      { info: userInfo.location?.division, type: 'বিভাগ', icon: marker },
      { info: userInfo.location?.district, type: 'জেলা', icon: marker },
      {
        info: userInfo.location?.subDistrict,
        type: 'উপজেলা/পৌরসভা',
        icon: marker,
      },
      { info: userInfo.location?.thana, type: 'থানা', icon: marker },
      {
        info: userInfo.location?.union,
        type: 'ইউনিয়ন/সিটি কর্পোরেশন',
        icon: marker,
      },
      { info: userInfo.location?.PO, type: 'পোস্ট অফিস', icon: marker },
      { info: userInfo.location?.zip, type: 'পোস্ট কোড', icon: marker },
      { info: userInfo.location?.village, type: 'গ্রাম/মহল্লা', icon: marker },
      { info: userInfo.location?.station, type: 'স্ট্যাশন', icon: marker },
    ],
  };

  return [userInfo, modifiedInfo];
};

export default useUserInfo;
