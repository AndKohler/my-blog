import getPostMetadata from "@/components/getPostMetadata1";
import Link from "next/link";


const BandaiHomePage = () => {
    const postMetadata = getPostMetadata();
    const postPreviews = postMetadata.map((post) => (
        <div>
          <Link href={`/bandai/${post.slug}`}>
            <img src={post.cover_img} alt="" style={{width: 500}}></img>
            <h2>{post.title}</h2>
            <p>{post.date}</p>
          </Link>
        </div>
    ));

    return <h1>{postPreviews}</h1>;
}
 
export default BandaiHomePage;