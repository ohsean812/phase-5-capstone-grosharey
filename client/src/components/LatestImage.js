import { AppContext } from "../App";
import React, { useContext, useEffect } from "react";

function LatestImage() {

    const { latestGrocery, setLatestGrocery } = useContext(AppContext);

    useEffect(() => {
        fetch("/latest")
            .then((resp) => resp.json())
            .then((data) => {
                setLatestGrocery(data.image_url);
            })
            .catch((error) => console.error(error));
    }, [latestGrocery])

    return (<div>
        <img src={latestGrocery} alt="latest grocery" className="latest-image" />
    </div>);
} 

export default LatestImage;