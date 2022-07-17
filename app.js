const path = require("path")
const fs = require("fs")

const express = require("express")
const multer = require("multer")
const { time } = require("console")

const app = express()


// 共享静态资源
app.use(express.static('public'))

app.get("/", (req, res) => {
  res.send("hello express!")
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
      const previewPath = `http://2e48982a.cpolar.cn/upload/${fileName}`
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
  const data = JSON.parse(JSON.stringify(uploadFiles));
  uploadFiles =[];
  res.json({
    code: 200,
    message: "上传成功",
    data: data,
  })
})

app.listen("3000", () => {
  console.log("serve is running...")
})