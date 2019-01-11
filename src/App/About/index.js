import React from "react"
import { Link } from "react-router-dom"
import styles from "./About.module.scss"
import oldMan from "./oldman.jpg"

const About = () => {
  return (
    <div className={`${styles.about} card`}>
      <h1 className="title is-3">React 2019 Interactive Workbook</h1>
      <p>
        React Hooks? Context? Lazy? Memo? Who has time to learn about all of
        this stuff?
      </p>

      <img className={styles.img} src={oldMan} alt="old man yells at cloud" />

      <p>(Ok, I have the time, I just fear change.)</p>

      <p>
        Just reading the docs without practicing isn't a great way to retain
        knowledge, so I've made a few practice tasks that should give you some
        concrete experience implementing these new(ish) patterns.
      </p>
      <p>
        To get started,{" "}
        <Link to="/context">just click on a task in the menu</Link> and follow
        the instructions! Each task should take between 5 and 25 minutes to
        complete.
      </p>
      <p>
        If you get confused, search for the <code>TODO</code> comments in the
        code.
      </p>
    </div>
  )
}

export default About
