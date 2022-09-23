import { ReactComponent as Farmer } from "../../assets/images/farmer.svg";
import { ReactComponent as Tractor } from "../../assets/images/tractor.svg";

export default function Banner() {
  return (
    <>
      <div className="bg-primary">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="lg:flex py-6 md:py-10 lg:pt-18 justify-between items-center">
            <div className="flex-1 lg:w-3/5 text-center lg:text-left lg:max-w-screen-sm lg:mr-12 mb-10 lg:mb-0">
              <h1 className="tracking-tight font-bold text-white sm:max-w-sm lg:max-w-none mx-auto lg:mx-0">Building Sustainability Clubs with DeFi Farmers</h1>
              <p className="mt-3 text-white sm:mt-5 sm:mx-auto md:mt-5 md:text-lg lg:mx-0">
                Treedefi is the first ecofriendly defi project. We are fighting carbon emission by creating a thriving ecosystem focused on NFT and carbon credit tokens. Now expanding in AVAX ecosystem
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div>
                  <button type="button" className="btn-outlined mx-auto lg:mx-0">
                    Mint
                  </button>
                </div>
              </div>
            </div>
            <div className="lg:w-2/6 max-w-xs lg:max-w-none mx-auto lg:mx-0">
              <Farmer />
            </div>
          </div>
        </div>
        <div className="overflow-hidden relative home-banner-bottom">
          <div className="road-sideview bg-primary"></div>
          <Tractor className="tractor" />
        </div>
      </div>
    </>
  );
}
