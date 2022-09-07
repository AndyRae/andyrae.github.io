import Head from 'next/head';
import Layout from '../components/layout';
import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { ItemList } from '../components/ItemList';
import { Flex, Heading, VStack, HStack } from '@chakra-ui/react';

export default function Home() {
	return (
		<Layout>
			<Head>
				<title>Andy Rae | Software Engineer</title>
			</Head>

			<Navbar />

			<VStack spacing={8} mt={8}>
				<Hero />
				<ItemList />
			</VStack>
		</Layout>
	);
}
