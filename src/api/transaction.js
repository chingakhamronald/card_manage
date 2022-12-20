import axios from "axios";

const BASE_URL = process.env.REACT_APP_API;

// console.log({ BASE_URL });

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
