// Calculator Logic

document.getElementById("calculateBtn").addEventListener("click", function() {

    let commute = document.getElementById("commute").value;
    let wage = document.getElementById("wage").value;

    if(commute && wage) {

        let savedHours = commute * 2;
        let value = savedHours * wage;
        document.getElementById("result").innerText = "You save " + savedHours + " hours of work worth $ " + value;
    }
});

// Modal Logic
const modal = document.getElementById("emergencyModal");
const btn = document.getElementById("emergencyBtn");
const close = document.querySelector(".close");

btn.onclick = function() {

    modal.style.display = "block";
}

close.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(e) {
    if(e.target==modal) {
        modal.style.display = "none";
    }
}