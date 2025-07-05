import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuTrigger,
  NavigationMenuIndicator,
  NavigationMenuList,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import LogoutButton from "./logout-button";
import { AiOutlineUser } from "react-icons/ai";

const AccountMenu = () => {
  return (
    <NavigationMenu>
      <NavigationMenuItem className="list-none">
        <NavigationMenuTrigger className=" font-bold px-[20px]">
          <AiOutlineUser className="text-[25px] hover:text-primary ml-[20px]" />
        </NavigationMenuTrigger>
        <NavigationMenuContent>
          <ul className="grid w-[200px] gap-4 ">
            <li className=" ">
              <NavigationMenuLink asChild>
                <Link href="/account/profile">Profile</Link>
              </NavigationMenuLink>
              <NavigationMenuLink asChild>
                <Link href="/account/orders">Orders</Link>
              </NavigationMenuLink>
              <NavigationMenuLink asChild>
                <Link href="/account/saved-addresses">Addresses</Link>
              </NavigationMenuLink>
              <NavigationMenuLink asChild>
                <Link href="/account/wishlist">Wishlist</Link>
              </NavigationMenuLink>
              <NavigationMenuLink>
                <LogoutButton  />
              </NavigationMenuLink>
            </li>
          </ul>
        </NavigationMenuContent>
      </NavigationMenuItem>
    </NavigationMenu>
  );
};

export default AccountMenu;
