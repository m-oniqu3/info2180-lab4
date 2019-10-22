function display_board() 
{
	board=document.getElementById("board").children;
	for (let i=0; i<9; i++) {
		board[i].classList.add("square");
		//setAttribute("class", "square");
		
	}
		
}
window.onload=display_board;

