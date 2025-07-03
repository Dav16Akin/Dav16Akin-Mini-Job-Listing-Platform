"use client"

import { usePathname } from "next/navigation";
import React from "react";

const Footer = () => {
  const pathname = usePathname();

  if (pathname === "/admin") return null;

  return (
    <div className="w-full flex items-center justify-center border-t">
      {" "}
      <p className="copyright py-12">© 2025 Mini Job Listing Platform</p>
    </div>
  );
};

export default Footer;
