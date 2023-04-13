请用 js 结合面向对象的思想，实现生产者和消费者的概念逻辑。
// 最好用下面这个实际例子：
考虑一个在线的编辑器。
用户会输入文字、插入图片、插入视频、插入分页等等，这些需要和后台交互，但不能阻塞用户的行为。
注意，需要按顺序和后台交互。比如用户先插入一张图、再插入分页、再插入视频，需要在插入图片的后端成功返回后，在请求分页行为，然后请求视频的保存。
class Queue {
providerList: any[]
isLoop: boolean
constructor(){
this.providerList = []
this.isLoop = flase
}
addTask(task: any){
this.providerList.push(task)
if(!this.isLoop){
this.loop()
}
}
consumeTask(task: any){
const myPromise = new Promise((resolve,reject)=>{
const flag = true
const result = {success:flag,result:flag?'success':'error'}
if(result.success){
resolve(result.result)
}else{
reject(result.result)
}
})
return myPromise
}

async loop(){
this.isLoop = true
while(this.providerList.length){
const first = this.providerList[0]
try {
await this.consumeTask(first)
this.providerList.shift()
} catch {
this.providerList.shiftt()
}
}
this.isLoop = false
}
}
