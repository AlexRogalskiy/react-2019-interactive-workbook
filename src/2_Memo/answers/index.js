import React, { useEffect, useState } from "react"
import styles from "../ignore-me/Grid.module.scss"
import GridSquare from "./GridSquare"

const range = (end, start = 0) => [...new Array(end).keys()].slice(start)

const gridCellCount = 100

const Grid = () => {
  const [highlightedIndex, setHighlightedIndex] = useState(0)
  useEffect(() => {
    const intervalId = setInterval(() => {
      setHighlightedIndex(
        highlightedIndex => (highlightedIndex + 1) % gridCellCount
      )
    }, 1)
    return () => clearInterval(intervalId)
  })
  return (
    <div >
      <div className={styles.grid}>
        {range(gridCellCount).map((_, index) => (
          <GridSquare highlighted={highlightedIndex === index} />
        ))}
      </div>
    </div>
  )
}

export default Grid
