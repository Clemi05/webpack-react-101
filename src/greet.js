import { upcase } from "./capitalize";

function greet(firstName) {
  return `Hello ${upcase(firstName)}`;
}

// export { greet };
export default greet;
