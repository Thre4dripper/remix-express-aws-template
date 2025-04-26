import { vitePlugin as remix } from '@remix-run/dev'
import morgan from 'morgan'
import { remixDevTools } from 'remix-development-tools'
import { defineConfig, type ViteDevServer } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  build: { manifest: true },
  plugins: [
    morganPlugin(),
    remixDevTools(),
    tsconfigPaths(),
    remix({
      ignoredRouteFiles: ['**/*'],
      serverModuleFormat: 'esm',
      routes: async defineRoutes => {
        return defineRoutes(route => {
          route('/', 'routes/_index.tsx')
          route('/counter', 'routes/counter.tsx')
          route('/healthcheck', 'routes/healthcheck.tsx')
          route('/error', 'routes/error.tsx')
          route('*', 'routes/not-found.tsx')
        })
      },
      future: {
        v3_fetcherPersist: true,
        v3_lazyRouteDiscovery: true,
        v3_relativeSplatPath: true,
        v3_singleFetch: true,
        v3_throwAbortReason: true,
      },
    }),
  ],
})

function morganPlugin() {
  return {
    name: 'morgan-plugin',
    configureServer(server: ViteDevServer) {
      return () => {
        server.middlewares.use(morgan('tiny'))
      }
    },
  }
}
