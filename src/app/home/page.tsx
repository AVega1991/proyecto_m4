import Card from "@/components/Card";
import { getProducts } from "@/helpers/getProducts";
import { IProduct } from "@/interfaces/IProduct";
import Link from "next/link";

export default async function Home() {
  const products: IProduct[] = await getProducts();

  return (
    <div>
      <div>
        <h1>PRODUCTOS</h1>
        <div className="flex flex-col md:flex-row gap-2 md:gap-4">
          {products.map(({ name, price, description, image, stock, id }) => {
            return (
              <Link href={`product/${id}`}>
                <Card
                  key={id}
                  name={name}
                  price={price}
                  description={description}
                  image={image}
                  stock={stock}
                />
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
