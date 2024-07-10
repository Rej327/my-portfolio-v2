import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";
import { Skeleton, Text, Tooltip, useMantineColorScheme } from "@mantine/core";

type TechStackItem = {
	stack: string;
	icon: string | StaticImageData;
};

type StacksProps = {
	title: string;
	techStack: TechStackItem[];
};

const TechStacks: React.FC<StacksProps> = ({ techStack, title }) => {
	const [loading, setLoading] = useState(true);
	const { colorScheme, toggleColorScheme } = useMantineColorScheme();
	const dark = colorScheme === "dark";

	return (
		<div className="w-fit mx-auto">
			<Text ta="center" my={10} fz={20}>
				{title}
			</Text>

			<div
				className={
					!dark
						? "border-[#F1F1F1] border-2 grid grid-cols-5 gap-4 items-center max-w-[390px] p-4 rounded-md"
						: "border-[#1A1A1A] border-2 grid grid-cols-5 gap-4 items-center max-w-[390px] p-4 rounded-md"
				}
			>
				{loading ? (
					<>
						{techStack.map((stack, index) => (
							<Tooltip
								key={index}
								label={stack.stack}
								position="bottom"
								withArrow
							>
								<Image
									src={stack.icon}
									alt={`${stack.stack}-Icon`}
									height={50}
									width={50}
									className="rounded-md"
								/>
							</Tooltip>
						))}
					</>
				) : (
					<>
						{techStack.map((stack, index) => (
							<>
								<Skeleton key={index} height={50} width={50} radius={5} />
							</>
						))}
					</>
				)}
			</div>
		</div>
	);
};

export default TechStacks;
