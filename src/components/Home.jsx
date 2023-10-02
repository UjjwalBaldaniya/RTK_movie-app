import React, { useEffect } from 'react'
import { getMovieData } from '../api/allApi'
import { useDispatch } from 'react-redux'
import { addMovies } from '../redux/slice/movieSlice'
import MovieDashboard from './MovieDashboard'

const Home = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    getMovieData()
      .then((res) => {
        console.log(res.data)
        dispatch(addMovies(res.data))
      }).catch((error) => {
        console.log(error)
      })
  }, [dispatch])

  return (
    <div>
      <h1>Home</h1>
      <MovieDashboard />
    </div>
  )
}

export default Home