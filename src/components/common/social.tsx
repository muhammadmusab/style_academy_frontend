import Image from "next/image";
import Link from "next/link";
const Social = ({ icons }: { icons: { icon: any; path: string }[] }) => {
  return (
    <div>
      <Image src={"/logo-red-white.png"} alt="logo" width={200} height={0} />
      <div className="flex mt-[20px]">
        {icons.map((item, i) => (
          <Link
            key={item.icon}
            className={`text-white ${i <= icons.length ? "mr-[25px]" : ""} `}
            href={item.path}
          >
            {item.icon}
          </Link>
        ))}
      </div>
      
    </div>
  );
};

export default Social;
