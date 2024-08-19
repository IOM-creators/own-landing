import React from "react";
import cn from "classnames";

interface Asset {
  __typename: "Asset";
  url: string;
}

interface VideoContent {
  __typename: "Video";
  title: string;
  video: Asset;
  videoPoster: {
    url: string | null;
  } | null;
  height: number;
  objectFit: string;
  autoPlay: boolean;
  loop: boolean;
}

interface ContentfulVideo {
  video: VideoContent;
}

interface IVideo {
  id?: string;
  src: string;
  poster?: string;
  height?: string;
  classWrapper?: string;
  className?: string;
  section: ContentfulVideo;
}

const Video: React.FC<IVideo> = ({
  id = "",
  src,
  height,
  poster,
  classWrapper = "video-wrapper",
  className,
  section,
  ...props
}) => {
  const { video } = section;

  const customStyles = {
    ...(video?.height && { "--video-height": `${video.height}%` }),
    ...(video?.objectFit && { "--video-fit": `${video.objectFit}` }),
  } as React.CSSProperties;

  return (
    <div className={cn(classWrapper)} style={customStyles}>
      {video ? (
        <video
          id={id}
          src={video.video.url}
          poster={video?.videoPoster?.url || undefined}
          autoPlay={video.autoPlay}
          muted
          loop={video.loop}
          playsInline
          {...props}
          className={cn(className)}
        ></video>
      ) : (
        <video
          id={id}
          src={src}
          poster={poster}
          autoPlay
          muted
          loop
          playsInline
          {...props}
          className={cn(className)}
        ></video>
      )}
    </div>
  );
};

export default Video;
