import React from "react";

class ImageCard extends React.Component {
    constructor(props) {
        super(props);

        this.state = {spans: 0};

        this.imageRef = React.createRef();
    }

    componentDidMount() {
        //Moramo sacekati da se slika downloaduje, ako se uspesno downloaduje trigeruje se event
        //Da bi imali visinu svake slike
        this.imageRef.current.addEventListener('load', this.setSpans);
    }

    // mora strelica da ne bi dobili value of this is undefined
    setSpans = () => {
        //dobijamo visinu slike
        const height = this.imageRef.current.clientHeight;

        // delimo sa 10 zato sto smo tako postavili grid auto rows u css fajlu
        const spanss = Math.ceil(height / 10);

        this.setState({spans: spanss});

    }

    render() {
        //da ne moramo dole da pisemo sve this.props.image.description
        const {description, urls } = this.props.image;


        return (
            <div style={{ gridRowEnd: `span ${this.state.spans}`}}>
                <img
                  ref={this.imageRef}
                  alt={description} 
                  src={urls.regular}
                />
            </div>
        );
    }
}

export default ImageCard;