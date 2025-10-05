let submitBtn = document.getElementById("submitBtn");

submitBtn.addEventListener("click", function(event){
    event.preventDefault();
    document.querySelector(".mainForm").style.display = "none";
    document.querySelector(".ticket").style.display = "block";
});