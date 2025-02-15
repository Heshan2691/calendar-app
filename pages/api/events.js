import dbConnect from "../../utils/dbConnect";
import Event from "../../models/Event";

export default async function handler(req, res) {
  await dbConnect();

  if (req.method === "GET") {
    const events = await Event.find({});
    res.status(200).json(events);
  } else if (req.method === "POST") {
    const newEvent = await Event.create(req.body);
    res.status(201).json(newEvent);
  } else if (req.method === "DELETE") {
    await Event.findByIdAndDelete(req.body.id);
    res.status(204).end();
  }
}
