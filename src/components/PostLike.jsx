import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faShareNodes } from "@fortawesome/free-solid-svg-icons";

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

const PostLike = ({likes}) => {
    return (
        <>
        <Likediv>
            <Circle>
                <FontAwesomeIcon 
                    icon={faHeart}
                    style={{color: "#6c757d"}} 
                />
            </Circle>
            <Likecount>{likes}</Likecount>
            <Circle>
                <FontAwesomeIcon 
                    icon={faShareNodes}
                    style={{color: "#6c757d"}} 
                />
            </Circle>
        </Likediv>
        </>
    );
};

export default PostLike;