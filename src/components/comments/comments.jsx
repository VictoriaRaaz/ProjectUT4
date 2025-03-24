import { useEffect, useState } from 'react';
import './Review.css';
import reviewsService from '../../services/reviews/reviewsService';

function Review() {
    const [reviews, setReviews] = useState([]);

    const findAllReviews = () => {
        let allReviews = [];
        commentsService.getAllReviews()
            .then((res) => {
                res.forEach((d) => {
                    const key = d.key;
                    const data = d.val();
                    allReviews.push({
                        key: key,
                        name: data.name,
                        review: data.review,
                        value: data.value
                    });
                });

                setReviews([...allReviews]);
            })
            .catch((e) => {
                console.log(e);
            });
    };

    useEffect(() => {
        findAllReviews();
    }, []);

    return (
        <div className="reviews-container">
            {reviews.map((review, index) => (
                <div className="review" key={index}>
                    <h3>{review.name}</h3>
                    <p>{review.review}</p>
                    <p>Rating: {review.value}</p>
                </div>
            ))}
        </div>
    );
}

export default Review;