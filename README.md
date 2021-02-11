# *React + Firebase*

### 功能：
簡單的完成事項清單，能輕鬆增加、刪除項目，還能個分別顯示 todo跟 done list，只要用 email就能註冊，隨時存取你的清單
![alt app's gif](https://media.giphy.com/media/jnTVKRnD2s4IocKYta/giphy.gif)

### 心得＆筆記：
原本是想要練習redux而做的，後來我想加入登入功能讓它變成能隨時存取的web app，firebase的auth功能完整又有NOSQL的DB，
很適合前端開發者，以下是我的ㄧ些筆記，避免以後開發時犯同樣的錯：
#### Firebase
- firebase initial config 的資料務必要確認是否正確，要特別注意databaseURL，這跟 realtime db有關
  ，若不小心用到別的專案的會影響到firestore的使用，所以像這個專案沒有啟用realtime db，就要注意裡面沒有databseURL
- 用 react-firebase-hooks可以省下許多事，
  `useAuthState(firebase.auth()) for authorization, useCollection(firebaseQuery) for firestore`
- 如果有會用到`currentUser`的值，最好是使用`useAuthState`，
  例如直接用`firebase.auth().currentUer.uid`可能在`firebase.signOut()`作用後變null，
  這種情況除非用到useEffect，然後去檢查currentUser是否null，
  要不然最簡單的做法就是一律使用useAuthState
### Redux
- `@reduxjs/toolkit` 比起 `redux`更簡單，`createSlice`省去了寫action的code，
  reducer能專注在對應的action而不用寫`Switch statement`去管理
- 一樣要靠`react-redux`去串接
- 比較複雜的action可能還是`redux`比較好，比較能相容其他redux package
### CRA (create react app)
新版本create-react-app(react-scripts 4~, react 17~)，任何環境變數最好都設成 `REACT_APP_[variable]`

## 未來還想加強的功能：
- 更多登入方式 ex: google, facebook, twitter ...etc 
- 雖然一開始是為了練習`redux`而且 `@reduxjs/toolkit`也很好用，但是這個app的 state相對單純其實，用
  `useReducer + useContext` 作為 global state，或許在效能上(bundle size 能變小)可以提升
- 改用 typescript + test
- 改善蠆手機螢幕顯示的細節，並發布 `PWA`(progressive web app)  
