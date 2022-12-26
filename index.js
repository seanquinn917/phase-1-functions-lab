let value;
function distanceFromHqInBlocks(value){
    if (value >= 42)
    return value - 42;
    else (value <= 42)
    return 42 - value;
};

function distanceFromHqInFeet(value){
    return distanceFromHqInBlocks(value) *264;
};

function distanceTravelledInFeet(start, destination){
    if (start <= destination)
    return (destination - start) *264;
    else return (start - destination) * 264
}
    function calculatesFarePrice(start, destination){
       let distance = distanceTravelledInFeet(start, destination);
        if (distance <= 400){
        return 0;
        }
        else if (distance >= 400 && distance <= 2000){
        return (distance - 400) * 0.02;
        }
        else if (distance >= 2000 && distance <=2499){
            return 25;
        }
        else if (distance > 2500){
        return "cannot travel that far";
        }
    };

