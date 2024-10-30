import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Container from "../../../../layouts/Container";
import axios from "../../../../lib/api";
import { isCurrentTimeWithinServiceTimes } from "../../../../utils/timeHelpers";
import { getDistance } from "../../utils/getDistance";
import Hero from "./Hero";

export default function SearchResults() {
  const [heros, setHeros] = useState([]);
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const _searchParams = Object.fromEntries([...searchParams]);
    const { vehicle, lat, long, destination } = _searchParams;

    const userCurrentLocation =
      location === "gps"
        ? {
            latitude: lat,
            longitude: long,
          }
        : {
            latitude: undefined,
            longitude: undefined,
          };

    axios
      .get("/rider", {
        params: {
          vehicle,
          destination,
        },
      })
      .then((data) => {
        if (data?.data?.success) {
          let heros = data.data.data;

          heros = heros.map((hero) => {
            const heroCurrentLocation =
              hero?.liveLocation || hero?.manualLocation;

            return {
              ...hero,
              isHighlight:
                hero?.mainStation?.village?._id === destination?.village?._id, // highlight if destination === main station
              isOnline:
                hero.serviceStatus === "off"
                  ? false
                  : hero.serviceStatus === "on"
                    ? true
                    : isCurrentTimeWithinServiceTimes(hero.serviceTimes),
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
    <Container>
      <div className="mx-auto my-8 flex w-fit max-w-full flex-col gap-3">
        {heros?.map((hero) => (
          <Hero hero={hero} key={hero._id} />
        ))}
      </div>
    </Container>
  );
}
