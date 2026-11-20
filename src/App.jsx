import StudentProfileCard from './StudentProfileCard';

function App() {
  return (
    <div>
      <h1>Student Directory</h1>

      <StudentProfileCard
        name="Tamang Anish"
        studentId="202637595"
        major="Computer Engineering"
        year={1}
        gpa={4.47}
      />

      <StudentProfileCard
        name="Bohara Vishal"
        studentId="202637594"
        major="Computer Engineering"
        year={1}
        gpa={3.6}
      />

      <StudentProfileCard
        name="Rawat Iman Singh"
        studentId="202637455"
        major="Computer Engineering"
        year={1}
        gpa={4}
      />
    </div>
  );
}

export default App;
