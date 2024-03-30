import { AddressFields, useAddressFields } from "../../features/AddressFields";
import MiniContainer from "../../layouts/MiniContainer";

export default function DHeroLocation() {
  const {
    selectedAddress,
    addressFields,
    setAddressFields,
    handleChange,
    handlers,
  } = useAddressFields();

  return (
    <MiniContainer>
      <AddressFields
        addressFields={addressFields}
        setAddressFields={setAddressFields}
        handleChange={handleChange}
        selectedAddress={selectedAddress}
        handlers={handlers}
        villageType="add"
      />
    </MiniContainer>
  );
}
