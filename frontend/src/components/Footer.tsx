import { assets } from "../assets/assets";

const Footer = () => {
	return (
		<div className="flex items-center justify-between px-6 sm:px-10 py-3 lg:px-44">
			<img width={150} src={assets.logo} alt="" />
			<p className="flex-1 border-l border-gray-400 ml-4 pl-4 text-sm text-gray-500 max-sm:hidden">All right reserved. Copyright @bg removal</p>
			<div className="flex gap-1">
				<img width={40} src={assets.facebook_icon} alt="" />
				<img width={40} src={assets.twitter_icon} alt="" />
				<img width={40} src={assets.google_plus_icon} alt="" />
			</div>
		</div>
	);
};

export default Footer;
