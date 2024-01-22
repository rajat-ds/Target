/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
    let board = Array(n).fill(0)
    let str = Array(n).fill(".")
    for( let i = 0 ; i < board.length ; i++ ){
        board[i] = [...str]
    }
    let ans = []
    let upperDiagonal = Array(2*n - 1 ).fill(0)
    let lowerDiagonal = Array(2*n - 1 ).fill(0)
    let rowMark = Array(n).fill(0)
    solve(0 , board , ans , n ,  rowMark ,lowerDiagonal,upperDiagonal  )
    return ans
};

const solve = ( col , board , ans , n , rowMark ,lowerDiagonal,upperDiagonal   ) =>{
        if( col === n ) {
             let newBoard = Array(n).fill(0)
             for( let i = 0 ; i < board.length ; i++ ){
                 newBoard[i] = [...board[i]].join("")
         }
            ans.push(newBoard)
  
            return
        }
    for( let row = 0 ; row < n ; row++ ){
        if( !rowMark[row] && !lowerDiagonal[row+col] && !upperDiagonal[(n-1) + ( col - row )]  ){
            board[row][col] = "Q"
            rowMark[row] = 1 
            lowerDiagonal[row+col] =1
            upperDiagonal[(n-1) + ( col - row )]  = 1
            
            solve(col+1 , board , ans , n , rowMark ,lowerDiagonal,upperDiagonal )
            board[row][col] = "."
            rowMark[row] = 0
            lowerDiagonal[row+col] = 0
            upperDiagonal[(n-1) + ( col - row )]  = 0
            
        }
    }    
}
