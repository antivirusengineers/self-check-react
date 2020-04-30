import React from 'react';

class LikeButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
          liked: false,
          error: null,
          isLoaded: false,
          percentage: 0
        };
      }
    
      handleClick() {
        this.setState({ liked: true});
        const url = "https://covid-long-line-api.azurewebsites.net/covid/prevalence"
        const attributes = {
            "country":"Japan",
            "age":25,
            "gender":"male"
        };

        const additional_args = {
            "age": {
                "span":5
            }
        };

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
                    percentage: result.percentage * 100
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
      }
    
      render() {
        const {liked, error, isLoaded, percentage } = this.state;
        if(liked) {
            if (error) {
                return <div>Error: {error.message}</div>;
            } else if (!isLoaded) {
                return <div>Loading...</div>;
            } else {
                return <div>Percentage: {percentage}%</div>                
            }
        }
            
        return (
            <button onClick={() => this.handleClick() }>
                Symptom API Test
            </button>
        );
    }
}

export default LikeButton;