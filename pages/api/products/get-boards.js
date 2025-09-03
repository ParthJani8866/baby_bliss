// pages/api/get-boards.js
import axios from "axios";

export default async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    const accessToken = "8bf9968e07cdc072b7cb6e72b77c274670ce4158"; // store in .env

    const response = await axios.get("https://api.pinterest.com/v5/boards", {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    // response.data.items contains all boards
    const boards = response.data.items.map((board) => ({
      id: board.id,
      name: board.name,
      url: board.url,
    }));

    res.status(200).json({ boards });
    console.log(boards);
    
  } catch (error) {
    console.error(error.response?.data || error.message);
    res.status(500).json({ error: error.response?.data || error.message });
  }
}
