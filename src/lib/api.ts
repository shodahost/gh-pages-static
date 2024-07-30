import { Post } from "@/interfaces/post";
import fs from "fs";
import matter from "gray-matter";
import { join } from "path";

const postsDirectory = join(process.cwd(), "_posts");

// Function to replace ${basePath} with the appropriate value based on the environment
function replacePathInFile(filePath: string) {
  const data = fs.readFileSync(filePath, 'utf8');
  const basePath = process.env.NODE_ENV === 'development' ? '' : '/gh-pages-static';
  const result = data.replace(/\$\{basePath\}/g, basePath);
  fs.writeFileSync(filePath, result, 'utf8');
}

// Function to get all .md files in a directory
function getMarkdownFiles(dir: string, files: string[] = []): string[] {
  fs.readdirSync(dir).forEach(file => {
    const filePath = join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      getMarkdownFiles(filePath, files);
    } else if (filePath.endsWith('.md')) {
      files.push(filePath);
    }
  });
  return files;
}

// Function to replace basePath in all .md files in _posts directory
function replaceBasePathInMarkdownFiles() {
  const markdownFiles = getMarkdownFiles(postsDirectory);
  markdownFiles.forEach(filePath => {
    replacePathInFile(filePath);
  });
}

// Call the function to replace basePath before other operations
replaceBasePathInMarkdownFiles();

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory);
}

export function getPostBySlug(slug: string) {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(postsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return { ...data, slug: realSlug, content } as Post;
}

export function getAllPosts(): Post[] {
  const slugs = getPostSlugs();
  const posts = slugs
    .map((slug) => getPostBySlug(slug))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  return posts;
}