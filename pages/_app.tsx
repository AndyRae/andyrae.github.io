import { ChakraProvider } from '@chakra-ui/react';
import { extendTheme } from '@chakra-ui/react';
import '@fontsource/inter/400.css';
import { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<ChakraProvider theme={theme}>
			<Component {...pageProps} />
		</ChakraProvider>
	);
}

const theme = extendTheme({
	fonts: {
		body: `'Inter', sans-serif`,
	},
	styles: {
		global: {
			'.line': {
				border: '0',
				height: '0',
				borderTop: '1px solid rgba(0, 0, 0, 0.1)',
				mX: '75px',
				width: '100px',
			},
			'.markdown': {
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'space-between',
				h1: {
					fontSize: 'xl',
					mb: '4',
				},
				p: {
					fontSize: '1.25em',
					lineHeight: '1.5',
					marginBlockStart: '0.5em',
					marginBlockEnd: '0.5em',
					marginInlineStart: '0px',
					marginInlineEnd: '0px',
				},
				ul: {
					fontSize: '1.25em',
					lineHeight: '1.5',
				},
				a: {
					borderBottomColor: '#9AE6B4',
					borderBottomWidth: '2px',
					_hover: {
						color: '#9AE6B4',
					},
				},
				img: {
					boxShadow: `0 0 50px 0 rgba(0,0,0,.10)`,
					my: '10',
				},
			},
		},
	},
});

export default MyApp;
