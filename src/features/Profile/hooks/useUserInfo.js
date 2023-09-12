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

  const { presentAddress = {}, permanentAddress = {} } = userInfo;

  const modifiedInfo = {
    personal: [
      { type: 'text', info: userInfo.name, label: 'নিজের নাম', icon: person },
      { type: 'text', info: userInfo.father, label: 'পিতার নাম', icon: father },
      {
        type: 'select',
        options: ['পুরুষ', 'মহিলা', 'অন্যান্য'],
        info: userInfo.sex,
        label: 'লিঙ্গ',
        icon: sex,
      },
      {
        type: 'select',
        options: ['A+', 'B+', 'AB+', 'O+', 'A-', 'B-', 'AB-', 'O-'],
        info: userInfo.bloodGroup,
        label: 'রক্তের গ্রুপ',
        icon: bloodGroup,
      },
      {
        type: 'number',
        data: userInfo.age,
        info: `${convertNumber(userInfo.age)} বছর`,
        label: 'বয়স',
        icon: age,
      },
      {
        type: 'text',
        info: userInfo.nid,
        label: 'জন্মনিবন্ধন/NID নম্বর',
        icon: nid,
      },
      {
        type: 'file',
        label: 'জন্মনিবন্ধন/NID এর ছবি',
        editOnly: true,
      },
    ],
    contact: [
      {
        type: 'number',
        info: userInfo.mobile1,
        label: 'মোবাইল নম্বর',
        icon: phone,
      },
      {
        type: 'number',
        info: userInfo.mobile2,
        label: 'বিকল্প মোবাইল নম্বর',
        icon: phone,
      },
      { type: 'email', info: userInfo.email, label: 'ই-মেইল', icon: email },
      {
        type: 'text',
        info: userInfo.facebook,
        label: 'ফেইসবুক লিংক',
        icon: facebook,
      },
    ],
    address: [
      {
        info: `${presentAddress.street}, ${presentAddress.post} - ${presentAddress.zip}, ${presentAddress.subDistrict}, ${presentAddress.district}।`,
        label: 'বর্তমান ঠিকানা',
        icon: marker,
      },
      {
        info: `${permanentAddress.street}, ${permanentAddress.post} - ${permanentAddress.zip}, ${permanentAddress.subDistrict}, ${permanentAddress.district}।`,
        label: 'স্থায়ী ঠিকানা',
        icon: marker,
      },
    ],
    vehicle: [
      {
        type: 'select',
        options: ['বাইক', 'কার', 'সিএনজি', 'টমটম'],
        info: userInfo.vehicleType,
        label: 'গাড়ির ধরণ',
        icon: vehicleType,
      },
      {
        type: 'text',
        info: userInfo.vehicleBrand,
        label: 'গাড়ির ব্র্যান্ড',
        icon: vehicleBrand,
      },
      {
        type: 'text',
        info: userInfo.vehicleModel,
        label: 'গাড়ির মডেল',
        icon: vehicleModel,
      },
      {
        type: 'text',
        info: userInfo.vehicleNumber,
        label: 'গাড়ির নম্বর',
        icon: vehicleNumber,
      },
      {
        type: 'text',
        info: userInfo.vehicleName,
        label: 'গাড়ির নাম',
        icon: vehicleName,
      },
    ],
    owner: [
      {
        type: 'text',
        info: userInfo.ownerName,
        label: 'কোম্পানি/মালিকের নাম',
        icon: person,
      },
      { type: 'category', label: 'বর্তমান ঠিকানা', editOnly: true },
      {
        type: 'select',
        options: ['চট্টগ্রাম', 'ঢাকা'],
        info: 'চট্টগ্রাম',
        label: 'বিভাগ',
        editOnly: true,
      },
      {
        type: 'select',
        options: ['চট্টগ্রাম', 'ঢাকা'],
        info: 'চট্টগ্রাম',
        label: 'জেলা',
        editOnly: true,
      },
      {
        type: 'select',
        options: ['চট্টগ্রাম', 'ঢাকা'],
        info: 'চট্টগ্রাম',
        label: 'উপজেলা/পৌরসভা/সিটি কর্পোরেশন',
        editOnly: true,
      },
      {
        type: 'select',
        options: ['চট্টগ্রাম', 'ঢাকা'],
        info: 'চট্টগ্রাম',
        label: 'থানা',
        editOnly: true,
      },
      {
        type: 'select',
        options: ['চট্টগ্রাম', 'ঢাকা'],
        info: 'চট্টগ্রাম',
        label: 'ইউনিয়ন',
        editOnly: true,
      },
      {
        type: 'select',
        options: ['চট্টগ্রাম', 'ঢাকা'],
        info: 'চট্টগ্রাম',
        label: 'পোস্ট অফিস',
        editOnly: true,
      },
      {
        type: 'number',
        label: 'পোস্ট কোড',
        info: 4327,
        editOnly: true,
      },
      {
        info: userInfo.ownerAddress,
        label: 'ঠিকানা',
        icon: marker,
        hidden: true,
      },
      {
        type: 'text',
        info: userInfo.ownerMobile,
        label: 'মোবাইল',
        icon: phone,
      },
      {
        type: 'emeil',
        info: userInfo.ownerEmail,
        label: 'ই-মেইল',
        icon: email,
      },
    ],
    service: [
      { type: 'select', options:['ব্যক্তিগত', 'ভাড়ায় চালিত'], info: userInfo.serviceUsage, label: 'গাড়ির ব্যবহার', icon: steering },
      { type: 'select',options:['লোকাল ভাড়া', 'রিজার্ভ ভাড়া', 'লোকাল ও রিজার্ভ ভাড়া', 'কন্টাক্ট ভাড়া'], info: userInfo.serviceType, label: 'গাড়ির সেবা', icon: serviceType },
      { type: 'category', label: 'সার্ভিস প্রদানের এলাকা', editOnly: true },
      
      {
        type: 'select',
        options: ['চট্টগ্রাম', 'ঢাকা'],
        info: userInfo.serviceArea?.district,
        label: 'জেলা',
        editOnly: true,
      },
      {
        type: 'select',
        options: ['ফটিকছড়ি', 'হাটহাজারি'],
        info: userInfo.serviceArea?.subDistrict,
        label: 'উপজেলা/পৌরসভা/সিটি কর্পোরেশন',
        editOnly: true,
      },
      
      {
        type: 'select',
        options: ['বিবিরহাট', 'হেয়াকো'],
        info: userInfo.serviceArea?.post,
        label: 'পোস্ট অফিস',
        editOnly: true,
      },
      {
        type: 'number',
        label: 'পোস্ট কোড',
        info: userInfo.serviceArea?.zip,
        editOnly: true,
      },
      { type: 'text', info: userInfo.mainStation, label: 'প্রধান স্ট্যাশন', icon: station },
      {
        type: 'checkbox',
        options: [
          'হেয়াকো',
          'সওদাগর পাড়া',
          'অলিপুর',
          'মুসলিমপুর',
          'মুসলিমপাড়া',
          'বেকের বাজার',
          'পূর্ব পাড়া',
          'সরকার পাড়া'
        ],
        info: userInfo.serviceArea?.areas?.join(', '),
        data: userInfo.serviceArea?.areas,
        label: 'সার্ভিস প্রদানের এলাকা সমূহ',
        icon: serviceArea,
      },
      {
        type: 'time',
        info: getServiceTime(userInfo.serviceTime),
        data: userInfo.serviceTime,
        label: 'সার্ভিস প্রদানের সময়',
        icon: clock,
      },
    ],
    location: [
      {
        info: `${userInfo.location?.post}, ${userInfo.location?.thana}, ${userInfo.location?.subDistrict}, ${userInfo.location?.district}।`,
        label: 'ঠিকানা',
        icon: marker,
        hidden: true
      },
      { 
        type: 'select',
        options: ['চট্টগ্রাম', 'ঢাকা'],
        info: userInfo.location?.division, 
        label: 'বিভাগ', 
        editOnly:true
      },
      { 
        type: 'select',
        options: ['চট্টগ্রাম', 'ঢাকা'],
        info: userInfo.location?.district, 
        label: 'জেলা', 
        editOnly:true
      },
      {
        type: 'select',
        options: ['চট্টগ্রাম', 'ঢাকা'],
        info: userInfo.location?.subDistrict,
        label: 'উপজেলা/পৌরসভা/সিটি কর্পোরেশন',
        editOnly:true
      },
      {
        type: 'select',
        options: ['চট্টগ্রাম', 'ঢাকা'],
        info: userInfo.location?.union,
        label: 'ইউনিয়ন',
        editOnly:true
      },
      { 
        type: 'select',
        options: ['চট্টগ্রাম', 'ঢাকা'],
        info: userInfo.location?.post, 
        label: 'পোস্ট অফিস', 
        editOnly:true
      },
      { 
        type: 'number',
        info: userInfo.location?.zip, 
        label: 'পোস্ট কোড', 
        editOnly:true
      },
      { 
        type: 'select',
        options: ['চট্টগ্রাম', 'ঢাকা'],
        info: userInfo.location?.station, 
        label: 'স্ট্যাশন', 
        icon: station
      },
    ],
  };

  return [userInfo, modifiedInfo];
};

export default useUserInfo;
