module.exports = {
    outputDir: "../docs",
    publicPath: process.env.NODE_ENV === 'production' 
    ? '/team3revue/'
    : '/',
    runtimeCompiler: true
}
