import getPostMetadata from "@/components/getPostMetadata5";
import Link from "next/link";
import Image from "next/image";


const Warhammer40KHomePage = () => {
    const postMetadata = getPostMetadata();
    const postPreviews = postMetadata.map((post) => (
        <div className="border border-gray-600 mt-2 m-8 max-w-xl rounded-xl shadow-2xl bg-white">
          <Link href={`/warhammer-40k/${post.slug}`}>
            <h2 className="font-bold text-2xl text-center pt-4 underline">{post.title}</h2>
            <p className="text-center text-xl">{post.subtitle}</p>
            <Image className="mb-3" src={post.cover_img} width={600} height={200} alt="" ></Image>
            <p className="text-center">Created: {post.date}</p>
          </Link>
        </div>
    ));

    return <div>
            <div className="mt-6 mb-0 grid justify-center">
              <Image src="/Warhammer40k-logo.png" height={200} width={317} alt=""></Image>
            </div>
            <div className="grid grid-cols-1 max-w-xl m-auto mt-6 md:grid md:grid-cols-2 md:gap-2 md:max-w-7xl md:m-auto md:mt-6">{postPreviews}</div>
          </div>
          ;
}
 
export default Warhammer40KHomePage;