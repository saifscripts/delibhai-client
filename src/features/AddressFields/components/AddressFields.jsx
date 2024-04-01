import { AddressProvider } from "../contexts/AddressContext";
import Fields from "./Fields";

const AddressFields = ({ villageType, address, setAddress }) => {
  return (
    <AddressProvider
      address={address}
      setAddress={setAddress}
      villageType={villageType}
    >
      <Fields />
    </AddressProvider>
  );
};

export default AddressFields;
