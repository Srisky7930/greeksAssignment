import {AiFillCaretUp, AiFillCaretDown} from 'react-icons/ai'

import './index.css'

const MovieList = props => {
  const {eachItem} = props
  const {poster, title, genre, director, stars, language, totalVoted} = eachItem
  console.log(totalVoted)

  return (
    <li className="list-card">
      <div className="voter-card">
        <div className="votes-container">
          <div>
            <AiFillCaretUp className="icons" />
          </div>
          <div>
            <h1> {totalVoted} </h1>
          </div>
          <div>
            <AiFillCaretDown className="icons" />
          </div>
          <h1 className="votes-text"> Votes </h1>
        </div>
        <div className="details-card">
          <div>
            <img src={poster} alt="poster" className="poster-image" />
          </div>
          <div className="details-names">
            <h1 className="title"> {title} </h1>
            <p className="genre"> Genre: {genre} </p>
            <p className="director">Director: {director} </p>
            <p className="star-text">Starring: {stars}</p>
            <p className="language"> {language} </p>
          </div>
        </div>
      </div>
      <button type="button" className="watch-trailer">
        Watch Trailer
      </button>
    </li>
  )
}

export default MovieList
