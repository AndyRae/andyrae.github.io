import Head from 'next/head';
import Layout from '../components/layout';
import { Nav } from '../components/Navbar';
import { Hero } from '../components/Hero';

export default function Home() {
	return (
		<Layout>
			<div>
				<Head>
					<title>Andy Rae | Software Engineer</title>
				</Head>

				<main>
					{/* <Navbar /> */}
					<Nav />
					<Hero />
				</main>
			</div>
		</Layout>
	);
}
