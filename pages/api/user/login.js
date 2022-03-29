/* eslint-disable import/no-anonymous-default-export */
import Login from "../../../models/Login";
import dbConnect from "../../../utils/dbConnect";

dbConnect();

export default async (req, res) => {
  const { method } = req;

  switch (method) {
    case "GET":
      try {
        const loginAllUser = await Login.find({});

        res.status(200).json({ success: true, data: loginAllUser });
      } catch (err) {
        res.status(400).json({ success: false });
      }
      break;

    case "POST":
      try {
        const loginUser = await Login.create(req.body);

        res.status(201).json({ success: true, data: loginUser });
      } catch (error) {
        res.status(400).json({ success: false });
      }
    default:
      res.status(400).json({ success: false });
      break;
  }
};
