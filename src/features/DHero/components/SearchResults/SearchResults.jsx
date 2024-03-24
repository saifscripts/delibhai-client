import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useFetchData } from "../../../../api/api";
import Container from "../../../../layouts/Container";
import Title from "../../../../layouts/Title";
import { isCurrentTimeWithinServiceTimes } from "../../../Profile/utils/timeHelpers";
import Hero from "./Hero";

export default function SearchResults() {
  const [heros, setHeros] = useState([]);
  const [searchParams] = useSearchParams();
  const { fetchData } = useFetchData();

  useEffect(() => {
    const _searchParams = Object.fromEntries([...searchParams]);
    const { vehicleType, destination } = _searchParams;

    fetchData("/v1/user/heros", {
      vehicleType,
      destination,
    }).then((data) => {
      if (data?.data?.success) {
        let _heros = data.data.data;
        _heros = _heros.map((hero) => ({
          ...hero,
          isOnline: isCurrentTimeWithinServiceTimes(hero.serviceTimes),
          currentDistance: (Math.random() * 20).toFixed(2),
          destinationDistance: (Math.random() * 20).toFixed(2),
        }));

        _heros.sort(function (a, b) {
          if (!a.isOnline && b.isOnline) return 1;
          if (!b.isOnline && a.isOnline) return -1;

          if (a.currentDistance - b.currentDistance > 0) return 1;
          if (a.currentDistance - b.currentDistance < 0) return -1;

          if (a.destinationDistance - b.destinationDistance > 0) return 1;
          if (a.destinationDistance - b.destinationDistance < 0) return -1;
        });

        setHeros(_heros);
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams]);

  return (
    <>
      <Title color="black" title="ডেলিভাই হিরো" />
      <Container>
        <div className="mx-auto my-8 flex w-fit max-w-full flex-col gap-4">
          {heros?.map((hero) => (
            <Hero hero={hero} key={hero._id} />
          ))}
        </div>
      </Container>
    </>
  );
}
