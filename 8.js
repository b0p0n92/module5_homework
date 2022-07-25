let example = new Map();
example.set(1, "a");
example.set(2, "b");
example.set(3, "c");
example.set(4, "d");
example.set(5, "e");

let keys = example.keys();

for (let key of keys) {
  console.log(`Ключ — ${key}, значение — ${example.get(key)}`);
}