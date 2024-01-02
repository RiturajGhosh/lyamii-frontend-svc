import { signUp } from "./signup";

export async function signUpApi(props: any) {
  try {
    return await signUp(props);
  } catch (error: any) {
    return error;
  }
}
