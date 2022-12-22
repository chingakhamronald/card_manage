import axios from "axios";
import { BASE_URL } from "../helper/constant";

const axiosHeaderConfig = () => ({
  headers: {
    "Content-Type": "application/json",
    Accept: "appliction/json",
  },
});

export async function transaction(pageSize, page) {
  let axiosconf = axiosHeaderConfig();

  console.log({ pageSize: pageSize, page: page });

  return await axios
    .post(BASE_URL + `orders?pageSize=${pageSize}&pageNo=${page}`, axiosconf)
    .then((res) => res);
}
