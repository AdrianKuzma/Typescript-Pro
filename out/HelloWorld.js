console.log(totalD(100, 0.2, 0.4));
console.log(Values(3, 4, 3));
console.log(Triangle(2, 3, 4));
console.log(Length([1, 2, 3, 4]));
console.log(Slices(11, 5, 2));
console.log(checkPalindrom("mom"));
console.log(rps("paper", "rock"));
console.log(differenceMinMax([10, 4, 1, 4, -10, -50, 32, 21]));
console.log(waron([2, 8, 7, 5]));
console.log(semss("abc", "bc"));
console.log(Rook("F5", "C8"));
function totalD(TowerH, HeighS, lengthS) {
    var a = (TowerH / HeighS) * (HeighS + lengthS);
    return a;
}
function Values(FirstN, SecondN, ThirdN) {
    if (FirstN == SecondN || FirstN == ThirdN) {
        if (SecondN == ThirdN)
            return 3;
        else
            return 2;
    }
    if (SecondN == ThirdN)
        return 2;
    else
        return 0;
}
function Slices(ts, p, se) {
    var x = p * se;
    if (x <= ts)
        return true;
    else
        return false;
}
function Length(Array) {
    for (var i = 0; i < Array.length; ++i) {
        Array[i] = Array[i] * Array.length;
    }
    return Array;
}
function Triangle(a, b, c) {
    if (a + b > c && b + c > a && a + c > b)
        return true;
    else
        return false;
}
function checkPalindrom(str) {
    var str1 = str;
    str == str.split('').reverse().join('');
    if (str1 == str)
        return true;
    else
        return false;
}
function rps(p1, p2) {
    if (p1 == p2)
        return "TIE";
    else if (p1 == "rock" && p2 == "scissors")
        return "p1 wins";
    else if (p1 == "paper" && p2 == "rock")
        return "p1 wins";
    else if (p1 == "scissors" && p2 == "paper")
        return "p1 wins";
    else
        return "p2 wins";
}
function differenceMinMax(Arr) {
    var max = Arr[0];
    var min = Arr[0];
    for (var i = 1; i < Arr.length; i++) {
        if (Arr[i] > max)
            max = Arr[i];
        else if (Arr[i] < min)
            min = Arr[i];
    }
    return max - min;
}
function waron(arr) {
    var e = 0, o = 0;
    for (var i = 0; i < arr.length; i++) {
        if (i % 2 == 0)
            e = i + e;
        else
            o = i + o;
    }
    if (e < o)
        return o - e;
    else
        return e - o;
}
function semss(r1, r2) {
    for (var i = 0; i < r1.length; i++) {
        for (var j = 0; j < r2.length; j++) {
            if (r1[i] == r2[i])
                return true;
        }
    }
}
function Rook(r1, r2) {
    for (var i = 0; i < r1.length; i++) {
        for (var j = 0; j < r2.length; j++) {
            if (r1[i] == r2[i])
                return true;
            else
                return false;
        }
    }
}
//# sourceMappingURL=HelloWorld.js.map