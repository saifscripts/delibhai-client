import { AddressFields, useAddressFields } from "../../features/AddressFields";
import MiniContainer from "../../layouts/MiniContainer";

export default function DHeroLocation() {
  const {
    selectedAddress,
    addressFields,
    setAddressFields,
    handleChange,
    handlers,
    isLoading,
  } = useAddressFields();

  return (
    <MiniContainer>
      <AddressFields
        disabled={isLoading}
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
