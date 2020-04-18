import React, { useState, useEffect } from "react";
import axios from "axios";
import People from "./people"

const Characters = props => {

    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        axios
            .get ("https://swapi.py4e.com/api/people/")
                .then(res => {
                    console.log(res);
                        setCharacters(res.data.results);
            })
                .catch(error => {
                    console.log("The Force was Not With you!!", error);
                });
    },[])

    console.log(characters);

    return (
        <div>
            {characters.map(character => {
               return (<People 
                // key = {character.url} 
                name ={character.name}
                home ={character.homeworld} 
                species ={character.species}
                />);
            })}
        </div>
    );

};

export default Characters;