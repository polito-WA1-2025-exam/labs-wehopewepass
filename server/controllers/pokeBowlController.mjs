import connectDB from "../dbConfig.mjs";

export const fetchBowls = async (req, res) => {
  const db = await connectDB();
  
  try {
    const items = await db.all("SELECT * FROM pokebowls");
    console.log(items);
    
    res.status(200).json(items);

  } catch (err) {
    console.error("Error Fetching Data:", err);

    res.status(500).json({ error: "Internal Server Error" }); 

  } finally {
    await db.close();
  }
};
