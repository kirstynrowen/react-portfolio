import React from "react";

function Resume() {
  const url = "https://docs.google.com/document/d/1F7DdyvML-FGgPSu2GDfS_1FkGOQC_PWYqmdK4aXwme0/edit?usp=sharing";

  return (
    <div>
      <iframe src={url} title="Resume" width="100%" height="600"></iframe>
    </div>
  );
}

export default Resume;