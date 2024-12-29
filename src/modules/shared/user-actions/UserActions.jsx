import cn from '@/lib/cn.js';
import { useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa6';
import {
  PiPhoneLight,
  PiShareFatLight,
  PiStarFill,
  PiStarLight,
} from 'react-icons/pi';
import { Link } from 'react-router-dom';
import { Share } from './Share.jsx';

export default function UserActions({ user }) {
  const [isSaved, setIsSaved] = useState(false);

  return (
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
            <PiStarFill className="text-primary" size={24} />
          ) : (
            <PiStarLight className="" size={24} />
          )}
        </span>
        <span>Save</span>
      </button>

      {/* Send */}
      <Link
        to={`https://wa.me/+88${user.contactNo2 || user.contactNo1}`}
        className="flex items-center gap-1"
      >
        <span>
          <FaWhatsapp className="text-foreground/60" size={24} />
        </span>
        <span>Send</span>
      </Link>

      {/* Call */}
      <Link to={`tel:${user.contactNo1}`} className="flex items-center gap-1">
        <span>
          <PiPhoneLight className="" size={24} />
        </span>
        <span>Call</span>
      </Link>

      {/* Share */}
      <Share user={user}>
        <button className="flex items-center gap-1">
          <span>
            <PiShareFatLight className="" size={24} />
          </span>
          <span>Share</span>
        </button>
      </Share>
    </div>
  );
}
