* P1.  (local) 請修改 routes/index.js 在render index.ejs 時傳入學號及姓名，index.ejs 要有姓名及學號，需要用 <%= name %> 及 <%= id %> 接收傳入的學號及姓名，並顯示下圖片。繳交
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
* P2.  (local) 將 crown theme 裡面的 index.ejs 複製到 views/crown_xx.ejs，並能在Chrome 中顯示路由 /crown_xx，如下圖  localhost:3000/crown_xx。標題要有學號及姓名，如P1的傳入方式。請繳交
  . Chrome 截圖，要有 URL
  . routes/crown_xx.js ，相關重點以圖片呈現
  . views/crown_xx.ejs  ，相關重點以圖片呈現

![第二題](https://i.imgur.com/9pBSbip.jpg)

![第二題]()

![第二題]()

- 第三題

```

```

![第三題](https://i.imgur.com/E0BtQ2Q.jpg)

```

```

- 第四題

```

```

![第四題](https://i.imgur.com/ffkQUHX.png)

- 第五題

```

```

![第五題](https://i.imgur.com/adVM9Ps.jpg)
