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
      req.body.fileInfo = {
        fileName,
        previewPath,
        previewPathLocal,
        ...file,
      }

      cb(null, fileName)
    }
  })
})



// 文件上传
app.post("/file/upload", upload.single("fileTag"), (req, res) => {
  res.json(req.body.fileInfo)
})

app.listen("3000", () => {
  console.log("serve is running...")
})