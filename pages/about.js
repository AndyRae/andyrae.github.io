import Head from 'next/head';
import Layout from '../components/layout';
import { VStack, Heading } from '@chakra-ui/react';
import { getPageData } from '../lib/posts';

export default function About({ postData }) {
	return (
		<Layout>
			<Head></Head>
			<VStack maxW={'container.md'} alignItems='left' spacing={8} pt={'100px'}>
				<Heading>{postData.title}</Heading>
				<div
					dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
					className='markdown'
					spacing={8}
				/>
			</VStack>
		</Layout>
	);
}

export async function getStaticProps() {
	const postData = await getPageData('about');
	return {
		props: {
			postData,
		},
	};
}
