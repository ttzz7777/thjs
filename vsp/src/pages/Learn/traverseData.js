let data = [
  {
    a: [
      {
        aa: [
          {
            value1: '(111)实际值',
            value2: 0,
          },
        ],
      },
    ],
    b: [
      {
        bb: [
          {
            value1: '(222)实际值',
            value2: 0,
          },
        ],
      },
    ],
  },
]

function traverseData(data) {
  for (let key in data) {
    if (Array.isArray(data[key])) {
      data[key].forEach((item) => {
        traverseData(item)
      })
    } else if (typeof data[key] === 'object') {
      traverseData(data[key])
    } else {
      console.log(key + ': ' + data[key])
    }
  }
}
traverseData(data)
