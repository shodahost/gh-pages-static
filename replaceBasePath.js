const fs = require('fs');
const path = require('path');

const distDir = path.join(__dirname, 'dist');
const isProduction = process.env.NODE_ENV === 'production';
const basePath = isProduction ? '/gh-pages-static' : '';

function replaceInFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const updatedContent = content.replace(/\$\{basePath\}/g, basePath);
  fs.writeFileSync(filePath, updatedContent, 'utf8');
}

function processDirectory(directory) {
  const files = fs.readdirSync(directory);
  files.forEach((file) => {
    const fullPath = path.join(directory, file);
    const relativePath = path.relative(__dirname, fullPath);
    const isMarkdownInPosts = relativePath.startsWith('_posts') && file.endsWith('.md');

    if (fs.lstatSync(fullPath).isDirectory()) {
      processDirectory(fullPath);
    } else if (!isMarkdownInPosts) {
      replaceInFile(fullPath);
    }
  });
}

processDirectory(distDir);
console.log(`Replaced \${basePath} with "${basePath}" in /dist/ directory, excluding .md files in _posts.`);