import { ReactNode } from 'react';
import Head from 'next/head';
import { Container, VStack } from '@chakra-ui/react';
import { Navbar } from './Navbar';

export default function Layout({ children }: { children: ReactNode }) {
	return (
		<Container maxW={'container.lg'}>
			<Head>
				<meta charSet='utf-8' />
				<meta httpEquiv='X-UA-Compatible' content='IE=edge' />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<meta name='apple-mobile-web-app-capable' content='yes' />
				<meta name='mobile-web-app-capable' content='yes' />

				<title>Andy Rae | Software Engineer</title>
				<meta name='description' content='Description!' />

				<link
					rel='apple-touch-icon'
					type='image/png'
					href='assets/icons/apple-touch-icon.png'
				/>
				<link
					rel='apple-touch-icon-180x180'
					type='image/png'
					sizes='180x180'
					href='assets/icons/apple-touch-icon-180x180.png'
				/>
				<link
					rel='icon'
					type='image/png'
					sizes='192x192'
					href='assets/icons/icon-hires.png'
				/>
			</Head>

			<Navbar />

			<VStack pb={'300px'}>{children}</VStack>
		</Container>
	);
}
