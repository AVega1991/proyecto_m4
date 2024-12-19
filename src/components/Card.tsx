interface CardProps {
  name: string;
  price: number;
  description: string;
  image: string;
  stock: number;
}

export default function Card({
  name,
  price,
  description,
  image,
  stock,
}: CardProps) {
  return (
    <div className="w-50 border-white border-2 bg-primary">
      <h2 className="text-center">{name}</h2>
      <img
        src={
          "https://d28hi93gr697ol.cloudfront.net/9ef84dda-32dd-4016-7da3-1c0a824fffb4/img/Producto/bb1163e0-2c90-c3f1-5bc1-d3f69737d58f/Iphone-16-azul-66eecf5c8344d-O.png"
        }
      />
      <div className="flex flex-col">
        <span className="text-2xl text-center">${price}</span>
        {/* <p className="text-lg">{description}</p> */}
        <span className="p-2">Stock: {stock}</span>
      </div>
    </div>
  );
}
