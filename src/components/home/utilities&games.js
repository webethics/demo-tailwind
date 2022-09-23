import { ReactComponent as Utilitiesimg } from "../../assets/images/utilities&benefits.svg";
import { ReactComponent as Ecogamesimg } from "../../assets/images/ecogames.svg";

export default function Utilitiesgames() {
  return (
    <>
      <div className="bg-dotted-pattren-top bg-no-repeat bg-left-top bg-[length:30%_auto]">
        <div className="bg-dotted-pattren-bottom bg-no-repeat bg-right-bottom bg-[length:30%_auto]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 ">
            <div className="flex lg:flex-row flex-col items-center justify-center gap-x-16 mb-16 lg:mb-20">
              <div className="w-1/2 mb-10 lg:mb-0">
                <Utilitiesimg />
              </div>
              <div className="md:w-1/2">
                <h2 className="mb-5">Utilities and Benefits</h2>
                <p>
                  Each DeFi Farmers will give you power to vote in our Sustainability Clubs. If you mint before January 21st, 1PM UTC, you'll receive during Q1 2022 an airdrop of NFTrees. Treedefi Investors will get benefits if they mint farmers on
                  Avalanche using the same address that holds Treedefi tokens on Binance Smart Chain. Please read our documentation to check if you are eligibile for cashback or airdrops.
                </p>
              </div>
            </div>

            <div className="flex lg:flex-row flex-col-reverse items-center justify-center gap-x-16">
              <div className="md:w-1/2">
                <h2 className="mb-5">Ecogames and DeFi</h2>
                <p>EcogameFi is the next trend of Ecofriendly defi projects in the gaming industry. Treedefi's aim is to bring reality into the virtual world by giving the opportunity to own real trees while enjoying play-to-learn games.</p>
              </div>
              <div className="w-1/2 mb-10 lg:mb-0">
                <Ecogamesimg />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
