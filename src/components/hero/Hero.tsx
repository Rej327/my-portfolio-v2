import React from "react";
import Image from "next/image";
import { wave, me } from "../../../public/assets";
import { Badge, useMantineColorScheme } from "@mantine/core";
import Quicklinks from "@/features/quicklinks/Quicklinks";
import classes from "./Hero.module.css";

type HeroProps = {
	render: (section: string) => void;
	activeSection: string;
};

const Hero = ({ render, activeSection }: HeroProps) => {
	const { colorScheme, toggleColorScheme } = useMantineColorScheme();
	const dark = colorScheme === "light";

	return (
		<div className={dark ? classes.bodyLight : classes.bodyDark}>
			<div className="mx-auto w-[1200px] flex justify-between flex-row-reverse items-center">
				<Image
					src={me}
					alt="My Picture"
					width={500}
					height={500}
					className="mt-10"
				/>
				<div className="flex flex-col items-center mt-28">
					<div className="relative">
						<h1 className="text-8xl">
							<span className="text-[#33CCCC]">Hi</span>, I am Jeff
						</h1>
						<Image
							src={wave}
							alt="Wave Gif"
							width={100}
							height={100}
							className="absolute -top-24 right-48"
						/>
					</div>
					<p className="text-2xl mt-4">Front End Developer</p>

					<Badge color="#33CCCC" mt={40} fz={13}>
						QUICK LINKS
					</Badge>
					<Quicklinks render={render} activeSection={activeSection} />
				</div>
			</div>
		</div>
	);
};

export default Hero;
