import { useState } from "react";
import { assets } from "../assets/assets";

const BgSlider = () => {
	const [sliderPosition, setSliderPosition] = useState<number>(50);

	const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSliderPosition(Number(e.target.value));
	};

	return (
		<div className="pb-10 px-4 sm:px-10">
			{/* Title */}
			<h1 className="mb-12 sm:mb-20 text-center text-2xl md:text-3xl lg:text-4xl mt-20 font-semibold bg-gradient-to-r from-gray-900 to-gray-400 bg-clip-text text-transparent">
				Remove background with High <br /> Quality and Accuracy
			</h1>
			<div className="relative w-full max-w-3xl overflow-hidden m-auto rounded-xl">
				{/* Background image */}
				<img
					src={assets.image_w_bg}
					style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
					alt=""
				/>

				{/* Foreground image */}
				<img
          className="absolute top-0 left-0 w-ful h-full"
					src={assets.image_wo_bg}
					style={{ clipPath: `inset(0 0 0 ${sliderPosition}%)` }}
					alt=""
				/>

				{/* Slider */}
				<input
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full z-10 slider"
					type="range"
					min={0}
					max={100}
					value={sliderPosition}
					onChange={handleSliderChange}
				/>
			</div>
		</div>
	);
};

export default BgSlider;
