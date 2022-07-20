# mini-serve
### 方便自己临时调试数据，通过Node的express框架搭建的简易的服务器

#### 已经完成的Api接口

##### 1、文件上传

+ 地址： `http://localhost:3000/file/upload`

+ 方式：`post`

+ 参数：`fileTags`

+ 返回值：

  ```json
  {
      "code": 200,
      "message": "上传成功",
      "data": [
          {
              "fileName": "16580647334761d95e6a89ff1261aa812002b7c063e1e.jpg",
              "previewPath": "http://localhost:3000/upload/upload/16580647334761d95e6a89ff1261aa812002b7c063e1e.jpg",
              "previewPathLocal": "http://localhost:3000/upload/16580647334761d95e6a89ff1261aa812002b7c063e1e.jpg",
              "fieldname": "fileTags",
              "originalname": "1d95e6a89ff1261aa812002b7c063e1e.jpg",
              "encoding": "7bit",
              "mimetype": "image/jpeg"
          },
          {
              "fileName": "16580647335015a638e37c2073daecfbd650bb013e8f4.jpg",
              "previewPath": "http://localhost:3000/upload/upload/16580647335015a638e37c2073daecfbd650bb013e8f4.jpg",
              "previewPathLocal": "http://localhost:3000/upload/16580647335015a638e37c2073daecfbd650bb013e8f4.jpg",
              "fieldname": "fileTags",
              "originalname": "5a638e37c2073daecfbd650bb013e8f4.jpg",
              "encoding": "7bit",
              "mimetype": "image/jpeg"
          },
          {
              "fileName": "16580647335166dd81def721e4125a337ca89efaa3849.jpg",
              "previewPath": "http://localhost:3000/upload/upload/16580647335166dd81def721e4125a337ca89efaa3849.jpg",
              "previewPathLocal": "http://localhost:3000/upload/16580647335166dd81def721e4125a337ca89efaa3849.jpg",
              "fieldname": "fileTags",
              "originalname": "6dd81def721e4125a337ca89efaa3849.jpg",
              "encoding": "7bit",
              "mimetype": "image/jpeg"
          }
      ]
  }
  ```

  

##### 2、登录

+ 地址： `http://localhost:3000/login`

+ 方式：`POST`

+ 参数：`uname` ，`pwd`

+ 返回值：

  ```json
  {
      code: 400,
      message: "用户名或密码不能为空",
  }
  ```

  ```java
  {
      code: 200,
      message: "登录成功",
  }
  ```

  

