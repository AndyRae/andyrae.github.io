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
import { PostData } from 'interfaces/postData';

type ItemProps = {
	title?: string;
	link: string;
	image?: string;
	date?: string;
};

/**
 * Item component with image (unused for now)
 * @param title
 * @param link
 * @param image
 * @param date
 */
export const Item = ({ title, link, image, date }: ItemProps) => {
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
					alt={title || 'Image'}
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
				{date && <Date dateString={date} />}
			</Text>
		</LinkBox>
	);
};

/**
 * Item component without image
 * @param title
 * @param link
 * @param date
 **/
const ListItem = ({ title, link, date }: ItemProps) => {
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
				{date && <Date dateString={date} />}
			</Text>
		</>
	);
};

/**
 * List of items for the home page
 * @param posts
 */
export const ItemList = ({ posts }: { posts: PostData[] }) => {
	return (
		<>
			<VStack
				divider={<StackDivider borderColor='gray.200' />}
				spacing={8}
				align='stretch'
			>
				{posts.map((item: PostData, i: number) => (
					<ListItem
						key={i}
						link={item.id}
						title={item.title}
						date={item.date}
					/>
				))}
			</VStack>
		</>
	);
};
