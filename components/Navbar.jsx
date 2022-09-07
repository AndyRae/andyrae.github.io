import NextLink from 'next/link';
import { ReactNode } from 'react';
import {
	Box,
	Flex,
	Link,
	Button,
	useColorModeValue,
	Stack,
	useColorMode,
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

const NavLink = ({ link, children }) => (
	<NextLink href={link} passHref>
		<Link
			px={2}
			py={1}
			_hover={{
				textDecoration: 'none',
			}}
			href={link}
			borderBottomColor='orange'
			borderBottomWidth='2px'
		>
			{children}
		</Link>
	</NextLink>
);

const Links = [
	{
		text: 'Home',
		href: '/',
	},
	{
		text: 'About',
		href: '/about',
	},
	{
		text: 'Projects',
		href: '/projects',
	},
];

export const Nav = () => {
	const { colorMode, toggleColorMode } = useColorMode();
	return (
		<>
			<Box bg='light' px={4}>
				<Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
					<Box></Box>

					<Flex alignItems={'center'}>
						<Stack direction={'row'} spacing={7}>
							{Links.map((link) => (
								<NavLink key={link.text} link={link.href}>
									{link.text}
								</NavLink>
							))}

							<Button onClick={toggleColorMode}>
								{colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
							</Button>
						</Stack>
					</Flex>
				</Flex>
			</Box>
		</>
	);
};
