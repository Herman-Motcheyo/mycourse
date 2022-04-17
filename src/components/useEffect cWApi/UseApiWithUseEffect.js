import React, { Fragment, useEffect, useState } from 'react';
import axios from 'axios';
export default function UseApiWithUseEffect() {
    //on va utiliser asiox pour communiquer avec l'api

    const [data, setData] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(
                'https://jsonplaceholder.typicode.com/posts',//ne pas oublier la virgule
            );
            setData(result.data); //update du composant
            console.log("update")
        };
        fetchData (); //va recuper les data de l'api  ici le composant est monte
        console.log("mounted")

    },[])
    return (

        <Fragment>
            <ul><p>uiyiuiuyiyiyuiyiuu</p>
                {data.map((item) => {
                    <li key={item.id}>
                        <p>{item.title}</p>
                    </li>
                })}

            </ul>
        </Fragment>

    )
}
