//  解决版本更新缓存问题  文件后面加时间戳
const Timestamp = new Date().getTime();
module.exports = {
  configureWebpack: {
    devtool: 'source-map',
    output: {
      filename: `js/[name].${Timestamp}.js`,
      chunkFilename: `js/[name].${Timestamp}.js`
    },
  }
}