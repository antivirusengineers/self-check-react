import React from 'react';
import Chart from './Chart';
import PiePercentChart from './PiePercentChart';
import EthnicityChart from './EthnicityChart';

class COVIDForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            gender: "Male",
            age: "25",
            span: "5",
            health: "N/A",
            city: "",
            state: "",
            country: "USA",
            ethnicity: "",
            checkedSymptoms: new Set(),
            results: "",
            data: []
        };
        this.submitForm = this.submitForm.bind(this);
        this.handleSymptom = this.handleSymptom.bind(this);
        this.addSymptom = this.addSymptom.bind(this);
        this.removeSymptom = this.removeSymptom.bind(this);
    }

    render () {
        return (
            <form>
                <div className="fields">
                    <div className="field">
                        <h2>COVID Infection Search</h2>
                    </div>
                    <div className="field half">
                        <label htmlFor="country">Country</label>
                        <select 
                            name="country" id="country" value={this.state.country} 
                            onChange={(e) => { this.setState({country: e.target.value}); }}>
                            <option value="">- Select -</option>
                            <option value="USA">USA</option>
                            <option value="Japan">Japan</option>
                        </select>
                    </div>
                    <div className="field half"></div>
                    <div className="field half">
                        <label htmlFor="city" style={{ color: 'gray' }}>City</label>
                        <input disabled="true" style={{ color: 'gray' }}
                            type="text" name="city" id="city" value={this.state.city} 
                            onChange={(e) => { this.setState({city: e.target.value}); }}/>
                    </div>

                    <div className="field half" >
                        <label htmlFor="state" style={{ color: 'gray' }}>State</label>
                        <select 
                            disabled="true" style={{ color: 'gray' }}
                            name="state" id="state" value={this.state.state} 
                            onChange={(e) => { this.setState({state: e.target.value}); }}>
                            <option value="">- Select -</option>
                            <option value="AL">Alabama</option>
                            <option value="AK">Alaska</option>
                            <option value="AZ">Arizona</option>
                            <option value="AR">Arkansas</option>
                            <option value="CA">California</option>
                            <option value="CO">Colorado</option>
                            <option value="CT">Connecticut</option>
                            <option value="DE">Delaware</option>
                            <option value="DC">District Of Columbia</option>
                            <option value="FL">Florida</option>
                            <option value="GA">Georgia</option>
                            <option value="HI">Hawaii</option>
                            <option value="ID">Idaho</option>
                            <option value="IL">Illinois</option>
                            <option value="IN">Indiana</option>
                            <option value="IA">Iowa</option>
                            <option value="KS">Kansas</option>
                            <option value="KY">Kentucky</option>
                            <option value="LA">Louisiana</option>
                            <option value="ME">Maine</option>
                            <option value="MD">Maryland</option>
                            <option value="MA">Massachusetts</option>
                            <option value="MI">Michigan</option>
                            <option value="MN">Minnesota</option>
                            <option value="MS">Mississippi</option>
                            <option value="MO">Missouri</option>
                            <option value="MT">Montana</option>
                            <option value="NE">Nebraska</option>
                            <option value="NV">Nevada</option>
                            <option value="NH">New Hampshire</option>
                            <option value="NJ">New Jersey</option>
                            <option value="NM">New Mexico</option>
                            <option value="NY">New York</option>
                            <option value="NC">North Carolina</option>
                            <option value="ND">North Dakota</option>
                            <option value="OH">Ohio</option>
                            <option value="OK">Oklahoma</option>
                            <option value="OR">Oregon</option>
                            <option value="PA">Pennsylvania</option>
                            <option value="RI">Rhode Island</option>
                            <option value="SC">South Carolina</option>
                            <option value="SD">South Dakota</option>
                            <option value="TN">Tennessee</option>
                            <option value="TX">Texas</option>
                            <option value="UT">Utah</option>
                            <option value="VT">Vermont</option>
                            <option value="VA">Virginia</option>
                            <option value="WA">Washington</option>
                            <option value="WV">West Virginia</option>
                            <option value="WI">Wisconsin</option>
                            <option value="WY">Wyoming</option>
                        </select>
                    </div>
                    <div className="field"></div>
                    <div className="field">
                        <h3>Demographic Criteria</h3>
                        <p>Enter any combination of demographics</p>
                    </div>
                    <div className="field half">
                        <label htmlFor="gender">Gender</label>
                        <select 
                            name="gender" id="gender" value={this.state.gender} 
                            onChange={(e) => { this.setState({gender: e.target.value}); }}>
                            <option value="0">- Select -</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>
                    <div className="field half">
                        <label htmlFor="age">Age</label>
                        <input 
                            type="text" maxLength = "3" id="age" value={this.state.age} 
                            onChange={(e) => { this.setState({age: e.target.value}); }}/>
                    </div>
                    <div className="field half">
                        <label htmlFor="ethnicity" style={{ color: 'gray' }}>Ethnicity</label>
                        <select 
                            disabled="true" style={{ color: 'gray' }}
                            name="ethnicity" id="ethnicity" value={this.state.ethnicity} 
                            onChange={(e) => { this.setState({ethnicity: e.target.value}); }}>
                            <option value="">- Select -</option>
                        </select>
                    </div>
                    <div className="field half">
                    <label htmlFor="span">Age Span (± X years)</label>
                        <input 
                            type="text" maxLength = "3" id="span" value={this.state.span} 
                            onChange={(e) => { this.setState({span: e.target.value}); }}/>
                    </div>
                    <div className="field half">
                        <label htmlFor="message">Symptoms</label>
                        <div>
                            <input type="checkbox" id="fever" name="fever" onChange={this.handleSymptom}></input>
                            <label htmlFor="fever">Fever</label>
                        </div>
                        <div>
                            <input type="checkbox" id="cough" name="cough" onChange={this.handleSymptom}></input>
                            <label htmlFor="cough">Cough</label>
                        </div>
                        <div>
                            <input type="checkbox" id="chills" name="chills" onChange={this.handleSymptom}>
                            </input>
                            <label htmlFor="chills">Chills</label>
                        </div>
                    </div>
                    <div className="field half">
                        <label htmlFor="message">&nbsp;</label>
                        <div>
                            <input type="checkbox" id="difficulty_breathing" name="difficulty_breathing" onChange={this.handleSymptom}></input>
                            <label htmlFor="difficulty_breathing">Difficulty Breathing</label>
                        </div>
                        <div>
                            <input type="checkbox" id="headache" name="headache" onChange={this.handleSymptom}></input>
                            <label htmlFor="headache">Headache</label>
                        </div>
                        <div>
                            <input type="checkbox" id="fatigue" name="fatigue" onChange={this.handleSymptom}></input>
                            <label htmlFor="fatigue">Fatigue</label>
                        </div>
                    </div>
                    <div className="field">
                        <label htmlFor="health" style={{ color: 'gray' }}>Underlying Health Conditions</label>
                        <textarea 
                            disabed="true" style={{ color: 'gray' }}
                            name="health" id="health" rows="2" value={this.state.health} 
                            onChange={(e) => { this.setState({health: e.target.value}); }}>
                        </textarea>
                    </div>
                </div>
                <button className="button submit" type="button" onClick={this.submitForm}>Search</button>
                {/* <Chart data={this.state.data}></Chart> */}
                <PiePercentChart data={this.state.data} gender={this.state.gender} age={this.state.age} country={this.state.country}></PiePercentChart>
                <EthnicityChart></EthnicityChart>
                <div>{this.state.results}</div>
            </form>);
    }

    handleSymptom(event) {
        const symptom = event.target.name;
        if(this.state.checkedSymptoms.has(symptom)) {
            this.removeSymptom(symptom)
        } else {
            this.addSymptom(symptom)
        }
    }

    addSymptom(symptom) {
        this.setState(({ checkedSymptoms }) => ({
            checkedSymptoms: new Set(checkedSymptoms).add(symptom)
        }));
    }

    removeSymptom(symptom) {
        this.setState(({ checkedSymptoms }) => {
            const newChecked = new Set(checkedSymptoms);
            newChecked.delete(symptom);

            return { checkedSymptoms: newChecked };
        });
    }

    submitForm() {
        let symptoms = [];
        this.state.checkedSymptoms.forEach(s => symptoms.push(s));

        let text = 
            "Gender: " + this.state.gender + "\n" +
            "Age: " + this.state.age + "\n" +
            "City: " + this.state.city + "\n" +
            "State: " + this.state.state + "\n" +
            "Symptoms: " + symptoms + "\n" +
            "Underlying Health Conditions: " + this.state.health;

        const url = "https://covid-long-line-api.azurewebsites.net/covid/prevalence"
        // const attributes = {
        //     // "country":this.state.country,
        //     "age":this.state.age,
        //     // "gender":this.state.gender
        // };

        let attributes = {};
        if(this.state.country != "") {
            attributes["country"] = this.state.country
        }
        if(this.state.age != 0) {
            attributes["age"] = this.state.age
        }
        if(this.state.gender != "") {
            attributes["gender"] = this.state.gender
        }

        const span = parseInt(this.state.span)

        const additional_args = {
            "age": {
                "span":span
            }
        };

        const minAge = parseInt(this.state.age) - span;
        const maxAge = parseInt(this.state.age) + span;

        var formData = new FormData(); // Currently empty
        formData.append('attributes', JSON.stringify(attributes));
        formData.append('additional_args', JSON.stringify(additional_args));

        fetch(url, {
            method: "POST",
            body: formData})
        .then(res => res.json())
        .then(
            (result) => {
                console.log(result.percentage)
                this.setState({
                    liked: true,
                    isLoaded: true,
                    percentage: result.percentage * 100,
                    data: [
                        {name: `${this.state.gender} ${minAge} - ${maxAge}`, value: result.percentage},
                        {name: "Other", value: 1-result.percentage},
                    ]
                });
            },
            (error) => {
                console.log(error.message)
                this.setState({
                    liked: true,
                    isLoaded: true,
                });
            }
        )

        let newText = text.split('\n').map((item, i) => {
            return <p key={i}>{item}</p>;
        });
    }
}

export default COVIDForm;
