import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { FirebaseAuth } from "@/core/config/firebase";

export const signInWithPopupFirebase = async () => {
  const provider = new GoogleAuthProvider();
  return await signInWithPopup(FirebaseAuth, provider)
    .then((res) => {
      const credential = GoogleAuthProvider.credentialFromResult(res);
      const token = credential?.accessToken;
      console.log(token, res, "ini token");
      return res;
    })
    .catch((err: any) => {
      throw err;
    });
};
