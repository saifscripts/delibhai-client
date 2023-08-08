/* eslint-disable react/prop-types */
import 'react-circular-progressbar/dist/styles.css';
import categories from '../data/categories';
import { InfoCategory } from '../index';

export default function InfoCategories({ activeCategory, setActiveCategory }) {
  return (
    <div className='overflow-y-hidden mb-6'>
      <div className='mt-8 flex gap-2 overflow-x-scroll pb-5 -mb-5'>
        {categories.map(({ id, text, icon, percent }) => (
          <InfoCategory
            key={id}
            id={id}
            text={text}
            icon={icon}
            percent={percent}
            active={activeCategory === id}
            setActiveCategory={setActiveCategory}
          />
        ))}
      </div>
    </div>
  );
}
