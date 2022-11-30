const renderHTML = (url) => {
    switch (url) {
        case '/nihao':
            return `<html><h1>hello world!</h1><br /><span>你好！</span><html>`
        case '/zaijian':
            return `<html><h1>good bye!</h1><br /><span>再见！</span><html>`
        case '/api/nihao':
            return `
          ["list1","list2","list3"]
          `
        default:
            return `
      <html><div>404 not found!!</div></html>
      `
    }
}

module.exports = {
    renderHTML,
}