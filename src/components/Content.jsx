import React from "react";
import { motion } from "framer-motion";

const Content = () => {
	return (
		<div>
			<div className=' p-5 h-screen w-full sm:w-[100%] sm:h-[95vh]  md:flex justify-center items-center  bg-slate-900 space-x-2 md:space-x-56 '>
				<motion.div
					initial={{ y: 500 }}
					animate={{ y: 0 }}
					className='hidden sm:hidden md:block relative '>
					<img
						src='image/sekar.jpg'
						alt='Networ Error'
						className=' h-96 w-auto object-cover ml-5  rounded-2xl shadow-2xl shadow-cyan-400 border border-cyan-300 hover:scale-105 transition'
					/>
				</motion.div>
				<motion.div
					className=' text-sm text-white sm:text-xl  space-y-6 w-full sm:w-1/2'
					initial={{ x: -1000 }}
					animate={{ x: 0 }}>
					<span className=''> Hi , my name is </span> <br />
					<span className=' font-mono font-bold text-white text-4xl'>
						Sekar babu p v
					</span>
					<div>and I build things for web.</div>
					<div className='  md:text-sm text-xs'>
						I,m frontend developer have a done project in building and design
						web applications. Currently i am eagerly awaiting the opprtunity to
						join a reputed company for an enriching internship experience.
					</div>
					<span className=' border border-cyan-400 p-3 absolute text-white rounded-xl'>
						<a href='mailto:sekarbabu633@gmail.com'> Mail me </a>
					</span>
				</motion.div>
				\
			</div>
		</div>
	);
};

export default Content;
