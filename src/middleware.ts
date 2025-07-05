import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { ACCESS_TOKEN_COOKIE_KEY, USER_ROLE_KEY } from "@/constants";

const userOnlyRoutes = [
  "/post-confirmation",
  "/verification",
  "/verification/failed",
  "/account",
  "/account/orders",
  "/account/profile",
  "/account/saved-addresses",
  "/account/wishlist",
  "/checkout/cart",
  "/checkout/payment",
  "/checkout/shipping",
  "/confirmation/success",
  "/track-order",
];
const AdminOnlyRoutes = ["/admin/orders", "/admin/products", "/admin/variants"];

const protectedRoutes: string[] = [];

export default function middleware(req: NextRequest) {
  const type =
    req.cookies.get(USER_ROLE_KEY)?.value === "customer"
      ? req.cookies.get(USER_ROLE_KEY)?.value
      : "admin";

  //   check if authenticated
  let isAuthenticated = req.cookies.get(ACCESS_TOKEN_COOKIE_KEY)?.value;

  const isProtectedRoute = protectedRoutes.find((route) =>
    req.nextUrl.pathname.includes(route)
  );
  const isUserOnlyRoute = userOnlyRoutes.find((route) =>
    req.nextUrl.pathname.includes(route)
  );
  const isAdminOnlyRoute = AdminOnlyRoutes.find((route) =>
    req.nextUrl.pathname.includes(route)
  );

  // If not authenticated redirect to login page
  if (
    !isAuthenticated &&
    (isProtectedRoute || isUserOnlyRoute || isAdminOnlyRoute)
  ) {
    const absoluteURL = new URL("/", req.nextUrl.origin);
    return NextResponse.redirect(absoluteURL.toString());
  }

  // If loggedin but not authorized, redirect to home
  if (
    (isUserOnlyRoute && type !== "customer") ||
    (isAdminOnlyRoute && type !== "admin")
  ) {
    const absoluteURL = new URL("/", req.nextUrl.origin);
    return NextResponse.redirect(absoluteURL.toString());
  }
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};
