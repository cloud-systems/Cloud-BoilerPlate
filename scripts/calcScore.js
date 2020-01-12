function calculate(sleep, calories, exercise){
    var sleep;
    var calories;
    var exercise;
    var totalScore;
    
    totalScore = (4.1625*sleep) + (.01665*calories) + (1.11*exercise)
    return totalScore;

}