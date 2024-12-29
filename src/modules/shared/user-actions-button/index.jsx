import { Button } from '@/components/ui/button';
import cn from '@/lib/cn.js';
import { useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa6';
import { PiPhoneLight, PiStarFill, PiStarLight } from 'react-icons/pi';
import { Link } from 'react-router-dom';
import { Share } from './Share.jsx';

export default function UserActionsButton({ user }) {
  const [isSaved, setIsSaved] = useState(false);

  return (
    <div className="flex items-center gap-2 min-[400px]:gap-3 sm:gap-4 py-2 text-sm text-foreground">
      {/* Save */}
      <Button
        variant="secondary"
        size="sm"
        className={cn('flex items-center gap-1 text-foreground', {
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

      {/* Send */}
      <Link to={`https://wa.me/+88${user.contactNo2 || user.contactNo1}`}>
        <Button
          size="sm"
          variant="secondary"
          className="flex items-center gap-1"
        >
          <span>
            <FaWhatsapp className="text-foreground" size={24} />
          </span>
          <span>Send</span>
        </Button>
      </Link>

      {/* Call */}
      <Link to={`tel:${user.contactNo1}`}>
        <Button
          size="sm"
          variant="secondary"
          className="flex items-center gap-1"
        >
          <span>
            <PiPhoneLight className="text-foreground" size={24} />
          </span>
          <span>Call</span>
        </Button>
      </Link>

      {/* Share */}
      <Share user={user} />
    </div>
  );
}
