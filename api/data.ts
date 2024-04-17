import axios from "axios";

export default async function handler(req, res) {
  try {
    const response = await axios.post(
      "https://api.tokenguard.io/db-api/growth-index/basic-timeline-data",
      req.body
    );
    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
}
