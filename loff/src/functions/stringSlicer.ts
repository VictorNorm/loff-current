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
    
    if(newString.slice(newString.length - 1, newString.length) === ",") {
        newString = newString.slice(0, newString.length - 1) + "..."
    }
    
    return newString;
}
export {stringSlicer};