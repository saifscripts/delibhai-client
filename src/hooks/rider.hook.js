import { updateRider } from '@/services/user.service';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useEffect, useRef, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { toast } from 'sonner';
import { useGeolocation } from '../contexts/location.context';
import {
  addRiderServiceArea,
  deleteRiderServiceArea,
  getRiders,
  updateRiderServiceArea,
} from '../services/rider.service';

export const useRiders = () => {
  const [searchParams] = useSearchParams();
  const [page, setPage] = useState(0);
  const [riders, setRiders] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const loader = useRef(null);
  const [geoLocation, setGeoLocation] = useState(null);
  const { location, error } = useGeolocation();

  useEffect(() => {
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
    setRiders([]);
    setHasMore(true);
    setPage(0);
  }, [searchParams]);

  useEffect(() => {
    if (page > 0) {
      (async () => {
        const params = new URLSearchParams(searchParams);
        if (geoLocation) {
          params.set('latitude', geoLocation?.latitude);
          params.set('longitude', geoLocation?.longitude);
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
  }, [page, geoLocation]);

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

export const useUpdateServiceStatus = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ['UPDATE_RIDER'],
    mutationFn: (serviceStatus) => updateRider({ serviceStatus }),
    onMutate: async (serviceStatus) => {
      await queryClient.cancelQueries({ queryKey: ['ME'] });
      const oldData = queryClient.getQueryData(['ME']);
      queryClient.setQueryData(['ME'], (old) => ({
        ...old,
        data: {
          ...old.data,
          serviceStatus,
        },
      }));

      return { oldData };
    },
    onError: (error, _serviceStatus, context) => {
      queryClient.setQueryData(['ME'], context.oldData);
      toast.error(error.message);
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ['ME'] });
      //   queryClient.invalidateQueries({ queryKey: ['USER'] });
    },
  });
};

export const useAddRiderServiceArea = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ['RIDER_SERVICE_AREA'],
    mutationFn: addRiderServiceArea,
    onSuccess: (data) => {
      if (data?.success) {
        queryClient.invalidateQueries({ queryKey: ['ME'] });
        queryClient.invalidateQueries({ queryKey: ['USER'] });
      } else {
        toast.error(data?.message);
      }
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
};

export const useDeleteRiderServiceArea = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteRiderServiceArea,
    onSuccess: (data) => {
      if (data?.success) {
        queryClient.invalidateQueries({ queryKey: ['ME'] });
        queryClient.invalidateQueries({ queryKey: ['USER'] });
      } else {
        toast.error(data?.message);
      }
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
};

export const useUpdateRiderServiceArea = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateRiderServiceArea,
    onSuccess: (data) => {
      if (data?.success) {
        queryClient.invalidateQueries({ queryKey: ['ME'] });
        queryClient.invalidateQueries({ queryKey: ['USER'] });
      } else {
        toast.error(data?.message);
      }
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
};
