const items = document.querySelectorAll('.item');
const totalElement = document.getElementById('total-price');

items.forEach(item => {
  const minusBtn = item.querySelector('.minus-btn');
  const plusBtn = item.querySelector('.plus-btn');
  const quantityElement = item.querySelector('.item-quantity');
  const likeBtn = item.querySelector('.like-btn');
  const deleteBtn = item.querySelector('.delete-btn');
  const priceElement = item.querySelector('.item-price');

  let quantity = parseInt(quantityElement.textContent);
  let price = parseFloat(priceElement.textContent.slice(1));

  minusBtn.addEventListener('click', () => {
    if (quantity > 1) {
      quantity--;
      quantityElement.textContent = quantity;
      updateTotal();
    }
  });

  plusBtn.addEventListener('click', () => {
    quantity++;
    quantityElement.textContent = quantity;
    updateTotal();
  });

  likeBtn.addEventListener('click', () => {
    likeBtn.classList.toggle('active');
  });

  deleteBtn.addEventListener('click', () => {
    item.remove();
    updateTotal();
  });

  function updateTotal() {
    const likedItems = document.querySelectorAll('.like-btn.active').length;
    totalElement.textContent = `$${(price * quantity * (items.length - likedItems)).toFixed(2)}`;
  }
});