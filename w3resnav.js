const arrow = () =>
{
	const dropbtn = document.querySelector('.dropbtn');
	const arrow = document.querySelector('span.arrow');
	const dropdownItems = document.querySelector('.dropdown-items');	
	dropbtn.addEventListener('click',() =>
	{		
		arrow.classList.toggle('arrowRotate');
		dropdownItems.classList.toggle('dropdown-items-show');
	});
};

const callFunction = () =>
{
	arrow();
}
callFunction();