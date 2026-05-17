function loginUser(){

    let username =
    document.getElementById("username").value;

    let password =
    document.getElementById("password").value;

    if(username !== "" && password !== ""){

        window.location.href = "home.html";

    }
    else{

        alert("Please enter username and password");
    }
}
function selectMood(element){

    let emojis =
    document.querySelectorAll('.emoji');

    emojis.forEach(e => {
        e.classList.remove('selected');
    });

    element.classList.add('selected');

    localStorage.setItem(
        "selectedMood",
        element.innerText

    );

}
function updateGreeting(){

    let hour = new Date().getHours();

    let greeting = "";

    if(hour < 12){
        greeting = "Good Morning";
    }
    else if(hour < 18){
        greeting = "Good Afternoon";
    }
    else{
        greeting = "Good Evening";
    }

    let greet =
    document.getElementById('greeting');

    if(greet){
        greet.innerHTML = greeting + ", Arya ✨";
    }
}

updateGreeting();

const moodChartCanvas =
document.getElementById('moodChart');

if(moodChartCanvas){

new Chart(moodChartCanvas, {

    type:'bar',

    data:{

        labels:['M','T','W','T','F','S','S'],
         datasets:[{
            label:'Mood Level',
            data:[3,4,2,5,4,2,4],
            backgroundColor:'#8b5cf6'
        }]
    }
});
}

const pieCanvas =
document.getElementById('pieChart');

if(pieCanvas){

new Chart(pieCanvas, {

    type:'doughnut',
    data:{

        labels:['Happy','Calm','Neutral','Sad'],

        datasets:[{
            data:[40,25,20,15],

            backgroundColor:[
                '#8b5cf6',
                '#f472b6',
                '#60a5fa',
                '#facc15'
            ]
        }]
    }
});
}