import NavLink from '@/components/navlink';
import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export const Hero = () => {
	return (
		<div className='space-y-8 max-w-2xl'>
			<div className='flex flex-col items-start space-y-8 px-5'>
				<h1 className='text-4xl font-light'>{`Hello! I'm Andy.`}</h1>

				<p className='text-lg'>
					I work as a Software Engineer at the University Of Nottingham, in the
					<NavLink
						href='https://www.nottingham.ac.uk/dts/researcher/digital-research-service/digital-research-service.aspx'
						target='_blank'
						rel='noopener noreferrer'
					>
						Digital Research Service.
					</NavLink>
					<br />
					<br />
					I work with C# (.NET Core), Python (Flask & Django), and Typescript
					(Next.js & React).
					<br />
					<br />
					Whilst working as a freelance web developer, I previously spent a
					decade working in the UK film industry, before moving full time into
					software engineering in 2022.
				</p>
			</div>
			<div className='flex space-x-2 md:space-x-6 justify-center'>
				<NavLink
					href='https://www.linkedin.com/in/andyrae1/'
					target='_blank'
					rel='noopener noreferrer'
					className='text-sm font-medium'
				>
					<FaLinkedin className='h-4 w-4 mr-2' />
					LinkedIn
				</NavLink>

				<NavLink
					href='https://github.com/AndyRae'
					target='_blank'
					rel='noopener noreferrer'
					className='text-sm font-medium'
				>
					<FaGithub className='h-4 w-4 mr-2' />
					Github
				</NavLink>
			</div>
		</div>
	);
};
