import { useState } from "react";
import { AddressFields } from "../../features/AddressFields";
import MiniContainer from "../../layouts/MiniContainer";

export default function DHeroLocation() {
  const [address, setAddress] = useState(null);

  return (
    <MiniContainer>
      <AddressFields
        address={address}
        setAddress={setAddress}
        villageType="checkbox"
      />
    </MiniContainer>
  );
}
