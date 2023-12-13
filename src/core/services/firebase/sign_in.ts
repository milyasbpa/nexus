import { signInWithEmailAndPassword } from "firebase/auth";
import { FirebaseAuth } from ".";
import { SignInFirebaseRequestBodyInterface } from "@/core/models/firebase";

export const signInWithEmailAndPasswordFirebase = async (
  payload: SignInFirebaseRequestBodyInterface
) => {
  return await signInWithEmailAndPassword(
    FirebaseAuth,
    payload.email,
    payload.password
  )
    .then((res) => res)
    .catch((err: any) => {
      throw err;
    });
};
