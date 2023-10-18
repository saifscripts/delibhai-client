import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../../../components/forms/Input";
import SelectInput from "../../../components/forms/SelectInput";
import Submit from "../../../components/forms/Submit";
import PageContainer from "../../../layouts/PageContainer";
import Title from "../../../layouts/Title";
import TopPanel from "../../../layouts/TopPanel";
// import { object, string, number, date, InferType } from 'yup';

// const userSchema = object({
//   name: string().required().trim().min(3, 'Name must be at least 3 characters long'),
//   // genter:,
//   // email:,
//   // mobile:,
//   // password:,
//   // confirmPassword:,
// })

// console.log(userSchema);

const signupFields = [
  {
    type: "text",
    label: "পুরো নাম",
    placeholder: "পুরো নাম লিখুন",
  },
  {
    type: "select",
    options: ["পুরুষ", "মহিলা", "অন্যান্য"],
    data: "পুরুষ",
    label: "লিঙ্গ",
  },
  {
    type: "email",
    label: "ই-মেইল",
    placeholder: "ই-মেইল লিখুন",
  },
  {
    type: "text",
    label: "মোবাইল নাম্বার",
    placeholder: "মোবাইল নাম্বার লিখুন",
  },
  {
    type: "password",
    label: "পাসওয়ার্ড",
    placeholder: "পাসওয়ার্ড দিন",
  },
  {
    type: "password",
    label: "কনফার্ম পাসওয়ার্ড",
    placeholder: "পুনরায় পাসওয়ার্ড দিন",
  },
];

function Signup() {
  const [inputFields, setInputFields] = useState(signupFields);

  const navigate = useNavigate();

  const onInputChange = (e, i) => {
    const clonedInputFields = [...inputFields];

    clonedInputFields[i].data = e.target.value;

    setInputFields(clonedInputFields);
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();

      const userInfo = {
        name: inputFields[0].data,
        gender: inputFields[1].data,
        email: inputFields[2].data,
        mobile: inputFields[3].data,
        password: inputFields[4].data,
        confirmPassword: inputFields[5].data,
      };

      console.log(userInfo);
      const response = await fetch("http://localhost:5000/api/v1/user/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userInfo),
      });

      const result = await response.json();

      if (result.success) {
        navigate("/otp-verification");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <TopPanel />
      <Title
        title="একটি একাউন্ট তৈরী করুন"
        subtitle="অনুগ্রহ করে সঠিক তথ্য দিয়ে একটি একাউন্ড তৈরী করুন"
      />

      <PageContainer>
        <form onSubmit={handleSubmit}>
          {inputFields.map(
            ({ label, data, type, placeholder, options }, index) => {
              if (type === "select") {
                return (
                  <SelectInput
                    key={label}
                    label={label}
                    onInputChange={(e) => onInputChange(e, index)}
                    data={data || ""}
                    options={options}
                  />
                );
              }

              return (
                <Input
                  key={label}
                  label={label}
                  data={data || ""}
                  type={type}
                  placeholder={placeholder}
                  onInputChange={(e) => onInputChange(e, index)}
                />
              );
            }
          )}
          <Submit value="ওটিপি কোড পাঠান" />
        </form>
      </PageContainer>
    </>
  );
}

export { Signup };
