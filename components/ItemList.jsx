import NextImage from 'next/image';
import NextLink from 'next/link';
import {
	LinkBox,
	LinkOverlay,
	SimpleGrid,
	Heading,
	Text,
	Box,
} from '@chakra-ui/layout';
import { Date } from './Date';

export const Item = ({ title, link, image, date }) => {
	console.log(date);
	return (
		<LinkBox
			background={
				image
					? `radial-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.2))`
					: 'green.200'
			}
			w='293px'
			h='293px'
			p={5}
			_hover={{
				boxShadow: 'lg',
				transform: 'translateY(-9px)',
				transition: 'all .4s cubic-bezier(.77,0,.175,1)',
				zIndex: 1,
			}}
		>
			{image && (
				<NextImage
					src={image}
					layout='fill'
					objectFit='cover'
					style={{ zIndex: -1 }}
					quality={100}
				/>
			)}

			<Heading size='lg' textColor='white' fontWeight={'600'} my='2'>
				<NextLink href={`posts/${link}`} passHref>
					<LinkOverlay
						backgroundImage={`radial-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1))`}
					>
						{title}
					</LinkOverlay>
				</NextLink>
			</Heading>

			<Text mt={5} textColor='white'>
				<Date dateString={date} />
			</Text>
		</LinkBox>
	);
};

export const ItemList = ({ posts }) => {
	return (
		<SimpleGrid columns={[1, 3]} spacing={8}>
			{posts.map((item, i) => (
				<Item
					key={i}
					title={item.title}
					link={item.id}
					image={item.image}
					date={item.date}
				/>
			))}
		</SimpleGrid>
	);
};
