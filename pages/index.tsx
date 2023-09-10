import Layout from 'components/Layout';
import { Hero } from 'components/Hero';
import { VStack } from '@chakra-ui/react';

export default function Home() {
	return (
		<Layout>
			<VStack spacing={8} mt={8}>
				<div className='line' />
				<Hero />
				<div className='line' />
			</VStack>
		</Layout>
	);
}
