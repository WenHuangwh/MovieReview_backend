// import MyFavDAO from '../dao/myfavDAO.js';

// export default class MyfavController {
//     static async apiUpdateMyfav(req, res, next) {
//         try {
//             const FavoritesResponse = await MyFavDAO.updateMyfav(
//                 req.body._id,
//                 req.body.favorites
//             )

//             var { error } = FavoritesResponse;
//             if (error) {
//                 res.status(500).json({ error });
//             }
//             res.json({ status: "success" });
//         } catch (e) {
//             res.status(500).json({ error: e.message });
//         }
//     }

//     static async apiGetMyfav(req, res, next) {
//         try {
//             let id = req.params.userId;
//             let favorites = await MyFavDAO.getMyfav(id);
//             if (!favorites) {
//                 res.status(404).json({ error: "not found" });
//                 return;
//             }
//             res.json(favorites);
//         } catch (e) {
//             console.log(`API, ${e}`);
//             res.status(500).json({ error: e });
//         }
//     }
// }