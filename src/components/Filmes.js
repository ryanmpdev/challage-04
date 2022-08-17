import React, { Component } from "react";
import axios from "axios";

// API_KEY: 149cb29a9989496e3860cfb507d0bbd5
// https://api.themoviedb.org/3/movie/popular?api_key=<<api_key>>&language=en-US&page=1




// https://api.themoviedb.org/3/movie/popular?api_key=149cb29a9989496e3860cfb507d0bbd5&language=en-US&page=1


const filmesAPI = axios.create({
    baseURL:" https://api.themoviedb.org/3/movie/popular?api_key=149cb29a9989496e3860cfb507d0bbd5&language=en-US&page=1"
})

export default class Filmes extends Component{

    state = {
        filmes: []
    }

    componentDidMount(){
     this.getShow()
    }
     
    getShow = async () =>{
        const {data:{results}} = await filmesAPI.get()
        
        const filmes = results.map(item =>{
            return{
                image:`https://image.tmdb.org/t/p/w500/${item.poster_path}`,
                name: item.title,
                sinopse: item.overview,
                id: item.id
            }
        })
        
        this.setState({filmes})

        console.log(filmes)
    }


   render(){
    return(
        <div>
            <ul>{this.state.filmes.map(item => (
                
                <li key={item.id}>
                    <img src={item.image} alt={item.name} />
                    {item.name}
                     <p>{item.sinopse}</p></li>
                
            ))}
            </ul>
        </div>
    )
   }
}
