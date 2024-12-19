"use client";

import { useAuth } from "@/contexts/AuthContext";
import { usePrivate } from "@/hooks/usePrivate";
import { IOrder } from "@/interfaces/IOrder";
import axios from "axios";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

export default function Dashboard() {
  const { user, token } = useAuth();
  const [userOrders, setUserOrders] = useState<IOrder[]>([]);
  console.log(userOrders);

  usePrivate();

  useEffect(() => {
    token &&
      axios
        .get(`${process.env.NEXT_PUBLIC_API_URL}/users/orders`, {
          headers: {
            authorization: token,
          },
        })
        .then((res) => {
          setUserOrders(res.data);
        })
        .catch((error) => {
          Swal.fire("Error al obtener las órdenes del usuario");
        });
  }, [token]);

  return (
    <div className="bg-green-500 w-4/5 mx-auto">
      <div className="bg-red-500">
        <p>Name: {user?.name}</p>
        <p>Email: {user?.email}</p>
        <p>Address: {user?.address}</p>
        <p>Phone: {user?.phone}</p>
      </div>
      <div className="bg-yellow-500">
        {userOrders.length ? (
          <div>
            {userOrders.map((order) => {
              return <div>{order.id}</div>;
            })}
          </div>
        ) : (
          <div>You don't have any order yet.</div>
        )}
      </div>
    </div>
  );
}
