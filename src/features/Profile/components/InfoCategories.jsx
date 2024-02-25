import "react-circular-progressbar/dist/styles.css";
import categories from "../data/categories";
import profileSchema from "../data/profileSchema";
import { InfoCategory } from "../index";

export const Categories = ({
  userInfo,
  activeCategory,
  setActiveCategory,
}) => {
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
    <div className="overflow-y-hidden mb-6">
      <div className="mt-8 flex gap-2 overflow-x-scroll pb-5 -mb-5">
        {categories.map(({ name, title, icon }) => (
          <InfoCategory
            key={name}
            name={name}
            title={title}
            icon={icon}
            percent={calculatePercent(name)}
            active={activeCategory === name}
            setActiveCategory={setActiveCategory}
          />
        ))}
      </div>
    </div>
  );
};
