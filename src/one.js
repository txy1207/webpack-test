function testable(target){
    target.isTestable=true;
}
@testable
class MyTestableClass{}
console.log("装饰器语法：",MyTestableClass.isTestable);
