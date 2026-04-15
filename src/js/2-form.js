const formData = {
  email: '',
  message: '',
};

const form = document.querySelector('.feedback-form');

form.addEventListener('input', handleInput);
form.addEventListener('submit', handleSubmit);
handleLoad();

function handleInput(e) {
  const field = e.target;

  if (!field.name) return;

  const name = field.name;

  formData[name] = field.value.trim();

  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

function handleSubmit(e) {
  e.preventDefault();

  if (!formData.email || !formData.message) {
    alert('Fill please all fields');
    return;
  }

  console.log(formData);
  localStorage.removeItem('feedback-form-state');
  formData.email = '';
  formData.message = '';

  form.reset();
}

function handleLoad() {
  const data = JSON.parse(localStorage.getItem('feedback-form-state'));

  if (data) {
    const { email, message } = data;
    formData.email = email || '';
    formData.message = message || '';
    form.elements.email.value = formData.email;
    form.elements.message.value = formData.message;
  }
}
