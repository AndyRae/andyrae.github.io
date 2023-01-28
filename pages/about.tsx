import Layout from '../components/Layout';
import { VStack, Heading } from '@chakra-ui/react';
import { getPageData } from '../lib/posts';

import { PostData } from '../interfaces/postData';

export default function About({ postData }: PostData) {
	return (
		<Layout>
			<VStack maxW={'container.md'} alignItems='left' spacing={8} pt={'100px'}>
				<Heading>{postData.title}</Heading>
				<div
					dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
					className='markdown'
				/>
			</VStack>
		</Layout>
	);
}

// This also gets called at build time - it's used to generate the page
export async function getStaticProps(): Promise<{
	props: { postData: PostData };
}> {
	const postData = await getPageData('about');
	return {
		props: {
			postData,
		},
	};
}
