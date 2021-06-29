import { Hero } from "../components";
import { useState, useEffect } from "react";

const Home = () => {
    const image = "https://www.tributemedia.com/hs-fs/hubfs/Images/Blog%20Images/shutterstock_252081805.jpg?width=1240&name=shutterstock_252081805.jpg";
    return (
        <>
            <Hero image={image} title={'SuperOfficeWorker'} text={"Accountant by day, hero by night, nerd 24/7"} />
            <div>Stuff</div>
        </>
    );
};

export default Home;
