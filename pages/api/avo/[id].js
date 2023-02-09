import Database from "../../../database/db";
const avoById = async (req, res) => {
    const { id } = req.query;
    const data = await Database.getById(id);
    res.status(200).json(data);
};

export default avoById;