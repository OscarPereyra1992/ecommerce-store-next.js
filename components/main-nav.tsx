"use client"
import { useState } from "react";
import Link from "next/link";
import { HiMenu } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Category } from "@/types";
import { useMediaQuery } from "react-responsive";

interface MainNavProps {
  data: Category[];
}

const MainNav: React.FC<MainNavProps> = ({ data }) => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const isSmallScreen = useMediaQuery({ maxWidth: 640 });

  const routes = data.map((route) => ({
    href: `/category/${route.id}`,
    label: route.name,
    active: pathname === `/category/${route.id}`,
  }));

  return (
    <nav className="mx-6 flex items-center space-x-4 lg:space-x-4" style={{ zIndex: 9999 }}>
      {isSmallScreen && (
        <>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-red-300 text-md font-medium focus:outline-none relative z-10"
          >
            {menuOpen ? (
              <AiOutlineClose className="w-6 h-6" />
            ) : (
              <HiMenu className="w-6 h-6" />
            )}
          </button>
          {menuOpen && (
            <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-80 flex items-center justify-center">
              <div className="flex flex-col items-center space-y-4">
                {routes.map((route) => (
                  <Link
                    key={route.href}
                    href={route.href}
                    className={cn(
                      "text-md font-medium transition-colors hover:text-red-500",
                      route.active ? "text-red-300" : "text-black"
                    )}
                  >
                    {route.label}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </>
      )}

      {!isSmallScreen &&
        routes.map((route) => (
          <Link
            key={route.href}
            href={route.href}
            className={cn(
              "text-md font-medium transition-colors hover:text-red-300",
              route.active ? "text-red-300" : "text-neutral-500"
            )}
          >
            {route.label}
          </Link>
        ))}
    </nav>
  );
};

export default MainNav;