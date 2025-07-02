import {
  Bug,
  Code,
  DollarSign,
  FlaskConical,
  FolderPlus,
  Hammer,
  Layout,
  Palette,
  PlusSquare,
  Search,
  Settings,
  Sparkles,
  Wrench,
} from "lucide-react";
import Marquee from "react-fast-marquee";

const marqueeItems = [
  { label: "Design", icon: Palette },
  { label: "Build", icon: Hammer },
  { label: "Landing Pages", icon: Layout },
  { label: "SEO", icon: Search },
  { label: "Develop", icon: Code },
  { label: "Implement", icon: FolderPlus },
  { label: "Optimization", icon: Settings },
  { label: "Cost Effective", icon: DollarSign },
  { label: "Create", icon: PlusSquare },
  { label: "Test", icon: FlaskConical },
  { label: "Maintain", icon: Wrench },
  { label: "Debug", icon: Bug },
  { label: "Enhance", icon: Sparkles },
];

const InfiniteMarquee = () => {
  return (
    <div className="marquee">
      <Marquee speed={70} gradient={false} pauseOnHover={true}>
        <ul className="flex items-center">
          {marqueeItems.map((item, idx) => (
            <li
              key={idx}
              className="mx-[3rem] inline-flex items-center gap-[1rem] rounded-[.8rem] border-[1px] border-[#E6E4DF] bg-[#efeeea] px-[2.4rem] py-[1.2rem] text-[1.4rem] leading-[2rem]"
            >
              <item.icon className="size-[2rem]" />
              <span>{item.label}</span>
            </li>
          ))}
        </ul>
      </Marquee>
    </div>
  );
};

export default InfiniteMarquee;
