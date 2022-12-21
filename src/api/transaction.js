import axios from "axios";
import { BASE_URL } from "../helper/constant";

const axiosHeaderConfig = () => ({
  headers: {
    "Content-Type": "application/json",
    Accept: "appliction/json",
  },
});

export async function transaction() {
  let axiosconf = axiosHeaderConfig();

  return await axios
    .post(BASE_URL + `orders?pageSize=10&pageNo=100`, axiosconf)
    .then((res) => console.log({ res }));
}
