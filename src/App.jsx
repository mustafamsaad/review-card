import star from "./assets/Star 4.svg";
import search from "./assets/Frame.svg";
import reviews from "./data/reviews.json";

const total = reviews.length;
const stars = [5, 4, 3, 2, 1];
console.log(reviews);

const numberOfMatchingReviews = (star) =>
  reviews.reduce((acc, cur) => (cur.rating === star ? (acc += 1) : acc), 0);

const averageReview = reviews.reduce((acc, cur) => acc + cur.rating, 0);

const App = () => {
  return (
    <div className="card">
      <header>
        <h2>What others think about the product</h2>
        <div className="summary">
          <div>
            <img src={star} alt="star" />
            <span>{(averageReview / total).toFixed(1)}</span>
          </div>
          <p>Average customer rating</p>
        </div>
      </header>
      <form className="search">
        <input
          type="search"
          id="review-search"
          name="review-search"
          placeholder="Search topics and reviews"
        />
        <button type="submit" aria-label="Run search">
          <img src={search} alt="search" />
        </button>
      </form>
      <div className="reviews">
        <p>
          <strong>Reviews</strong>
        </p>
        <div className="reviews-container">
          {stars.map((s) => (
            <div className="review" key={s}>
              <div className="rating">
                <strong>{s}</strong>
                <img src={star} alt="star" width={25} height={25} />
              </div>
              <progress
                max={total}
                value={reviews.filter((r) => r.rating === s).length}
              >
                {`${(numberOfMatchingReviews(s) / total) * 100}%`}
              </progress>
              <p>{numberOfMatchingReviews(s)}</p>
            </div>
          ))}
        </div>
      </div>
      <button className="btn" type="button">
        Write a review
      </button>
    </div>
  );
};

export default App;
