import { signUp } from "./signup";

export async function signUpApi(props: any) {
  try {
    console.log(props)
    return await signUp(props);
  } catch (error: any) {
    return error;
  }
}
