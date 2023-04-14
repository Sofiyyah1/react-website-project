import React from "react";
import "./who-we-are.css";
import who_we_are from "../../../assets/who-we-are.png";
import Ape from "../../../assets/clients/ape-docs.png";
import Nft_land from "../../../assets/clients/nft-land.png";
import Spy from "../../../assets/clients/spy-signals.png";
import Whale from "../../../assets/clients/whale-together.jpg";
import Fertile from "../../../assets/clients/fertile-guppies.jpg";

const Who_We_Are = () => {
  return (
    <>
      <section className="who-we-are">
        <h1>Who We Are</h1>
        <div className="who-we-are__team">
          <div className="who-we-are__card">
            <p>
              At The Parthenon, we differentiate ourselves from the average Web3
              Consultancy or Contract Service. We approach every project, every
              inquiry, and every potential client from the perspective of a
              partnership. We provide advisory services to our clients, issue
              recommendations, and help develop tailor-made solutions to
              continuously improve user experience for patrons, ease of access
              for our clients, and sustainability for projects.{" "}
            </p>
            <p>
              We believe in effective communication and in the consolidation of
              our resources in order to drive sustainable growth in a consistent
              and reliable fashion.{" "}
            </p>
            <p>
              Our mantra is to bring the infinite avenues of integration,
              automation and value creation that Web3.0 offers to your brick and
              mortar business.
            </p>
          </div>
          <div>
            <img className="image" src={who_we_are} alt="who-we-are-image" />
          </div>
        </div>
      </section>

      <section className="our-mission">
        <div className="collections">
          <h2>Our Mission Is to Empower:</h2>
          <div className="collections-card">
            <div className="collection">
              <h1>980</h1>
              <p>NFT Collections Analyzed</p>
            </div>
            <div className="collection">
              <h1>18</h1>
              <p>Months of Pricing & Volume Data</p>
            </div>
            <div className="collection">
              <h1>100,000+</h1>
              <p>ERC721 Tokens Tracked</p>
            </div>
            <div className="collection">
              <h1>7</h1>
              <p>Projects delivered</p>
            </div>
          </div>
        </div>
        <div className="our-mission__paragraph">
          <p>
            The Parthenon Consultancy & Analytics is devoted to building curated
            solutions for clients looking to build on Ethereum or any layer-2.
            We offer actionable , and data-driven insights and recommendations
            to help our clients achieve their goals.
          </p>
          <p>
            Our Analytics wing is devoted to bringing clarity to an otherwise
            cluttered and misrepresented market. We acquire data from a variety
            of sources, both on-chain and via traditional channels, and attempt
            to present it in an investor-friendly format.
          </p>
          <p>
            We strive to provide our clients the ability and the comfort to
            achieve their goals.
          </p>
        </div>
      </section>

      {/* what-we-do  missing */}

      <section className="work-with-best">
        <h1>We Work With the Very Best</h1>
        <div className="work-with__body">
          <div className="work-with-item">
            <div className="work-with__image">
              <img src={Nft_land} alt="" />
            </div>
            <p>NFTLand Alpha</p>
          </div>
          <div className="work-with-item">
            <div className="work-with__image">
              <img src={Spy} alt="" />
            </div>
            <p>SpySignals</p>
          </div>
          <div className="work-with-item">
            <div className="work-with__image">
              <img src={Whale} alt="" />
            </div>
            <p>WhaleTogether</p>
          </div>
          <div className="work-with-item">
            <div className="work-with__image">
              <img src={Fertile} alt="" />
            </div>
            <p>Fertile Guppies</p>
          </div>
          <div className="work-with-item">
            <div className="work-with__image">
              <img src={Ape} alt="" />
            </div>
            <p>ApeDocs</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Who_We_Are;
