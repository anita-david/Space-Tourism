import { useState } from "react";
import closeIcon from "../../assets/shared/icon-close.svg"; // install lucide-react or replace with your own icon
import HamburgerMenu from "./HamburgerMenu";
import Logo from "./Logo";
import NavMenu from "./NavMenu";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex justify-between items-center p-[24px] relative">
      <Logo />

      <div className="hidden lg:block">
        <NavMenu />
      </div>

      <HamburgerMenu isOpen={isOpen} setIsOpen={setIsOpen} />

      {isOpen && (
        <div className="fixed top-0 right-0 bottom-0 h-full w-2/3 sm:w-1/3 bg-white/5 backdrop-blur-lg p-10 flex flex-col gap-6 z-100">
          <button
            className="self-end text-white mb-8"
            onClick={() => setIsOpen(false)}
          >
             <img src={closeIcon} alt="Close menu" className="w-6 h-6" />
          </button>

          <NavMenu direction="col" />
        </div>
      )}
    </div>
  );
}

export default Header;
