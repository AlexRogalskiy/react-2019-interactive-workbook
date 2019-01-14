import React from "react"
import TaskChecklist from "../../App/TaskChecklist"
import example from "./example.png"

const Description = ({ toggleFinishedTask }) => {
  return (
    <div>
      <TaskChecklist
        toggleFinishedTask={toggleFinishedTask}
        localStorageKey="lazy"
      >
        <span>
          I've reviewed{" "}
          <a
            href="https://reactjs.org/docs/code-splitting.html#reactlazy"
            target="_blank"
            rel="noopener noreferrer"
          >
            the docs for React.lazy.
          </a>
        </span>
        <span>
          I've updated <code>src/3_Lazy/index.js</code> to lazily load the
          component from
          <code>src/3_Lazy/LazilyLoaded.js</code>.
        </span>
        <span>
          The fallback text while the element is loading says "Loading..."
        </span>
        <span>
          When I check for the new bundle in the network dev tools, the
          lazily-loaded bundle is named <code>LazilyLoaded.chunk.js</code> and
          looks like this:
          <img src={example} alt="named, lazy-loaded bundle" />
          <p>
            <b>Note:</b>This is only visible in dev tools if you are running the
            project locally. If you are using CodeSandbox, the bundle will not
            be visible.
          </p>
        </span>
      </TaskChecklist>
    </div>
  )
}

export default Description
