import { data } from "../data";
import Course from "./Course";

function Home() {
  return (
    <div>
      <div className="wrapper">
        <h1>Welcome Meaningful Learning platform!</h1>
        <h2>Empower Your Learning Journey</h2>
        <p>
          We are committed to providing a world-class online learning
          experience. Whether you&apos;re a student, a professional looking to
          upskill, or someone passionate about continuous learning, we have a
          diverse range of courses to meet your needs.
        </p>
        <h2>Why Choose Mindful Learning</h2>
        <ul>
          <li>
            Expert Instructors: Learn from industry experts and professionals
            who bring real-world experience to your courses.
          </li>
          <li>
            Flexible Learning: Access your courses anytime, anywhere. Our
            platform is designed to fit into your busy schedule.
          </li>
          <li>
            Diverse Course Catalog: Explore a wide range of courses, from
            technology and business to arts and lifestyle. There&apos;s
            something for everyone.
          </li>
          <li>
            Interactive Learning: Engage with interactive content, quizzes, and
            assignments to enhance your understanding and retention.
          </li>
        </ul>

        <h2 style={{ textAlign: "center" }}>See our courses below:</h2>
      </div>
      <div className="courses">
        {data.map((course) => (
          <Course
            className="shadow"
            id={course.id}
            key={course.title}
            title={course.title}
            description={course.description}
            image={course.image}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
