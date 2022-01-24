



var persianDigits = "۰۱۲۳۴۵۶۷۸۹";
var persianMap = persianDigits.split("");

function convertToEnglishNumber(input) {
    return input.replace(/[\u06F0-\u06F90]/g, function (m) {
        return persianDigits.indexOf(m);
    });
}
function convertToPersianNumber(input) {
    return input.replace(/\d/g, function (m) {
        return persianMap[parseInt(m)];
    });
}

function FinalNumber(input) {
    var internationalNumberFormat = new Intl.NumberFormat('en-US')
    return convertToPersianNumber(internationalNumberFormat.format(input))
}





export default { convertToPersianNumber, convertToEnglishNumber, FinalNumber };

