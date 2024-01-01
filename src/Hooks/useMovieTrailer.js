import { addTrailerVideo } from "../utils/movieSlice"
import { useDispatch } from "react-redux"
import { useEffect } from "react"
import { API_OPTIONS } from "../utils/constants"


const useMovieTrailer = (movieID) => {

    const dispatch = useDispatch()


    // getting the video trailer data from API
    const getMovieVideos = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/' + movieID + '/videos?language=en-US', API_OPTIONS)

        const json = await data.json()
        console.log("get movie videos ", json)

        const filterData = json.results.filter(video => video.type == 'Trailer')
        const trailer = filterData.length ? filterData[0] : json.results[0]
        console.log(trailer)
        dispatch(addTrailerVideo(trailer))


    }

    useEffect(() => {
        getMovieVideos()

    }, [])

}
export default useMovieTrailer