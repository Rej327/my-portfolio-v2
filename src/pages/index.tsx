import React, { useState } from "react";
import About from "@/components/about/About";
import Contact from "@/components/contact/Contact";
import Footer from "@/components/footer/Footer";
import Hero from "@/components/hero/Hero";
import Nav from "@/components/navigation/Nav";
import Projects from "@/components/projects/Projects";
import TechStack from "@/features/techstack/TechStack";

const Index = () => {
	const [activeSection, setActiveSection] = useState<string>("");

	const renderSection = (section: string) => {
		setActiveSection(section);
	};

	return (
		<div className="w-auto">
			<Nav />
			<Hero render={renderSection} activeSection={activeSection} />

			{activeSection === "" && <About />}
			{activeSection === "info" && <About />}
			{activeSection === "tech" && <TechStack />}
			{activeSection === "contact" && <Contact />}
			{activeSection === "projects" && <Projects />}

			<Footer />
		</div>
	);
};

export default Index;
