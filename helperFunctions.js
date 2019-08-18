export const capitalize = (s) => {
    if (typeof s !== 'string') return ''
    return s.charAt(0).toUpperCase() + s.slice(1)
}

let TITLE_SIZE=0;

export const trimToFixedString=(s,size) => {
    if(typeof s !== 'string') return ''
    if(s.length>size)
        return s.split('').slice(0,size).join('')+"..."
    return s
}

export const deepCopy=(obj)=>{
    const newObj={};
    Object.keys(obj).forEach(key=>{
        if(typeof obj[key]=='object')
            newObj[key]=deepCopy(obj[key]);
        else
            newObj[key]=obj[key];    
    });
    return newObj;
}
