import axios from "axios";
import { BASE_URL } from "../helper/constant";

const axiosHeaderConfig = () => ({
  herders: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

export async function monthly() {
  let axiosconf = axiosHeaderConfig();

  return await axios
    .post(BASE_URL + "monthly?pageSize=10&pageNo=1", axiosconf)
    .then((res) => console.log({ res }));
}
