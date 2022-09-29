// 함수내부에서 외부로부터 주어진 인자의 값을 변경하는 것은 💩
// 상태변경이 필요한 경우에는, 새로운 상태를(오브젝트, 값) 만들어서 반환해야 함 ✨
// 원시값 - 값에 의한 복사 <- 값 자체가 복사되기때문에 큰 문제는 없음
// 객체값 - 참조에 의한 복사 (메모리주소) <- 동일한 오브젝트를 가리키기 때문에 함수 내부에서 인자로 전달된 값을 변경하면 큰문제가 발생한다
function display(num) {
  num = 5; // ❌
  console.log(num);
}
const value = 4;
display(value);
console.log(value);

function displayObj(obj) {
  obj.name = "Bob"; // ❌❌❌❌❌❌ 외부로 부터 주어진 인자(오브젝트)를 내부에서 변경 ❌
  console.log(obj);
}
const ellie = { name: "Ellie" };
displayObj(ellie);
console.log(ellie);

function changeName(obj) {
  return { ...obj, name: "Bob" }; // 반환 할때는 새로운 오브젝트를 만드는게 중요!
}
