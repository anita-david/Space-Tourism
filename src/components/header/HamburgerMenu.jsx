import hamburgerMenu from "../../assets/shared/icon-hamburger.svg";
import closeIcon from "../../assets/shared/icon-close.svg";

function HamburgerMenu({ isOpen, setIsOpen }) {
  return (
    <div className="lg:hidden">
      <button onClick={() => setIsOpen(!isOpen)}>
        <img
          src={isOpen ? closeIcon : hamburgerMenu}
          alt="Menu toggle"
          className="w-[24px] h-[21px]"
        />
      </button>
    </div>
  );
}

export default HamburgerMenu;
