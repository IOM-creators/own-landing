import React from "react";
import cn from "classnames";
interface IVideo {
  src: string | any;
  poster?: string;
  classWrapper?: string;
  className?: string;
}
const Video: React.FC<IVideo> = ({
  src,
  poster,
  classWrapper,
  className,
  ...props
}) => {
  return (
    <div className={classWrapper}>
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
    </div>
  );
};
export default Video;
