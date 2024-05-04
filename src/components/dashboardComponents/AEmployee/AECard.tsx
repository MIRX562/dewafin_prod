import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { getNameInitials } from "@/lib/utils";

interface AECardProps {
  avatarSrc: string;
  name: string;
  jobTitle: string;
}

const AECard: React.FC<AECardProps> = ({ avatarSrc, name, jobTitle }) => {
  return (
    <div className="flex items-center gap-4">
      <div className="relative">
        <Avatar>
          <AvatarImage alt={name} src={avatarSrc} />
          <AvatarFallback>{getNameInitials(name)}</AvatarFallback>
        </Avatar>
        <div className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-green-500" />
      </div>
      <div className="space-y-1">
        <p className="font-medium">{name}</p>
        <p className="text-sm text-gray-500 dark:text-gray-400">{jobTitle}</p>
      </div>
    </div>
  );
};

export default AECard;
