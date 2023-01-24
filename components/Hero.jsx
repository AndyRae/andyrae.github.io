import { NavLink } from './Navbar';
import { Heading, VStack, HStack, Text, Box } from '@chakra-ui/react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
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
						px={2}
					>
						Digital Research Service.
					</NavLink>
					<br />
					<br />
					Whilst programming freelance, I previously spent a decade working in
					the UK film industry, before moving entirely into software development
					in 2022.
				</Text>
			</VStack>
			<HStack spacing={[0, 6]} justifyContent='center'>
				<NavLink
					text='LinkedIn'
					link='https://www.linkedin.com/in/andyrae1/'
					isExternal
					display='flex'
					alignItems='center'
				>
					<Box pr={2}>
						<FaLinkedin />
					</Box>
					LinkedIn
				</NavLink>

				<NavLink
					text='Github'
					link='https://github.com/AndyRae'
					isExternal
					display='flex'
					alignItems='center'
				>
					<Box pr={2}>
						<FaGithub />
					</Box>
					Github
				</NavLink>
				<NavLink
					text='Email'
					link='mailto:hello@rae.li'
					isExternal
					display='flex'
					alignItems='center'
				>
					<Box pr={2}>
						<FiMail />
					</Box>
					Email
				</NavLink>
			</HStack>
		</VStack>
	);
};
