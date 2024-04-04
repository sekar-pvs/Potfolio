import React from "react";
import Education from "./Education";
import Mine from "./Mine";

const About = () => {
	return (
		<div className='bg-slate-900'>
			<hr />
			<div className=' '>
				<div className=' text-center text-white text-2xl md:text-5xl sm:text-4xl underline  '>
					About <t />
					<span className='text-cyan-400  text-xl sm:text-3xl md:text-4xl animate-ping'>
						Me
					</span>
				</div>
				<div>
					<div className=' m-2'>
						<Mine />
					</div>
					<Education />
				</div>
			</div>
		</div>
	);
};

export default About;
