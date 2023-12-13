import { PostLoginNexusRequestBodyInterface } from "@/core/models/nexus";
import { NexusRestAPIURL } from "@/core/routers/rest";
import axios from "axios";
import Cookie from "universal-cookie";

export const fetchPostLoginNexus = async (
  payload?: PostLoginNexusRequestBodyInterface
) => {
  console.log("ditembak ga nih");
  const url =
    process.env.NEXT_PUBLIC_NEXUS_PROXY_SERVER === "true"
      ? `${process.env.NEXT_PUBLIC_WEB_URL}${
          process.env.NEXT_PUBLIC_NEXUS_PROXY_URL
        }${NexusRestAPIURL.postLogin()}`
      : `${process.env.NEXT_PUBLIC_NEXUS_SERVICE_URL}${NexusRestAPIURL.postLogin()}`;

  const cookie = new Cookie();
  const token = cookie.get("token");

  return await axios
    .post(url, payload)
    .then((res: any) => {
      return res.data;
    })
    .catch((err) => {
      throw err?.response?.data;
    });
};
