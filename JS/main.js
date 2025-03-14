// Showing Current Local date in Tasks Section
const dateCurrent = document.getElementById("current-date");
const dateNow = new Date();
dateCurrent.innerText = dateNow.toDateString();



// Complete button Click Functions

//Total Number of Tasks Count
const taskCards = document.getElementsByClassName("task-card");

function countTasks() {
  let cardCount = 0;
  for (const taskCount of taskCards) {
    cardCount += 1;
  }

  return cardCount;
}

const completeButton = document.querySelectorAll(".comp-btn");
const totalTaskCount = document.getElementById("assigned-tasks"); //Getting the tag containing assigned tasks.
const numAssigned = countTasks();
totalTaskCount.innerText = numAssigned;

const compTasksNav = document.getElementById("tasks-comp"); //Getting the tag containing completed tasks in Navbar.
const activityLog = document.getElementById("activity-log");

function reduceTaskCount() { //Function for reducing task count
  let tCount = totalTaskCount.innerText;
  let intTaskCount = parseInt(tCount);
  let reducedCount = intTaskCount-1;
  return Math.max(0, reducedCount);
}

function incrementTaskCount() { //Function for incrementing task count
  let compCount = compTasksNav.innerText;
  let intCompCount = parseInt(compCount);
  let incrementCount = intCompCount+1;
  return Math.max(0, incrementCount);
}

if(totalTaskCount.innerText == numAssigned){
  compTasksNav.innerText = "0";
}

for (const btn of completeButton) {
  btn.addEventListener("click", function(e) {
    //Show alert when complete button is clicked
    alert("Board Updated Successfully");
    
    // Reduce the task count when clicked
    const updatedTaskCount = reduceTaskCount();
    totalTaskCount.innerText = updatedTaskCount;
    
    //Update Completed tasks in Nav
    compTasksNav.innerText=incrementTaskCount();

    //Update Activity Log with Completed task
    const mainCard = e.target.closest(".task-card");
    const cardTitle = mainCard.querySelector(".card-title").innerText;
    const currTime = new Date();
    const clickTime = currTime.toLocaleTimeString();

    let createLog = document.createElement('div');
    createLog.innerHTML = `<p>You have completed the task ${cardTitle} at ${clickTime}</p>`
    createLog.classList.add("added-act", "bg-gray-2", "mt-6", "px-4", "py-3", "rounded-xl");
    activityLog.appendChild(createLog);

    // Disable the Complete Button after click
    btn.classList.remove("bg-blue-primary","text-white","cursor-pointer","transition","duration-150", "ease-in-out","hover:scale-102");
    btn.disabled = true;
    btn.classList.add("bg-gray-300","text-gray-400", "cursor-not-allowed");
    
    // Show alert if all task completed
    if (updatedTaskCount === 0){
      alert("Congrats!! You have Completed All the Current Tasks!");
    }
  });
}

// Clear History
const clrHistBtn = document.getElementById("clr-hist-btn");

clrHistBtn.addEventListener("click", function(){
  const activities = document.querySelectorAll(".added-act");
  for(act of activities){
    act.remove();
  }
})

// Random Color in body

function randomColor(){
  const chars = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F','a','b','c','d','e','f'];
  let colorHash= '#';

  for(i=0; i<6; i++){
    let index = Math.floor(Math.random()*16);
    let colorHex = chars[index];
    colorHash+=colorHex;
  }
  return colorHash;
}

const colorChangeBtn = document.getElementById("color-chng-btn");
let newColor = "";

colorChangeBtn.addEventListener("click", function() {
  let randGenCol = randomColor();

  if (document.body.classList.contains("bg-body-bg")) {
    document.body.classList.remove("bg-body-bg");
  }
  document.body.style.backgroundColor = randGenCol;
  newColor = randGenCol;
});

// Discover new
const discoverCard = document.getElementById("discover-card");
discoverCard.addEventListener("click",function(){
  window.open('./blogs.html','_self');
})



