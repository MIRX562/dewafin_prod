import { Card } from "@/components/ui/card";
import { favNavItems } from "@/types/menu/mainMenu";
import Link from "next/link";

const NavItems = () => {
  return (
    <div className="flex flex-wrap gap-2 md:gap-6 w-full">
      {favNavItems.map((item, index) => (
        <Link
          key={index}
          href={item.path}
          className="flex-1 min-w-[calc(50%-1rem)] md:min-w-[calc(33.333%-1.5rem)] lg:min-w-[calc(16.666%-1.5rem)]"
        >
          <Card className="p-4 flex items-center justify-between">
            <h2 className="text-sm font-semibold">{item.label}</h2>
            <item.icon className="w-8 h-8 md:h-12 md:w-12" />
          </Card>
        </Link>
      ))}
    </div>
  );
};

export default NavItems;
