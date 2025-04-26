import './tailwind.css'
import { type LinksFunction } from '@remix-run/node'
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react'
import DefaultErrorBoundary from '~/components/error-boundary.tsx'
import { useEffect } from 'react'

export const links: LinksFunction = () => []

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body suppressHydrationWarning>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  )
}

export default function App() {
  useEffect(() => {
    // Suppressing this warning because it's a bug in Remix
    const originalWarn = console.error
    console.error = (...args) => {
      if (
        typeof args[0] === 'string' &&
        args[0].includes('Accessing element.ref was removed in React 19')
      ) {
        return
      }
      originalWarn(...args)
    }
  }, [])

  return <Outlet />
}

export function ErrorBoundary() {
  return <DefaultErrorBoundary />
}

export function CatchBoundary() {
  return <h1>Something went wrong</h1>
}

export function HydrateFallback() {
  return <h1>Loading...</h1>
}
