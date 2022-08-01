import axios from "axios";

const serverAPI = axios.create({
  baseURL: 'https://api.vk.com/method/',
});

export default serverAPI