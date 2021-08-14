module.exports = function toReadable(number) {

    function convertToText1(number) {
        switch (+number) {
            case 2:
                return "twenty";
            case 3:
                return "thirty";
            case 4:
                return "forty";
            case 5:
                return "fifty";
            case 6:
                return "sixty";
            case 7:
                return "seventy";
            case 8:
                return "eighty";
            case 9:
                return "ninety";
            case 10:
                return "ten";
            case 11:
                return "eleven";
            case 12:
                return "twelve";
            case 13:
                return "thirteen";
            case 14:
                return "fourteen";
            case 15:
                return "fifteen";
            case 16:
                return "sixteen";
            case 17:
                return "seventeen";
            case 18:
                return "eighteen";
            case 19:
                return "nineteen";

            default:
                return "";
        }
    }

    function convertToText2(number) {
        switch (+number) {
            case 1:
                return "one";
            case 2:
                return "two";
            case 3:
                return "three";
            case 4:
                return "four";
            case 5:
                return "five";
            case 6:
                return "six";
            case 7:
                return "seven";
            case 8:
                return "eight";
            case 9:
                return "nine";

            default:
                return "";
        }
    }

        if (!+number) return "zero";
        if (number < 10) return convertToText2(number);

        const arr = String(number).split("").reverse();
        let str = "";
        let toggle = +arr[1] === 1;

        if (arr.length > 2) {
            str += `${convertToText2(arr[2])} hundred `;
        }

        if (toggle && arr.length > 1) {
            str += convertToText1(arr[1] + arr[0]);
        } else if (arr.length > 1) {
            str += `${convertToText1(arr[1])} ${convertToText2(arr[0])}`;
        }

        return str.replace(/\s+/g, ' ').trim();
};
