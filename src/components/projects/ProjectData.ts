import { StaticImageData } from "next/image";
import {
	api,
	catanauan,
	catanauan2,
	chakraui,
	disaster,
	disaster2,
	i18next,
	localStorage,
	MailChimp,
	Mailmunch,
	mantine,
	redux,
	shopify,
	shopify_one,
	shopify_two,
	tailwindcss,
	vite,
	wordpress,
	wordpress_one,
	wordpress_two,
} from "../../../public/assets";

type Tech = {
	name: string;
	icon: StaticImageData;
};

type Features = {
	outside: string[];
	inside: string[];
};

type ProjectType = {
	img: StaticImageData[];
	title: string;
	duration: string;
	technology: Tech[];
	features: Features;
	code: string;
	demo: string;
};

type LessCode = {
	img: StaticImageData;
	title: string;
	duration: string;
	technology: Tech[];
	features: string[];
	demo: string;
};

export const projects: ProjectType[] = [
	{
		img: [disaster, disaster2],
		title: "Village88 Capstone: Disaster Guard",
		duration: "Project Duration: 1 week",
		technology: [
			{
				name: "ReactJS + Vite",
				icon: vite,
			},
			{
				name: "TailwindCSS",
				icon: tailwindcss,
			},
			{
				name: "Mantine & MantineUI",
				icon: mantine,
			},
			{
				name: "Redux ToolKit",
				icon: redux,
			},
			{
				name: "API",
				icon: api,
			},
			{
				name: "Local Storage",
				icon: localStorage,
			},
		],
		features: {
			outside: [
				"Developed DisasterGuard, a web-based app for disaster preparedness and response.",
				"Employed ExpressJS and Socket.io for server development.",
				"Integrated real-time data sources including WeatherBit API and NASA API.",
			],
			inside: [
				"Quick Preparation Guide",
				"Call Emergency Hotline Based on Selected Location",
				"Notification System and Forum with Relative Time Reference",
				"Weather Detection",
				"Quick Send Messages Form",
				"User Authorization and Authentication",
				"Recent Disaster News in Philippines and Worldwide",
			],
		},
		code: "https://github.com/Rej327/DisasterGuard",
		demo: "https://youtu.be/AwME3Hi0B88",
	},
	{
		img: [catanauan, catanauan2],
		title: "Discover Catanauan",
		duration: "Project Duration: Intermittently 2 months",
		technology: [
			{
				name: "ReactJS + Vite",
				icon: vite,
			},
			{
				name: "TailwindCSS",
				icon: tailwindcss,
			},
			{
				name: "ChakraUI",
				icon: chakraui,
			},
			{
				name: "MailChimp",
				icon: MailChimp,
			},
			{
				name: "Mailmunch",
				icon: Mailmunch,
			},
			{
				name: "i18next",
				icon: i18next,
			},
		],
		features: {
			outside: [
				"Integrated comprehensive information about Catanauan, encompassing details on resorts, restaurants, hotels,waterfalls, transportation options, as well as traveler guides for Getting Around, Cultural Insights, and Getting Here, facilitating seamless trip planning for users.",
				" Utilized modern web development technologies to create a responsive and accessible web application.",
			],
			inside: [
				"Static data retrieval",
				"English to Tagalog translation",
				"Comprehensive information integration",
				"Pricing and operating hours display",
				"Location detection with a quick direction guide to Google Maps",
			],
		},
		code: "https://github.com/Rej327/DiscoverCatanauan",
		demo: "https://discovercatanauan.netlify.app/",
	},
];

export const lessCode: LessCode[] = [
	{
		img: shopify_one,
		title: "Cymbal Sheesh",
		duration: "Project Duration: 1 day",
		technology: [
			{
				name: "Shopify",
				icon: shopify,
			},
		],
		features: [
			"Add to Cart Function",
			"Data Collection for Filtering Items",
			"Filter Function",
			"Search Function",
			"Cart Total Price Calculation",
			"Subscription Function",
		],
		demo: "https://www.youtube.com/watch?v=8ZtEUIp5WXs",
	},
	{
		img: wordpress_one,
		title: "Event Center",
		duration: "Project Duration: 1 day",
		technology: [
			{
				name: "Wordpress",
				icon: wordpress,
			},
		],
		features: [
			"Contact Information and Support",
			"Event Details",
			"Package Details",
			"Coordinator Information",
			"Static Data Retrieval",
			"Contact Form Function",
		],
		demo: "https://www.youtube.com/watch?v=2kIZ46cFErs",
	},
];
