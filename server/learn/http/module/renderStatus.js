const renderStatus = (url) => {
    let arr = ['/nihao', '/zaijian', '/api/nihao']
    return arr.includes(url) ? 200 : 404
        // 200 响应头 状态码  200 404 301
}

module.exports = {
    renderStatus,
}