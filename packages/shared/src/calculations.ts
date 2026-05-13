// first we have to declare gender there are 2 options
enum Gender {
  MALE = "male",
  FEMALE = "female",
}
// then we have to declare input parameters for calculation
interface BMRInput {
  age: number; // in years
  gender: Gender;
  weight: number; // in kg or lbs
  weightUnit: "kg" | "lbs";
  height: number; // in cm or feet/inches
  heightUnit: "cm" | "ft-in";
  // height will be provided as a number in cm and feet-inch but feet inch and height can be emoy but heightcm is empty then feet and inch canot be empty
}

// function to convert feet/inches to cm
function feetInchesToCm(feet: number, inches: number): number {
  return feet * 30.48 + inches * 2.54;
}
// function to convert lbs to kg
function lbsToKg(lbs: number): number {
  return lbs * 0.453592;
}
// main function to calculate BMR
export function calculateBMR(input: BMRInput): number {
  let weightInKg = input.weight;
  let heightInCm = input.height;
  // convert weight to kg if in lbs
  if (input.weightUnit === "lbs") {
    weightInKg = lbsToKg(input.weight);
  }
  // convert height to cm if in feet/inches
  if (input.heightUnit === "ft-in") {
    const [feet, inches] = input.height.toString().split("-").map(Number);
    heightInCm = feetInchesToCm(feet, inches);
  }
  // calculate BMR using Mifflin-St Jeor Equation
  if (input.gender === Gender.MALE) {
    return 10 * weightInKg + 6.25 * heightInCm - 5 * input.age + 5;
  } else {
    return 10 * weightInKg + 6.25 * heightInCm - 5 * input.age - 161;
  }
}

export function calculateTDEE(bmr: number, activityFactor: number): number {
  return bmr * activityFactor;
}
