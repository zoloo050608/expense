import { writeFileSync, readFileSync } from "fs";
import { v4 as uuid } from "uuid";
import bcrypt from "bcryptjs";

export const SignUp = async (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    res.send("invalid inputs").status(400);
    return;
  }

  const userId = uuid();
  const JsonResult = await readFileSync("./db.json", "utf-8");
  const db = JSON.parse(JsonResult);

  const foundUser = db.users.find((el) => el.email === email);

  if (foundUser) {
    res.status(400).send("Already Registered Email");
    return;
  }

  const hashedPassword = await bcrypt.hashSync(
    password,
    Number(process.env.SALT)
  );

  db.users.push({
    userId,
    username,
    email,
    password: hashedPassword,
  });
  await writeFileSync("./db.json", JSON.stringify(db), "utf-8");
  res.send("SuccessFully Created the user");
};
