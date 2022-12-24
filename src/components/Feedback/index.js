// Write your React code here.
import {Component} from 'react'

import './index.css'

class Feedback extends Component {
  state = {
    isEmojiClicked: false,
  }

  onClickEmoji = () => {
    this.setState({isEmojiClicked: true})
  }

  renderFeedbackQuestion = () => {
    const {resources} = this.props
    const {emojis} = resources

    return (
      <div className="feedback-question-container">
        <h1 className="question">
          How satisfied are you with our customer support performance?
        </h1>
        <ul className="emojis-list">
          {emojis.map(eachEmoji => (
            <li key={eachEmoji.id}>
              <button
                className="emoji-button"
                type="button"
                onClick={this.onClickEmoji}
              >
                <img
                  src={eachEmoji.imageUrl}
                  alt={eachEmoji.name}
                  className="emoji-img"
                />
                <br />
                <span className="emoji-name">{eachEmoji.name}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    )
  }

  renderThankyouScreen = () => {
    const {resources} = this.props
    const {loveEmojiUrl} = resources

    return (
      <div className="thank-you-container">
        <img src={loveEmojiUrl} alt="love emoji" className="love-emoji" />
        <h1 className="thanku">Thank You!</h1>
        <p className="thanku-msg">
          We will use your feedback to improve our customer support performance.
        </p>
      </div>
    )
  }

  render() {
    const {isEmojiClicked} = this.state

    return (
      <div className="app-container">
        <div className="feedback-card">
          {isEmojiClicked
            ? this.renderThankyouScreen()
            : this.renderFeedbackQuestion()}
        </div>
      </div>
    )
  }
}
export default Feedback
