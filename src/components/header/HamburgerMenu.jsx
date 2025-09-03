import hamburgerMenu from "../../assets/shared/icon-hamburger.svg";
function HamburgerMenu() {
  return (
    <div>
      <button className="block lg:hidden sm:hidden">
        <img src={hamburgerMenu} alt="Hamburger Menu" className="w-[24px] h-[21px] "/>
      </button>
    </div>
  );
}

export default HamburgerMenu;
