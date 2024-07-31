import Image from "next/image";
import React, { useState } from "react";
import { Skeleton, Tooltip, useMantineColorScheme } from "@mantine/core";
import { lessCode, projects } from "./ProjectData";
import { BsDot } from "react-icons/bs";
import { GoDotFill } from "react-icons/go";
import { FaRegFileCode } from "react-icons/fa";
import Link from "next/link";

const Projects = () => {
	const [loading, setLoading] = useState(true);
	const { colorScheme, toggleColorScheme } = useMantineColorScheme();
	const dark = colorScheme === "light";

	const theme = dark ? "text-[#4b4b4b]" : "text-[#text-[#dfdfdf]]";

	return (
		<div className={`${theme} max-w-[1200px] mx-auto px-2`}>
			<h1 className="text-2xl text-center my-10">My Projects</h1>
			{projects?.map((data, i) => (
				<div
					key={i}
					className="md:flex md:flex-row-reverse gap-4 my-10 items-center"
				>
					<div className="hidden md:flex flex-col gap-2">
						{loading ? (
							<>
								{data.img.map((img, i) => (
									<Image
										key={i}
										src={img}
										alt={`${data.title}-Image`}
										height={400}
										width={600}
									/>
								))}
							</>
						) : (
							<>
								<Skeleton height={270} radius={5} width={570} />
								<Skeleton height={270} radius={5} width={570} />
							</>
						)}
					</div>
					<div className="max-w-[600px] flex flex-col gap-2">
						<h2 className="text-xl font-semibold">{data.title}</h2>

						{loading ? (
							<div className="flex flex-row gap-2 md:hidden">
								{data.img.slice(0, 1).map((img, i) => (
									<Image
										key={i}
										src={img}
										alt={`${data.title}-Image`}
										height={400}
										width={600}
									/>
								))}
							</div>
						) : (
							<Skeleton radius={5} height={225} width="auto" />
						)}

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
						<div className="flex gap-4 mx-auto w-fit mt-4 md:my-10">
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
			<h2 className="text-2xl text-center">Less Code Projects</h2>
			<div className="md:flex gap-4">
			{lessCode?.map((data, i) => (
				<div
					key={i}
					className="my-10 items-center"
				>
					<div className="hidden md:flex flex-col gap-2">
						{loading ? (
							<>
								<Image
									key={i}
									src={data.img}
									alt={`${data.title}-Image`}
									className="w-auto h-[270px] mb-5"
								/>
							</>
						) : (
							<>
								<Skeleton height={270} radius={5} width={570} />
								<Skeleton height={270} radius={5} width={570} />
							</>
						)}
					</div>
					<div className="max-w-[600px] flex flex-col gap-2">
						<h2 className="text-xl font-semibold">{data.title}</h2>

						{loading ? (
							<div className="flex flex-row gap-2 md:hidden">
								<Image
									key={i}
									src={data.img}
									alt={`${data.title}-Image`}
									height={400}
									width={600}
								/>
							</div>
						) : (
							<Skeleton radius={5} height={225} width="auto" />
						)}

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

						<ul className="list-disc pl-14 list flex flex-col gap-2">
							{data.features.map((list, i) => (
								<li key={i}>{list}</li>
							))}
						</ul>
						<div className="flex gap-4 mx-auto w-fit mt-4 md:my-10">
							<div className="flex items-center">
								<GoDotFill className="text-[#33CCCC] text-sm" />
								<Link href={data.demo} target="_blank">
									<p className="underline underline-offset-4 hover:no-underline">
										Live Demo
									</p>
								</Link>
							</div>
						</div>
					</div>
				</div>
			))}
			</div>
		</div>
	);
};

export default Projects;
