import { AddressProvider } from "../contexts/AddressContext";
import Fields from "./Fields";

const AddressFields = ({ villageType, address, setAddress, className }) => {
  return (
    <AddressProvider
      address={address}
      setAddress={setAddress}
      villageType={villageType}
    >
      <Fields className={className} />
    </AddressProvider>
  );
};

export default AddressFields;
