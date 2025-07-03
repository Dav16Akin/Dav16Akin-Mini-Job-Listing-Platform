"use client";

import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { MoonIcon, ShieldUser, SunIcon } from "lucide-react";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";

const Navbar = () => {
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  if (pathname === "/admin") return null;

  const handleClick = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className="w-full h-16 flex items-center justify-between px-8 border-b">
      <Link href="/">
        <h1 className="md:text-3xl text-xl">Mini Job Listing Platform</h1>
      </Link>

      <div className="flex gap-4">
        <div className="flex items-center">
          {pathname === "/admin" ? (
            ""
          ) : (
            <Link className="underline flex gap-2" href="/?admin=true">
              <ShieldUser />
              Admin
            </Link>
          )}
        </div>

        <Button onClick={handleClick} variant="outline">
          {theme === "dark" ? <SunIcon /> : <MoonIcon />}
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
