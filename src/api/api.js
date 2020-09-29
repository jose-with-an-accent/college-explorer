class TMDBApi {
    constructor() {
    }
    searchMovieWithTitle(searchTerm) {
        let results = {}
        const baseUrl = `https://api.themoviedb.org/3/search/movie?api_key=a14dfef12046c0910a5fc5367d18b5ab&language=en-US&query=${searchTerm}&page=1&include_adult=false`
        fetch(baseUrl).then(resp => resp.json()).then(val => {console.log(val); results = val; return val})
        return results
    }
}