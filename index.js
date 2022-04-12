// Code your solution in this file! 43 = 1,50=8,34=8,**43=264,50=2112,34=2112

function distanceFromHqInBlocks(pickup)
{
    let location = 42
    let distance;

    if(pickup<location)
    { 
        distance = location - pickup
        return distance;
    } else{

        distance = pickup - location
    return distance }
}

function distanceFromHqInFeet(pickup)
{
    let location = 42
    let distance;

    function distanceFromHqInBlocks(pickup)
    {
        

    if(pickup<location)
    { 
        distance = (location - pickup) * 264
        return distance;
    } else{

        distance = (pickup - location) *264
        return distance }
        
        
    } return distanceFromHqInBlocks(pickup)




    
} 

function distanceTravelledInFeet(startPoint,endPoint)
{
    let distanceTravelled;
    if(endPoint>startPoint)
    {
        distanceTravelled = (endPoint - startPoint) * 264

    } 
    else
    {
        distanceTravelled = (startPoint - endPoint) * 264

    }
    return distanceTravelled

}


function calculatesFarePrice(start, destination)
{
    // distanceGone is in feet
    let distanceGone = (destination - start)*264; 
    

    if(distanceGone <=400)
    {
        return 0

    }
    else if(distanceGone>400 && distanceGone<=2000)
    {
        let fareAfterOffer = (distanceGone - 400) * 0.02
        return fareAfterOffer 


    }else if(distanceGone>2000)
    {
        return 25

    } else
    {
        return 'cannot travel that far'
    }

    
}

    






