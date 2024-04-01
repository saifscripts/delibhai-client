import { AddressFields } from "../../../AddressFields";

function Destination({ destination, setDestination }) {
  return (
    <>
      <h2 className="mb-4 mt-8 text-2xl font-semibold">গন্তব্য</h2>
      <AddressFields
        villageType="select"
        address={destination}
        setAddress={setDestination}
      />
    </>
  );
}

export default Destination;
