import { useState } from "react";
// import { useNavigate } from "react-router-dom";
import { isStrongPassword } from "validator";
import * as yup from "yup";
import Input from "../../../components/forms/Input";
import SelectInput from "../../../components/forms/SelectInput";
import Submit from "../../../components/forms/Submit";
import PageContainer from "../../../layouts/PageContainer";
import Title from "../../../layouts/Title";
import TopPanel from "../../../layouts/TopPanel";
import { isMobilePhone } from "../../../utils/isMobilePhone";

const userSchema = yup.object({
  name: yup
    .string()
    .trim()
    .required("name is required")
    .min(3, "name must be at least 3 characters long"),
  gender: yup
    .string()
    .trim()
    .required("gender is required")
    .oneOf(
      ["পুরুষ", "মহিলা", "অন্যান্য"],
      "${value} is an invalid gender. Gender must be পুরুষ/মহিলা/অন্যান্য"
    ),
  email: yup.string().trim().lowercase().email("email is not valid"),
  mobile: yup
    .string()
    .trim()
    .required("mobile number is required")
    .test("isMobilePhone", `mobile number is invalid`, isMobilePhone("bn-BD")),
  password: yup
    .string()
    .required("password is required")
    .test(
      "isStrongPassword",
      "password must be at least 4 characters long",
      (value) =>
        isStrongPassword(value, {
          minLength: 4,
          minLowercase: 0,
          minNumbers: 0,
          minUppercase: 0,
          minSymbols: 0,
        })
    ),
  confirmPassword: yup
    .string()
    .required("please confirm your password")
    .test("isMatchedPassword", `passwords don't match`, function (value) {
      return value === this.parent.password;
    }),
});

console.log(
  userSchema.validateSync({
    name: "mds",
    gender: "পুরুষ",
    // email: "saifullahH@gmail.com",
    mobile: "01592295956",
    password: "12345",
    confirmPassword: "12345",
  })
);

const signupFields = [
  {
    type: "text",
    label: "পুরো নাম",
    placeholder: "পুরো নাম লিখুন",
  },
  {
    type: "select",
    options: ["পুরুষ", "মহিলা", "অন্যান্য"],
    value: "পুরুষ",
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

  // const navigate = useNavigate();

  const onInputChange = (e, i) => {
    const clonedInputFields = [...inputFields];

    clonedInputFields[i].value = e.target.value;

    setInputFields(clonedInputFields);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      e.preventDefault();

      const userInfo = {
        name: inputFields[0].value,
        gender: inputFields[1].value,
        email: inputFields[2].value,
        mobile: inputFields[3].value,
        password: inputFields[4].value,
        confirmPassword: inputFields[5].value,
      };

      console.log(userInfo);
      // const response = await fetch("http://localhost:5000/api/v1/user/signup", {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify(userInfo),
      // });

      // const result = await response.json();

      // if (result.success) {
      //   navigate("/otp-verification");
      // }
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
            ({ label, value, type, placeholder, options }, index) => {
              if (type === "select") {
                return (
                  <SelectInput
                    key={label}
                    label={label}
                    onInputChange={(e) => onInputChange(e, index)}
                    value={value || ""}
                    options={options}
                  />
                );
              }

              return (
                <Input
                  key={label}
                  label={label}
                  value={value || ""}
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
