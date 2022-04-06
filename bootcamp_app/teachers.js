const { Pool } = require("pg");

const pool = new Pool({
  user: "labber",
  password: "123",
  host: "localhost",
  database: "bootcampx",
});

pool.query(`SELECT DISTINCT(teachers.name) AS teacher, cohorts.name AS cohort
FROM teachers
JOIN assistance_requests ON teachers.id = assistance_requests.teacher_id
JOIN students ON students.id = assistance_requests.student_id
JOIN cohorts ON cohorts.id = students.cohort_id
WHERE cohorts.name = '${process.argv[2]}'
ORDER BY teacher;
`)
.then((res) => {
    console.log(res.rows)
})