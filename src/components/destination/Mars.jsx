import imageMars from "../../assets/destination/image-mars.png";
import DestinationNav from "./DestinationNav";

function Mars() {
  return (
    <div>
      <div>
        <img
          src={imageMars}
          alt="Mars Image"
          className="size-[200px] mx-auto my-10"
        />
      </div>
						<DestinationNav/>

      <div><p className="text-white text-center">This is mars</p></div>
    </div>
  );
}

export default Mars;
