const boxes = document.querySelectorAll('.box');
const totalPrice = document.getElementById('total-price');
const addToCart = document.querySelector('.add-to-cart');


boxes.forEach(box => {
  box.addEventListener('click', (e) => {
    if (e.target.tagName === 'SELECT') return;

    boxes.forEach(b => b.classList.remove('active'));
    box.classList.add('active');
    box.querySelector('input').checked = true;

    const price = box.getAttribute('data-price');
    totalPrice.textContent = `DKK ${price}.00`;
  });


  const colorSelectors = box.querySelectorAll('.color');
  colorSelectors.forEach(selector => {
    selector.addEventListener('change', () => {
     
      const color = selector.value.toLowerCase();
      console.log(`Color selected: ${color}`);
    });
  });
});


const container = document.querySelector('.container');

container.addEventListener('mouseenter', () => {
  container.classList.add('hover-active');
});

container.addEventListener('mouseleave', () => {
  container.classList.remove('hover-active');
});

// Add to Cart button
addToCart.addEventListener('click', () => {
  const activeBox = document.querySelector('.box.active');
  const pairs = activeBox.getAttribute('data-pairs');
  const price = activeBox.getAttribute('data-price');
  const sizes = [...activeBox.querySelectorAll('.size')].map(sel => sel.value);
  const colors = [...activeBox.querySelectorAll('.color')].map(sel => sel.value);

  alert(`✅ Added to cart:\nPairs: ${pairs}\nPrice: DKK ${price}\nSizes: ${sizes.join(', ')}\nColors: ${colors.join(', ')}`);
});
