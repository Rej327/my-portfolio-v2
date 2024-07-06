import Theme from "@/features/theme/Theme";
import { Text } from "@mantine/core";
import Link from "next/link";
import React from "react";

const Nav = () => {
	return (
		<div className="relative mx-auto w-[1200px]">
			<div className="absolute w-[1200px] self-center flex justify-between py-2">
				<Text c={"dimmed"}>My Portfolio</Text>
				<div className="flex gap-2 items-center">
					<Link
						href="https://jeffersonr.netlify.app/"
						target="_blank"
					>
						<Text c={"dimmed"} className="underline underline-offset-4 hover:no-underline">Old Portfolio</Text>
					</Link>
					<Theme />
				</div>
			</div>
		</div>
	);
};

export default Nav;
