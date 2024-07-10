import TechStacks from "@/components/tech/TechStack";
import React from "react";
import { backend, frontend, others } from "../constants/Stack";
import { Text } from "@mantine/core";

const TechStack = () => {
	return (
		<div className="max-w-[1200px] mx-auto py-10">
			<h1 className="text-2xl text-center w-fit mx-auto">
				Technology Stack
			</h1>
			<div className="mt-10 md:flex justify-center items-start flex-wrap gap-4">
				<TechStacks title="Front End" techStack={frontend} />
				<TechStacks title="Back End" techStack={backend} />
				<TechStacks title="Others" techStack={others} />
			</div>
		</div>
	);
};

export default TechStack;
