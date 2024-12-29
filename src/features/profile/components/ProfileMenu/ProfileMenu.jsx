import { ScrollItem, ScrollMenu } from '@/components/scrollable-menu';
import { cn } from '@/lib/utils';
import UserActionsButton from '@/modules/shared/user-actions/UserActionsButton';
import { useEffect, useState } from 'react';
import 'react-circular-progressbar/dist/styles.css';
import { useParams } from 'react-router-dom';
import { useGetUser } from '../../../../hooks/user.hook';
import categories from '../../data/categories';
import profileSchema from '../../data/profileSchema';
import Category from './Category';

export default function ProfileMenu() {
  const { id } = useParams();
  const { user } = useGetUser(id);
  const [visible, setVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  // Position profile menu on scroll down and show on scroll up
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setVisible(prevScrollPos > currentScrollPos);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos, visible]);

  const calculatePercent = (categoryName) => {
    let total = 0;
    let completed = 0;

    profileSchema[categoryName]?.map(({ fields }) => {
      total += fields.length;

      fields.map(({ dataKey }) => {
        if (Array.isArray(user[dataKey]) && user[dataKey]?.length > 0)
          completed += 1;
        if (!Array.isArray(user[dataKey]) && user[dataKey]) completed += 1;
      });
    });

    return ((completed / total) * 100).toFixed(0);
  };

  return (
    <div
      className={cn(
        'transition-top sticky top-0 z-20 mb-6 bg-background duration-300',
        {
          'top-[64px]': visible,
          'top-0': !visible,
        }
      )}
    >
      <UserActionsButton user={user} />

      <ScrollMenu className="gap-0" arrow>
        {categories.map(({ name, title, icon, index }) => (
          <ScrollItem key={name}>
            <Category
              name={name}
              title={title}
              icon={icon}
              index={index}
              percent={calculatePercent(name)}
            />
          </ScrollItem>
        ))}
      </ScrollMenu>
    </div>
  );
}
