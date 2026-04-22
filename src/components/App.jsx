
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Journal from "./pages/Journal"
import Header from "./layout/Header"
import Footer from "./layout/Footer"
import ScrollToTop from "./ScrollToTop"
import BlogPost from "./pages/BlogPost"

export default function App() {

	return (
		<BrowserRouter>
			<ScrollToTop />
			<Header />
			<Routes>
				<Route path="/" element={<Home/>}/>
				<Route path="/journal" element={<Journal/>}/>
				<Route path="/blog/:projectId" element={<BlogPost/>}/>
			</Routes>
			<Footer/>
		</BrowserRouter>
	)
}

