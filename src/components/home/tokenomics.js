import { ReactComponent as Tokenomicsimg } from "../../assets/images/tokenomics.svg";
// import Greencurve from "../../assets/images/green-curve.png";

export default function Tokenomics() {
  return (
    <>
      <div id="tokenomics" className="-mt-1">
        {/* <img className="w-full -mb-20" src={Greencurve} alt="Greencurve" /> */}
        <div className="bg-primary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 ">
            <div className="flex lg:flex-row flex-col  items-center justify-center gap-x-16">
              <div className="lg:w-1/2 mb-10 lg:mb-0">
                <h2 className="mb-5 text-white">Tokenomics</h2>
                <p className="text-white">
                  Our Farmers has a reflective minting system that earns farmers holders AVAX! This means that 15% of every minting fee is reflected back to existing Farmers holders and can be claimed at any time! The rewards don't stop when minting
                  is complete! In our marketplace original minters of Farmers earn 1% royalties each time their Farmers is resold and 3% of each sale is redistributed between all Farmers holders.
                </p>
              </div>
              <div className="w-1/2">
                <Tokenomicsimg />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
