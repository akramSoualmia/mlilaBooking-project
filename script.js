var showBtn = document.querySelector('.menu');
var sideBar = document.querySelector('.side-bar');
var cancelBtn = document.querySelector('#cancel-btn');
var modal =document.querySelector('#modal');

showBtn.addEventListener('click', () =>{
	sideBar.classList.add("show");
	modal.classList.add("show-modal");
})
cancelBtn.addEventListener('click', ()=>{
	sideBar.classList.remove("show");
	modal.classList.remove("show-modal");
})
modal.addEventListener('click' , (event)=>{
	
	if(event.target === modal){
        sideBar.classList.remove('show');
        modal.classList.remove('showModal');
    }
})