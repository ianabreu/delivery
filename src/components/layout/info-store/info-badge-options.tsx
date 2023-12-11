import { Badge } from "@/components/ui/badge";
import { ICONS } from "@/constants/Icons";

interface InfoBadgeProps {
  icon?: keyof typeof ICONS;
  title: string;
}

const InfoBadge = ({ icon, title }: InfoBadgeProps) => {
  return (
    <Badge
      className="w-fit border-2 bg-gray-200 gap-1 text-background-foreground text-xs capitalize"
      variant={"outline"}
    >
      {icon && ICONS[icon]} {title}
    </Badge>
  );
};

export default InfoBadge;
