import { useState } from "react";

const ListRender = () => {
    const [list] = useState(["João", "Pedro", "Matias","Isadora"]);

  return (
    <div>
        <ul>
            {list.map((item) => (
                <li>{item}</li>
            ))}
        </ul>
    </div>
  )
}

export default ListRender;