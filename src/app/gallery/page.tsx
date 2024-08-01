import React from 'react';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

interface ImageData {
  imageUrl: string;
  linkUrl: string;
}

interface MarkdownData {
  images: ImageData[];
}

function getImageData(): ImageData[] {
  const filePath = path.join(process.cwd(), 'data', 'images.md');
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const { data } = matter(fileContents) as unknown as { data: MarkdownData };
  return data.images || [];
}

const Page: React.FC = async () => {
  const imageData: ImageData[] = getImageData();

  return (
    <div className="max-w-screen-xl px-4 py-16 mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
      {[0, 1, 2].map((columnIndex) => (
        <div key={columnIndex} className="grid gap-4">
          {imageData
            .filter((_, index) => index % 3 === columnIndex)
            .map(({ imageUrl, linkUrl }: ImageData, index: number) => (
              <div key={index}>
                <a href={linkUrl} target="_blank" rel="noopener noreferrer">
                  <img className="h-auto max-w-full rounded-lg" src={imageUrl} alt="" />
                </a>
              </div>
            ))}
        </div>
      ))}
    </div>
  );
};

export default Page;