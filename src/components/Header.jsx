import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
const Header = () => {
	return (
		<header className=' sm:flex justify-between p-3  bg-slate-800  rounded'>
			<motion.div
				className=' text-white  font-mono font-bold text-2xl'
				initial={{ y: -100 }}
				animate={{ y: 0 }}>
				Sekar's Potfolio
			</motion.div>
			<div className='hidden sm:block '>
				<ul className=' flex space-x-5'>
					<li className='text-white font-bold hover:text-cyan-300'>
						<Link to='/'>Home</Link>
					</li>

					<li className='text-white font-bold hover:text-cyan-300'>
						<Link to='/about'> About</Link>
					</li>
					<li className='text-white font-bold hover:text-cyan-300'>
						<Link to='/project'>Project</Link>
					</li>
					<li className='text-white font-bold hover:text-cyan-300'>
						<Link to='/contact'> Contact</Link>
					</li>
				</ul>
			</div>
		</header>
	);
};

export default Header;
