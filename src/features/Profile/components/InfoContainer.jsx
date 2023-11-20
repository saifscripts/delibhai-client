/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import Edit from "../../../components/ui/Edit";

export const InfoContainer = ({ type, children, fields, edit }) => {
  return (
    <div className="mb-3">
      <div className="flex justify-between items-center mb-2">
        <h4 className="text-xl font-bold">{type}</h4>
        {edit && (
          <Link to="/profile/edit" state={{ title: type, fields }}>
            <Edit />
          </Link>
        )}
      </div>

      {children}
    </div>
  );
};
