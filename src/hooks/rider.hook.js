import { useEffect, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { getRiders } from "../services/rider.service";

export const useRiders = () => {
  const [searchParams] = useSearchParams();
  const [page, setPage] = useState(0);
  const [riders, setRiders] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const loader = useRef(null);

  //   const result = useQuery({
  //     queryKey: ["RIDERS", page],
  //     queryFn: async () => await getRiders(searchParams, page),
  //   });

  useEffect(() => {
    if (page > 0) {
      (async () => {
        const newRiders = (await getRiders(searchParams, page))?.data;

        if (newRiders?.length > 0) {
          setRiders((prev) => [...prev, ...newRiders]);
        }

        if (newRiders?.length < 10) {
          setHasMore(false);
        }
      })();
    }
  }, [page, searchParams]);

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
