import Multiplefarmers from "../../assets/images/multiplefarmers.gif";
import Blackcurve from "../../assets/images/black-curve.png";
export default function Defifarmers() {
  return (
    <>
      <div id="about" className="relative -mb-5">
        <div className="xl:max-w-6xl xxl:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 ">
          <div className="text-center">
            <p className="text-primary font-bold mb-3">About DeFi</p>
            <h2 className="font-bold mb-3">DeFi Farmers</h2>
            <p className="">
              DeFi Farmers consists of 9,500 randomly generated eco-friendly NFT Farmers living on the Avalanche network. Each DeFi Farmer is an NFT that represents your avatar in the "Ecoverse", an ecosystem of technologies and visions based on
              reforestation and environment preservation values . DeFi Farmers can be found with a variety of different outfits and emotions but no two Farmers are alike. Each Farmers brings their own style with unique hats, hair, clothing and
              farming tools from a total of 57 different attributes!
            </p>
            <div className="flex justify-center mt-12">
              <div className="bg-secondary p-10 rounded-t-lg">
                <img className="border-10 border-white mx-auto block" src={Multiplefarmers} alt="Multiplefarmers" />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 h-50px px w-full overflow-hidden">
          <img src={Blackcurve} alt="Blackcurve" className="object-cover min-w-full max-w-none" />
        </div>
      </div>
    </>
  );
}
