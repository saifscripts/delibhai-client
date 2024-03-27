import { useState } from "react";
import { Address } from "../../features/Address";
import MiniContainer from "../../layouts/MiniContainer";
import { getAllDivision } from "../../lib/bd-divisions-to-unions";

const defaultAddressValue = {
  division: getAllDivision(),
  district: null,
  upazila: null,
  union: null,
};

export default function DHeroLocation() {
  const [address, setAddress] = useState(defaultAddressValue);
  return (
    <MiniContainer>
      <Address address={address} setAddress={setAddress} />
    </MiniContainer>
  );
}
