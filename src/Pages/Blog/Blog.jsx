import React from "react";
import useTitle from "../../hooks/useTitle";

const Blog = () => {
  useTitle("Blogs");

  return (
    <div className="mt-4 text-black">
      <div className="bg-slate-200  py-0 ">
        <div>
          <div>
            <div className="px-10 pb-12">
              <p className="text-center pt-6  text-primary font-bold text-5xl">
                Question and Answer blog
              </p>
              <p className="text-2xl mt-8">
                1.{" "}
                <span>
                  What is an access token and refresh token? How do they work
                  and where should we store them on the client-side?
                </span>
              </p>
              <p>
                <span className="font-semibold text-xl">Answer :</span>
                Access token is credential used application to access protect
                and use authorization and sed data user .Is is use all api.{" "}
                <br />
                Refresh token is user credential user new access token when the
                current access token expires. then refresh token new create
                access token user. <br />
                Access token and refresh token we should store best way to
                browser cookies and second way localStorage
              </p>
              <p className="text-2xl mt-8">
                2. <span>Compare SQL and NoSQL databases?</span>
              </p>
              <p>
                <span className="font-semibold text-xl">Answer :</span> When we kept the data in the database then SQL keep the data table format. <br />
                NoSQL databases are unstructured, do not use SQL, and have flexible schemas. They scale well and are suitable for handling unstructured data with eventual consistency.
              </p>
              <p className="text-2xl mt-8">
                3. <span>What is express js? What is Nest JS ?</span>
              </p>
              <p>
                <span className="font-semibold text-xl">Answer :</span>Express.js is a lightweight web application framework for Node.js, while NestJS is a scalable and efficient framework built on top of Express.js with additional features like dependency injection and module-based architecture.
              </p>
              <p className="text-2xl mt-8">
                4. <span>What is MongoDB aggregate and how does it work?</span>
              </p>
              <p>
                <span className="font-semibold text-xl">Answer :</span>MongoDB s aggregate function is used for data processing and analysis in collections. It applies a series of stages to transform and manipulate data. Each stage performs specific operations on the data, such as filtering, sorting, grouping, and aggregation. The stages are applied sequentially to process and generate the desired result.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
