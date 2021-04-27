import { ObjectID } from "bson";
import { connectToDatabase } from "../../../util/db";

export default async function handler(req, res) {
    const { query: { id }, method } = req;
    const objectID = new ObjectID(id);
    const { client } = await connectToDatabase();

    switch (method) {
        case 'GET':
            try {
                const announcement = await client
                    .db("authdb")
                    .collection("announcements")
                    .findOne({ _id: objectID });
                res.status(200).json({ success: true, data: announcement });
            } catch (error) {
                res.status(400).json({ success: false });
            }
            break;
        case 'PUT':
            try {
                const announcement = await client
                    .db('authdb')
                    .collection('announcements')
                    .findOneAndUpdate(
                        { _id: objectID },
                        { $set: req.body },
                        {});
                if (!announcement) {
                    return res.status(400).json({ success: false });
                }
                res.status(200).json({ success: true, data: announcement });
            } catch (error) {
                console.log(error);
                res.status(400).json({ success: false });
            }
            break;
        case 'DELETE':
            try {
                const deletedAnnouncement = await client
                    .db('authdb')
                    .collection('announcements')
                    .deleteOne({ _id: objectID });
                if (!deletedAnnouncement) {
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