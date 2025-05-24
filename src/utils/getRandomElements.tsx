function getRandomElements<T>(array: T[], count: number): T[] {
  const result = [...array]; // sao chép mảng gốc để không ảnh hưởng
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]]; // hoán đổi vị trí
  }
  return result.slice(0, count); // lấy `count` phần tử đầu
}
export default getRandomElements;