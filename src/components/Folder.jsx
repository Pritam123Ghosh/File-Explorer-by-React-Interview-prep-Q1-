import React, { useCallback, useState } from "react";

export default function Folder({ explorer }) {
  //   console.log(explorer);

  const [expand, setExpand] = useState(false);


  const handleNewFolder = (e) =>{
    e.stopPropagation();
  }

  if (explorer.isFolder) {
    return (
      <div style={{ marginTop: 5, cursor: "pointer" }}>
        <div className="folder" onClick={() => setExpand(!expand)}>
          <span>📁 {explorer.name}</span>

        </div>
        <div style={{ display: expand ? "block" : "none", paddingLeft: 25 }}>
          {explorer.items.map((exp) => {
            return <Folder explorer={exp} key={exp.id} />;
          })}
        </div>
      </div>
    );
  } else {
    return <span className="file">📄 {explorer.name}</span>;
  }
}
