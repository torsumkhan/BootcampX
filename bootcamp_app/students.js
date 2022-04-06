const { Pool } = require("pg");

const pool = new Pool({
  user: "labber",
  password: "123",
  host: "localhost",
  database: "bootcampx",
});

pool.query(`SELECT students.id, students.name AS student_name, cohorts.name AS cohort_name
FROM students
JOIN cohorts ON cohorts.id = students.cohort_id
WHERE cohorts.name LIKE '%${process.argv[2]}%'
LIMIT ${process.argv[3] || 5};
`)
  .then((res) => {
    console.log(res.rows);
  })
  .catch((err) => console.log("query errir", err.stack));
