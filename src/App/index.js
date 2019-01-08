/* eslint import/no-webpack-loader-syntax: 0 */
import React, { useState, useEffect } from "react"
import { Router, Route, Link, NavLink } from "react-router-dom"
import createBrowserHistory from "history/createBrowserHistory"
import About from "./About"
import TimerExample from "../UseEffect"
import TimerDescription from "../UseEffect/Description"
import FormExample from "../CustomHook"
import FormDescription from "../CustomHook/Description"
import ErrorBoundaryExample from "../ErrorBoundary"
import ErrorBoundaryDescription from "../ErrorBoundary/Description"
import ContextExample from "../Context"
import ContextDescription from "../Context/Description"
import MemoExample from "../Memo"
import MemoDescription from "../Memo/Description"
import LazyExample from "../Lazy"
import LazyDescription from "../Lazy/Description"
import PortalExample from "../Portal"
import PortalDescription from "../Portal/Description"
import TaskIndicator from "./SidebarTaskIndicator"
import TaskHOC from "./TaskHOC"
import "bulma/css/bulma.css"
import "./index.scss"

const routeConfig = [
  {
    route: "/context",
    title: "Context",
    component: ContextExample,
    description: ContextDescription,
    module: "src/Context/index.js"
  },
  {
    route: "/memo",
    title: "React.memo",
    component: MemoExample,
    description: MemoDescription,
    module: "src/Memo/index.js"
  },
  {
    route: "/lazy",
    title: "React.lazy",
    component: LazyExample,
    description: LazyDescription,
    module: "src/Lazy/index.js"
  },
  {
    route: "/portal",
    title: "Portal",
    component: PortalExample,
    description: PortalDescription,
    module: "src/Portal/index.js"
  },
  {
    route: "/CustomHook",
    title: "Custom Hook",
    component: FormExample,
    description: FormDescription,
    module: "src/CustomHook/index.js"
  },
  {
    route: "/timer",
    title: "UseEffect Hook",
    component: TimerExample,
    description: TimerDescription,
    module: "src/UseEffect/index.js"
  },
  {
    route: "/error-boundary",
    title: "Error Boundary",
    component: ErrorBoundaryExample,
    description: ErrorBoundaryDescription,
    module: "src/ErrorBoundary/index.js"
  }
]

routeConfig.forEach(
  route => (route.component = TaskHOC(route.component, route.description))
)

const history = createBrowserHistory()

const unlisten = history.listen((location, action) => {
  const { module } = routeConfig.find(c => c.route === location.pathname) || {}
  if (module) {
    window.parent.location = `${window.parent.location.pathname}?module="${module}"`
  }

  window.scrollTo(0, 0)
})

function App() {
  const [finishedTasks, setFinishedTasks] = useState([])

  const toggleFinishedTask = path => () => {
    setFinishedTasks(finishedTasks => {
      if (finishedTasks.includes(path))
        return finishedTasks.filter(task => task !== path)
      return finishedTasks.concat(path)
    })
  }
  return (
    <Router history={history}>
      <div className="app-container">
        <nav>
          <Link className="nav-title" to="/">
            React 2019 Interactive Workbook
          </Link>
        </nav>
        <div className="flex-container">
          <ul className="sidebar">
            <h2 className="subtitle is-5 mb-1">Tasks</h2>
            {routeConfig.map(({ route, title }, i) => (
              <li>
                <NavLink
                  to={route}
                  exact={true}
                  activeClassName="active"
                  className="sidebarLink"
                >
                  <TaskIndicator finished={finishedTasks.includes(route)}>
                    {title}
                  </TaskIndicator>
                </NavLink>
              </li>
            ))}
          </ul>
          <main>
            <Route path="/" component={About} exact />
            {routeConfig.map(({ route, component: Component, title }) => (
              <Route
                render={props => (
                  <Component
                    {...props}
                    toggleFinishedTask={toggleFinishedTask(route)}
                    title={title}
                    isFinished={finishedTasks.includes(route)}
                  />
                )}
                path={route}
              />
            ))}
          </main>
        </div>
      </div>
    </Router>
  )
}

export default App
