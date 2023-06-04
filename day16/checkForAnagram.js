/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length !== t.length) return false
    let map =  new Map()
    for( let i = 0 ; i <s.length ;i++){
        if( map.has( s[i] ) ) map.set(s[i] , map.get( s[i] ) + 1 )
        else map.set(s[i] , 1 )
    }
    
    for( let i =0  ; i < s.length ;i++){
        if( !(map.has(t[i])  && map.get( t[i] ) > 0)  ) return false
        else if( (map.has(t[i]) ) )  map.set(t[i], map.get( t[i]) - 1 )
    }
    return true
};