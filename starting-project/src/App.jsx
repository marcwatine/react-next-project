import Post from "./components/Post";
import PostsList from "./components/PostsList";
import MainHeader from "./components/MainHeader";
import {useState} from 'react';
function App() {
  // we have added this state here instead of PostList, to be able to control the modal from here
  const [modalIsVisible, setModalIsVisible] = useState(false);
  function hideModalHandler(){
    setModalIsVisible(false);
  }
  function showModalHandler(){
    setModalIsVisible(true);
  }
  return (
    <>
      <MainHeader onCreatePost={showModalHandler}/>
      <main>
        <PostsList isPosting={modalIsVisible} onStopPosting={hideModalHandler}/>
      </main>
    </>
    
  )
}


export default App;//exporting the App component
