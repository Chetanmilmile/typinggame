import React from 'react'
import Graph from './Graph'
import './Stats.css'

function Stats({wpm, accuracy, correctChars, incorrectChars, extraChars, missedChars, graphData}) {

  var timeSet = new Set();

  const newGraph = graphData.filter((i) => {
    if(!timeSet.has(i[0])){
      timeSet.add(i[0]);
      return i;
    }
  })


  return (
    <div className='stats-box'>
      <div className='left-stats'>
          <div className='title'>WPM</div>
          <div className='subTitle'>{wpm}</div>
          <div className='title'>Accuracy</div>
          <div className='subTitle'>{accuracy}</div>
          <div className='title'>Characters</div>
          <div className='subTitle'>{correctChars}/{incorrectChars}/{extraChars}/{missedChars}</div>
      </div>

      <div className='right-stats'>
        <Graph graphData={newGraph} />
      </div>

    </div>
  )
}

export default Stats