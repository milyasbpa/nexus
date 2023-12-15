import { GetChatHistoryNexusRequestPayloadInterface } from "@/core/models/nexus";
import { NexusRestAPIURL } from "@/core/routers/rest";
import axios from "axios";
import Cookie from "universal-cookie";

export const fetchGetChatHistoryNexus = async (
  payload?: GetChatHistoryNexusRequestPayloadInterface
) => {
  const url =
    process.env.NEXT_PUBLIC_NEXUS_PROXY_SERVER === "true"
      ? `${process.env.NEXT_PUBLIC_WEB_URL}${
          process.env.NEXT_PUBLIC_NEXUS_PROXY_URL
        }${NexusRestAPIURL.getChatHistory({
          doc_id: payload?.url.doc_id ?? "",
        })}`
      : `${
          process.env.NEXT_PUBLIC_NEXUS_SERVICE_URL
        }${NexusRestAPIURL.getChatHistory({
          doc_id: payload?.url.doc_id ?? "",
        })}`;

  const cookie = new Cookie();
  const token = cookie.get("token");

  return await axios
    .get(url)
    .then((res: any) => {
      return res.data;
    })
    .catch((err) => {
      throw err?.response?.data;
    });
};
