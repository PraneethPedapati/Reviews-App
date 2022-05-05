import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  state = {index: 0}

  getReview = reviewsList => {
    const {imgUrl, username, companyName, description} = reviewsList
    return (
      <div className="review-carousel">
        <img src={imgUrl} alt={username} />
        <p className="username">{username}</p>
        <p className="company-name">{companyName}</p>
        <p className="description">{description}</p>
      </div>
    )
  }

  previousReview = () => {
    const {index} = this.state
    if (index > 0) this.setState(prevState => ({index: prevState.index - 1}))
  }

  nextReview = () => {
    const {index} = this.state
    const {reviewsList} = this.props
    if (index < reviewsList.length - 1) this.setState({index: index + 1})
  }

  render() {
    const {reviewsList} = this.props
    const {index} = this.state
    const listLength = reviewsList.length

    console.log(index, listLength)

    return (
      <div className="bg-container">
        <h1 className="heading">Reviews</h1>
        <div className="carousel-container">
          <button
            type="button"
            className="arrow-button"
            testid="leftArrow"
            onClick={this.previousReview}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              alt="left arrow"
            />
          </button>
          {this.getReview(reviewsList[index])}
          <button
            type="button"
            className="arrow-button"
            testid="rightArrow"
            onClick={this.nextReview}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              alt="right arrow"
            />
          </button>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
