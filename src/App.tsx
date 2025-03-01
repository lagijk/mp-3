import { Routes, Route } from 'react-router-dom';
import { createBrowserRouter,  RouterProvider } from 'react-router-dom';
import styled from 'styled-components';

import Header from './components/Header.tsx';
import Navigation from './components/Navigation.tsx';
import Footer from './components/Footer.tsx';

import Home from './components/Home.tsx';
import Education from './components/Education.tsx';
import Experiences from './components/Experiences.tsx';
import Technical from './components/Technical.tsx';
import Achievements from './components/Achievements.tsx';
import Projects from './components/Projects.tsx';

/*white spaces on left and right, main page take up 80%*/
const PageWrapper = styled.div`
  width: 80vw;
  margin: 0 auto;
`;

const ContainerDiv = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    background-color: #F9F7F7;

    /*mobile device screen 750 -1000px*/
    @media screen and (max-width: 900px) {
        width: 100%;
        flex-direction: column;
        height: 100vh;
    }
`;

function Root() {
    return (
        <>
          <PageWrapper>

              <Header/>
              <ContainerDiv>

                <Navigation/>

                  <Routes>
                    <Route path="/*" element={<Home/>}/>
                    <Route path="/education" element={<Education/>}/>
                    <Route path="/experiences" element={<Experiences/>}/>
                    <Route path="/technical" element={<Technical/>}/>
                    <Route path="/achievements" element={<Achievements/>}/>
                    <Route path="/projects" element={<Projects/>}/>
                  </Routes>
                
              </ContainerDiv>

              <Footer/>
          </PageWrapper>
        </>
    );
}

//renders all routes
const router = createBrowserRouter(
  [{path: "*", Component: Root}]
);

// renders all the components of the resume
function App() {
  return (
    <>  
      <RouterProvider router={router}/>
    </>
  );
}
export default App
