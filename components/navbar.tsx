"use client";

import { usePathname } from "next/navigation";

const routes = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];

export default function Navbar() {
  const pathname = usePathname();

  const handleCurrentPath = () => {
    console.log(pathname);
    switch (pathname) {
      case "/":
        return "text-red-500";
      case "/about":
        return "text-blue-500";
      case "/contact":
        return "text-green-500";
      default:
        return "text-purple-500";
    }
  };

  return (
    <div className="w-full flex items-center justify-evenly">
      <div className={handleCurrentPath()}>Current pathname: {pathname}</div>
      <div>
        <ul className="flex space-x-7">
          {routes.map((route, index) => (
            <li key={index}>
              <a href={route.href}>{route.name}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
