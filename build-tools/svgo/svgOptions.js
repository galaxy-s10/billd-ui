module.exports = {
  floatPrecision: 2,
  plugins: [
    {
      name: 'removeTitle',
      active: true,
    },
    {
      name: 'removeDesc',
      active: true,
    },
    {
      name: 'cleanupAttrs',
      active: true,
    },
    {
      name: 'removeXMLNS',
      active: true,
    },
    {
      name: 'removeUselessDefs',
      active: true,
    },
    {
      name: 'removeEmptyAttrs',
      active: true,
    },
    {
      name: 'removeHiddenElems',
      active: true,
    },
    {
      name: 'removeEmptyContainers',
      active: true,
    },
    {
      name: 'removeEmptyText',
      active: true,
    },
    {
      // 删除width/height并添加viewBox（与 removeViewBox 相反，先禁用它）
      name: 'removeDimensions',
      active: true,
    },
    {
      name: 'removeViewBox',
      active: false,
    },
    {
      name: 'removeStyleElement',
      active: true,
    },
    {
      name: 'removeDoctype',
      active: false, // true的时候，删除文档类型标签；false的时候，不删除文档类型标签(即使不删除文档类型标签，有这个文档类型标签存在，parseXML插件也会忽略它，不会将它解析出来)
    },
    // { removeXMLProcInst: true },
    // { removeXMLNS: true },
    // { removeComments: true },
    // { removeMetadata: true },
    // { removeTitle: true },
    // { removeDesc: true },
    // { removeUselessDefs: true },
    // { removeEditorsNSData: true },
    // { removeEmptyAttrs: true },
    // { removeHiddenElems: true },
    // { removeEmptyText: true },
    // { removeEmptyContainers: true },
    // { removeViewBox: false },
    // { cleanupEnableBackground: true },
    // { convertStyleToAttrs: true },
    // { convertColors: true },
    // { convertPathData: true },
    // { convertTransform: true },
    // { removeUnknownsAndDefaults: true },
    // { removeNonInheritableGroupAttrs: true },
    // { removeUselessStrokeAndFill: true },
    // { removeUnusedNS: true },
    // { cleanupIDs: true },
    // { cleanupNumericValues: true },
    // { moveElemsAttrsToGroup: true },
    // { moveGroupAttrsToElems: true },
    // { collapseGroups: true },
    // { removeRasterImages: false },
    // { mergePaths: true },
    // { convertShapeToPath: true },
    // { sortAttrs: true },
    // { removeDimensions: true },
  ],
};
