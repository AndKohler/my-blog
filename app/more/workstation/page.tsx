import Image from "next/image";

const Workstation = () => {
    return (
        <div className="my-10 mx-2 md:mx-20 block text-center font-serif">
            <h1 className="text-2xl underline">This is where the magic happenes. My workbench.</h1>
            <div>
                <ul>
                    <li className="bg-white border-2 border-gray-700 rounded-xl mt-14 mb-5 pb-10 px-5">
                        <p className="text-xl my-5">
                            It's nothing special really. It's an Ikea table and a paint rack that I made myself. <br/>
                            The best part about this setup is I get direct access to all my colors right infront of me. <br/>
                            I have a total of 223 bottles in this rack. <br/>
                            But that's not even close to all my colors. I have probably about 50-100 more in my drawers 
                            under the table. <br/>
                            Most of my bottles are from Citadel, Warhammer's own brand. <br />
                            My light is called Neatfi XL 2,200 Lumens LED. <br /> 
                            It has 4 dimmable stages with a color temp between 5600K-6500K and gives a good daylight. <br/>
                            A good light is a must investment with a hobby like this. Got it on Amazon for about $130. 
                        </p>
                        <Image
                            className="flex justify-center" 
                            src="/images/workstation/1.webp" 
                            height={500} width={2500}
                            priority={true}
                            alt="">
                        </Image>
                    </li>
                    <li className="bg-white border-2 border-gray-700 rounded-xl mt-14 mb-5 pb-10 px-5">
                        <p className="text-xl my-5">
                            This was my old setup. <br />
                            Same table, less colors and a really shitty lamp. <br />
                            As you can see in my current setup the light from the lamp is very important. You dont want 
                            that yellow light. <br />
                            Trust me, get one with the right color temp.
                        </p>
                        <Image
                            className="flex justify-center" 
                            src="/images/workstation/2.webp" 
                            height={500} width={2500}
                            priority={true}
                            alt="">
                        </Image>
                    </li>
                    <li className="bg-white border-2 border-gray-700 rounded-xl mt-14 mb-5 pb-10 px-5">
                        <p className="text-xl my-5">
                            I figured I might aswell take a photo of my current computer setup. <br />
                            And yes that is a real Katana.
                        </p>
                        <Image
                            className="flex justify-center" 
                            src="/images/workstation/3.webp" 
                            height={500} width={2500}
                            priority={true}
                            alt="">
                        </Image>
                        <p className="text-xl my-5">
                            Specs: <br />
                            - 3 27" LG UltraGear 27GN800 144Hz | 1ms | QHD 2560x1440p | IPS | HDR | Nvidia G-Sync monitors. <br />
                            - Ergotech Triple Monitor Stand. <br />
                            - Razer Ornata Keyboard. <br />
                            - Roccat Kone Aimo Remastered mouse. <br />
                            - Asus ROG Sheath mousepad. <br />
                            - Audio-Technica AT2035 XLR Condenser Microphone. <br />
                            - Scarlett Focusrite 2i2 2nd gen Audio Interface. <br />
                            - Fiio K5 Pro Headphone AMP / DAC. <br />
                            - Sennheiser HD650 Headphones. <br />
                            - Logitech C922 Pro Webcam. <br />
                            - Elgato Stream Deck. <br />
                        </p>
                        <p className="text-xl my-5">
                            Computer Specs: <br/>
                            - Intel Core i7 8700K <br />
                            - Asus Strix RTX 3080 OC <br />
                            - Asus Rog Strix Z370-F Gaming <br />
                            - 32Gb DDR4 G.Skill Trident Z RGB 3200MHz <br />
                            - In-Win NR36 AIO <br />
                            - Evga Supernova G2 850W <br />
                            - Elgato Game Capture HD60 Pro, PCIe <br />
                            - In-Win N515 Case <br />
                            - Samsung 970 Evo 250Gb SSD NVMe M.2 <br />
                            - Samsung 980 1Tb SSD NVMe M.2 <br />
                            - Samsung 870 1Tb SSD 2.5"
                        </p>
                    </li>
                </ul>
            </div>
        </div>
    );
}
 
export default Workstation;