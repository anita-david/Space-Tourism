import { NavLink } from "react-router-dom";

function HomepageContent() {
  return (
    <div className="pt-[28px] flex flex-col items-center gap-[40px] px-6 sm:px-10 lg:flex-row lg:justify-between lg:items-center lg:px-20">
      
      <div className="max-w-[540px]">
        <p className="text-center text-[16px] text-blue-300 sm:text-[28px] lg:text-left">
          SO, YOU WANT TO TRAVEL TO
        </p>
        <p className="text-center text-[80px] text-white bellefair pt-[20px] sm:text-[144px] lg:text-left">
          SPACE
        </p>
        <p className="text-center text-[15px] max-w-[327px] mx-auto pt-[20px] text-blue-300 sm:text-[16px] lg:text-[18px] lg:text-left lg:max-w-[540px]">
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </div>

      <NavLink to='/destination'>
				<div className="text-center lg:text-right">
					<button className="bg-white text-[18px] sm:text-[32px] rounded-full size-[144px] sm:size-[272px] lg:size-[272px] uppercase bellefair">
						Explore
					</button>
				</div>
			</NavLink>
    </div>
  );
}

export default HomepageContent;
