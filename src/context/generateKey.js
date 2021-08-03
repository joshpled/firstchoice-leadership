let date = Date.now();
let number = Math.floor(Math.random() * 100000000000);
export default function generateKey(params) {
  return `${params}_${date}_${number}`;
}
