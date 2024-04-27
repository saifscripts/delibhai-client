import { Link } from "react-router-dom";
import Edit from "../../components/ui/Edit";

export default function InfoContainer({ category, children, editRoute }) {
  return (
    <div className="mb-3">
      <div className="mb-2 flex items-center justify-between">
        <h4 className="text-xl font-bold">{category}</h4>
        {editRoute && (
          <Link to={editRoute}>
            <Edit />
          </Link>
        )}
      </div>

      {children}
    </div>
  );
}
