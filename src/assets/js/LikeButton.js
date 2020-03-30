import React from 'react';

class LikeButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
          liked: false,
          error: null,
          isLoaded: false,
          items: ["test"]
        };
      }
    
      handleClick() {
        this.setState({ liked: true});
        fetch("https://covid-long-line-api.azurewebsites.net/covid/getSymptoms")
          .then(res => res.json())
          .then(
            (result) => {
              console.log(result)
              this.setState({
                liked: true,
                isLoaded: true,
                items: result.symptoms
              });
            },
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
            (error) => {
              this.setState({
                liked: true,
                isLoaded: true,
              });
            }
          )
      }
    
      render() {
        const {liked, error, isLoaded, items } = this.state;
        if(liked) {
            if (error) {
                return <div>Error: {error.message}</div>;
            } else if (!isLoaded) {
                return <div>Loading...</div>;
            } else {
                return <div>Symptoms:
                        <ul>
                            {items.map(item => (
                                <li key={item}> {item}</li>)
                            )}
                        </ul>
                </div>                
            }
        }
            
        return (
            <button onClick={() => this.handleClick() }>
                Like
            </button>
        );
    }
}

export default LikeButton;
