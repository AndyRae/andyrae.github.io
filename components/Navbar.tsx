import { ReactNode } from 'react';
import NextLink from 'next/link';
import { Box, Flex, Link, Button, Stack, useColorMode } from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

type Props = {
	children?: ReactNode;
	link?: string;
	[x: string]: any;
};

export const NavLink = ({ link, children, ...rest }: Props) => (
	<Link
		as={NextLink}
		href={link}
		py={1}
		_hover={{
			bgGradient: 'linear(to-l, #FF0080, #ABE4B8)',
			bgClip: 'text',
		}}
		borderBottomColor='green.200'
		borderBottomWidth='2px'
		{...rest}
	>
		{children}
	</Link>
);

const Links = [
	{
		text: 'Home',
		href: '/',
	},
	// {
	// 	text: 'About',
	// 	href: '/about',
	// },
	// {
	// 	text: 'Projects',
	// 	href: '/projects',
	// },
];

export const Navbar = () => {
	const { colorMode, toggleColorMode } = useColorMode();
	return (
		<>
			<Box bg='light' px={4}>
				<Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
					<Box></Box>

					<Flex alignItems={'center'}>
						<Stack direction={'row'} spacing={6}>
							{Links.map((link) => (
								<NavLink key={link.text} link={link.href} px={2}>
									{link.text}
								</NavLink>
							))}

							<Button
								onClick={toggleColorMode}
								variant='ghost'
								aria-label='Toggle Color Mode'
							>
								{colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
							</Button>
						</Stack>
					</Flex>
				</Flex>
			</Box>
		</>
	);
};
