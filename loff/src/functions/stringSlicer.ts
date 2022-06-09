/**
 * Slices a string after desired length and adds "..."
 * Removes unwanted characters (",", "!", ".") if the string ends with it. 
 * @stringToSlice This is the string being sliced
 * @characterIndex This is the desired length
 * @newString This is the new sliced string
 */

function stringSlicer(stringToSlice: string, characterIndex: number): string  {
    if(stringToSlice.length <= characterIndex) {
        return stringToSlice;
    }

    let newString = "";

    for(let i = characterIndex; i < stringToSlice.length; i++) {
        if(stringToSlice[i] === " ") {
            newString = stringToSlice.slice(0, i);
            break;
        }
    }
    
    if(newString.slice(newString.length - 1, newString.length) === "," || 
    newString.slice(newString.length - 1, newString.length) === "!" ||
    newString.slice(newString.length - 1, newString.length) === ".") {
        newString = newString.slice(0, newString.length - 1) + "..."
    }
    
    return newString;
}
export {stringSlicer};