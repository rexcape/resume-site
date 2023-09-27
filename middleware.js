import { i18nRouter } from 'next-i18n-router'

const i18nConfig = {
  locales: ['zh', 'en', 'ja'],
  defaultLocale: 'zh',
  routingStrategy: 'dynamicSegment',
}

export function middleware(req) {
  return i18nRouter(req, i18nConfig)
}

export const config = {
  matcher: '/((?!api|static|.*\\..*|_next).*)',
}
