const printStar = n => {
  if( n % 2 === 0 || n < 1 || !Number.isInteger(n) ) throw 'Error!'
	let start = 0, end = n-1
	for(let i = 0; i < n; ++i) {
    let string = ''
		let l = start + i 
		let r = end -i
		for(let j = 0; j < n; ++j){
			if( i <= n/2 ) string += j < l || j > r ? ' ' : '*'
			else string += j < r || j > i ? ' ' : '*'
		}
		console.log(string)
	}
}
