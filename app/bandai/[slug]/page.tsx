
import Carousel from "@/components/carousel"

import fs from "fs";
import Markdown from "markdown-to-jsx";
import matter from "gray-matter";
import getPostMetadata from "@/components/getPostMetadata1";

const getPostContent = (slug: string) => {
    const folder = "posts/bandai/";
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
            <Carousel
            infiniteLoop={true}
            swipeable={true}
            emulateTouch={true}
            useKeyboardArrows={true}
            showIndicators={true}
            showStatus={false}
            showThumbs={false}
          >
            <img src={post.data.img1} alt="" style={{width: 1500}}></img>
            <img src={post.data.img2} alt="" style={{width: 1500}}></img>
            <img src={post.data.img3} alt="" style={{width: 1500}}></img>
            <img src={post.data.img4} alt="" style={{width: 1500}}></img>
            <img src={post.data.img5} alt="" style={{width: 1500}}></img>
            </Carousel>
          <h1>{post.data.title}</h1>
          <p>Created on: {post.data.date}</p>
          <Markdown>{post.content}</Markdown>
        </div>
    );
}
 
export default PostPage;