const isEmptyObject = (obj) => {
    for(var prop in obj) {
        if(obj.hasOwnProperty(prop)) {
            return false;
        }        
    }

    return JSON.stringify(obj) === JSON.stringify({});
}

export const helpers = {
    isEmptyObject
}