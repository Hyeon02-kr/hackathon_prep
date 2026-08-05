// 폼에서 등록에 필요한 값을 추출한다
function readFormValues(form) {
  return {
    title: form.title.value,
    date: form.date.value,
    place: form.place.value,
    memberCount: parseInt(form.memberCount.value, 10),
    memo: form.memo.value
  };
}

// 참여 인원이 1 이상의 정수인지 검사한다
function isValidMemberCount(value) {
  return Number.isInteger(value) && value >= 1;
}

// 폼 아래 메시지 영역에 성공/에러 메시지를 표시한다
function showFormMessage(text, type) {
  const messageEl = document.getElementById('form-message');
  messageEl.textContent = text;
  messageEl.className = 'form-message ' + type;
}

// 폼 제출을 처리한다: 검증 후 storage에 등록하고 결과를 표시한다
function handleSubmit(event) {
  event.preventDefault();

  const form = event.target;
  const data = readFormValues(form);

  if (!isValidMemberCount(data.memberCount)) {
    showFormMessage('참여 인원은 1 이상의 정수로 입력해주세요.', 'error');
    return;
  }

  addActivity(data);
  form.reset();
  showFormMessage('등록되었습니다.', 'success');
}

// 등록 폼 초기화: 제출 이벤트 리스너를 연결한다
function initRegisterForm() {
  const form = document.getElementById('activity-form');
  form.addEventListener('submit', handleSubmit);
}

document.addEventListener('DOMContentLoaded', initRegisterForm);
