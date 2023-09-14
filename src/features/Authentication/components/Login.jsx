import { useState } from "react";
// import { useNavigate } from "react-router-dom";
import Input  from "../../../components/forms/Input";
import Submit from "../../../components/forms/Submit";
import PageContainer from "../../../layouts/PageContainer";
import Title from "../../../layouts/Title"
import TopPanel from "../../../layouts/TopPanel"

const loginFields = [
  
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
  
]

function Login() {
  const [inputFields, setInputFields] = useState(loginFields);

  // const navigate = useNavigate();

  const onInputChange = (e, i) => {
    const clonedInputFields = [...inputFields];

    clonedInputFields[i].data = e.target.value;

    setInputFields(clonedInputFields)
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    // navigate('/')

  }

  return (
    <>
      <TopPanel />
      <Title
        title='লগিন করুন'
        subtitle='সঠিক মোবাইল নাম্বার এবং পাসওয়ার্ড দিয়ে লগিন করুন'
      />

      <PageContainer>
        <form onSubmit={handleSubmit}>
          {inputFields.map(({label, data, type, placeholder}, index) => 
             <Input
                key={label}
                label={label}
                data={data || ''}
                type={type}
                placeholder={placeholder}
                onInputChange={(e) => onInputChange(e, index)}
            />  
          )}
          <Submit value='লগিন' />
        </form>
      </PageContainer>
    </>
  )
}

export {Login};