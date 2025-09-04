import imageMoon from '../../assets/destination/image-moon.png'
import DestinationNav from './DestinationNav'

function Moon() {
	return (
		<div>
				<div><img src={imageMoon} alt="Moon Image" className="size-[200px] mx-auto my-10" /></div>
							<DestinationNav/>

					<div>
						<p className='text-white text-center'>This is the moon</p>
			</div>
			</div>
	)
}

export default Moon
