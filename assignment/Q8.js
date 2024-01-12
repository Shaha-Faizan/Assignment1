let target = 10;
let sum = 0;
let currentnum = 1;

do{
    sum += currentnum;
    currentnum++;
}while(currentnum <= target);

console.log(`sum of 1 to ${target} : ${sum}`);