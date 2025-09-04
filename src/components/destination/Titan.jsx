import imageTitan from '../../assets/destination/image-titan.png'
import DestinationNav from './DestinationNav'

function Titan() {
	return (
    <div className="lg:flex lg:items-center lg:justify-center lg:gap-20">
      <div className="flex justify-center lg:justify-end lg:flex-1">
        <img
          src={imageTitan}
          alt="Moon Image"
          className="size-[200px] my-10 lg:size-[445px]"
        />
      </div>

      <div className="flex flex-col items-center text-center lg:items-start lg:text-left lg:flex-1 lg:pr-15">
        <DestinationNav />

        <h2 className="uppercase text-[56px] text-white bellefair pt-5 sm:text-[80px]">
          Titan
        </h2>

        <p className="text-[15px] max-w-[327px] pt-5 text-blue-300 sm:text-[16px] lg:text-[18px] lg:max-w-[540px]">
        The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.
        </p>

        <div className="h-[1px] w-full my-10 bg-blue-200"></div>

        <div className="flex flex-col gap-10 sm:flex-row sm:gap-20">
          <div>
            <p className="text-blue-300 uppercase text-[14px]">
              Avg. Distance
            </p>
            <p className="uppercase text-[28px] text-white bellefair pt-3">
              1.6 bil. km
            </p>
          </div>
          <div>
            <p className="text-blue-300 uppercase text-[14px]">
              Est. Travel Time
            </p>
            <p className="uppercase text-[28px] text-white bellefair pt-3">
              7 years
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Titan
