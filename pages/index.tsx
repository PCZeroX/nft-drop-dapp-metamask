import type { NextPage } from "next";
import Link from "next/link";

const Home: NextPage = () => {
	return (
		<div className="flex flex-col justify-center items-center min-h-screen gap-4">
			<h1 className="text-3xl">Homepage</h1>
			<p>Welcome to the NFT Drop</p>

			<ul>
				<li>
					<Link href="/nft/1a2a3a">
						<a className="bg-blue-600 hover:bg-blue-800 px-4 py-2 rounded duration-300">
							Link: /nft/1a2a3a
						</a>
					</Link>
				</li>
			</ul>
		</div>
	);
};

export default Home;
