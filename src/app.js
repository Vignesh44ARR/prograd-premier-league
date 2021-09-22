//Progression 1 - create a Manager array and return it
let managerName = "Alex Ferguson";
let managerAge = 78;
let currentTeam = "Manchester FC";
let trophiesWon = 27;

//Write your function here

function createManager(managerName, managerAge, currentTeam, trophiesWon) {
  var details = [managerName, managerAge, currentTeam, trophiesWon];
  return details;
}

// Don't edit the following code
try {
  var manager = createManager(
    managerName,
    managerAge,
    currentTeam,
    trophiesWon
  );
} catch (e) {
  // do nothing - expected error
}

//Progression 2 - create a formation object and return it
var formation = [4, 4, 3];

//write your function here

function createFormation(formation) {
  if (formation.length == 0) return null;
  else {
    var obj = {
      defender: formation[0],
      midfield: formation[1],
      forward: formation[2],
    };
    return obj;
  }
}

// Dont edit the following code

try {
  var formationObject = createFormation(formation);
} catch (e) {
  //do nothing
}

//Progression 3 - Filter players that debuted in ___ year

function filterByDebut(year) {
  var arr = [];
  var index = 0;
  for (const i of players)
    if (i.debut === year) {
      arr[index] = i;
      index++;
    }
  return arr;
}

//Progression 4 - Filter players that play at the position _______

function filterByPosition(position){
  var arr = [];
  var index = 0;
  for (const i of players)
    if (i.position === position) {
      arr[index] = i;
      index++;
    }
  return arr;
}

//Progression 5 - Filter players that have won ______ award


function filterByAward(awardName){
  var arr = [];
  var index = 0;
  for (const i of players){
    for(var j=0;j<i.awards.length;j++){
      if(i.awards[j].name===awardName){
        arr[index]=i;
        index++;
      }
    }
  }
  return arr;
}


//Progression 6 - Filter players that won ______ award ____ times


function filterByAwardxTimes(awardName, noOfTimes){
  var arr = [];
  var index = 0;
  for (const i of players){
    var count=0;
    for(var j=0;j<i.awards.length;j++){
      if(i.awards[j].name===awardName){
        count++;
      }
    }
    if(count===noOfTimes){
      arr[index]=i;
      index++;
    }
  }

  return arr;    
}

//Progression 7 - Filter players that won ______ award and belong to ______ country


function filterByAwardxCountry(awardName, country){
  var arr = [];
  var index = 0;
  for (const i of players){
    var count=0;
    if(i.country===country){
      for(var j=0;j<i.awards.length;j++){
         if(i.awards[j].name===awardName)
            count++;
     }
    }
      if(count!=0 &&  i.country===country){
        arr[index]=i;
        index++;
      }
    }
    return arr;
    }
//Progression 8 - Filter players that won atleast ______ awards, belong to ______ team and are younger than ____
function filterByNoOfAwardsxTeamxAge(noOfAwards, team, age){
  var arr = [];
  var index = 0;
  for (const i of players){
    var count=0;
    if(i.team===team && i.age<age && i.awards.length>=noOfAwards){
    arr[index]=i;
    index++;
    }
  }
   
    return arr;
}





//Progression 9 - Sort players in descending order of their age
function swap(arr, xp, yp) {
  var temp = arr[xp];
  arr[xp] = arr[yp];
  arr[yp] = temp;
}
function sortby(players){
  var n=players.length;
  var i,j;
  for (i = 0; i < n-1; i++){
    mins=i;
    for (j = i + 1; j < n; j++)
        if(players[j].age<player[j+1].age){
          mins=j;
        }
     swap(playes,mins,i)   
  }
  
   
}

sortby(players);



//Progression 10 - Sort players beloging to _____ team in descending order of awards won

//Challenge 1 - Sort players that have won _______ award _____ times and belong to _______ country in alphabetical order of their names

//Challenge 2 - Sort players that are older than _____ years in alphabetical order
//Sort the awards won by them in reverse chronological order
