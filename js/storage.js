const STORAGE_KEY = 'activities';
const ACTIVITIES_CHANGED_EVENT = 'activities-changed';

// localStorage에서 활동 목록을 배열로 가져온다 (없거나 파싱 실패 시 빈 배열)
function getActivities() {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) return [];
  try {
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch (e) {
    return [];
  }
}

// 활동 목록을 localStorage에 JSON 문자열로 저장한다
function saveActivities(list) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
}

// 활동 데이터가 변경되었음을 다른 파일에 이벤트로 알린다
function notifyActivitiesChanged() {
  document.dispatchEvent(new CustomEvent(ACTIVITIES_CHANGED_EVENT));
}

// 새 활동을 추가한다 (id/createdAt을 채워 저장하고 변경 이벤트를 발행한다)
function addActivity(data) {
  const list = getActivities();
  const activity = {
    id: String(Date.now()),
    title: data.title,
    date: data.date,
    place: data.place || '',
    memberCount: data.memberCount,
    memo: data.memo || '',
    createdAt: new Date().toISOString()
  };
  list.push(activity);
  saveActivities(list);
  notifyActivitiesChanged();
  return activity;
}

// id로 활동을 찾아 수정한다 (스텁 — 수정 기능은 아직 미구현, 추후 register.js가 사용 예정)
function updateActivity(id, data) {
  const list = getActivities();
  const idx = list.findIndex(function (a) { return a.id === id; });
  if (idx === -1) return null;
  list[idx] = Object.assign({}, list[idx], data);
  saveActivities(list);
  notifyActivitiesChanged();
  return list[idx];
}

// id로 활동을 찾아 삭제한다
function removeActivity(id) {
  const list = getActivities().filter(function (a) { return a.id !== id; });
  saveActivities(list);
  notifyActivitiesChanged();
}
