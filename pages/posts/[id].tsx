import { getAllPostIds, getPostData } from '../../lib/posts';
import Head from 'next/head';
import Layout from '../../components/Layout';
import { Date } from '../../components/Date';
import { VStack, Heading } from '@chakra-ui/react';

import { PostData } from '../../interfaces/postData';
import { GetStaticPathsResult } from 'next/types';

export default function Post({ postData }: { postData: PostData }) {
	return (
		<Layout>
			<Head>
				<title>{postData.title}</title>
			</Head>

			<VStack maxW={'container.md'} alignItems='left' spacing={8} pt={'100px'}>
				<Heading>{postData.title}</Heading>
				{postData.date && <Date dateString={postData.date} />}
				{postData.contentHtml && (
					<div
						dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
						className='markdown'
					/>
				)}
			</VStack>
		</Layout>
	);
}

// This function gets called at build time - it's used to generate the paths
export async function getStaticPaths(): Promise<GetStaticPathsResult> {
	const paths = getAllPostIds();
	return {
		paths,
		fallback: false,
	};
}

// This also gets called at build time - it's used to generate the page
export async function getStaticProps({
	params,
}: {
	params: any;
}): Promise<{ props: { postData: PostData } }> {
	const postData = await getPostData(params.id);
	return {
		props: {
			postData,
		},
	};
}
