import { Link } from "react-router-dom";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

const StyledLink = styled(Link)`
    text-decoration: none;
    color: inherit;
    display: block;
`;
const CardWrapper = styled.div`
    display: flex;
    flex-direction: column;

    overflow: hidden;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    background: #fff;
    height: 380px;
`;

const TopSection = styled.div`
    height: 167px;
    overflow: hidden;
`;
const ThumbNail = styled.img`
    width: 100%;
    height: 100%;
`;

const MainSection = styled.div`
    padding: 16px;
    display: flex;
    flex-direction: column;
    flex: 1;
`;

const Title = styled.h1`
    font-size: 16px;
    color: #212529;
    font-weight: bold;
    margin: 0px 0px 4px;
    text-align: left;
`;
const Summary = styled.p`
    font-size: 14px;
    color: #495057;
    text-align: left;
`;
const Comments = styled.p`
    font-size: 12px;
    margin-top: auto;
    margin-bottom: 0;
    text-align: left;
`;
const BottomSection = styled.div`
    height: 45px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 16px;
    border-top: 1px solid #f1f3f5;
`;
const UserWrapper = styled.div`
    display: flex;
    align-items: center;
`;
const AuthorImg = styled.img`
    width: 24px;
    height: 24px;
    border-radius: 50%;
    margin-right: 8px;
`;

const AuthorName = styled.p`
    font-size: 12px;
    color: #212529;
    margin-left: 3px;
    font-weight: bold;
`;

const Likes = styled.p`
    font-size: 12px;
    color: #212529;
`;

const PostCard = ({ post }) => {
    const {id, thumbnail, title, summary, comments, date, likes, author} = post;
    return (
        <>
        <StyledLink to = {`/posts/${id}`} style = {{textDecoration: "none"}}>
            <CardWrapper>
                <TopSection>
                    <ThumbNail src={thumbnail} alt={title} />
                </TopSection>

                <MainSection>
                    <Title>
                        {title}
                    </Title>
                    <Summary>
                        {summary}
                    </Summary>
                    <Comments>
                        {date} · {comments}개의 댓글
                    </Comments>
                </MainSection>

                <BottomSection>
                    <UserWrapper>
                        <AuthorImg src={author.avatar} />
                        <span style={{ color: "#868E96", fontSize: "12px" }}>by</span>
                        <AuthorName>
                            {author.name}
                        </AuthorName>
                    </UserWrapper>
                    
                    <Likes>
                        <FontAwesomeIcon 
                        icon={faHeart} 
                        size="xs" 
                        color="#212529" 
                        style={{ marginRight: "6px" }}
                        />
                        {likes}
                    </Likes>
                </BottomSection>
            </CardWrapper>
        </StyledLink>
        </>
    );
};

export default PostCard;