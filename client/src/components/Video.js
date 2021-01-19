export default function Video(props) {

    const code = getVideoCode(props.link)

    return (
        <div className="Video">
            <iframe
                height="100%"
                width="100%"
                src={"https://www.youtube.com/embed/" + code + "?start=" + props.start + "&autoplay=0"}
                frameborder="0"
                autoplay="1"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen="allowfullscreen"
            >
            </iframe>
        </div >
    );
}

function getVideoCode(link) {
    const pos = link.indexOf("watch?v="); // Find Position of this string
    const code = link.slice(pos + 8, pos + 19); // remove anything before or after the video code 

    return code;
}

