import { Button } from '@/components/ui/button';
import Container from '@/layouts/Container.jsx';
import { MapPin, Phone } from 'lucide-react';
import { BsWhatsapp } from 'react-icons/bs';
import { Link, useNavigate } from 'react-router-dom';
import dp from '../../../../assets/default.jpg';
import cn from '../../../../lib/cn.js';
import getVillageTitle from '../../../../utils/getVillageTitle.js';
import rentIcon from './rent.png';
import stationActiveIcon from './station-active.png';
import stationIcon from './station.png';

export default function RiderCard({ rider }) {
  const { _id, name, avatarURL, isOnline, distance } = rider;

  rider.isHighlight = false; // TODO: remove this when we have a real data

  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/profile/${_id}`);
  };

  return (
    <Container>
      <div
        onClick={handleClick}
        className="bg-background hover:bg-tone-400/20 active:bg-tone-400/20 shadow-md rounded-lg p-4"
      >
        <div className="flex cursor-pointer items-center gap-5 rounded-lg">
          <div className="relative aspect-square w-24 rounded-full">
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

          <div className="flex-1">
            <h3 className="text-xl font-bold">{name}</h3>

            <div className="flex items-center gap-1 text-sm">
              <img src={rentIcon} alt="" />
              <span>
                {rider?.rentType?.map((type) => `${type}  ভাড়া`).join(', ')}
              </span>
            </div>

            {rider?.mainStation && (
              <div className="flex items-center gap-1 text-sm">
                <img
                  src={rider.isHighlight ? stationActiveIcon : stationIcon}
                  alt=""
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

            <div className="flex items-center gap-1 text-sm">
              <MapPin
                className={cn('size-3', { 'text-destructive': rider.isLive })}
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

            <div
              className="flex gap-2 mt-2"
              onClick={(e) => e.stopPropagation()}
            >
              <Link
                to={
                  rider.contactNo2 ? `https://wa.me/+88${rider.contactNo2}` : ''
                }
                onClick={(e) => e.stopPropagation()}
              >
                <Button size="sm" disabled={!rider.contactNo2}>
                  <BsWhatsapp />
                  WhatsApp
                </Button>
              </Link>

              <Link
                to={`tel:${rider.contactNo1}`}
                onClick={(e) => e.stopPropagation()}
              >
                <Button size="sm">
                  <Phone />
                  Call
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
