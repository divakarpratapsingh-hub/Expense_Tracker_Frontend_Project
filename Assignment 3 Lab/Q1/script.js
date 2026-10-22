
const form = document.getElementById("bmiForm");
const result = document.getElementById("result");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    const height = Number(document.getElementById("height").value);
    const weight = Number(document.getElementById("weight").value);

    if (height <= 0 || weight <= 0 ||
        !Number.isFinite(height) || !Number.isFinite(weight)) {
        result.textContent = "Please enter valid height and weight.";
        return;
    }

    const heightInMeters = height / 100;

    const bmi = weight / (heightInMeters * heightInMeters);

    let category;

    if (bmi < 18.5) {
        category = "Underweight";
    } else if (bmi < 25) {
        category = "Normal weight";
    } else {
        category = "Overweight";
    }

    result.innerHTML =
        "Your BMI is: <strong>" + bmi.toFixed(2) +
        "</strong><br>Category: <strong>" + category + "</strong>";
});
