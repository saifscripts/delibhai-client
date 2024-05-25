import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useFetchData } from "../../../../api/api";
import Container from "../../../../layouts/Container";
import Title from "../../../../layouts/Title";
import { isCurrentTimeWithinServiceTimes } from "../../../../utils/timeHelpers";
import { getDistance } from "../../utils/getDistance";
import Hero from "./Hero";

export default function SearchResults() {
  const [heros, setHeros] = useState([]);
  const [searchParams] = useSearchParams();
  const { fetchData } = useFetchData();

  useEffect(() => {
    const _searchParams = Object.fromEntries([...searchParams]);
    const { vehicle, lat, long, dVil } = _searchParams;

    const userCurrentLocation = {
      latitude: lat,
      longitude: long,
    };

    fetchData("/v1/user/heros", {
      vehicle,
      dVil,
    }).then((data) => {
      if (data?.data?.success) {
        let heros = data.data.data;

        heros = heros.map((hero) => {
          const heroCurrentLocation =
            hero?.liveLocation || hero?.manualLocation;

          return {
            ...hero,
            isOnline: isCurrentTimeWithinServiceTimes(hero.serviceTimes),
            currentDistance: getDistance(
              userCurrentLocation,
              heroCurrentLocation,
            ),
          };
        });

        heros.sort(function (a, b) {
          if (!a.isOnline && b.isOnline) return 1;
          if (a.isOnline && !b.isOnline) return -1;

          if (a.currentDistance - b.currentDistance > 0) return 1;
          if (a.currentDistance - b.currentDistance < 0) return -1;
        });

        setHeros(heros);
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
