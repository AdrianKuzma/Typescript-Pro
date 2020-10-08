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
console.log(totalD(0.2, 0.4, 100));
console.log(Values(3, 4, 3));
//# sourceMappingURL=HelloWorld.js.map