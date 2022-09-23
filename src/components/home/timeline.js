import Timelineimg1 from "../../assets/images/timeline-img1.png";
import Timelineimg2 from "../../assets/images/timeline-img2.png";
import Timelineimg3 from "../../assets/images/timeline-img3.png";
import Timelineimg4 from "../../assets/images/timeline-img4.png";
import Timelineimg5 from "../../assets/images/timeline-img5.png";

export default function Timeline() {
  return (
    <>
      <div id="roadmap" className="ps-timeline-sec py-16 sm:py-0 lg:py-14 xl:py-28">
        <div className="container mx-auto">
          <ol className="ps-timeline">
            <li>
              <div className="img-handler-top">
                <img src={Timelineimg1} alt="img" />
              </div>
              <div className="ps-bot">
                <p>Minting Event TBA December, 2021</p>
              </div>
              <span className="ps-sp-top"></span>
            </li>
            <li>
              <div className="img-handler-bot">
                <img src={Timelineimg2} alt="img" />
              </div>
              <div className="ps-top">
                <p>NFT Marketplace Q1 2022</p>
              </div>
              <span className="ps-sp-bot"></span>
            </li>
            <li>
              <div className="img-handler-top">
                <img src={Timelineimg3} alt="img" />
              </div>
              <div className="ps-bot">
                <p>Treedefi on AVAX Q1 2022</p>
              </div>
              <span className="ps-sp-top"></span>
            </li>
            <li>
              <div className="img-handler-bot">
                <img src={Timelineimg4} alt="img" />
              </div>
              <div className="ps-top">
                <p>EcoGame Q1 - Q2 2022</p>
              </div>
              <span className="ps-sp-bot"></span>
            </li>
            <li>
              <div className="img-handler-top">
                <img src={Timelineimg5} alt="img" />
              </div>
              <div className="ps-bot">
                <p>Eco DAO Q1 - Q2 2022</p>
              </div>
              <span className="ps-sp-top"></span>
            </li>
          </ol>
        </div>
      </div>
    </>
  );
}
