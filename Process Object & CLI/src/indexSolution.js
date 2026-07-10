const command = process.argv[2];
const first = Number(process.argv[3]);
const second = Number(process.argv[4]);


switch (command) {
    case "add":
        console.log(first + second);
        break;

    case "subtract":
        console.log(first - second);
        break;

    case "multiply":
        console.log(first * second);
        break;

    case "divide":
        console.log(first / second);
        break;

    default:
        console.log("Invalid Operation");
}
