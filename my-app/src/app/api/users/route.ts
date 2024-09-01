import { createUser } from "@/db/models/user";
import { z } from "zod";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsedData = z
      .object({
        name: z.string(),
        username: z.string(),
        email: z.string(),
        password: z.string(),
      })
      .safeParse(body);
    if (!parsedData.success) {
      throw parsedData.error;
    }
    const user = await createUser(body);
    return Response.json(user, {
      status: 201,
    });
  } catch (err) {
    if (err instanceof z.ZodError) {
      const errrPath = err.issues[0].path[0];
      const errMessage = err.issues[0].message;
      return Response.json(
        {
          error: {
            message: `${errrPath} ${errMessage}`,
          },
        },
        {
          status: 400,
        }
      );
    }
    return Response.json(
      {
        message: "Internal Server Error",
      },
      {
        status: 500,
      }
    );
  }
}
