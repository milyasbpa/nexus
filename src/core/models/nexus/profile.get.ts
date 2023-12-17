import { NextApiRequest, NextApiResponse } from "next";

export interface GetProfileNexusRequestInterface extends NextApiRequest {
  payload?: GetProfileNexusRequestPayloadInterface;
}
export interface GetProfileNexusRequestPayloadInterface {
  headers: GetProfileNexusRequestPayloadHeadersInterface;
}

export interface GetProfileNexusRequestPayloadHeadersInterface {
  uid: string;
  ["access-token"]: string;
}

export interface GetProfileNexusResponseInterface
  extends NextApiResponse<
    | GetProfileNexusSuccessResponseInterface
    | GetProfileNexusErrorResponseInterface
  > {}
export interface GetProfileNexusSuccessResponseInterface {
  data: {
    email: string;
    uid: string;
  };
  message: string;
  status: number;
}

export interface GetProfileNexusErrorResponseInterface {
  error: string;
  message: string;
  status: number;
}
