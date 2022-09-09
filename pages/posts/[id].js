import Layout from '../../components/layout';
import { getAllPostIds, getPostData } from '../../lib/posts';
import Head from 'next/head';
import { VStack, Heading } from '@chakra-ui/react';
// import Date from '../../components/date'

export default function Post({ postData }) {
	return (
		<Layout>
			<Head>
				<title>{postData.title}</title>
			</Head>
			<VStack maxW={'container.md'} alignItems='left' spacing={8}>
				<Heading>{postData.title}</Heading>
				<div>{postData.date}</div>
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
