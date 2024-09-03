"use server"

import { error } from "console";
import { redirect } from "next/navigation";


export default async function signUp(
    _prevState: any , 
    formData: FormData , 
) {

    const res = await fetch("http://localhost:3003/users" , {
        method: "POST",
        body: formData , 
    }) 
    
    const parsedRes = await res.json();

    if(!res.ok) {
        console.log(parsedRes);
        return { error: "not signed up"}
    }

    redirect("/auth/sign-in")
    
}