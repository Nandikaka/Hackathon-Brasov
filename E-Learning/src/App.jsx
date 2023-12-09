import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useEffect } from "react";
import axios from "axios";

function MyComponent() {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get("/api/data") // Adjust the endpoint to match your Express server
      .then((response) => setData(response.data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div>
      <h1>Data from Express:</h1>
      {data && <p>{data.message}</p>}
    </div>
  );
}

const courses = [
  {
    title: "Course 1",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim ullam modi, facere voluptatem explicabo accusamus. Distinctio delectus saepe amet consequatur minima voluptatum voluptatem neque molestias numquam ratione. Enim, iusto aspernatur!",
    image:
      "https://pll.harvard.edu/sites/default/files/styles/16_9_medium/public/course/predictionxlongitude.jpg?itok=vvSLdcC3",
  },
  {
    title: "Course 1",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim ullam modi, facere voluptatem explicabo accusamus. Distinctio delectus saepe amet consequatur minima voluptatum voluptatem neque molestias numquam ratione. Enim, iusto aspernatur!",
    image:
      "https://pll.harvard.edu/sites/default/files/styles/16_9_medium/public/course/predictionxlongitude.jpg?itok=vvSLdcC3",
  },
  {
    title: "Course 1",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim ullam modi, facere voluptatem explicabo accusamus. Distinctio delectus saepe amet consequatur minima voluptatum voluptatem neque molestias numquam ratione. Enim, iusto aspernatur!",
    image:
      "https://pll.harvard.edu/sites/default/files/styles/16_9_medium/public/course/predictionxlongitude.jpg?itok=vvSLdcC3",
  },
  {
    title: "Course 1",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim ullam modi, facere voluptatem explicabo accusamus. Distinctio delectus saepe amet consequatur minima voluptatum voluptatem neque molestias numquam ratione. Enim, iusto aspernatur!",
    image:
      "https://pll.harvard.edu/sites/default/files/styles/16_9_medium/public/course/predictionxlongitude.jpg?itok=vvSLdcC3",
  },
  {
    title: "Course 1",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim ullam modi, facere voluptatem explicabo accusamus. Distinctio delectus saepe amet consequatur minima voluptatum voluptatem neque molestias numquam ratione. Enim, iusto aspernatur!",
    image:
      "https://pll.harvard.edu/sites/default/files/styles/16_9_medium/public/course/predictionxlongitude.jpg?itok=vvSLdcC3",
  },
  {
    title: "Course 1",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim ullam modi, facere voluptatem explicabo accusamus. Distinctio delectus saepe amet consequatur minima voluptatum voluptatem neque molestias numquam ratione. Enim, iusto aspernatur!",
    image:
      "https://pll.harvard.edu/sites/default/files/styles/16_9_medium/public/course/predictionxlongitude.jpg?itok=vvSLdcC3",
  },
  {
    title: "Course 1",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim ullam modi, facere voluptatem explicabo accusamus. Distinctio delectus saepe amet consequatur minima voluptatum voluptatem neque molestias numquam ratione. Enim, iusto aspernatur!",
    image:
      "https://pll.harvard.edu/sites/default/files/styles/16_9_medium/public/course/predictionxlongitude.jpg?itok=vvSLdcC3",
  },
];

function LogIn() {
  return (
    <div className="log-in-modal">
      <h2 style={{ margin: "0" }}>Log In</h2>
      <p>Log into your e learning account</p>
      <form action="">
        <input type="text" name="email" id="email" placeholder="Email" />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Password"
        />
        <button type="submit">Submit</button>
      </form>

      <p style={{ textAlign: "center", marginBottom: "0", fontSize: "16px" }}>
        You don't have an account?
      </p>
      <p style={{ textAlign: "center", margin: "0", fontSize: "16px" }}>
        Create one now!
      </p>
    </div>
  );
}

function Course(props) {
  return (
    <div className="course">
      <img src={props.image} alt="image" />
      <h2>{props.title}</h2>
      <p>{props.description}</p>
    </div>
  );
}

function App() {
  const [search, setSearch] = useState("");
  const [showLogIn, setShowLogIn] = useState(false);

  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    console.log(search);
  };

  const handleShowLogIn = () => {
    setShowLogIn(!showLogIn);
  };

  return (
    <>
      <header>
        <nav>
          <h1 style={{ margin: "0", color: "white", fontSize: "32px" }}>
            E Learning Brasov
          </h1>
          <form action="" onSubmit={handleSearch}>
            <input
              type="text"
              name="search"
              id="search"
              placeholder="search..."
              value={search}
              onChange={updateSearch}
            />
            <button type="submit">
              <FaSearch />
            </button>
          </form>
          <button className="log-in" onClick={handleShowLogIn}>
            Log In
          </button>
        </nav>
      </header>

      {showLogIn && <LogIn />}

      <div className="courses">
        {courses.map((course) => (
          <Course
            className="shadow"
            key={course.title}
            title={course.title}
            description={course.description}
            image={course.image}
          />
        ))}
      </div>
      <MyComponent />
    </>
  );
}

export default App;
