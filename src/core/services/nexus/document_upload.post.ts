import { PostDocumentUploadNexusRequestPayloadInterface } from "@/core/models/nexus";
import { NexusRestAPIURL } from "@/core/routers/rest";
import axios from "axios";
import Cookie from "universal-cookie";

export const fetchPostDocumentUploadNexus = async (
  payload?: PostDocumentUploadNexusRequestPayloadInterface
) => {
  const url =
    process.env.NEXT_PUBLIC_NEXUS_PROXY_SERVER === "true"
      ? `${process.env.NEXT_PUBLIC_WEB_URL}${
          process.env.NEXT_PUBLIC_NEXUS_PROXY_URL
        }${NexusRestAPIURL.postDocumentUpload()}`
      : `${
          process.env.NEXT_PUBLIC_NEXUS_SERVICE_URL
        }${NexusRestAPIURL.postDocumentUpload()}`;

  const cookie = new Cookie();
  const token = cookie.get("token");

  return await axios
    .post(url, payload?.data, {
      headers: {
        "Content-Type": "multipart/form-data",
        ...payload?.headers,
      },
    })
    .then((res: any) => {
      return res.data;
    })
    .catch((err) => {
      throw err?.response?.data;
    });
};
