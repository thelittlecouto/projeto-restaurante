let cart = [];
const taxRate = 0.1; // 10% de taxa de serviço

function addToCart(item, price) {
  cart.push({ item: item, price: price });
  displayCart();
}

function removeFromCart(index) {
  cart.splice(index, 1);
  displayCart();
}

function displayCart() {
  const cartElement = document.getElementById('cart');
  const subtotalElement = document.getElementById('subtotal');
  const taxElement = document.getElementById('tax');
  const totalElement = document.getElementById('total');
  let subtotal = 0;

  cartElement.innerHTML = '';
  cart.forEach((item, index) => {
    const listItem = document.createElement('li');
    listItem.textContent = `${item.item} - R$ ${item.price.toFixed(2)}`;
    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remover';
    removeButton.onclick = () => removeFromCart(index);
    listItem.appendChild(removeButton);
    cartElement.appendChild(listItem);
    subtotal += item.price;
  });

  const tax = subtotal * taxRate;
  const total = subtotal + tax;

  subtotalElement.textContent = `Subtotal: R$ ${subtotal.toFixed(2)}`;
  taxElement.textContent = `Taxa (10%): R$ ${tax.toFixed(2)}`;
  totalElement.textContent = `Total: R$ ${total.toFixed(2)}`;
}

function checkout() {
  const paymentMethod = document.getElementById('payment-method').value;
  // Aqui você pode adicionar lógica para finalizar o pedido, como enviar os dados para um servidor, etc.
  alert(`Pedido finalizado com sucesso! Forma de pagamento: ${paymentMethod}`);
  clearCart();
}

function clearCart() {
  cart = [];
  displayCart();
}

// Função para gerar o calendário
function generateCalendar() {
  const calendarElement = document.getElementById('calendar');
  const selectedDate = new Date(document.getElementById('inputDate').value);
  const selectedYear = selectedDate.getFullYear();
  const selectedMonth = selectedDate.getMonth();
  const selectedDay = selectedDate.getDate();

  calendarElement.innerHTML = ''; // Limpar o conteúdo anterior do calendário

  const date = new Date(selectedYear, selectedMonth, selectedDay);
  const dateString = date.toLocaleDateString('pt-BR', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });

  const dayElement = document.createElement('div');
  dayElement.classList.add('calendar-day');
  dayElement.textContent = dateString;

  const tableAvailability = document.createElement('table');
  const availableTables = 10; // Número de mesas disponíveis por dia
  for (let j = 1; j <= availableTables; j++) {
    const row = document.createElement('tr');
    const cell = document.createElement('td');
    const reservationInput = document.createElement('input');
    reservationInput.type = 'text';
    reservationInput.placeholder = 'Nome do Cliente';
    const saveButton = document.createElement('button');
    saveButton.textContent = 'Salvar Reserva';
    saveButton.onclick = function() {
      saveReservation(dateString, `Mesa ${j}`, reservationInput.value);
    };
    cell.appendChild(reservationInput);
    cell.appendChild(saveButton);
    row.appendChild(cell);
    tableAvailability.appendChild(row);
  }
  dayElement.appendChild(tableAvailability);

  calendarElement.appendChild(dayElement);


// Função para salvar uma reserva
function saveReservation(date, table, customerName) {
  // Aqui você pode implementar a lógica para salvar a reserva em algum local persistente
  // Por exemplo, armazenamento local do navegador, banco de dados, etc.
  alert(`Reserva para ${customerName} na ${table} em ${date} foi salva com sucesso!`);


    // Adicione aqui a lógica para fechar a reserva e voltar para o site principal
    // Por exemplo, redirecionar para a página principal do site
    window.location.href = 'index.html';
  };
  dayElement.appendChild(closeButton);

  calendarElement.appendChild(dayElement);
}
