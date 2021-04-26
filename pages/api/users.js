import { connectToDatabase } from "../../util/db";

export default async (req, res) => {
    const {db} = await connectToDatabase();

    const users = await db
    .collection("users")
    .find({})
    .toArray();

    res.json(users);
}