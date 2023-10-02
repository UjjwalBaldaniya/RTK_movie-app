import React from 'react'
import { useSelector } from 'react-redux'
import { getAllMovies } from '../redux/slice/movieSlice'

const MovieDashboard = () => {
    const selector = useSelector(getAllMovies)
    console.log(selector)

    return (
        <div>
            {selector.Search && selector.Search.map((element, index) => (
                <div key={index}>
                    <p>{element.Title}</p>
                </div>
            ))}
        </div>
    )
}

export default MovieDashboard