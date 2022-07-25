// let myfavCollection;

// export default class MyFavDAO {

//     static async injectDB(conn) {
//         if (myfavCollection) {
//             return;
//         }
//         try {
//             myfavCollection = await conn.db(process.env.MOVIEREVIEWS_NS)
//                 .collection('myfav');
//         } catch (e) {
//             console.error(`Unable to connect in myfavDAO: ${e}`);
//         }
//     }

//     static async updateMyfav(userId, favorites) {
//         try {
//             const updateResponse = await myfavCollection.updateOne({ _id: userId }, { $set: { favorites: favorites } }, { upsert: true })
//             return updateResponse;
//         } catch (e) {
//             console.log(`Unable to update myfav: ${e}`);
//             return { error: e };
//         }
//     }

//     static async getMyfav(id) {
//         let cursor;
//         try {
//             cursor = await myfavCollection.find({
//                 _id: id
//             });
//             const favorites = await cursor.toArray();
//             return favorites[0];
//         } catch (e) {
//             console.error(`Something went wrong in myfav: ${e}`);
//             throw e;
//         }
//     }
// }