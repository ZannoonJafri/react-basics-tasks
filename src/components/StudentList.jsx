export default function StudentList() {
  const students = [
    { id: 1, name: 'Ali', score: 78 },
    { id: 2, name: 'Sara', score: 42 },
    { id: 3, name: 'Usman', score: 50 },
    { id: 4, name: 'Hamza', score: 35 }
  ];

  return (
    <div>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {students.map((student) => {
          const isPassed = student.score >= 50;

          return (
            <li 
              key={student.id}
              style={{
                padding: '8px',
                borderBottom: '1px solid #eee',
                fontSize: '16px'
              }}
            >
              <strong>{student.name}</strong> - Score: {student.score} | Status:{' '}
              <span style={{ color: isPassed ? 'green' : 'red', fontWeight: 'bold' }}>
                {isPassed ? 'Pass' : 'Fail'}
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}