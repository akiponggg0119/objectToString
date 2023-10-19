/**
 * 
 * @param {object} obj 
 * @returns {string}
 */
export function objectTostring(obj) {
    if(typeof obj === "string") {
        return `"${obj}"`;
    } else if(Array.isArray(obj)) {
        return `[\n${addIndent(obj.map(i => objectTostring(i)).join(",\n"))}\n]`;
    } else if(typeof obj === "object") {
        let res = "";
        for(const i in obj) {
            res += (res.length ? ",\n" : "") + i + ": " + objectTostring(obj[i]);
        }
        return `{\n${addIndent(res)}\n}`;
    } else {
        return String(obj);
    }
}

/**
 * 
 * @param {string} str 
 * @param {number} num
 */
function addIndent(str,num=4) {
    return str.replace(/^|(?<=\n)/g," ".repeat(num));
}