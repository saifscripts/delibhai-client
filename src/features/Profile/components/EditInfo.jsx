/* eslint-disable react/prop-types */
import { useLocation } from 'react-router-dom';
import Button from '../../../components/ui/Button';
import PageContainer from '../../../layouts/PageContainer';
import Title from '../../../layouts/Title';
import TopPanel from '../../../layouts/TopPanel';

const EditInfo = () => {
  const { state } = useLocation();
  const { title, fields = [] } = state;

  return (
    <>
      <TopPanel />
      <Title
        title={`ডিহিরো ${title}`}
        subtitle='অনুগ্রহ করে সঠিক তথ্য দিয়ে একটি একাউন্ড তৈরী করুন'
      />
      <PageContainer>
        <form onSubmit={(e) => e.preventDefault()} className='mb-5'>
          {fields.map(({ label, data, info, type, options = [] }, index) => (
            <label key={index}>
              <p className='font-bold mt-4 mb-1'>{label}</p>
              {type === 'select' ? (
                <select className='w-full py-3 border-b border-primary bg-transparent'>
                  {options.map((option) => (
                    <option selected={option === info} key={option}>
                      {option}
                    </option>
                  ))}
                </select>
              ) : (
                <input
                  type={type}
                  value={data || info}
                  className='w-full py-3 border-b border-primary'
                />
              )}
            </label>
          ))}

          <Button type='submit' value='সংরক্ষণ করুন' />
        </form>
      </PageContainer>
    </>
  );
};

export default EditInfo;
