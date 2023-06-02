import axios from 'axios'

export interface LoginParams {
  username: string
  password: string
}
export type LoginRes = AxiosData<UserState>
export async function login(params: LoginParams) {
  const { data } = await axios.post<LoginRes>('/api/user/login', params)
  return data
}

export type WhoAmIRes = AxiosData<UserState>
export async function whoAmI() {
  const { data } = await axios.get<WhoAmIRes>('/api/user/whoAmI')
  return data
}

export type UserInfoRes = AxiosData<User>
export async function getUserInfo() {
  const { data } = await axios.get<UserInfoRes>('/api/user/info')
  return data
}

export interface UserInfoParams {
  id: string
}
export async function getSpecificUserInfo(params: UserInfoParams) {
  const { data } = await axios.post<UserInfoRes>('/api/user/info', params)
  return data
}

export interface UpdateParams {
  username?: string
  password?: string
  email?: string
}
export async function updateUserInfo(params: UpdateParams) {
  const { data } = await axios.patch<UserInfoRes>('api/user/update', params)
  return data
}

export interface RegisterParams {
  username: string
  password: string
  email: string
  inviteCode: string
}
export type RegisterRes = AxiosData
export async function register(params: RegisterParams) {
  const { data } = await axios.post<RegisterRes>('/api/user/register', params)
  return data
}

export type LogoutRes = AxiosData
export async function logout() {
  const { data } = await axios.post<LogoutRes>('/api/user/logout')
  return data
}

// 用户管理部分
export interface UserListItem {
  id: string
  username: string
  email: string
  role: string
  registerTime: string
  loginTime: string
}

export type UserListRes = AxiosData<UserListItem[]>
export async function getUserList() {
  const { data } = await axios.get<UserListRes>('/api/user/list')
  return data
}

export type DeleteUserRes = AxiosData
export async function deleteUser(id: string) {
  const { data } = await axios.delete<DeleteUserRes>(`/api/user/${id}`)
  return data
}
