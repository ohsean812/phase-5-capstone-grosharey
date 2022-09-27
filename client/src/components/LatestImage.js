import { AppContext } from "../App";
import React, { useContext, useEffect } from "react";

function LatestImage( {grocery} ) {

    // const { latestGrocery, setLatestGrocery } = useContext(AppContext);
        
    // useEffect(() => {
    //     // fetch(`/groceries/${grocery.id}`)
    //     fetch(`/images/${grocery.id}`)
    //         .then((resp) => resp.json())
    //         .then((data) => {
    //             // console.log(data)
    //             setLatestGrocery(data.image_url);
    //         })
    //         .catch((error) => console.error(error));
    // }, [])


    
    return (

        <div>
            {/* <img src={latestGrocery} alt="latest grocery" className="latest-image" /> */}
        </div>
    );
} 

export default LatestImage;