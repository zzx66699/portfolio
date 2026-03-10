
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Main from "./pages/Main"
import Project from "./pages/Project"
import Header from "./layout/Header"
import Footer from "./layout/Footer"

export default function App() {

	return (
		<BrowserRouter>
			<Header />
			<Routes>
				<Route path="/" element={<Main/>}/>
				<Route path="/project/:projectId" element={<Project/>}/>
			</Routes>
			<Footer/>
		</BrowserRouter>
	)
}

