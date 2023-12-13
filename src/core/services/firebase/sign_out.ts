import { signOut } from "firebase/auth";
import { FirebaseAuth } from "@/core/config/firebase";

export const signOutFirebase = async () => {
  await signOut(FirebaseAuth);
};
