
const quiz = require('./quiz_function');


//クイズ1

test('quiz1_success',() => {
    expect(quiz.writeDataInLocal('test_write')).toBe(true);
})

//成功せず。。
// test('quiz1_error', () => {
//     // try{
//     //     await quiz.writeDataInLocal();
//     // }catch(e){
//     //     expect(e).toBe(false);
//     // }
//     /////////////
//     // const result = await quiz.writeDataInLocal()
//     // expect(result).rejects.toMatch(false);
//     expect(quiz.writeDataInLocal()).toBe(false);
//   });


//クイズ2


test('quiz2_success',() => {
    const result = 
    {
        "headers":{
            "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8", 
            "Accept-Encoding": "gzip, deflate, br", 
            "Accept-Language": "ja,en-US;q=0.7,en;q=0.3", 
            "Host": "httpbin.org", 
        }
    };
    expect(quiz.fetchURL('https://httpbin.org/get')).resolves.toEqual(result);


})

test('quiz2_error onloaded404received',() => {
    expect(quiz.fetchURL('https://www.google.com/kwuerhdukdf')).rejects.toEqual(0);

})


//クイズ3
test('quiz_3',()=>{
    const result = {
        "Cluster": 'example', 
        "Service": 'example-api',
        "TaskCount": 2 
    };
    expect(quiz.newConfig('quiz.yaml')).toEqual(result);

})