import { getAllPostIds, getPostData } from '../../lib/posts';
import Head from 'next/head';
import Layout from '../../components/layout';
import { Date } from '../../components/Date';
import { VStack, Heading } from '@chakra-ui/react';

export default function Post({ postData }) {
	return (
		<Layout>
			<Head>
				<title>{postData.title}</title>
			</Head>

			<VStack maxW={'container.md'} alignItems='left' spacing={8} pt={'100px'}>
				<Heading>{postData.title}</Heading>
				<Date dateString={postData.date} />
				<div
					dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
					className='markdown'
					spacing={8}
				/>
			</VStack>
		</Layout>
	);
}

export async function getStaticPaths() {
	const paths = getAllPostIds();
	return {
		paths,
		fallback: false,
	};
}

export async function getStaticProps({ params }) {
	const postData = await getPostData(params.id);
	return {
		props: {
			postData,
		},
	};
}
