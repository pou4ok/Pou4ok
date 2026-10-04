function createCartStore() {
  const DEFAULT = [
    { id: 1, name: "Клавиатура", price: 4000, quantity: 1 },
    { id: 2, name: "Мышь",       price: 2500, quantity: 2 },
    { id: 3, name: "Коврик",     price: 1000, quantity: 1 },
  ];

  let state = DEFAULT;

  return {
    render: () => state.map((i) => `${i.name} (x${i.quantity})`).join(", "),
    total:  () => state.reduce((acc, i) => acc + i.price * i.quantity, 0),
    addItem: (item) => { state = [...state, item]; },
    removeItem: (id) => { state = state.filter((i) => i.id !== id); },
    incrementQty: (id) => {
      state = state.map((i) =>
        i.id === id ? { ...i, quantity: i.quantity + 1 } : i
      );
    },
    reset: () => { state = DEFAULT; },
    getState: () => state,
  };
}

const cart = createCartStore();

const log = (label) =>
  console.log(
    `${label.padEnd(16)} | ${cart.render().padEnd(60)} | Сумма: ${cart.total()}`
  );

console.log("=".repeat(110));
console.log("Client Runtime Simulator — иммутабельная корзина");
console.log("=".repeat(110));

log("Старт:");
cart.addItem({ id: 4, name: "Наушники", price: 6000, quantity: 1 });
log("+ товар:");
cart.removeItem(2);
log("− товар #2:");
cart.incrementQty(1);
log("+1 к #1:");
cart.reset();
log("Сброс:");

console.log("=".repeat(110));