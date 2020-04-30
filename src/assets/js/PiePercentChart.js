import React from 'react';
import {
  PieChart, Pie, Cell, Legend,
} from 'recharts';

class PiePercentChart extends React.Component {
    constructor(props) {
        super(props);
    }

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
          
        const COLORS = ['#816cb8', '#312450'];

        const RADIAN = Math.PI / 180;
        const renderCustomizedLabel = ({
        cx, cy, midAngle, innerRadius, outerRadius, percent, index, name
        }) => {
             const radius = innerRadius + (outerRadius - innerRadius) * 1.4;
            const x = cx + radius * Math.cos(-midAngle * RADIAN);
            const y = cy + radius * Math.sin(-midAngle * RADIAN);
          
            console.log(percent)
            return (
              <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                {`${(percent * 100).toFixed(1)}%`} 
              </text>
            );
        };

        const title = (this.props.country == "") ?
            "COVID Infection Search Results":
            `COVID Infection Search Results in ${this.props.country}`;

        return (
            <div>
                <p>&nbsp;</p>
                <h2>{title}</h2>
                <PieChart width={600} height={400}>
                    <Pie
                    data={this.props.data}
                    labelLine={false}
                    label={renderCustomizedLabel}
                    dataKey="value"
                    innerRadius={100}
                    outerRadius={130}
                    paddingAngle={5}
                    >
                    {
                        this.props.data.map((entry, index) => <Cell key={`cell-${index}`} stroke="#8884d8" fill={COLORS[index % COLORS.length]} />)
                    }
                    </Pie>
                    <Legend/>
                </PieChart>
            </div>
        );
    }
}

export default PiePercentChart;