import CrewNav from "./CrewNav";
import anousheh from "../../assets/crew/image-anousheh-ansari.png";

function Anousheh() {
  return (
    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-center lg:gap-20 pt-10">
      <div className="flex flex-col items-center text-center lg:items-start lg:text-left lg:flex-1 lg:px-40 gap-6">
        <div>
          <p className="text-gray-200 uppercase text-[18px] sm:text-[20px] pt-3">
            Flight Engineer
          </p>
          <p className="uppercase text-[24px] sm:text-[32px] lg:text-[40px] text-white bellefair pt-2">
            Anousheh Ansari
          </p>
        </div>

        <p className="text-[15px] sm:text-[16px] lg:text-[18px] text-blue-300 max-w-[327px] sm:max-w-[440px] lg:max-w-[540px]">
         Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer. 
        </p>

        <CrewNav />
      </div>

      <div className="flex justify-center lg:justify-end lg:flex-1 mt-10 lg:mt-0 px-10">
        <img
          src={anousheh}
          alt="Anousheh Ansari"
          className="w-[250px] sm:w-[300px] lg:w-[445px] h-auto"
        />
      </div>
    </div>
  );
}

export default Anousheh;
