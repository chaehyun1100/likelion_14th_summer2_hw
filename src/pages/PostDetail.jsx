import { Link, useParams } from "react-router-dom";
import dummyData from "../data/dummy_data.js";
import styled from "styled-components";
import { useEffect } from "react";


const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 100%;

`;
const Logotext = styled.div`
    
`;
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
const Profile = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;
const ProfileLeft = styled.div`
    display: flex;
    align-items: center;
`;
const ProfileAvatar = styled.img`
    width: 128px;
    height: 128px;
    border-radius: 50%;
`;
const ProfileName = styled.div`
    font-size: 24px;
    margin: 0px 16px;
    color: #212529;
    font-weight: bold;
`;

const PostDetail = () => {
    const {id} = useParams();
    const post = dummyData.find((p)=>p.id === id);

    return (
            <>
                <Container>
                    <Logotext>

                    </Logotext>
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

                        <Profile>
                            <ProfileLeft>
                                <ProfileAvatar src={post.author.avatar}/>
                                <ProfileName>{post.author.name}</ProfileName>
                            </ProfileLeft>
                            <Follow>팔로우</Follow>
                        </Profile>
                    </Body>
                </Container>
            </>
    );
};

export default PostDetail;