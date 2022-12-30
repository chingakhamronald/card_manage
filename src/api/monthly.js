import axios from "axios";
import { BASE_URL } from "../helper/constant";

const axiosHeaderConfig = () => ({
  herders: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

export async function monthly(pageSize, pageNo) {
  let axiosconf = axiosHeaderConfig();

  return await axios
    .post(BASE_URL + `monthly?pageSize=${pageSize}&pageNo=${pageNo}`, axiosconf)
    .then((res) => res);
}
