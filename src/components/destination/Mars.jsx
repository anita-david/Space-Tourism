import imageMars from "../../assets/destination/image-mars.png";
import DestinationNav from "./DestinationNav";

function Mars() {
  return (
    <div className="lg:flex lg:items-center lg:justify-center lg:gap-20">
      <div className="flex justify-center lg:justify-end lg:flex-1">
        <img
          src={imageMars}
          alt="Moon Image"
          className="size-[200px] my-10 lg:size-[445px]"
        />
      </div>

      <div className="flex flex-col items-center text-center lg:items-start lg:text-left lg:flex-1 lg:pr-15">
        <DestinationNav />

        <h2 className="uppercase text-[56px] text-white bellefair pt-5 sm:text-[80px]">
          Mars
        </h2>

        <p className="text-[15px] max-w-[327px] pt-5 text-blue-300 sm:text-[16px] lg:text-[18px] lg:max-w-[540px]">
         Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!
        </p>

        <div className="h-[1px] w-full my-10 bg-blue-200"></div>

        <div className="flex flex-col gap-10 sm:flex-row sm:gap-20">
          <div>
            <p className="text-blue-300 uppercase text-[14px]">
              Avg. Distance
            </p>
            <p className="uppercase text-[28px] text-white bellefair pt-3">
              225 mil. km
            </p>
          </div>
          <div>
            <p className="text-blue-300 uppercase text-[14px]">
              Est. Travel Time
            </p>
            <p className="uppercase text-[28px] text-white bellefair pt-3">
              9 months
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mars;
