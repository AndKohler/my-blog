import getPostMetadata from "@/components/getPostMetadata6";
import Link from "next/link";
import Image from "next/image";


const WarhammerAoSHomePage = () => {
    const postMetadata = getPostMetadata();
    const postPreviews = postMetadata.map((post) => (
        <div key={post.id} className="border border-gray-600 mt-2 m-8 max-w-xl rounded-xl shadow-2xl bg-white">
          <Link scroll={true} href={`/warhammer-aos/${post.slug}`}>
            <h2 className="font-bold text-2xl text-center pt-4 underline">{post.title}</h2>
            <p className="text-center text-xl">{post.subtitle}</p>
            <Image priority={true} className="mb-3" src={post.cover_img} width={600} height={200} alt="" ></Image>
            <p className="text-center">Created: {post.date}</p>
          </Link>
        </div>
    ));

    return <div>
            <div className="mt-6 mb-0 grid justify-center">
              <Image src="/WarhammerAoS-logo.png" height={65} width={311} alt=""></Image>
            </div>
            <div className="grid grid-cols-1 max-w-xl m-auto mt-6 md:grid md:grid-cols-2 md:gap-2 md:max-w-7xl md:m-auto md:mt-6">{postPreviews}</div>
          </div>
          ;
}
 
export default WarhammerAoSHomePage;