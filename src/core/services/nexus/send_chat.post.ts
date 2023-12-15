import { PostSendChatNexusRequestPayloadInterface } from "@/core/models/nexus";
import { NexusRestAPIURL } from "@/core/routers/rest";
import axios from "axios";

export const fetchPostSendChatNexus = async (
  payload?: PostSendChatNexusRequestPayloadInterface
) => {
  const url =
    process.env.NEXT_PUBLIC_NEXUS_PROXY_SERVER === "true"
      ? `${process.env.NEXT_PUBLIC_WEB_URL}${
          process.env.NEXT_PUBLIC_NEXUS_PROXY_URL
        }${NexusRestAPIURL.postSendChat({
          doc_id: payload?.url.doc_id ?? "",
        })}`
      : `${
          process.env.NEXT_PUBLIC_NEXUS_SERVICE_URL
        }${NexusRestAPIURL.postSendChat({
          doc_id: payload?.url.doc_id ?? "",
        })}`;

  return await axios
    .post(url, payload?.data, {
      headers: {
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
