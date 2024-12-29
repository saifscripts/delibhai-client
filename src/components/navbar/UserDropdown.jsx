import avatar from '@/assets/avatar.gif';
import {
  Avatar as AvatarComponent,
  AvatarFallback,
  AvatarImage,
} from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useAuth } from '@/contexts/auth.context';
import { useGetMe } from '@/hooks/user.hook';
import { LayoutDashboard, LogOutIcon, UserPenIcon } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ServiceStatusPopover } from './ServiceStatusPopover';
import StatusIcon from './StatusIcon';

export default function UserDropdown() {
  const { logout } = useAuth();
  const { user } = useGetMe();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  if (!user) return null;

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger>
        <Avatar user={user} statusIcon />
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" className="w-56">
        <div
          onClick={() => {
            navigate(`/profile/${user?._id}`);
            setIsOpen(false);
          }}
          className="flex cursor-pointer items-center gap-2 rounded-lg px-1 py-1 transition-colors duration-300 hover:bg-foreground/10 md:px-2"
        >
          <Avatar user={user} />
          {/* Name and email */}
          <div>
            <p className="font-medium leading-tight tracking-tighter">
              {user?.name}
            </p>
            <p className="text-[12px] tracking-tighter text-muted-foreground">
              {user?.mobile}
            </p>
            <ServiceStatusPopover />
          </div>
        </div>
        <DropdownMenuItem
          className="cursor-pointer gap-2 text-base"
          onClick={() => {
            navigate(`/profile/${user?._id}`);
          }}
        >
          <UserPenIcon size={16} />
          Profile
        </DropdownMenuItem>

        {user?.role === 'admin' && (
          <DropdownMenuItem
            className="cursor-pointer gap-2 text-base"
            onClick={() => {
              navigate(`/admin-dashboard`);
            }}
          >
            <LayoutDashboard size={16} />
            Dashboard
          </DropdownMenuItem>
        )}

        <DropdownMenuItem className="cursor-pointer p-0 text-base">
          <Button
            variant="ghost"
            className="w-full justify-start gap-2 px-2 py-1.5"
            onClick={logout}
          >
            <LogOutIcon size={16} />
            <span className="text-base">Logout</span>
          </Button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

const Avatar = function ({ user, statusIcon }) {
  return (
    <div className="relative">
      <AvatarComponent>
        <AvatarImage src={user?.avatarURL || avatar} />
        <AvatarFallback>
          {user?.name?.split(' ')[0].charAt(0).toUpperCase()}
          {user?.name?.split(' ')[1].charAt(0).toUpperCase()}
        </AvatarFallback>
      </AvatarComponent>
      {statusIcon && (
        <StatusIcon
          status={user?.serviceStatus}
          className="size-[13px] border-2 border-background absolute bottom-[2%] right-[2%]"
        />
      )}
    </div>
  );
};
