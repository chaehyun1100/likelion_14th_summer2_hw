import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faImage } from "@fortawesome/free-regular-svg-icons";
import { faWifi,faArrowUp, faCaretDown, faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px 16px;
    margin-bottom: 32px;
`;
const SubLeft = styled.div`
    display: flex;
    gap:20px;
`;
const Item1 = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 18px;
    font-weight: bold;
    color: #212529;
    padding-bottom: 8px;
    border-bottom: 2px solid #212529;
    cursor: pointer;
`;
const Item = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 18px;
    color: #868e96;
    padding-bottom: 8px;
    cursor: pointer;
`;
const SubRight = styled.div`
    display: flex;
    flex-direction: row;
`;
const Filter = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
`;
const Dropdown = styled.button`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100px;
    height: 32px;
    background-color: #FFFFFF;
    font-size: 14px;
    border: none;
    border-radius: 4px;
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.1);
    cursor: pointer;
`;
const Extra = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 24px;
    height: 24px;
    background: transparent;
    border: none;
    color: #868e96;
    cursor: pointer;
    margin-top: 4px;
    margin-left: 10px;
`;
const MoreIcon = styled(FontAwesomeIcon)`
    font-size: 20px;
`
const DropdownText = styled.span`
    font-size: 14px;
    color: #495057;
    font-weight: bold;
`
const CaretIcon = styled(FontAwesomeIcon)`
    font-size: 12px;
    color: #495057;
`
const SubHeader = () => {
    return (
        <>
            <Container>
                <SubLeft>
                    <Item1>
                        <FontAwesomeIcon 
                        icon={ faArrowUp }
                        style={{color: "rgb(27, 29, 33)",}} 
                        />
                        트렌딩</Item1>
                    <Item>
                        <FontAwesomeIcon 
                        icon={faImage} 
                        style={{color: "#868e96",}} 
                        />
                        추천</Item>
                    <Item>
                        <FontAwesomeIcon 
                        icon={faClock} 
                        style={{color: "#868e96",}} 
                        />
                        최신</Item>
                    <Item>
                        <FontAwesomeIcon 
                        icon={faWifi} 
                        style={{color: "#868e96",}} 
                        />
                        피드</Item>
                </SubLeft>
                <SubRight>
                    <Filter>
                        <Dropdown>
                            <DropdownText>이번 주</DropdownText>
                            <CaretIcon icon={faCaretDown} />
                        </Dropdown>
                    </Filter>
                    <Extra>
                        <MoreIcon icon={faEllipsisVertical} />
                    </Extra>
                </SubRight>
            </Container>
        </>
    )
}

export default SubHeader;