/** @format */

const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
     event.preventDefault();

     const height = parseInt(document.querySelector("#height").value);
     const weight = parseInt(document.querySelector("#weight").value);
     const result = document.querySelector("#results");

     result.style.color=''

     if (isNaN(height) || height <= 0) {
          result.innerHTML = `Please enter a valid height greater than 0. ${height}`;
          return;
     } else if (isNaN(weight) || weight <= 0) {
          result.innerHTML = `Please enter a valid weight greater than 0.  ${weight}`;
          return;
     } else if (height > 100 && weight > 5) {
          const BMI = (weight / ((height * height) / 10000)).toFixed(2);
          let category = "";
          if (BMI < 18.5) {
               category = "Underweight";
          } else if (BMI >= 18.5 && BMI <= 24.9) {
               category = "Normal weight";
          } else if (BMI >= 25 && BMI <= 29.9) {
               category = "Overweight";
          } else {
               category = "Obese";
          }
 
          result.innerHTML = `<span>Your BMI is : ${BMI} <br> You are : ${category}.</span>`;
     } else {
          result.style.color = "#ff2626";
          result.style.fontWeight = "bold";
          result.style.fontFamily = 'Arial';
          result.innerHTML = `your height: ${height} and<br> weight: ${weight} . You provide incorrect value`;
     }
});
