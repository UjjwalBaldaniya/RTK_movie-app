import createApi from "./createApi"

const getMovieData = () => {
    return createApi.get(`?apikey=efa5a1e&s=titanic&type=movie`)
}

export { getMovieData }