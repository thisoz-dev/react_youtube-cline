import React, { useEffect, useState } from 'react';
import styles from './video_detail.module.css';

const VideoDetail = ({ video, video: { snippet, statistics }, youtube }) => {
  const [channel, setChannel] = useState(null);
  useEffect(() => {
    youtube
      .channels(snippet.channelId) //
      .then((channel) => {
        setChannel(channel);
      });
  }, [snippet, youtube]);

  const viewCount = statistics.viewCount;
  const viewCountUnit = (view) => {
    return view.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  const tags = snippet.tags;

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
      <div className={styles.video_info}>
        <div className={styles.video_tags}>
          {tags !== undefined &&
            tags.map((tag, idx) => {
              return (
                <span className={styles.video_tag} key={idx}>
                  #{tag}
                </span>
              );
            })}
        </div>
        <h2 className={styles.video_title}>{snippet.title}</h2>
        <p className={styles.video_state}>
          <span className={styles.view_count}>조회수 {viewCountUnit(viewCount)}회</span> ∙
          <span className={styles.published_at}></span> {snippet.publishedAt.slice(0, 10)}
        </p>
      </div>
      {channel && (
        <div className={styles.channel}>
          <div className={styles.channel_img}>
            <img src={channel[0].snippet.thumbnails.default.url} alt="" />
          </div>
          <div className={styles.channel_info}>
            <h3 className={styles.channel_title}>{snippet.channelTitle}</h3>
            <span className={styles.subscriber_count}>
              구독자{' '}
              {channel[0].statistics.subscriberCount > 10000
                ? channel[0].statistics.subscriberCount.slice(0, -4) + '만'
                : channel[0].statistics.subscriberCount}
              명
            </span>
          </div>
        </div>
      )}
      <pre className={styles.description}>{snippet.description}</pre>
    </section>
  );
};

export default VideoDetail;
