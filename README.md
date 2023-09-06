<p align="center">
  <a href="https://www.kmitl.ac.th" target="blank"><img src="https://emeeting.kmitl.ac.th/pluginfile.php/1/theme_moove/logo/1644762619/fight44342235pix.png" width="400" alt="KMITL LOGO" /></a>
</p>

## 👋 Description

Template MVC pattern Web Application NodeJS นี้ใช้สำหรับข้อสอบ ExitExam @CSKMTIL ประจำปี66

## 🧃 Preface

<p>เนื่องจากเวลาในการสอบมีแค่ 3ชม. แต่มี 2โจทย์ ดังนั้นผมเลยเขียน Template นี้ขึ้นไว้เตรียมไว้ได้ทำโจทย์ได้เลยไม่ต้องมา setup project ใหม่ ผมเลือกใช้ภาษา Typescript</p>
<p>MVC ย่อมาจาก model view controller 3 อย่างนี้ โดยที่ </p>

- `Model` เราเลือกใช้ postgresql เนื่องจากเป็น database sql ที่ยอดนิยมอิอิ และในการเขียนเชื่อมต่อ database เราจะใช้ prisma เพราะมันเป็น orm และเป็น Typescript ทำให้เราทำโจทย์ได้ง่ายละรวดเร็วกว่าการมาเขียน query sql
- `View` เราจะใช้ swagger เพราะ nestjs มัน generate API document ให้เลย เราไม่ต้องเขียนให้เสียเวลา ชิววววว
- `Controller` ส่วนตัวผมสอบ style การเขียนแบบ Module ดังนั้นผมจึงเลือกที่จะใช้ NestJs เพราะมันเจ๋งแค่นั้นแหละ

## 📦 technology stack

- prisma `Object / Relational Mapping`
- postgreSQL `Database Sql`
- swaggerUI `API Documentation UI`
- nestJS `Backend Framework`
- nodeJS `Runtime Js`
- Docker `Image Container`

## 🗃️ How to use?

<img src="https://media2.giphy.com/media/62PP2yEIAZF6g/200.gif" width="400" alt="CoolBoy" />

- โคลนโปรเจคนี้มาลงเลยตาม Installation
- ทำการสร้างไฟล์ .env ขึ้นมาก่อน และ copy text จากไฟล์ .env.example มาลงและ กำหนด env ต่างๆของเรา อาทิ เช่น PORT, DatabaseURL
- เราก็ design database ที่อยู่ใน db/schema.prisma
- แล้วก็หลังจาก design database เสร็จแล้ว เราก็ Database migration เลย
- เสร็จแล้วถ้าเราต้องการทดสอบ CURD database ของเราก็ใช้คำสั่ง `$ npx prisma studio` จะเป็นเว็บใช้สำหรับเทส
- เราก็มาเขียน controller ซึ้งผม setup swagger ให้ผมใช้งานแล้ว ดูตัวอย่างใน src/user หลักการใช้งานของ controller, swagger และการกำหนด dto ต่างๆ
- ส่วนการสร้าง module ใหม่ เราจะใช้คำสั่งหรือเขียนไฟล์แบบ manual เองก็ได้แต่ผมจะใช้วิธี commandline โดย `$ yarn nest g res --no-spec` แล้วก็ตั้งชื่อ module ก็จะ auto import และสร้างไฟล์ให้เราเลย
- เราก็ถ้าต้องการเขียนไปและทดสอบไปเราจะใช้ `$ yarn dev` หรือจะรัน prod เลยก็ใช้ `$ yarn start:prod`
- ส่วนถ้าเราจะใช้ docker ให้ทำการ build image ขึ้นมาโดยใช้ `$ docker build -t nest-mvc .`
- เสร็จแล้วเราจะได้ image ที่ชื่อว่า `nest-mvc` หลังจากนี้เราก็สามารถรันได้แล้วว `$ docker run --publish 80:3000 nest-mvc -e PORT=3000 -e DATABASE_URL=""`

## 📚 Installation

```bash
# clone project
$ git clone https://github.com/BossNz/mvc-kmitl
$ cd mvc-kmitl

# install package
$ yarn install
```

## ⛓️ Database migration

```bash
# development
$ npx prisma migrate dev

# production
$ npx prisma migrate deploy

```

## 📺 Running the app

```bash
# development
$ yarn start

# watch mode
$ yarn dev

# production mode
$ yarn start:prod

# prisma studio
$ npx prisma studio
```

## 🤝 Reference

- Prisma - [https://www.prisma.io](https://www.prisma.io/)
- NestJs - [https://nestjs.com](https://nestjs.com/)
- SwaggerUI - [https://swagger.io](https://www.prisma.io/)
