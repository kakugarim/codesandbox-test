/*
 *const,text
 */

// var val1 = "val変数";
// console.log(val1);

// const name = "芽";
// const age = 36;
// const msessage2 = `私の名前は${name}です。年齢は${age}です。`;

// console.log(name);
// const func2 = (str) => {
//   return str;
// };

// console.log(func2("滝内です。"));
// const myProfile = {
//   name: "滝内",
//   age: 36
// };
// const message1 = `名前は${myProfile.name}です。。。。年齢は${myProfile.age}です`;
// console.log(message1);

// const { name, age } = myProfile;
// const message2 = `名前は${name}です。年齢は${age}です。。。。。`;
// console.log(message1);
// console.log(message2);
// const arr1 = [10, 5];

// const SumFunc = (num1, num2) => console.log(num1 / num2);
// // SumFunc(arr1[0], arr1[1]);
// SumFunc(...arr1);

// const nameArr = ["田中","山田","滝内"];
// // for (let index =0; index < nameArr.length; index++){
// //   console.log(`${index +1}番目は${nameArr[index]}です`)
// // }
// // nameArr.map((na) => console.log(na));
// // nameArr.map((name, index) => console.log(`${index +1}番目は${name}です。`));
// // const numArr = [1,2,3,4,5];
// // const newNumArr = numArr.filter((num) => {
// //   return num % 2 === 0;
// // });
// // console.log(newNumArr);
// const newNameArr = nameArr.map((name) => {
//   if (name === "滝内"){
//     return name
//   } else;{
//     return `${name}くん`
//   }
// });
// console.log(newNameArr)
//
// /*
// *三項演算子
// */
// const num = "1300";
// const formattedNum = typeof num === 'number' ? num.toLocaleString(): "数値を入力してください";
// console.log(formattedNum);

const checksum = (num1, num2) => {
  return num1 + num2 > 100 ? "100を超えています" : num1 + num2;
};
console.log(checksum(50, 40));

for (let i = 0; i < 3; i++) {
  console.log(`${i}番目の処理です。`);
}
