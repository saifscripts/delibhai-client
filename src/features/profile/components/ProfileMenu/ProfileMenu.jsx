import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import "react-circular-progressbar/dist/styles.css";
import { useParams } from "react-router-dom";
import { useUser } from "../../../../hooks/user.hook";
import categories from "../../data/categories";
import profileSchema from "../../data/profileSchema";
import Category from "./Category";

export default function ProfileMenu() {
  const { id } = useParams();
  const { user } = useUser(id);
  const [visible, setVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  // Position profile menu on scroll down and show on scroll up
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setVisible(prevScrollPos > currentScrollPos);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos, visible]);

  const calculatePercent = (categoryName) => {
    let total = 0;
    let completed = 0;

    profileSchema[categoryName]?.map(({ fields }) => {
      total += fields.length;

      fields.map(({ dataKey }) => {
        if (user[dataKey]) completed += 1;
      });
    });

    return ((completed / total) * 100).toFixed(0);
  };

  return (
    <div
      className={cn(
        "transition-top sticky top-0 z-20 mb-6 overflow-y-hidden bg-background duration-300",
        {
          "top-[64px]": visible,
          "top-0": !visible,
        },
      )}
    >
      <div className="-mb-5 flex gap-2 overflow-x-scroll pb-5 pt-2">
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
