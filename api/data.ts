import axios from "axios";

export default async function handler(req, res) {
  try {
    const response = await axios.get(
      "https://api.tokenguard.io/db-api/growth-index/basic-timeline-data",
      {
        params: req.query,
      }
    );
    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
}
