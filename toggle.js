const slideMenu = () =>
{
	const burgur = document.querySelector('.burgur');
	const menu = document.querySelector('.menu');
	//menu Toggle
	burgur.addEventListener('click',() =>
	{
		menu.classList.toggle('menuActive');
	});
};

const click = () =>
{
	const button = document.querySelector('button');
	const para = document.querySelector('p');
	//button
	button.addEventListener('click',() =>
	{
		document.getElementById('para').innerHTML = 'SEEJN';
		para.style.color = 'green';
		para.style.textAlign = 'center';
		para.style.fontSize = '50px';
		button.style.display = 'none';
	});
};

const showHide = () =>
{
	const container = document.querySelector('.showHide');
	const button = document.querySelector('.button');
	button.addEventListener('click', () => 
	{
		container.classList.toggle('showHideActive');
	});
};

const app = () =>
{
	slideMenu();
	click();
	showHide();
};
app();