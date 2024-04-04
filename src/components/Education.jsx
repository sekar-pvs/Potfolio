import React, { useState } from "react";
import EduCard from "./EduCard";

const Education = () => {
	const data1 = [
		{
			id: 4,
			class: "MCA",
			percent: 75,
			sc: "PG",
			time: "2022-2024",
			title: "Measi Institute of Information Technology",
		},

		{
			id: 3,
			class: "Bsc Computer Science",
			percent: 75,
			sc: "UG",
			time: "2019-2022",
			title: "DRBCCC Hindu college",
		},
		{
			id: 2,
			class: "12",
			percent: 64,
			sc: "school",
			time: "2018-2019",
			title: "Dr.vgn.Mat.hr.Sec.School",
		},
		{
			id: 1,
			class: "10",
			percent: 86,
			sc: "school",
			time: "2016-2017",
			title: "Dr.vgn.Mat.hr.Sec.School",
		},
	];
	const [data] = useState(data1);
	return (
		<div>
			<section className='bg-slate-900'>
				<div className='ml-6  sm:text-xl  text-yellow-300'>
					{" "}
					Eduction Details :
				</div>
				<div className='h-auto sm:h-screen sm:pl-20 sm:grid grid-cols-2 flex  items-center  space-x-2 justify-center  flex-col '>
					{data.map((i) => {
						return <EduCard key={i.id} item={i} />;
					})}
				</div>
			</section>
		</div>
	);
};

export default Education;
