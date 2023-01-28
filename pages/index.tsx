import Layout from '../components/Layout';
import { Hero } from '../components/Hero';
import { ItemList } from '../components/ItemList';
import { VStack } from '@chakra-ui/react';
import { getSortedPostsData } from '../lib/posts';

import { PostData } from '../interfaces/postData';

export default function Home({ allPostsData }: { allPostsData: PostData[] }) {
	return (
		<Layout>
			<VStack spacing={8} mt={8}>
				<div className='line' />
				<Hero />
				<div className='line' />
				<ItemList posts={allPostsData} />
			</VStack>
		</Layout>
	);
}

export async function getStaticProps(): Promise<{
	props: { allPostsData: PostData[] };
}> {
	const allPostsData = getSortedPostsData();
	return {
		props: {
			allPostsData,
		},
	};
}
