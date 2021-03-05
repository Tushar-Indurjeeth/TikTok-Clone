import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import Video from './Video';

function App() {

  const [videos, setVideos] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      const response = await axios.get('https://tiktok-clone-backend12.herokuapp.com/');
      setVideos(response.data);

      return null;
    }
    fetchPosts();
  }, []);

  // console.log(videos);

  return (
    <div className="app">
      <div className="app__videos">

        {videos.map(
          ({ url, channel, description, song, likes, messages, shares }) => (
            <Video
              url={url}
              channel={channel}
              description={description}
              song={song}
              likes={parseInt(likes, 10)}
              messages={messages}
              shares={shares}
            />
          ))}
      </div>

    </div>
  );
}

export default App;
