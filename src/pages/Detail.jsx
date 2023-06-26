import React from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

const Detail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const todos = useSelector((state) => state.todos);
  const reviews = useSelector((state) => state.reviews);

  const todo = todos.filter((todo) => todo.id === id)[0];
  const review = reviews.filter((review) => review.id === id)[0];

  return (
    <div>
      {todo.id}
      <br />
      {todo.title}
      <br />
      {todo.body}
      <br />
      {todo.isDone.toString()}
      <br />
      <button onClick={() => navigate("/")}>이전 화면으로</button>
      <div>
        <form>
          <label>댓글</label>
          <input type="text" value={review}></input>
          <button>댓글 추가</button>
          <div>
            <p>리뷰입니다.</p>
            <button>댓글 삭제</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Detail;
