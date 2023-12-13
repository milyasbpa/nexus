import { createUserWithEmailAndPassword } from "firebase/auth";
import { FirebaseAuth } from "../../config/firebase/config";

export const createUserWithEmailAndPasswordFirebase = async (
  email: string,
  password: string
) => {
  await createUserWithEmailAndPassword(FirebaseAuth, email, password);
};
