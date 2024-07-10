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
			<div className={classes.container}>
				<Image
					src={me}
					alt="My Picture"
					width={500}
					height={500}
					className={classes.me}
				/>

				<div className={classes.context}>
					<div className={classes.text}>
						<Image
							src={wave}
							alt="Wave Gif"
							width={100}
							height={100}
							className="mt-10 mx-auto"
						/>
						<h1 className="text-6xl md:text-8xl text-center">
							<span className="text-[#33CCCC]">Hi</span>, I am
							Jeff
						</h1>
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
