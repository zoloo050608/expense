import { writeFileSync, readFileSync } from "fs";
import { v4 as uuid } from "uuid";
import bcrypt from "bcryptjs";
import { sql } from "../../database/index.js";
import env from "dotenv";

env.config();

export const SignUp = async (req, res) => {
  const { username, email, password } = req.body;

  const exist = await sql`SELECT * FROM users where email=${email}`;
  console.log(exist);

  // if (!username || !email || !password) {
  //   res.send("invalid inputs").status(400);
  //   return;
  // }

  // const userId = uuid();
  // const JsonResult = await readFileSync("./db.json", "utf-8");
  // const db = JSON.parse(JsonResult);

  // const foundUser = db.users.find((el) => el.email === email);

  if (exist.length > 0) {
    res.status(400).send("Already Registered Email");
    return;
  }

  const hashedPassword = await bcrypt.hashSync(
    password,
    Number(process.env.SALT)
  );

  // db.users.push({
  //   userId,
  //   username,
  //   email,
  //   password: hashedPassword,
  // });
  // await writeFileSync("./db.json", JSON.stringify(db), "utf-8");
  const createdat = new Date();
  const updatedat = new Date();
  const userId = uuid();

  const result =
    await sql`INSERT INTO users(userId, username, email, password, createdat, updatedat) VALUES(${userId},${username},${email},${hashedPassword},${createdat}, ${updatedat})`;

  res.send("SuccessFully Created the user");
};
