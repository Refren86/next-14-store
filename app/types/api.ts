import { JwtPayload } from "jwt-decode";

export type TCategory = {
  id: string;
  title: string;
  image: string;
  items?: string[];
};

export type TUserRole = "admin" | "customer" | "guest";

export type TUser = {
  id: string;
  aud: string;
  role: string;
  email: string;
  email_confirmed_at: string;
  phone: string;
  confirmation_sent_at: string;
  confirmed_at: string;
  last_sign_in_at: string;
  app_metadata: {
    provider: string;
    providers: string[];
  };
  user_metadata: {
    first_name: string;
    last_name: string;
  };
  identities: {
    identity_id: string;
    id: string;
    user_id: string;
    identity_data: {
      email: string;
      email_verified: boolean;
      phone_verified: boolean;
      sub: string;
    };
    provider: string;
    last_sign_in_at: string;
    created_at: string;
    updated_at: string;
    email: string;
  }[];
  created_at: string;
  updated_at: string;
};

export type TTokenDecoded = JwtPayload & {
  user_role: TUserRole;
}
