/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Input from "../../../components/forms/Input";
import Button from "../../../components/ui/Button";
import PageContainer from "../../../layouts/PageContainer";
import Title from "../../../layouts/Title";
import TopPanel from "../../../layouts/TopPanel";
import { Checkbox, RadioInput, SelectInput, TimeInput } from "../index";

const EditInfo = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const { title, fields = [] } = state;

  const [inputFields, setInputFields] = useState([]);
  // const [permanentAddress, setPermanentAddress] = useState(false);

  useEffect(() => {
    setInputFields(fields);
  }, [fields]);

  const onInputChange = (e, i) => {
    const target = e.target;
    const value = target.type === "radio" ? target.checked : target.value;

    const clonedInputFields = [...inputFields];

    clonedInputFields[i].data = clonedInputFields[i].data && value;
    clonedInputFields[i].info = value;

    if (target.type === "radio") {
      clonedInputFields.forEach((v, j) => {
        clonedInputFields[j].checked = false;
      });

      clonedInputFields[i].checked = value;
      // setPermanentAddress(!permanentAddress);
    }

    setInputFields(clonedInputFields);
  };

  const onChecked = (e, i) => {
    const checked = e.target.checked;
    const value = e.target.value;

    const clonedInputFields = [...inputFields];

    if (checked) {
      clonedInputFields[i].data.push(value);
    } else {
      const newData = clonedInputFields[i].data.filter((d) => d !== value);

      clonedInputFields[i].data = newData;
    }

    setInputFields(clonedInputFields);
  };

  const toggleHiddenInput = () => {
    const clonedInputFields = [...inputFields];
    clonedInputFields.forEach((input) => {
      const { hidden } = input;

      if (hidden === true) {
        input.hidden = false;
      }

      if (hidden === false) {
        input.hidden = true;
      }
    });
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
        subtitle="অনুগ্রহ করে সঠিক তথ্য দিয়ে একটি একাউন্ড তৈরী করুন"
      />
      <PageContainer>
        <form onSubmit={handleSubmit} className="mb-5">
          {inputFields.map(
            (
              { label, data, info, type, options = [], checked, name, hidden },
              index
            ) => {
              if (hidden) return;

              if (type === "category") {
                return (
                  <p
                    key={index}
                    className="font-bold mt-4 mb-3 py-3 border-b border-light"
                  >
                    {label}
                  </p>
                );
              }

              if (type === "select") {
                return (
                  <SelectInput
                    key={index}
                    label={label}
                    onInputChange={(e) => onInputChange(e, index)}
                    info={info}
                    options={options}
                  />
                );
              }

              if (type === "radio") {
                return (
                  <RadioInput
                    key={index}
                    name={name}
                    label={label}
                    checked={checked}
                    onInputChange={onInputChange}
                    index={index}
                    toggleHiddenInput={toggleHiddenInput}
                  />
                );
              }

              if (type === "checkbox") {
                return (
                  <Checkbox
                    key={index}
                    label={label}
                    onInputChange={(e) => onChecked(e, index)}
                    data={data}
                    options={options}
                  />
                );
              }

              if (type === "time") {
                return (
                  <TimeInput
                    key={index}
                    index={index}
                    label={label}
                    inputFields={inputFields}
                    setInputFields={setInputFields}
                    data={data}
                  />
                );
              }

              return (
                <Input
                  key={index}
                  label={label}
                  data={data}
                  info={info}
                  type={type}
                  onInputChange={(e) => onInputChange(e, index)}
                />
              );
            }
          )}

          <Button type="submit" value="সংরক্ষণ করুন" />
        </form>
      </PageContainer>
    </>
  );
};

export { EditInfo };
