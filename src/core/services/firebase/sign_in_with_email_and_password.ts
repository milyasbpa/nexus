import { signInWithEmailAndPassword } from "firebase/auth";
import { SignInFirebaseRequestBodyInterface } from "@/core/models/firebase";
import { FirebaseAuth } from "@/core/config/firebase";

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
