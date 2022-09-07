import { NavLink } from './Navbar';
import { Flex, Heading, VStack, HStack } from '@chakra-ui/react';

export const Hero = () => {
	return (
		<div>
			<VStack
				alignItems={'left'}
				spacing={8}
				mt={20}
				minH={'50vh'}
				verticalAlign={'center'}
			>
				<VStack spacing={8} alignItems={'left'}>
					<Heading fontWeight={'200'}>Hello!</Heading>
					<Heading fontWeight={'200'}>
						I'm Andy - I'm a software engineer, previously working in film.
					</Heading>
				</VStack>

				<HStack spacing={6}>
					<NavLink text='About' link='/about'>
						About
					</NavLink>
					<NavLink text='Projects' link='/projects'>
						Projects
					</NavLink>
				</HStack>

				<HStack spacing={6}>
					<NavLink text='Twitter' link='https://twitter.com/AndyRae' isExternal>
						Twitter
					</NavLink>
					<NavLink
						text='LinkedIn'
						link='https://linkedin.com/AndyRae'
						isExternal
					>
						LinkedIn
					</NavLink>
					<NavLink text='GitHub' link='https://github.com/AndyRae' isExternal>
						GitHub
					</NavLink>
					<NavLink text='Email' link='mailto:hello@rae.li' isExternal>
						Email
					</NavLink>
				</HStack>
			</VStack>
		</div>
	);
};
