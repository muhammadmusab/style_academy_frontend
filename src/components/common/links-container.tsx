import Link from "next/link";
import { v4 as uuidv4 } from "uuid";
interface Props {
  heading: string;
  links: { text: string; path: string }[];
}

const LinksContainer = ({ heading, links }: Props) => {
  return (
    <div className="text-white">
      <h1 className="text-[20px] font-medium text-white mb-[24px]">
        {heading}
      </h1>
      <div className="flex flex-col">
        {links.map((item,i) => (
          <Link key={uuidv4()} href={item.path} className="text-white mb-[16px]" >{item.text}</Link>
        ))}
      </div>
    </div>
  );
};

export default LinksContainer;
