import getPostMetadata from "@/components/getPostMetadata2";
import Link from "next/link";


const RevellHomePage = () => {
    const postMetadata = getPostMetadata();
    const postPreviews = postMetadata.map((post) => (
        <div>
          <Link href={`/revell/${post.slug}`}>
            <h2>{post.title}</h2>
            <p>{post.date}</p>
          </Link>
        </div>
    ));

    return <h1>{postPreviews}</h1>;
}
 
export default RevellHomePage;