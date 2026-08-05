function escapeHtml(str) {
  const div = document.createElement('div');
  div.textContent = str || '';
  return div.innerHTML;
}

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

function handleListClick(event) {
  if (!event.target.classList.contains('delete-btn')) return;
  const id = event.target.dataset.id;
  if (!confirm('정말 삭제하시겠습니까?')) return;
  removeActivity(id);
}

document.addEventListener('DOMContentLoaded', function () {
  renderList(getActivities());
  document.getElementById('activity-list').addEventListener('click', handleListClick);
  document.addEventListener(ACTIVITIES_CHANGED_EVENT, function () {
    renderList(getActivities());
  });
});
