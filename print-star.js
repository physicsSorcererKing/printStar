const printStar = n => {
  if( n % 2 === 0 || n < 1 || !Number.isInteger(n) ) throw 'Error!'
  const start = 0, end = n-1
  for(let i = 0; i < n; ++i) {
    let row = ''
    let l = start + i 
    let r = end -i
    for(let j = 0; j < n; ++j){
	row += ( i < n/2 ) ? ( j < l || j > r ? ' ' : '*') : ( j < r || j > i ? ' ' : '*' )
    }
    console.log(row)
  }
}
