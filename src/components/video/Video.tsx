import React from "react";
import cn from "classnames";
import { useGetVideo } from "@/graphql/queries/video";
interface IVideo {
  id?: string;
  src: string | any;
  poster?: string;
  height?: string;
  classWrapper?: string;
  className?: string;
}
const Video: React.FC<IVideo> = ({
  id = "",
  src,
  height,
  poster,
  classWrapper = "video-wrapper",
  className,
  ...props
}) => {
  const { video } = useGetVideo(id);
  const customStyles = {
    ...(video?.height && { "--video-height": `${video.height}%` }),
    ...(video?.objectFit && { "--video-fit": `${video.objectFit}` }),
  };
  return (
    <div className={cn(classWrapper, {})} style={customStyles}>
      {video ? (
        <video
          src={video.video.url}
          poster={video.videoPoster?.url}
          autoPlay={video.autoPlay}
          muted
          loop={video.loop}
          playsInline
          {...props}
          className={cn({}, className)}
        ></video>
      ) : (
        <video
          src={src}
          poster={poster}
          autoPlay
          muted
          loop
          playsInline
          {...props}
          className={cn({}, className)}
        ></video>
      )}
    </div>
  );
};
export default Video;
