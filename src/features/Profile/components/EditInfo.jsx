/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Button from '../../../components/ui/Button';
import PageContainer from '../../../layouts/PageContainer';
import Title from '../../../layouts/Title';
import TopPanel from '../../../layouts/TopPanel';

const EditInfo = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const { title, fields = [] } = state;

  const [inputFields, setInputFields] = useState([]);

  useEffect(() => {
    setInputFields(fields);
  }, [fields]);

  const onInputChange = (e, i) => {
    const value = e.target.value;

    const clonedInputFields = [...inputFields];

    clonedInputFields[i].data = clonedInputFields[i].data && value;
    clonedInputFields[i].info = value;

    setInputFields(clonedInputFields);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    navigate(-1);
  };

  return (
    <>
      <TopPanel />
      <Title
        title={title}
        subtitle='অনুগ্রহ করে সঠিক তথ্য দিয়ে একটি একাউন্ড তৈরী করুন'
      />
      <PageContainer>
        <form onSubmit={handleSubmit} className='mb-5'>
          {inputFields.map(
            ({ label, data, info, type, options = [] }, index) => (
              <label key={index}>
                <p className='font-bold mt-4 mb-1'>{label}</p>
                {type === 'select' ? (
                  <select
                    onChange={(e) => onInputChange(e, index)}
                    value={info}
                    className='w-full py-3 border-b border-primary bg-transparent'>
                    {options.map((option) => (
                      <option key={option}>{option}</option>
                    ))}
                  </select>
                ) : (
                  <input
                    type={type}
                    value={data || info}
                    onChange={(e) => onInputChange(e, index)}
                    className='w-full py-3 border-b border-primary'
                  />
                )}
              </label>
            )
          )}

          <Button type='submit' value='সংরক্ষণ করুন' />
        </form>
      </PageContainer>
    </>
  );
};

export default EditInfo;
