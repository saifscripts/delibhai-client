import "react-circular-progressbar/dist/styles.css";
import categories from "../data/categories";
import { InfoCategory } from "../index";

export const InfoCategories = ({ activeCategory, setActiveCategory }) => {
  return (
    <div className="overflow-y-hidden mb-6">
      <div className="mt-8 flex gap-2 overflow-x-scroll pb-5 -mb-5">
        {categories.map(({ type, text, icon, percent }) => (
          <InfoCategory
            key={type}
            type={type}
            text={text}
            icon={icon}
            percent={percent}
            active={activeCategory === type}
            setActiveCategory={setActiveCategory}
          />
        ))}
      </div>
    </div>
  );
};
