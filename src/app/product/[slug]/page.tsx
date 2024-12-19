import AddProduct from "@/components/AddProduct";
import getProduct from "@/helpers/getProduct";

export default async function Product({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = await getProduct(Number(slug));
  const { name, price, id } = product;

  return (
    <div>
      <h1 className="text-4xl">
        {id} - {name}
      </h1>
      <h2 className="text-3xl">$ {price}</h2>
      <AddProduct product={product} />
    </div>
  );
}
