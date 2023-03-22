const fs = require('fs')

// 读取 params.json 文件内容
const params = JSON.parse(fs.readFileSync('params.json'))
// 定义 target.json 文件的初始值
let targetJson = {
  params: [],
}
// 递归函数，用于解析 params.json 文件中的内容
const parseParams = (params) => {
  params.forEach((item) => {
    // 过滤掉 id 小于 8000 的对象
    if (item.id >= 8000) return
    // 将 id 转换成 name
    let name = `fault_type_${item.id}`
    let itemObj = {
      name: name,
      show: item.nickName,
    }
    // 如果存在子对象，递归解析
    if (item.children.length > 0) {
      itemObj.attributes = parseParams(item.children)
    }
    // 将转换后的对象放入 targetJson 中
    targetJson.params.push(itemObj)
  })
  return targetJson
}

// 执行转换函数
parseParams(params)
// 将转换后的 targetJson 写入 target.json 文件中
fs.writeFileSync('target.json', JSON.stringify(targetJson))
