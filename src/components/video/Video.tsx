import React from "react";
import cn from "classnames";
import { useGetVideo } from "@/graphql/queries/video";
interface IVideo {
  id?: string;
  src: string | any;
  poster?: string;
  classWrapper?: string;
  className?: string;
}
const Video: React.FC<IVideo> = ({
  id = "",
  src,
  poster,
  classWrapper,
  className,
  ...props
}) => {
  const { video } = useGetVideo(id);

  return (
    <div className={cn(classWrapper, {})}>
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
