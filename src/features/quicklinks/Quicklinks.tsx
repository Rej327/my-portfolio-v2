import React from "react";
import { FaCode, FaInfo } from "react-icons/fa";
import { GrContactInfo, GrProjects } from "react-icons/gr";
import classes from "./Quicklinks.module.css";
import { Tooltip, useMantineColorScheme } from "@mantine/core";

type RenderType = {
	render: (section: string) => void;
	activeSection: string;
};

const Quicklinks = ({ render, activeSection }: RenderType) => {
	const { colorScheme, toggleColorScheme } = useMantineColorScheme();
	const dark = colorScheme === "light";

	const themeShadow = dark ? classes.activeLight : classes.activeDark;

	return (
		<div className="flex gap-4">
			<Tooltip
				color="#33CCCC"
				position="bottom"
				withArrow
				label="About Me"
			>
				<div
					onClick={() => render("info")}
					className={`${classes.border} ${
						activeSection === "info" ? themeShadow : ""
					}`}
				>
					<FaInfo className={classes.iconColor} />
				</div>
			</Tooltip>
			<Tooltip
				color="#33CCCC"
				position="bottom"
				withArrow
				label="Projects"
			>
				<div
					onClick={() => render("projects")}
					className={`${classes.border} ${
						activeSection === "projects" ? themeShadow : ""
					}`}
				>
					<GrProjects className={classes.iconColor} />
				</div>
			</Tooltip>
			<Tooltip
				color="#33CCCC"
				position="bottom"
				withArrow
				label="Tech Stack"
			>
				<div
					onClick={() => render("tech")}
					className={`${classes.border} ${
						activeSection === "tech" ? themeShadow : ""
					}`}
				>
					<FaCode className={classes.iconColor} />
				</div>
			</Tooltip>
			<Tooltip
				color="#33CCCC"
				position="bottom"
				withArrow
				label="Contact Me"
			>
				<div
					onClick={() => render("contact")}
					className={`${classes.border} ${
						activeSection === "contact" ? themeShadow : ""
					}`}
				>
					<GrContactInfo className={classes.iconColor} />
				</div>
			</Tooltip>
		</div>
	);
};

export default Quicklinks;
