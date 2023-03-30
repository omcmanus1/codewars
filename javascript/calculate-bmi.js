function bmi(weight, height) {
  const bmiValue = weight / (height * height);
  if (bmiValue > 30) return "Obese";
  else if (bmiValue <= 18.5) return "Underweight";
  else if (bmiValue <= 25) return "Normal";
  else if (bmiValue <= 30) return "Overweight";
}
