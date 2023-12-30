import { signIn } from "./signin";

export async function signInApi(props: any) {
  try {
    return await signIn(props);
  } catch (error: any) {
    return error;
  }
}
