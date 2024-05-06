"use server";

import { createServerClient, type CookieOptions } from "@supabase/ssr";
import { NextResponse, type NextRequest } from "next/server";
// import { useUser } from "@/utils/store/user";
import { cookies } from "next/headers";

// console.log("jhjhjjno", "bkascascsa");
export async function middleware(request: NextRequest) {
  // console.log("jhjhjjno", "bk");
  // let response = NextResponse.next({
  //   request: {
  //     headers: request.headers,
  //   },
  // });

  // const supabase = createServerClient(
  //   process.env.NEXT_PUBLIC_SUPABASE_URL!,
  //   process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
  //   {
  //     cookies: {
  //       get(name: string) {
  //         return request.cookies.get(name)?.value;
  //       },
  //       set(name: string, value: string, options: CookieOptions) {
  //         request.cookies.set({
  //           name,
  //           value,
  //           ...options,
  //         });
  //         response = NextResponse.next({
  //           request: {
  //             headers: request.headers,
  //           },
  //         });
  //         response.cookies.set({
  //           name,
  //           value,
  //           ...options,
  //         });
  //       },
  //       remove(name: string, options: CookieOptions) {
  //         request.cookies.set({
  //           name,
  //           value: "",
  //           ...options,
  //         });
  //         response = NextResponse.next({
  //           request: {
  //             headers: request.headers,
  //           },
  //         });
  //         response.cookies.set({
  //           name,
  //           value: "",
  //           ...options,
  //         });
  //       },
  //     },
  //   }
  // );

  // await supabase.auth.getUser();

  const base_url = new URL(request.nextUrl.clone()).origin;

  console.log(base_url);

  const cookieStore = cookies();

  let user_id = cookieStore.get("user_id")?.value;

  if (user_id == undefined && request.url.includes("chatbox")) {
    return NextResponse.redirect(`${base_url}/login`);
  }

  console.log("csascas", user_id);

  // if (request.url.includes("/chatbox")) {
  //   // let user = useUser((state) => state.user);

  //   if (user) {
  //   } else {
  //     console.log("jhjhjjno", user);
  //     return NextResponse.redirect("/login");
  //   }
  // }

  return NextResponse.next();

  // return response;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * Feel free to modify this pattern to include more paths.
     */
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};

// export function middleware(request: NextRequest) {

// }

// export function middleware(request: NextRequest) {
//   console.log("running");
//   return NextResponse.next();
// }
