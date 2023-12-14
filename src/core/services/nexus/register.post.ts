import { PostRegisterNexusRequestPayloadInterface } from "@/core/models/nexus";
import { NexusRestAPIURL } from "@/core/routers/rest";
import axios from "axios";
import Cookie from "universal-cookie";

export const fetchPostRegisterNexus = async (
  payload?: PostRegisterNexusRequestPayloadInterface
) => {
  const url =
    process.env.NEXT_PUBLIC_NEXUS_PROXY_SERVER === "true"
      ? `${process.env.NEXT_PUBLIC_WEB_URL}${
          process.env.NEXT_PUBLIC_NEXUS_PROXY_URL
        }${NexusRestAPIURL.postRegister()}`
      : `${
          process.env.NEXT_PUBLIC_NEXUS_SERVICE_URL
        }${NexusRestAPIURL.postRegister()}`;

  const cookie = new Cookie();
  const token = cookie.get("token");

  return await axios
    .post(url, payload?.data)
    .then((res: any) => {
      return res.data;
    })
    .catch((err) => {
      throw err?.response?.data;
    });
};
