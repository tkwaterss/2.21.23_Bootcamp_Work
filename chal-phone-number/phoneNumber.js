let test1 = [1,5,3,2,5,8,5,3,2,8];
let test2 = [5,2,1,6,8,0,3,1,5,7];
let test3 = [1,3,6,2,1,3,6,7,2];
let test4 = [1,3,6,1,5,8,15,2,5,3];
let test5 = [1,4,7,3,2,7,8,3,2,4,7,8];

const phoneNumber = arr => {
    if (arr.length === 10 && arr.every(num => num / 10 < 1)) {
        return `(${arr[0]}${arr[1]}${arr[2]}) ${arr[3]}${arr[4]}${arr[5]}-${arr[6]}${arr[7]}${arr[8]}${arr[9]}`
    } else {
        return "Please enter 10 single digit integers"
    }
}

// console.log(phoneNumber(test1));
// console.log(phoneNumber(test2));
// console.log(phoneNumber(test3));
// console.log(phoneNumber(test4));
// console.log(phoneNumber(test5));


const phone = arr => {
    if (arr.every(num => num / 10 < 1) && arr.length === 10) {
        arr.splice(0,0,'(');
        arr.splice(4,0,') ');
        arr.splice(8,0,'-');
        return arr.join('')
    } else { 
        return "Please enter 10 single digit integers"
    }
}

// console.log(phone(test1));
// console.log(phone(test2));
// console.log(phone(test3));
// console.log(phone(test4));
// console.log(phone(test5));

const phone1 = arr => {
    return `(${arr[0]}${arr[1]}${arr[2]}) ${arr[3]}${arr[4]}${arr[5]}-${arr[6]}${arr[7]}${arr[8]}${arr[9]}`
}

const phone2 = arr => {
    let phoneStr = '(xxx) xxx-xxxx';
    arr.forEach(num => phoneStr = phoneStr.replace('x', num));
    return phoneStr
}

const phone3 = (template, arr) => {
    arr.forEach(num => template = template.replace('x', num))
}