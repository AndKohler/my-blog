import Image from "next/image";
import Carousel from "@/components/carousel"

const Projects = () => {
    return (
        <div className="my-10 mx-2 md:mx-20 block text-center font-serif">
            <h1 className="text-2xl underline">Upcoming Projects to paint.</h1>
            <p className="mt-4">Here are all unopened boxes I have that I will paint at some point.</p>
            <div>
                <ul>
                    <li className="bg-white border-2 border-gray-700 rounded-xl mt-14 mb-5 pb-10 px-5">
                        <h1 className="text-2xl my-5 font-bold border-b-2">Warhammer 40K</h1>
                        <Carousel
                            infiniteLoop={true}
                            swipeable={true}
                            emulateTouch={true}
                            useKeyboardArrows={true}
                            showIndicators={false}
                            showStatus={true}
                            showThumbs={true}
                        >
                        <img src="/images/projects/1.webp" alt="" style={{width: 2500}}></img>
                        <img src="/images/projects/2.webp" alt="" style={{width: 2500}}></img>
                        <img src="/images/projects/3.webp" alt="" style={{width: 2500}}></img>
                        </Carousel>
                    </li>
                    <li className="bg-white border-2 border-gray-700 rounded-xl mt-14 mb-5 pb-10 px-5">
                        <h1 className="text-2xl my-5 font-bold border-b-2">Warhammer AoS</h1>
                        <Carousel
                            infiniteLoop={true}
                            swipeable={true}
                            emulateTouch={true}
                            useKeyboardArrows={true}
                            showIndicators={false}
                            showStatus={true}
                            showThumbs={true}
                        >
                        <img src="/images/projects/4.webp" alt="" style={{width: 2500}}></img>
                        <img src="/images/projects/5.webp" alt="" style={{width: 2500}}></img>
                        <img src="/images/projects/6.webp" alt="" style={{width: 2500}}></img>
                        <img src="/images/projects/7.webp" alt="" style={{width: 2500}}></img>
                        <img src="/images/projects/8.webp" alt="" style={{width: 2500}}></img>
                        <img src="/images/projects/9.webp" alt="" style={{width: 2500}}></img>
                        <img src="/images/projects/10.webp" alt="" style={{width: 2500}}></img>
                        <img src="/images/projects/11.webp" alt="" style={{width: 2500}}></img>
                        <img src="/images/projects/12.webp" alt="" style={{width: 2500}}></img>
                        <img src="/images/projects/13.webp" alt="" style={{width: 2500}}></img>
                        <img src="/images/projects/14.webp" alt="" style={{width: 2500}}></img>
                        <img src="/images/projects/15.webp" alt="" style={{width: 2500}}></img>
                        <img src="/images/projects/16.webp" alt="" style={{width: 2500}}></img>
                        <img src="/images/projects/17.webp" alt="" style={{width: 2500}}></img>
                        </Carousel>
                    </li>
                    <li className="bg-white border-2 border-gray-700 rounded-xl mt-14 mb-5 pb-10 px-5">
                        <h1 className="text-2xl mt-5 font-bold">Bandai</h1>
                        <Carousel
                            infiniteLoop={true}
                            swipeable={true}
                            emulateTouch={true}
                            useKeyboardArrows={true}
                            showIndicators={false}
                            showStatus={true}
                            showThumbs={true}
                        >
                        <img src="/images/projects/18.webp" alt="" style={{width: 2500}}></img>
                        <img src="/images/projects/19.webp" alt="" style={{width: 2500}}></img>
                        <img src="/images/projects/20.webp" alt="" style={{width: 2500}}></img>
                        </Carousel>
                    </li>
                    <li className="bg-white border-2 border-gray-700 rounded-xl mt-14 mb-5 pb-10 px-5">
                        <h1 className="text-2xl my-5 font-bold border-b-2">Revell</h1>
                        <Carousel
                            infiniteLoop={true}
                            swipeable={true}
                            emulateTouch={true}
                            useKeyboardArrows={true}
                            showIndicators={false}
                            showStatus={true}
                            showThumbs={true}
                        >
                        <img src="/images/projects/21.webp" alt="" style={{width: 2500}}></img>
                        <img src="/images/projects/22.webp" alt="" style={{width: 2500}}></img>
                        </Carousel>
                    </li>
                    <li className="bg-white border-2 border-gray-700 rounded-xl mt-14 mb-5 pb-10 px-5">
                        <h1 className="text-2xl my-5 font-bold border-b-2">Star Wars Legion</h1>
                        <Carousel
                            infiniteLoop={true}
                            swipeable={true}
                            emulateTouch={true}
                            useKeyboardArrows={true}
                            showIndicators={false}
                            showStatus={true}
                            showThumbs={true}
                        >
                        <img src="/images/projects/23.webp" alt="" style={{width: 2500}}></img>
                        <img src="/images/projects/24.webp" alt="" style={{width: 2500}}></img>
                        <img src="/images/projects/25.webp" alt="" style={{width: 2500}}></img>
                        </Carousel>
                    </li>
                </ul>
            </div>
        </div>
    );
}
 
export default Projects;