import Image from "next/image";
import Link from "next/link";

export default function Landing() {
  return (
    <div className="w-full h-full flex items-center justify-between flex-row mx-auto bg-gradient-to-r from-tertiary to-fourth">
      <div className="mx-auto w-[40%] flex flex-col justify-center items-start p-5 gap-8 font-bold">
        <h1 className="text-4xl md:text-7xl text-left text-white">
          Shopping was never this easy!
        </h1>
        <p className="text-white text-lg md:text-2xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          scelerisque, urna nec venenatis ultricies, lorem purus vehicula nunc,
          nec tincidunt ex libero sed nisi.
        </p>
        <Link href="/home">
          <button className="bg-white text-tertiary p-2 rounded-lg text-3xl hover:bg-tertiary hover:text-white transition-all duration-300">
            Get Started
          </button>
        </Link>
      </div>
      <div className="w-[90%] md:w-auto">
        <Image
          width={2000}
          height={2000}
          src={
            "https://images.ctfassets.net/wcfotm6rrl7u/5KYFmM6BQD6LHus6FpT6Mp/4b7b546a321f30d0933d21babfe6eefe/HMD_Crest-Hero-White-Homepage-v2.png?w=1920&fm=webp&q=80"
          }
          alt="hero"
          className="h-screen w-auto object-cover"
        />
      </div>
    </div>
  );
}
