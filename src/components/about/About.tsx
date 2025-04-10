import Image from "next/image";
import React, { useState } from "react";
import { about, me } from "../../../public/assets";
import { Skeleton } from "@mantine/core";

const About = () => {
	const [loading, setLoading] = useState(true);

	return (
		<div className="max-w-[1200px] mx-auto mb-10 px-2">
			<h1 className="text-2xl text-center my-10">About Me</h1>
			<div className="flex flex-col gap-4 text-justify text-lg font-light ">
				{loading ? (
					<Image
						src={me}
						alt="My Picture"
						width={300}
						height={300}
						className="md:hidden mx-auto"
					/>
				) : (
					<Skeleton
						className="mx-auto"
						width={300}
						height={300}
						mb="xl"
					/>
				)}

				<p>
					Hi! I’m Jefferson Resurreccion, 26 years old, a Front-End
					Developer with two years of freelance experience
					specializing in modern JavaScript frameworks, particularly
					React.js, Next.js, and React Native.
				</p>
				<p>
					I have a strong foundation in building interactive,
					high-performance, and user-friendly web applications. My
					expertise includes developing responsive and optimized UI
					components using Tailwind CSS, Chakra UI, and Mantine UI.
					Additionally, I have a fundamental understanding of backend
					development using firebase, PHP and PHP frameworks such as
					CodeIgniter
				</p>
				<p>
					To solidify my skills, I attended an almost four-month
					intensive training at Village 88, where I gained hands-on
					experience in full-stack web development. This training
					deepened my expertise in modern front-end frameworks,
					backend technologies, and industry best practices.
				</p>
				<p>
					During my studies to become a frontend developer I've
					learned a lot and I am continuously learning and expanding
					my capabilities to become a good developer so that it will
					increase my skills and as well as become a productive
					employee of the company that I will be working with.
				</p>
				<p>
					During my intensive four-month training at Village 88, I
					completed 213 coding assignments covering both front-end and
					back-end development, which strengthened my technical
					expertise in modern web technologies.
				</p>
			</div>
		</div>
	);
};

export default About;
