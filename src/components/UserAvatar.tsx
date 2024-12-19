"use client";

import { useAuth } from "@/contexts/AuthContext";
import Image from "next/image";
import Link from "next/link";

export default function UserAvatar() {
  const { isAuthenticated, user, logout } = useAuth();

  return isAuthenticated ? (
    <div className="flex gap-4 items-center">
      <Image
        src={"https://cdn-icons-png.flaticon.com/512/3607/3607444.png"}
        width={50}
        height={50}
        alt="userAvatar"
      />
      <div className="flex flex-col">
        <p>Hi, {user?.name}!</p>
        <button
          onClick={() => {
            logout();
          }}
        >
          LOG OUT
        </button>
      </div>
    </div>
  ) : (
    <div>
      <Link href={"/auth/login"}>
        <button className="bg-red-500 p-4">LOG IN</button>
      </Link>
      <Link href={"/auth/signup"}>
        <button className="bg-green-500 p-4">SIGN UP</button>
      </Link>
    </div>
  );
}
