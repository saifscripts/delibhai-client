import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import vehicles from '@/data/vehicles.js';
import Container from '@/layouts/Container.jsx';
import { MapPin } from 'lucide-react';
import { useState } from 'react';
import { PiPhone, PiStar, PiStarFill } from 'react-icons/pi';
import { TbBrandWhatsapp } from 'react-icons/tb';
import { Link, useNavigate } from 'react-router-dom';
import dp from '../../../../assets/default.jpg';
import cn from '../../../../lib/cn.js';
import getVillageTitle from '../../../../utils/getVillageTitle.js';
import rentIcon from './rent.png';
import { Share } from './Share.jsx';
import stationActiveIcon from './station-active.png';
import stationIcon from './station.png';

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
        <div
          className="flex cursor-pointer items-center gap-3 rounded-tl-lg rounded-tr-lg hover:bg-tone-400/20 py-2 px-3"
          onClick={() => {
            navigate(`/profile/${_id}`);
          }}
        >
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

          <div className="flex-1">
            <div className="flex gap-2 justify-between">
              <div>
                <h3 className="text-lg font-bold">{name}</h3>
                <div className="flex items-center gap-1 text-sm">
                  <img src={rentIcon} alt="" />
                  <span>
                    {rider?.rentType?.map((type) => `${type}  ভাড়া`).join(', ')}
                  </span>
                </div>

                {getVillageTitle(rider.mainStation) && (
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

                {/* <a
                  href="whatsapp://send?text=The text to share!"
                  data-action="share/whatsapp/share"
                  onClick={(e) => e.stopPropagation()}
                >
                  Share via Whatsapp
                </a> */}

                <div className="flex items-center gap-1 text-sm">
                  <MapPin
                    className={cn('size-3', {
                      'text-destructive': rider.isLive,
                    })}
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

              <div className="w-8 flex-shrink-0">
                <img src={vehicleIcon} alt="" className="w-full" />
              </div>
            </div>

            {/* <div className="flex justify-between items-center gap-1">
              <div
                className="flex gap-1 mt-1"
                onClick={(e) => e.stopPropagation()}
              >
                <Link
                  to={`https://wa.me/+88${rider.contactNo2 || rider.contactNo1}`}
                  onClick={(e) => e.stopPropagation()}
                >
                  <Button
                    size="sm"
                    className="text-[10px] h-7 gap-1 px-2 rounded-md"
                  >
                    <PiWhatsappLogoFill />
                    WhatsApp
                  </Button>
                </Link>

                <Link
                  to={`tel:${rider.contactNo1}`}
                  onClick={(e) => e.stopPropagation()}
                >
                  <Button
                    size="sm"
                    className="text-[10px] h-7 gap-1 px-2 rounded-md"
                  >
                    <PiPhoneFill />
                    Call
                  </Button>
                </Link>
              </div>

              <div className="flex items-center gap-1">
                <p className="text-[10px] text-muted-foreground">10</p>
                <button
                  className={cn(
                    'text-[10px] h-5 w-14 px-2 rounded-sm flex items-center gap-1',
                    {
                      'bg-tone-600': isSaved,
                      'border-tone-600 border': !isSaved,
                    }
                  )}
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsSaved(!isSaved);
                  }}
                >
                  <span>
                    {isSaved ? (
                      <PiStarFill className="text-yellow-300" size={10} />
                    ) : (
                      <PiStar className="" size={10} />
                    )}
                  </span>
                  <span>{isSaved ? 'Saved' : 'Save'}</span>
                </button>
              </div>
            </div> */}
          </div>
        </div>

        <Separator className="h-[0.5px] bg-foreground/5" />

        <div className="flex justify-between items-center gap-4 px-3 py-2 text-sm text-foreground/80">
          <button
            className={cn('flex items-center gap-1', {
              'text-primary': isSaved,
            })}
            onClick={() => setIsSaved(!isSaved)}
          >
            <span>
              {isSaved ? (
                <PiStarFill className="text-primary" size={16} />
              ) : (
                <PiStar className="" size={16} />
              )}
            </span>
            <span>Save</span>
          </button>

          <Link
            to={`https://wa.me/+88${rider.contactNo2 || rider.contactNo1}`}
            className="flex items-center gap-1"
          >
            <span>
              <TbBrandWhatsapp className="" size={16} />
            </span>
            <span>Send</span>
          </Link>

          <Link
            to={`tel:${rider.contactNo1}`}
            className="flex items-center gap-1"
          >
            <span>
              <PiPhone className="" size={16} />
            </span>
            <span>Call</span>
          </Link>

          <Share rider={rider} />
        </div>
      </div>
    </Container>
  );
}
