import Carousel from "@/components/carousel"
import fs from "fs";
import Markdown from "markdown-to-jsx";
import matter from "gray-matter";
import getPostMetadata from "@/components/getPostMetadata5";
import Image from "next/image";
import Link from "next/link";

const getPostContent = (slug: string) => {
    const folder = "posts/warhammer-40k/";
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
          <h1 className="text-center mt-6 font-bold text-4xl">{post.data.title}</h1>
          <p className="text-center text-2xl">{post.data.subtitle}</p>
            <div className="grid grid-cols-1 max-w-full m-2 border-2 border-gray-600">
                <Carousel
                infiniteLoop={true}
                swipeable={true}
                emulateTouch={true}
                useKeyboardArrows={true}
                showIndicators={true}
                showStatus={true}
                showThumbs={false}
            >
                <img src={post.data.img1} alt="" style={{width: 2500}}></img>
                <img src={post.data.img2} alt="" style={{width: 2500}}></img>
                <img src={post.data.img3} alt="" style={{width: 2500}}></img>
                <img src={post.data.img4} alt="" style={{width: 2500}}></img>
                <img src={post.data.img5} alt="" style={{width: 2500}}></img>
                </Carousel>
            </div>
            <article className="prose max-w-none mx-6 mt-12 text-center">
                <Markdown>{post.content}</Markdown>
            </article>
            <p className="text-center mt-16">Visit Bandai here</p>
            <Link className="grid justify-center" href="" rel="noopener noreferrer" target="_blank">
                <Image src="/bandai-logo.png" height={100} width={100} alt=""></Image>
            </Link>
        </div>
    );
}
 
export default PostPage;