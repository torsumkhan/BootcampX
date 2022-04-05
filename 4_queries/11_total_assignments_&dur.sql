SELECT assignments.day, COUNT(assignments.*) AS number_of_assignments, SUM(assignments.duration)
FROM assignments
GROUP BY day
ORDER BY day;