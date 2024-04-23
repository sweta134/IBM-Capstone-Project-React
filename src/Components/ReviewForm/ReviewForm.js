import {Table, Button} from 'react-bootstrap';
import "reactjs-popup/dist/index.css";
import GiveReviews from './GiveReviews';
import React, { useState } from 'react';

export default function ReviewForm() {
  const [reviews, setReviews] = useState("")

  const handleReview = function (review) {
    setReviews(review);
  }
  console.log(reviews)

  return (
    <div style={{margin: "auto", maxWidth: "800px", marginTop: "10%"}}>
      <h2 style={{marginBottom: "10px"}}>Reviews</h2>
      <Table responsive>
        <thead>
          <tr>
            <th>Serial Number</th>
            <th>Doctor Name</th>
            <th>Doctor Speciality</th>
            <th>Provide Feedback</th>
            <th>Review Given</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Dr. Michael Loe</td>
            <td>Cardiology</td>
            <td>
              {<GiveReviews />}
            </td>
            <td></td>
          </tr>
          <tr>
            <td>2</td>
            <td>Dr. Jason Lee</td>
            <td>Orthopedy</td>
            <td>
              {<GiveReviews />}
            </td>
            <td></td>
          </tr>
          <tr>
            <td>3</td>
            <td>Dr. Paula Boe</td>
            <td>Dermatology</td>
            <td>
              {/* {<GiveReviews onHandleReview={handleReview} />} */}
              <Button variant="primary" disabled size ='sm'>Review Submitted</Button>
              </td>
            <td>Great consultation</td>
          </tr>
        </tbody>
      </Table>
    </div>
  )
}