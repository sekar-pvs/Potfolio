import React from "react";

const EduCard = ({ item }) => {
	return (
		<div className='relative border bg-slate-900 border-black h-fit sm:p-10 p-10  w-4/6 sm:w-5/6 md:w-4/6 rounded-xl shadow-2xl shadow-cyan-300 text-white mt-6 hover:scale-105 transition mb-5'>
			<div>
				<div className=' absolute top-0 right-4 uppercase text-yellow-300 '>
					{item.sc}
				</div>
				<div>
					<span>Course : </span>
					{item.class}
				</div>
				<div>
					<span className='font-bold'>Percentage : </span>
					{item.percent}%
				</div>
				<div>
					<span>Institute : </span>
					{item.title}
				</div>
				<div className=' absolute top-0 text-yellow-400'> {item.time}</div>
			</div>
		</div>
	);
};

export default EduCard;
