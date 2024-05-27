import { useContext } from "react";
import "react-circular-progressbar/dist/styles.css";
import UserContext from "../../contexts/UserContext";
import categories from "../../data/categories";
import profileSchema from "../../data/profileSchema";
import Category from "./Category";

export default function ProfileMenu() {
  const { userInfo } = useContext(UserContext);

  const calculatePercent = (categoryName) => {
    let total = 0;
    let completed = 0;

    profileSchema[categoryName]?.map(({ fields }) => {
      total += fields.length;

      fields.map(({ dataKey }) => {
        if (userInfo[dataKey]) completed += 1;
      });
    });

    return ((completed / total) * 100).toFixed(0);
  };

  return (
    <div className="mb-6 overflow-y-hidden">
      <div className="-mb-5 mt-8 flex gap-2 overflow-x-scroll pb-5">
        {categories.map(({ name, title, icon, index }) => (
          <Category
            key={name}
            name={name}
            title={title}
            icon={icon}
            index={index}
            percent={calculatePercent(name)}
          />
        ))}
      </div>
    </div>
  );
}
