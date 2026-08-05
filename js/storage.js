const STORAGE_KEY = 'activities';
const ACTIVITIES_CHANGED_EVENT = 'activities-changed';

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

function saveActivities(list) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
}

function notifyActivitiesChanged() {
  document.dispatchEvent(new CustomEvent(ACTIVITIES_CHANGED_EVENT));
}

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

function updateActivity(id, data) {
  // 스텁: 활동 수정 기능(선택 기능)이 나중에 이 함수를 사용한다.
  const list = getActivities();
  const idx = list.findIndex(function (a) { return a.id === id; });
  if (idx === -1) return null;
  list[idx] = Object.assign({}, list[idx], data);
  saveActivities(list);
  notifyActivitiesChanged();
  return list[idx];
}

function removeActivity(id) {
  const list = getActivities().filter(function (a) { return a.id !== id; });
  saveActivities(list);
  notifyActivitiesChanged();
}
