import React, { useEffect, useState } from "react";

export default function AttendanceReport() {
  const [loading, setLoading] = useState(true);
  const [summary, setSummary] = useState(null);

  useEffect(() => {
    async function getAttendance() {
      try {
        let response = await fetch(
          "https://be.emp.oms.enigmatix.co/api/v1/attendance/month?name=&month=2025-09&year=&page_size=10&size=10&page=1",
          {
            method: "GET",
            headers: {
              Accept: "application/json, text/plain, */*",
              "Accept-Language": "en-US,en-PK;q=0.9,en;q=0.8",
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzU5ODIyMjA2LCJpYXQiOjE3NTk1NjMwMDYsImp0aSI6IjczOTgyNjk5NGQ1ZDQ2YTk5OTQ0YmZmNzk0YjkwNDVlIiwidXNlcl9pZCI6ImUwNGRkNTVhLTMzMWItNGZhMS04YjVmLWE5MWEwYmZjNzY3YyJ9.envmcO-vjPQKDVONsA4YDOJ08glKRxEFIjM80nlprvs",
              "Cache-Control": "no-cache",
              Connection: "keep-alive",
              Origin: "https://www.oms.enigmatix.co",
              Pragma: "no-cache",
              Referer: "https://www.oms.enigmatix.co/",
              "Sec-Fetch-Dest": "empty",
              "Sec-Fetch-Mode": "cors",
              "Sec-Fetch-Site": "same-site",
              "User-Agent":
                "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36",
              "sec-ch-ua":
                '"Chromium";v="140", "Not=A?Brand";v="24", "Google Chrome";v="140"',
              "sec-ch-ua-mobile": "?0",
              "sec-ch-ua-platform": '"macOS"',
              "x-tenant": "enigmatix",
            },
          }
        );

        let object = await response.json();

        let totalPresent = 0;
        let totalAbsent = 0;
        let totalLeaves = 0;
        let totalRecords = 0;

        object.items.forEach((employee) => {
          employee.attendance_list.forEach((attendance) => {
            totalRecords++;
            if (attendance.status === "P") totalPresent++;
            else if (attendance.status === "A") totalAbsent++;
            else if (attendance.status === "L") totalLeaves++;
          });
        });

        let presentPercentage = ((totalPresent / totalRecords) * 100).toFixed(
          2
        );
        let absentPercentage = ((totalAbsent / totalRecords) * 100).toFixed(2);
        let leavesPercentage = ((totalLeaves / totalRecords) * 100).toFixed(2);

        setSummary({
          totalPresent,
          totalAbsent,
          totalLeaves,
          presentPercentage,
          absentPercentage,
          leavesPercentage,
        });
      } catch (error) {
        console.error("Error fetching attendance:", error);
      } finally {
        setLoading(false);
      }
    }

    getAttendance();
  }, []);

  if (loading) return <p>Loading Attendance Data...</p>;
  if (!summary) return <p>No data available</p>;

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2>Attendance Report</h2>
      <p>Total Present: {summary.totalPresent}</p>
      <p>Total Absent: {summary.totalAbsent}</p>
      <p>Total Leaves: {summary.totalLeaves}</p>
      <p>Present %: {summary.presentPercentage}%</p>
      <p>Absent %: {summary.absentPercentage}%</p>
      <p>Leaves %: {summary.leavesPercentage}%</p>
    </div>
  );
}
