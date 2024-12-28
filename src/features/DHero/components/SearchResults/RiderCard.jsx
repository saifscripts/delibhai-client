import { MapPin, MapSpin, Station } from '@/assets/icons.jsx';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import vehicles from '@/data/vehicles.js';
import Container from '@/layouts/Container.jsx';
import { useState } from 'react';
import { TbBrandWhatsapp, TbPhone, TbStar, TbStarFilled } from 'react-icons/tb';
import { Link, useNavigate } from 'react-router-dom';
import dp from '../../../../assets/default.jpg';
import cn from '../../../../lib/cn.js';
import getVillageTitle from '../../../../utils/getVillageTitle.js';
import { Share } from './Share.jsx';

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
      <div className="bg-background shadow-sm rounded-lg">
        {/* Body */}
        <div
          className="flex cursor-pointer items-center gap-3 rounded-tl-lg rounded-tr-lg hover:bg-tone-400/20 py-2 px-3"
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
                'absolute bottom-[5%] right-[5%] aspect-square w-[20%] rounded-full border-2 border-white',
                { 'bg-primary': isOnline, 'bg-muted-foreground': !isOnline }
              )}
            ></div>
          </div>

          {/* Information */}
          <div className="flex-1">
            <div className="flex gap-2 justify-between">
              <div>
                {/* Name */}
                <h3 className="text-lg font-bold">{name}</h3>

                {/* Rent Type */}
                <div className="flex items-center gap-1">
                  <MapSpin size={16} />
                  <span>
                    {rider?.rentType?.map((type) => `${type}  ভাড়া`).join(', ')}
                  </span>
                </div>

                {/* Station */}
                {getVillageTitle(rider.mainStation) && (
                  <div className="flex items-center gap-1">
                    <Station
                      className={cn({
                        'fill-foreground': !rider.isHighlight,
                        'fill-destructive': rider.isHighlight,
                      })}
                      size={16}
                    />
                    <span
                      className={cn({
                        'text-destructive': rider.isHighlight,
                      })}
                    >
                      {getVillageTitle(rider.mainStation)}
                    </span>
                  </div>
                )}

                {/* Distance */}
                <div className="flex items-center gap-1">
                  <MapPin
                    className={cn({
                      'text-destructive': rider.isLive,
                    })}
                    size={16}
                  />
                  <span
                    className={cn({
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
        </div>

        <Separator className="h-[0.5px] bg-foreground/5" />

        {/* Actions */}
        <div className="flex justify-between items-center gap-4 px-3 py-2 text-sm text-foreground/80">
          {/* Save */}
          <button
            className={cn('flex items-center gap-1', {
              'text-primary': isSaved,
            })}
            onClick={() => setIsSaved(!isSaved)}
          >
            <span>
              {isSaved ? (
                <TbStarFilled className="text-primary" size={24} />
              ) : (
                <TbStar className="text-foreground/50" size={24} />
              )}
            </span>
            <span>Save</span>
          </button>

          {/* Send */}
          <Link
            to={`https://wa.me/+88${rider.contactNo2 || rider.contactNo1}`}
            className="flex items-center gap-1"
          >
            <span>
              <TbBrandWhatsapp className="text-foreground/50" size={24} />
            </span>
            <span>Send</span>
          </Link>

          {/* Call */}
          <Link
            to={`tel:${rider.contactNo1}`}
            className="flex items-center gap-1"
          >
            <span>
              <TbPhone className="text-foreground/50" size={24} />
            </span>
            <span>Call</span>
          </Link>

          {/* Share */}
          <Share rider={rider} />
        </div>
      </div>
    </Container>
  );
}
