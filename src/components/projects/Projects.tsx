import Image from "next/image";
import React, { useEffect } from "react";
import { Tooltip, useMantineColorScheme } from "@mantine/core";
import { projects } from "./ProjectData";
import { BsDot } from "react-icons/bs";
import { GoDotFill } from "react-icons/go";
import { FaRegFileCode } from "react-icons/fa";
import Link from "next/link";

const Projects = () => {
	const { colorScheme, toggleColorScheme } = useMantineColorScheme();
	const dark = colorScheme === "light";

	const theme = dark ? "text-[#4b4b4b]" : "text-[#text-[#dfdfdf]]";

	return (
		<div className={`${theme} max-w-[1200px] mx-auto`}>
			<h1 className="text-2xl text-center my-10">My Projects</h1>
			{projects?.map((data, i) => (
				<div
					key={i}
					className="flex flex-row-reverse gap-4 my-10 items-center"
				>
					<div className="flex flex-col gap-2">
						{data.img.map((img, i) => (
							<Image
								key={i}
								src={img}
								alt={`${data.title}-Image`}
								height={400}
								width={600}
							/>
						))}
					</div>
					<div className="max-w-[600px] flex flex-col gap-2">
						<h2 className="text-xl font-semibold">{data.title}</h2>
						<div className="flex gap-2">
							<h2 className="font-semibold">{data.duration}</h2>
						</div>
						<div className="flex gap-2">
							<p className="font-semibold">Technology: </p>
							{data.technology.map((tech, i) => (
								<div
									key={i}
									className="flex gap-2 items-center"
								>
									<Tooltip
										label={tech.name}
										position="bottom"
										withArrow
									>
										<Image
											src={tech.icon}
											alt={`-Icon`}
											height={25}
											width={25}
											className="grayscale hover:grayscale-0"
										/>
									</Tooltip>
								</div>
							))}
						</div>
						<p className="font-semibold">Features:</p>
						{data.features.inside.map((list, i) => (
							<ul
								key={i}
								className="list-disc pl-10 list flex flex-col gap-2 text-justify"
							>
								<li>{list}</li>
							</ul>
						))}
						<ul className="pl-10">
							<li className="list-disc">
								Implemented features such as:
							</li>
						</ul>
						<ul className="list-decimal pl-14 list flex flex-col gap-2">
							{data.features.outside.map((list, i) => (
								<li key={i}>{list}</li>
							))}
						</ul>
						<div className="flex gap-4 mx-auto w-fit my-10">
							<div className="flex items-center">
								<GoDotFill className="text-[#33CCCC] text-sm" />
								<Link href={data.demo} target="_blank">
									<p className="underline underline-offset-4 hover:no-underline">
										Live Demo
									</p>
								</Link>
							</div>
							<div className="flex items-center">
								<FaRegFileCode className="text-[#33CCCC] text-sm" />
								<Link href={data.code} target="_blank">
									<p className="underline underline-offset-4 hover:no-underline">
										Source Code
									</p>
								</Link>
							</div>
						</div>
					</div>
				</div>
			))}
		</div>
	);
};

export default Projects;
