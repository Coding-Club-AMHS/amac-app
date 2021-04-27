import { connectToDatabase } from "../../util/db";

export default async function handler(req, res) {
    const { method } = req;
    const { client } = await connectToDatabase();

    switch (method) {
        case 'GET':
            try {
                const announcements = await client
                    .db("authdb")
                    .collection("announcements")
                    .find({})
                    .toArray();
                res.status(200).json({ success: true, data: announcements })
            } catch (error) {
                res.status(400).json({ success: false })
            }
            break;
        case 'POST':
            try {
                const announcements = await client
                    .db("authdb")
                    .collection("announcements")
                    .insert(req.body);
                res.status(200).json({ success: true, data: announcements })
            } catch (error) {
                console.log(error);
                res.status(400).json({ success: false })
            }
            break;
        default:
            res.status(400).json({ success: false })
            break
    }

}