document.addEventListener('DOMContentLoaded',function(){fetch('class.json') 
.then(response => response.json()) 
.then(data => renderData(data))
.catch(error => console.error('error while fetching the data: ',error));
});
function renderData(data){
	const dataContainer = document.getElementById('data-container');
	data.forEach(item => {const itemElement = document.createElement('div');
	itemElement.innerHTML = '<strong>${item.title}</strong>: ${item.value}';
	dataContainer.appendChild(itemElement);
	});
}
