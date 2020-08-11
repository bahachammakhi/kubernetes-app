import { axiosPost, axiosGet, axiosPatch, axiosDelete, Response, axiosPut } from './http';
import axios from 'axios';
export interface LoginRequestData {
  email: string;
  password: string;
}
export interface SignRequestData {
  name: string;
  email: string;
  password: string;
  passwordConfirm: string;
  role: string;
  photo?: any;
}
export interface createContact {
  name: string;
  email: string;
  message: string;
}
export const getDonations = (): Promise<Response<any>> => axiosGet('api/v1/donations');
export const getStones = (): Promise<Response<any>> => axiosGet('api/v1/stones');
export const getStartwar = (): Promise<Response<any>> => axiosGet('todos/1');
export const loginRequest = (data: LoginRequestData) => axiosPost('api/v1/users/login', { data });
export const signupRequest = (data: SignRequestData) => axiosPost('api/v1/users/signup', { data });
export const createContact = (data: createContact) => axiosPost('api/v1/contacts', { data });
export const postDonations = (data: any) => axiosPost('api/v1/donations', { data });
export const delDonation = (id: string) => axiosDelete(`api/v1/donations/${id}`);
export const postStones = (data: FormData) => axiosPost('api/v1/stones', { data });
export const getStone = (id: string) => axiosGet(`/api/v1/stones/${id}`);
export const getDonation = (id: string) => axiosGet(`/api/v1/donations/${id}`);
