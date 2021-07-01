import React from 'react';
import styles from './video_detail.module.css';

const VideoDetail = ({ video, video: { snippet } }) => {
  return (
    <section className={styles.detail}>
      <div className={styles.detail_inner}>
        <iframe
          className={styles.video}
          type="text/html"
          title="youtube video player"
          width="100%"
          height="580px"
          src={`https://www.youtube.com/embed/${video.id}`}
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
      <h2 className={styles.title}>{snippet.title}</h2>
      <p>{snippet.publishedAt.slice(0, 10)}</p>
      <h3>{snippet.channelTitle}</h3>
      <pre className={styles.description}>{snippet.description}</pre>
    </section>
  );
};

export default VideoDetail;
