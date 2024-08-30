import {Link} from 'react-router-dom'
import {Component} from 'react'
import './index.css'

class Header extends Component {
  state = {searchInput: ''}
  onChangesearchInput = event => {
    this.setState({searchInput: event.target.value})
  }
  onclicktoLoad = () => {
    const {searchInput} = this.state
  }
  render() {
    const {searchInput} = this.state
    return (
      <>
        <nav className="navbar">
          <div className="nav">
            <h1 className="para">movieDB</h1>
          </div>
          <ul className="unorder">
            <li className="list-item">
              <Link className="link-item" to="/">
                <p className="nag">Popular</p>
              </Link>
            </li>

            <li className="list-item">
              <Link className="link-item" to="/top-rated">
                <p className="nag">Top Rated</p>
              </Link>
            </li>

            <li className="list-item">
              <Link className="link-item" to="/upcoming">
                <p className="nag">Upcoming</p>
              </Link>
            </li>
            <li className="list-item">
              <form onSubmit={this.onclicktoLoad}>
                <input
                  type="search"
                  id="searchone"
                  className="input"
                  onChange={this.onChangesearchInput}
                  value={searchInput}
                />
                <label htmlFor="searchone" className="label">
                  <button className="buttonsearch" type="submit">
                    Search
                  </button>
                </label>
              </form>
            </li>
          </ul>
        </nav>
      </>
    )
  }
}
export default Header
