import { GetFileWebRequestPayloadInterface } from "@/core/models/web";
import { WebRestAPIURL } from "@/core/routers/rest";
import axios from "axios";
import Cookie from "universal-cookie";

export const fetchGetFileWeb = async (
  payload?: GetFileWebRequestPayloadInterface
) => {
  const url = `${process.env.NEXT_PUBLIC_WEB_URL}${WebRestAPIURL.getFile()}`;
  const cookie = new Cookie();
  const token = cookie.get("token");

  return await axios
    .get(url, {
      params: payload?.params,
    })
    .then((res: any) => {
      return res.data;
    })
    .catch((err) => {
      throw err?.response?.data;
    });
};
