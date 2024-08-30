import {Component} from 'react'
import Header from '../Header'
import './index.css'

class Upcoming extends Component {
  state = {upComingMovieList: []}
  componentDidMount() {
    this.getUpcomingmovies()
  }
  getUpcomingmovies = async () => {
    const apiUrl =
      'https://api.themoviedb.org/3/movie/upcoming?api_key=5577a34f55073a4bebf294d54e5449cc&language=en-US&page=1'
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
      this.setState({upComingMovieList: updatedData})
    } else {
      console.log('Error retrieving data')
    }
  }

  renderupcomingmovies = () => {
    const {upComingMovieList} = this.state
    return (
      <>
        <ul className="list-container">
          {upComingMovieList.map(each => (
            <li className="list-popular" key={each.id}>
              <div className="poster">
                <img
                  src={`https://image.tmdb.org/t/p/w92${each.posterPath}`}
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
  render() {
    return (
      <>
        <div className="bgcontainer">
          <Header />
          {this.renderupcomingmovies()}
        </div>
      </>
    )
  }
}
export default Upcoming
