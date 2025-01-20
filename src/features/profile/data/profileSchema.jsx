import { getServiceTimes } from '../../../utils/convertTime';
import getMainStationTitle from '../../../utils/getVillageTitle';
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
import rentType from '../assets/icons/service-type.svg';
import gender from '../assets/icons/sex.svg';
import station from '../assets/icons/station.svg';
import steering from '../assets/icons/steering.svg';
import person from '../assets/icons/user.svg';
import vehicleName from '../assets/icons/vehicle--name.svg';
import vehicleBrand from '../assets/icons/vehicle-brand.svg';
import vehicleModel from '../assets/icons/vehicle-model.svg';
import vehicleNumber from '../assets/icons/vehicle-number.svg';
import vehicleType from '../assets/icons/vehicle.svg';
import EditMainStation from '../components/EditProfile/EditMainStation';
import EditServiceArea from '../components/EditProfile/EditServiceArea';
import EditServiceTime from '../components/EditProfile/EditServiceTime';
import getAddressTitles from '../utils/getAddressTitles';
import modifyAge from '../utils/modifyAge';
import modifyServiceAddress from '../utils/modifyServiceAddress';

const profileSchema = {
  general: [
    {
      category: 'ব্যক্তিগত তথ্য',
      editModal: 'personal',
      fields: [
        { dataKey: 'name', label: 'নিজের নাম', icon: person },
        {
          dataKey: 'fatherName',
          label: 'পিতার নাম',
          icon: father,
        },
        {
          dataKey: 'gender',
          label: 'লিঙ্গ',
          icon: gender,
        },
        {
          dataKey: 'bloodGroup',
          label: 'রক্তের গ্রুপ',
          icon: bloodGroup,
        },
        {
          dataKey: 'dateOfBirth',
          dataModifier: modifyAge,
          label: 'বয়স',
          icon: age,
        },
        {
          dataKey: 'nid',
          label: 'জন্মনিবন্ধন/NID নম্বর',
          icon: nid,
          isPrivate: true,
        },
        {
          dataKey: 'nidURL',
          label: 'জন্মনিবন্ধন/NID এর ছবি',
          icon: nid,
          isPrivate: true,
        },
      ],
    },
    {
      category: 'কন্টাক্ট ইনফো',
      editModal: 'contact',
      fields: [
        {
          dataKey: 'contactNo1',
          label: 'মোবাইল নম্বর',
          icon: phone,
        },
        {
          dataKey: 'contactNo2',
          label: 'বিকল্প মোবাইল নম্বর',
          icon: phone,
        },
        { dataKey: 'email', label: 'ই-মেইল', icon: email },
        {
          dataKey: 'facebookURL',
          label: 'ফেইসবুক লিংক',
          icon: facebook,
        },
      ],
    },
    {
      category: 'ঠিকানা',
      editModal: 'address',
      fields: [
        {
          dataKey: 'presentAddress',
          dataModifier: getAddressTitles,
          label: 'বর্তমান ঠিকানা',
          icon: marker,
        },
        {
          dataKey: 'permanentAddress',
          dataModifier: getAddressTitles,
          label: 'স্থায়ী ঠিকানা',
          icon: marker,
        },
      ],
    },
  ],
  vehicle: [
    {
      category: 'গাড়ির সাধারণ তথ্য',
      editModal: 'vehicle',
      fields: [
        {
          dataKey: 'vehicleType',
          label: 'গাড়ি',
          icon: vehicleType,
        },
        {
          dataKey: 'vehicleSubType',
          label: 'গাড়ির ধরণ',
          icon: vehicleType,
        },
        {
          dataKey: 'vehicleBrand',
          label: 'গাড়ির ব্র্যান্ড',
          icon: vehicleBrand,
        },
        {
          dataKey: 'vehicleModel',
          label: 'গাড়ির মডেল',
          icon: vehicleModel,
        },
        {
          dataKey: 'vehicleNumber',
          label: 'গাড়ির নম্বর',
          icon: vehicleNumber,
        },
        {
          dataKey: 'vehicleName',
          label: 'গাড়ির নাম',
          icon: vehicleName,
        },
      ],
    },
    {
      category: 'গাড়ির মালিকানার তথ্য',
      editModal: 'owner',
      fields: [
        {
          dataKey: 'ownerName',
          label: 'কোম্পানি/মালিকের নাম',
          icon: person,
        },
        {
          dataKey: 'ownerAddress',
          dataModifier: getAddressTitles,
          label: 'স্থায়ী ঠিকানা',
          icon: marker,
        },
        {
          dataKey: 'ownerContactNo',
          label: 'মোবাইল',
          icon: phone,
        },
        {
          dataKey: 'ownerEmail',
          label: 'ই-মেইল',
          icon: email,
        },
      ],
    },
    {
      category: 'গাড়ির ছবি',
      fields: [
        {
          dataKey: 'vehiclePhotos',
        },
      ],
    },
  ],
  service: [
    {
      category: 'সার্ভিস তথ্য',
      editModal: 'service',
      fields: [
        {
          dataKey: 'serviceType',
          label: 'গাড়ির ব্যবহার',
          icon: steering,
        },
        {
          dataKey: 'rentType',
          label: 'ভাড়ার ধরণ',
          icon: rentType,
          dataModifier: (value) => value.join(', '),
        },
        {
          dataKey: 'mainStation',
          dataModifier: getMainStationTitle,
          label: 'প্রধান স্ট্যাশন',
          icon: station,
          edit: <EditMainStation />,
        },
        {
          dataKey: 'serviceArea',
          dataModifier: modifyServiceAddress,
          label: 'সার্ভিস প্রদানের এলাকা সমূহ',
          icon: serviceArea,
          edit: <EditServiceArea />,
        },
        {
          dataKey: 'serviceTimeSlots',
          dataModifier: getServiceTimes,
          label: 'সার্ভিস প্রদানের সময়',
          icon: clock,
          edit: <EditServiceTime />,
        },
      ],
    },
  ],
  location: [
    {
      category: 'ম্যানুয়াল লোকেশন',
      editModal: 'manual-location',
      fields: [
        {
          dataKey: 'manualLocation',
        },
      ],
    },
    {
      category: 'লাইভ লোকেশন',
      fields: [
        {
          dataKey: 'liveLocation',
        },
      ],
    },
  ],
  video: [
    {
      category: 'ডিহিরোর অভিব্যক্তি',
      editModal: 'video',
      fields: [
        {
          dataKey: 'videoURL',
        },
      ],
    },
  ],
  review: [
    {
      category: 'রাইডার এক্টিভিটি',
      fields: [
        {
          dataKey: 'riderActivity',
        },
      ],
    },
    {
      category: 'রেটিং এবং রিভিও',
      fields: [
        {
          dataKey: 'ratings',
        },
      ],
    },
    {
      fields: [
        {
          dataKey: 'reviews',
        },
      ],
    },
  ],
};

export default profileSchema;
