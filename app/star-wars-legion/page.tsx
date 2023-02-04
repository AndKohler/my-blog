import getPostMetadata from "@/components/getPostMetadata3";
import Link from "next/link";


const StarWarsLegionHomePage = () => {
    const postMetadata = getPostMetadata();
    const postPreviews = postMetadata.map((post) => (
        <div>
          <Link href={`/star-wars-legion/${post.slug}`}>
            <h2>{post.title}</h2>
            <p>{post.date}</p>
          </Link>
        </div>
    ));

    return <h1>{postPreviews}</h1>;
}
 
export default StarWarsLegionHomePage;