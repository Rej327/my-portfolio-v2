// pages/index.tsx
import Head from "next/head";
import React, { useState } from "react";
import About from "@/components/about/About";
import Contact from "@/components/contact/Contact";
import Footer from "@/components/footer/Footer";
import Hero from "@/components/hero/Hero";
import Nav from "@/components/navigation/Nav";
import Projects from "@/components/projects/Projects";
import TechStack from "@/features/techstack/TechStack";
import Image from "next/image";
import { me } from "../../public/assets";

const Index = () => {
	const [activeSection, setActiveSection] = useState<string>("");

	const renderSection = (section: string) => {
		setActiveSection(section);
	};

	return (
		<div className="w-auto">
			<Head>
				<title>Jefferson Porftolio v2</title>
				<meta name="description" content="My Portfolio Version 2" />
				<link rel="icon" href="/me.png" />
			</Head>
			<Nav />
			<Hero render={renderSection} activeSection={activeSection} />
			{/* Adjust styles and attributes as needed */}
			{activeSection === "info" && <About />}
			{activeSection === "projects" && <Projects />}
			{activeSection === "tech" && <TechStack />}
			{activeSection === "contact" && <Contact />}
			<Footer />
		</div>
	);
};

export default Index;
