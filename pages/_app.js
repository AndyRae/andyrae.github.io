import { ChakraProvider } from '@chakra-ui/react';
import { extendTheme } from '@chakra-ui/react';
import '@fontsource/inter/400.css';

function MyApp({ Component, pageProps }) {
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
