# 동아리 활동 기록 관리

(실행 방법과 기능 설명은 Task 5에서 최종 작성)

참고: Task5에서 완성할 때 채워야 할 틀 (지금 만들 필요는 없음)

# 동아리 활동 기록 관리

브라우저 localStorage 기반 동아리 활동 기록 관리 웹앱.

## 실행 방법
`index.html`을 브라우저로 열면 바로 사용 가능 (서버 불필요).

## 기능
- 활동 등록 (활동명/날짜/장소/참여인원/메모, 입력 검증 포함)
- 활동 목록 조회 (최신순, 빈 목록 안내)
- 활동 삭제 (확인 절차 포함)

## 스크린샷
<Task5에서 실제 실행 화면 캡처 2장 이상 삽입>

## 파일 구조
- `index.html` / `style.css` — 화면
- `js/storage.js` — localStorage CRUD
- `js/register.js` — 등록 폼
- `js/list.js` — 목록 렌더링 + 삭제

## 팀
- 팀장: storage.js, 통합
- 팀원A: register.js
- 팀원B: list.js