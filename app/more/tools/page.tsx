import Image from "next/image";

const Tools = () => {
    return (
        <div className="my-10 mx-2 md:mx-20 block text-center font-serif">
            <h1 className="text-2xl underline">Here is some of the tools I use.</h1>
            <div>
                <ul>
                    <li className="bg-white border-2 border-gray-700 rounded-xl mt-14 mb-5 pb-10 px-5">
                        <p className="text-xl my-5">
                            I have 2 airbrushes, both by Harder & Steenbeck<br />
                            Both are the 2 in 1 kits where you get an extra needle. <br />
                            The Ultra was my first airbrush and it's a good starting airbrush with a price range around $120. <br />
                            The Infinity CRplus is more for experienced users and the price range is much higher, around $320.</p>
                        <Image
                            className="flex justify-center" 
                            src="/images/tools/1.webp" 
                            height={500} width={2500}
                            priority={true}
                            alt="">
                        </Image>
                    </li>
                    <li className="bg-white border-2 border-gray-700 rounded-xl mt-14 mb-5 pb-10 px-5">
                        <p className="text-xl my-5">
                            Here are some different plastic glues I have. <br/> 
                            The one from Revell was my main one but the one I use now and would recommend
                            is the Tamiya Extra Thin Cement.</p>
                        <Image
                            className="flex justify-center" 
                            src="/images/tools/2.webp" 
                            height={500} width={2500}
                            priority={true}
                            alt="">
                        </Image>
                    </li>
                    <li className="bg-white border-2 border-gray-700 rounded-xl mt-14 mb-5 pb-10 px-5">
                        <p className="text-xl my-5">
                            Here are some of the basic tools I have. <br/>
                            The Army Painter Miniature Model Files, The Army Painter Miniature Model Drill, <br/>
                            The Army Painter Tweezers, Masking tape, <br/>
                            Citadel Fine Detail Cutter, Citadel Moldline Remover, <br/>
                            Revell Hobby Knife and Tamiya Weathering Master Kit.</p>
                        <Image
                            className="flex justify-center" 
                            src="/images/tools/3.webp" 
                            height={500} width={2500}
                            priority={true}
                            alt="">
                        </Image>
                    </li>
                    <li className="bg-white border-2 border-gray-700 rounded-xl mt-14 mb-5 pb-10 px-5">
                        <p className="text-xl my-5">
                            I have both a wet palette from The Army Painter and a dry palette from Citadel. <br/> 
                            I use the wet pallet 95% of the time as it keeps the paint wet long enough for me to paint.</p>
                        <Image
                            className="flex justify-center" 
                            src="/images/tools/4.webp" 
                            height={500} width={2500}
                            priority={true}
                            alt="">
                        </Image>
                    </li>
                    <li className="bg-white border-2 border-gray-700 rounded-xl mt-14 mb-5 pb-10 px-5">
                        <p className="text-xl my-5">
                            I have a good amount of assortment of base decorations. <br/>
                            Everything from flowers, grass to rocks.
                            Most of these are from The Army Painter.</p>
                        <Image
                            className="flex justify-center" 
                            src="/images/tools/5.webp" 
                            height={500} width={2500}
                            priority={true}
                            alt="">
                        </Image>
                    </li>
                    <li className="bg-white border-2 border-gray-700 rounded-xl mt-14 mb-5 pb-10 px-5">
                        <p className="text-xl my-5">
                            I have a water pot from Citadel and also 2 miniature handles from Citadel. <br/> 
                            They are excellent to get a good grip of your model when painting.</p>
                        <Image
                            className="flex justify-center" 
                            src="/images/tools/6.webp" 
                            height={500} width={2500}
                            priority={true}
                            alt="">
                        </Image>
                    </li>
                    <li className="bg-white border-2 border-gray-700 rounded-xl mt-14 mb-5 pb-10 px-5">
                        <p className="text-xl my-5">
                            I have alot more brushes that's not in this picture. But these are the once I use the most. <br />
                            The Citadel Colour brushes are my main brushes to paint with as they are not to expensive. <br />
                            They also have a large sortment of different sizes for different paints. <br />
                            The Winsor & Newton Series 7 is a little more in the highter price range. <br /> 
                            I only use these for fine details and edge highlights.</p>
                        <Image
                            className="flex justify-center" 
                            src="/images/tools/7.webp" 
                            height={500} width={2500}
                            priority={true}
                            alt="">
                        </Image>
                    </li>
                </ul>
            </div>
        </div>
    );
}
 
export default Tools;