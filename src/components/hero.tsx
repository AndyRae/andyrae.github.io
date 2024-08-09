import NavLink from '@/components/navlink';
import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export const Hero = () => {
	return (
		<div className='space-y-8 max-w-2xl'>
			<div className='flex flex-col items-start space-y-8'>
				<h1 className='text-4xl font-light'>{`Hello! I'm Andy.`}</h1>

				<p className='text-lg'>
					{`I'm a Senior Software Engineer at the University Of Nottingham,
					specialising in`}
					<NavLink
						href='https://nottinghambrc.nihr.ac.uk/research/informatics'
						target='_blank'
						rel='noopener noreferrer'
					>
						Health Informatics
					</NavLink>
					within the School of Medicine.
					<br />
					<br />
					{`I’m also the Head of Research Software at Nottingham University
					Hospitals, where I focus on delivering cutting-edge software solutions
					for research, currently for the`}
					<NavLink
						href='https://www.emsde.net'
						target='_blank'
						rel='noopener noreferer'
					>
						East Midlands Secure Data Environment.
					</NavLink>
					<br />
					<br />
					I lead development of complex software, drawing on extensive
					experience with C#, Python, and Typescript.
					<br />
					<br />
					Before moving into full-time software engineering, I previously spent
					a decade in the UK film industry.
				</p>
			</div>
			<div className='flex space-x-2 md:space-x-6 justify-center'>
				<NavLink
					href='https://github.com/AndyRae'
					target='_blank'
					rel='noopener noreferrer'
					className='text-sm font-medium'
				>
					<FaGithub className='h-4 w-4 mr-2' />
					Github
				</NavLink>

				<NavLink
					href='https://www.linkedin.com/in/andyrae1/'
					target='_blank'
					rel='noopener noreferrer'
					className='text-sm font-medium'
				>
					<FaLinkedin className='h-4 w-4 mr-2' />
					LinkedIn
				</NavLink>
			</div>
		</div>
	);
};
