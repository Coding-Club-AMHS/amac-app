import { connectToDatabase } from "../../../util/db";

export default async function handler(req, res) {
    const { method } = req;
    const { client } = await connectToDatabase();

    switch (method) {
        case 'GET':
            try {
                const clubs = await client
                    .db("authdb")
                    .collection("clubs")
                    .find({})
                    .toArray();
                res.status(200).json({ success: true, data: clubs })
            } catch (error) {
                res.status(400).json({ success: false })
            }
            break;
        case 'POST':
            try {
                const clubs = await client
                    .db("authdb")
                    .collection("clubs")
                    .insert(req.body);
                res.status(200).json({ success: true, data: clubs })
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