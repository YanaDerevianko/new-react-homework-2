import { CommentComponent } from "./CommentComponent/CommentComponent";


import React from "react";

export const CommentComponentWrapper = () => {

  const paragraphStyles = {
    fontSize: '22px',
    fontWeight: 'bold'
    
  };
  return (
    <div>
      <CommentComponent>
        <img width='250px' height='250px'
          src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
          alt="avatar"
        />
        <p style={paragraphStyles} className="user-name"> John Smith</p>
        <p className="comment">
          Wow, this video blew my mind! I can't believe how informative and
          entertaining it was. I learned so much from watching this. Keep up the
          great work!
        </p>
      </CommentComponent>
    </div>
  );
};
