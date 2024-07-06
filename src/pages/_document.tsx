import Footer from "@/components/footer/Footer";
import Hero from "@/components/hero/Hero";
import Nav from "@/components/navigation/Nav";
import { ColorSchemeScript } from "@mantine/core";
import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
	return (
		<Html lang="en">
			<Head />
			<ColorSchemeScript defaultColorScheme="auto" />
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
