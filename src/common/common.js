// 这个文件用来定义全局变量
const apiUrl = "http://www.hcoder.net/api/"
const hiFun = function () {
    console.log("你好")
    return apiUrl
}
export default { //es6导出
    apiUrl,
    hiFun
}
