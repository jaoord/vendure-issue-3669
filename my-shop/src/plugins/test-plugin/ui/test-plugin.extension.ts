import { defineDashboardExtension } from '@vendure/dashboard';
import TestPluginComponent from './test-plugin.component';

export const testPluginExtension = defineDashboardExtension({
  pageBlocks: [
    {
      id: 'unit-pricing-block',
      title: 'Test Plugin',
      location: {
        pageId: 'product-variant-detail',
        position: { blockId: 'price-and-tax', order: 'after' },
        column: 'main',
      },
      component: TestPluginComponent,
      requiresPermission: ['UpdateProductVariant'],
    },
  ],
}); 