import { useContext } from "react";
import { useParams } from "react-router-dom";
import { useAuth } from "../../../../features/Authentication/contexts/AuthContext";
import UserContext from "../../contexts/UserContext";
import profileSchema from "../../data/profileSchema";
import Field from "./Field";
import InfoContainer from "./InfoContainer";

export default function ProfileInfo() {
  const { category = "general", id } = useParams();
  const { userInfo } = useContext(UserContext);
  const { currentUser } = useAuth();

  return (
    <>
      {profileSchema[category]?.map((item) => (
        <InfoContainer
          key={item.category}
          category={item.category}
          editRoute={id === currentUser?._id && item.editRoute}
        >
          {item?.fields?.map(
            ({ dataKey, label, icon, dataModifier, isPrivate }) => {
              const data = userInfo[dataKey];
              let fieldValue;

              if (data) {
                fieldValue = dataModifier ? dataModifier(data) : data;
              } else {
                fieldValue = undefined;
              }

              const isHidden =
                (isPrivate || !fieldValue) && id !== currentUser?._id;

              return (
                !isHidden && (
                  <Field
                    key={dataKey}
                    value={fieldValue}
                    label={label}
                    icon={icon}
                  />
                )
              );
            },
          )}
        </InfoContainer>
      ))}
    </>
  );
}
