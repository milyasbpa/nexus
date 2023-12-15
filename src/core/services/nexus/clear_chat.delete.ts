import { DeleteClearChatNexusRequestPayloadInterface } from "@/core/models/nexus";
import { NexusRestAPIURL } from "@/core/routers/rest";
import axios from "axios";

export const fetchDeleteClearChatNexus = async (
  payload?: DeleteClearChatNexusRequestPayloadInterface
) => {
  const url =
    process.env.NEXT_PUBLIC_NEXUS_PROXY_SERVER === "true"
      ? `${process.env.NEXT_PUBLIC_WEB_URL}${
          process.env.NEXT_PUBLIC_NEXUS_PROXY_URL
        }${NexusRestAPIURL.deleteClearChat({
          doc_id: payload?.url.doc_id ?? "",
        })}`
      : `${
          process.env.NEXT_PUBLIC_NEXUS_SERVICE_URL
        }${NexusRestAPIURL.deleteClearChat({
          doc_id: payload?.url.doc_id ?? "",
        })}`;

  return await axios
    .delete(url, {
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
