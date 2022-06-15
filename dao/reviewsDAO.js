import mongodb from "mongodb";
const ObjectId = mongodb.ObjectId;

let reviews;

export default class ReviewsDAO {
    static async injectDB(conn) {
        if (reviews) {
            return;
        }
        try {
            reviews = await conn.db(process.env.MOVIEREVIEWS_NS).collection('reviews');
        } catch (e) {
            console.error(`Unable to establish connection handle in reviewsDA: ${e}`);
        }
    }

    static async addReview(movieId, user, review, date) {
        try {
            const reviewDoc = {
                name: user.name,
                user_id: user._id,
                date: date,
                review: review,
                movie_id: ObjectId(movieId)
            }
            return await reviews.insertOne(reviewDoc);
        } catch (e) {
            console.error(`Unable to post review: ${e}`);
            return { error: e };
        }
    }

    static async updateReview(reviewId, userId, review, date) {
        try {
            const review_id = {
                reviewId: ObjectId(reviewId),
            }
            const reviewDoc = {
                $set: {
                    user_id: userId,
                    date: date,
                    review: review
                }
            }
            return await reviews.updateOne(review_id, reviewDoc, { upsert: true });
        } catch (e) {
            console.error(`Unable to update review: ${e}`);
            return { error: e };
        }
    }

    static async deleteReview(reviewId, userId) {
        try {
            const review_id = {
                reviewId: ObjectId(reviewId),
            }
            const user_id = {
                $set: {
                    user_id: userId,
                }
            }
            return await reviews.deleteOne(review_id, user_id);
        } catch (e) {
            console.error(`Unable to update review: ${e}`);
            return { error: e };
        }
    }
}