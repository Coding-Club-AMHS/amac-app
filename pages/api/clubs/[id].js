import { ObjectID } from "bson";
import { connectToDatabase } from "../../../util/db";

export default async function handler(req, res) {
    const { query: { id }, method } = req;
    const objectID = new ObjectID(id);
    const { client } = await connectToDatabase();

    switch (method) {
        case 'GET':
            try {
                const club = await client
                    .db("authdb")
                    .collection("clubs")
                    .findOne({ _id: objectID });
                res.status(200).json({ success: true, data: club });
            } catch (error) {
                res.status(400).json({ success: false });
            }
            break;
        case 'PUT':
            try {
                const club = await client
                    .db('authdb')
                    .collection('clubs')
                    .findOneAndUpdate(
                        { _id: objectID },
                        { $set: req.body },
                        {});
                if (!club) {
                    return res.status(400).json({ success: false });
                }
                res.status(200).json({ success: true, data: club });
            } catch (error) {
                console.log(error);
                res.status(400).json({ success: false });
            }
            break;
        case 'DELETE':
            try {
                const deletedClub = await client
                    .db('authdb')
                    .collection('clubs')
                    .deleteOne({ _id: objectID });
                if (!deletedClub) {
                    return res.status(400).json({ success: false });
                }
                res.status(200).json({ success: true, data: {} });
            } catch (error) {
                res.status(400).json({ success: false });
            }
            break;
        default:
            res.status(400).json({ success: false });
            break;
    }
}