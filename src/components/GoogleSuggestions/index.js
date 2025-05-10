// Write your code here
import {Component} from 'react'
import './index.css'
import Suggestions from '../SuggestionItem'

class GoogleSuggestions extends Component {
  state = {
    search: '',
  }

  onChange = event => {
    this.setState({search: event.target.value})
  }

  onChangee = x => {
    const {suggestionsList} = this.props
    const data = suggestionsList.find(each => each.id === x)
    if (data) {
      this.setState({search: data.suggestion})
    }
  }

  render() {
    const {suggestionsList} = this.props
    const {search} = this.state
    const filterDate = suggestionsList.filter(each =>
      each.suggestion.toLowerCase().includes(search.toLowerCase()),
    )
    return (
      <div className="main">
        <img
          className="google"
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
          alt="google logo"
          id="search_id"
        />
        <div className="search_Container">
          <div className="search_Container2">
            <img
              className="google_img"
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
              alt="search icon"
            />
            <input
              type="search"
              className="input"
              placeholder="Search Google"
              onChange={this.onChange}
              value={search}
            />
          </div>
        </div>
        <ul className="search_Container3">
          {filterDate.map(each => (
            <Suggestions
              key={each.id}
              onChange={this.onChangee}
              suggestionsList={each}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default GoogleSuggestions
