// Code your solution in this file
function distanceFromHqInBlocks(someValue){
if (someValue>42){
    return someValue-42
}
else {return 42 - someValue;}
   
}


function distanceFromHqInFeet(someValue){
    let x = distanceFromHqInBlocks(someValue)
    return (x*264)
    
    }


    function distanceTravelledInFeet(start,destination){

        if (destination < start ){
             return (start-destination)*264
    }
     else {
        return (destination-start)*264
     }
    }
    function calculatesFarePrice(start, destination){

        let y= distanceTravelledInFeet(start,destination)

        if( y<=400){
            return 0
        }

        else if (y<=2000){
            return 0.02*(y-400)
        }

        else if(y<=2500){
            return 25

        }
        else {
            return "cannot travel that far"
        }

    


        }
        
    