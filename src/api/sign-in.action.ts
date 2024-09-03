"use server"
import { redirect } from "next/navigation";
// import { any } from "zod";

  const appURL = process.env.APP_URL
//   const appURL = "http://localhost:3003"
export default async function signIn(
    _prevState: any,
    formData: FormData , 
    
) {
    const res = await fetch(`${appURL}/auth/sign-in` , {
        method: 'POST',
        body: formData , 
            
        })
    console.log(res);
    const parsedRes = await res.json();
    if (!res.ok) {
        console.log(parsedRes);
        return { error: "not logined" }

    }
    // console.log(parsedRes);
    redirect("/")
}