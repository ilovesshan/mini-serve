# mini-serve
### 方便自己临时调试数据，通过Node的express框架搭建的简易的服务器

#### 已经完成的Api接口

##### 1、单文件上传

+ 地址： `http://localhost:3000/file/upload`

+ 参数：`fileTag`

+ 返回值：

  ```json
  {
      "fileName": "16580620106061d95e6a89ff1261aa812002b7c063e1e.jpg",
      "previewPathLocal": "http://localhost:3000/upload/16580620106061d95e6a89ff1261aa812002b7c063e1e.jpg",
      "fieldname": "fileTag",
      "originalname": "1d95e6a89ff1261aa812002b7c063e1e.jpg",
      "encoding": "7bit",
      "mimetype": "image/jpeg"
  }
  ```

  

