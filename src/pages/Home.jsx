import Editor from "../component/Editor";


const Home = () => {    
    return (

     <div>
      <Editor
         onsubmit={() => {
            alert("작성 완료 버튼을 클릭했음");
         }}
          />
     </div>
    );
};
export default Home;