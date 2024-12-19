import { NavItem, navConfig } from "@/config/navConfig";
import Link from "next/link";
import UserAvatar from "./UserAvatar";
import Private from "./Private";
import CartStatus from "./CartStatus";

export default function Nav() {
  return (
    <div>
      <button className="rounded-full bg-red-500 text-7xl p-4 block md:hidden">
        H
      </button>
      <ul className="py-4 bg-tertiary md:flex justify-evenly hidden items-center">
        {navConfig.map((el: NavItem, i: number) => {
          return !el.isPrivate ? (
            <li key={el.path + i}>
              <Link href={`/${el.path}`}>
                <span>{el.text}</span>
              </Link>
            </li>
          ) : (
            <div key={el.path}>
              <Private>
                <li>
                  <Link href={`/${el.path}`}>
                    <span>{el.text}</span>
                  </Link>
                </li>
              </Private>
            </div>
          );
        })}
        <li>
          <CartStatus />
        </li>
        <li>
          <UserAvatar />
        </li>
      </ul>
    </div>
  );
}
