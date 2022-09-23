import Rankingimg from "../../assets/images/ranking-img.png";
import { ReactComponent as Greenwave } from "../../assets/images/green-wave-bg.svg";

export default function Ranking() {
  return (
    <>
      <div id="rarity">
        <Greenwave />
        <div className="bg-primary -mt-1">
          <div className="max-w-6xl mx-auto px-2 sm:px-6 lg:px-8 py-16">
            <img className="mx-auto block mb-14 text-white" src={Rankingimg} alt="Rankingimg" />
            <p className="text-white text-center">
              All Farmers are equal, but some are more rare than others. That's why we've set up a trait rarity system to tell which of our Farmers are the rarest. There are a total of 57 traits, these have been classified in a system based on
              levels. The traits are ranked from "Common" to "Legendary". We compute the Farmer rarity (also called Drop Chance or Probability) as the value of the rarest trait. For example, if your Farmer wears the "McFly hat", its drop chance will
              be 0.6%. That means, your DeFi Farmer's rarity is 0.6%. Depending on the items they have in their hands, our Farmers will receive powers over time that will allow them to farm in the Metaverse more or less quickly. NFTrees airdrop will
              be sent according to farmers rarity.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
