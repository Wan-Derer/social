import * as axios from 'axios';

const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {'API-KEY': '270f00f6-357f-4a90-b45f-23bce749dd8a'},
});

export const userAPI = {

  getUsers(currentPage = 1, pageSize = 10) {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`,
    ).then(response => response.data);
  },




};
