import { Button } from '@/components/ui/button';
import cn from '@/lib/cn.js';
import { useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa6';
import {
  PiPhoneFill,
  PiShareFatLight,
  PiStarFill,
  PiStarLight,
} from 'react-icons/pi';
import { Link } from 'react-router-dom';
import { Share } from './Share';

export default function UserActionsButton({ user }) {
  const [isSaved, setIsSaved] = useState(false);

  return (
    <div className="flex items-center gap-2 min-[400px]:gap-3 sm:gap-4 py-2 text-sm text-foreground">
      {/* Call */}
      <Link to={`tel:${user.contactNo1}`}>
        <Button
          size="sm"
          variant="default"
          className="flex items-center gap-1 h-10"
        >
          <span>
            <PiPhoneFill className="text-primary-foreground" size={24} />
          </span>
          <span>Call</span>
        </Button>
      </Link>

      {/* Send */}
      <Link to={`https://wa.me/+88${user.contactNo2 || user.contactNo1}`}>
        <Button
          size="sm"
          variant="secondary"
          className="flex items-center gap-1 h-10"
        >
          <span>
            <FaWhatsapp className="text-foreground" size={24} />
          </span>
          <span>Send</span>
        </Button>
      </Link>

      {/* Save */}
      <Button
        variant="secondary"
        size="sm"
        className={cn('flex items-center gap-1 text-foreground h-10', {
          'text-primary': isSaved,
        })}
        onClick={() => setIsSaved(!isSaved)}
      >
        <span>
          {isSaved ? (
            <PiStarFill className="text-primary" size={24} />
          ) : (
            <PiStarLight className="text-foreground" size={24} />
          )}
        </span>
        <span>Save</span>
      </Button>

      {/* Share */}
      <Share user={user}>
        <Button
          size="sm"
          variant="secondary"
          className="flex items-center gap-1 h-10"
        >
          <span>
            <PiShareFatLight className="text-foreground" size={24} />
          </span>
          <span>Share</span>
        </Button>
      </Share>
    </div>
  );
}
