console.log(totalD(100,0.2,0.4))
console.log(3,4,3))
function totalD(TowerH, HeighS, LengthS) {
    var a = (TowerH / HeighS) * (HeighS + LengthS);
    return a;
}
//Ukradol som marekovi 
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

//# sourceMappingURL=HelloWorld.js.map
