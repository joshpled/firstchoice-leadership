let date = Date.now();
export default function generateKey() {
  return `${date}_${Math.floor(Math.random() * 100000000)}`;
}
