import { NextApiRequest, NextApiResponse } from "next";

export interface GetProfileNexusRequestInterface extends NextApiRequest {
  payload?: GetProfileNexusRequestPayloadInterface;
}
export interface GetProfileNexusRequestPayloadInterface {
  params: GetProfileNexusRequestPayloadParamsInterface;
}

export interface GetProfileNexusRequestPayloadParamsInterface {}

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
  error_code: string;
  message: string;
}
