const { hash, compare } = require("bcryptjs");

async function hashPassword(password) {
  const hashed = await hash(password, 12);
  return hashed;
}

async function verifyPassword(password, hashPass) {
  try {
    const verify = await compare(password, hashPass);
    return verify;
  } catch (error) {
    console.log(error);
  }
}

export { hashPassword, verifyPassword };
