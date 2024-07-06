import Image from "next/image";
import React from "react";
import { about } from "../../../public/assets";

const About = () => {
	return (
		<div className="max-w-[1200px] mx-auto mb-10">
			<div className="flex gap-4 mt-10">
				<Image src={about} alt="About Icon" width={50} height={50} />
				<h2 className="font-semibold text-xl">About Me</h2>
			</div>
			<div className="flex flex-col gap-4 ml-16 -mt-4 text-justify text-lg font-light">
				<p>
					Hi! I’m Jefferson Resurreccion, and I am 24 years old. I
					graduated from Southern Luzon State University year 2019
					with a degree of Bachelor of Industrial Technology Major in
					Computer Technology.
				</p>
				<p>
					On October 2022 I started my study for being a Front-End
					Developer and learned many programming languages and
					programming technology. As of now my goal is to become a
					Front-End developer and soon is to become a Full Stack
					Developer.
				</p>
				<p>
					From January 2024 to April 2024, I trained in web
					development for 3 months under Village88 Inc, learning
					various technologies such as Web Fundamentals, Responsive
					Design, PHP, JavaScript, and Front End Development.
				</p>
				<p>
					During my studies to become a frontend developer I've
					learned a lot and I am continuously learning and expanding
					my capabilities to become a good developer so that it will
					increase my skills and as well as become a productive
					employee of the company that I will be working with.
				</p>
				<p>
					I see myself as an enthusiastic, self-motivated, reliable,
					responsible and hard-working person. I am fond in Front End
					developing, and I love to create beautiful and performant
					websites with enjoyable user experiences.
				</p>
			</div>
		</div>
	);
};

export default About;
