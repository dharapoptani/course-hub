import React, { Children, useEffect } from "react";
import OngoingCourseCard from "./OngoingCourseCard";
import { userOrdersQuery } from "../../graphql/Queries";
import { useQuery } from "@apollo/client";
import useStore from "../../context/useStore";
import { Link } from "react-router-dom";
function MyCourses() {
  const { user, setMyCourses } = useStore();
  const { data, error, loading } = useQuery(userOrdersQuery, {
    variables: {
      userId: user.id,
    },
  });

  useEffect(() => {
    setMyCourses(data.getUserOrders);
  }, [data]);

  if (loading) return "loading";
  if (error) return "error";

  console.log(data);
  return (
    <>
      <nav className="shadow px-4 py-2 inline-block">
        <Link className="bg-red-700 text-white px-4 py-1" to="/create-course">
          create course
        </Link>
      </nav>
      <div className="px-4 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:px-16">
        {Children.toArray(
          data?.getUserOrders.map((a) => {
            return (
              <OngoingCourseCard name={a.name} image={a.image} id={a.id} />
            );
          })
        )}
      </div>
    </>
  );
}

export default MyCourses;
