import { AddressFields, useAddressFields } from "../../features/AddressFields";
import Container from "../../layouts/Container";

export default function DHeroLocation() {
  const [selectedAddress, addressFields, handleChange] = useAddressFields();
  // console.log(selectedAddress);

  return (
    <Container>
      <div className="m-10 grid h-[calc(100vh-80px)] grid-cols-3 gap-10">
        <AddressFields
          className="p-6 shadow-lg"
          addressFields={addressFields}
          handleChange={handleChange}
          selectedAddress={selectedAddress}
        />
        <div className="space-y-4 overflow-y-auto p-6 shadow-lg">
          {addressFields?.wards?.map((ward) => (
            <div className="rounded-md bg-gray-100 p-3" key={ward.wardCode}>
              Ward No {ward.wardNo}
            </div>
          ))}
        </div>
        <div className="p-6 shadow-lg"></div>
      </div>
    </Container>
  );
}
