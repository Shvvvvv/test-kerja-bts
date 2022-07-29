import React, { useEffect, useState } from "react";

const Checklist = () => {
  const [checklist, setChecklist] = useState([]);

  function getChecklist() {
    axios
      .get(baseURL, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }

  useEffect(() => {}, []);

  return (
    <div>
      <div>
        <ul></ul>
      </div>
    </div>
  );
};

export default Checklist;
