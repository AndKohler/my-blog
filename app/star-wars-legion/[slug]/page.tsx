import fs from "fs";
import Markdown from "markdown-to-jsx";
import matter from "gray-matter";
import getPostMetadata from "@/components/getPostMetadata3";

const getPostContent = (slug: string) => {
    const folder = "posts/star-wars-legion/";
    const file = `${folder}${slug}.md`;
    const content = fs.readFileSync(file, "utf8");
    const matterResult = matter(content);
    return matterResult;
}

export const generateStaticParams = async () => {
    const posts = getPostMetadata();
    return posts.map((post) => ({
        slug: post.slug,
    }));
}

const PostPage = (props: any) => {
    const slug = props.params.slug;
    const post = getPostContent(slug);
    return (
        <div>
          <h1>{post.data.title}</h1>
          <p>Created on: {post.data.date}</p>
          <Markdown>{post.content}</Markdown>
        </div>
    );
}
 
export default PostPage;