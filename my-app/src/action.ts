// ? ini create User dipisah

"use server";

import { BASE_URL } from "./constants";

interface PropsFormDataUser {
  name: FormDataEntryValue | null;
  username: FormDataEntryValue | null;
  email: FormDataEntryValue | null;
  password: FormDataEntryValue | null;
}

export const createUserAction = async (rawFormData: PropsFormDataUser) => {
  const res = await fetch(BASE_URL + "/api/users", {
    method: "POST",
    body: JSON.stringify(rawFormData),
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const addWishlistAction = async (productId: string) => {
  const res = await fetch(BASE_URL + `/api/wishlist/${productId}`, {
    method: "POST",
    body: JSON.stringify(productId),
    headers: {
      "Content-Type": "application/json",
    },
  });
};
