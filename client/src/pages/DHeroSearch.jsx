import { useState } from 'react';
import { BiSearchAlt } from 'react-icons/bi';
import { useParams } from 'react-router-dom';
import Button from '../components/forms/Button';
import SelectInput from '../components/forms/SelectInput';
import SearchOption from '../components/ui/SearchOption';
import Title from '../components/ui/Title';
import PageContainer from '../layouts/PageContainer';
import TopPanel from '../layouts/TopPanel';

const divisions = ['ঢাকা', 'চট্টগ্রাম', 'রাজশাহী', 'খুলনা', 'রংপুর'];
export default function DHeroSearch() {
  const { vehicle } = useParams();
  console.log(vehicle);

  const [searchOption, setSearchOption] = useState(2);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className='min-h-screen'>
      <TopPanel />
      <PageContainer>
        <Title color='black' title='ডেলিভাই হিরো (সার্চ)' />

        <div className='w-fit mx-auto mb-8'>
          <SearchOption
            fill={searchOption === 1}
            text='Location Tracking (Nearest)'
            handleSelectSearchOption={() => setSearchOption(1)}
          />
          <SearchOption
            fill={searchOption === 2}
            text='Manual Search'
            handleSelectSearchOption={() => setSearchOption(2)}
          />
        </div>

        {searchOption === 1 && (
          <p className='text-center text-3xl my-32'>Not Available</p>
        )}

        {searchOption === 2 && (
          <form
            className='max-w-[500px] mx-auto text-gray-500 mb-6'
            onClick={handleSubmit}>
            <SelectInput options={divisions} selected='বিভাগ নির্বাচন করুন' />
            <SelectInput options={divisions} selected='জেলা নির্বাচন করুন' />
            <SelectInput options={divisions} selected='উপজেলা নির্বাচন করুন' />
            <SelectInput options={divisions} selected='ইউনিয়ন নির্বাচন করুন' />
            <SelectInput
              options={divisions}
              selected='ওয়ার্ড নম্বর নির্বাচন করুন'
            />
            <SelectInput options={divisions} selected='গ্রাম নির্বাচন করুন' />
            <Button type='submit' value='Search' icon={<BiSearchAlt />} />
          </form>
        )}
      </PageContainer>
    </div>
  );
}
