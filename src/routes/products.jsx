import { createRoute } from '@tanstack/react-router';
import { Route as RootRoute } from './__root';
import Products from '../pages/Products';

export const Route = createRoute({
  getParentRoute: () => RootRoute,
  path: '/products',
  component: Products,
});
