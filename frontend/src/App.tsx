import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Result from "./pages/Result";
import BuyCredit from "./pages/BuyCredit";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
	return (
		<div className="min-h-screen bg-slate-50 flex flex-col">
			<Navbar />
			<div className="flex-1">
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/result" element={<Result />} />
					<Route path="/buy-credit" element={<BuyCredit />} />
				</Routes>
			</div>
			<Footer />
		</div>
	);
};

export default App;
