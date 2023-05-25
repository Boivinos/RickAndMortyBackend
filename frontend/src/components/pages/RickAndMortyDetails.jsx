import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function RickAndMortyDetails() {
    const [data, setData] = useState(undefined);
    const [isDelete, setIsDelete] = useState(false);

    const { id } = useParams();

    useEffect(() => {
        fetch(`http://localhost:5000/character/${id}`)
            .then((response) => response.json())
            .then(([res]) => setData(res))
            .catch((err) => console.error(err))
    }, [])

    const deleteCharacters = () => {
            axios.delete(`http://localhost:5000/character/${id}`, data)
          .then(function (response) {
            console.log(response);
            setData(undefined)
            setIsDelete(true)
          })
          .catch(function (error) {
            console.log(error);
          });}

    return (
        <>
        <button className="delete" onClick={deleteCharacters}>Delete card</button>
        <ul className="home-page_ul">      
            {data !== undefined &&
            <li className="rick-and-morty-card">
                <img src={data.image} />
                <p>My name is {data.name}</p>
                <p>My status is {data.status}</p>
                <p>My origin is {data.origin}</p>
                <p>My creation date: {data.created}</p>
            </li>
            }
            {isDelete && 
            <p>Supprimé avec succès !</p>
            }
        </ul>
        </>
    )
}

export default RickAndMortyDetails;