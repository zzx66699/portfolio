
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import HomePage from "./pages/HomePage"
import Journal from "./pages/Journal"
import Header from "./layout/Header"
import Footer from "./layout/Footer"
import ScrollToTop from "./ScrollToTop"

export default function App() {

	return (
		<BrowserRouter>
			<ScrollToTop />
			<Header />
			<Routes>
				<Route path="/" element={<HomePage/>}/>
				<Route path="/journal" element={<Journal/>}/>
			</Routes>
			<Footer/>
		</BrowserRouter>
	)
}

