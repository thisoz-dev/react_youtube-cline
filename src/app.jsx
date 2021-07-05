import { useCallback, useEffect, useState } from 'react';
import styles from './app.module.css';
import NavCollapse from './components/nav_collapse/nav_collapse';
import NavExtend from './components/nav_extend/nav_extend';
import NavSlide from './components/nav_slide/nav_slide';
import SearchHeader from './components/search_header/search_header';
import VideoDetail from './components/video_detail/video_detail';
import Videolist from './components/video_list/video_list';

function App({ youtube }) {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [navOpen, setNavOpen] = useState(true);
  const [isHome, setIsHome] = useState(true);
  const [slideNav, setSlideNav] = useState(false);

  const selectVideo = (video) => {
    setSelectedVideo(video);
  };

  const search = useCallback(
    (query) => {
      youtube
        .search(query) //
        .then((videos) => {
          setVideos(videos);
          setSelectedVideo(null);
        });
    },
    [youtube]
  );

  const channel = useCallback(
    (channelId) => {
      youtube
        .channels(channelId) //
        .then((channelId) => {
          channel(channelId[0].snippet);
        });
    },
    [youtube]
  );

  const moveHome = useCallback(() => {
    setIsHome(true);
    selectVideo(null);
    youtube //
      .mostPopular()
      .then((videos) => {
        setVideos(videos);
      });
  }, [youtube]);

  const handleMenu = useCallback(() => {
    navOpen ? setNavOpen(false) : setNavOpen(true);
    !isHome && !slideNav ? setSlideNav(true) : setSlideNav(false);
  }, [navOpen, isHome, slideNav]);

  useEffect(() => {
    youtube
      .mostPopular() //
      .then((videos) => setVideos(videos));
  }, [youtube]);

  /* useCallback은 한 번 만들게되면 메모리상에 계속 보관하고 있기 때문에 메모리에 많은 영향이 갈 수 있다. 
  자식 컴포넌트에 props를 전달할 때, 계속 새로운 콜백을 전달하면 자식 컴포넌트가 계속 re-reander가 발생할 때 사용하기 적합하다.
  반면, 자식 컴포넌트가 아니라 간단한 jsx를 이용한 div 태그 또는 button과 같이 새로운 이벤트 데이터가 
  전달되어도 re-render가 발생하지 않는 요소라면 굳이 useCallback을 사용할 필요가 없다.
  useCallback을 사용해야할 때를 잘 파악하여 사용하자. */

  const listType = navOpen ? styles.list_extend : styles.list_collapse;
  const hideNavControl = () => {
    setIsHome(false);
  };
  return (
    <div className={styles.app}>
      <SearchHeader onSearch={search} clickLogo={moveHome} handleMenu={handleMenu} />
      <section className={`${styles.content} ${!isHome && styles.no_home}`}>
        <div className={styles.content_inner}>
          {isHome && (
            <div className={`${styles.aside} ${navOpen ? styles.extend : styles.collapse}`}>
              {navOpen ? (
                <NavExtend clickHome={moveHome} handleMenu={handleMenu} />
              ) : (
                <NavCollapse clickHome={moveHome} />
              )}
            </div>
          )}
          {!isHome && (
            <div>
              <NavSlide slideNav={slideNav} handleMenu={handleMenu} clickHome={moveHome} />
            </div>
          )}

          {selectedVideo && (
            <div className={styles.detail}>
              <VideoDetail video={selectedVideo} youtube={youtube} />
            </div>
          )}
          <div className={`${styles.list} ${isHome && listType}`}>
            <Videolist
              videos={videos}
              onVideoClick={selectVideo}
              display={selectedVideo ? 'list' : 'grid'}
              hideNavControl={hideNavControl}
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
