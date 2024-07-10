import { ActionIcon, useMantineColorScheme } from "@mantine/core";
import { CiDark, CiLight } from "react-icons/ci";

export default function Theme() {
	const { colorScheme, toggleColorScheme } = useMantineColorScheme();
	const dark = colorScheme === "dark";

	return (
		<ActionIcon
			variant="outline"
			color={"blue"}
			onClick={() => toggleColorScheme()}
			title="Toggle color scheme"
      size={35}
		>
			{dark ? <CiLight size="1.3rem" /> : <CiDark size="1.3rem" />}
		</ActionIcon>
	);
}
