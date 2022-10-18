import React from 'react'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  import { Line } from 'react-chartjs-2';

  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

function Graph({graphData}) {
  return (
    <div>
        <Line
        
        data={
            {
                labels: graphData.map(i => i[0] + 1) ,
                datasets: [
                    {
                        data: graphData.map(i => i[1]) ,
                        label: 'WPM',
                        borderColor: 'gold'
                    }
                ]
            }
        } />
    </div>
  )
}

export default Graph