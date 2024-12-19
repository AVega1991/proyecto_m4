"use client";

import { usePathname } from "next/navigation";
const excludedRoutes = ["/", "auth/login", "auth/signup"];

export default function ExcludedWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const path = usePathname();

  if (!excludedRoutes.includes(path)) return children;
}
