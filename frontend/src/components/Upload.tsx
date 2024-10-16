import { assets } from "../assets/assets";

const Upload = () => {
	return (
		<div className="pb-16 px-4 md:px-10">
			{/* Title */}
			<h1 className="text-center text-2xl md:text-3xl lg:text-4xl mt-20 font-semibold bg-gradient-to-r from-gray-900 to-gray-400 bg-clip-text text-transparent">
				See the magic. Try now
			</h1>
			<div className="text-center my-10 md:my-16">
				<label className="inline-flex gap-3 px-8 py-3.5 rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-500 cursor-pointer m-auto hover:scale-105 transition-all duration-500">
					<input type="file" hidden />
					<img width={20} src={assets.upload_btn_icon} alt="" />
					<p className="text-white text-sm">Upload your image</p>
				</label>
			</div>
		</div>
	);
};

export default Upload;
