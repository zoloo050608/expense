import { sql } from "../../database/index.js";
import { v4 as uuid } from "uuid";

export const testController = async (req, res) => {
  const { username, email, password } = req.body;
  const createdat = new Date();
  const updatedat = new Date();

  const result =
    await sql`INSERT INTO users(username, email, password, createdat, updatedat) VALUES(${username},${email},${password},${createdat}, ${updatedat})`;

  // const result = await sql`SELECT * FROM users`;
  // console.log(result);

  res.send("success");
};
