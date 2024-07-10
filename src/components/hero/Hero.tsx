import React, { useState } from "react";
import Image from "next/image";
import { wave, me } from "../../../public/assets";
import { Badge, Loader, Skeleton, useMantineColorScheme } from "@mantine/core";
import Quicklinks from "@/features/quicklinks/Quicklinks";
import classes from "./Hero.module.css";
import Link from "next/link";

type HeroProps = {
	render: (section: string) => void;
	activeSection: string;
};

const Hero = ({ render, activeSection }: HeroProps) => {
	const [loading, setLoading] = useState(true);
	const { colorScheme, toggleColorScheme } = useMantineColorScheme();
	const dark = colorScheme === "light";

	const fileUrl = "/JeffersonResurreccion_Resume.pdf"; 

	return (
		<div className={dark ? classes.bodyLight : classes.bodyDark}>
			<div className={classes.container}>
				{loading ? (
					<Image
						src={me}
						alt="My Picture"
						width={500}
						height={500}
						className={classes.me}
					/>
				) : (
					<Skeleton
						width={448}
						height={448}
						className={classes.me}
						mb="xl"
						mt={20}
					/>
				)}

				<div className={classes.context}>
					<div className={classes.text}>
						{loading ? (
							<Image
								src={wave}
								alt="Wave Gif"
								width={100}
								height={100}
								className="mt-10 mx-auto"
							/>
						) : (
							<div className="mt-14 mx-auto w-fit">
								<Loader color="#33CCCC" size={78} />
							</div>
						)}

						<h1 className="text-6xl md:text-8xl text-center">
							<span className="text-[#33CCCC]">Hi</span>, I am
							Jeff
						</h1>
					</div>
					<p className="text-2xl mt-4">Front End Developer</p>

					<Link href={fileUrl} download target="_blank" className={classes.wrapper}>
						<p>HIRE ME</p>
					</Link>

					<Badge color="#33CCCC" mt={20} fz={13}>
						QUICK LINKS
					</Badge>
					<Quicklinks render={render} activeSection={activeSection} />
				</div>
			</div>
		</div>
	);
};

export default Hero;
