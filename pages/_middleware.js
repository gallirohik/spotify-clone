import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export async function middleware(req){

    // Token will exists if user is logged in

    const token  = await getToken({req,secret : process.env.JWT_SECRET})
    const {pathname} = req.nextUrl

    // allow the requests if following is true
   // 1) Its a request for next-auth session & provider fetching
   // 2) the token exists

   if(pathname.includes(`/api/auth`) || token){
       if(pathname === "/login"){
        return NextResponse.redirect("/")
       }
       return NextResponse.next()
   }

   // Redirect them to login screen if the do not have token AND are requesting a proteched route

   if(!token && pathname !== "/login"){
       return NextResponse.redirect("/login")
   }

}