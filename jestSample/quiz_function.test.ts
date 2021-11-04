
const quiz = require('./quiz_function');

test('quiz1_can',() => {
    expect(quiz.writeDataInLocal('test_write')).toBe(true);
})

// test('rejects to quiz1', async () => {
//     try{
//         await quiz.writeDataInLocal();
//     }catch(e){
//         expect(e).toBe(false);
//     }
//     // const result = await quiz.writeDataInLocal()
//     // expect(result).rejects.toMatch(false);
//   });