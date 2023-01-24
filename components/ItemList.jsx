import NextImage from 'next/image';
import NextLink from 'next/link';
import {
	LinkBox,
	LinkOverlay,
	Heading,
	Text,
	VStack,
	StackDivider,
} from '@chakra-ui/react';

import { Date } from './Date';

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
					unoptimized={true}
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

const ListItem = ({ title, link, date }) => {
	return (
		<>
			<Heading
				size='md'
				fontWeight={'600'}
				my='2'
				_hover={{
					bgGradient: 'linear(to-l, #FF0080, #ABE4B8)',
					bgClip: 'text',
				}}
			>
				<NextLink href={`posts/${link}`} passHref>
					{title}
				</NextLink>
			</Heading>
			<Text mt={5} textColor='gray' fontSize='sm'>
				<Date dateString={date} />
			</Text>
		</>
	);
};

export const ItemList = ({ posts }) => {
	return (
		<>
			<VStack
				divider={<StackDivider borderColor='gray.200' />}
				spacing={8}
				align='stretch'
			>
				{posts.map((item, i) => (
					<ListItem
						key={i}
						title={item.title}
						link={item.id}
						date={item.date}
					/>
				))}
			</VStack>
		</>
	);
};
