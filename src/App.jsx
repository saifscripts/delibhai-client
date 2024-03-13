import { Toaster } from "react-hot-toast";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Login, OTPVerification, Signup } from "./features/Authentication";
import Home from "./features/Home";
import {
  EditAddressInfo,
  EditContactInfo,
  EditManualLocationInfo,
  EditPersonalInfo,
  EditServiceInfo,
  EditVideoURL,
  Profile,
} from "./features/Profile";
import { EditOwnerInfo } from "./features/Profile/components/EditOwnerInfo";
import { EditVehicleInfo } from "./features/Profile/components/EditVehicleInfo";
import DHero from "./pages/DHero";
import DHeroSearch from "./pages/DHeroSearch";
import DHeroSearchResult from "./pages/DHeroSearchResult";
import Services from "./pages/Services";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/dhero" element={<DHero />} />
        <Route path="/services/dhero/:vehicle" element={<DHeroSearch />} />
        <Route path="/services/dhero/search" element={<DHeroSearchResult />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/otp-verification" element={<OTPVerification />} />
        <Route path="/profile/:id" element={<Profile />} />
        <Route
          path="/profile/edit/personal-info"
          element={<EditPersonalInfo />}
        />
        <Route
          path="/profile/edit/contact-info"
          element={<EditContactInfo />}
        />
        <Route path="/profile/edit/address" element={<EditAddressInfo />} />
        <Route
          path="/profile/edit/vehicle-info"
          element={<EditVehicleInfo />}
        />
        <Route path="/profile/edit/owner-info" element={<EditOwnerInfo />} />
        <Route
          path="/profile/edit/service-info"
          element={<EditServiceInfo />}
        />
        <Route
          path="/profile/edit/manual-location-info"
          element={<EditManualLocationInfo />}
        />
        <Route path="/profile/edit/video" element={<EditVideoURL />} />
      </Routes>
      <Toaster />
    </>
  );
}

export default App;
