import { Link, useParams } from "react-router-dom";
import dummyData from "../data/dummy_data.js";
import styled from "styled-components";
import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faShareNodes } from "@fortawesome/free-solid-svg-icons";
import Profile from "../components/Profile.jsx";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 100%;
    margin-bottom: 50px;
`;
const Likediv = styled.div`
    position: fixed;
    top: 380px;
    left: calc(50% - 500px);
    width: 48px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    border-radius: 2rem;
    background-color: #f1f3f5;
    border: 1px solid #e9ecef;
    border: none;
    padding: 10px;
`
const Circle = styled.button`
    width: 30px;
    height: 30px;
    border-radius: 50%;
    border: 1px solid #e9ecef;
    background-color: #ffffff;
    color: #868e96;
`
const Likecount = styled.p`
    font-size: 10px;
    margin-top: -13px;
    color: #6c757d;
`
const Body = styled.div`
    display: flex;
    flex-direction: column;
    
    width: 768px;
`;
const Title = styled.h1`
    font-size: 48px;
    line-height: normal;
    font-weight: 800;
    text-align: left;
    margin: 60px 0px 32px;
`;
const SubInfo = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
const SubLeft = styled.div`
    display: flex;
    flex-direction: row;
`;
const AuthorName = styled.div`
    color: #495057;
`;
const Dot = styled.span`
    margin: 0 8px;
`;
const AuthorDate = styled.div`
    font-weight: bold;
    color: #212529;
`;
const Follow = styled.button`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 96px;
    height: 32px;
    color: #12B886;
    background-color: transparent;
    font-size: 16px;
    border-radius: 1rem;
    border: 1px solid #12B886;
    font-weight: bold;
`;
const Summary = styled.h2`
    font-size: 40px;
    color: #212529;
    font-weight: bold;
    text-align: left;
    margin-top: 40px;
    margin-bottom: 16px;
`;
const Content = styled.div`
    font-size: 18px;
    color: #212529;
    text-align: left;
    margin: 18px 0px 100px;
    white-space: pre-line;
`;

const PostDetail = () => {
    const {id} = useParams();
    const post = dummyData.find((p)=>p.id === id);

    return (
            <>
                <Container>
                    <Likediv>
                        <Circle>
                            <FontAwesomeIcon 
                            icon={faHeart}
                            style={{color: "#6c757d"}} 
                            />
                        </Circle>
                        <Likecount>{post.likes}</Likecount>
                        <Circle>
                            <FontAwesomeIcon 
                            icon={faShareNodes}
                            style={{color: "#6c757d"}} 
                            />
                        </Circle>
                    </Likediv>

                    <Body>
                        <Title>{post.title}</Title>

                        <SubInfo>
                            <SubLeft>
                                <AuthorDate>
                                    {post.author.name}
                                </AuthorDate>
                                <Dot>·</Dot>
                                <AuthorName>{post.date}</AuthorName>
                            </SubLeft>
                            <Follow>팔로우</Follow>
                        </SubInfo>

                        <Summary>{post.summary}</Summary>
                        <Content>{post.content}</Content>

                        <Profile author={post.author} />
                    </Body>
                </Container>
            </>
    );
};

export default PostDetail;