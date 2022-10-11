import {
	ChainId,
	ThirdwebProvider,
} from "@thirdweb-dev/react";

import "../styles/tailwind.css";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<ThirdwebProvider desiredChainId={ChainId.Rinkeby}>
			<Component {...pageProps} />
		</ThirdwebProvider>
	);
}

export default MyApp;
