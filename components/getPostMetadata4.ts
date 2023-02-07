import fs from "fs";
import matter from "gray-matter";
import { PostMetadata } from "./PostMetadata";


const getPostMetadata = (): PostMetadata[] => {
    const folder = "posts/tamiya";
    const files = fs.readdirSync(folder);
    const markdownPosts = files.filter((file) => file.endsWith(".md"));
    
    const posts = markdownPosts.map((fileName) => {
      const fileContents = fs.readFileSync(`posts/tamiya/${fileName}`, "utf8");
      const matterResult = matter(fileContents);
      return {
        title: matterResult.data.title,
        date: matterResult.data.date,
        cover_img: matterResult.data.cover_img,
        img1: matterResult.data.img1,
        img2: matterResult.data.img2,
        img3: matterResult.data.img3,
        img4: matterResult.data.img4,
        img5: matterResult.data.img5,
        slug: fileName.replace(".md", ""),
      };
    });

    return posts.sort((a, b) => {
      if (a.date < b.date) {
        return 1;
      } else {
        return -1;
      }
    });
};

export default getPostMetadata;