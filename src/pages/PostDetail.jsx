import { Link, useParams } from "react-router-dom";
import dummyData from "../data/dummy_data.js";
import styled from "styled-components";

import Profile from "../components/Profile.jsx";
import PostContent from "../components/PostContent.jsx";
import PostLike from "../components/PostLike.jsx";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 100%;
    margin-bottom: 50px;
`;
const Body = styled.div`
    display: flex;
    flex-direction: column;
    
    width: 768px;
`;

const PostDetail = () => {
    const {id} = useParams();
    const post = dummyData.find((p)=>p.id === id);

    return (
            <>
                <Container>
                    <PostLike likes={post.likes} />
                    <Body>
                        <PostContent post={post} />
                        <Profile author={post.author} />
                    </Body>
                </Container>
            </>
    );
};

export default PostDetail;