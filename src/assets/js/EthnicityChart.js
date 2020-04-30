import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis } from 'recharts';

class EthnicityChart extends React.Component {
    render () {
        if(this.props.hide) {
            return(<div></div>);
        }


        const data = [
            {
                subject: 'Native American/American Indian', A: 2, B: 100, fullMark: 150,
            },
            {
                subject: 'White', A: 20, B: 130, fullMark: 150,
            },
            {
                subject: 'Hispanic/Latino', A: 25, B: 130, fullMark: 150,
            },
            {
                subject: 'Black/African American', A: 30, B: 110, fullMark: 150,
            },
            {
                subject: 'Asian/Pacific Islander', A: 20, B: 90, fullMark: 150,
            },
            {
                subject: 'Other', A: 3, B: 85, fullMark: 150,
            },
        ];

        const title = "COVID Infections By Ethnicity [DEMO DATA]";
        return (
            <div>
                <p>&nbsp;</p>
                <h2>{title}</h2>
                <RadarChart cy={200} outerRadius={120} width={600} height={500} data={data}>
                    <PolarGrid/>
                    <PolarAngleAxis dataKey="subject" tick={{  fill: 'white' }} />
                    <PolarRadiusAxis/>
                    <Radar name="Mike" dataKey="A" stroke="#8884d8" fill="#816cb8" fillOpacity={0.8}  />
                </RadarChart>
            </div>
        );
    }
}

export default EthnicityChart;