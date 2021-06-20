const contract = document.getElementById('contract-address');
const holder = document.getElementById('holder-address');
const submitBtn = document.getElementById('submit-btn');
const result = document.getElementById('result');

submitBtn.addEventListener('click', handleClick);

async function handleClick(e) {
  e.preventDefault();
  if (!contract.value || !holder.value) {
    alert('Please Enter Both Values');
    return;
  }
  const url = `/api/erc/${contract.value}/${holder.value}`;
  console.log(url);

  try {
    result.textContent = 'Loading';
    const res = await axios.get(url, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    result.textContent = res.data.tokens;
  } catch (err) {
    console.log(err);
  }
}
