const ApiKey = "83cd2bbefad7536af2430a6d052debf9"

const request = {
    fetchTrending : `/trending/all/week?api_key=${ApiKey}&language=en-US`,
    fetchNetflixOriginal : `/discover/tv?api_key=${ApiKey}&with_network=213`,
    fetchTopRated : `/movie/top_rated?api_key=${ApiKey}&language=en-US`,
    fetchAction : `/discover/movie?api_key=${ApiKey}&wit_genres=123`,
    fetchComedy : `/discover/movie?api_key=${ApiKey}&wit_genres=35`,
    fetchHorrer :`/discover/movie?api_key=${ApiKey}&wit_genres=27`,
    fetchRomance :`/discover/movie?api_key=${ApiKey}&wit_genres=10749`,
    fetchDiscoveries :`/discover/movie?api_key=${ApiKey}&wit_genres=99`,

}
    
export default request
