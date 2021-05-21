import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { selectUserInput, setBlogData } from "../features/userSlice";

import "../styling/foods.css";

const Foods = () => {
  const searchInput = useSelector(selectUserInput);
  const blog_url = `https://gnews.io/api/v4/search?q=${searchInput}&token=8b3bf582683fc93dee056cbd78f9eb97`;
  const dispatch = useDispatch();
  const [blogs, setBlogs] = useState();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(blog_url)
      .then((response) => {
        dispatch(setBlogData(response.data));
        setBlogs(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [searchInput]);

  return (
    <div className="food__page">
      <h1 className="food_page_header">Dishes</h1>
      {loading ? <h1 className="loading">Loading...</h1> : ""}
      <div className="foods">
        {blogs?.articles?.map((blog) => (
          <a className="food">
            <img src={blog.image} />
            <div>
              
             
              
            </div>
          </a>
        ))}

        {blogs?.totalArticles == 0 && (
          <h1 className="no__dishes">
            No dishes available Search something else to read.
          </h1>
        )}
      </div>
    </div>
  );
};

export default Foods;












