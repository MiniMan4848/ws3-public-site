import "./LandingPage.css";
import wsWhiteLogo from "../assets/images/wsWhiteLogo.png";
import discordWhiteLogo from "../assets/images/discordWhiteLogo.png";

export default function LandingPage() {
  return (
    <>
      <div>
        <a href="https://walletstalker.com">
          <img className="logo" src={wsWhiteLogo} />
        </a>
      </div>
      <div>
        <a href="https://discord.gg/Du86v28Na3">
          <img className="discordLogo" src={discordWhiteLogo} />
        </a>
      </div>
      <div>
        <a className="docs" href="https://docs.walletstalker.com">
          docs
        </a>
      </div>
      <div className="centerDiv">
        <h1>Wallet Stalker</h1>
      </div>
      <div className="textDiv">
        <p>The most performant real time wallet analysis solution on Solana</p>
      </div>

      <div className="boxContainer">
        <div className="boxOne">
          <h2>Limited</h2>
          <div className="price">
            <h3>1 SOL</h3>
            <h4>/month</h4>
          </div>
          <p className="features">maximum of 50 wallets</p>
        </div>

        <div className="boxTwo">
          <h2>Unlimited</h2>
          <div className="price">
            <h3>3 SOL</h3>
            <h4>/month</h4>
          </div>
          <p className="features">unlimited number of wallets</p>
        </div>
      </div>

      <div className="buttonContainer">
        <a href="https://discord.gg/Du86v28Na3">
          <button>
            Press here to join our discord server to learn more or purchase!
          </button>
        </a>
      </div>
    </>
  );
}
