import { ReactComponent as LeafeIcon } from "../../assets/images/leafe-icon.svg";
import GoalPic1 from "../../assets/images/goal-pic-1.jpg";
import GoalPic2 from "../../assets/images/goal-pic-2.jpg";
import GoalPic3 from "../../assets/images/goal-pic-3.jpg";
import GoalPic4 from "../../assets/images/goal-pic-4.jpg";
import GoalPic5 from "../../assets/images/goal-pic-5.jpg";
import GoalPic6 from "../../assets/images/goal-pic-6.jpg";

const callouts = [
  {
    number: "1",
    name: "Eco System",
    nameHover: "Eco System",
    description:
      "By holding a DeFi Farmer, you will have access to Sustainability clubs, places to vote and discuss sustainable actions to preserve our environment . DeFi Farmers is a spin-off project created by Treedefi, the eco-friendly DeFi protocol. Treedefi allows investors to have a real world impact.",
    imageSrc: GoalPic1,
    imageAlt: "goal-pic-1",
    href: "#",
    icon: <LeafeIcon />,
    buttonText: "More Information",
    backgroundColor: "bg-red-600",
  },
  {
    number: "1",
    name: "Eco System",
    nameHover: "Eco System",
    description:
      "By holding a DeFi Farmer, you will have access to Sustainability clubs, places to vote and discuss sustainable actions to preserve our environment . DeFi Farmers is a spin-off project created by Treedefi, the eco-friendly DeFi protocol. Treedefi allows investors to have a real world impact.",
    imageSrc: GoalPic2,
    imageAlt: "goal-pic-2",
    href: "#",
    icon: <LeafeIcon />,
    buttonText: "More Information",
    backgroundColor: "bg-amber-500",
  },
  {
    number: "1",
    name: "Eco System",
    nameHover: "Eco System",
    description:
      "By holding a DeFi Farmer, you will have access to Sustainability clubs, places to vote and discuss sustainable actions to preserve our environment . DeFi Farmers is a spin-off project created by Treedefi, the eco-friendly DeFi protocol. Treedefi allows investors to have a real world impact.",
    imageSrc: GoalPic3,
    imageAlt: "goal-pic-3",
    href: "#",
    icon: <LeafeIcon />,
    buttonText: "More Information",
    backgroundColor: "bg-cyan-400",
  },
  {
    number: "1",
    name: "Eco System",
    nameHover: "Eco System",
    description:
      "By holding a DeFi Farmer, you will have access to Sustainability clubs, places to vote and discuss sustainable actions to preserve our environment . DeFi Farmers is a spin-off project created by Treedefi, the eco-friendly DeFi protocol. Treedefi allows investors to have a real world impact.",
    imageSrc: GoalPic4,
    imageAlt: "goal-pic-4",
    href: "#",
    icon: <LeafeIcon />,
    buttonText: "More Information",
    backgroundColor: "bg-sky-400",
  },
  {
    number: "1",
    name: "Eco System",
    nameHover: "Eco System",
    description:
      "By holding a DeFi Farmer, you will have access to Sustainability clubs, places to vote and discuss sustainable actions to preserve our environment . DeFi Farmers is a spin-off project created by Treedefi, the eco-friendly DeFi protocol. Treedefi allows investors to have a real world impact.",
    imageSrc: GoalPic5,
    imageAlt: "goal-pic-15",
    href: "#",
    icon: <LeafeIcon />,
    buttonText: "More Information",
    backgroundColor: "bg-pink-800",
  },
  {
    number: "1",
    name: "Eco System",
    nameHover: "Eco System",
    description:
      "By holding a DeFi Farmer, you will have access to Sustainability clubs, places to vote and discuss sustainable actions to preserve our environment . DeFi Farmers is a spin-off project created by Treedefi, the eco-friendly DeFi protocol. Treedefi allows investors to have a real world impact.",
    imageSrc: GoalPic6,
    imageAlt: "goal-pic-6",
    href: "#",
    icon: <LeafeIcon />,
    buttonText: "More Information",
    backgroundColor: "bg-green-600",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Sustainable() {
  return (
    <>
      <div id="market" className="max-w-1920px mx-auto py-10 md:py-18 lg:py-20">
        <div className="special_text_bg mb-10 lg:mb-20">
          <h2 className="text-center text-5xl md:text-6xl lg:text-8xl xl:text-9xl leading-none">
            Sustainable
            <br />
            Goals
          </h2>
        </div>
        <div className="lg:grid lg:grid-cols-3">
          {callouts.map((callout) => (
            <div key={callout.name} className="group relative">
              <div className="relative w-full h-80 bg-white group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1">
                <img src={callout.imageSrc} alt={callout.imageAlt} className="w-full h-full object-center object-cover" />
              </div>
              <div className={classNames(callout.backgroundColor, "text-white w-32 group-hover:w-full group-hover:h-full group-hover:left-0 group-hover:bottom-0 p-3 group-hover:p-8 rounded-sm absolute bottom-4 left-4")}>
                <div className="flex items-center group-hover:hidden">
                  <span className="lg:text-2xl xl:text-4xl font-bold mr-2">{callout.number}</span>
                  <span className="leading-none">{callout.name} </span>
                </div>
                <h3 className="hidden group-hover:block text-3xl font-bold">{callout.nameHover}</h3>
                <div className="flex justify-center mt-4 group-hover:hidden">{callout.icon}</div>
                <p className="text-sm xl:text-base hidden group-hover:block my-4 xl:my-6">{callout.description}</p>
                <a href={callout.href} className="bg-none border border-white  focus:outline-none text-white font-semibold px-8 py-2 xl:py-4 rounded-md hidden  group-hover:inline-block">
                  {callout.buttonText}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
