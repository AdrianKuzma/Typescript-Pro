console.log(totalD(100,0.2,0.4))
console.log(values(3,4,3))
console.log(triangle(2, 3, 4))
console.log(length1([1, 2, 3, 4]))
console.log(slices(11, 5, 2))
console.log(checkPalindrom("mom"))
console.log(rps("paper","rock"))
console.log(differenceMinMax([10, 4, 1, 4, -10, -50, 32, 21]))
console.log(waron([2, 8, 7, 5]))
console.log(endw("feminine", "nine"))
console.log(rook("F5","C8"))

function totalD (towerH:number,heighS:number,lengthS:number):number{
    const a:number = (towerH /heighS) * (heighS + lengthS)
    return a
}

function values(fn:number,sn:number,tn:number):number{
    if(fn == sn && fn == tn)
        return 2
    else if (sn == tn)
        return 3
    else 
    if(sn == tn)
        return 2
}   

function slices(ts:number,p:number,se:number):boolean{
    const x = p * se
    if (x <= ts)
        return true;
    else
        return false;
}

function length1(array: number[]):number[]{
    for (var i = 0; i < array.length; ++i) {
        array[i] = array[i] * array.length
    }
    return array  
}

function triangle (a:number,b:number,c:number):boolean {
    if (a + b > c && b + c > a && a + c > b)
        return true;
    else
        return false;
}

function checkPalindrom (str:string):boolean {
    const str1:string=str
    str == str.split('').reverse().join('')
    if(str1 == str)
        return true
    else
        return false
}

function rps(p1:string,p2:string):string{
    if (p1 == p2)
        return "TIE"
    else if (p1 == "rock" && p2 == "scissors")
        return "p1 wins"
    else if (p1 == "paper" && p2 == "rock")
        return "p1 wins"
    else if (p1 == "scissors" && p2 == "paper")
        return "p1 wins"
    else return "p2 wins"
}

function differenceMinMax(arr: number[]):number {
    let max: number = arr[0]
    let min: number= arr[0]
    for(let i = 1; i < arr.length; i++)
    {
        if(arr[i] > max)
            max = arr[i];
        else if(arr[i] < min)
            min = arr[i];
    }
    return max-min
}

function waron(arr: number[]):number{
    let e:number = 0, o:number = 0
    for(var i = 0; i < arr.length;i++){
        if(i % 2 == 0)
            e = i + e;     
        else 
            o = i + o
    }
    if(e < o)
        return o - e
    else 
        return e - o
}
function endw(word:string,end:string):boolean{
    let a:number = word.length
    let b:number = end.length 
    let c:number = a - b
    if(word.substr(c) == end)
        return true
    else
        return false
}

function rook(r1:String,r2:string):boolean{
    for(var i = 0; i < r1.length; i++){
        for(var j = 0; j < r2.length; j++){
            if(r1[i] == r2[i])
                return true
            else 
                return false
        }

    }

}