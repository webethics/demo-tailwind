import { ReactComponent as Ecosystemimg } from "../../assets/images/ecosystem.svg";
export default function Ecosystem() {
  return (
    <>
      <div id="ecosystem" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex lg:flex-row flex-col-reverse items-center justify-center lg:gap-x-16">
          <div className="w-1/2">
            <Ecosystemimg />
          </div>
          <div className="lg:w-1/2 mb-10 lg:mb-0">
            <h2 className="mb-5">Ecosystem</h2>
            <p>
              By holding a DeFi Farmer, you will have access to Sustainability clubs, places to vote and discuss sustainable actions to preserve our environment . DeFi Farmers is a spin-off project created by Treedefi, the eco-friendly DeFi protocol.
              Treedefi allows investors to have a real world impact, and offers them the opportunity to offset their CO2 footprint through NFTrees, NFTs backed by real planted trees around the world. If you own a Farmer, you can enjoy in advance our
              Treedefi Features.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
