let value = "5";
let valueType = typeof value;
switch (valueType) {
  case "number":
    console.log("X — число");
    break;
  case "boolean":
    console.log("X — логический тип");
    break;
  case "string":
    console.log("X — строка");
    break;
  default:
    console.log("Тип не определен");
}
