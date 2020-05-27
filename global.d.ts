declare module "*.png";
declare module "*.gif";
declare module "*.jpg";
declare module "*.jpeg";
declare module "*.svg";
declare module "*.css";
declare module "*.less";
declare module "*.scss";
declare module "*.sass";
declare module "*.styl";

declare namespace JSX {
  interface IntrinsicElements {
    'import': React.DetailedHTMLProps<React.EmbedHTMLAttributes<HTMLEmbedElement>, HTMLEmbedElement>
  }
}

// @ts-ignore
declare const process: {
  env: {
    TARO_ENV: 'weapp' | 'swan' | 'alipay' | 'h5' | 'rn' | 'tt' | 'quickapp' | 'qq'
    [key: string]: any
  }
}

declare const str: 'test-str'

declare const min: 1
// 声明类
declare class Person1 {
  static maxAge: number
  static getMaxAge(): number
  constructor(name: string, age: number)
  getName(id: number): string
}
// 声明命名空间
declare namespace space {
  function func(str: string): string
  let num: number
}
// 声明函数
declare function func(params: string): void

// 声明模块化
declare module "ABC" {
  export let a: number
  export function b(): number
  export namespace c {
    let cd: string
  }
}
