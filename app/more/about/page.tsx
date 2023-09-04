const about = () => {
    return (
        <div className="my-10 md:mx-20 mx-10 block text-start font-serif">
            <h1 className="text-2xl underline text-center">About me!</h1>
            <p className="my-10 text-xl">
                My name is Andrée. I'm 32 years old and I live in Sweden. I just finished studying to become a Front-End developer
                and this website was part of a school project. <br/>
                This site is made in Next.JS, Typescript and Tailwind CSS.</p>
            <p className="my-10 text-xl">
                On my spare time I like to watch live streams on twitch.tv or live sports like football, hockey and motorsport. <br />
                My favorite sports event to watch is UEFA Champions League.
                I also like watching NHL when I'm able to due to time difference as the games often starts at 1am my time. <br />
                The teams I follow are The New York Rangers for NHL and Chelsea FC for the English Premier League. <br /> 
                For a few years now I've also been painting plastic model kits and miniature figures from different tabletop games. 
                I don't enjoy playing any tabeltop games I just really like painting the figures. <br />
                I started by collecting collector editions from different type of video games and it went onto different model kit vehicles from 
                Star Wars and then more into miniature figures like Warhammer and Star Wars Legion.
            </p>
        </div>
    );
}
 
export default about;