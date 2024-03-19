import express from 'express'
import mysql from 'mysql2/promise'
import cors from 'cors'
import jwt from 'jsonwebtoken'
import { config } from 'dotenv'

config()

const app = express();

app.use(cors()) // CORS 에러 해결을 위한 사용
app.use(express.json())

const PORT = 3001;

// mysql 연결
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'nuxt3_test'
})

app.get("/", (req, res) => {2
  res.send("<h1>Hello from Nodejs Express</h1>");
});


// 회원가입 처리
app.post('/signup', async (req, res) => {
  const {user_id, user_pw, user_name} = req.body
  try {
    const [rows] = await pool.execute('INSERT INTO user (user_id, user_pw, user_name) VALUES (?, ?, ?)', [user_id, user_pw, user_name])
    return res.status(200).send('회원가입 성공')
  } catch(error) {
    return res.status(500).send('회원가입 실패: ' + error.message)
  }
})



// 로그인 처리
app.post('/login', async (req, res) => {
  const { user_id, user_pw } = req.body
  try {
    const [rows] = await pool.execute('SELECT * FROM user WHERE user_id = ?', [user_id])
    if (rows.length > 0) {
      const user = rows[0]
      // console.log(user_id, user_pw)
      if (user_pw === user.user_pw) {
        // JWT 토큰을 생성
        const token = jwt.sign({ user_id: user.user_id }, "" + process.env.JWT_SECRET)
        res.status(200).json({ message: '로그인 성공', token })
      } else {
        return res.status(401).send('비밀번호가 일치하지 않습니다')
        }
      } else {
        res.status(404).send('사용자를 찾을 수 없습니다')
      }
  } catch (error) {
    return res.status(500).send('로그인 실패: ' + error.message)
  }
})

//wish 저장
app.post('/wish', async(req, res) => {
  const {pr_name, pr_detail, pr_price} = req.body
  try {
    const [rows] = await pool.execute('INSERT INTO wish (pr_name, pr_detail, pr_price) VALUES (?, ?, ?)', [pr_name, pr_detail, pr_price])
    return res.status(200).send('위시 추가')
  }catch(error) {
    return res.status(500).send('실패' + error.message)
  }
})


app.post('/wishlist', async(req, res) => {
  try {
    const [rows] = await pool.execute('SELECT * FROM wish')
    res.status(200).json(rows)
  } catch(error) {
    res.status(500).send('데이터 조회 실패: ' + error.message)
  }
})


app.listen(PORT, (err) => {
  if (err) return console.log(err);
  console.log("The server is listening on port 3001");
});
