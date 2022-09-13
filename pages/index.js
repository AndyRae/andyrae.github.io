import Head from 'next/head';
import Layout from '../components/Layout';
import { Hero } from '../components/Hero';
import { ItemList } from '../components/ItemList';
import { VStack } from '@chakra-ui/react';
import { getSortedPostsData } from '../lib/posts';

export default function Home({ allPostsData }) {
	return (
		<Layout>
			<Head></Head>

			<VStack spacing={8} mt={8}>
				<div className='line' />
				<Hero />
				<div className='line' />
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
