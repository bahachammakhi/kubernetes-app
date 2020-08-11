export interface ICreateContactParams {
  firstname?: string;
  name?: string;
  fullanme?: string;
  email: string;
  tel?: string;
  interests?: string;
  message: string;
}

export interface Response {
  code: number;
  data: Data;
  message: string;
}
export interface Data {
  token: {
    tokenType: string;
    accessToken: string;
    expiresIn: string;
    refreshToken: string;
  };
  user: {
    email: string;
    password: string;
    uniqId: string;
    _id: string;
  };
}
export interface LoginState {
  fetching: boolean;
  data: Data | null;
  error: string;
  loaded: boolean;
  name: string;
}

export interface ReduxState {
  login: LoginState;
  startup: boolean;
}
