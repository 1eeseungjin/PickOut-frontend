import React from "react";
import Movie from "../components/Movie";
import "./Detail.css";

class Detail extends React.Component {

    componentDidMount = () => {
        const { location, history } = this.props;
        
        if(!location.state){
            history.push("/");
        }
    }

    render = () => {
        const { location, history } = this.props;
        const { state } = this.props.location;

        if(!location.state){
            return null;
        }

        return <div className="movies">
                <Movie  id={state.id} 
                        year={state.year} 
                        title={state.title} 
                        summary={state.summary} 
                        poster={state.poster}
                        genres={state.genres}
                />
            </div>
    }
}

export default Detail;