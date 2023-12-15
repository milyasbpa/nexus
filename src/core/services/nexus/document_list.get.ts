import { GetDocumentListNexusRequestPayloadInterface } from "@/core/models/nexus";
import { NexusRestAPIURL } from "@/core/routers/rest";
import axios from "axios";
import Cookie from "universal-cookie";

export const fetchGetDocumentListNexus = async (
  payload?: GetDocumentListNexusRequestPayloadInterface
) => {
  const url =
    process.env.NEXT_PUBLIC_NEXUS_PROXY_SERVER === "true"
      ? `${process.env.NEXT_PUBLIC_WEB_URL}${
          process.env.NEXT_PUBLIC_NEXUS_PROXY_URL
        }${NexusRestAPIURL.getDocumentList()}`
      : `${
          process.env.NEXT_PUBLIC_NEXUS_SERVICE_URL
        }${NexusRestAPIURL.getDocumentList()}`;

  return await axios
    .get(url, {
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
