import { comparePass } from "@/db/helpers/bcrypt";
import { signToken } from "@/db/helpers/jwt";
import { getUserByEmail } from "@/db/models/user";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const User = z.object({
  email: z.string().email(),
  password: z.string().min(5),
});

export async function POST(request: NextRequest) {
  try {
    const body: { email: string; password: string } = await request.json();
    const validation = User.safeParse(body);
    if (!validation.success) {
      throw validation.error;
    }
    const user = await getUserByEmail(body.email);
    if (!user) {
      throw { name: "Unauthorized" };
    }
    const isValid = comparePass(body.password, user.password);
    if (!isValid) {
      throw { name: "Unauthorized" };
    }
    const access_token = signToken({
      _id: user._id,
      email: user.email,
    });
    const response = NextResponse.json({
      access_token,
    });
    response.cookies.set("Authorization", `Bearer ${access_token}`);
    return response;
  } catch (err: any) {
    if (err instanceof z.ZodError) {
      const errPath = err.issues[0].path[0];
      const errMessage = err.issues[0].message;
      return NextResponse.json(
        {
          message: `${errPath} ${errMessage}`,
        },
        { status: 400 }
      );
    }
    if (err.name === "Unauthorized") {
      return NextResponse.json(
        {
          message: "Invalid email and password",
        },
        { status: 401 }
      );
    }
    return NextResponse.json(
      {
        message: "Internal Server Error",
      },
      { status: 500 }
    );
  }
}
