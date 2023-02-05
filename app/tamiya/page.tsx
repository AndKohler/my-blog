import getPostMetadata from "@/components/getPostMetadata4";
import Link from "next/link";



const StarWarsLegionHomePage = () => {
    const postMetadata = getPostMetadata();
    const postPreviews = postMetadata.map((post) => (
        <div>
          <Link href={`/tamiya/${post.slug}`}>
            <h2>{post.title}</h2>
            <p>{post.date}</p>
          </Link>
        </div>
    ));

    return <h1>{postPreviews}</h1>;
}
 
export default StarWarsLegionHomePage;