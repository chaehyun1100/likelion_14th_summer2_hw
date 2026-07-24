import { Link, useParams } from "react-router-dom";
import dummyData from "../data/dummy_data.js";
import styled from "styled-components";
import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faShareNodes } from "@fortawesome/free-solid-svg-icons";
import Profile from "../components/Profile.jsx";
import PostContent from "../components/PostContent.jsx";

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

                <PostContent post={post} />
                <Profile author={post.author} />
                </Container>
            </>
    );
};

export default PostDetail;