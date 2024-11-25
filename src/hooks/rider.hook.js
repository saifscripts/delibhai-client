import { useEffect, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useGeolocation } from "../contexts/location.context";
import { getRiders } from "../services/rider.service";

export const useRiders = () => {
  const [searchParams] = useSearchParams();
  const [page, setPage] = useState(0);
  const [riders, setRiders] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const loader = useRef(null);
  const [geoLocation, setGeoLocation] = useState(null);
  const { location, error } = useGeolocation();

  useEffect(() => {
    console.log(error);
    if (!geoLocation) {
      setGeoLocation(location);
    }
    if (error) {
      setRiders([]);
      setHasMore(false);
    }
  }, [location, error]);

  //   const result = useQuery({
  //     queryKey: ["RIDERS", page],
  //     queryFn: async () => await getRiders(searchParams, page),
  //   });

  useEffect(() => {
    if (page > 0) {
      (async () => {
        const params = new URLSearchParams(searchParams);
        if (geoLocation) {
          params.set("latitude", geoLocation?.latitude);
          params.set("longitude", geoLocation?.longitude);
          const newRiders = (await getRiders(params, page))?.data;

          if (newRiders?.length > 0) {
            setRiders((prev) => [...prev, ...newRiders]);
          }

          if (newRiders?.length < 10) {
            setHasMore(false);
          }
        }
      })();
    }
  }, [page, searchParams, geoLocation]);

  useEffect(() => {
    const handleObserver = (entries) => {
      const target = entries[0];

      if (target.isIntersecting && hasMore) {
        setPage((prev) => prev + 1);
      }
    };

    const observer = new IntersectionObserver(handleObserver);

    const target = loader.current;

    if (target) {
      observer.observe(target);
    }

    return () => {
      if (target) {
        observer.unobserve(target);
      }
    };
  }, [hasMore]);

  return { riders, hasMore, page, setPage, loader };
};
