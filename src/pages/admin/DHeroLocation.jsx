import { AddressFields, useAddressFields } from "../../features/AddressFields";
import MiniContainer from "../../layouts/MiniContainer";

export default function DHeroLocation() {
  const [selectedAddress, addressFields, handleChange] = useAddressFields();
  console.log(selectedAddress);

  return (
    <MiniContainer>
      <AddressFields
        addressFields={addressFields}
        handleChange={handleChange}
      />
    </MiniContainer>
  );
}
