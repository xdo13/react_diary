import { useNavigate } from "react-router-dom";
import Header from "../component/Header";
import Button from "../component/Button";
import Editor from "../component/Editor";

const New = () =>{
    const navigate = useNavigate();
    const goBack = () => {
        navigate(-1);
    };
    return(
        <div>
            <Header
                title={"새 일기 쓰기"}
                leftChild={<Button text={"< 뒤로 가기"} onClick={goBack} />}
            />
            <Editor />
        </div>
    );
};
export default New;