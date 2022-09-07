import Link from 'next/link';
// import { NavbarLink } from './Navbar'

export const Hero = () => {
	return (
		<div>
			<h1 className='text-5xl'>Hello!</h1>
			<h1 className='text-5xl'>
				I'm Andy - I'm a software engineer, previously working in film..
			</h1>
			<div className='flex'>
				{/* <NavbarLink text="About" href="/about" />
        <NavbarLink text="Projects" href="/projects" />

        <NavbarLink text="Twitter" href="/" isExternal/>
        <NavbarLink text="LinkedIn" href="/" isExternal/>
        <NavbarLink text="GitHub" href="/" isExternal/>
        <NavbarLink text="Email" href="/" isExternal/> */}
			</div>
		</div>
	);
};
