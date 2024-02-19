import "react-circular-progressbar/dist/styles.css";
import categories from "../data/categories";
import { InfoCategory } from "../index";

export const InfoCategories = ({ activeCategory, setActiveCategory }) => {
  return (
    <div className="overflow-y-hidden mb-6">
      <div className="mt-8 flex gap-2 overflow-x-scroll pb-5 -mb-5">
        {categories.map(({ name, title, icon, percent }) => (
          <InfoCategory
            key={name}
            name={name}
            title={title}
            icon={icon}
            percent={percent}
            active={activeCategory === name}
            setActiveCategory={setActiveCategory}
          />
        ))}
      </div>
    </div>
  );
};
