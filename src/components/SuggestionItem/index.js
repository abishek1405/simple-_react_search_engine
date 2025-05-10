// Write your code here
import {Component} from 'react'
import './index.css'

class Suggestions extends Component {
  render() {
    const {suggestionsList, onChange} = this.props
    const onCclick = () => {
      onChange(suggestionsList.id)
    }
    return (
      <li className="list">
        <p>{suggestionsList.suggestion}</p>
        <img
          className="arrow_img"
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          alt="arrow"
          onClick={onCclick}
        />
      </li>
    )
  }
}
export default Suggestions
