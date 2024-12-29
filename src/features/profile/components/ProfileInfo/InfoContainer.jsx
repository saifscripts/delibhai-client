import Edit from '@/components/ui/Edit';
import { useState } from 'react';
import {
  EditContactInfo,
  EditManualLocation,
  EditOwnerInfo,
  EditPersonalInfo,
  EditServiceInfo,
  EditVehicleInfo,
  EditVideoURL,
} from '../EditProfile';
import EditAddressInfo from '../EditProfile/EditAddress';

const getCategoryModal = (category, editModal, editButton) => {
  switch (category) {
    case 'ব্যক্তিগত তথ্য':
      return <EditPersonalInfo />;
    case 'কন্টাক্ট ইনফো':
      return <EditContactInfo />;
    case 'ঠিকানা':
      return <EditAddressInfo />;
    case 'গাড়ির সাধারণ তথ্য':
      return <EditVehicleInfo />;
    case 'সার্ভিস তথ্য':
      return <EditServiceInfo />;
    default:
      return editModal ? editButton : null;
  }
};

export default function InfoContainer({ category, children, editModal }) {
  const [modal, setModal] = useState('');

  const openModal = (modalName) => {
    setModal(modalName);
  };

  const closeModal = () => {
    setModal('');
  };
  return children.length > 0 ? (
    <div className="mb-3">
      <div className="mb-2 flex items-center justify-between">
        <h4 className="text-xl font-bold">{category}</h4>
        {getCategoryModal(
          category,
          editModal,

          <Edit onClick={() => openModal(editModal)} />
        )}
      </div>

      {children}

      <EditManualLocation
        isOpen={modal === 'manual-location'}
        onClose={closeModal}
      />
      <EditVideoURL isOpen={modal === 'video'} onClose={closeModal} />
      <EditOwnerInfo isOpen={modal === 'owner'} onClose={closeModal} />
    </div>
  ) : null;
}
