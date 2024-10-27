# 專案資料夾結構說明: cmd > tree /F
* 使用VScode開啟資料夾，推薦下載plugin套件: Material Icon Theme
```markdown
react-gh-test-main
├─ ./
│  .gitignore
│  eslint.config.js   
│  index.html         客戶端查看的入口，引用main.jsx
│  main.jsx           入口JS，引用所有jsx, css
│  package-lock.json
│  package.json       * 可能會再改這邊的東西
│  README.md
│  tailwind.config.js
│  txt.txt
│  vite.config.js     * 可能會再改這邊的東西
│
├─public `已被static`  * 怕踩坑這裡不要動><
│      txt.txt
│      vite.svg
│
└─src `主要開發環境，請大家動這邊就好`
    │  App.css
    │  App.jsx
    │  index.css
    │  main.jsx
    │  txt.txt
    │  車廂svg放這裡
    │  前台會動的svg放這裡
    ├─assets          靜態檔案資料夾
    │  │  react.svg
    │  │
    │  └─icons          .svg, .png:  透明底的圖檔
    │  └─images         img/*:       圖檔
    │  └─scss           .scss:       共用、自訂的scss
    │
    ├─components 元件    .jsx, .css: header, footer, 車廂card等元件
    │  └─Admin   └─公開&會員
    │  └─user    └─管理員
    │
    └─routes     頁面    .jsx:       各個頁面，如首頁、預約、會員登入等
       └─Admin   └─公開&會員
       └─user    └─管理員
```
* ./public/
```
此資料夾已經被Vite自動static，理論上/public/會放置靜態資料
可能採坑!!! 使用./public/images/...png，本地端可以正常運作，佈署會出問題
為了大家的路由使用習慣，把靜態檔案放在「.src/assets/靜態資料」
```
---
# git: react-gh-test
*推送過程
查看當前文件狀態： 使用以下命令查看當前工作區的文件狀態，確認有哪些文件還沒有被追蹤或提交：
```
git status
```
添加文件到暫存區： 如果有未追蹤的文件或修改的文件，你需要將它們添加到 Git 的暫存區。可以使用以下命令添加所有文件：
```
git add .
```
如果你只想添加特定文件，可以指定文件名：
```
git add <file_name>
```
提交更改： 添加文件後，接下來需要提交這些更改。提交時你可以寫一條描述性的訊息，說明這次提交的內容：
```
git commit -m "你的提交訊息"
```
推送到 GitHub： 提交成功後，你可以將這些更改推送到遠端倉庫。你之前已經設定好了遠端倉庫的關聯，現在可以直接推送：
```
git push
```
如果這是你第一次推送，也可以使用以下命令：
```
git push -u origin main
```
-u 參數會將本地分支與遠端分支關聯起來，之後就可以直接使用 git push 推送更改，而不需要每次都指定遠端分支。
*分支創建與合併
創建自己的分支： 每個隊員可以在當前的代碼庫上創建一個新的分支。建議每個人都在自己獨立的分支上工作，以便管理代碼並避免衝突。
```
git checkout -b linlin  # linlin 可以換成你的名字
```
查看當前分支： 隊員可以使用以下命令查看當前所在的分支：
```
git branch
```
這個命令會列出本地的所有分支，當前所在的分支會有一個 * 標記。
開發並提交代碼： 在新分支上進行開發，完成修改後，將修改添加並提交：
```
git add .
git commit -m "提交訊息"
```
推送到遠端分支： 完成提交後，隊員可以將自己的分支推送到遠端倉庫。推送新分支的命令如下：
```
git push -u origin linlin
```
-u 參數會讓 Git 記住本地分支與遠端分支的關聯，之後該隊員可以直接使用 git push 來推送更新。
遠端合併請求（Pull Request，PR）： 當隊員完成工作後，通常會發起一個合併請求（Pull Request，PR），以便將分支合併到 main 或其他主分支。
具體操作步驟如下：
   1登錄到 GitHub。
   2找到該倉庫，並選擇剛推送的分支。
   3點擊 “New pull request” 按鈕。
   4選擇將該分支合併到主分支（例如 main）。
   5填寫必要的說明，最後點擊提交。
   6之後，項目維護者或其他成員可以審查代碼並將其合併到主分支。
其他隊員更新本地代碼
   當某個分支被合併到主分支後，其他隊員可以切換回主分支並拉取最新的代碼，以確保代碼保持同步：
```
git checkout main
git pull
```
這樣，你的本地代碼就會與遠端倉庫保持最新狀態。
---