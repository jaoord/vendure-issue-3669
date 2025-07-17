import {
    PluginCommonModule,
    VendurePlugin,
  } from "@vendure/core";
  
  @VendurePlugin({
    imports: [PluginCommonModule],
    compatibility: "^3.0.0",
    dashboard: 'ui/test-plugin.extension.ts'
  })
  export class TestPlugin {}
  