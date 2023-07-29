import {Component} from 'react'

import Loader from 'react-loader-spinner'

import Header from '../Header'

import MoviesList from '../MoviesList'

import './index.css'

const apiStatusConstants = {
  initial: 'INITIAL',
  inProgress: 'INPROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class Movies extends Component {
  state = {
    moviesList: [],
    category: 'movies',
    language: 'kannada',
    genre: 'all',
    sort: 'voting',
    apiStatus: apiStatusConstants.initial,
  }

  componentDidMount() {
    this.getData()
  }

  getData = async () => {
    this.setState({
      apiStatus: apiStatusConstants.inProgress,
    })

    const {category, language, genre, sort} = this.state
    const detailsData = {category, language, genre, sort}

    const url = 'https://hoblist.com/api/movieList'
    const options = {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(detailsData),
    }
    const response = await fetch(url, options)
    if (response.ok) {
      const data = await response.json()
      console.log(data)
      const fetchedData = data.result.map(each => ({
        title: each.title,
        genre: each.genre,
        director: each.director,
        stars: each.stars,
        language: each.language,
        poster: each.poster,
        id: each.id,
        totalVoted: each.totalVoted,
      }))
      this.setState({
        moviesList: fetchedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({
        apiStatus: apiStatusConstants.failure,
      })
    }
  }

  onClickShowDetails = () => {
    this.setState(prevState => ({
      showDetails: !prevState.showDetails,
    }))
  }

  renderDetails = () => {
    const {moviesList} = this.state
    return (
      <div className="movie-container">
        <h1 className="movies-text"> Movies</h1>
        <div className="movie-card">
          <ul className="movies-lists">
            {moviesList.map(each => (
              <MoviesList key={each.id} eachItem={each} />
            ))}
          </ul>
        </div>
      </div>
    )
  }

  getLoaderView = () => (
    <div className="loader-container">
      <Loader type="ThreeDots" color="#f50ce0" height="50" width="50" />
    </div>
  )

  renderFailure = () => (
    <div>
      <h1> Oops! Something Went Wrong </h1>
      <p> We cannot seem to find the page you are looking for </p>
    </div>
  )

  getMoviesData = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderDetails()
      case apiStatusConstants.failure:
        return this.renderFailure()
      case apiStatusConstants.inProgress:
        return this.getLoaderView()

      default:
        return null
    }
  }

  render() {
    return (
      <>
        <Header />
        {this.getMoviesData()}
      </>
    )
  }
}

export default Movies
