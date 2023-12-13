import { NextApiRequest, NextApiResponse } from "next";

export interface SignInFirebaseRequestInterface extends NextApiRequest {
  body: SignInFirebaseRequestBodyInterface;
}
export interface SignInFirebaseRequestBodyInterface {
  email: string;
  password: string;
}

export interface SignInFirebaseResponseInterface
  extends NextApiResponse<
    | SignInFirebaseSuccessResponseInterface
    | SignInFirebaseErrorResponseInterface
  > {}
export interface SignInFirebaseSuccessResponseInterface {
  success: boolean;
  token: string;
  message: string;
}

export interface SignInFirebaseErrorResponseInterface {
  error_code: string;
  message: string;
}
