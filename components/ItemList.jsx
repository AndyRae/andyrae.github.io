import NextImage from 'next/image';
import NextLink from 'next/link';
import {
	Box,
	LinkBox,
	LinkOverlay,
	SimpleGrid,
	Heading,
	Text,
} from '@chakra-ui/layout';

// radial-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.2)), url(/assets/images/film-feels/curious-1.png)

export const Item = ({ title, link, image, caption }) => {
	return (
		<LinkBox
			// backgroundImage={`radial-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.2)), url(${image})`}
			// bgPosition="center"
			// bgRepeat="no-repeat"
			// bgSize="cover"
			w='293px'
			h='293px'
			p={5}
		>
			<NextImage
				src={image}
				layout='fill'
				style={{ zIndex: -10 }}
				quality={100}
			></NextImage>
			<Heading size='lg' textColor='white' fontWeight={'600'} my='2'>
				<LinkOverlay href={link}>{title}</LinkOverlay>
			</Heading>
			<Text mt={5} textColor='white'>
				{caption}
			</Text>
		</LinkBox>
	);
};

const Items = [
	{
		title: 'Hello world',
		link: '/about',
		image: '/assets/images/1.jpg',
		caption: 'June 2022',
	},
	{
		title: 'Hello world',
		link: '/',
		image: '/assets/images/1.jpg',
		caption: 'June 2022',
	},
	{
		title: 'Hello world',
		link: '/',
		image: '/assets/images/1.jpg',
		caption: 'June 2022',
	},
	{
		title: 'Hello world',
		link: '/',
		image: '/assets/images/1.jpg',
		caption: 'June 2022',
	},
	{
		title: 'Hello world',
		link: '/',
		image: '/assets/images/1.jpg',
		caption: 'June 2022',
	},
	{
		title: 'Hello world',
		link: '/',
		image: '/assets/images/1.jpg',
		caption: 'June 2022',
	},
];

export const ItemList = () => {
	return (
		<SimpleGrid columns={[1, 3]} spacing={8}>
			{Items.map((item) => (
				<Item
					key={item.title}
					title={item.title}
					link={item.link}
					image={item.image}
					caption={item.caption}
				/>
			))}
		</SimpleGrid>
	);
};
