import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

import { PostData } from 'interfaces/postData';

const postsDirectory = path.join(process.cwd(), 'public/posts');
const pagesDirectory = path.join(process.cwd(), 'public/pages');

export function getSortedPostsData(): PostData[] {
	// Get file names under /posts
	const fileNames = fs.readdirSync(postsDirectory);

	const allPostsData = fileNames.reduce(function (
		result: PostData[],
		fileName
	) {
		// Filter out not markdown files
		if (fileName.split('.').pop() !== 'md') {
			return result;
		}

		const id = fileName.replace(/\.md$/, '');

		// Read markdown file as string
		const fullPath = path.join(postsDirectory, fileName);
		const fileContents = fs.readFileSync(fullPath, 'utf8');

		// Use gray-matter to parse the post metadata section
		const matterResult = matter(fileContents);

		const post: PostData = {
			id: id,
			...matterResult.data,
		};

		result.push(post);
		return result;
	},
	[]);

	// Sort posts by date
	return allPostsData.sort((a: any, b: any) => {
		if (a.date < b.date) {
			return 1;
		} else {
			return -1;
		}
	});
}

export function getAllPostIds(): { params: { id: string } }[] {
	// Get file names under /posts
	const fileNames = fs.readdirSync(postsDirectory);
	return fileNames.map((fileName) => {
		// Remove ".md" from file name to get id
		return {
			params: {
				id: fileName.replace(/\.md$/, ''),
			},
		};
	});
}

export async function getPostData(id: string): Promise<PostData> {
	const fullPath = path.join(postsDirectory, `${id}.md`);
	const fileContents = fs.readFileSync(fullPath, 'utf8');

	// Use gray-matter to parse the post metadata section
	const matterResult = matter(fileContents);

	// Use remark to convert markdown into HTML string
	const processedContent = await remark()
		.use(html)
		.process(matterResult.content);
	const contentHtml = processedContent.toString();

	// Combine the data with the id and contentHtml
	return {
		id,
		contentHtml,
		...matterResult.data,
	};
}

export async function getPageData(id: string): Promise<PostData> {
	const fullPath = path.join(pagesDirectory, `${id}.md`);
	const fileContents = fs.readFileSync(fullPath, 'utf8');

	// Use gray-matter to parse the post metadata section
	const matterResult = matter(fileContents);

	// Use remark to convert markdown into HTML string
	const processedContent = await remark()
		.use(html)
		.process(matterResult.content);
	const contentHtml = processedContent.toString();

	// Combine the data with the id and contentHtml
	return {
		id,
		contentHtml,
		...matterResult.data,
	};
}
