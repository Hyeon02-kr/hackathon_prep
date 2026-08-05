// 사용자 입력값의 HTML 특수문자를 이스케이프한다
function escapeHtml(str) {
  const div = document.createElement('div');
  div.textContent = str || '';
  return div.innerHTML;
}

// 활동 하나를 카드 HTML 문자열로 만든다
function formatActivityCard(activity) {
  return '' +
    '<div class="activity-card" data-id="' + activity.id + '">' +
      '<h3>' + escapeHtml(activity.title) + '</h3>' +
      '<p>날짜: ' + activity.date + ' | 장소: ' + escapeHtml(activity.place) + '</p>' +
      '<p>참여 인원: ' + activity.memberCount + '명</p>' +
      '<p>메모: ' + escapeHtml(activity.memo) + '</p>' +
      '<button class="delete-btn" data-id="' + activity.id + '">삭제</button>' +
    '</div>';
}

// 활동 목록을 최신순으로 정렬해 화면에 그린다 (비어있으면 안내 문구 표시)
function renderList(activities) {
  const container = document.getElementById('activity-list');
  const sorted = activities.slice().sort(function (a, b) {
    return b.createdAt.localeCompare(a.createdAt);
  });
  if (sorted.length === 0) {
    container.innerHTML = '<p class="empty-message">등록된 활동이 없습니다.</p>';
    return;
  }
  container.innerHTML = sorted.map(formatActivityCard).join('');
}

// 삭제 버튼 클릭을 처리한다 (확인창에서 승인한 경우에만 삭제)
function handleListClick(event) {
  if (!event.target.classList.contains('delete-btn')) return;
  const id = event.target.dataset.id;
  if (!confirm('정말 삭제하시겠습니까?')) return;
  removeActivity(id);
}

// 최초 렌더링과 이벤트 연결을 초기화한다
document.addEventListener('DOMContentLoaded', function () {
  renderList(getActivities());
  document.getElementById('activity-list').addEventListener('click', handleListClick);
  document.addEventListener(ACTIVITIES_CHANGED_EVENT, function () {
    renderList(getActivities());
  });
});
