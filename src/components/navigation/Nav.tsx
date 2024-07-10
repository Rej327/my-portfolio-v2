import classes from "./Nav.module.css";
import Theme from "@/features/theme/Theme";
import { Text, useMantineColorScheme } from "@mantine/core";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

const Nav: React.FC = () => {
	const [toggle, toggleSet] = useState(false);
	const ref = useRef<HTMLDivElement>(null);
	const { colorScheme, toggleColorScheme } = useMantineColorScheme();
	const dark = colorScheme === "light";

	const handleToggle = () => {
		toggleSet(!toggle);
	};

	const handleClickOutside = (event: MouseEvent) => {
		if (ref.current && !ref.current.contains(event.target as Node)) {
			toggleSet(false);
		}
	};

	useEffect(() => {
		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, []);

	return (
		<div ref={ref} className={classes.navItemContainer}>
			<Text c={"dimmed"} className={classes.title}>
				My Portfolio V.2
			</Text>

			<div
				onClick={() => handleToggle()}
				className={classes.hamburgerMenu}
			>
				<GiHamburgerMenu className="text-2xl" />
			</div>
			{toggle ? (
				<div className={dark ? classes.menuLight : classes.menuDark}>
					<Link
						href="https://jeffersonr.netlify.app/"
						target="_blank"
					>
						<Text
							c={"dimmed"}
							className="underline underline-offset-4 hover:no-underline"
						>
							V.1
						</Text>
					</Link>
					<Theme />
				</div>
			) : (
				""
			)}

			<div className={classes.desktopMenu}>
				<Link href="https://jeffersonr.netlify.app/" target="_blank">
					<Text
						c={"dimmed"}
						className="underline underline-offset-4 hover:no-underline"
					>
						Portfolio V.1
					</Text>
				</Link>
				<Theme />
			</div>
		</div>
	);
};

export default Nav;
