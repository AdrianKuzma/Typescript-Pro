console.log(totalD(100,0.2,0.4))
console.log(Values(3,4,3))
console.log(Triangle(2, 3, 4))
console.log(Length([1, 2, 3, 4]))
console.log(Slices(11, 5, 2))
console.log(checkPalindrom("mom"))
console.log(differenceMinMax([10, 4, 1, 4, -10, -50, 32, 21]))
function totalD (TowerH:number,HeighS:number,lengthS:number){
    const a:number = (TowerH /HeighS) * (HeighS + lengthS)
    return a
}
function Values(FirstN:number,SecondN:number,ThirdN:number){
    if (FirstN == SecondN || FirstN == ThirdN){
        if(SecondN == ThirdN)
            return 3
        else 
            return 2
    }
    if (SecondN == ThirdN)
        return 2
    else 
        return 0
}
function Slices(ts:number,p:number,se:number){
    const x = p * se
    if (x <= ts)
        return true;
    else 
        return false;
}
function Length(Array: number[]){
    for (var i = 0; i < Array.length; ++i) {
        Array[i] = Array[i] * Array.length
    }
    return Array  
}
function Triangle (a:number,b:number,c:number) {
    if (a + b > c && b + c > a && a + c > b)
        return true;
    else
        return false;
}
function checkPalindrom (str:string) {
    const str1:string=str
    str == str.split('').reverse().join('')
    if(str1 == str)
        return true
    else 
        return false
}
function differenceMinMax(Arr: number[]) {
    let max: number = Arr[0]
    let min: number= Arr[0]
    for(let i = 1; i < Arr.length; i++)
    {
        if(Arr[i] > max)
            max = Arr[i];
        else if(Arr[i] < min)
            min = Arr[i];
    }
    return max-min
}