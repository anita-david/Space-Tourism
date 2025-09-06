import CrewNav from "./CrewNav";
import douglas from "../../assets/crew/image-douglas-hurley.png";

function Douglas() {
  return (
    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-center lg:gap-20 pt-10">
      <div className="flex flex-col items-center text-center lg:items-start lg:text-left lg:flex-1 lg:px-40 gap-6">
        <div>
          <p className="text-gray-200 uppercase text-[18px] sm:text-[20px] pt-3">
            Commander
          </p>
          <p className="uppercase text-[24px] sm:text-[32px] lg:text-[40px] text-white bellefair pt-2">
            Douglas Hurley
          </p>
        </div>

        <p className="text-[15px] sm:text-[16px] lg:text-[18px] text-blue-300 max-w-[327px] sm:max-w-[440px] lg:max-w-[540px]">
          See our planet as you’ve never seen it before. A perfect relaxing trip
          away to help regain perspective and come back refreshed. While you’re
          there, take in some history by visiting the Luna 2 and Apollo 11
          landing sites.
        </p>

        <CrewNav />
      </div>

      <div className="flex justify-center lg:justify-end lg:flex-1 mt-10 lg:mt-0 px-10">
        <img
          src={douglas}
          alt="Douglas Hurley"
          className="w-[250px] sm:w-[300px] lg:w-[445px] h-auto"
        />
      </div>
    </div>
  );
}

export default Douglas;
