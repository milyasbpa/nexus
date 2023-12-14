import { NextApiRequest, NextApiResponse } from "next";

export interface PostLoginNexusRequestInterface extends NextApiRequest {
  payload?: PostLoginNexusRequestPayloadInterface;
}
export interface PostLoginNexusRequestPayloadInterface {
  data: PostLoginNexusRequestPayloadDataInterface;
}

export interface PostLoginNexusRequestPayloadDataInterface {
  id_token: string;
}

export interface PostLoginNexusResponseInterface
  extends NextApiResponse<
    | PostLoginNexusSuccessResponseInterface
    | PostLoginNexusErrorResponseInterface
  > {}
export interface PostLoginNexusSuccessResponseInterface {
  data: {
    email: string;
    uid: string;
  };
  message: string;
  status: number;
}

export interface PostLoginNexusErrorResponseInterface {
  error_code: string;
  message: string;
}
