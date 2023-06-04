/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function(version1, version2) {
    let v1 = version1.split('.')
    let v2 = version2.split('.')
    let maxLen = Math.max(v1.length,v2.length)
    for(let i = 0 ; i < maxLen ; i++ ){
        let num1 = i < v1.length ? Number(v1[i]) : 0 ;
        let num2 = i < v2.length ? Number(v2[i]) : 0 ;   
        if( num1 > num2 ) return 1
        else if( num2 > num1 ) return -1
    }
    return 0
};