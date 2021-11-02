export function getValue(data, placeholder) {
  if (data === "" || !data) {
    console.log(placeholder);
    return placeholder;
  }
  console.log(data);
  return data;
}
