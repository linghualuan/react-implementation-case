import { lazy } from 'react'
import { Navigate } from 'react-router-dom'

const UploadLargeFiles = lazy(() => import('../pages/UploadLargeFiles'))
const Demo = lazy(() => import('../pages/Demo'))

const routes = [
    {
        path: '/',
        element: <Navigate to='/uploadfiles'/>
    },

    {
        path: '/uploadfiles',
        element: <UploadLargeFiles />
    },

    {
        path: '/demo',
        element: <Demo />
    }
]

export default routes