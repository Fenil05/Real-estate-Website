import axios from "axios";
import { axiosInstance } from "../config";

const upload = async (file) => {
  const data = new FormData();
  data.append("file", file);
  data.append("upload_preset", "szudurpo");

  try {
    const res = await axiosInstance.post("https://api.cloudinary.com/v1_1/doahplnvf/image/upload", data);

    const { url } = res.data;
    return url;
  } catch (err) {
    console.log(err);
  }
};

export default upload;
