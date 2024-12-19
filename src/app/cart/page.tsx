"use client";

import { useAuth } from "@/contexts/AuthContext";
import { useCart } from "@/contexts/CartContext";
import { IProduct } from "@/interfaces/IProduct";
import axios from "axios";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";

export default function Cart() {
  const { items, emptyCart } = useCart();
  const { token, user } = useAuth();
  const router = useRouter();

  const emptyCartHandler = () => {
    // le haría una pregunta
    emptyCart();
  };

  const checkoutHandler = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .post(
            `${process.env.NEXT_PUBLIC_API_URL}/orders/`,
            {
              userId: user?.id,
              products: items.map((e) => e.id),
            },
            {
              headers: {
                authorization: token,
              },
            }
          )
          .then((res) => {
            Swal.fire({
              title: "Success!",
              text: "Compra realizada con éxito!",
              icon: "success",
            });
            emptyCart();
            router.push("/dashboard");
          })
          .catch((error) => {
            console.log(error);
          });
      }
    });
  };

  return (
    <div>
      <div>
        {items.length ? (
          <div className="w-5/6 mx-auto">
            <table className="divide-y divide-gray-200 w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Product
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Quantity
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Price
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Total
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                i
                {items
                  .reduce((acc: Partial<IProduct>[], current: IProduct) => {
                    const x = acc.find((item) => item.name === current.name);
                    if (!x) {
                      return acc.concat([{ ...current, count: 1 }]);
                    } else {
                      return acc.map((item) =>
                        item.name === current.name
                          ? { ...item, count: item.count ? item.count + 1 : 1 }
                          : item
                      );
                    }
                  }, [])
                  .map((e: Partal<IProduct>, i: number) => {
                    return (
                      <tr
                        key={e.id ? e.id + "" + i : i.toString()}
                        className="hover:bg-gray-50"
                      >
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-medium text-gray-900">
                            {e.name}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-500">
                            {e.count ? e.count : 0}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-500">
                            $ {e.price}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-500">
                            $ {e.price * e.count}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-500">
                            <button>Remove</button>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
            <div className="flex gap-4 w-full justify-end mt-4">
              <button
                className="bg-tertiary px-8 py-4 text-white font-bold rounded-lg"
                onClick={emptyCartHandler}
              >
                Clear Cart
              </button>
              <button
                className="bg-tertiary px-8 py-4 text-white font-bold rounded-lg"
                onClick={checkoutHandler}
              >
                Checkout
              </button>
            </div>
          </div>
        ) : (
          <h2>No hay productos</h2>
        )}
      </div>
    </div>
  );
}
