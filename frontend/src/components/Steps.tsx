import { assets } from "../assets/assets";

const Steps = () => {
	return (
		<div className="px-4 sm:px-10 py-3 lg:px-44">
			<h1 className="text-center text-2xl md:text-3xl lg:text-4xl mt-20 font-semibold bg-gradient-to-r from-gray-900 to-gray-400 bg-clip-text text-transparent">
				Steps to remove background <br /> image in seconds
			</h1>
			<div className="flex items-start flex-wrap gap-4 mt-16 sm:mt-24 justify-center">
				<div className="flex items-start gap-4 bg-white border drop-shadow-md p-7 pb-10 rounded hover:scale-[1.03] transition-all duration-150">
					<img className="max-w-9" src={assets.upload_icon} alt="" />
					<div>
						<p className="text-xl font-medium">Upload image</p>
						<p className="text-sm text-neutral-500">
							Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit.
							Ullam.
						</p>
					</div>
				</div>

				<div className="flex items-start gap-4 bg-white border drop-shadow-md p-7 pb-10 rounded hover:scale-[1.03] transition-all duration-150">
					<img className="max-w-9" src={assets.remove_bg_icon} alt="" />
					<div>
						<p className="text-xl font-medium">Remove background</p>
						<p className="text-sm text-neutral-500">
							Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit.
							Ullam.
						</p>
					</div>
				</div>

				<div className="flex items-start gap-4 bg-white border drop-shadow-md p-7 pb-10 rounded hover:scale-[1.03] transition-all duration-150">
					<img className="max-w-9" src={assets.download_icon} alt="" />
					<div>
						<p className="text-xl font-medium">Download image</p>
						<p className="text-sm text-neutral-500">
							Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit.
							Ullam.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Steps;
