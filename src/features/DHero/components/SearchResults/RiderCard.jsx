import { MapPin, MapSpin, Station } from '@/assets/icons.jsx';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import vehicles from '@/data/vehicles.js';
import Container from '@/layouts/Container.jsx';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import dp from '../../../../assets/default.jpg';
import cn from '../../../../lib/cn.js';
import UserActions from '../../../../modules/shared/user-actions/UserActions.jsx';
import getMainStationTitle from '../../../../utils/getVillageTitle.js';

export default function RiderCard({ rider }) {
  const { _id, name, avatarURL, isOnline, distance } = rider;
  const [isSaved, setIsSaved] = useState(false);

  rider.isHighlight = false; // TODO: remove this when we have a real data

  const vehicleType = vehicles.find(
    ({ title }) => title === rider?.vehicleType
  );

  const vehicleSubTypes = vehicleType?.subTypes;

  const vehicleIcon = rider?.vehicleSubType
    ? vehicleSubTypes.find(({ title }) => title === rider?.vehicleSubType)?.icon
    : vehicleType?.icon;

  const navigate = useNavigate();

  return (
    <Container>
      <div className="bg-background shadow-sm hover:shadow-md rounded-lg">
        {/* Body */}
        <div
          className="flex cursor-pointer items-center gap-3 rounded-tl-lg rounded-tr-lg py-2 px-3 hover:bg-primary/5"
          onClick={() => {
            navigate(`/profile/${_id}`);
          }}
        >
          {/* Avatar */}
          <div className="relative aspect-square w-20 rounded-full flex-shrink-0">
            <img
              src={avatarURL || dp}
              alt="name"
              className="w-full rounded-full"
            />
            <div
              className={cn(
                'absolute bottom-[5%] right-[5%] aspect-square w-[20%] rounded-full border-2 border-background',
                { 'bg-primary': isOnline, 'bg-muted-foreground': !isOnline }
              )}
            ></div>
          </div>

          {/* Information */}
          <div className="flex-1 text-foreground/80 flex gap-3 justify-between items-center">
            <div>
              {/* Name */}
              <h3 className="text-lg font-bold">{name}</h3>

              {/* Rent Type */}
              <div className="flex items-center gap-1">
                <MapSpin size={16} className="fill-foreground/70" />
                <span>{rider?.rentType?.sort().reverse().join(', ')}</span>
              </div>

              {/* Station */}
              {getMainStationTitle(rider.mainStation) && (
                <div className="flex items-center gap-1">
                  <div className="relative">
                    {rider.isHighlight && (
                      <span className="absolute animate-ping">
                        <Station className="fill-destructive" size={16} />
                      </span>
                    )}
                    <span className="relative">
                      <Station
                        className={cn({
                          'fill-foreground/70': !rider.isHighlight,
                          'fill-destructive': rider.isHighlight,
                        })}
                        size={16}
                      />
                    </span>
                  </div>

                  <span
                    className={cn({
                      'text-destructive': rider.isHighlight,
                    })}
                  >
                    {getMainStationTitle(rider.mainStation)}
                  </span>
                </div>
              )}

              {/* Distance */}
              <div className="flex items-center gap-1">
                <div className="relative">
                  {rider.isLive && (
                    <span className="absolute animate-ping">
                      <MapPin
                        className={cn({
                          'fill-destructive': rider.isLive,
                          'fill-foreground/70': !rider.isLive,
                        })}
                        size={16}
                      />
                    </span>
                  )}
                  <span className="relative">
                    <MapPin
                      className={cn({
                        'fill-destructive': rider.isLive,
                        'fill-foreground/70': !rider.isLive,
                      })}
                      size={16}
                    />
                  </span>
                </div>
                <span
                  className={cn('mt-[2px]', {
                    'text-destructive': rider.isLive,
                  })}
                >
                  {rider.distance.toFixed(2)} km
                </span>
                {rider.isLive && (
                  <Button
                    variant="destructive"
                    size="sm"
                    className="text-[11px] h-4 px-1.5 rounded-sm"
                  >
                    Live
                  </Button>
                )}
              </div>
            </div>

            {/* Vehicle Icon */}
            <div className="w-12 flex-shrink-0">
              <img src={vehicleIcon} alt="" className="w-full" />
            </div>
          </div>
        </div>

        <Separator className="h-[0.5px] bg-foreground/5" />

        {/* Actions */}
        <UserActions user={rider} />
      </div>
    </Container>
  );
}
