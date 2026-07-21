import { NavLink, Outlet, useParams } from "react-router-dom";
import styled from "styled-components";
import dummyData from "../../data/dummy_data.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faSquareCheck } from '@fortawesome/free-solid-svg-icons';

const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    background-color: #f8f9fa;
`;

const HeaderWrapper = styled.header`
    margin: 0 auto;
    width: 100%;
    max-width: 1376px;
`;
const TopHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px 16px;
`;

const Logo = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 500;
    font-size: 21px;
    font-family: 'Fira Mono', monospace;
    height: 100%;
    line-height: 10px;
    color: #212529;
    cursor: pointer;
`;

const HeaderRight = styled.div`
    display: flex;
    align-items: center;
    height: 40px;
    margin: 4px;
    gap: 6px;
`;
const IconBell = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: none;
    background: none;
    cursor: pointer;

    &:hover {
    background-color: rgba(0, 0, 0, 0.05);
    }
`;
const IconSearch = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: none;
    background: none;
    cursor: pointer;

    &:hover {
    background-color: rgba(0, 0, 0, 0.05);
    }
`;
const LoginBtn = styled.button`
    background-color: #212529;
    color: #FFFFFF;
    height: 32px;
    width: 80px;
    font-size: 16px;
    border-radius: 1rem;
    cursor: pointer;
    border: none;
    font-weight: 700;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Main = styled.main`
    width: 100%;
    max-width: 1376px;
`;
const Layout = () => {
    const { id } = useParams();

    const post = id ? dummyData.find((p) => p.id === id) : null;

    return (
        <>
        <Container>
            <HeaderWrapper>
                <TopHeader>
                    <Logo to="/">
                        {post ?
                        (
                            <>
                                <FontAwesomeIcon 
                                icon={faSquareCheck} 
                                size="lg"
                                style={{color: "rgb(27, 29, 33)",marginRight: "8px"}} 
                                />
                                {`${post.author.name}.log`}
                            </>
                        ) : ("velog")
                        }
                    </Logo>
                    <HeaderRight>
                        <IconBell>
                            <FontAwesomeIcon 
                            icon={faBell}
                            style={{color: "rgb(27, 29, 33)", fontSize: "20px"}} 
                            />
                        </IconBell>
                        <IconSearch>
                            <FontAwesomeIcon 
                            icon={faSearch} 
                            style={{color: "rgb(27, 29, 33)", fontSize: "20px"}} 
                            />
                        </IconSearch>
                        <LoginBtn>로그인</LoginBtn>
                    </HeaderRight>
                </TopHeader>

                
            </HeaderWrapper>

            <Main>
                <Outlet/>
            </Main>
        </Container>
        </>
    );
};

export default Layout;