import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const KnowledgeBase = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [isShow, setIsShow] = useState(false);
  const [dataPage, setDataPage] = useState([]);
  const [searchData, setSearchData] = useState([]);
  const [page, setPage] = useState(0);

  const getBlogData = () => {
    axios
      .get(`https://printertales.herokuapp.com/blog?limit=6&page=${page}`)
      .then((res) => {
        setData(res.data);
      });
  };
  const getBlogDataForLength = () => {
    axios.get("https://printertales.herokuapp.com/blog").then((res) => {
      setDataPage(res.data);
    });
  };
  const getSearchBlog = () => {
    axios
      .get(`https://printertales.herokuapp.com/blog/search/${search}`)
      .then((res) => {
        setSearchData(res.data);
      });
  };

  const handleSearch = (e) => {
    setSearch(e.target.value);
    if (e.target.value == "") {
      setSearchData([]);
    }
  };

  const pageCounter = (value) => {
    setPage(page + value);
  };

  useEffect(() => {
    getSearchBlog();
  }, [search]);
  useEffect(() => {
    getBlogDataForLength();
  }, []);

  useEffect(() => {
    getBlogData();
  }, [page]);

  return (
    <div className="knowledgeBase-container">
      <div className="banner">
        <div className="banner-search">
          <h1 className="search-heading">Welcome To Knowledge Base</h1>
          <input
            onChange={handleSearch}
            type="text"
            className="help-inputBox"
            placeholder="How Can We Help You..."
            onClick={() => setIsShow(true)}
          />
          {isShow ? (
            <div className="toggleBoxforSearch">
              <ul>
                {searchData.map((item, index) => (
                  <div key={index}>
                    <Link to={item._id} className="search-title">
                      {item.title}
                    </Link>{" "}
                    <br />
                  </div>
                ))}
              </ul>
            </div>
          ) : null}
        </div>
      </div>
      <div className="popular-brands" onClick={() => setIsShow(false)}>
        <div className="knowledgeBase-cards">
          {data.map((el, index) => (
            <KnowledgeBaseBlogs
              title={el.title}
              key={index}
              id={el._id}
              image={el.image}
              description={el.desc}
              date={el.date}
              author={el.author}
            />
          ))}
        </div>

        {/* Pagination */}
        <div className="pagination">
          <button
            className="prev-page-btn"
            onClick={() => {
              if (page >= 1) {
                pageCounter(-6);
              }
            }}
            disabled={page <= 0}>
            Prev
          </button>
          <button
            className="next-page-btn"
            onClick={() => {
              pageCounter(6);
            }}
            disabled={page >= dataPage.length - 6}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

const KnowledgeBaseBlogs = (props) => {
  return (
    <div key={props.key} className="knowledgeBase_card">
      <div className="productImage-div">
        <Link to={`/knowledge/${props.id}`}>
          <img src={props.image} className="productImage" alt="something" />
        </Link>
      </div>
      <div className="productDesc-div">
        <h3 className="product-date">
          {props.date}&nbsp;&nbsp; By <span>{props.author}</span>{" "}
        </h3>
        <Link to={`/knowledge/${props.id}`} className="product-title">
          {props.title}
        </Link>
        <p className="product-about">{props.description}</p>
      </div>
      <div className="readMore-div">
        <Link to={`/knowledge/${props.id}`} className="readMore-btn">
          Read More
        </Link>
      </div>
    </div>
  );
};
