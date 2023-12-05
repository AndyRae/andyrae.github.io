import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';

export const metadata: Metadata = {
	title: 'Andy Rae | Software Engineer',
	description: 'Andy Rae | Software Engineer',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en' suppressHydrationWarning>
			<head />
			<body>
				<ThemeProvider
					attribute='class'
					defaultTheme='system'
					enableSystem
					disableTransitionOnChange
				>
					<div className='bg-white dark:bg-black min-h-screen'>{children}</div>
				</ThemeProvider>
			</body>
		</html>
	);
}
