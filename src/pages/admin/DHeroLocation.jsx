import { AddressFields, useAddressFields } from "../../features/AddressFields";
import MiniContainer from "../../layouts/MiniContainer";

export default function DHeroLocation() {
  const {
    selectedAddress,
    addressFields,
    setAddressFields,
    handlers,
    isLoading,
  } = useAddressFields();

  return (
    <MiniContainer>
      <AddressFields
        disabled={isLoading}
        addressFields={addressFields}
        setAddressFields={setAddressFields}
        selectedAddress={selectedAddress}
        handlers={handlers}
        villageType="checkbox"
      />
    </MiniContainer>
  );
}
