const path = require("path")
const fs = require("fs")

const express = require("express")
const multer = require("multer")

const app = express()


// 共享静态资源
app.use(express.static('public'))

app.get("/", (req, res) => {
  res.send("hello express!")
})


app.use(express.json({ type: 'application/json' }))
app.use(express.urlencoded({ extended: true }))

//跨域设置(所有域名)
app.all('*', function (req, res, next) {
  //其中*表示允许所有域可跨
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Content-Type')
  res.header('Access-Control-Allow-Methods', '*')
  res.header('Content-Type', 'application/json;charset=utf-8')
  next()
})

// 文件上传 中间件
let uploadFiles = []
const upload = multer({
  storage: multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, `${path.join(__dirname, "/public/upload/")}`)
    },
    filename: function (req, file, cb) {
      const { filename, originalname, mimetype } = file
      const fileName = new Date().getTime() + originalname
      const previewPath = `http://localhost:3000/upload/${fileName}`
      const previewPathLocal = `http://localhost:3000/upload/${fileName}`
      uploadFiles.push({
        fileName,
        previewPath,
        previewPathLocal,
        ...file,
      })
      cb(null, fileName)
    }
  })
})


// 文件上传
app.post("/file/upload", upload.array("fileTags"), (req, res) => {
  const data = JSON.parse(JSON.stringify(uploadFiles))
  uploadFiles = []
  res.json({
    code: 200,
    message: "上传成功",
    data: data,
  })
})



// 测试登录
app.post("/login", (req, res) => {
  const { uname, pwd } = req.body
  if (!uname || !pwd) {
    res.json({
      code: 400,
      message: "用户名或密码不能为空",
    })
  } else if (uname !== "admin" || pwd !== "123456") {
    res.json({
      code: 400,
      message: "用户名或密码错误",
    })
  } else {
    res.json({
      code: 200,
      message: "登录成功",
    })
  }
})










app.listen("3000", () => {
  console.log("serve is running...")
})