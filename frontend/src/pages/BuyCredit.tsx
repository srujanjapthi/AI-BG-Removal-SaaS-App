import { assets, plans } from "../assets/assets";

const BuyCredit = () => {
	return (
		<div className="text-center pt-14 mb-10">
			<button className="uppercase border border-gray-400 px-10 py-2 rounded-full mb-6">
				Our Plans
			</button>
			<h1 className="text-center text-2xl md:text-3xl lg:text-4xl mt-4 font-semibold bg-gradient-to-r from-gray-900 to-gray-400 bg-clip-text text-transparent mb-6 sm:mb-10">
				Choose the plan that's right for you
			</h1>
			<div className="flex flex-wrap justify-center gap-6 text-left">
				{plans.map((plan, index) => (
					<div
						key={index}
						className="bg-white drop-shadow-sm border rounded-lg py-12 px-8 text-gray-700 hover:scale-[1.03] transition-all duration-300"
					>
						<img width={40} src={assets.logo_icon} alt="" />
						<p className="mt-3 font-semibold">{plan.id}</p>
						<p className="text-sm">{plan.description}</p>
						<p className="mt-6">
							<span className="text-3xl font-medium">${plan.price}</span>/{" "}
							{plan.credits} credits
						</p>
						<button className="w-full bg-gray-800 text-white mt-8 text-sm rounded-md py-2.5 min-w-52">
							Purchase
						</button>
					</div>
				))}
			</div>
		</div>
	);
};

export default BuyCredit;
