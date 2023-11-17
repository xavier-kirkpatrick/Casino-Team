import { createRoot } from 'react-dom/client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import { routes } from './routes.tsx'

const router = createBrowserRouter(routes)
const queryClient = new QueryClient()

const root = createRoot(document.getElementById('app') as HTMLElement)
root.render(
  <QueryClientProvider client={queryClient}>
    <RouterProvider router={router} />
    <ReactQueryDevtools />
  </QueryClientProvider>,
)
// document.addEventListener('DOMContentLoaded', () => {
//   createRoot(document.getElementById('app') as HTMLElement).render(

//   )
// })
