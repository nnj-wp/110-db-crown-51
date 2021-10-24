- P0
  . 並沒有很難，只是抓錯誤真的很崩潰，一抓起來，可能就跟不上進度了，一筆資料抓給兩端使用，又不互相衝突，有確實理解清楚。

---

- P1. (local) 請修改 routes/index.js 在 render index.ejs 時傳入學號及姓名，index.ejs 要有姓名及學號，需要用 <%= name %> 及 <%= id %> 接收傳入的學號及姓名，並顯示下圖片。繳交
  . Chrome 截圖
  . routes/index.js code (程式碼)
  . views/index.ejs code (程式碼)

```
routes/index.js =>

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express', name: '邵恩傑', id: '209410751' });
});

```

```
view/index.ejs =>

<h1><%= title %></h1>
    <p>Welcome to <%= title %></p>
    <p></p>
    <h3>My name is <%= name %></h3>
    <h3>My student id is <%= id %></h3>

```

![第一題的圖](https://i.imgur.com/aZt2UTo.png)

---

- P2. (local) 將 crown theme 裡面的 index.ejs 複製到 views/crown_xx.ejs，並能在 Chrome 中顯示路由 /crown_xx，如下圖 localhost:3000/crown_xx。標題要有學號及姓名，如 P1 的傳入方式。請繳交
  . Chrome 截圖，要有 URL
  . routes/crown_xx.js ，相關重點以圖片呈現
  . views/crown_xx.ejs ，相關重點以圖片呈現

![第二題](https://res.cloudinary.com/dpnl3hnc2/image/upload/v1634839237/20211022_2_cam0tj.png)

![第二題](https://res.cloudinary.com/dpnl3hnc2/image/upload/v1634839440/20211020_4_kvhgin.png)

![第二題](https://res.cloudinary.com/dpnl3hnc2/image/upload/v1634839422/20211020_3_l9s6fl.png)

---

- P3. (local) 請將 crown_xx.ejs 裡面 category 五筆資料 PostgreSQL 中，資料庫名稱 crown_xx, table 名稱 category_xx。繳交
  . Chrome 截圖

![第三題](https://i.imgur.com/E0BtQ2Q.jpg)

---

- P4. (heroku) 請將 P2 這一題的結果，在 heroku server 上顯示，路由是 /crown_xx。請繳交
  . Chrome 截圖 (要看到 URL，上面有 heroku app )
  . Github Repo URL
  . Heroku 畫面，要有 app 名稱

![第四題]()

---

- P5. (heroku) 請將 P3 資料庫 category_xx 五筆資料，放到 Heroku Posgres 上。請繳交
  . Chrome 截圖 (要看到 URL，上面有 heroku database, category_xx, 和 5 筆資料 )
  . Heroku 畫面，要看到 DATABASE_URL 資料
  . 請提供 Heroku DATABASE_URL 資料，並將之拆分提供文字放入 code (```)中
  . host: xxxxxxx
  . port: 5432
  . database: xxxxxxxxx
  . username: xxxxxxxxx
  . password: xxxxxxxxx

  ![第五題](https://res.cloudinary.com/dpnl3hnc2/image/upload/v1634839568/20211020_6_uvdedm.png)

```
host: ec2-44-198-80-194.compute-1.amazonaws.com
port: 5432
database: dd1r2l3t6ccinu
username: toqvzkamvjkypd
password: 812805119c01ff5cde97896b101c4eed7e1856e3ba3fdb1013b652eb42e0756e
```

---

- P6. (local) 將 views/crown_xx.ejs 複製一份成 crown2_xx.ejs，能夠直接到 PostgreSQL server 取得 category 5 筆資料，套入到 crown2_xx.ejs 中。在 Chrome 中要顯示路由 /crown2_xx 。標題要有 Crown2_xx (from title) 學號 (from id) 及姓名(from name)。請繳交
  . Chrome 截圖，要有 URL
  . app.js ，相關重點以圖片標註呈現
  . routes/crown2_xx.js，相關重點以圖片標註呈現呈現
  . views/crown2_xx.ejs ，相關重點以圖片標註呈現呈現

![第六題](https://res.cloudinary.com/dpnl3hnc2/image/upload/v1634840009/20211020_2_hbcftx.png)

![app相關重點](https://res.cloudinary.com/dpnl3hnc2/image/upload/v1634840644/20211022_3_xjj8qs.png)

![routes](https://res.cloudinary.com/dpnl3hnc2/image/upload/v1634841089/20211022_4_v66wpz.png)

![view](https://res.cloudinary.com/dpnl3hnc2/image/upload/v1634841131/20211022_5_n4fkn6.png)

---

- P7. (heroku) 請將 P6 這一題的結果，在 heroku server 上顯示，路由是 /crown2_xx，category 資料必須要從 Heroku Posgres 上取得。請繳交
  . Chrome 截圖 (要看到 URL，上面有 heroku app )
  . Github Repo URL

![第七題](https://res.cloudinary.com/dpnl3hnc2/image/upload/v1634841285/20211020_5_nnfbrr.png)

```
Git Repo URL
https://github.com/nnj-wp/1091-1N-demo-209410751.git
```

---

- P8. (local) 實作 api 路由 /api_xx/category_xx，能夠直接到 PostgreSQL server 取得 category 5 筆資料並以 json 方式顯示。請繳交
  . Chrome 截圖，要有 路由 /api_xx/category_xx
  . app.js ，相關重點以圖片標註呈現
  . routes/api_xx.js，相關重點以圖片標註呈現呈現
  . controllers/apiCrown2Controller_xx.js ，相關重點以圖片標註呈現呈現

![第八題](https://res.cloudinary.com/dpnl3hnc2/image/upload/v1634842010/20211022_6_czssdx.png)

![api_51/Category_51](https://res.cloudinary.com/dpnl3hnc2/image/upload/v1634842037/20211022_7_w34arr.png)

![routes](https://res.cloudinary.com/dpnl3hnc2/image/upload/v1634842063/20211022_8_qlwj7w.png)

![controllers](https://res.cloudinary.com/dpnl3hnc2/image/upload/v1634842085/20211022_9_bnxldr.png)

---

- P9. (heroku) 請將 P8 這一題的結果，在 heroku server 上顯示，路由是 /api_xx/category_xx，category 資料必須要從 Heroku Posgres 上取得。請繳交
  . Chrome 截圖 (要看到 /api_xx/category_xx，上面有 heroku app )
  . Github Repo URL

![第九題](https://res.cloudinary.com/dpnl3hnc2/image/upload/v1634842329/20211022_10_g4o0c1.png)

```
Git Repo URL
https://github.com/nnj-wp/1091-1N-demo-209410751.git
```
