import { useState } from "react";
import HamburgerMenu from "./HamburgerMenu";
import Logo from "./Logo";
import NavMenu from "./NavMenu";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex justify-between items-center p-[24px] relative">
      <Logo />

      {/* Desktop Nav */}
      <div className="hidden lg:block">
        <NavMenu />
      </div>

      {/* Mobile Hamburger */}
      <HamburgerMenu isOpen={isOpen} setIsOpen={setIsOpen} />

      {/* Mobile Sidebar Menu */}
      {isOpen && (
        <div className="fixed top-0 right-0 h-full w-2/3 sm:w-1/3 bg-white/5 backdrop-blur-lg p-10 flex flex-col gap-6 z-50">
    <NavMenu direction="col" />
  </div>
      )}
    </div>
  );
}

export default Header;
