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
                vote_average: movie.vote_average,
            }))
        )
        .catch((err) => new Error(err))
}
export function getNameCategories() {
    const categories = ['action', 'romance', 'comedy', 'kids', 'horror', 'thriller']
    return categories
}

export function getCodeCategories() {
    // code for kids not available because is not genrer in api
    const codes = {
        romance: '10749',
        action: '28',
        comedy: '35',
        horror: '27',
        thriller: '53',
    }

    // https://api.themoviedb.org/3/discover/movie?api_key=6372721a261515865d8aea96db693381&language=en-us&sort_by=popularity.desc&certification.lte=g&include_adult=false&include_video=false&page=1&year=2021&with_watch_monetization_types=flatrate
    return codes
}

export function getIconNamesClass() {
    const iconNames = {
        romance: 'ph-heart',
        action: 'ph-person-simple-run',
        comedy: 'ph-mask-happy',
        kids: 'ph-baby',
        horror: 'ph-skull',
        thriller: 'ph-detective',
    }
    return iconNames
}
export function getCategories() {
    const imgCategories = {
        action: 'tUkY0WxffPZ9PoyC62PIyyUMGnt.jpg',
        romance: 'dU4HfnTEJDf9KvxGS9hgO7BVeju.jpg',
        comedy: 'xmbU4JTUm8rsdtn7Y3Fcm30GpeT.jpg',
        kids: '30ULVKdjBcQTsj2aOSThXXZNSxF.jpg',
        horror: 'bXAVveHiLotZbWdg3PKGhAzxYKP.jpg',
        thriller: 'etMxKseW67499tUJonLNHXTF538.jpg',
    }

    const categories = getNameCategories()
    const resources = categories.map((category) => [category, resourcesImgURL + imgCategories[category]])
    return resources
}

export function getMoviesByCategory(category, page = 1) {
    let codeCategory
    let url
    if (category !== 'kids') {
        codeCategory = getCodeCategories()[category]
        url = `${baseURL}discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${codeCategory}&with_watch_monetization_types=flatrate`
    } else {
        url = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&certification.lte=G&include_adult=false&include_video=false&page=1&year=2021&with_watch_monetization_types=flatrate`
    }

    return fetch(url)
        .then((res) => res.json())
        .then((data) => data.results)
        .then((movies) =>
            movies.map((movie) => ({
                poster_path: resourcesImgURL + movie.poster_path,
                id: movie.id,
                title: movie.title,
                vote_average: parseFloat(movie.vote_average).toFixed(1),
            }))
        )
}
