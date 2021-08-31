import axios from "axios";
import React, { useState } from 'react';
const baseURL = "/api/detail/4";

export default function Description({item}) {
       /* 
   const [item, setItem] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    React.useEffect(() => {
        setIsLoading(true);
        axios.get(baseURL).then((response) => {
			setItem(response.data);
            setIsLoading(false);
		});
		
	}, []);
    if (!item) return null
    ;*/
    return (
        <div>
           
                <div>
                <h4>{item.name}</h4>
                <ul className="nice-scroll"></ul>
                <h3>{item.price} <span>{item.price}</span></h3>
                <p>{item.description}.</p>
                </div>
           
        </div>
    );
}