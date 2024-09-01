import bcrypt from "bcryptjs";

export const hashPass = (text: string): string => {
  return bcrypt.hashSync(text);
};

export const comparePass = (text: string, hashed: string): boolean => {
  return bcrypt.compareSync(text, hashed);
};
