/* eslint-disable import/no-anonymous-default-export */
import Register from "../../../models/Register";
import dbConnect from "../../../utils/dbConnect";

dbConnect();

export default async (req, res) => {
  const { method } = req;

  switch (method) {
    case "GET":
      try {
        const registerAllUser = await Register.find({});

        res.status(200).json({ success: true, data: registerAllUser });
      } catch (err) {
        res.status(400).json({ success: false });
      }
      break;

    case "POST":
      try {
        const registerUser = await Register.create(req.body);

        res.status(201).json({ success: true, data: registerUser });
      } catch (error) {
        res.status(400).json({ success: false });
      }
    default:
      res.status(400).json({ success: false });
      break;
  }
};
