import Head from 'next/head';
import Layout from '../components/layout';
import { Hero } from '../components/Hero';
import { ItemList } from '../components/ItemList';
import { VStack } from '@chakra-ui/react';
import { getSortedPostsData } from '../lib/posts';

export default function Home({ allPostsData }) {
	console.log(allPostsData);
	return (
		<Layout>
			<Head></Head>

			<VStack spacing={8} mt={8}>
				<Hero />
				<ItemList posts={allPostsData} />
			</VStack>
		</Layout>
	);
}

export async function getStaticProps() {
	const allPostsData = getSortedPostsData();
	return {
		props: {
			allPostsData,
		},
	};
}
