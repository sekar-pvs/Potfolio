import React from "react";
import Header from "./components/Header";
import Content from "./components/Content";
import { Route, Routes } from "react-router-dom";
import About from "./components/About";
import Project from "./components/Project";
import Contact from "./components/Contact";

const App = () => {
	return (
		<div className=''>
			<Header />
			<Routes>
				<Route path='/' element={<Content />} />
				<Route path='/about' element={<About />} />
				<Route path='/project' element={<Project />} />
				<Route path='/contact' element={<Contact />} />
			</Routes>
		</div>
	);
};

export default App;
