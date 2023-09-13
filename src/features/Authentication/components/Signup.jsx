import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input  from "../../../components/forms/Input";
import SelectInput from "../../../components/forms/SelectInput";
import Submit from "../../../components/forms/Submit";
import PageContainer from "../../../layouts/PageContainer";
import Title from "../../../layouts/Title"
import TopPanel from "../../../layouts/TopPanel"

const signupFields = [
  {
    type: 'text',
    label: 'পুরো নাম',
    placeholder: 'পুরো নাম লিখুন',
  },
  {
    type: 'select',
    options: ['পুরুষ', 'মহিলা', 'অন্যান্য'],
    data: 'পুরুষ',
    label: 'লিঙ্গ',
  },
  {
    type: 'email',
    label: 'ই-মেইল',
    placeholder: 'ই-মেইল লিখুন',
  },
  {
    type: 'number',
    label: 'মোবাইল নাম্বার',
    placeholder: 'মোবাইল নাম্বার লিখুন',
  },
  {
    type: 'password',
    label: 'পাসওয়ার্ড',
    placeholder: 'পাসওয়ার্ড দিন',
  },
  {
    type: 'password',
    label: 'কনফার্ম পাসওয়ার্ড',
    placeholder: 'পুনরায় পাসওয়ার্ড দিন',
  },
]

function Signup() {
  const [inputFields, setInputFields] = useState(signupFields);

  const navigate = useNavigate();

  const onInputChange = (e, i) => {
    const clonedInputFields = [...inputFields];

    clonedInputFields[i].data = e.target.value;

    setInputFields(clonedInputFields)
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    navigate('/otp-verification')

  }

  return (
    <>
      <TopPanel />
      <Title
        title='একটি একাউন্ট তৈরী করুন'
        subtitle='অনুগ্রহ করে সঠিক তথ্য দিয়ে একটি একাউন্ড তৈরী করুন'
      />

      <PageContainer>
        <form onSubmit={handleSubmit}>
          {inputFields.map(({label, data, type, placeholder, options}, index) => {
            if(type === 'select') {
              return (
                <SelectInput
                  key={label}
                  label={label}
                  onInputChange={(e) => onInputChange(e, index)}
                  data={data || ''}
                  options={options}
                />
              );
            }

            return <Input
              key={label}
              label={label}
              data={data || ''}
              type={type}
              placeholder={placeholder}
              onInputChange={(e) => onInputChange(e, index)}
        />
          }
            
          )}
          <Submit value='ওটিপি কোড পাঠান' />
        </form>
      </PageContainer>
    </>
  )
}

export {Signup};