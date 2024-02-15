/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import Edit from "../../../components/ui/Edit";

export const InfoContainer = ({ type, children, editRoute }) => {
  return (
    <div className="mb-3">
      <div className="flex justify-between items-center mb-2">
        <h4 className="text-xl font-bold">{type}</h4>
        {editRoute && (
          <Link to={editRoute}>
            <Edit />
          </Link>
        )}
      </div>

      {children}
    </div>
  );
};
