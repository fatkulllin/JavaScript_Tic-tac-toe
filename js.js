let cells = document.querySelectorAll('#field td');
start(cells);
let div1 = document.querySelector('#div1')
let div2 = document.querySelector('#div2')

function start(cells) {
let k =0
	for(let i=0;i<cells.length;i++){
		cells[i].addEventListener('click',function func(){
			this.innerHTML = ['X', 'O'][k % 2];
			k++;
			this.removeEventListener('click', func);

			if (isVictory(cells)) {
				alert(this.innerHTML);
			}else if(k == 9){
				alert('ничья')
			}
	});
	};

};

function isVictory(cells) {
	console.log(cells)
	let combs = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6],

	];

	for (let comb of combs) {
		console.log(comb[0] + '	' + comb[1] + '	' + comb[2])
		console.log(cells[comb[0]].innerHTML + '	' + cells[comb[1]].innerHTML + '	' + cells[comb[1]].innerHTML)
		if (

			cells[comb[0]].innerHTML == cells[comb[1]].innerHTML &&
			cells[comb[1]].innerHTML == cells[comb[2]].innerHTML &&
			cells[comb[0]].innerHTML != ''
		) {
			return true;
		}
	}
	
	return false;
}