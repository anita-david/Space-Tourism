import HamburgerMenu from "./HamburgerMenu"
import Logo from "./Logo"

function Header() {
	return (
		<div className="flex justify-between items-center p-[24px] ">
			<Logo/>
			<HamburgerMenu/>
		</div>
	)
}

export default Header
