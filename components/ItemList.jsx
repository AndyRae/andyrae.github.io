import NextImage from 'next/image';
import NextLink from 'next/link';
import {
	LinkBox,
	LinkOverlay,
	SimpleGrid,
	Heading,
	Text,
	Box,
	Button,
	Fade,
} from '@chakra-ui/react';
import { Date } from './Date';
import { useDisclosure } from '@chakra-ui/react';

export const Item = ({ title, link, image, date }) => {
	return (
		<LinkBox
			background={
				image
					? `radial-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.2))`
					: 'green.200'
			}
			w='263px'
			h='263px'
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

			<Heading size='md' textColor='white' fontWeight={'600'} my='2'>
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
	const { isOpen, onToggle } = useDisclosure();

	return (
		<>
			<SimpleGrid columns={[1, 2, 3]} spacing={6} pt='10'>
				{posts.slice(0, 6).map((item, i) => (
					<Item
						key={i}
						title={item.title}
						link={item.id}
						image={item.image}
						date={item.date}
					/>
				))}
			</SimpleGrid>

			<Button
				px={2}
				py={1}
				_hover={{
					textDecoration: 'none',
					color: 'green.200',
				}}
				borderBottomColor='green.200'
				borderBottomWidth='2px'
				variant='link'
				borderRadius='0'
				onClick={onToggle}
			>
				More
			</Button>

			<Fade in={isOpen}>
				<SimpleGrid columns={[1, 3]} spacing={8} pt='10'>
					{posts.slice(6).map((item, i) => (
						<Item
							key={i}
							title={item.title}
							link={item.id}
							image={item.image}
							date={item.date}
						/>
					))}
				</SimpleGrid>
			</Fade>
		</>
	);
};
