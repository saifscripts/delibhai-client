import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { NavLink, useParams } from 'react-router-dom';
import cn from '../../../../lib/cn';

export default function Category({ name, title, icon, percent, index }) {
  const { category } = useParams();

  return (
    <NavLink
      to={`${name}`}
      className={({ isActive }) =>
        cn(
          'relative flex w-24 flex-shrink-0 flex-col items-center justify-center p-1 rounded-tl-lg rounded-tr-lg',
          {
            'border-b-2 border-tone bg-primary-500/5':
              isActive || (!category && index),
          }
        )
      }
      preventScrollReset
      replace
    >
      <div className="relative w-[50px]">
        <CircularProgressbar
          counterClockwise
          strokeWidth={10}
          value={percent}
          styles={{
            path: {
              stroke: '#00E1A9',
              strokeLinecap: 'butt',
              transition: 'stroke-dashoffset 0.5s ease 0s',
            },
            trail: {
              stroke: '#8a8a8a',
              strokeLinecap: 'butt',
            },
          }}
        />

        <div
          className={`absolute left-1/2 top-1/2 -z-10 flex aspect-square -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-black text-tone-500`}
          style={{ width: 45 }}
        >
          <img src={icon} alt={title} />
        </div>
      </div>

      <p className="text-[6px mt-1">{title}</p>
      <p className="text-[6px text979797] -mt-2">{percent}%</p>
    </NavLink>
  );
}
