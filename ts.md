## 声明文件

### declare的使用
declare表示一个全局，他的后面可以是任意类型，最后这个类型会被提到全局中

### global的使用
一般.d.ts里面生命的类型即为全局类型，global用在举办文件当中，比如
~~~ ts
declare const Jye1: string;
declare let Jye2: string;
declare class Jye3 {}
declare namespace Jye4 {}
// .....
// 同时支持函数重载
declare function name(params: string): void;
declare function name(params: number): number;


~~~
~~~ typescript
// ./types/test.d.ts
declare global {
  interface String {
    helloword(): string;
  }
}

export {};
~~~
~~~ typescript
// ./src/test.ts
const test = "jye";
test.helloword();
~~~
因为global是给模块声明文件使用的，不是给全局声明文件使用的，所以需要使用的话需要添加export {}
> 如果不加export {}，会报「全局范围的扩大仅可直接嵌套在外部模块中或环境模块声明中」错误。增加export{}其实也就是为了让这个声明文件变成模块声明文件，而不是一个全局声明文件。

什么是全局声明，什么是局部声明。
我的理解是，如果这个声明文件被typescript引入了，那么这个文件不包含import export，那么这个文件中包含的declare & interface & type就会变成全局声明。反之，若是这个文件包含了import export，那么这个文件包含的declare & interface & type则会是局部声明，不会影响到全局声明。