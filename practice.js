console.log("=".repeat(60));
console.log("Практическая работа №3 — ES6+ для React");
console.log("=".repeat(60));

console.log("\n--- 02. Стрелочные функции ---");

const formatCurrency = (amount, currency = "RUB") =>
  `${amount.toLocaleString("ru-RU")} ${currency}`;

const createProduct = (id, title, price) => ({
  id,
  title,
  price,
  formattedPrice: formatCurrency(price),
  inStock: true,
});

console.log(formatCurrency(150000));
console.log(createProduct(101, "MacBook Air M3", 125000));

console.log("\n--- 03. Деструктуризация ---");

const incomingProps = {
  id: "btn-42",
  label: "Оформить заказ",
  variant: "success",
  config: { timeout: 3000 },
};

function renderButtonProps({ label, variant = "primary", config: { timeout } }) {
  console.log(`Кнопка: "${label}" | Стиль: ${variant} | Таймаут: ${timeout}мс`);
}

renderButtonProps(incomingProps);
renderButtonProps({ label: "Отмена", config: { timeout: 1000 } });

function mockUseState(initialValue) {
  let val = initialValue;
  const setter = (newVal) => { val = newVal; };
  return [val, setter];
}

const [currentCount, setCount] = mockUseState(10);
console.log("Начальный счётчик:", currentCount);

console.log("\n--- 04. Spread / Rest ---");

const initialUser = { id: 1, name: "Алексей", role: "Junior Developer" };

const promotedUser = {
  ...initialUser,
  role: "Middle Developer",
  updatedAt: new Date().toISOString(),
};

console.log("Ссылки равны:", initialUser === promotedUser);
console.log("Исходный объект цел:", initialUser.role);

const { id, role, ...displayData } = promotedUser;
console.log("Остаточные свойства (Rest):", displayData);

console.log("\n--- 05. CRUD корзины ---");

const initialCart = [
  { id: 1, name: "Клавиатура", price: 4000, quantity: 1 },
  { id: 2, name: "Мышь",       price: 2500, quantity: 2 },
  { id: 3, name: "Коврик",     price: 1000, quantity: 1 },
];

const newItem = { id: 4, name: "Наушники", price: 6000, quantity: 1 };
const cartAfterAdd = [...initialCart, newItem];
console.log("A. После добавления:", cartAfterAdd);

const removeId = 2;
const cartAfterDelete = cartAfterAdd.filter((item) => item.id !== removeId);
console.log("Б. После удаления id=2:", cartAfterDelete);

const targetId = 1;
const cartAfterUpdate = cartAfterDelete.map((item) =>
  item.id === targetId ? { ...item, quantity: item.quantity + 1 } : item
);
console.log("В. После изменения id=1:", cartAfterUpdate);

const totalPrice = cartAfterUpdate.reduce(
  (acc, item) => acc + item.price * item.quantity, 0
);
console.log(`Г. Общая сумма: ${totalPrice} руб.`);

console.log("\n" + "=".repeat(60));
console.log("Практика выполнена");
console.log("=".repeat(60));