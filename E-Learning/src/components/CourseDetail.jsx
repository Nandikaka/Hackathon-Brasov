import { useParams } from "react-router-dom";
import { data } from "../data";

function CourseDetail() {
  const downloadFileAtURL = (url) => {
    const aTag = document.createElement("a");
    aTag.href = url;
    aTag.setAttribute("download", "pdf");
    document.body.appendChild(aTag);
    aTag.click();
    aTag.remove();
  };

  const { id } = useParams();
  const selectedCourse = data.find((item) => item.id === id);
  console.log(selectedCourse);
  const url = selectedCourse.intro;
  return (
    <div className="wrapper">
      <h1>{selectedCourse.title}</h1>
      <p>{selectedCourse.description}</p>
      <br />
      <br />
      <p style={{ textAlign: "center", fontWeight: "bold" }}>
        Short introduction:
      </p>
      <div id="iframeContainer">
        <iframe
          width="720"
          height="350"
          src={url.toString()}
          title="This is CS50"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>

      <h2>Course description</h2>
      <p>{selectedCourse.detail}</p>

      <button
        className="down-btn"
        onClick={() => downloadFileAtURL(selectedCourse.pdf)}
      >
        Download PDF
      </button>
    </div>
  );
}

export default CourseDetail;
