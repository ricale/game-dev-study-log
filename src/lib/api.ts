import fs from 'fs';
import path from 'path';

import matter from 'gray-matter';
// import rehypeAutolinkHeadings from 'rehype-autolink-headings';
// import rehypePrettyCode from 'rehype-pretty-code';
import rehypeSlug from 'rehype-slug';
import rehypeStringify from 'rehype-stringify';
import remarkGfm from 'remark-gfm';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import { unified } from 'unified';
 
const postsDirectory = path.join(process.cwd(), '_posts');
 
function getParser() {
  return unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(remarkGfm)
    // .use(rehypePrettyCode, {
    //   theme: 'one-dark-pro',
    // })
    .use(rehypeStringify)
    .use(rehypeStringify)
    .use(rehypeSlug);
  // .use(rehypeAutolinkHeadings, {
  //   content: arg => ({
  //     type: 'element',
  //     tagName: 'a',
  //     properties: {
  //       href: `#${String(arg.properties?.id)}`,
  //       style: 'margin-right: 10px',
  //     },
  //     children: [{ type: 'text', value: '#' }],
  //   }),
  // });
}
 
const parser = getParser();

async function getFileData(dir: string, fileName: string) {
  const filePath = path.join(dir, fileName);
  const {
    data: { title, date, ...data },
    content,
  } = matter(await fs.promises.readFile(filePath, 'utf8'));
  const html = await parser.process(content);

  return {
    ...data,
    title: title as string,
    id: fileName.replace(/\.md$/, ''),
    date: `${(date as Date).toISOString().slice(0, 10)}`,
    html: html.value.toString(),
  };
}

type FileData = Awaited<ReturnType<typeof getFileData>>;

const isMdFile = (filename: string) => !!filename.match(/\.md$/);

async function getPostFiles(dir: string): Promise<FileData[]> {
  const fileOrDirs = fs.readdirSync(dir);
  const fileNames = fileOrDirs.filter(itemName => isMdFile(itemName));
  const filesResult = await Promise.all(
    fileNames.map(async (fileName) => getFileData(dir, fileName)),
  );
  const dirNames = fileOrDirs.filter(itemName => !isMdFile(itemName));
  const dirsResult = await Promise.all(
    dirNames.map(async dirName => getPostFiles(path.join(dir, dirName))),
  );

  return [
    ...filesResult,
    ...dirsResult.flat(),
  ];
}

export async function getPostById(id: string) {
  // NOTE(kangseong): 파일 이름 형식은 `${postsDirectory}/yymm/yymmdd-some-file-name.md` 일 것이라 가정
  return await getFileData(path.join(postsDirectory, id.slice(0, 4)), `${id}.md`);
}
 
export async function getAllPosts() {
  const posts = await getPostFiles(postsDirectory);
  return posts.sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
}

export type Post = FileData;
