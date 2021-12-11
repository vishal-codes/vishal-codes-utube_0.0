import React from 'react';

const VideoDetail = ({video}) => {
    if(!video){
        return(
           <div>
               Loading...
           </div>
        );
    }

    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
    return (
      <div>
        <div className="ui embed">
            <iframe title="video player" src={videoSrc} allowFullScreen/>
        </div>
        <div className="ui segment">
            <h3 style={{color: "white"}} className="ui header">{video.snippet.title}</h3>
            <p style={{color: "white"}}>{video.snippet.description}</p>
        </div>
      </div>
    );

};

export default VideoDetail;