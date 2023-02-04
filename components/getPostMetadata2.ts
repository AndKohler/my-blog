import fs from "fs";
import matter from "gray-matter";
import { PostMetadata } from "./PostMetadata";

const getPostMetadata = (): PostMetadata[] => {
    const folder = "posts/revell";
    const files = fs.readdirSync(folder);
    const markdownPosts = files.filter((file) => file.endsWith(".md"));
    
    const posts = markdownPosts.map((fileName) => {
      const fileContents = fs.readFileSync(`posts/revell/${fileName}`, "utf8");
      const matterResult = matter(fileContents);
      return {
        title: matterResult.data.title,
        date: matterResult.data.date,
        cover_img: matterResult.data.cover_img,
        slug: fileName.replace(".md", ""),
      };
    });

    return posts;
};

export default getPostMetadata;