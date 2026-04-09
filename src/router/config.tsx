import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const HomePage = lazy(() => import('../pages/home/page'));
const NailGunsPage = lazy(() => import('../pages/products/nail-guns/page'));
const NailGunDetailPage = lazy(() => import('../pages/products/nail-guns/detail/page'));
const GardenToolsPage = lazy(() => import('../pages/products/garden-tools/page'));
const GardenToolDetailPage = lazy(() => import('../pages/products/garden-tools/detail/page'));
const BrushlessPage = lazy(() => import('../pages/products/brushless/page'));
const BrushlessDetailPage = lazy(() => import('../pages/products/brushless/detail/page'));
const WorkshopPage = lazy(() => import('../pages/products/workshop/page'));
const WorkshopDetailPage = lazy(() => import('../pages/products/workshop/detail/page'));
const SharpeningPage = lazy(() => import('../pages/products/sharpening/page'));
const SharpeningDetailPage = lazy(() => import('../pages/products/sharpening/detail/page'));
const NotFoundPage = lazy(() => import('../pages/NotFound'));

const routes: RouteObject[] = [
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/products/nail-guns',
    element: <NailGunsPage />,
  },
  {
    path: '/products/nail-guns/:category',
    element: <NailGunsPage />,
  },
  {
    path: '/products/nail-guns/:category/:productId',
    element: <NailGunDetailPage />,
  },
  {
    path: '/products/garden-tools',
    element: <GardenToolsPage />,
  },
  {
    path: '/products/garden-tools/:category',
    element: <GardenToolsPage />,
  },
  {
    path: '/products/garden-tools/:category/:productId',
    element: <GardenToolDetailPage />,
  },
  {
    path: '/products/brushless',
    element: <BrushlessPage />,
  },
  {
    path: '/products/brushless/:category',
    element: <BrushlessPage />,
  },
  {
    path: '/products/brushless/:category/:productId',
    element: <BrushlessDetailPage />,
  },
  {
    path: '/products/workshop',
    element: <WorkshopPage />,
  },
  {
    path: '/products/workshop/:category',
    element: <WorkshopPage />,
  },
  {
    path: '/products/workshop/:category/:productId',
    element: <WorkshopDetailPage />,
  },
  {
    path: '/products/sharpening',
    element: <SharpeningPage />,
  },
  {
    path: '/products/sharpening/:category',
    element: <SharpeningPage />,
  },
  {
    path: '/products/sharpening/:category/:productId',
    element: <SharpeningDetailPage />,
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
];

export default routes;
