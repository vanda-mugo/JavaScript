function Video(props) {
    return (
      <div>
        <video src={props.src} controls autostart="true" autoPlay muted/>
      </div>
    );
};
export default Video;