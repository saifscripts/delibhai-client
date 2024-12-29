import vehicles from '@/data/vehicles';
import { useParams } from 'react-router-dom';
import { useMe } from '../../../../hooks/auth.hook';
import { useGetUser } from '../../../../hooks/user.hook';
import profileSchema from '../../data/profileSchema';
import { GPSLocation } from '../GPSLocation';
import { ManualLocation } from '../ManualLocation';
import { Ratings } from '../Ratings';
import { Reviews } from '../Reviews';
import { RiderActivity } from '../RiderActivity';
import { VehiclePhotos } from '../VehiclePhotos';
import { Video } from '../Video';
import Field from './Field';
import InfoContainer from './InfoContainer';

export default function ProfileInfo() {
  const { category = 'general', id } = useParams();
  const { user } = useGetUser(id);
  const { user: authUser } = useMe();

  return (
    <div>
      {profileSchema[category]?.map((item) => (
        <InfoContainer
          key={item.category}
          category={item.category}
          editModal={id === authUser?._id && item.editModal}
        >
          {item?.fields
            ?.filter(
              (field) =>
                !(
                  (field.isPrivate ||
                    !user[field.dataKey] ||
                    user[field.dataKey]?.length === 0) &&
                  id !== authUser?._id
                )
            )
            // filter out vehicleSubType if user's selected vehicleType doesn't have any subTypes
            .filter((field) => {
              if (field.dataKey === 'vehicleSubType') {
                const vehicleSubTypes = vehicles.find(
                  (vehicle) => vehicle.title === user.vehicleType
                )?.subTypes;
                return vehicleSubTypes && vehicleSubTypes.length > 0;
              } else {
                return true;
              }
            })
            .map(({ dataKey, label, icon, dataModifier, isPrivate }) => {
              if (dataKey === 'vehiclePhotos') {
                return <VehiclePhotos key={dataKey} />;
              }

              if (dataKey === 'manualLocation') {
                return <ManualLocation key={dataKey} />;
              }

              if (dataKey === 'liveLocation') {
                return <GPSLocation key={dataKey} />;
              }

              if (dataKey === 'videoURL') {
                return <Video key={dataKey} />;
              }

              if (dataKey === 'riderActivity') {
                return <RiderActivity key={dataKey} />;
              }

              if (dataKey === 'ratings') {
                return <Ratings key={dataKey} />;
              }

              if (dataKey === 'reviews') {
                return <Reviews key={dataKey} />;
              }

              const data = user[dataKey];
              let fieldValue;

              if (data) {
                fieldValue = dataModifier ? dataModifier(data) : data;
              } else {
                fieldValue = undefined;
              }

              return (
                <Field
                  key={dataKey}
                  value={fieldValue}
                  label={label}
                  icon={icon}
                />
              );
            })}
        </InfoContainer>
      ))}
    </div>
  );
}
