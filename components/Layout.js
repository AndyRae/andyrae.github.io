import Head from 'next/head';
import { Navbar } from '../components/Navbar';
import { Container } from '@chakra-ui/react';

export default function Layout({ children, home }) {
	return (
		<Container maxW={'container.lg'}>
			<Head>
				<link rel='icon' href='/favicon.ico' />
				<meta name='description' content='Description' />
			</Head>

			<main>{children}</main>
		</Container>
	);
}
