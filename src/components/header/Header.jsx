
import dukaanLogo from "/logo.svg";
import "./header.css";
import PrimaryBtn from "./PrimaryBtn";

function Header() {
  const links = ["Product", "Company", "Resources", "Pricing"];

  return (
    <header>
      <div className="header-left">
        <a href="/" className="logo">
          <img src={dukaanLogo} alt="Dukaan brand logo" />
        </a>
        <ul>
          {links.map((link) => {
            return (
              <li className="products" key={link}>
                <a href="/">{link}</a>
                {/* <div className="products-box"></div> */}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="header-right">
        <a href="/">Sign in</a>
        <PrimaryBtn title={"Start free"} />
      </div>
    </header>
  );
}

export default Header;
