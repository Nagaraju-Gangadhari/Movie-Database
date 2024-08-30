//https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${MOVIE_NAME}&page=1

import {Header} from '../Header'
import {Component} from 'react'

class Search extends Component {
  state = {searchMovieList: []}
  componentDidMount() {
    this.getSearchmovies()
  }
  getSearchmovies = async () => {
    const apiUrl =
      'https://api.themoviedb.org/3/search/movie?api_key=5577a34f55073a4bebf294d54e5449cc&language=en-US&query=${MOVIE_NAME}&page=1'
    const options = {
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    if (response.ok) {
      const fetchedData = await response.json()
      const updatedData = fetchedData.results.map(each => ({
        adult: each.adult,
        backdropPath: each.backdrop_path,
        genreId: each.genre_ids,
        id: each.id,
        originalLanguage: each.original_language,
        originalTitle: each.original_title,
        overView: each.overview,
        popularity: each.popularity,
        posterPath: each.poster_path,
        releaseDate: each.release_date,
        title: each.title,
        video: each.video,
        voteAverage: each.vote_average,
        voteCount: each.vote_count,
      }))
      this.setState({popularMovieList: updatedData})
      console.log(fetchedData)
    } else {
      console.log('Error retrieving data')
    }
  }

  rendersearchmovies = () => {
    const {searchMovieList} = this.state
    return (
      <>
        <ul className="list-container">
          {popularMovieList.map(each => (
            <li className="list-popular" key={each.id}>
              <div className="poster2">
                <img
                  src={`https://image.tmdb.org/t/p/original${each.posterPath}`}
                  className="image"
                  alt={each.title}
                />
                <h1 className="head2">{each.title}</h1>
                <p className="para2">{each.voteAverage}</p>
                <button className="button2">View Details</button>
              </div>
            </li>
          ))}
        </ul>
      </>
    )
  }
}
export default Search
