import React from 'react';
import VideoPlayer from "./videoplayer";
import ScaleText from 'react-scale-text';

class Poster extends React.Component {
    constructor(props) {
        super(props);
        let properties = {
            performer: this.props.performer,
            song: this.props.song,
            show: this.props.show,
            poster_url: this.props.poster_url,
            video_url: this.props.video_url
        }
        this.state = {isFlipped: false};
        this.state = {dimensions: {}};
        this.handleHover = this.handleHover.bind(this);
    }

    state = {
        videoIsOpen: false
    }

    handleHover(e) {
        e.preventDefault();
        this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
    }

    toggleModal = () => this.setState(state => ({videoIsOpen: !state.videoIsOpen}))

    render() {
        return(
            <div>
                <div className='poster' onClick={this.toggleModal}>
                    <img
                        src={this.props.poster_url}
                        className="poster-image"
                        alt=""
                    />
                    <div className='poster-overlay'>
                        {/* <div className='poster-text'>
                            <p><b>{this.props.performer}</b></p>
                            <p>Performing {this.props.title}</p>
                            <p>Directed by {this.props.director}</p>
                            <p style={{fontSize:'25px'}}>&#9658;</p>
                        </div> */}
                        <ScaleText minFontSize={6} maxFontSize={30} widthOnly={false}>
                            <div className='poster-text'>
                                <p><b>{this.props.performer}</b></p>
                                <p>Performing {this.props.title}</p>
                                <p>Directed by {this.props.director}</p>
                            </div>
                        </ScaleText>
                    </div>
                </div>
                <VideoPlayer opened={this.state.videoIsOpen} toggleModal={this.toggleModal} video_url={this.props.video_url}/>
            </div>
        );
    }
}

export default Poster;