# 동아리 활동 기록 관리

브라우저 localStorage 기반 동아리 활동 기록 관리 웹앱.

## 실행 방법
`index.html`을 브라우저로 열면 바로 사용 가능 (서버 불필요).

## 기능
- 활동 등록 (활동명/날짜/장소/참여인원/메모, 입력 검증: 활동명 필수 · 미래 날짜 금지 · 참여 인원 1 이상 정수)
- 활동 목록 조회 (최신순, 빈 목록 안내)
- 활동 삭제 (확인 절차 포함)

## 스크린샷
![기본화면](screenshot/main.png)
![등록테스트](screenshot/register.png)

## 파일 구조
- `index.html` / `style.css` — 화면
- `js/storage.js` — localStorage CRUD
- `js/register.js` — 등록 폼 + 검증
- `js/list.js` — 목록 렌더링 + 삭제

## 팀
- 김도현: storage.js, 통합
- 김민수: register.js
- 이명재: list.js