const baseURL = 'https://api.themoviedb.org/3/'
const apiKey = '6372721a261515865d8aea96db693381'
const resourcesImgURL = 'https://image.tmdb.org/t/p/w500/'

export function getLatestMovies() {
    const year = new Date().getFullYear()
    const url = `${baseURL}discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&year=${year}&with_watch_monetization_types=flatrate`

    return fetch(url)
        .then((res) => res.json())
        .then(({ results }) =>
            results.slice(0, 8).map((movie) => ({
                poster_path: resourcesImgURL + movie.poster_path,
                id: movie.id,
                title: movie.title,
            }))
        )
        .catch((err) => new Error(err))
}
