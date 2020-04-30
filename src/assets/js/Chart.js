import React from 'react';
import { RadialBarChart, RadialBar, Legend, Tooltip } from 'recharts';

class Chart extends React.Component {
    render () {
        const style = {
            top: 20,
            left: 350,
            lineHeight: '24px'
        };

        console.log(this.props.data)

        if(Object.keys(this.props.data).length == 0) {
            return (<div></div>)
        }

        return (
            <div>
                <p>&nbsp;</p>
                <h2>COVID Infections by Age</h2>
                <RadialBarChart width={500} height={350} cx={150} cy={150} innerRadius={20} outerRadius={140} barSize={20} data={this.props.data} startAngle={90} endAngle={-270}>
                    <RadialBar minAngle={15} label={{ position: 'insideStart', fill: '#fff' }} background clockWise={false} dataKey='uv'/>
                    <Legend iconSize={10} width={120} height={140} layout='vertical' verticalAlign='middle' wrapperStyle={style}/>
                </RadialBarChart>
            </div>
        );
    }
}

export default Chart;
