import avatar from "@/assets/avatar.gif";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useAuth } from "@/contexts/auth.context";
import { useGetMe } from "@/hooks/user.hook";
import { LogOutIcon, UserPenIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function UserDropdown() {
  const { logout } = useAuth();
  const { user } = useGetMe();
  const navigate = useNavigate();

  if (!user) return null;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar>
          <AvatarImage src={user?.avatarURL || avatar} />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" className="w-56">
        <DropdownMenuItem
          onClick={() => {
            navigate(`/profile/${user?._id}`);
          }}
          className="flex cursor-pointer items-center gap-2 rounded-lg px-1 py-1 transition-colors duration-300 hover:bg-foreground/10 md:px-2"
        >
          <Avatar>
            <AvatarImage src={user?.avatarURL || avatar} />
            <AvatarFallback>
              {user?.name?.split(" ")[0].charAt(0).toUpperCase()}
              {user?.name?.split(" ")[1].charAt(0).toUpperCase()}
            </AvatarFallback>
          </Avatar>
          {/* Name and email */}
          <div className="hidden md:block">
            <p className="font-medium leading-tight tracking-tighter">
              {user?.name}
            </p>
            <p className="text-[12px] tracking-tighter text-muted-foreground">
              {user?.mobile}
            </p>
          </div>
        </DropdownMenuItem>
        <DropdownMenuItem
          className="cursor-pointer gap-2 text-base"
          onClick={() => {
            navigate(`/profile/${user?._id}`);
          }}
        >
          <UserPenIcon size={16} />
          Profile
        </DropdownMenuItem>

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
