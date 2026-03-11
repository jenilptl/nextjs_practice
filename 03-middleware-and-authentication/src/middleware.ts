import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
    const url = req.nextUrl;
    console.log("Middleware called for:", url.pathname);

    // If visiting /products without a pageNo, redirect with pageNo=0
    if (url.pathname === '/Products') {
        if (!url.searchParams.get("pageNo")) {
            const newUrl = url.clone();
            newUrl.searchParams.set("pageNo", "0");
            return NextResponse.redirect(newUrl);
        }
    }

    // If visiting /Dashboard with expired=true, refresh the token
    if (url.pathname.startsWith("/Dashboard") && url.searchParams.get("expired") === "true") {
        const newUrl = url.clone();
        newUrl.searchParams.set("token", "adminNew");
        newUrl.searchParams.delete("expired");
        return NextResponse.redirect(newUrl);
    }

    // If visiting /Dashboard without a valid token, redirect to /Login
    if (url.pathname.startsWith("/Dashboard")) {
        const token = url.searchParams.get("token");

        if (token !== 'admin' && token !== 'adminNew') {
            return NextResponse.redirect(new URL("/Login", req.url));
        }
    }

    return NextResponse.next();
}

export const config = {
    matcher: ['/Products/:path*', '/Dashboard/:path*']
}
