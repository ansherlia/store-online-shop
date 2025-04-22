import User from "../../../../../models/User";
import { hashPassword } from "../../../../../utils/auth";
import connectDB from "../../../../../utils/connectDB";

export async function POST(request) {
  try {
    await connectDB();
    const body = await request.json();
    const { email, password } = body;
    if (!email || !password)
      return new Response(
        JSON.stringify({ error: "Please completed the field!" }, { error: 427 })
      );

    const hash = await hashPassword(password);

    const userExist = await User.findOne({ email });
    if (userExist)
      return new Response(
        JSON.stringify({ error: "User already exist!" }, { status: 422 })
      );

    const newUser = await User.create({ email, password: hash });

    return new Response(
      JSON.stringify({ message: "User created successfully." }, { status: 201 })
    );
  } catch (error) {
    console.log(error);
    return new Response(
      JSON.stringify({ error: "Error connecting to DB!" }, { status: 500 })
    );
  }
}
