import React, { memo } from 'react';
import VideoItem from '../video_item/video_item';
import styles from './video_list.module.css';

const Videolist = memo(({ videos, onVideoClick, display, hideNavControl }) => {
  return (
    <ul className={styles.videos}>
      {videos.map((video) => (
        <VideoItem
          key={video.id}
          video={video}
          onVideoClick={onVideoClick}
          display={display}
          hideNavControl={hideNavControl}
        />
      ))}
    </ul>
  );
});

export default Videolist;
