module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'airbnb'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      tsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    'react/jsx-filename-extension': [2, { extensions: ['ts', 'tsx'] }],
    'import/no-unresolved': 0,
    'import/extensions': 0,

    // 最后一个对象属性要有逗号
    'comma-dangle': 1,

    // 定义但从未使用的变量
    'no-unused-vars': 1,

    // 赋值但从未使用
    'react/jsx-no-bind': 1,

    // 空标签
    'react/self-closing-comp': 0,

    // 具有单击处理程序的可见非交互元素必须至少有一个键盘侦听器
    'jsx-a11y/click-events-have-key-events': 0,

    // 具有“按钮”交互作用的元素必须是可聚焦的
    'jsx-a11y/interactive-supports-focus': 0,

    // 带有事件处理程序的静态HTML元素需要一个角色
    'jsx-a11y/no-static-element-interactions': 0,

    // return ;
    'semi-spacing': 0,

    // <>只包含不能只包含一个标签
    'react/jsx-no-useless-fragment': 0,

    // 值对于布尔属性必须省略
    'react/jsx-boolean-value': 0,

    // 必须默认导出
    'import/prefer-default-export': 0,

    // 默认变量放到最后一个
    'default-param-last': 0,

    // 对参数进行赋值
    'no-param-reassign': 0,

    // 使用未声明的函数
    'no-use-before-define': 0,

    'no-new': 0,

    // 不能使用自增
    'no-plusplus': 0,

    // button必须是静态type
    'react/button-has-type': 0,
  },
}
