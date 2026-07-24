import styled from "styled-components";
import dummyData from "../data/dummy_data.js";
import PostCard from "../components/PostCard.jsx";
import SubHeader from "../components/SubHeader.jsx";


const CardGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 32px;
    margin: 20px;
`;

const Home = () => {
    return (
        <>
        <SubHeader />

        <CardGrid>
            {dummyData.map((post) => (
                <PostCard key={post.id} post={post} />
            ))}
        </CardGrid>
        </>
    );
};

export default Home;