import { ReactComponent as Farmertext } from "../../assets/images/BecomeaFarmertext.svg";
import Farmerimg from "../../assets/images/becomefarmer.png";
import { QuantityPicker } from "react-qty-picker";

export default function BecomefarmerText() {
  return (
    <>
      <div id="mint" className="bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8  py-16">
          <div className="flex lg:flex-row flex-col gap-x-10 justify-center items-center">
            <div className="lg:w-2/3 xl:w-2/5 mb-14 lg:mb-0">
              <div className="bg-white p-8 border-4 border-dashed border-secondary rounded-lg flex-1">
                <Farmertext />
                <p className="my-6">Minting started. 718 / 9500 Farmers minted so far NFTrees airdrop eligibility ends in 09:00:33:58</p>
                <div className="flex items-stretch mb-6">
                  <QuantityPicker />
                  <button type="button" className="bg-secondary hover:bg-primary focus:outline-none text-white font-semibold px-8 flex items-center justify-center sm:w-auto dark:bg-sky-500 dark:highlight-white/20 dark:hover:bg-sky-400 rounded-r-lg">
                    FARM IN!
                  </button>
                </div>
                <p>1 AVAX / Farmer - Max: 20 / day / wallet</p>
                <p>Using Metamask is strongly recommended</p>
              </div>
            </div>
            <div className="xl:w-2/5 xl:max-w-sm">
              <img src={Farmerimg} alt={Farmerimg} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
