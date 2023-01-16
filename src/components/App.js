import React, { useState, useEffect } from "react";

function App() {
    const[image, setImage] = useState(null)
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random")
        .then(response => response.json())
        .then(data => {
            setImage(data.image)
            setIsLoaded(true);
        })
    }, [])

    if (!isLoaded) return <p>Loading...</p>;
    return(
        <img src={image} alt="A Random Dog"></img>
    )
}

export default App;
