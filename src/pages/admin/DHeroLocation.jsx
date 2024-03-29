import { AddressFields, useAddressFields } from "../../features/AddressFields";
import MiniContainer from "../../layouts/MiniContainer";

export default function DHeroLocation() {
  const { selectedAddress, addressFields, handleChange, handlers } =
    useAddressFields();

  return (
    <MiniContainer>
      <AddressFields
        addressFields={addressFields}
        handleChange={handleChange}
        selectedAddress={selectedAddress}
        handlers={handlers}
      />
    </MiniContainer>
  );
}
