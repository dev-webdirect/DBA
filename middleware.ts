import createMiddleware from "next-intl/middleware";
import { siteConfig } from "./src/config/site";

export default createMiddleware({
  locales: siteConfig.locales,
  defaultLocale: siteConfig.defaultLocale, // "nl"
  localeDetection: false, // 👈 disable automatic browser detection
});

export const config = {
  matcher: ["/((?!api|_next|_vercel|.*\..*).*)"],
};