import moment from "moment/moment";
import React from "react";
import { Card, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaRegBookmark, FaShareAltSquare, FaRegEye, FaRegStar, FaStar } from "react-icons/fa";
import Rating from "react-rating";

const NewsCard = ({ news }) => {
  const { _id, title, details, image_url, author, total_view, rating } = news;
  return (
    <Card className="mb-4">
      <Card.Header className="d-flex align-items-center">
        <Image style={{ height: "40px" }} src={author?.img} roundedCircle />
        <div className="ps-2 flex-grow-1">
          <p className="mb-0">{author?.name}</p>
          <p className="mb-0">
            <small>
              {" "}
              {moment(author?.published_date).format("yyyy-MM-D")}{" "}
            </small>
          </p>
        </div>
        <div className="text-body-tertiary">
          <FaRegBookmark></FaRegBookmark>
          <FaShareAltSquare></FaShareAltSquare>
        </div>
      </Card.Header>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Img variant="top" src={image_url} />
        <Card.Text>
          {details.length < 250 ? (
            <>{details}</>
          ) : (
            <>
              {details.slice(0, 250)}...
              <Link
                className="text-decoration-none text-danger fw-semibold"
                to={`/news/${_id}`}
              >
                Read More
              </Link>
            </>
          )}
        </Card.Text>
      </Card.Body>
      <Card.Footer className="text-muted d-flex align-items-center">
        <div className="flex-grow-1 align-items-center">
          <Rating
          placeholderRating={rating?.number}
            readonly
            emptySymbol={<FaRegStar></FaRegStar>}
            placeholderSymbol={<FaStar className="text-warning"></FaStar>}
            fullSymbol={<FaStar></FaStar>}
          >
          </Rating>
          <span>{rating?.number}</span>
        </div>
        <div className="d-flex align-items-center text-body-tertiary">
          <FaRegEye></FaRegEye>
          <p className="ps-2 mb-0"> {total_view}</p>
        </div>
      </Card.Footer>
    </Card>
  );
};

export default NewsCard;
