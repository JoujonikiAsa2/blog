import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import BlogPage from './pages/blog/page'
import { ChakraProvider } from '@chakra-ui/react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import BlogForm from './pages/blog-form/page'

const router = createBrowserRouter([
    {
        path: '/',
        element: <BlogPage />,
    },
    {
        path: '/blog-form',
        element: <BlogForm />,
    },
])

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <ChakraProvider>
            <RouterProvider router={router} />
        </ChakraProvider>
    </StrictMode>,
)
