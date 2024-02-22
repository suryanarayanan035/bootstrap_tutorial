const alertMessageElement = document.getElementById('alert-message');
const nameElement = document.getElementById('name');
const rollnumberElement = document.getElementById('rollnumber');
const GPAElement = document.getElementById('GPA');
const genderElement = document.getElementById('gender');
const hideAlertOnChange = () => {
	console.log('change triggered');
	alertMessageElement.className = 'd-none';
};

nameElement.addEventListener('change', hideAlertOnChange);
rollnumberElement.addEventListener('change', hideAlertOnChange);
GPAElement.addEventListener('change', hideAlertOnChange);
genderElement.addEventListener('change', hideAlertOnChange);

const handleSubmit = (e) => {
	e.preventDefault();
	console.log('data', e);
	if (
		!nameElement.value ||
		!rollnumberElement.value ||
		!GPAElement.value ||
		!genderElement.value
	) {
		alertMessageElement.innerText = 'Please Fill all the data';
		alertMessageElement.className = 'alert d-block alert-danger';
	} else {
		alertMessageElement.innerText = 'Data Saved Successfully';
		alertMessageElement.className = 'alert  d-block alert-success';
		const table = document.getElementById('student-data');
		const newRow = `<tr><td>${name}</td><td>${rollnumber}</td><td>${gender}</td><td>${GPA}</td></tr>`;
		table.children[0].insertAdjacentHTML('beforeend', newRow);
	}
};

document.getElementById('add-form').addEventListener('submit', handleSubmit);
