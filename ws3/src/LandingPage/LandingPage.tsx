import "./LandingPage.css";
import wsWhiteLogo from "../assets/images/wsWhiteLogo.png";
import discordWhiteLogo from "../assets/images/discordWhiteLogo.png";

export default function LandingPage() {
  return (
    <>
      <div>
        <a href="https://google.com">
          <img className="logo" src={wsWhiteLogo} />
        </a>
      </div>
      <div>
        <a href="https://google.com">
          <img className="discordLogo" src={discordWhiteLogo} />
        </a>
      </div>
      <div>
        <a className="docs" href="https://google.com">
          docs
        </a>
        <div className="centerDiv">
          <h1>Wallet Stalker</h1>
        </div>
        <div className="textDiv">
          <p>
            The tried and tested most performant real time wallet analysis
            solution on Solana
          </p>
        </div>
      </div>
    </>
  );
}
