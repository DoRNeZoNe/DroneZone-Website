import "./App.css";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Home from "./components/Home";
import ModelsPage from "./components/ModelsPage";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
	return (
		<div>
			<BrowserRouter>
				<Navbar />
				<Routes>
					<Route path="/" element={<Home />}></Route>
					<Route path="/models" element={<ModelsPage />} />
					<Route path="/contact" element={<Contact />} />
				</Routes>
				<Footer />
			</BrowserRouter>
		</div>
	);
}

export default App;
