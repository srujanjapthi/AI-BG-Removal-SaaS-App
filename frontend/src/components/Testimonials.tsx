import { testimonialsData } from "../assets/assets";

const Testimonials = () => {
	return (
		<div className="px-4 sm:px-10">
			{/* Title */}
			<h1 className="text-center text-2xl md:text-3xl lg:text-4xl mt-20 font-semibold bg-gradient-to-r from-gray-900 to-gray-400 bg-clip-text text-transparent">
				Customer Testimonials
			</h1>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto py-8">
				{testimonialsData.map((item, index) => (
					<div
						key={index}
						className="bg-white rounded-xl p-6 drop-shadow-md max-w-lg m-auto hover:scale-[1.03] transition-all duration-300"
					>
						<p className="text-4xl text-gray-500">”</p>
						<p className="text-sm text-gray-500">{item.text}</p>
						<div className="flex items-center gap-3 mt-5">
							<img className="w-9 rounded-full" src={item.image} alt="" />
							<div>
								<p className="">{item.author}</p>
								<p className="text-sm text-gray-600">{item.jobTitle}</p>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Testimonials;
