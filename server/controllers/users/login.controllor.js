import { readFileSync } from "fs";

import bcrypt from "bcryptjs";

export const Login = async (req, res) => {
  const { email, password } = req.body;
  console.log(email, password);

  if (!email || !password) {
    res.status(400).send("invalid inputs");
    return;
  }

  const JsonResult = await readFileSync("./db.json", "utf-8");
  const db = JSON.parse(JsonResult);

  const foundUser = db.users.find((el) => el.email === email);

  if (!foundUser) {
    res.status(400).send("Burtgelgui email bn");
    return;
  }
  const passwordMatch = await bcrypt.compare(password, foundUser.password);

  if (!passwordMatch) {
    res.status(400).send("Password wrong");
    return;
  }

  res.status(200).send("SuccessFully Login");
};
