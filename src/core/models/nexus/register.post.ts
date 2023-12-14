import { NextApiRequest, NextApiResponse } from "next";

export interface PostRegisterNexusRequestInterface extends NextApiRequest {
  payload?: PostRegisterNexusRequestPayloadInterface;
}
export interface PostRegisterNexusRequestPayloadInterface {
  data: PostRegisterNexusRequestPayloadDataInterface;
}

export interface PostRegisterNexusRequestPayloadDataInterface {
  fullname?: string;
  email: string;
  password: string;
}

export interface PostRegisterNexusResponseInterface
  extends NextApiResponse<
    | PostRegisterNexusSuccessResponseInterface
    | PostRegisterNexusErrorResponseInterface
  > {}
export interface PostRegisterNexusSuccessResponseInterface {
  data: {
    email: string;
    uid: string;
  };
  message: string;
  status: number;
}

export interface PostRegisterNexusErrorResponseInterface {
  error_code: string;
  message: string;
}
