import { Text, useMantineColorScheme } from "@mantine/core";
import React from "react";

const Footer = () => {
	const { colorScheme, toggleColorScheme } = useMantineColorScheme();
	const dark = colorScheme === "light";

	return (
		<div className={dark ? "w-auto bg-[#F2F2F2] py-10" : "w-auto bg-[#1A1A1A] py-10"}>
			<Text c="dimmed" ta="center" size="sm">
				Created by Jefferson Resurreccion
			</Text>
			<Text c="dimmed" ta="center" size="sm">
				Created from NextJS, TypeScript, TailwindCSS and Mantine
			</Text>
			<Text c="dimmed" ta="center" size="sm">
				© 2024. All rights reserved
			</Text>
		</div>
	);
};

export default Footer;
