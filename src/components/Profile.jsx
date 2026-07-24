import dummyData from "../data/dummy_data.js";
import styled from "styled-components";  


const ProfileWrapper = styled.div`
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

const Profile = ({author}) => {
    return (
        <>
            <ProfileWrapper>
                <ProfileLeft>
                    <ProfileAvatar src={author.avatar} alt={author.name}/>
                    <ProfileName>{author.name}</ProfileName>
                </ProfileLeft>
                <Follow>팔로우</Follow>
            </ProfileWrapper>
        </>
    )
}

export default Profile;
