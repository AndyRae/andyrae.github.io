import { NavLink } from './Navbar';
import { Heading, VStack, HStack, Text, Button } from '@chakra-ui/react';
import { FaTwitter, FaGithub, FaLinkedin } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';

export const Hero = () => {
	return (
		<VStack
			alignItems='left'
			spacing={8}
			mt={20}
			minH='50vh'
			verticalAlign='center'
		>
			<VStack spacing={8} alignItems='left' px={5}>
				<Heading fontWeight='200'>{`Hello! I'm Andy.`}</Heading>

				<Text maxW='container.md' fontSize='lg'>
					I work as a Software Engineer at the University Of Nottingham, in the
					<NavLink
						link='https://www.nottingham.ac.uk/dts/researcher/digital-research-service/digital-research-service.aspx'
						isExternal
					>
						Digital Research Service.
					</NavLink>
					<br />
					<br />I previously spent a decade working in the UK film industry,
					before moving into technology in 2022.
				</Text>
			</VStack>

			<HStack spacing={[0, 6]} justifyContent='center'>
				<NavLink text='Twitter' link='https://twitter.com/AndyRae_' isExternal>
					<Button
						leftIcon={<FaTwitter />}
						colorScheme='green.100'
						variant='link'
						_hover={{
							textDecoration: 'none',
						}}
					>
						Twitter
					</Button>
				</NavLink>
				<NavLink
					text='LinkedIn'
					link='https://www.linkedin.com/in/andyrae1/'
					isExternal
				>
					<Button
						leftIcon={<FaLinkedin />}
						colorScheme='green.100'
						variant='link'
					>
						LinkedIn
					</Button>
				</NavLink>
				<NavLink text='GitHub' link='https://github.com/AndyRae' isExternal>
					<Button
						leftIcon={<FaGithub />}
						colorScheme='green.100'
						variant='link'
					>
						GitHub
					</Button>
				</NavLink>
				<NavLink text='Email' link='mailto:hello@rae.li' isExternal>
					<Button leftIcon={<FiMail />} colorScheme='green.100' variant='link'>
						Email
					</Button>
				</NavLink>
			</HStack>
		</VStack>
	);
};
