import "./App.css";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Models from "./components/Models";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
	return (
		<div>
			<BrowserRouter>
				<Navbar />
				<Routes>
					<Route path="/" element={<Home />}></Route>
					<Route path="/models" element={<Models />} />
				</Routes>
				<Footer />
			</BrowserRouter>
		</div>
	);
}

export default App;
